import { create } from "zustand";
import type { DashboardData, DateRange, UserType } from "@/src/types/dashboard";

type DashboardState = {
  range: DateRange;
  userType: UserType;
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  setRange: (range: DateRange) => void;
  setUserType: (userType: UserType) => void;
  fetchData: () => Promise<void>;
  refresh: () => Promise<void>;
};

const fetchJson = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
};

export const useDashboardStore = create<DashboardState>((set, get) => ({
  range: "12m",
  userType: "All",
  data: null,
  loading: false,
  error: null,
  setRange: (range) => set({ range }),
  setUserType: (userType) => set({ userType }),
  fetchData: async () => {
    const { range, userType } = get();
    const query = new URLSearchParams({ range, userType });

    set({ loading: true, error: null });

    try {
      const [stats, revenue, orders, users, traffic] = await Promise.all([
        fetchJson<{ data: DashboardData["kpis"] }>(`/api/stats?${query}`),
        fetchJson<{ data: DashboardData["revenue"] }>(`/api/revenue?${query}`),
        fetchJson<{ data: DashboardData["orders"] }>(`/api/orders?${query}`),
        fetchJson<{ data: DashboardData["users"] }>(`/api/users?${query}`),
        fetchJson<{ data: DashboardData["traffic"] }>(`/api/traffic?${query}`),
      ]);

      set({
        data: {
          kpis: stats.data,
          revenue: revenue.data,
          orders: orders.data,
          users: users.data,
          traffic: traffic.data,
        },
        loading: false,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to load dashboard data.";
      set({ error: message, loading: false });
    }
  },
  refresh: async () => {
    await get().fetchData();
  },
}));

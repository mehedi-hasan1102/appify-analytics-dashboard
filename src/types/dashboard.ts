export type DateRange = "7d" | "30d" | "12m";

export type UserType = "All" | "Free" | "Premium" | "Enterprise";

export type KpiFormat = "currency" | "number" | "percent";

export type TrendDirection = "up" | "down";

export type Kpi = {
  id: string;
  label: string;
  value: number;
  change: number;
  trend: TrendDirection;
  format: KpiFormat;
};

export type RevenuePoint = {
  month: string;
  revenue: number;
};

export type OrdersPoint = {
  month: string;
  orders: number;
};

export type UserSlice = {
  name: string;
  value: number;
};

export type TrafficPoint = {
  source: string;
  value: number;
};

export type DashboardData = {
  kpis: Kpi[];
  revenue: RevenuePoint[];
  orders: OrdersPoint[];
  users: UserSlice[];
  traffic: TrafficPoint[];
};

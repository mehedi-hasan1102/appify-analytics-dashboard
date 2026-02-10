import type {
  DashboardData,
  DateRange,
  Kpi,
  OrdersPoint,
  RevenuePoint,
  TrafficPoint,
  UserSlice,
  UserType,
} from "@/src/types/dashboard";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const baseRevenue: RevenuePoint[] = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4100 },
  { month: "Mar", revenue: 5200 },
  { month: "Apr", revenue: 6100 },
  { month: "May", revenue: 7400 },
  { month: "Jun", revenue: 6800 },
  { month: "Jul", revenue: 7900 },
  { month: "Aug", revenue: 8600 },
  { month: "Sep", revenue: 9400 },
  { month: "Oct", revenue: 10100 },
  { month: "Nov", revenue: 11200 },
  { month: "Dec", revenue: 12300 },
];

const baseOrders: OrdersPoint[] = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 138 },
  { month: "Mar", orders: 160 },
  { month: "Apr", orders: 175 },
  { month: "May", orders: 192 },
  { month: "Jun", orders: 186 },
  { month: "Jul", orders: 205 },
  { month: "Aug", orders: 221 },
  { month: "Sep", orders: 236 },
  { month: "Oct", orders: 248 },
  { month: "Nov", orders: 271 },
  { month: "Dec", orders: 289 },
];

const baseUsers: UserSlice[] = [
  { name: "Free", value: 60 },
  { name: "Premium", value: 30 },
  { name: "Enterprise", value: 10 },
];

const baseTraffic: TrafficPoint[] = [
  { source: "Organic", value: 48 },
  { source: "Paid", value: 22 },
  { source: "Social", value: 18 },
  { source: "Referral", value: 12 },
];

const baseKpis: Kpi[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: 54230,
    change: 12.4,
    trend: "up",
    format: "currency",
  },
  {
    id: "users",
    label: "Total Users",
    value: 1245,
    change: 6.8,
    trend: "up",
    format: "number",
  },
  {
    id: "orders",
    label: "Orders",
    value: 342,
    change: -3.4,
    trend: "down",
    format: "number",
  },
  {
    id: "conversion",
    label: "Conversion Rate",
    value: 4.3,
    change: 1.1,
    trend: "up",
    format: "percent",
  },
];

const rangeMultiplier: Record<DateRange, number> = {
  "7d": 0.35,
  "30d": 0.7,
  "12m": 1,
};

const userTypeFactor: Record<UserType, number> = {
  All: 1,
  Free: 0.7,
  Premium: 0.55,
  Enterprise: 0.35,
};

const userDistribution: Record<UserType, UserSlice[]> = {
  All: baseUsers,
  Free: [
    { name: "Free", value: 100 },
    { name: "Premium", value: 0 },
    { name: "Enterprise", value: 0 },
  ],
  Premium: [
    { name: "Free", value: 0 },
    { name: "Premium", value: 100 },
    { name: "Enterprise", value: 0 },
  ],
  Enterprise: [
    { name: "Free", value: 0 },
    { name: "Premium", value: 0 },
    { name: "Enterprise", value: 100 },
  ],
};

const conversionAdjustments: Record<UserType, number> = {
  All: 0,
  Free: -0.4,
  Premium: 0.6,
  Enterprise: 1.1,
};

export function normalizeRange(value?: string | null): DateRange {
  if (value === "7d" || value === "30d" || value === "12m") {
    return value;
  }
  return "12m";
}

export function normalizeUserType(value?: string | null): UserType {
  if (value === "Free" || value === "Premium" || value === "Enterprise") {
    return value;
  }
  return "All";
}

export function buildStats(range: DateRange, userType: UserType): Kpi[] {
  const multiplier = rangeMultiplier[range] * userTypeFactor[userType];

  return baseKpis.map((kpi) => {
    if (kpi.id === "conversion") {
      return {
        ...kpi,
        value: Number((kpi.value + conversionAdjustments[userType]).toFixed(1)),
      };
    }

    const scaledValue = Math.round(kpi.value * multiplier);
    return {
      ...kpi,
      value: scaledValue,
    };
  });
}

export function buildRevenue(range: DateRange, userType: UserType): RevenuePoint[] {
  const multiplier = rangeMultiplier[range] * userTypeFactor[userType];
  return baseRevenue.map((point) => ({
    ...point,
    revenue: Math.round(point.revenue * multiplier),
  }));
}

export function buildOrders(range: DateRange, userType: UserType): OrdersPoint[] {
  const multiplier = rangeMultiplier[range] * userTypeFactor[userType];
  return baseOrders.map((point) => ({
    ...point,
    orders: Math.round(point.orders * multiplier),
  }));
}

export function buildUsers(range: DateRange, userType: UserType): UserSlice[] {
  const base = userDistribution[userType];
  const multiplier = rangeMultiplier[range];
  if (multiplier === 1) {
    return base;
  }
  return base.map((slice) => ({
    ...slice,
    value: Math.round(slice.value * multiplier),
  }));
}

export function buildTraffic(range: DateRange): TrafficPoint[] {
  const multiplier = rangeMultiplier[range];
  if (multiplier === 1) {
    return baseTraffic;
  }
  return baseTraffic.map((item) => ({
    ...item,
    value: Math.round(item.value * multiplier),
  }));
}

export function buildDashboardData(
  range: DateRange,
  userType: UserType
): DashboardData {
  return {
    kpis: buildStats(range, userType),
    revenue: buildRevenue(range, userType),
    orders: buildOrders(range, userType),
    users: buildUsers(range, userType),
    traffic: buildTraffic(range),
  };
}

export async function simulateDelay(ms = 550): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function getMonthLabels(): string[] {
  return months;
}

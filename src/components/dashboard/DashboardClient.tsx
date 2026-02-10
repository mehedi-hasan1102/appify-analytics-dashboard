"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import ChartCard from "@/src/components/dashboard/ChartCard";
import FilterBar from "@/src/components/dashboard/FilterBar";
import KpiSection from "@/src/components/dashboard/KpiSection";
import { useDashboardStore } from "@/src/store/dashboardStore";

const RevenueChart = dynamic(
  () => import("@/src/components/dashboard/charts/RevenueChart"),
  { ssr: false }
);
const OrdersChart = dynamic(
  () => import("@/src/components/dashboard/charts/OrdersChart"),
  { ssr: false }
);
const UserDistributionChart = dynamic(
  () => import("@/src/components/dashboard/charts/UserDistributionChart"),
  { ssr: false }
);
const TrafficSourceChart = dynamic(
  () => import("@/src/components/dashboard/charts/TrafficSourceChart"),
  { ssr: false }
);

export default function DashboardClient() {
  const {
    range,
    userType,
    data,
    loading,
    error,
    setRange,
    setUserType,
    fetchData,
    refresh,
  } = useDashboardStore();

  useEffect(() => {
    fetchData();
  }, [range, userType, fetchData]);

  const revenueData = data?.revenue ?? [];
  const ordersData = data?.orders ?? [];
  const usersData = data?.users ?? [];
  const trafficData = data?.traffic ?? [];

  const revenueEmpty = revenueData.length === 0;
  const ordersEmpty = ordersData.length === 0;
  const usersEmpty = usersData.length === 0;
  const trafficEmpty = trafficData.length === 0;

  return (
    <div className="flex flex-col gap-6">
      <FilterBar
        range={range}
        userType={userType}
        loading={loading}
        onRangeChange={setRange}
        onUserTypeChange={setUserType}
        onRefresh={refresh}
      />

      {error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      ) : null}

      <KpiSection kpis={data?.kpis} loading={loading} />

      <section className="grid gap-6 xl:grid-cols-2">
        <ChartCard
          title="Revenue Over Time"
          subtitle="Monthly performance"
          loading={loading}
          isEmpty={revenueEmpty}
        >
          {!revenueEmpty && <RevenueChart data={revenueData} />}
        </ChartCard>
        <ChartCard
          title="Orders Per Month"
          subtitle="Animated bar chart"
          loading={loading}
          isEmpty={ordersEmpty}
        >
          {!ordersEmpty && <OrdersChart data={ordersData} />}
        </ChartCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="User Distribution"
          subtitle="Free vs premium vs enterprise"
          loading={loading}
          isEmpty={usersEmpty}
        >
          {!usersEmpty && <UserDistributionChart data={usersData} />}
        </ChartCard>
        <ChartCard
          title="Traffic Sources"
          subtitle="Optional advanced breakdown"
          loading={loading}
          isEmpty={trafficEmpty}
        >
          {!trafficEmpty && <TrafficSourceChart data={trafficData} />}
        </ChartCard>
      </section>
    </div>
  );
}

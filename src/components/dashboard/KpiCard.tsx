"use client";

import type { Kpi } from "@/src/types/dashboard";

const formatValue = (kpi: Kpi): string => {
  if (kpi.format === "currency") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(kpi.value);
  }

  if (kpi.format === "percent") {
    return `${kpi.value.toFixed(1)}%`;
  }

  return new Intl.NumberFormat("en-US").format(kpi.value);
};

const TrendIcon = ({ trend }: { trend: "up" | "down" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d={
        trend === "up"
          ? "M4 12l6-6 6 6"
          : "M4 8l6 6 6-6"
      }
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type KpiCardProps = {
  kpi: Kpi;
};

export default function KpiCard({ kpi }: KpiCardProps) {
  const isPositive = kpi.trend === "up";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {kpi.label}
      </p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-semibold text-slate-900">
          {formatValue(kpi)}
        </p>
        <div
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700"
          }`}
        >
          <TrendIcon trend={kpi.trend} />
          {Math.abs(kpi.change).toFixed(1)}%
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {isPositive ? "Growth" : "Decline"} compared to last period
      </p>
    </div>
  );
}

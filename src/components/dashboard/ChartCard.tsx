"use client";

import type { ReactNode } from "react";

type ChartCardProps = {
  title: string;
  subtitle?: string;
  loading: boolean;
  isEmpty: boolean;
  children: ReactNode;
};

export default function ChartCard({
  title,
  subtitle,
  loading,
  isEmpty,
  children,
}: ChartCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          {subtitle ? (
            <p className="text-xs text-slate-500">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-4">
        {loading ? (
          <div className="h-[260px] w-full animate-pulse rounded-xl bg-slate-100" />
        ) : isEmpty ? (
          <div className="flex h-[260px] items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-500">
            No data available for the selected filters.
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

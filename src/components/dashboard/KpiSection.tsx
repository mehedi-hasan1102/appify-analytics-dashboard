"use client";

import type { Kpi } from "@/src/types/dashboard";
import KpiCard from "@/src/components/dashboard/KpiCard";

type KpiSectionProps = {
  kpis?: Kpi[];
  loading: boolean;
};

const skeletons = Array.from({ length: 4 }, (_, index) => index);

export default function KpiSection({ kpis, loading }: KpiSectionProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {loading || !kpis
        ? skeletons.map((item) => (
            <div
              key={item}
              className="h-[132px] rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />
              <div className="mt-4 h-7 w-32 animate-pulse rounded bg-slate-100" />
              <div className="mt-3 h-3 w-40 animate-pulse rounded bg-slate-100" />
            </div>
          ))
        : kpis.map((kpi) => <KpiCard key={kpi.id} kpi={kpi} />)}
    </section>
  );
}

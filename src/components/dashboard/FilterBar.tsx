"use client";

import type { DateRange, UserType } from "@/src/types/dashboard";

const rangeOptions: { label: string; value: DateRange }[] = [
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 12 months", value: "12m" },
];

const userOptions: UserType[] = ["All", "Free", "Premium", "Enterprise"];

type FilterBarProps = {
  range: DateRange;
  userType: UserType;
  loading: boolean;
  onRangeChange: (range: DateRange) => void;
  onUserTypeChange: (userType: UserType) => void;
  onRefresh: () => void;
};

export default function FilterBar({
  range,
  userType,
  loading,
  onRangeChange,
  onUserTypeChange,
  onRefresh,
}: FilterBarProps) {
  return (
    <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-slate-900">Dashboard Overview</p>
        <p className="text-xs text-slate-500">
          Updated just now · Filters sync across KPIs and charts
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full bg-slate-100 p-1">
          {rangeOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onRangeChange(option.value)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                range === option.value
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={range === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
        <select
          value={userType}
          onChange={(event) => onUserTypeChange(event.target.value as UserType)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm outline-none transition focus:border-slate-400"
        >
          {userOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={onRefresh}
          disabled={loading}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Refreshing" : "Refresh"}
        </button>
      </div>
    </section>
  );
}

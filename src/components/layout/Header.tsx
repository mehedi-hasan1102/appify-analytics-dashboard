"use client";

import { useState } from "react";

type HeaderProps = {
  collapsed: boolean;
  onMenuClick: () => void;
  onToggleCollapse: () => void;
};

export default function Header({
  collapsed,
  onMenuClick,
  onToggleCollapse,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:text-slate-900 lg:hidden"
          aria-label="Open menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={onToggleCollapse}
          className="hidden rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:text-slate-900 lg:inline-flex"
          aria-label="Toggle sidebar"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={collapsed ? "M8 5l8 7-8 7" : "M16 5l-8 7 8 7"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Admin Analytics Dashboard
          </p>
          <p className="text-xs text-slate-500">Real-time business pulse</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-full border border-slate-200 p-2 text-slate-600 transition hover:text-slate-900"
          aria-label="Notifications"
        >
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 17a3 3 0 006 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:text-slate-900"
            aria-haspopup="menu"
            aria-expanded={open}
          >
            <span className="h-8 w-8 rounded-full bg-slate-200" />
            <span className="hidden text-sm lg:block">Mehedi Hasan</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {open ? (
            <div
              className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-2 text-sm shadow-lg"
              role="menu"
            >
              <button
                type="button"
                className="w-full rounded-lg px-3 py-2 text-left text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                role="menuitem"
              >
                View profile
              </button>
              <button
                type="button"
                className="w-full rounded-lg px-3 py-2 text-left text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                role="menuitem"
              >
                Settings
              </button>
              <button
                type="button"
                className="w-full rounded-lg px-3 py-2 text-left text-rose-600 transition hover:bg-rose-50"
                role="menuitem"
              >
                Sign out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

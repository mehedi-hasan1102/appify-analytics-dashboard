"use client";

import type { ReactNode } from "react";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
};

type NavItem = {
  label: string;
  icon: ReactNode;
  active?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    active: true,
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 12h8V3H3v9zm10 9h8v-6h-8v6zm0-8h8V3h-8v10zM3 21h8v-7H3v7z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Analytics",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 19h16M6 17V9m6 8V5m6 12v-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Settings",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 8a4 4 0 100 8 4 4 0 000-8z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4.93 6.93l1.41 1.41m10.39 10.39l1.41 1.41M3 12h2m14 0h2M4.93 17.07l1.41-1.41m10.39-10.39l1.41-1.41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Sidebar({
  collapsed,
  mobileOpen,
  onToggleCollapse,
  onCloseMobile,
}: SidebarProps) {
  return (
    <>
      <aside
        className={`hidden h-screen border-r border-slate-800/60 bg-slate-950 text-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:flex-col lg:py-6 transition-all duration-300 ${
          collapsed ? "lg:w-20" : "lg:w-64"
        }`}
      >
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-slate-800 text-center text-lg font-semibold leading-9">
              A
            </div>
            {!collapsed && (
              <span className="text-lg font-semibold">Appify</span>
            )}
          </div>
          <button
            type="button"
            onClick={onToggleCollapse}
            className="rounded-lg border border-slate-800 p-1 text-slate-300 transition hover:text-white"
            aria-label="Toggle sidebar"
          >
            <svg
              width="16"
              height="16"
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
        </div>
        <nav className="mt-6 flex flex-1 flex-col gap-2 px-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                item.active
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              } ${collapsed ? "justify-center" : "justify-start"}`}
              title={item.label}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="px-4">
          {!collapsed && (
            <div className="rounded-xl bg-white/5 p-3 text-xs text-slate-300">
              Upgrade to Pro for advanced analytics and exports.
            </div>
          )}
        </div>
      </aside>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 lg:hidden"
          onClick={onCloseMobile}
        >
          <aside
            className="h-full w-72 bg-slate-950 text-white"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-5">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-slate-800 text-center text-lg font-semibold leading-9">
                  A
                </div>
                <span className="text-lg font-semibold">Appify</span>
              </div>
              <button
                type="button"
                onClick={onCloseMobile}
                className="rounded-lg border border-slate-800 p-1 text-slate-300 transition hover:text-white"
                aria-label="Close sidebar"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6l-12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-4 flex flex-col gap-2 px-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    item.active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}

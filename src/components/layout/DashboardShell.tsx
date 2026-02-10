"use client";

import { useEffect, useState } from "react";
import Header from "@/src/components/layout/Header";
import Sidebar from "@/src/components/layout/Sidebar";

type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => {
      if (media.matches) {
        setMobileOpen(false);
      }
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 transition-[padding] duration-300 ${
        collapsed ? "lg:pl-20" : "lg:pl-64"
      }`}
    >
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <div className="flex min-h-screen flex-col">
        <Header
          collapsed={collapsed}
          onMenuClick={() => setMobileOpen(true)}
          onToggleCollapse={() => setCollapsed((prev) => !prev)}
        />
        <main className="flex-1 px-6 pb-10 pt-6">{children}</main>
      </div>
    </div>
  );
}

"use client";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-slate-900 text-white">
      <div className="p-4 text-xl font-bold">Appify</div>
      <nav className="p-4 space-y-2">
        <button className="block w-full text-left">Dashboard</button>
        <button className="block w-full text-left">Analytics</button>
        <button className="block w-full text-left">Settings</button>
      </nav>
    </aside>
  );
}

"use client";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4">
      <div className="font-semibold">Analytics Dashboard</div>
      <div className="flex items-center gap-4">
        <span> test</span>
        <div className="rounded-full bg-slate-200 h-8 w-8" />
      </div>
    </header>
  );
}

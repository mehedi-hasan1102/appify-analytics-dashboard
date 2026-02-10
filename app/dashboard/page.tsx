import Header from "@/src/components/layout/Header";
import Sidebar from "@/src/components/layout/Sidebar";


export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-slate-50 flex-1">
          Dashboard content goes here
        </main>
      </div>
    </div>
  );
}

import DashboardClient from "@/src/components/dashboard/DashboardClient";
import DashboardShell from "@/src/components/layout/DashboardShell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardClient />
    </DashboardShell>
  );
}

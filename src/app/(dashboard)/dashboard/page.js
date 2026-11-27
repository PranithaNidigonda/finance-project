import { PageHeader } from "@/components/ui/PageHeader";
import SystemStatus from "@/components/SystemStatus";
import DesignPreview from "@/components/DesignPreview";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Phase 0 foundation. Financial widgets arrive in Phase 5."
      />
      <div className="space-y-6">
        <SystemStatus />
        <DesignPreview />
      </div>
    </>
  );
}
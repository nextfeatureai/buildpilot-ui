import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { AIChat } from "@/components/dashboard/AIChat";
import { FeatureCards } from "@/components/dashboard/FeatureCards";
import { UploadWidget } from "@/components/dashboard/UploadWidget";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex-1 flex">
        {/* Center panel - AI Chat */}
        <div className="flex-1 flex flex-col border-r border-border/50">
          <AIChat />
        </div>

        {/* Right panel - Features & Upload */}
        <div className="w-96 flex flex-col border-l border-border/50 overflow-y-auto max-h-screen">
          {/* Feature cards */}
          <div className="border-b border-border/50">
            <FeatureCards />
          </div>

          {/* Upload widget */}
          <div className="p-4">
            <UploadWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

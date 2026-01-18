// src/app/trainer/dashboard/page.tsx

import PageHeader from "@/src/components/PageHeader/PageHeader";
import SidebarProfile from "@/src/components/TrainerDashboard/SidebarProfile";
import TrainerOverview from "@/src/components/TrainerDashboard/TrainerOverview";
import TrainingRequests from "@/src/components/TrainerDashboard/TrainingRequests";

export default function TrainerDashboardPage() {
  return (
    <main className="bg-black text-white px-4 md:px-6 py-8">
         <PageHeader title ={"Trainer Dashboard"} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-25 gap-8">

        {/* LEFT SIDEBAR */}
        <aside className="order-2 lg:order-1 lg:col-span-7">
          {/* <SidebarProfile /> */}
          <SidebarProfile />
        </aside>

        {/* CENTER CONTENT */}
        <section className="order-2 lg:order-2 lg:col-span-12">
          <TrainerOverview />
        </section>

        {/* RIGHT PANEL */}
        <aside className="order-3 lg:order-3 lg:col-span-6">
          <TrainingRequests />
        </aside>

      </div>
    </main>
  );
}

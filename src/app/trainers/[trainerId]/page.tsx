// src/app/trainers/[trainerId]/page.tsx

import PageHeader from "@/src/components/PageHeader/PageHeader";
import AvailabilityCard from "@/src/components/TrainerDetails/AvailibiltyCard";
import TrainerMain from "@/src/components/TrainerDetails/TrainerMain";

type TrainerProps = {
   params : {
        trainerId : string ;

    }
}

export default function TrainerDetailsPage({params} : TrainerProps) {
  return (
    <main className="bg-black text-white px-4 md:px-6 py-10">
        {/* <PageHeader title ={"Trainings"}/> */}
        <PageHeader title ={"Trainer Details"} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-16 gap-8">
        

        {/* LEFT SIDE */}
        <aside className="lg:col-span-5 order-2 lg:order-1">
          <AvailabilityCard />
        </aside>


        {/* RIGHT SIDE */}
        <section className="lg:col-span-11 order-1 lg:order-2">
          <TrainerMain />
        </section>
    

      </div>
    </main>
  );
}

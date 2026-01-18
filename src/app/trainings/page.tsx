// src/app/trainings/page.tsx
import Navbar from "@/src/components/NavBar/NavBar";
import PageHeader from "@/src/components/PageHeader/PageHeader";
import ResultsSearch from "@/src/components/SearchBar/ResultsSearch";
import Filters from "@/src/components/Trainings/Filters";
import TrainerCard from "@/src/components/Trainings/TrainerCard";

export default function TrainingsPage() {
  return (
    <main className="bg-black min-h-screen px-6 py-10 text-white">
      
      <PageHeader title ={"Trainings"}/>
      <ResultsSearch />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <aside className="lg:col-span-1 bg-white text-black rounded-xl p-6">
          <Filters />
        </aside>

        {/* Results */}
        <div className="lg:col-span-3 ">
          <p className="text-gray-400 text-center mb-6">Showing 6–10 of 100 results</p>
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          

          {Array.from({ length: 12 }).map((_, i) => (
            <TrainerCard key={i} />
          
          ))}
        </section>
        </div>

      </div>
    </main>
  );
}

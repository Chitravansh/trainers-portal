// components/HeroSection.tsx
import SearchBar from "../SearchBar/SearchBar";

export default function HeroSection() {
  return (
    <section className=" min-h-screen
        flex flex-col
        items-center
        justify-center
        text-center
        text-white
        pt-10">
      <h1 className="text-5xl font-bold mb-4">
        Get Your Staff / Students Trained Today!
      </h1>

      <p className="text-gray-300 mb-8">
        Connecting Organisations With Trainers : Making The Workforce Industry Ready 
      </p>

      <div className="flex justify-center py-2 gap-4 mb-10">
        <button className="bg-teal-500 px-6 py-3 rounded-lg text-white hover:text-cyan-300">
          Find Training
        </button>
        <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-cyan-300">
          Find Trainer
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-5 w-full flex justify-center">
        <SearchBar />
      </div>
  
    </section>
  );
}

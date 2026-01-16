// components/HeroSection.tsx
import SearchBar from "../SearchBar/SearchBar";

export default function HeroSection() {
  return (
    <section className="text-center text-white py-32">
      <h1 className="text-5xl font-bold mb-4">
        Find Your Dream Training Today!
      </h1>

      <p className="text-gray-300 mb-8">
        Connecting Talent with Opportunity: Your Gateway to Career Success
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-teal-500 px-6 py-3 rounded-lg text-white hover:text-cyan-300">
          Find Training
        </button>
        <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-cyan-300">
          Find Trainer
        </button>
      </div>

      <SearchBar />
    </section>
  );
}

import Image from "next/image";
import Navbar from "../components/NavBar/NavBar";
import HeroSection from "../components/Hero/HeroSection";
import StatsSection from "../components/StatsSection/StatsSection";
import Organisations from "../components/Organisations/Organisations";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Organisations />

    </main>
  
  );
}

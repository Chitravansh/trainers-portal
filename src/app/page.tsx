import Image from "next/image";
import Navbar from "../components/NavBar/NavBar";
import HeroSection from "../components/Hero/HeroSection";
import StatsSection from "../components/StatsSection/StatsSection";
import Organisations from "../components/Organisations/Organisations";
import SearchBar from "../components/SearchBar/SearchBar";
import PWAInstallButton from "../components/PWA/PWAInstallButton";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black">
      
      <HeroSection />
      <StatsSection />
      <Organisations />
      <PWAInstallButton />
    </main>
  
  );
}

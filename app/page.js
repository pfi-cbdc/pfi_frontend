import HeroSection from "../components/HeroSection";
import { Spotlight } from "../components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-zinc-950">
      <div className="pt-12 mt-8">
        <div className="m-6">
          <Spotlight
            className="-top-20 left-0 md:left-40 md:-top-20"
            fill="yellow"
          />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

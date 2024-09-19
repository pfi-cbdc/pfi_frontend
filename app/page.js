import HeroSection from "../components/HeroSection";
import { Spotlight } from "../components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-24 mt-10">
      <div className="m-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
        <HeroSection />
      </div>
      
    </div>
    
  );
}

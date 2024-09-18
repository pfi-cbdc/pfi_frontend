import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="pt-24 m-10">Home page</h1>
      <div className="m-10">
        <HeroSection />
      </div>
      
    </div>
    
  );
}

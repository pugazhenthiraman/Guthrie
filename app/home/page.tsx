import { Hero } from "@/components/sections/Hero";
import { CoreValues } from "@/components/sections/CoreValues";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LandmarksReel } from "@/components/sections/LandmarksReel";

export default function HomePage() {
  return (
    <div className="space-y-32 sm:space-y-40 md:space-y-48 lg:space-y-64">
      <Hero />
      <LandmarksReel />
      <CoreValues />
      <ServicesSection />
    </div>
  );
}

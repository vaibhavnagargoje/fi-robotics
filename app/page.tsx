import type { Metadata } from "next";
import HeroSection        from "@/components/sections/home/HeroSection";
import ProblemSection     from "@/components/sections/home/ProblemSection";
import VideoShowcase      from "@/components/sections/home/VideoShowcase";
import HighlightsSection  from "@/components/sections/home/HighlightsSection";

export const metadata: Metadata = {
  title: "Intelligence Factory — Human Intelligence for Robots",
  description:
    "We build foundation models for physical autonomy — powered by the largest collection of human demonstration data on Earth.",
};

export default function HomePage() {
  return (
    <div className="page-enter flex flex-col">
      <HeroSection />
      <ProblemSection />
      <VideoShowcase />
      <HighlightsSection />
    </div>
  );
}


import CandidateSection from "@/components/home/candidate-section";
import HeroSection from "@/components/home/hero-section";

import ReviewSection from "@/components/home/review-section";
import React from "react";

const HomePage = async ({ searchParams }: { searchParams: Promise<Record<string, unknown>> }) => {
  return (
    <div>
      <div className="relative">
        <div className="hero-section-gradient  w-[80%] h-[90%] mx-auto blur-2xl rounded-full absolute inset-0 -top-[60%] -z-10"></div>
        <HeroSection />
        <CandidateSection searchParams={searchParams} />
      </div>
      <ReviewSection />
    </div>
  );
};

export default HomePage;

import HeroSection from "@/components/home/hero-section";
import JobsSection from "@/components/home/jobs-section";
import ReviewSection from "@/components/home/review-section";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <div className="hero-section-gradient  w-[80%] h-[90%] mx-auto blur-2xl rounded-full absolute inset-0 -top-[60%] -z-10"></div>
        <HeroSection />
        <JobsSection />
      </div>
      <ReviewSection />
    </div>
  );
};

export default HomePage;

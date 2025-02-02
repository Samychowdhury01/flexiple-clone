import HeroSection from '@/components/home/hero-section';
import JobsSection from '@/components/home/jobs-section';
import ReviewSection from '@/components/home/review-section';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <JobsSection/>
      <ReviewSection/>
    </div>
  );
};

export default HomePage;
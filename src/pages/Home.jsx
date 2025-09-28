import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import BiographySection from '../components/bio/BiographySection';
import StreamStats from '../components/stats/StreamStats.jsx';
import MotivationalQuotes from '../components/quotes/MotivationalQuotes';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BiographySection />
      <StreamStats />
      <MotivationalQuotes />
    </div>
  );
}
import React from 'react';
import { GlobalNav } from './components/GlobalNav';
import { HeroStack } from './components/HeroStack';
import { PromoBentoGrid } from './components/PromoBentoGrid';
import { AppleTVCarousel } from './components/AppleTVCarousel';
import { GlobalFooter } from './components/GlobalFooter';
import { StickyFloatingPill } from './components/StickyFloatingPill';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#ffffff] text-[#1d1d1f]">
      {/* Fixed 44px Glassmorphic Global Navigation + Announcement Ribbon */}
      <GlobalNav />

      <main role="main" className="w-full">
        {/* 3 Full-Bleed Hero Promo Modules (12px solid #ffffff vertical gap) */}
        <HeroStack />

        {/* 2-Column Promo Bento Grid (6 tiles, 12px gap) */}
        <PromoBentoGrid />

        {/* Endless Entertainment Apple TV+ & Services Carousel */}
        <AppleTVCarousel />
      </main>

      {/* Global Sosumi Footnotes, 5-Column Directory, & Legal Footer */}
      <GlobalFooter />

      {/* Sticky Floating Controller Pill from /iphone-duo/ (scrollY > 250) */}
      <StickyFloatingPill />
    </div>
  );
};

export default App;

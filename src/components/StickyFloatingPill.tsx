import React, { useState, useEffect } from 'react';

interface SectionInfo {
  id: string;
  title: string;
}

const SECTIONS: SectionInfo[] = [
  { id: 'holiday-2026', title: 'Holiday Gifts' },
  { id: 'iphone-duo', title: 'iPhone Duo • Highlights' },
  { id: 'macbook-pro-proled-xdr', title: 'MacBook Pro • ProLED XDR' },
  { id: 'promo-bento-grid', title: 'Lineup • Bento Grid' },
  { id: 'apple-tv-carousel', title: 'Apple TV+ • Streaming' },
];

export const StickyFloatingPill: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(SECTIONS[0].title);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isGlobalPlaying, setIsGlobalPlaying] = useState(true);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);

          // Find current active section
          const viewportMid = window.innerHeight / 2;
          let currentActive = SECTIONS[0].title;
          let currentIdx = 0;

          for (let i = 0; i < SECTIONS.length; i++) {
            const el = document.getElementById(SECTIONS[i].id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
                currentActive = SECTIONS[i].title;
                currentIdx = i;
                break;
              } else if (rect.top <= viewportMid) {
                currentActive = SECTIONS[i].title;
                currentIdx = i;
              }
            }
          }

          setActiveSection(currentActive);
          setActiveIdx(currentIdx);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isExpanded = scrollY > 250;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleGlobalPlayback = () => {
    const nextPlaying = !isGlobalPlaying;
    setIsGlobalPlaying(nextPlaying);

    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      if (nextPlaying) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

  return (
    <div
      id="aap-media-card-gallery"
      className="all-access-pass aap-media-card-gallery"
      style={{
        position: 'fixed',
        bottom: '28px',
        left: '50%',
        transform: `translateX(-50%) scale(${isExpanded ? 1.0 : 1.3})`,
        width: isExpanded ? '267px' : '40px',
        height: '44px',
        zIndex: 9000,
        opacity: isExpanded ? 1 : 0,
        pointerEvents: isExpanded ? 'auto' : 'none',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        background: 'rgba(28, 28, 30, 0.82)',
        borderRadius: '980px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
        transition:
          'width 0.4s cubic-bezier(0.28, 0.11, 0.32, 1), transform 0.4s cubic-bezier(0.28, 0.11, 0.32, 1), opacity 0.3s ease',
      }}
    >
      <div className="flex h-full w-full items-center justify-between px-[14px]">
        {/* Left: Active Section Label + Quick Section Dots */}
        <div className="flex flex-col justify-center overflow-hidden pr-[8px]">
          <span className="truncate text-[12px] font-semibold tracking-[-0.01em] text-white">
            {activeSection}
          </span>
          {/* Quick Section Jump Dots */}
          <div className="flex items-center gap-[5px] mt-[2px]">
            {SECTIONS.map((sec, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <button
                  key={sec.id}
                  type="button"
                  aria-label={`Jump to ${sec.title}`}
                  onClick={() => scrollToSection(sec.id)}
                  className={`h-[4px] rounded-full transition-all duration-200 cursor-pointer ${
                    isCurrent ? 'w-[14px] bg-white' : 'w-[4px] bg-white/40 hover:bg-white/70'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Right: Master Play/Pause Controller */}
        <button
          type="button"
          aria-label={isGlobalPlaying ? 'Pause all media' : 'Play all media'}
          onClick={toggleGlobalPlayback}
          style={{
            transform: isExpanded ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(0.5, 0, 0, 0.5, 0, 0)',
            opacity: isExpanded ? 1 : 0,
            transition: 'transform 0.2s cubic-bezier(0.28, 0.11, 0.32, 1), opacity 0.2s ease',
          }}
          className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
        >
          {isGlobalPlaying ? (
            <svg width="10" height="10" viewBox="0 0 10 10" className="fill-current">
              <rect x="1.5" y="1" width="2.5" height="8" rx="0.5" />
              <rect x="6" y="1" width="2.5" height="8" rx="0.5" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" className="fill-current ml-[1px]">
              <path d="M2 1.2L8.8 5L2 8.8V1.2Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default StickyFloatingPill;

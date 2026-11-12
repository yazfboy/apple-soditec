import React, { useRef, useState, useEffect } from 'react';
import { HERO_MODULES, HeroPromoData } from '../data/appleHomeData';
import { useAppleScrollReveal } from '../hooks/useAppleScrollReveal';

interface HeroSectionProps {
  module: HeroPromoData;
  index: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ module, index }) => {
  const isDark = module.theme === 'dark';
  const isBottom = module.contentPosition === 'bottom';
  const isHeroFirst = index === 0;

  const { containerRef, copyRef, ctasRef, mediaRef } = useAppleScrollReveal<HTMLElement>({
    isHeroFirst,
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !module.videoUrl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isPlaying) {
            video.play().catch(() => {});
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    video.play().catch(() => {});

    return () => observer.disconnect();
  }, [module.videoUrl, isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={containerRef}
      id={module.id}
      data-tile-id={module.id}
      style={{ backgroundColor: module.bgColor }}
      className={`hero-section apple-hero-section relative w-full overflow-hidden select-none ${
        isDark ? 'theme-dark text-[#f5f5f7]' : 'text-[#1d1d1f]'
      }`}
    >
      {/* Full-bleed clickable overlay */}
      <a
        href={module.href}
        aria-label={module.headline}
        tabIndex={-1}
        aria-hidden="true"
        className="tile-link absolute inset-0 z-[1]"
      />

      {/* Top-centered Copy Stack with continuous scroll matrix reveal */}
      <div
        style={{
          paddingTop: '55px',
          textAlign: 'center',
          zIndex: 2,
        }}
        className={`tile-content relative z-[2] mx-auto flex h-full max-w-[980px] flex-col items-center px-[20px] pt-[55px] text-center pointer-events-none ${
          isBottom ? 'justify-end pb-[55px]' : 'justify-start'
        }`}
      >
        <div ref={copyRef} className="tile-copy-wrapper flex flex-col items-center">
          <h2
            className={`tile-headline typography-hero-headline ${
              isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
            }`}
          >
            {module.headline}
          </h2>
          <p
            className={`tile-subhead typography-hero-subhead mt-[6px] ${
              module.subheadGradient
                ? 'proled-xdr-gradient'
                : isDark
                  ? 'text-[#f5f5f7]'
                  : 'text-[#1d1d1f]'
            }`}
          >
            {module.subhead}
          </p>
        </div>

        {/* Dual Pill CTA Buttons (Exact Apple Spec with ~15% scroll stagger) */}
        <div
          ref={ctasRef}
          className="tile-ctas mt-[19px] flex flex-wrap items-center justify-center gap-[14px] pointer-events-auto"
        >
          {module.ctas.map((cta) => {
            const isPrimary = cta.variant === 'primary';
            if (isPrimary) {
              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  aria-label={cta.ariaLabel || `${cta.label}, ${module.headline}`}
                  style={{
                    borderRadius: '980px',
                    padding: '11px 21px',
                    fontSize: '17px',
                    lineHeight: 1.17648,
                    transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
                  }}
                  className="button button-primary inline-flex items-center justify-center rounded-[980px] bg-[#0071e3] hover:bg-[#0077ed] text-[#ffffff] text-[17px] font-normal leading-[1.17648] tracking-[-0.022em] px-[21px] py-[11px] border border-transparent transition-colors duration-200"
                >
                  {cta.label}
                </a>
              );
            }

            return (
              <a
                key={cta.label}
                href={cta.href}
                aria-label={cta.ariaLabel || `${cta.label}, ${module.headline}`}
                style={{
                  borderRadius: '980px',
                  padding: '11px 21px',
                  fontSize: '17px',
                  lineHeight: 1.17648,
                  transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
                }}
                className={`button button-secondary inline-flex items-center justify-center rounded-[980px] bg-transparent text-[17px] font-normal leading-[1.17648] tracking-[-0.022em] px-[21px] py-[11px] border transition-colors duration-200 ${
                  isDark
                    ? 'border-[#2997ff] text-[#2997ff] hover:bg-[#0071e3] hover:border-[#0071e3] hover:text-[#ffffff]'
                    : 'border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:border-[#0071e3] hover:text-[#ffffff]'
                }`}
              >
                {cta.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Product Visual / Video with Scale Interpolation */}
      <div
        ref={mediaRef}
        className="tile-image-wrapper absolute inset-0 z-0 flex items-end justify-center overflow-hidden"
      >
        {module.videoUrl ? (
          <video
            ref={videoRef}
            src={module.videoUrl}
            autoPlay
            muted
            playsInline
            loop={module.videoLoop !== false}
            poster={module.sources.largetall || module.sources.large}
            className="h-full w-full object-cover object-bottom"
          />
        ) : (
          <picture className="static h-full w-full flex items-end justify-center">
            <source
              srcSet={`${module.sources.small}, ${module.sources.small2x} 2x`}
              media="(max-width: 734px)"
            />
            <source
              srcSet={`${module.sources.medium}, ${module.sources.medium2x} 2x`}
              media="(max-width: 1067px)"
            />
            {module.sources.largetall && module.sources.largetall2x && (
              <source
                srcSet={`${module.sources.largetall}, ${module.sources.largetall2x} 2x`}
                media="(min-width: 1068px)"
              />
            )}
            <img
              src={module.sources.largetall || module.sources.large}
              alt={module.imageAlt}
              className="h-full w-full object-cover object-bottom"
            />
          </picture>
        )}
      </div>

      {/* Sleek Apple-style Play/Pause Circular Toggle Button for Videos */}
      {module.videoUrl && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? `Pause video for ${module.headline}` : `Play video for ${module.headline}`}
          className="absolute bottom-4 right-4 z-30 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors cursor-pointer"
        >
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 12 12" className="fill-current">
              <rect x="2" y="1.5" width="2.5" height="9" rx="0.5" />
              <rect x="7.5" y="1.5" width="2.5" height="9" rx="0.5" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" className="fill-current ml-[1.5px]">
              <path d="M2.5 1.5L10.5 6L2.5 10.5V1.5Z" />
            </svg>
          )}
        </button>
      )}
    </section>
  );
};

export const HeroStack: React.FC = () => {
  return (
    <div
      id="hero-stack"
      className="section-hero-stack flex w-full flex-col gap-[12px] bg-[#ffffff]"
    >
      {HERO_MODULES.map((module, idx) => (
        <HeroSection key={module.id} module={module} index={idx} />
      ))}
    </div>
  );
};

export default HeroStack;

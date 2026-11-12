import React, { useState, useEffect } from 'react';
import {
  APPLE_TV_CAROUSEL_SLIDES,
  ATV_PLUS_LOGO_LIGHT,
  FAM_GALLERY_SLIDES,
  FamGallerySlide,
} from '../data/appleHomeData';

const ServiceLogoSVG: React.FC<{ service: FamGallerySlide['service'] }> = ({ service }) => {
  if (service === 'arcade') {
    return (
      <svg viewBox="0 0 387 80" className="h-[15px] w-auto fill-white">
        <path d="M117.81,58.88H89.96l-6.68,19.75h-11.8L97.86,5.57h12.25l26.38,73.06h-12L117.81,58.88z M92.85,49.77h22.07l-10.89-32.05 h-0.3L92.85,49.77z M142.71,25.36h10.43v9.06h0.25c1.77-6.23,6.53-9.92,12.81-9.92c1.57,0,2.94,0.25,3.75,0.41v10.18 c-0.86-0.35-2.78-0.61-4.91-0.61c-7.04,0-11.39,4.71-11.39,12.25v31.9h-10.94V25.36z M209.95,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L209.95,43.69L209.95,43.69z M226.11,63.49c0-9.32,7.14-15.04,19.8-15.75l14.58-0.86v-4.1 c0-5.92-4-9.47-10.68-9.47c-6.33,0-10.28,3.04-11.24,7.8h-10.33c0.61-9.62,8.81-16.71,21.97-16.71c12.91,0,21.16,6.83,21.16,17.52 v36.71h-10.48v-8.76h-0.25c-3.09,5.92-9.82,9.67-16.81,9.67C233.4,79.54,226.11,73.06,226.11,63.49z M260.49,58.68v-4.2l-13.11,0.81 c-6.53,0.46-10.23,3.34-10.23,7.9c0,4.66,3.85,7.7,9.72,7.7C254.51,70.88,260.49,65.62,260.49,58.68z M279.06,52 c0-16.81,8.91-27.49,22.28-27.49c7.64,0,13.72,3.85,16.71,9.72h0.2V5.57h10.99v73.06H318.6v-9.06h-0.2 c-3.14,6.07-9.21,9.97-16.96,9.97C287.97,79.54,279.06,68.8,279.06,52z M290.25,52c0,11.24,5.42,18.28,14.08,18.28 c8.4,0,14.02-7.14,14.02-18.28c0-11.04-5.62-18.28-14.02-18.28C295.67,33.72,290.25,40.81,290.25,52z M385.16,62.98 c-1.52,9.72-10.73,16.66-22.93,16.66c-15.64,0-25.11-10.58-25.11-27.39c0-16.71,9.62-27.85,24.66-27.85c14.78,0,24,10.43,24,26.58 v3.75h-37.62v0.66c0,9.26,5.57,15.39,14.33,15.39c6.23,0,10.83-3.14,12.3-7.8C374.78,62.98,385.16,62.98,385.16,62.98z M348.2,47.08 h26.63c-0.25-8.15-5.42-13.87-13.06-13.87C354.13,33.21,348.76,39.03,348.2,47.08z M43.87,12.7c2.73-3.42,4.59-8.01,4.1-12.7 c-4,0.2-8.88,2.64-11.71,6.06c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.92,19.14 c-6.52-0.39-12.07,3.7-15.18,3.7c-3.12,0-7.89-3.51-13.04-3.41c-6.71,0.1-12.94,3.89-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83 c3.31,4.87,7.3,10.23,12.55,10.03c4.97-0.19,6.91-3.22,12.95-3.22c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74 c3.8-5.55,5.35-10.91,5.45-11.2c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1 C57.75,20.12,50.45,19.34,47.92,19.14" />
      </svg>
    );
  }
  if (service === 'music') {
    return (
      <svg viewBox="0 0 339 80" className="h-[15px] w-auto fill-white">
        <path d="M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 449 80" className="h-[15px] w-auto fill-white">
      <path d="M78.6,78.56V5.5h45.62v9.77H89.94v23.14h31.39v9.57H89.94v30.58H78.6z M131.86,11.22c0-3.49,2.83-6.28,6.33-6.28 c3.49,0,6.33,2.79,6.33,6.28c0,3.44-2.83,6.28-6.33,6.28C134.69,17.5,131.86,14.67,131.86,11.22z M132.72,25.3h10.94v53.26h-10.94 V25.3z M170.68,12.69V25.3h10.12v8.66h-10.12v29.36c0,4.61,2.02,6.68,6.48,6.68c1.11,0,2.89-0.1,3.59-0.25v8.66 c-1.21,0.3-3.64,0.51-6.08,0.51c-10.78,0-14.99-4.1-14.99-14.38V33.96h-7.75V25.3h7.75V12.69H170.68z M189.98,25.3h10.43v8.91h0.25 c2.89-6.08,8.56-9.82,16.76-9.82c11.75,0,18.48,7.49,18.48,19.69v34.48h-10.99V46.21c0-8-3.75-12.4-11.34-12.4 c-7.7,0-12.66,5.47-12.66,13.72v31.04h-10.94V25.3z M291.07,62.91c-1.52,9.72-10.73,16.66-22.93,16.66 c-15.64,0-25.11-10.58-25.11-27.39c0-16.71,9.62-27.85,24.66-27.85c14.78,0,24,10.43,24,26.58v3.75h-37.62v0.66 c0,9.26,5.57,15.39,14.33,15.39c6.23,0,10.84-3.14,12.3-7.8H291.07z M254.11,47.02h26.63c-0.25-8.15-5.42-13.87-13.06-13.87 C260.03,33.15,254.66,38.97,254.11,47.02z M319.62,24.34c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4 c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4 c-13.32,0-21.32-6.53-22.33-16.66h10.83c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79 l-8.66-2.02c-10.13-2.33-15.14-7.19-15.14-14.94C299.07,30.87,307.37,24.34,319.62,24.34z M369.08,24.34 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.83 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C348.52,30.87,356.83,24.34,369.08,24.34z M428.07,78.63h-9.97V56.93h-20.66v-9.87h20.66V25.37 h9.97v21.69h20.71v9.87h-20.71V78.63z M43.87,12.64C46.64,9.29,48.5,4.63,47.99,0c-3.98,0.16-8.8,2.65-11.66,6 c-2.56,2.96-4.81,7.71-4.2,12.25C36.57,18.59,41.11,15.99,43.87,12.64z M47.89,19.13c-6.52-0.48-12.05,3.64-15.13,3.64 c-3.13,0-7.96-3.54-13.07-3.44c-6.72,0.1-12.91,3.91-16.38,9.93c-6.98,12.11-1.78,30.06,5.02,39.89c3.33,4.8,7.29,10.22,12.5,10.02 c5.01-0.2,6.91-3.24,12.97-3.24c6.06,0,7.77,3.24,13.07,3.15c5.4-0.1,8.82-4.9,12.12-9.73c3.82-5.57,5.39-10.97,5.48-11.26 c-0.12-0.05-10.52-4.04-10.62-16.02c-0.09-10.02,8.18-14.83,8.55-15.07C57.7,20.08,50.45,19.32,47.89,19.13z" />
    </svg>
  );
};

// Verified Apple Telemetry Constants:
// Main TV+ slide width = 930px + 13px gap = 943px step
// FAM Services card width = 417px + 13px gap = 430px step
// Track transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1)
// Timed dotnav interval: --sk-dotnav-timed-duration: 4.16s (4160ms)
const TV_SLIDE_STEP_DESKTOP = 943;
const FAM_SLIDE_STEP = 430;
const TIMED_DURATION_MS = 4160;

export const AppleTVCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const totalSlides = APPLE_TV_CAROUSEL_SLIDES.length;

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, TIMED_DURATION_MS);
    return () => clearInterval(timer);
  }, [isPlaying, totalSlides]);

  return (
    <section
      id="apple-tv-carousel"
      className="section-endless-entertainment-gallery w-full bg-[#f5f5f7] pt-[53px] pb-[20px] overflow-hidden select-none"
    >
      {/* Section Headline */}
      <div className="media-gallery-headline-container mx-auto mb-[36px] max-w-[980px] px-[20px] text-center">
        <h2 className="media-gallery-headline typography-hero-headline text-[#1d1d1f]">
          Endless entertainment.
        </h2>
      </div>

      {/* Track 1: Main Apple TV+ Slider Track (ul.media-gallery-item-container) */}
      <div className="relative mx-auto flex h-[368px] md:h-[523px] w-full items-center justify-center overflow-hidden">
        <div className="relative h-[368px] w-[88vw] max-w-[688px] lg:h-[523px] lg:w-[930px] lg:max-w-[930px]">
          <ul
            className="media-gallery-item-container relative h-full w-full"
            style={{
              transform: `translate3d(${-activeIndex * TV_SLIDE_STEP_DESKTOP}px, 0px, 0px)`,
              transition: 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
            }}
          >
            {APPLE_TV_CAROUSEL_SLIDES.map((slide, idx) => {
              const isCurrent = idx === activeIndex;
              const progress = idx - activeIndex;
              return (
                <li
                  key={slide.id}
                  id={`endless-entertainment-gallery-item-${idx + 1}`}
                  style={
                    {
                      '--progress': progress,
                      opacity: 1,
                      transform: `translate(${idx * TV_SLIDE_STEP_DESKTOP}px, 0px)`,
                    } as React.CSSProperties
                  }
                  onClick={() => {
                    if (!isCurrent) setActiveIndex(idx);
                  }}
                  className={`media-gallery-item theme-dark absolute top-0 left-0 h-full w-full lg:w-[930px] overflow-hidden ${
                    isCurrent ? 'current current-item' : 'cursor-pointer'
                  }`}
                >
                  <a
                    href={slide.href}
                    onClick={(e) => {
                      if (!isCurrent) e.preventDefault();
                    }}
                    aria-label={`${slide.ctaText}, ${slide.title}`}
                    className="group relative block h-full w-full"
                  >
                    <picture className="block h-full w-full">
                      <source srcSet={slide.bgSmall} media="(max-width: 734px)" />
                      <source srcSet={slide.bgMedium} media="(max-width: 1068px)" />
                      <img
                        src={slide.bgLarge2x}
                        alt={slide.title}
                        className={`h-full w-full object-cover transition-opacity duration-500 ${
                          isCurrent ? 'opacity-100' : 'opacity-35 hover:opacity-50'
                        }`}
                      />
                    </picture>

                    {/* Top & Bottom Scrim Overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.65) 100%)',
                      }}
                    />

                    {/* Top Right Apple TV+ Logo */}
                    {slide.showAtvLogo && (
                      <img
                        src={ATV_PLUS_LOGO_LIGHT}
                        alt="Apple TV"
                        className="absolute top-[28px] right-[28px] h-[28px] w-auto object-contain"
                      />
                    )}

                    {/* Show Title Artwork Logo + Bottom Controls */}
                    <div
                      className={`absolute inset-x-0 bottom-0 flex flex-col items-start justify-end p-[28px] md:p-[38px] transition-opacity duration-500 ${
                        isCurrent ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={slide.logoSrc2x}
                        alt={slide.title}
                        className="md:hidden mb-[18px] max-h-[54px] w-auto object-contain"
                      />
                      <div className="flex flex-wrap items-center gap-[16px]">
                        <span className="inline-flex items-center justify-center rounded-[980px] bg-[#f5f5f7] group-hover:bg-white px-[21px] py-[11px] text-[14px] font-semibold leading-[1.2] text-[#1d1d1f] transition-colors">
                          {slide.ctaText}
                        </span>
                        <p className="text-[17px] leading-[1.25] text-white max-w-[560px]">
                          {slide.genre && (
                            <>
                              <strong className="font-semibold">{slide.genre}</strong>
                              <span className="mx-[6px]">·</span>
                            </>
                          )}
                          <span className="text-white/95">{slide.tagline}</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Track 2: Synchronized FAM Services Gallery Track (417px width + 13px gap = 430px step) */}
      <div className="mt-[14px] w-full overflow-hidden">
        <div className="relative mx-auto h-[234px] w-full max-w-[1440px]">
          <ul
            className="media-gallery-item-container relative h-[234px] w-full"
            style={{
              transform: `translate3d(${-activeIndex * FAM_SLIDE_STEP}px, 0px, 0px)`,
              transition: 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
            }}
          >
            {FAM_GALLERY_SLIDES.map((item, idx) => {
              const progress = idx - activeIndex;
              return (
                <li
                  key={item.id}
                  style={
                    {
                      '--progress': progress,
                      opacity: 1,
                      transform: `translate(${idx * FAM_SLIDE_STEP}px, 0px)`,
                      backgroundColor: item.bgColor,
                    } as React.CSSProperties
                  }
                  className="media-gallery-item theme-dark absolute top-0 left-[14px] h-[234px] w-[417px] shrink-0 overflow-hidden"
                >
                  <a
                    id={`media-gallery-item-${idx + 1}-link`}
                    href={item.href}
                    aria-label={`${item.ctaText}, ${item.title}`}
                    className="media-gallery-wrapper-link fam-media-gallery-wrapper-link group relative flex h-full w-full"
                  >
                    {item.isSquareAlbum ? (
                      /* Apple Music Split Album Layout */
                      <div className="flex h-full w-full items-center justify-between p-[19px]">
                        <img
                          src={item.imageSrc2x}
                          alt={item.title}
                          className="h-[196px] w-[196px] shrink-0 rounded-[8px] object-cover"
                        />
                        <div className="flex h-full flex-1 flex-col justify-between pl-[18px]">
                          <div className="flex justify-end">
                            <ServiceLogoSVG service={item.service} />
                          </div>
                          <p className="text-[14px] font-semibold leading-[1.28] text-white pr-[8px]">
                            {item.title}
                          </p>
                          <div className="flex justify-end">
                            <span className="inline-flex items-center justify-center rounded-[980px] bg-[#f5f5f7] group-hover:bg-white px-[15px] py-[7px] text-[14px] font-normal text-[#1d1d1f] transition-colors">
                              {item.ctaText}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Full-bleed Arcade / Fitness+ Layout */
                      <>
                        <img
                          src={item.imageSrc2x}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(rgba(29, 29, 31, 0.35) 0%, rgba(29, 29, 31, 0) 70px, rgba(29, 29, 31, 0) calc(100% - 70px), rgba(29, 29, 31, 0.55) 100%)',
                          }}
                        />
                        <div className="relative z-10 flex h-full w-full flex-col justify-between p-[20px]">
                          <div className="flex justify-end">
                            <ServiceLogoSVG service={item.service} />
                          </div>
                          <div className="flex items-center justify-between gap-[12px]">
                            <p className="text-[14px] font-semibold leading-[1.28] text-white">
                              {item.title}
                            </p>
                            <span className="shrink-0 inline-flex items-center justify-center rounded-[980px] bg-[#f5f5f7] group-hover:bg-white px-[15px] py-[7px] text-[14px] font-normal text-[#1d1d1f] transition-colors">
                              {item.ctaText}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Timed Dot Navigation & Play/Pause Controls (Verified Apple Telemetry) */}
      <div
        style={
          {
            '--sk-dotnav-variable-duration': '1000ms',
            '--sk-dotnav-timed-duration': '4.16s',
          } as React.CSSProperties
        }
        className={`media-gallery-dotnav dotnav dotnav-scrim-solid dotnav-timed ${
          !isPlaying ? 'dotnav-timed-paused' : ''
        } relative mx-auto mt-[18px] flex max-w-[1440px] items-center justify-center px-[22px]`}
      >
        <ul
          role="tablist"
          aria-label="Endless entertainment gallery"
          className="media-gallery-dotnav-items dotnav-items flex items-center gap-[14px]"
        >
          {APPLE_TV_CAROUSEL_SLIDES.map((slide, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <li
                key={slide.id}
                role="presentation"
                className={`media-gallery-dotnav-item dotnav-item ${isSelected ? 'current' : ''}`}
              >
                <button
                  type="button"
                  id={`endless-entertainment-gallery-item-${idx + 1}-trigger`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Item ${idx + 1}: ${slide.title}`}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    transitionProperty: 'width',
                    transitionDuration: '0.25s',
                    transitionTimingFunction: 'linear',
                  }}
                  className={`media-gallery-dotnav-link dotnav-link relative h-[8px] rounded-full overflow-hidden cursor-pointer ${
                    isSelected && isPlaying
                      ? 'w-[40px] bg-[#1d1d1f]/25'
                      : isSelected
                        ? 'w-[8px] bg-[#1d1d1f]'
                        : 'w-[8px] bg-[#1d1d1f]/30 hover:bg-[#1d1d1f]/60'
                  }`}
                >
                  {isSelected && isPlaying && (
                    <span
                      style={{
                        animation: 'dotnav-timed-animation 4.16s linear forwards',
                        transformOrigin: 'left center',
                      }}
                      className="block h-full w-full bg-[#1d1d1f] rounded-full"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Play / Pause Button on Right */}
        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-label={isPlaying ? 'Pause endless entertainment gallery' : 'Play endless entertainment gallery'}
          style={{
            transitionProperty: 'background-color',
            transitionDuration: '0.1s',
            transitionTimingFunction: 'linear',
          }}
          className="media-gallery-dotnav-iconcontrol dotnav-iconcontrol absolute right-[24px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#d2d2d7]/70 hover:bg-[#d2d2d7] text-[#1d1d1f] cursor-pointer"
        >
          {isPlaying ? (
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
    </section>
  );
};

export default AppleTVCarousel;

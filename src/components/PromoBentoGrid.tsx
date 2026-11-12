import React, { useRef, useState, useEffect } from 'react';
import { PROMO_BENTO_TILES, HeroPromoData } from '../data/appleHomeData';
import { useAppleScrollReveal } from '../hooks/useAppleScrollReveal';

interface PromoTileProps {
  tile: HeroPromoData;
  textPosition?: 'top' | 'bottom';
}

export const PromoTile: React.FC<PromoTileProps> = ({ tile, textPosition }) => {
  const isDark = tile.theme === 'dark';
  const resolvedPosition =
    textPosition || tile.textPosition || (tile.contentPosition === 'bottom' ? 'bottom' : 'top');
  const isSplit = tile.contentPosition === 'split';
  const isBottom = resolvedPosition === 'bottom' && !isSplit;

  const { containerRef, copyRef, ctasRef, mediaRef } = useAppleScrollReveal<HTMLDivElement>();

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !tile.videoUrl) return;

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
  }, [tile.videoUrl, isPlaying]);

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

  const renderCopy = () => (
    <>
      {tile.logoImage ? (
        <h3 className="tile-headline logo-image flex items-center justify-center">
          <picture className="headline" aria-hidden="true">
            <source
              srcSet={`${tile.logoImage.small}, ${tile.logoImage.small2x} 2x`}
              media="(max-width: 733px)"
            />
            <source
              srcSet={`${tile.logoImage.medium}, ${tile.logoImage.medium2x} 2x`}
              media="(max-width: 1067px)"
            />
            <source
              srcSet={`${tile.logoImage.large}, ${tile.logoImage.large2x} 2x`}
              media="(min-width: 1068px)"
            />
            <img
              src={tile.logoImage.large}
              alt=""
              style={{ width: `${tile.logoImage.width}px`, height: `${tile.logoImage.height}px` }}
              className="object-contain"
            />
          </picture>
          <span className="sr-only">{tile.headline}</span>
        </h3>
      ) : (
        <h3
          className={`tile-headline typography-promo-headline ${
            isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
          }`}
        >
          {tile.headline}
        </h3>
      )}

      {!isSplit && (
        <p
          style={tile.maxSubheadWidth ? { maxWidth: tile.maxSubheadWidth } : undefined}
          className={`tile-subhead typography-promo-subhead mt-[4px] ${
            isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
          }`}
        >
          {tile.subhead}
          {tile.superscript && (
            <sup className="text-[0.6em] leading-none align-super ml-[1px]">
              {tile.superscript}
            </sup>
          )}
        </p>
      )}
    </>
  );

  const renderCTAs = () => (
    <div
      ref={ctasRef}
      className="tile-ctas mt-[13px] flex flex-wrap items-center justify-center gap-[12px] pointer-events-auto"
    >
      {tile.ctas.map((cta) => {
        const isPrimary = cta.variant === 'primary';
        if (isPrimary) {
          return (
            <a
              key={cta.label}
              href={cta.href}
              aria-label={`${cta.label}, ${tile.headline}`}
              style={{
                fontSize: '14px',
                padding: '7px 15px',
                borderRadius: '980px',
                transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
              }}
              className="button button-compact-primary inline-flex items-center justify-center rounded-[980px] bg-[#0071e3] hover:bg-[#0077ed] text-[#ffffff] text-[14px] font-normal leading-[1.42859] tracking-[-0.016em] px-[15px] py-[7px] transition-colors duration-200 border border-transparent"
            >
              {cta.label}
            </a>
          );
        }

        return (
          <a
            key={cta.label}
            href={cta.href}
            aria-label={`${cta.label}, ${tile.headline}`}
            style={{
              fontSize: '14px',
              padding: '7px 15px',
              borderRadius: '980px',
              transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
            }}
            className={`button button-compact-secondary inline-flex items-center justify-center rounded-[980px] bg-transparent text-[14px] font-normal leading-[1.42859] tracking-[-0.016em] px-[15px] py-[7px] transition-colors duration-200 border ${
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
  );

  return (
    <div
      ref={containerRef}
      id={tile.id}
      data-tile-id={tile.id}
      style={{
        backgroundColor: tile.bgColor,
        position: 'relative',
        overflow: 'hidden',
      }}
      className={`tile-wrapper apple-promo-tile relative w-full overflow-hidden select-none ${
        isDark ? 'theme-dark text-[#f5f5f7]' : 'text-[#1d1d1f]'
      }`}
    >
      {/* Full-tile clickable link */}
      <a
        href={tile.href}
        aria-label={tile.headline}
        tabIndex={-1}
        aria-hidden="true"
        className="tile-link absolute inset-0 z-[1]"
      />

      {/* Foreground Content with continuous matrix scroll reveal */}
      {isSplit ? (
        <div className="tile-content tile-content-split relative z-[2] mx-auto flex h-full flex-col items-center justify-between px-[20px] pt-[53px] pb-[52px] text-center pointer-events-none">
          <div ref={copyRef} className="tile-copy-wrapper w-full flex flex-col items-center">
            {renderCopy()}
          </div>
          <div className="flex flex-col items-center">
            <p
              style={tile.maxSubheadWidth ? { maxWidth: tile.maxSubheadWidth } : undefined}
              className={`tile-subhead typography-promo-subhead ${
                isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
              }`}
            >
              {tile.subhead}
              {tile.superscript && (
                <sup className="text-[0.6em] leading-none align-super ml-[1px]">
                  {tile.superscript}
                </sup>
              )}
            </p>
            {renderCTAs()}
          </div>
        </div>
      ) : (
        <div
          className={`tile-content relative z-[2] mx-auto flex h-full flex-col items-center px-[20px] text-center pointer-events-none ${
            isBottom
              ? 'justify-end pb-[44px] min-[1068px]:pb-[53px]'
              : 'justify-start pt-[42px] min-[1068px]:pt-[53px]'
          }`}
        >
          <div ref={copyRef} className="tile-copy-wrapper w-full flex flex-col items-center">
            {renderCopy()}
          </div>
          {renderCTAs()}
        </div>
      )}

      {/* Background Artwork / Video with Scale Interpolation */}
      <div
        ref={mediaRef}
        className="tile-image-wrapper absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        {tile.videoUrl ? (
          <video
            ref={videoRef}
            src={tile.videoUrl}
            autoPlay
            muted
            playsInline
            loop={tile.videoLoop !== false}
            poster={tile.sources.large}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <picture className="static h-full w-full flex items-center justify-center">
            <source
              srcSet={`${tile.sources.small}, ${tile.sources.small2x} 2x`}
              media="(max-width: 733px)"
            />
            <source
              srcSet={`${tile.sources.medium}, ${tile.sources.medium2x} 2x`}
              media="(max-width: 1067px)"
            />
            <source
              srcSet={`${tile.sources.large}, ${tile.sources.large2x} 2x`}
              media="(min-width: 1068px)"
            />
            <img
              src={tile.sources.large}
              alt={tile.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </picture>
        )}
      </div>

      {/* Sleek Apple-style Play/Pause Circular Toggle Button for Videos */}
      {tile.videoUrl && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? `Pause video for ${tile.headline}` : `Play video for ${tile.headline}`}
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
    </div>
  );
};

export const PromoBentoGrid: React.FC = () => {
  return (
    <section
      id="promo-bento-grid"
      style={{
        padding: '12px',
      }}
      className="section section-promo w-full bg-[#ffffff] p-[12px]"
    >
      <div
        style={{
          gap: '12px',
        }}
        className="grid grid-cols-1 min-[734px]:grid-cols-2 gap-[12px]"
      >
        {PROMO_BENTO_TILES.map((tile) => (
          <PromoTile key={tile.id} tile={tile} textPosition={tile.textPosition} />
        ))}
      </div>
    </section>
  );
};

export default PromoBentoGrid;

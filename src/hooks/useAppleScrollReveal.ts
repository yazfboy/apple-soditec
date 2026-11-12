import { useEffect, useRef } from 'react';

interface AppleScrollRevealOptions {
  isHeroFirst?: boolean;
}

// Cubic bezier approximation for cubic-bezier(0.4, 0, 0.6, 1)
function cubicBezier(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function useAppleScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: AppleScrollRevealOptions = {}
) {
  const containerRef = useRef<T | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const ctasRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  const { isHeroFirst = false } = options;

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    const update = () => {
      const container = containerRef.current;
      const copyEl = copyRef.current;
      const ctasEl = ctasRef.current;
      const mediaEl = mediaRef.current;

      if (!container) {
        animationFrameId = requestAnimationFrame(update);
        return;
      }

      if (isHeroFirst) {
        const elapsed = performance.now() - startTime;
        const mountProgress = Math.min(1, elapsed / 900);
        const pMount = cubicBezier(mountProgress);

        // First hero reveal on mount
        if (copyEl) {
          const tyCopy = (30 * (1 - pMount)).toFixed(4);
          copyEl.style.transform = `matrix(1, 0, 0, 1, 0, ${tyCopy})`;
          copyEl.style.opacity = pMount.toFixed(4);
          copyEl.style.transition = 'none';
        }

        if (ctasEl) {
          const pCta = Math.max(0, Math.min(1, (pMount - 0.15) / 0.85));
          const tyCta = (30 * (1 - pCta)).toFixed(4);
          ctasEl.style.transform = `matrix(1, 0, 0, 1, 0, ${tyCta})`;
          ctasEl.style.opacity = pCta.toFixed(4);
          ctasEl.style.transition = 'none';
        }

        if (mediaEl) {
          // As user scrolls past first hero, subtle parallax scale
          const scrollY = window.scrollY;
          const scrollRatio = Math.min(1, Math.max(0, scrollY / 600));
          const scale = (1.0 + 0.05 * scrollRatio).toFixed(4);
          const tyM = (-20 * scrollRatio).toFixed(4);
          mediaEl.style.transform = `matrix(${scale}, 0, 0, ${scale}, 0, ${tyM})`;
          mediaEl.style.transition = 'none';
        }
      } else {
        const rect = container.getBoundingClientRect();
        const H = window.innerHeight || 900;
        const startY = H * 0.95;
        const endY = H * 0.25;

        let p = (startY - rect.top) / (startY - endY);
        p = Math.max(0, Math.min(1, p));

        if (copyEl) {
          const tyCopy = (30 * (1 - p)).toFixed(4);
          copyEl.style.transform = `matrix(1, 0, 0, 1, 0, ${tyCopy})`;
          copyEl.style.opacity = p.toFixed(4);
          copyEl.style.transition = 'none';
        }

        if (ctasEl) {
          const pCta = Math.max(0, Math.min(1, (p - 0.15) / 0.85));
          const tyCta = (30 * (1 - pCta)).toFixed(4);
          ctasEl.style.transform = `matrix(1, 0, 0, 1, 0, ${tyCta})`;
          ctasEl.style.opacity = pCta.toFixed(4);
          ctasEl.style.transition = 'none';
        }

        if (mediaEl) {
          const scale = (0.94 + 0.06 * p).toFixed(4);
          const tyM = (24 * (1 - p)).toFixed(4);
          mediaEl.style.transform = `matrix(${scale}, 0, 0, ${scale}, 0, ${tyM})`;
          mediaEl.style.transition = 'none';
        }
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHeroFirst]);

  return {
    containerRef,
    copyRef,
    ctasRef,
    mediaRef,
  };
}

export default useAppleScrollReveal;

# PROJECT: APPLE.COM BASELINE CLONE & AUTHENTIC MOTION PORT
## Current Status: COMPLETED
- **Reference Repo:** [https://github.com/morluto/rea](https://github.com/morluto/rea)
- **Target Website:** [https://www.apple.com/](https://www.apple.com/) & [https://www.apple.com/iphone-duo/](https://www.apple.com/iphone-duo/)
- **Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS + Lucide Icons

## Execution Roadmap
- [x] **Stage 1 (Recon & Setup):** Clone/Inspect `morluto/rea`, initialize project & Apple HIG design tokens.
- [x] **Stage 2 (Nav & Hero Stack):** Extract live data via Playwright MCP + Build `GlobalNav` (44px sticky glassmorphism) + 3 `HeroPromoModule` sections.
- [x] **Stage 3 (Bento Grid & Footer):** Build 2-column `PromoBentoGrid` (6 tiles), `AppleTVCarousel`, `GlobalFooter` + Playwright localhost verification.
- [x] **Stage 4 (Authentic Motion & Inline Video Port):**
  - [x] Telemetry extraction on `apple.com` and `apple.com/iphone-duo/` via Playwright MCP (`matrix(1, 0, 0, 1, 0, ty)` interpolation curves and `--sk-dotnav-timed-duration: 4.16s`).
  - [x] Live inline video playback in `HeroStack` and `PromoBentoGrid` with `IntersectionObserver` autoPlay loop and circular toggle buttons.
  - [x] Custom hook `useAppleScrollReveal` applying exact mathematical delta formula $ty = 30 \cdot (1 - p)$ and staggered CTAs $p_{\text{cta}} = \max(0, (p - 0.15) / 0.85)$.
  - [x] Sticky floating controller pill `#aap-media-card-gallery` expanding from 40px to 267px on `scrollY > 250` with section jump dots and master pause.
  - [x] Dual-track Apple TV+ auto-advancing carousel every 4160ms.
  - [x] Playwright MCP automated validation of scroll deltas, active video playback, and responsive morphing.

import React, { useState } from 'react';
import { GLOBAL_NAV_ITEMS, RIBBON_DATA, NavItem } from '../data/appleHomeData';

const STAGGER_DURATIONS = ['0.24s', '0.22s', '0.2s', '0.18s', '0.16s', '0.14s', '0.12s', '0.1s'];

export const GlobalNav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<NavItem | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (item: NavItem) => {
    setSearchOpen(false);
    setBagOpen(false);
    if (item.flyout) {
      setActiveNav(item);
    } else {
      setActiveNav(null);
    }
  };

  const closeAllMenus = () => {
    setActiveNav(null);
    setSearchOpen(false);
    setBagOpen(false);
  };

  const isFlyoutVisible = Boolean(activeNav?.flyout || searchOpen || bagOpen);

  return (
    <>
      <header
        id="globalnav"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '44px',
          zIndex: 9999,
          background: 'rgba(22, 22, 23, 0.8)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
        }}
        className="fixed top-0 left-0 w-full h-[44px] z-[9999] apple-globalnav-dark-blur transition-colors duration-300"
        onMouseLeave={closeAllMenus}
      >
        <nav
          aria-label="Global"
          style={{
            maxWidth: '1024px',
            margin: '0 auto',
            padding: '0 22px',
          }}
          className="mx-auto flex h-[44px] max-w-[1024px] items-center justify-between px-[22px]"
        >
          {/* Apple SVG Logo */}
          <a
            href="https://www.apple.com/"
            aria-label="Apple"
            style={{
              transitionProperty: 'color',
              transitionDuration: '0.32s',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
            }}
            className="globalnav-link globalnav-link-apple flex h-[44px] items-center px-[8px] text-[rgba(255,255,255,0.8)] hover:text-[#ffffff]"
            onMouseEnter={() => setActiveNav(null)}
          >
            <svg
              height="44"
              viewBox="0 0 14 44"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
            </svg>
          </a>

          {/* Primary Desktop Navigation Items (>= 834px) */}
          <ul className="hidden min-[834px]:flex flex-1 items-center justify-between px-[8px]">
            {GLOBAL_NAV_ITEMS.map((item) => (
              <li key={item.id} className="h-[44px] flex items-center">
                <a
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(item)}
                  style={{
                    transitionProperty: 'color',
                    transitionDuration: '0.32s',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
                  }}
                  className={`globalnav-link globalnav-submenu-trigger-link globalnav-link-${item.id} typography-nav-text px-[8px] py-[4px] text-[12px] font-normal leading-[1] tracking-[-0.01em] text-[rgba(255,255,255,0.8)] hover:text-[#ffffff]`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Utility Icons (Search, Bag, and < 834px Mobile 2-line Hamburger Trigger) */}
          <div className="flex items-center gap-[8px] min-[834px]:gap-[4px]">
            {/* Search Icon */}
            <button
              type="button"
              aria-label="Search apple.com"
              onClick={() => {
                setActiveNav(null);
                setBagOpen(false);
                setSearchOpen((prev) => !prev);
              }}
              onMouseEnter={() => setActiveNav(null)}
              style={{
                transitionProperty: 'opacity, color',
                transitionDuration: '0.24s, 0.32s',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
              }}
              className="globalnav-submenu-button-icon flex h-[44px] items-center px-[8px] text-[rgba(255,255,255,0.8)] hover:text-[#ffffff] cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="44"
                viewBox="0 0 15 44"
                className="fill-current"
              >
                <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z" />
              </svg>
            </button>

            {/* Shopping Bag Icon */}
            <button
              type="button"
              aria-label="Shopping Bag"
              onClick={() => {
                setActiveNav(null);
                setSearchOpen(false);
                setBagOpen((prev) => !prev);
              }}
              onMouseEnter={() => setActiveNav(null)}
              style={{
                transitionProperty: 'opacity, color',
                transitionDuration: '0.24s, 0.32s',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
              }}
              className="globalnav-submenu-button-icon flex h-[44px] items-center px-[8px] text-[rgba(255,255,255,0.8)] hover:text-[#ffffff] cursor-pointer"
            >
              <svg
                height="44"
                viewBox="0 0 14 44"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z" />
              </svg>
            </button>

            {/* Mobile (< 834px) Smooth 2-Line Animated Hamburger Trigger */}
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative flex min-[834px]:hidden h-[44px] w-[34px] items-center justify-center text-[rgba(255,255,255,0.8)] hover:text-[#ffffff] cursor-pointer"
            >
              <span className="sr-only">Menu</span>
              <div className="relative h-[18px] w-[18px]">
                <span
                  style={{ transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)' }}
                  className={`absolute left-[1px] h-[1.2px] w-[16px] bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'top-[8.4px] rotate-45' : 'top-[5px] rotate-0'
                  }`}
                />
                <span
                  style={{ transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)' }}
                  className={`absolute left-[1px] h-[1.2px] w-[16px] bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'top-[8.4px] -rotate-45' : 'top-[12px] rotate-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Interactive Top-Down 3-Column Flyout Curtain */}
        <div
          style={{
            background: 'rgba(22, 22, 23, 0.96)',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
          }}
          className={`hidden min-[834px]:block w-full overflow-hidden border-b border-white/10 transition-all duration-300 ${
            activeNav?.flyout
              ? 'max-h-[520px] opacity-100 pb-[44px] pt-[32px]'
              : 'max-h-0 opacity-0 py-0 pointer-events-none border-b-0'
          }`}
        >
          {activeNav?.flyout && (
            <div className="mx-auto grid max-w-[1024px] grid-cols-3 gap-[64px] px-[22px]">
              {activeNav.flyout.map((group) => (
                <div key={group.heading} className="flex flex-col">
                  <h3
                    style={{
                      transitionProperty: 'opacity, transform',
                      transitionDuration: '0.32s',
                      transitionTimingFunction: 'ease',
                    }}
                    className="globalnav-submenu-header mb-[14px] text-[12px] font-normal tracking-[-0.01em] text-[#86868b]"
                  >
                    {group.heading}
                  </h3>
                  <ul className="flex flex-col gap-[8px]">
                    {group.links.map((link, linkIdx) => {
                      const duration =
                        STAGGER_DURATIONS[Math.min(linkIdx, STAGGER_DURATIONS.length - 1)];
                      return (
                        <li
                          key={link.label}
                          style={{
                            transitionProperty: 'opacity, transform',
                            transitionDuration: duration,
                            transitionTimingFunction: 'ease',
                          }}
                          className={
                            group.isLarge
                              ? 'globalnav-submenu-list-item-elevated'
                              : 'globalnav-submenu-list-item'
                          }
                        >
                          <a
                            href={link.href}
                            style={{
                              transitionProperty: 'color',
                              transitionDuration: '0.32s',
                              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
                            }}
                            className={
                              group.isLarge
                                ? 'globalnav-submenu-link text-[24px] font-semibold leading-[1.16667] tracking-[0.009em] text-[#f5f5f7] hover:text-[#ffffff]'
                                : 'globalnav-submenu-link text-[12px] font-semibold leading-[1.33337] tracking-[-0.01em] text-[#f5f5f7]/90 hover:text-[#ffffff]'
                            }
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Flyout */}
        {searchOpen && (
          <div
            style={{
              background: 'rgba(22, 22, 23, 0.96)',
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
            }}
            className="w-full border-b border-white/10 pb-[40px] pt-[28px]"
          >
            <div className="mx-auto max-w-[1024px] px-[22px]">
              <div className="flex items-center gap-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 15 44"
                  className="fill-[#86868b]"
                >
                  <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search apple.com"
                  autoFocus
                  className="w-full bg-transparent text-[24px] font-semibold text-[#f5f5f7] placeholder-[#86868b] outline-none"
                />
              </div>
              <div className="mt-[28px]">
                <p className="mb-[10px] text-[12px] text-[#86868b]">Quick Links</p>
                <ul className="flex flex-col gap-[6px] text-[12px] font-semibold text-[#f5f5f7]">
                  <li>
                    <a href="https://www.apple.com/retail/" className="hover:text-[#2997ff]">
                      → Find a Store
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/us/shop/goto/store" className="hover:text-[#2997ff]">
                      → Shop Gifts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/airpods/" className="hover:text-[#2997ff]">
                      → AirPods
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/airtag/" className="hover:text-[#2997ff]">
                      → AirTag
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/us/shop/goto/trade_in" className="hover:text-[#2997ff]">
                      → Apple Trade In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Shopping Bag Flyout */}
        {bagOpen && (
          <div
            style={{
              background: 'rgba(22, 22, 23, 0.96)',
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
            }}
            className="w-full border-b border-white/10 pb-[40px] pt-[28px]"
          >
            <div className="mx-auto max-w-[1024px] px-[22px]">
              <h3 className="text-[24px] font-semibold text-[#f5f5f7]">Your Bag is empty.</h3>
              <p className="mt-[8px] text-[12px] text-[#86868b]">
                <a href="https://www.apple.com/us/shop/goto/account" className="text-[#2997ff] underline">
                  Sign in
                </a>{' '}
                to see if you have any saved items.
              </p>
              <div className="mt-[24px]">
                <p className="mb-[10px] text-[12px] text-[#86868b]">My Profile</p>
                <ul className="flex flex-col gap-[8px] text-[12px] font-semibold text-[#f5f5f7]">
                  <li>
                    <a href="https://www.apple.com/us/shop/goto/order/list" className="hover:text-[#2997ff]">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/us/shop/goto/saved_items" className="hover:text-[#2997ff]">
                      Your Saves
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/us/shop/goto/account" className="hover:text-[#2997ff]">
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/us/shop/goto/account" className="hover:text-[#2997ff]">
                      Sign in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Mobile (< 834px) Full-Screen Menu Drawer */}
        {mobileMenuOpen && (
          <div className="min-[834px]:hidden fixed inset-x-0 top-[44px] bottom-0 z-[9998] bg-[#161617] px-[48px] pt-[24px] overflow-y-auto">
            <ul className="flex flex-col gap-[14px]">
              {GLOBAL_NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[28px] font-semibold leading-[1.14] text-[#f5f5f7] hover:text-[#ffffff]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Backdrop Blur Overlay on Main Page when Flyout is Open */}
      {isFlyoutVisible && (
        <div
          onClick={closeAllMenus}
          style={{ transitionTimingFunction: 'cubic-bezier(0.28, 0.11, 0.32, 1)' }}
          className="fixed inset-0 z-[9990] bg-black/40 backdrop-blur-[12px] transition-opacity duration-300"
        />
      )}

      {/* Announcement Ribbon below fixed 44px GlobalNav */}
      <section className="section-ribbon mt-[44px] w-full bg-[#f5f5f7]">
        <div className="mx-auto flex min-h-[44px] max-w-[980px] items-center justify-center px-[16px] py-[10px] text-center text-[14px] font-normal leading-[1.42859] tracking-[-0.016em] text-[#1d1d1f]">
          <p>
            <span>{RIBBON_DATA.text}</span>{' '}
            <a
              href={RIBBON_DATA.href}
              className="text-[#0071e3] hover:text-[#0077ed] hover:underline inline-flex items-center"
            >
              {RIBBON_DATA.linkText}
              <span aria-hidden="true" className="ml-[3px] text-[12px]">
                ›
              </span>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

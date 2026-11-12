import React, { useState } from 'react';
import { FOOTER_FOOTNOTES, FOOTER_COLUMNS } from '../data/appleHomeData';

export const GlobalFooter: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <footer
      id="ac-globalfooter"
      aria-label="Apple Footer"
      style={{
        backgroundColor: '#f5f5f7',
        color: '#86868b',
        fontSize: '12px',
        lineHeight: 1.33337,
      }}
      className="w-full bg-[#f5f5f7] text-[12px] font-normal leading-[1.33337] tracking-[-0.01em] text-[#86868b]"
    >
      <div
        style={{
          maxWidth: '980px',
          margin: '0 auto',
          padding: '0 22px',
        }}
        className="mx-auto max-w-[980px] px-[22px]"
      >
        {/* Part A: Sosumi Legal Footnotes */}
        <section
          aria-label="Footnotes"
          style={{ borderBottom: '1px solid #d2d2d7' }}
          className="border-b border-[#d2d2d7] pt-[17px] pb-[11px]"
        >
          <ol className="list-decimal pl-[16px] space-y-[9.6px]">
            {FOOTER_FOOTNOTES.numbered.map((item) => (
              <li key={item.num} className="pb-[4px]">
                <span>{item.text}</span>
                {item.linkText && item.linkHref && (
                  <>
                    <a
                      href={item.linkHref}
                      className="text-[#424245] underline hover:text-[#1d1d1f]"
                    >
                      {item.linkText}
                    </a>
                    .
                  </>
                )}
              </li>
            ))}
          </ol>
          <div className="mt-[9.6px] space-y-[9.6px]">
            {FOOTER_FOOTNOTES.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Part B: 5-Column Directory (Desktop >= 834px, Mobile < 834px Collapsible Accordion) */}
        <nav aria-label="Apple Directory" className="pt-[20px]">
          {/* Desktop 5-Column Directory (>= 834px) */}
          <div className="hidden min-[834px]:grid min-[834px]:grid-cols-5 gap-[20px]">
            {FOOTER_COLUMNS.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-[24px]">
                {col.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-[9.6px] text-[12px] font-semibold leading-[1.33337] text-[#1d1d1f]">
                      {section.title}
                    </h3>
                    <ul className="space-y-[9.6px]">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-[#424245] hover:text-[#1d1d1f] hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile (< 834px) Interactive Collapsible Accordion with + / × Toggle Icons */}
          <div className="min-[834px]:hidden divide-y divide-[#d2d2d7] border-b border-[#d2d2d7]">
            {FOOTER_COLUMNS.flat().map((section) => {
              const isOpen = Boolean(openSections[section.title]);
              return (
                <div key={section.title} className="py-[10px]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between text-left text-[12px] font-semibold text-[#1d1d1f] cursor-pointer"
                  >
                    <span>{section.title}</span>
                    <span
                      aria-hidden="true"
                      className="text-[14px] font-normal text-[#86868b] select-none"
                    >
                      {isOpen ? '×' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <ul className="mt-[8px] space-y-[8px] pl-[12px] pb-[6px]">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-[#424245] hover:text-[#1d1d1f] hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Part C: Copyright Bar */}
        <section className="pt-[34px] pb-[21px]">
          <div
            style={{ borderBottom: '1px solid #d2d2d7' }}
            className="border-b border-[#d2d2d7] pb-[10px] mb-[10px]"
          >
            More ways to shop:{' '}
            <a href="https://www.apple.com/retail/" className="text-[#0071e3] underline">
              Find an Apple Store
            </a>{' '}
            or{' '}
            <a href="https://locate.apple.com/" className="text-[#0071e3] underline">
              other retailer
            </a>{' '}
            near you. Or call{' '}
            <a href="tel:1-800-692-7753" className="text-[#0071e3] underline">
              1-800-MY-APPLE
            </a>{' '}
            (1-800-692-7753).
          </div>

          <div className="flex flex-col min-[834px]:flex-row min-[834px]:items-center min-[834px]:justify-between gap-[10px]">
            <div className="flex flex-col min-[834px]:flex-row min-[834px]:items-center gap-[10px] min-[834px]:gap-[30px]">
              <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
              <ul className="flex flex-wrap items-center text-[#424245]">
                {[
                  { label: 'Privacy Policy', href: 'https://www.apple.com/legal/privacy/' },
                  { label: 'Terms of Use', href: 'https://www.apple.com/legal/internet-services/terms/site.html' },
                  { label: 'Sales and Refunds', href: 'https://www.apple.com/us/shop/goto/help/sales_refunds' },
                  { label: 'Legal', href: 'https://www.apple.com/legal/' },
                  { label: 'Site Map', href: 'https://www.apple.com/sitemap/' },
                ].map((item, idx, arr) => (
                  <li key={item.label} className="flex items-center">
                    <a href={item.href} className="hover:text-[#1d1d1f] hover:underline">
                      {item.label}
                    </a>
                    {idx < arr.length - 1 && (
                      <span className="mx-[9px] text-[#d2d2d7]">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a
                href="https://www.apple.com/choose-country-region/"
                className="text-[#424245] hover:text-[#1d1d1f] hover:underline"
              >
                United States
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default GlobalFooter;

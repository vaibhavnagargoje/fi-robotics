"use client";

import { useEffect, useState, useCallback } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setIsOpen(false);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, []);

  if (headings.length === 0) return null;

  return (
    <>
      {/* ── Mobile: 3-lines menu button trigger ── */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#161d17] border border-white/10 text-xs font-mono text-[#8bb8d8] hover:text-white hover:bg-white/10 transition-colors shadow-sm"
          aria-label="Open Table of Contents menu"
        >
          {/* 3 lines menu icon */}
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            className="stroke-current"
          >
            <path
              d="M1 1.75h14M1 7h14M1 12.25h14"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="uppercase tracking-wider">Table of Contents</span>
        </button>
      </div>

      {/* ── Mobile: Floating button on bottom-left for quick access while scrolling ── */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Table of Contents menu"
        className="lg:hidden fixed bottom-6 left-4 z-40 w-10 h-10 rounded-full bg-[#161d17]/90 backdrop-blur-md border border-[#8bb8d8]/30 text-[#8bb8d8] shadow-lg flex items-center justify-center hover:bg-[#8bb8d8]/20 transition-all active:scale-95"
      >
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          className="stroke-current"
        >
          <path
            d="M1 1.75h14M1 7h14M1 12.25h14"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* ── Mobile: Slide-in Drawer from Left ── */}
      {/* Overlay Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-[280px] max-w-[85vw] bg-[#101610] border-r border-white/15 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8bb8d8]">
            <svg
              width="14"
              height="12"
              viewBox="0 0 16 14"
              fill="none"
              className="stroke-current"
            >
              <path
                d="M1 1.75h14M1 7h14M1 12.25h14"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span>Contents</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#aab3a7] hover:text-white hover:bg-white/10 transition-colors text-base"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {headings.map((h) => (
              <li key={h.id}>
                <button
                  onClick={() => scrollTo(h.id)}
                  className={`
                    block w-full text-left text-xs leading-relaxed py-2 px-3 rounded-md transition-all duration-150
                    ${h.level === 3 ? "pl-6 text-[11px]" : "font-medium"}
                    ${
                      activeId === h.id
                        ? "text-[#8bb8d8] bg-[#8bb8d8]/10 border-l-2 border-[#8bb8d8]"
                        : "text-[#aab3a7] hover:text-[#f1f5ec] hover:bg-white/[0.04]"
                    }
                  `}
                >
                  {h.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── Desktop: Sticky Sidebar ── */}
      <nav className="hidden lg:block sticky top-10 self-start max-h-[calc(100vh-4rem)] overflow-y-auto pr-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#aab3a7]/60 mb-4">
          Contents
        </p>
        <ul className="space-y-1 border-l border-white/8">
          {headings.map((h) => (
            <li key={h.id}>
              <button
                onClick={() => scrollTo(h.id)}
                className={`
                  block w-full text-left text-[11px] leading-relaxed py-1 transition-all duration-200
                  ${h.level === 3 ? "pl-6" : "pl-3"}
                  ${
                    activeId === h.id
                      ? "text-[#8bb8d8] border-l-2 border-[#8bb8d8] -ml-[1px]"
                      : "text-[#aab3a7]/70 hover:text-[#c4ccc0] border-l-2 border-transparent -ml-[1px]"
                  }
                `}
              >
                {h.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

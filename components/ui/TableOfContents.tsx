"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {/* ── Mobile: Simple Clean Menu Button Trigger (No card background) ── */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#8bb8d8] hover:text-white transition-colors"
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
              d="M1 2h14M1 7h14M1 12h14"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="uppercase font-semibold">Table of Contents</span>
        </button>
      </div>

      {/* ── Mobile: Slide-in Drawer from Left (Rendered in Portal to escape CSS containing blocks) ── */}
      {mounted && createPortal(
        <>
          {/* Overlay Backdrop */}
          <div
            className={`lg:hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel (Simple & Plain) */}
          <div
            className={`lg:hidden fixed top-0 left-0 z-[100] h-full w-[280px] max-w-[85vw] bg-[#090c0a] border-r border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8bb8d8] font-bold">
                Contents
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#aab3a7] hover:text-white transition-colors text-base"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Drawer Nav Links (Completely simplified text list, high contrast) */}
            <nav className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-3">
                {headings.map((h) => (
                  <li key={h.id}>
                    <button
                      onClick={() => scrollTo(h.id)}
                      className={`
                        block w-full text-left text-xs leading-relaxed transition-all duration-150
                        ${h.level === 3 ? "pl-4 text-[11px]" : ""}
                        ${activeId === h.id
                          ? "text-[#f1f5ec] font-bold"
                          : "text-[#aab3a7] hover:text-[#f1f5ec]"
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
        </>,
        document.body
      )}

      {/* ── Desktop: Sticky Sidebar (Clean & Simple text menu list, no lines, no cards) ── */}
      <nav className="hidden lg:block sticky top-10 self-start max-h-[calc(100vh-4rem)] overflow-y-auto pr-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#aab3a7]/50 mb-4">
          Contents
        </p>
        <ul className="space-y-2">
          {headings.map((h) => (
            <li key={h.id}>
              <button
                onClick={() => scrollTo(h.id)}
                className={`
                  block w-full text-left text-[11px] leading-relaxed transition-all duration-150
                  ${h.level === 3 ? "pl-3 text-[10px]" : ""}
                  ${activeId === h.id
                    ? "text-[#f1f5ec] font-bold"
                    : "text-[#aab3a7]/60 hover:text-[#f1f5ec]"
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

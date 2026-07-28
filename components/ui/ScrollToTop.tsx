"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40
        w-10 h-10 md:w-11 md:h-11 rounded-full
        bg-[#8bb8d8]/20 backdrop-blur-md
        border border-[#8bb8d8]/40
        text-[#8bb8d8] text-base md:text-lg
        flex items-center justify-center
        shadow-[0_0_20px_rgba(139,184,216,0.15)]
        hover:bg-[#8bb8d8]/35 hover:border-[#8bb8d8]/60 hover:text-white
        hover:shadow-[0_0_30px_rgba(139,184,216,0.25)]
        active:scale-90
        transition-all duration-300 ease-out
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      ↑
    </button>
  );
}

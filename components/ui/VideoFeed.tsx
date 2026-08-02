"use client";

import { RefObject, useEffect, useRef, useState } from "react";

interface VideoFeedProps {
  src: string;
  label: string;
  showLabel?: boolean;
  className?: string;
  /** overlay opacity 0-100, default 100 */
  opacity?: number;
  /** whether to apply grayscale */
  grayscale?: boolean;
  /** optional external ref to the video element */
  videoRef?: RefObject<HTMLVideoElement | null>;
}

/** Reusable looping video with a live-feed label overlay */
export default function VideoFeed({
  src,
  label,
  showLabel = true,
  className = "",
  opacity = 100,
  grayscale = false,
  videoRef,
}: VideoFeedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  const activeVideoRef = videoRef || localVideoRef;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            const video = activeVideoRef.current;
            if (video) {
              video.play().catch(() => {});
            }
          } else {
            const video = activeVideoRef.current;
            if (video) {
              video.pause();
            }
          }
        });
      },
      {
        rootMargin: "200px", // Load slightly before coming into viewport
        threshold: 0.01,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [activeVideoRef]);

  // Handle browser load quirk when source is dynamically added
  useEffect(() => {
    const video = activeVideoRef.current;
    if (isLoaded && video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [isLoaded, activeVideoRef]);

  // Generate webm path if input is mp4
  const webmSrc = src.endsWith(".mp4") ? src.replace(".mp4", ".webm") : null;

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-black ${className}`}>
      <video
        ref={activeVideoRef}
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${grayscale ? "grayscale" : ""}`}
        style={{ opacity: opacity / 100 }}
        preload="metadata"
      >
        {isLoaded && (
          <>
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            <source src={src} type={src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
          </>
        )}
      </video>
      {showLabel && (
        <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black px-2 py-0.5 border border-white">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[8px] text-white tracking-widest">{label}</span>
        </div>
      )}
    </div>
  );
}

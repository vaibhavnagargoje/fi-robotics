"use client";

import { useRef, useState } from "react";
import VideoFeed from "@/components/ui/VideoFeed";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
      if (!next) videoRef.current.volume = volume;
    }
  }

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>) {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (videoRef.current) {
      videoRef.current.volume = v;
      if (v === 0) {
        setMuted(true);
        videoRef.current.muted = true;
      } else if (muted) {
        setMuted(false);
        videoRef.current.muted = false;
      }
    }
  }

  return (
    <section className="p-3 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center border-b border-black/10 bg-[#fbfcf8] grid-bg">
      {/* Copy */}
      <div className="lg:col-span-6">
        <p className="font-mono text-[10px] tracking-[0.15em] text-[#526054] mb-5 uppercase">

        </p>

        <h1 className="font-serif italic text-[clamp(40px,6vw,80px)] text-[#0f1712] leading-[1.05] tracking-tight">
          Human Intelligence <br />for Robots.
        </h1>
      </div>

      {/* Hero Video */}
      <div className="lg:col-span-6 aspect-video border-2 border-[#1d6ea8] relative bg-white p-2 shadow-[6px_6px_0px_0px_rgba(29,110,168,0.25)]">
        <div className="w-full h-full border-2 border-black/10">
          <VideoFeed
            src="/src-videos/Intelligence Factory Launch Video V3 (1).mp4"
            label="Live Feed"
            showLabel={false}
            className="w-full h-full"
            videoRef={videoRef}
          />
        </div>

        {/* Audio controls */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-0">
          {/* Volume slider — visible only when unmuted */}
          <div
            className={`flex items-center overflow-hidden transition-all duration-300 ${
              !muted
                ? "w-[80px] opacity-100 mr-1.5"
                : "w-0 opacity-0"
            }`}
          >
            <div className={`flex items-center bg-black/75 backdrop-blur-sm border border-white/20 px-2 py-1.5 ${!muted ? "" : "border-transparent"}`}>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={muted ? 0 : volume}
                onChange={handleVolume}
                className="w-full h-[3px] appearance-none bg-white/40 cursor-pointer accent-[#1d6ea8]
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-2
                  [&::-webkit-slider-thumb]:h-2
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-[#1d6ea8]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-2
                  [&::-moz-range-thumb]:h-2
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-[#1d6ea8]
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer
                "
                aria-label="Volume"
              />
            </div>
          </div>

          {/* Mute / Unmute button */}
          <button
            onClick={toggleMute}
            className="flex items-center gap-1.5 bg-black/75 backdrop-blur-sm border border-white/20 px-2.5 py-1.5 text-white hover:bg-[#1d6ea8] hover:border-[#1d6ea8] transition-all duration-200 cursor-pointer"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
            <span className="font-mono text-[8px] tracking-widest uppercase">
              {muted ? "Unmute" : "Mute"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

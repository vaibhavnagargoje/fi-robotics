"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoFeed from "@/components/ui/VideoFeed";

export default function BlogHeroVideo() {
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

    // Global scroll for parallax
    const { scrollY } = useScroll();
    // As user scrolls down, move video up at 40% speed
    const y = useTransform(scrollY, (val) => -(val * 0.4));
    // Optionally fade it out slightly as it goes up
    const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);

    return (
        <motion.section style={{ y, opacity }} className="bg-[#090c0a]">
            {/* Container is 50px shorter than full 16:9 → crops 25px top & 25px bottom */}
            <div
                className="w-full relative bg-black overflow-hidden"
                style={{ paddingBottom: 'calc(56.25% - 20px)' }}
            >
                <div className="absolute left-0 right-0 -top-[20px] -bottom-[20px]">
                    <VideoFeed
                        src="/src-videos/Intelligence Factory Launch Video V3 (1).mp4"
                        label="Launch Video"
                        showLabel={false}
                        className="w-full h-full"
                        videoRef={videoRef}
                    />
                </div>

                {/* Scroll-down indicator — bottom center */}
                <div className="hidden md:flex absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 mix-blend-difference text-white">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase mb-1">Scroll to explore</span>
                    <div className="flex flex-col items-center animate-bounce">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-70 -mt-3"
                            aria-hidden="true"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>

                {/* Audio controls — bottom right */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-0">
                    {/* Volume slider — visible only when unmuted */}
                    <div
                        className={`flex items-center overflow-hidden transition-all duration-300 ${!muted ? "w-[80px] opacity-100 mr-1.5" : "w-0 opacity-0"
                            }`}
                    >
                        <div
                            className={`flex items-center bg-black/80 border border-[#8bb8d8]/50 px-2 py-1.5 ${!muted ? "" : "border-transparent"
                                }`}
                        >
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={muted ? 0 : volume}
                                onChange={handleVolume}
                                className="w-full h-[3px] appearance-none bg-white/25 cursor-pointer accent-[#8bb8d8]
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-2
                  [&::-webkit-slider-thumb]:h-2
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-[#8bb8d8]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-2
                  [&::-moz-range-thumb]:h-2
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-[#8bb8d8]
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
                        className="flex items-center gap-1.5 bg-black/80 border border-[#8bb8d8]/50 px-2.5 py-1.5 text-[#f1f5ec] hover:bg-[#8bb8d8]/15 hover:border-[#8bb8d8] transition-all duration-200 cursor-pointer"
                        aria-label={muted ? "Unmute video" : "Mute video"}
                    >
                        {muted ? (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" />
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
        </motion.section>
    );
}

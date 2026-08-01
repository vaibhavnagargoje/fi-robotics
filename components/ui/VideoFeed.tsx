import { RefObject } from "react";

interface VideoFeedProps {
  src: string;
  label: string;
  showLabel?: boolean;
  className?: string;
  /** overlay opacity 0-100, default 60 */
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
  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${grayscale ? "grayscale" : ""}`}
        style={{ opacity: opacity / 100 }}
      />
      {showLabel && (
        <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black px-2 py-0.5 border border-white">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[8px] text-white tracking-widest">{label}</span>
        </div>
      )}
    </div>
  );
}

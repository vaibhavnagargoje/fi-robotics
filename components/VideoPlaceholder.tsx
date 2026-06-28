// FILE: components/VideoPlaceholder.tsx
// PURPOSE: Consistent styled video placeholder wrapper with caption + data attributes
// NEW DEPS: none

"use client";

interface VideoPlaceholderProps {
  videoId: number;
  label: string;
  caption: string;
  className?: string;
  aspectRatio?: "16/9" | "4/3";
}

export default function VideoPlaceholder({
  videoId,
  label,
  caption,
  className = "",
  aspectRatio = "16/9",
}: VideoPlaceholderProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div
        className="relative w-full overflow-hidden rounded-sm border border-white/[0.08] bg-[#0a0a0f]"
        style={{ aspectRatio }}
      >
        {/* Placeholder overlay shown while src is empty */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-10 h-10 border border-[#3b82f6]/30 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#3b82f6]/60 ml-1" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-white/20">
            video {videoId}
          </span>
        </div>

        <video
          src=""
          data-video-id={videoId}
          data-label={label}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          aria-label={label}
        />

        {/* Corner accent marks */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#3b82f6]/30 pointer-events-none" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#3b82f6]/30 pointer-events-none" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#3b82f6]/30 pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#3b82f6]/30 pointer-events-none" />
      </div>
      <p className="text-xs text-[#888] font-mono tracking-wide">{caption}</p>
    </div>
  );
}

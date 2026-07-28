import VideoFeed from "@/components/ui/VideoFeed";

const recordings = [
  {
    src: "/src-videos/optimized/Recording-Treats.mp4",
    label: "Live Feed 02",
    wide: true, // horizontal video – gets more space
  },
  {
    src: "/src-videos/optimized/cable_plugging_initial_runs.mp4",
    label: "Live Feed 03",
    wide: false, // vertical video – narrower column, cropped to match height
  },
];

export default function VideoShowcase() {
  return (
    <section className="bg-[#050705] border-b border-white/15 text-white">
      {/* flex row: horizontal vid ~68%, vertical vid ~32%, same height */}
      <div className="p-4 flex flex-col lg:flex-row gap-4">
        {recordings.map((recording) => (
          <article
            key={recording.label}
            className="group"
            style={{ flex: recording.wide ? "0 0 68%" : "1 1 0%" }}
          >
            <div className="h-[420px] xl:h-[520px] border-2 border-white bg-black p-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.22)]">
              <div className="w-full h-full border-2 border-white/70">
                <VideoFeed
                  src={recording.src}
                  label={recording.label}
                  showLabel={false}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-[1.015]"
                  opacity={72}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
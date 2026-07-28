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
      <div className="p-2 lg:p-4 flex flex-col lg:flex-row gap-2 lg:gap-4">
        {recordings.map((recording) => (
          <article
            key={recording.label}
            className="group"
            style={{ flex: recording.wide ? "0 0 68%" : "1 1 0%" }}
          >
            {/*
              Mobile: horizontal vid → aspect-video, vertical vid → aspect-[3/4]
              Desktop: both share a fixed height via h-[420px] xl:h-[520px]
            */}
            <div
              className={`
                ${recording.wide ? "aspect-video" : "aspect-[3/4]"}
                lg:aspect-auto lg:h-[420px] xl:h-[520px]
                border-2 border-white bg-black p-1.5 lg:p-2
                shadow-[3px_3px_0px_0px_rgba(255,255,255,0.22)] lg:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.22)]
              `}
            >
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
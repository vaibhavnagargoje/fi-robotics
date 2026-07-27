import VideoFeed from "@/components/ui/VideoFeed";

const recordings = [
  {
    src: "/src-videos/optimized/Recording-Treats.mp4",
    label: "Live Feed 02",
    // title: "Variation is the curriculum.",
    // detail: "Everyday work captured across the conditions robots must handle.",
  },
  {
    src: "/src-videos/optimized/cable_plugging_initial_runs.mp4",
    label: "Live Feed 03",
    // title: "Cable plugging — initial runs.",
    // detail: "Contact-rich tasks recorded from first attempts, preserving the full diversity of real behaviour.",
  },
];

export default function VideoShowcase() {
  return (
    <section className="bg-[#050705] border-b border-white/15 text-white">
      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {recordings.map((recording) => (
          <article key={recording.label} className="group">
            <div className="aspect-video border-2 border-white bg-black p-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.22)]">
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
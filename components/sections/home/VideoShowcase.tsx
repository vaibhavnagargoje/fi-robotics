import VideoFeed from "@/components/ui/VideoFeed";

const recordings = [
  {
    src: "/src-videos/Finger Tip Recording.mp4",
    label: "Live Feed 02",
    title: "Contact at the fingertip.",
    detail: "Force, motion, and intent recorded as one training signal.",
  },
  {
    src: "/src-videos/Cleaning Demo.mp4",
    label: "Live Feed 03",
    title: "Variation is the curriculum.",
    detail: "Everyday work captured across the conditions robots must handle.",
  },
];

export default function VideoShowcase() {
  return (
    <section className="bg-[#050705] border-b border-white/15 text-white">
      <div className="px-6 md:px-10 py-6 border-b-2 border-white flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/70">
          Demonstration feeds
        </p>
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/45">
          Collection active
        </p>
      </div>

      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {recordings.map((recording, index) => (
          <article key={recording.label} className="group">
            <div className="aspect-video border-2 border-white bg-black p-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.22)]">
              <div className="w-full h-full border-2 border-white/70">
                <VideoFeed
                  src={recording.src}
                  label={recording.label}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-[1.015]"
                  opacity={72}
                />
              </div>
            </div>

            <div className="pt-5 flex items-start justify-between gap-5">
              <div>
                <h2 className="font-sans text-lg md:text-xl font-medium leading-tight text-white mb-1.5">
                  {recording.title}
                </h2>
                <p className="font-sans text-sm text-white/55 leading-relaxed max-w-md">
                  {recording.detail}
                </p>
              </div>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/45 shrink-0">
                Feed 0{index + 2}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
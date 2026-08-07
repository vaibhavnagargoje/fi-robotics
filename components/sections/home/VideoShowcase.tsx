import VideoFeed from "@/components/ui/VideoFeed";

export default function VideoShowcase() {
  return (
    <section className="bg-[#fbfcf8] border-b border-black/10">
      <div className="p-2 lg:p-4 flex flex-col sm:flex-row gap-2 lg:gap-3 sm:items-stretch">
        {/* 1st — horizontal 16:9 */}
        <div className="flex-1 min-w-0 aspect-video bg-black/5 border border-black/10 overflow-hidden">
          <VideoFeed src="/src-videos/optimized/Recording-Treats.mp4" label="Feed 01" showLabel={false} className="w-full h-full" />
        </div>

        {/* 2nd — vertical 9:13 on mobile */}
        <div className="sm:flex-shrink-0 sm:w-[140px] lg:w-[180px] aspect-[9/13] sm:aspect-auto bg-black/5 border border-black/10 overflow-hidden">
          <VideoFeed src="/src-videos/cable_plugging_initial_runs.mp4" label="Feed 02" showLabel={false} className="w-full h-full" />
        </div>

        {/* 3rd — horizontal 16:9 */}
        <div className="flex-1 min-w-0 aspect-video bg-black/5 border border-black/10 overflow-hidden">
          <VideoFeed src="/src-videos/Autonomous 2X (1).mp4" label="Feed 03" showLabel={false} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
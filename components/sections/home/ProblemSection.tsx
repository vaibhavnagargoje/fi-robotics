export default function ProblemSection() {
  return (
    <section className="bg-[#050705] text-white border-b border-white/15 grid grid-cols-1 lg:grid-cols-12">
      {/* Quote */}
      <div className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between gap-8">
        <h2 className="font-sans font-semibold text-xl lg:text-2xl text-white leading-snug">
          &quot;Robotics breaks on diversity.&quot;
        </h2>

        {/* Mini video */}
        <div className="w-full h-[130px] relative overflow-hidden bg-black/50">
          <video
            src="/src-videos/Autonomous 2X.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      </div>

      {/* Body text */}
      <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-center gap-5">
        <p className="font-sans text-base font-light text-white/70 leading-relaxed">
          Current robotic solutions are trained on narrow datasets in controlled environments.
          They fail the moment any variable changes — the object, the lighting, the surface,
          the grip angle.
        </p>
        <p className="font-sans text-base font-light text-white/70 leading-relaxed">
          The bottleneck is not hardware. It is data — specifically, diverse, high-fidelity,
          multi-modal human demonstration data that reflects how the real world actually behaves.
        </p>
      </div>
    </section>
  );
}

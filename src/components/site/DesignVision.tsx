import { useReveal } from "@/hooks/use-reveal";

export function DesignVision() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal rounded-3xl overflow-hidden border border-white/5 relative h-64 md:h-80 group">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury modern architectural residence design kitchen-bath"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end">
            <span className="font-mono text-xs uppercase text-primary font-bold tracking-widest block mb-2">Visión de Diseño</span>
            <p className="font-display text-xl md:text-2xl font-light text-white max-w-lg">
              "Los detalles no son el diseño. Los detalles hacen el diseño." — Charles Eames
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

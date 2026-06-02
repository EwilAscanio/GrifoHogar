import { useReveal } from "@/hooks/use-reveal";
import s1 from "@/assets/showroom-1.jpg";
import s2 from "@/assets/showroom-2.jpg";
import s3 from "@/assets/showroom-3.jpg";
import s4 from "@/assets/showroom-4.jpg";
import s5 from "@/assets/showroom-5.jpg";
import s6 from "@/assets/showroom-6.jpg";

const items = [
  { src: s1, alt: "Baño mármol y dorado", tag: "Baño · Mármol", className: "md:row-span-2" },
  { src: s2, alt: "Cocina blanca contemporánea", tag: "Cocina · Clásica", className: "" },
  { src: s3, alt: "Baño minimalista negro", tag: "Baño · Minimal", className: "" },
  { src: s4, alt: "Cocina madera y cobre", tag: "Cocina · Cálida", className: "md:row-span-2" },
  { src: s5, alt: "Powder room moderno", tag: "Powder Room", className: "" },
  { src: s6, alt: "Cocina abierta y comedor", tag: "Open Concept", className: "" },
];

export function Showroom() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="showroom" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            — Showroom Interactivo
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-balance max-w-3xl">
            Proyectos reales.
            <br />
            <span className="text-muted-foreground">Inspiración tangible.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-card ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-white/80">
                  {it.tag}
                </span>
                <span className="text-xs font-mono text-primary">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const items = [
  {
    name: "María Restrepo",
    role: "Propietaria · Apartamento El Poblado",
    img: t1,
    quote:
      "El asesoramiento fue impecable. Mi baño quedó como un spa de hotel; cada pieza encajó con precisión milimétrica.",
  },
  {
    name: "Andrés Quintero",
    role: "Arquitecto · Estudio QNTR",
    img: t2,
    quote:
      "Marcas curadas y entrega puntual. Es mi proveedor de referencia para proyectos residenciales de alto nivel.",
  },
  {
    name: "Valentina Ríos",
    role: "Diseñadora de Interiores",
    img: t3,
    quote:
      "La calidad de las griferías y el acabado del servicio elevan cualquier proyecto. Recomendados, sin duda.",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            — Testimonios
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Lo que dicen quienes
            <br />
            <span className="text-muted-foreground">ya remodelaron con nosotros.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl glass p-8 flex flex-col gap-6 hover-lift"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed text-pretty">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/40"
                />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

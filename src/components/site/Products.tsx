import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";

const products = [
  {
    img: p1,
    name: "Grifería Onyx",
    benefit: "Acabado matte de larga duración con tecnología anti-cal.",
    accent: "Negro Mate · Monomando",
  },
  {
    img: p2,
    name: "Lluvia Aurora",
    benefit: "Sistema de cascada de aire para una ducha envolvente.",
    accent: "Oro Cepillado · 30 cm",
  },
  {
    img: p3,
    name: "Cooktop Vertex",
    benefit: "Inducción inteligente con zonas flexibles y control táctil.",
    accent: "Vidrio Schott · 4 zonas",
  },
];

export function Products() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="productos" className="relative py-28 md:py-40 bg-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              — Productos Destacados
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Diseño que se siente.
            </h2>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Ver catálogo completo <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {products.map((p, i) => (
            <article
              key={p.name}
              style={{ animationDelay: `${i * 120}ms` }}
              className="group relative rounded-3xl overflow-hidden bg-card hover-lift animate-fade-in"
            >
              <div className="relative aspect-square overflow-hidden bg-[oklch(0.97_0_0)]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                  {p.accent}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {p.benefit}
                </p>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group/cta"
                >
                  Más información
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/cta:translate-x-1 text-primary"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

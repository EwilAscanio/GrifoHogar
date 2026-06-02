import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import g1 from "@/assets/cat-griferias.jpg";
import g2 from "@/assets/cat-banos.jpg";
import g3 from "@/assets/cat-cocinas.jpg";
import g4 from "@/assets/cat-fregaderos.jpg";
import g5 from "@/assets/cat-campanas.jpg";
import g6 from "@/assets/cat-hornos.jpg";
import g7 from "@/assets/cat-calentadores.jpg";

const cats = [
  { name: "Griferías", desc: "Líneas escultóricas en acabados premium.", img: g1, span: "md:col-span-2 md:row-span-2" },
  { name: "Baños", desc: "Spas privados de inspiración hotelera.", img: g2, span: "md:col-span-2" },
  { name: "Cocinas", desc: "Centros de creación culinaria.", img: g3, span: "md:col-span-2" },
  { name: "Fregaderos", desc: "Estaciones de trabajo modernas.", img: g4, span: "" },
  { name: "Campanas", desc: "Silencio y diseño arquitectónico.", img: g5, span: "" },
  { name: "Hornos", desc: "Precisión profesional integrada.", img: g6, span: "" },
  { name: "Calentadores", desc: "Confort instantáneo y eficiente.", img: g7, span: "" },
];

export function Categories() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="categorias" className="relative py-28 md:py-40 bg-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              — Categorías Premium
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-balance">
              Todo lo que tu hogar
              <br />
              merece.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Una selección rigurosa de marcas líderes mundiales en grifería y
            equipamiento para baños, cocinas y remodelación.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
          {cats.map((c) => (
            <a
              key={c.name}
              href="#contacto"
              className={`group relative overflow-hidden rounded-3xl bg-card ${c.span}`}
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-card-veil" />
              <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/70 max-w-[28ch] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {c.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      Ver Productos <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full glass-light text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

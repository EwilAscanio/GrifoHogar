import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function Promo() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-brand p-10 md:p-20 shadow-elegant"
        >
          {/* decorative shapes */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/30 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4">
                — Promoción del Mes
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white text-balance">
                Renueva tu baño o cocina con promociones exclusivas.
              </h2>
            </div>
            <div className="md:justify-self-end">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-black text-white font-medium hover:bg-white hover:text-black transition-colors"
              >
                Solicitar Cotización
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <p className="mt-4 text-sm text-white/80">
                Asesoría sin costo · Financiación disponible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

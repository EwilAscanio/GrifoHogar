import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image with slow cinematic zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cocina de lujo con grifería premium"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-hero-veil" />
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 min-h-[100svh] flex flex-col justify-end pb-20 pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-light rounded-full px-3 py-1.5 mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/80">
              Showroom Digital Premium
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] text-balance text-foreground animate-fade-in">
            Cada detalle{" "}
            <span className="text-gradient-brand italic font-light">transforma</span>
            <br />
            tu hogar.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-xl text-pretty animate-fade-in">
            Soluciones premium para baños, cocinas y espacios que inspiran.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 h-14 px-7 rounded-full bg-gradient-brand text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              Cotizar Ahora
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full glass text-foreground font-medium hover:bg-white/10 transition-colors"
            >
              <Play size={16} className="text-primary" />
              Explorar Catálogo
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
          <span className="block h-px w-12 bg-foreground/30" />
          Scroll
        </div>
      </div>
    </section>
  );
}

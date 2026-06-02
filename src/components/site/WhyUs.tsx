import { useEffect, useRef, useState } from "react";
import {
  Award,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const benefits = [
  { icon: Headphones, title: "Asesoría especializada", desc: "Expertos que entienden tu proyecto." },
  { icon: BadgeCheck, title: "Productos certificados", desc: "Calidad verificada internacionalmente." },
  { icon: Award, title: "Marcas reconocidas", desc: "Las firmas líderes del sector." },
  { icon: ShieldCheck, title: "Garantía extendida", desc: "Respaldo total post-instalación." },
  { icon: Truck, title: "Entrega rápida", desc: "Logística cuidadosa hasta tu obra." },
  { icon: Sparkles, title: "Atención personalizada", desc: "Cada cliente, un proyecto único." },
];

const stats = [
  { n: 10, suffix: "+", label: "Años de experiencia" },
  { n: 5000, suffix: "+", label: "Clientes satisfechos" },
  { n: 100, suffix: "+", label: "Proyectos realizados" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {v.toLocaleString()}
      {suffix}
    </span>
  );
}

export function WhyUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="por-que" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            — Por Qué Grifo Hogar
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-balance">
            Confianza construida,
            <br />
            <span className="text-muted-foreground">detalle por detalle.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group relative rounded-2xl glass p-7 hover-lift overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand text-primary-foreground mb-5 shadow-glow">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-px rounded-3xl overflow-hidden bg-border">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface-elevated p-10 md:p-12 text-center"
            >
              <div className="text-5xl md:text-6xl font-semibold tracking-tight text-gradient-brand">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

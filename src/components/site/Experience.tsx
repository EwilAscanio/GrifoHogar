import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { label: "Diseño", n: "01" },
  { label: "Calidad", n: "02" },
  { label: "Innovación", n: "03" },
  { label: "Durabilidad", n: "04" },
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experiencia" className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
              — La Experiencia
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance">
              No vendemos productos.
              <br />
              <span className="text-muted-foreground">
                Creamos experiencias para los espacios más importantes de tu hogar.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="group relative aspect-square rounded-2xl glass p-6 flex flex-col justify-between hover-lift"
              >
                <span className="text-xs font-mono text-primary/80">{p.n}</span>
                <div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {p.label}
                  </div>
                  <div className="mt-2 h-px w-8 bg-gradient-brand transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

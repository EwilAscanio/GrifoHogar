import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import kitchen from "@/assets/cat-cocinas.jpg";
import bath from "@/assets/cat-banos.jpg";

type Space = "cocina" | "bano";

const options = {
  griferia: ["Negro Mate", "Cromo Pulido", "Oro Cepillado"],
  acabado: ["Mármol", "Madera", "Concreto"],
  accesorio: ["Pendiente", "Empotrado", "Sin accesorio"],
};

export function Visualizer() {
  const [space, setSpace] = useState<Space>("cocina");
  const [griferia, setGriferia] = useState(options.griferia[0]);
  const [acabado, setAcabado] = useState(options.acabado[0]);
  const [accesorio, setAccesorio] = useState(options.accesorio[0]);
  const ref = useReveal<HTMLDivElement>();

  const img = space === "cocina" ? kitchen : bath;

  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            — Visualizador de Espacios
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-balance">
            Diseña tu espacio
            <br />
            <span className="text-muted-foreground">antes de instalarlo.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden bg-card group">
            <img
              key={space}
              src={img}
              alt={`Visualizador de ${space}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            <div className="absolute top-5 left-5 flex gap-2">
              {(["cocina", "bano"] as Space[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSpace(s)}
                  className={`px-4 h-10 rounded-full text-sm font-medium transition-all ${
                    space === s
                      ? "bg-gradient-brand text-primary-foreground shadow-glow"
                      : "glass text-foreground hover:bg-white/10"
                  }`}
                >
                  {s === "cocina" ? "Cocina" : "Baño"}
                </button>
              ))}
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 text-xs">
              <Tag>Grifería · {griferia}</Tag>
              <Tag>Acabado · {acabado}</Tag>
              <Tag>Accesorio · {accesorio}</Tag>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <Selector
              label="Grifería"
              value={griferia}
              options={options.griferia}
              onChange={setGriferia}
            />
            <Selector
              label="Acabado"
              value={acabado}
              options={options.acabado}
              onChange={setAcabado}
            />
            <Selector
              label="Accesorio"
              value={accesorio}
              options={options.accesorio}
              onChange={setAccesorio}
            />
            <a
              href="#contacto"
              className="mt-2 inline-flex items-center justify-center h-14 rounded-2xl bg-gradient-brand text-primary-foreground font-medium shadow-glow"
            >
              Cotizar esta configuración
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full glass text-white">
      {children}
    </span>
  );
}

function Selector({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`px-3 h-9 rounded-full text-sm transition-all border ${
              value === o
                ? "border-primary text-foreground bg-primary/10"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

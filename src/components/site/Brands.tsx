const brands = [
  "KOHLER",
  "GROHE",
  "FRANKE",
  "HANSGROHE",
  "PORCELANOSA",
  "TEKA",
  "ROCA",
  "DELTA",
  "MOEN",
  "BOSCH",
];

export function Brands() {
  const list = [...brands, ...brands];
  return (
    <section className="relative py-20 border-y border-border bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary text-center">
          — Marcas Representadas
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {list.map((b, i) => (
            <div
              key={i}
              className="shrink-0 px-10 md:px-16 py-4 group cursor-default"
            >
              <span className="text-2xl md:text-3xl font-semibold tracking-[0.15em] text-muted-foreground/50 group-hover:text-gradient-brand transition-all duration-500">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

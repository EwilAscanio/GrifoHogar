import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const cols = [
  {
    title: "Catálogo",
    links: ["Griferías", "Baños", "Cocinas", "Fregaderos", "Campanas", "Hornos", "Calentadores"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Showroom", "Proyectos", "Blog", "Trabaja con nosotros"],
  },
  {
    title: "Soporte",
    links: ["Contacto", "Garantías", "Instalación", "Devoluciones", "Preguntas frecuentes"],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-10 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-border">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-10 rounded-xl bg-gradient-brand text-primary-foreground inline-flex items-center justify-center font-bold text-lg shadow-glow">
                G
              </span>
              <span className="text-lg font-semibold">
                Grifo<span className="text-primary">Hogar</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Showroom premium especializado en griferías, baños, cocinas y
              productos para remodelación residencial.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full glass-light text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
                  {c.title}
                </div>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Grifo Hogar. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacidad</a>
            <a href="#" className="hover:text-foreground">Términos</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

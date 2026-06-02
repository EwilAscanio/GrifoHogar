import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#categorias", label: "Categorías" },
  { href: "#showroom", label: "Showroom" },
  { href: "#productos", label: "Productos" },
  { href: "#por-que", label: "Por qué nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 transition-all duration-500 ${
          scrolled ? "glass rounded-2xl mx-4 md:mx-6" : ""
        }`}
      >
        <nav className="flex items-center justify-between h-14">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-brand text-primary-foreground font-bold text-lg shadow-glow">
              G
            </span>
            <span className="font-semibold tracking-tight text-foreground">
              Grifo<span className="text-primary">Hogar</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition-all"
            >
              Cotizar Ahora
            </a>
          </div>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg glass-light text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden glass rounded-2xl mt-2 p-4 animate-fade-in">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-3 py-2 rounded-lg text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#contacto"
                  className="mt-2 inline-flex w-full items-center justify-center h-11 rounded-full bg-gradient-brand text-primary-foreground font-medium"
                >
                  Cotizar Ahora
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

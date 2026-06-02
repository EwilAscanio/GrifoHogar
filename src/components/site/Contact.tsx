import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="relative py-28 md:py-40 bg-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left — map + info */}
          <div className="rounded-3xl overflow-hidden glass relative min-h-[480px] flex flex-col">
            <div className="relative h-72 lg:h-80 overflow-hidden">
              <iframe
                title="Ubicación Grifo Hogar"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-75.6%2C6.22%2C-75.55%2C6.26&layer=mapnik"
                loading="lazy"
                className="absolute inset-0 w-full h-full grayscale contrast-110 brightness-75 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
            </div>
            <div className="p-8 md:p-10 space-y-6 flex-1">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                  — Visítanos
                </p>
                <h3 className="text-2xl font-semibold">Showroom Grifo Hogar</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>Av. El Poblado #45-22, Medellín, Colombia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                  <a href="tel:+5740000000" className="hover:text-primary transition-colors">
                    +57 (4) 000 0000
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                  <a href="mailto:hola@grifohogar.com" className="hover:text-primary transition-colors">
                    hola@grifohogar.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>Lun–Sáb · 9:00 a.m. – 7:00 p.m.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl glass p-8 md:p-10 flex flex-col gap-5"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                — Hablemos
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                Comencemos tu proyecto.
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Cuéntanos qué espacio quieres transformar y un asesor te
                contactará en menos de 24 horas.
              </p>
            </div>

            <div className="grid gap-4">
              <Field label="Nombre" name="nombre" placeholder="Tu nombre completo" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Teléfono" name="telefono" type="tel" placeholder="+57" />
                <Field label="Correo" name="correo" type="email" placeholder="tu@email.com" />
              </div>
              <Field
                label="Mensaje"
                name="mensaje"
                as="textarea"
                placeholder="Cuéntanos sobre tu proyecto…"
              />
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2 h-14 rounded-full bg-gradient-brand text-primary-foreground font-medium shadow-glow hover:scale-[1.01] transition-transform"
            >
              {sent ? "¡Mensaje enviado!" : "Hablar con un Asesor"}
              <Send
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Tus datos están seguros. Solo los usamos para contactarte.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "textarea";
}) {
  const base =
    "w-full bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required
          rows={4}
          placeholder={placeholder}
          className={base + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

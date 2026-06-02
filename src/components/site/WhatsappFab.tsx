import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/5740000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#22c55e] text-white shadow-elegant pulse-ring transition-transform hover:scale-105">
        <MessageCircle size={26} />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-black/80 text-white text-xs px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        Chatea con nosotros
      </span>
    </a>
  );
}

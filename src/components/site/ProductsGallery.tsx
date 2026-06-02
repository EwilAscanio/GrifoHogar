import { useState } from "react";
import { Product } from "./productTypes";
import { PRODUCTS } from "./productData";
import { Check, ChevronRight, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORY_FILTERS = ["Todos", "Griferías", "Baños", "Cocinas", "Fregaderos", "Campanas", "Hornos", "Calentadores"];

export function ProductsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeItemDetails, setActiveItemDetails] = useState<string | null>(null);

  const filteredProducts = selectedCategory === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter((p: Product) => p.category === selectedCategory);

  return (
    <section className="relative py-28 md:py-40 bg-surface overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-primary font-bold uppercase tracking-[0.2em] block mb-3">
            Galería de Productos
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
            Nuestros <span className="font-bold text-primary">Productos Destacados</span>
          </h2>
          <p className="text-muted-foreground font-light text-base mt-4 leading-relaxed">
            Diseños esculturales que destacan por su rendimiento tecnológico. Explora nuestra gama y solicita una cotización.
          </p>
        </div>

        <div className="flex gap-2.5 pb-4 mb-12 overflow-x-auto no-scrollbar border-b border-white/5">
          {CATEGORY_FILTERS.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-surface-elevated border border-white/5 text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p: Product) => {
              const showDetails = activeItemDetails === p.id;

              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between group shadow-card hover:shadow-elegant transition-all duration-300 relative"
                >
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-background/95 p-6 z-20 flex flex-col justify-between text-foreground"
                      >
                        <div>
                          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-primary font-bold">
                              Especificación Técnica
                            </span>
                            <span className="font-mono text-xs text-primary">{p.price}</span>
                          </div>

                          <h4 className="font-display font-medium text-lg text-foreground mb-2">{p.name}</h4>
                          <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">{p.description}</p>

                          <div className="flex flex-col gap-2.5">
                            {p.specs?.map((spec: string) => (
                              <div key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Check size={12} className="text-primary flex-shrink-0" />
                                <span>{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveItemDetails(null)}
                          className="w-full text-center py-3.5 border border-white/10 rounded-xl font-mono text-xs uppercase text-muted-foreground hover:text-foreground hover:border-white/20 cursor-pointer transition-all"
                        >
                          <X size={14} className="inline mr-1" />
                          Cerrar Ficha Técnica
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <div className="p-6 pb-2 flex justify-between items-center z-10 relative">
                      <span className="px-3 py-1 rounded-full bg-surface-elevated text-[9px] font-mono uppercase tracking-[0.15em] text-secondary font-bold">
                        {p.category}
                      </span>

                      <button
                        onClick={() => setActiveItemDetails(p.id)}
                        className="text-xs font-mono uppercase text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer"
                      >
                        Ficha Técnica
                        <ChevronRight size={12} />
                      </button>
                    </div>

                    <div className="relative h-64 overflow-hidden mb-6 flex justify-center items-center px-6">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full max-h-[220px] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="px-8 pb-4">
                      <p className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest block mb-2">
                        {p.benefit}
                      </p>

                      <h3 className="font-display font-bold text-xl text-foreground mb-2 leading-tight">
                        {p.name}
                      </h3>

                      <p className="text-xs text-muted-foreground font-light line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground block font-bold">DESDE</span>
                      <span className="font-mono text-xl font-bold text-foreground">
                        {p.price}
                      </span>
                    </div>

                    <button
                      className="flex items-center gap-2 group/btn bg-gradient-to-r from-foreground to-muted-foreground hover:bg-gradient-brand text-background font-sans text-xs uppercase tracking-wider font-bold py-3.5 px-5 rounded-full transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <ShoppingBag size={12} />
                      Solicitar Cotización
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center max-w-xl mx-auto border-t border-white/5 pt-12">
          <p className="font-display font-medium text-foreground text-base mb-1">
            ¿Buscas una cotización volumétrica para obra civil?
          </p>
          <p className="text-xs text-muted-foreground font-light mb-4">
            Ofrecemos convenios de desarrollo y descuentos de hasta el 35% en compras por mayoreo para arquitectos calificados y constructoras residenciales. Contáctanos para recibir asesoría corporativa.
          </p>
        </div>
      </div>
    </section>
  );
}

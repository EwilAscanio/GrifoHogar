import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Experience } from "@/components/site/Experience";
import { Categories } from "@/components/site/Categories";
import { Showroom } from "@/components/site/Showroom";
import { Products } from "@/components/site/Products";
import { ProductsGallery } from "@/components/site/ProductsGallery";
import { WhyUs } from "@/components/site/WhyUs";
import { DesignVision } from "@/components/site/DesignVision";
import { Brands } from "@/components/site/Brands";
import { Testimonials } from "@/components/site/Testimonials";
import { Promo } from "@/components/site/Promo";
import { Visualizer } from "@/components/site/Visualizer";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grifo Hogar — Showroom premium en griferías, baños y cocinas" },
      {
        name: "description",
        content:
          "Showroom digital premium de griferías, accesorios para baños, cocinas, fregaderos, campanas, hornos y calentadores. Asesoría especializada y marcas líderes.",
      },
      { property: "og:title", content: "Grifo Hogar — Showroom Premium" },
      {
        property: "og:description",
        content:
          "Soluciones premium para baños, cocinas y espacios que inspiran. Cotiza tu remodelación con asesoría especializada.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Categories />
      <Showroom />
      <Products />
      <ProductsGallery />
      <WhyUs />
      <DesignVision />
      <Brands />
      <Testimonials />
      <Visualizer />
      <Promo />
      <Contact />
      <Footer />
      <WhatsappFab />
    </main>
  );
}

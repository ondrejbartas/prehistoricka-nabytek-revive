import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import kitchen1 from "@/assets/gallery/kitchen-1.jpg";
import wardrobe1 from "@/assets/gallery/wardrobe-1.jpg";
import bookshelf1 from "@/assets/gallery/bookshelf-1.jpg";
import office1 from "@/assets/gallery/office-1.jpg";
import hallway1 from "@/assets/gallery/hallway-1.jpg";

const galleryItems = [
  { src: kitchen1, alt: "Kuchyňská linka na míru", label: "Kuchyně" },
  { src: wardrobe1, alt: "Vestavěná skříň na míru", label: "Vestavěné skříně" },
  { src: bookshelf1, alt: "Obývací stěna s knihovnou", label: "Obývací stěny" },
  { src: office1, alt: "Pracovna na míru", label: "Pracovny" },
  { src: hallway1, alt: "Předsíňový nábytek", label: "Předsíně" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((c) => (c !== null ? (c - 1 + galleryItems.length) % galleryItems.length : null));
  const next = () =>
    setLightbox((c) => (c !== null ? (c + 1) % galleryItems.length : null));

  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Galerie realizací
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-body">
          Nahlédněte do našich dokončených projektů
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground font-display font-semibold text-lg px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Zavřít"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            aria-label="Předchozí"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            aria-label="Další"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={galleryItems[lightbox].src}
            alt={galleryItems[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/90 font-display text-lg">
            {galleryItems[lightbox].label}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;

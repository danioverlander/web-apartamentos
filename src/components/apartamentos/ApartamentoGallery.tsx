"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ApartamentoGalleryProps {
  imagenes: string[];
  nombre: string;
}

export default function ApartamentoGallery({ imagenes, nombre }: ApartamentoGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + imagenes.length) % imagenes.length : null));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % imagenes.length : null));

  return (
    <>
      {/* Grid galería */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {imagenes.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightbox(i)}
            className={`relative overflow-hidden cursor-pointer group ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}`}
            aria-label={`Ver imagen ${i + 1} de ${nombre}`}
          >
            <Image
              src={src}
              alt={`${nombre} — imagen ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-earth-950/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          {/* Botón cerrar */}
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          {/* Imagen */}
          <div
            className="relative w-full max-w-5xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagenes[lightbox]}
              alt={`${nombre} — imagen ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Navegación */}
          <button
            className="absolute left-4 md:left-8 text-cream/70 hover:text-cream transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          <button
            className="absolute right-4 md:right-8 text-cream/70 hover:text-cream transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-widest uppercase text-cream/50">
            {lightbox + 1} / {imagenes.length}
          </p>
        </div>
      )}
    </>
  );
}

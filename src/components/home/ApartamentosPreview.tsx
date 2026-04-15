import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { apartamentos } from "@/data/apartamentos";

export default function ApartamentosPreview() {
  return (
    <section className="bg-cream py-section">
      <div className="max-w-content mx-auto px-6 md:px-10">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-18">
          <FadeIn>
            <SectionLabel>Apartamentos La Pornacal</SectionLabel>
            <h2
              className="font-serif text-earth-900 leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
            >
              Siete refugios<br />
              en la naturaleza.
            </h2>
          </FadeIn>
          <FadeIn delay={200} className="md:text-right md:max-w-xs">
            <p className="font-sans text-earth-500 leading-relaxed text-sm">
              Cada apartamento es un espacio íntimo y cuidado,
              diseñado para que el ruido del mundo quede fuera.
            </p>
          </FadeIn>
        </div>

        {/* Grid de apartamentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {apartamentos.map((apt, i) => (
            <FadeIn key={apt.slug} delay={i * 80} direction="up">
              <Link
                href={`/apartamentos/${apt.slug}`}
                className="group block relative overflow-hidden bg-earth-100 cursor-pointer"
              >
                {/* Imagen */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={apt.imagen}
                    alt={`${apt.nombre} — Apartamentos La Pornacal, Somiedo`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/20 transition-colors duration-500" />

                  {/* Etiqueta destacado */}
                  {apt.destacado && (
                    <span className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm font-sans text-[9px] tracking-widest uppercase text-earth-700 px-3 py-1.5">
                      Destacado
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-earth-800 text-xl group-hover:text-earth-600 transition-colors duration-300">
                      {apt.nombre}
                    </h3>
                    <span className="font-sans text-[10px] text-earth-500 tracking-wide mt-1.5 whitespace-nowrap ml-3">
                      {apt.precio}
                    </span>
                  </div>

                  <p className="font-sans text-earth-500 text-sm leading-relaxed mb-4">
                    {apt.descripcionCorta}
                  </p>

                  <div className="flex items-center gap-4 pt-3 border-t border-earth-200">
                    <span className="flex items-center gap-1.5 font-sans text-[10px] text-earth-500 tracking-wide uppercase">
                      <Users size={12} strokeWidth={1.5} />
                      {apt.capacidad} personas
                    </span>
                    <span className="font-sans text-[10px] text-earth-500 tracking-wide uppercase">
                      {apt.habitaciones} hab
                    </span>
                    <span className="font-sans text-[10px] text-earth-500 tracking-wide uppercase">
                      {apt.metros} m²
                    </span>
                  </div>
                </div>

                {/* Flecha hover */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-earth-500">
                    Ver →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTA ver todos */}
        <FadeIn className="mt-12 text-center">
          <Link
            href="/apartamentos"
            className="inline-flex items-center gap-3 font-sans text-[10px] tracking-widest uppercase text-earth-700 border border-earth-400 hover:border-earth-700 hover:text-earth-900 px-8 py-3.5 transition-all duration-500"
          >
            Explorar todos los apartamentos
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

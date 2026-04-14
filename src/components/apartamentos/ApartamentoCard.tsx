import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, BedDouble, Bath, Maximize } from "lucide-react";
import type { Apartamento } from "@/types";

interface ApartamentoCardProps {
  apartamento: Apartamento;
  index?: number;
}

export default function ApartamentoCard({ apartamento: apt, index = 0 }: ApartamentoCardProps) {
  return (
    <Link
      href={`/apartamentos/${apt.slug}`}
      className="group block bg-cream overflow-hidden transition-shadow duration-500 hover:shadow-xl hover:shadow-earth-800/10"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Imagen */}
      <div className="relative aspect-[16/10] overflow-hidden bg-earth-200">
        <Image
          src={apt.imagen}
          alt={`${apt.nombre} — Apartamentos La Pornacal, Villar de Vildas, Somiedo`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-earth-900/0 group-hover:bg-earth-900/15 transition-colors duration-500" />

        {/* Destacado badge */}
        {apt.destacado && (
          <span className="absolute top-4 left-4 bg-cream/95 font-sans text-[9px] tracking-widest uppercase text-earth-700 px-3 py-1.5">
            Destacado
          </span>
        )}

        {/* Precio */}
        {apt.precio && (
          <span className="absolute bottom-4 right-4 bg-earth-900/80 backdrop-blur-sm text-cream font-sans text-xs px-3 py-1.5">
            {apt.precio}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="font-serif text-earth-800 text-2xl group-hover:text-earth-600 transition-colors duration-300 mb-1">
            {apt.nombre}
          </h3>
          <p className="font-sans text-[10px] text-earth-500 uppercase tracking-widest">
            {apt.subtitulo}
          </p>
        </div>

        <p className="font-sans text-earth-600 text-sm leading-relaxed mb-5">
          {apt.descripcionCorta}
        </p>

        {/* Specs */}
        <div className="flex flex-wrap items-center gap-4 py-4 border-t border-earth-200">
          <Spec icon={<Users size={13} strokeWidth={1.5} />} label={`${apt.capacidad} personas`} />
          <Spec icon={<BedDouble size={13} strokeWidth={1.5} />} label={`${apt.habitaciones} hab`} />
          <Spec icon={<Bath size={13} strokeWidth={1.5} />} label={`${apt.banos} baño${apt.banos > 1 ? "s" : ""}`} />
          <Spec icon={<Maximize size={13} strokeWidth={1.5} />} label={`${apt.metros} m²`} />
        </div>

        {/* CTA inline */}
        <div className="flex items-center gap-2 mt-3 font-sans text-[10px] tracking-widest uppercase text-earth-600 group-hover:text-earth-800 transition-colors duration-300">
          Ver apartamento
          <span className="w-6 h-px bg-earth-400 group-hover:w-10 transition-all duration-500" />
        </div>
      </div>
    </Link>
  );
}

function Spec({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1.5 font-sans text-[10px] text-earth-500 uppercase tracking-wide">
      {icon}
      {label}
    </span>
  );
}

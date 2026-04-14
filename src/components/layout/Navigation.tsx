"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio",        href: "/" },
  { label: "Apartamentos",  href: "/apartamentos" },
  { label: "El lugar",      href: "/el-lugar" },
  { label: "Nosotros",      href: "/nosotros" },
  { label: "FAQ",           href: "/faq" },
  { label: "Contacto",      href: "/contacto" },
];

interface NavigationProps {
  open: boolean;
  onClose: () => void;
}

export default function Navigation({ open, onClose }: NavigationProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-earth-900/60 backdrop-blur-sm transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[min(85vw,360px)] bg-cream flex flex-col transition-all duration-700",
          open ? "translate-x-0" : "translate-x-full"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        {/* Cabecera panel */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-earth-100">
          <span className="font-serif text-sm tracking-[0.12em] text-earth-700">
            NORTH
          </span>
          <button
            onClick={onClose}
            className="text-earth-600 hover:text-earth-900 transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-8 py-10 gap-2 flex-1">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-serif text-display-sm text-earth-800 hover:text-earth-500 transition-colors duration-300 py-2"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer panel */}
        <div className="px-8 pb-10 border-t border-earth-100 pt-6">
          <Link
            href="/contacto"
            onClick={onClose}
            className="block w-full text-center font-sans text-[10px] tracking-widest uppercase bg-earth-800 text-cream py-4 hover:bg-earth-900 transition-colors duration-300"
          >
            Reservar ahora
          </Link>
          <p className="mt-6 font-sans text-[10px] text-earth-400 tracking-wide">
            Somiedo · Asturias · España
          </p>
        </div>
      </div>
    </>
  );
}

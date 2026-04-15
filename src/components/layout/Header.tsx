"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";

// ─── Icono teito (cabaña asturiana de cubierta vegetal) ───────────────────────
function TeitoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Tejado — forma característica del teito, muy inclinado */}
      <path
        d="M26 4 L3 28 H49 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Cuerpo de piedra */}
      <rect x="10" y="28" width="32" height="18" fill="currentColor" opacity="0.85" />
      {/* Puerta */}
      <rect x="21" y="34" width="10" height="12" fill="currentColor" opacity="0.35" />
      {/* Línea de hierba en el tejado — detalle distintivo */}
      <path
        d="M3 28 H49"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </svg>
  );
}

// ─── Header principal ─────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10",
          scrolled
            ? "bg-[#111]/92 backdrop-blur-md py-4"
            : "bg-black/55 backdrop-blur-md py-5"
        )}
      >
        <div className="max-w-content mx-auto px-6 md:px-12 flex items-center justify-between gap-8">

          {/* ── MARCA: icono + texto ── */}
          <Link
            href="/"
            className="flex items-center gap-3.5 shrink-0 group"
          >
            {/* Icono teito */}
            <TeitoIcon className="w-9 h-9 text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Texto de marca */}
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-[0.12em] text-white font-medium">
                NORTH
              </span>
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase text-white/65 font-light mt-0.5">
                Authentic Experience
              </span>
            </div>
          </Link>

          {/* ── NAV escritorio ── */}
          <nav className="hidden md:flex items-center gap-9 ml-auto">
            <NavLink href="/apartamentos">Apartamentos</NavLink>
            <NavLink href="/el-lugar">El lugar</NavLink>
            <NavLink href="/nosotros">Nosotros</NavLink>

            {/* Botón Reservar */}
            <Link
              href="/contacto"
              className="font-sans text-[10px] tracking-widest uppercase font-semibold bg-white text-black px-7 py-3 hover:bg-stone-100 transition-colors duration-300"
            >
              Reservar
            </Link>
          </nav>

          {/* ── Hamburguesa móvil ── */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 ml-auto cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-[1.5px] w-6 bg-white" />
            ))}
          </button>
        </div>
      </header>

      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

// ─── Link de navegación ───────────────────────────────────────────────────────
function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-sans text-[10px] tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/55 group-hover:w-full transition-all duration-350" />
    </Link>
  );
}

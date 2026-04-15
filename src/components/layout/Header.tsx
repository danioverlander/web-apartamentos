"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";

// ─── Icono teito ───────────────────────────────────────────────────────────────
function TeitoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Tejado — cúpula ancha y redondeada */}
      <path
        d="M6 44 C6 44 12 10 50 6 C88 10 94 44 94 44 C78 50 50 52 22 50 Z"
        fill="currentColor"
        opacity="0.90"
      />
      {/* Franja de hierba/musgo */}
      <path
        d="M6 44 C22 52 78 52 94 44"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.40"
        fill="none"
      />
      {/* Muro de piedra */}
      <path
        d="M20 50 C20 50 18 62 50 64 C82 62 80 50 80 50 C64 56 36 56 20 50 Z"
        fill="currentColor"
        opacity="0.75"
      />
      {/* Líneas de piedra */}
      <path d="M22 53 C38 58 62 58 78 53" stroke="currentColor" strokeWidth="0.8" opacity="0.30" fill="none" />
      <path d="M24 57 C38 61 62 61 76 57" stroke="currentColor" strokeWidth="0.8" opacity="0.25" fill="none" />
      {/* Ventana */}
      <rect x="43" y="48" width="14" height="9" rx="1" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-earth-200",
          scrolled
            ? "bg-[#F5F1E8] shadow-sm py-3"
            : "bg-[#F5F1E8]/98 py-4"
        )}
      >
        <div className="max-w-content mx-auto px-6 md:px-12 flex items-center justify-between gap-8">

          {/* ── MARCA ── */}
          <Link href="/" className="flex items-center gap-4 shrink-0 group">

            {/* Icono teito — color tierra */}
            <TeitoIcon className="w-10 h-10 text-earth-700 group-hover:text-earth-900 transition-colors duration-300" />

            {/* Texto de marca */}
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-[0.12em] text-earth-900 font-semibold">
                NORTH
              </span>
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase text-earth-500 font-light mt-0.5">
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
              className="font-sans text-[10px] tracking-widest uppercase font-semibold bg-earth-800 text-cream px-7 py-3 hover:bg-earth-900 transition-colors duration-300"
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
              <span key={i} className="block h-[1.5px] w-6 bg-earth-800" />
            ))}
          </button>
        </div>
      </header>

      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

// ─── NavLink ──────────────────────────────────────────────────────────────────
function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-sans text-[10px] tracking-widest uppercase text-earth-600 hover:text-earth-900 transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-earth-400 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

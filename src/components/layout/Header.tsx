"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import Navigation from "./Navigation";

// ─── Header ───────────────────────────────────────────────────────────────────
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#EFE8DC] shadow-sm border-b border-[#D9CFBE]">
        <div className="max-w-content mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-8">

          {/* ── MARCA ── */}
          <Link href="/" className="flex items-center gap-4 shrink-0 group">

            {/* Logo imagen — reemplazar logo-teito.png con la foto real */}
            {/* <Image
              src="/images/logo-teito.png"
              alt="North Authentic Experience"
              width={52}
              height={52}
              className="object-contain"
            /> */}

            {/* Texto de marca */}
            <div className="flex flex-col leading-none gap-1">
              <span className="font-serif text-3xl tracking-[0.12em] text-neutral-900 font-bold">
                NORTH
              </span>
              <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-neutral-800 font-medium">
                Authentic Experience
              </span>
            </div>
          </Link>

          {/* ── NAV escritorio ── */}
          <nav className="hidden md:flex items-center gap-10 ml-auto">
            <NavLink href="/apartamentos">Apartamentos</NavLink>
            <NavLink href="/el-lugar">El lugar</NavLink>
            <NavLink href="/nosotros">Nosotros</NavLink>

            {/* Botón Reservar */}
            <Link
              href="/contacto"
              className="font-sans text-[11px] tracking-widest uppercase font-semibold bg-neutral-900 text-white px-8 py-3 hover:bg-neutral-700 transition-colors duration-300 rounded-sm"
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
              <span key={i} className="block h-[1.5px] w-6 bg-neutral-900" />
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
      className="relative font-sans text-[11px] tracking-widest uppercase text-neutral-700 hover:text-neutral-900 transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-neutral-500 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          scrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logotipo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={cn(
                "font-serif font-light tracking-[0.12em] text-base transition-colors duration-500",
                scrolled ? "text-earth-900" : "text-cream"
              )}
            >
              NORTH
            </span>
            <span
              className={cn(
                "font-sans font-light tracking-[0.25em] text-[9px] uppercase transition-colors duration-500",
                scrolled ? "text-earth-500" : "text-earth-200/80"
              )}
            >
              Authentic Experience
            </span>
          </Link>

          {/* Nav escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/apartamentos" scrolled={scrolled}>
              Apartamentos
            </NavLink>
            <NavLink href="/el-lugar" scrolled={scrolled}>
              El lugar
            </NavLink>
            <NavLink href="/nosotros" scrolled={scrolled}>
              Nosotros
            </NavLink>
            <Link
              href="/contacto"
              className={cn(
                "font-sans text-[10px] tracking-widest uppercase px-6 py-2.5 border transition-all duration-500",
                scrolled
                  ? "border-earth-800 text-earth-800 hover:bg-earth-800 hover:text-cream"
                  : "border-cream/60 text-cream hover:border-cream hover:bg-cream/10"
              )}
            >
              Reservar
            </Link>
          </nav>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "block h-px w-6 transition-colors duration-500",
                  scrolled ? "bg-earth-800" : "bg-cream"
                )}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Menú móvil */}
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  children,
  scrolled,
}: {
  href: string;
  children: ReactNode;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "font-sans text-[10px] tracking-widest uppercase transition-colors duration-500 hover:opacity-60",
        scrolled ? "text-earth-700" : "text-cream/80"
      )}
    >
      {children}
    </Link>
  );
}

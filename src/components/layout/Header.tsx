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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/96 backdrop-blur-sm shadow-sm py-4"
            : "bg-black/30 backdrop-blur-md py-5"
        )}
      >
        <div className="max-w-content mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <span className={cn(
              "font-serif tracking-[0.15em] text-lg transition-colors duration-500",
              scrolled ? "text-earth-900" : "text-white"
            )}>
              NORTH
            </span>
            <span className={cn(
              "font-sans font-light tracking-[0.22em] text-[9px] uppercase transition-colors duration-500",
              scrolled ? "text-earth-500" : "text-white/70"
            )}>
              Authentic Experience
            </span>
          </Link>

          {/* Nav escritorio */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink href="/apartamentos" scrolled={scrolled}>
              Apartamentos
            </NavLink>
            <NavLink href="/el-lugar" scrolled={scrolled}>
              El lugar
            </NavLink>
            <NavLink href="/nosotros" scrolled={scrolled}>
              Nosotros
            </NavLink>

            {/* Botón Reservar — destacado */}
            <Link
              href="/contacto"
              className={cn(
                "font-sans text-[10px] tracking-widest uppercase px-7 py-3 transition-all duration-500 font-medium",
                scrolled
                  ? "bg-earth-800 text-cream hover:bg-earth-900"
                  : "bg-white text-earth-900 hover:bg-white/90"
              )}
            >
              Reservar
            </Link>
          </nav>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "block h-[1.5px] w-6 transition-colors duration-500",
                  scrolled ? "bg-earth-800" : "bg-white"
                )}
              />
            ))}
          </button>
        </div>
      </header>

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
        "relative font-sans text-[10px] tracking-widest uppercase transition-all duration-400 group",
        scrolled
          ? "text-earth-700 hover:text-earth-900"
          : "text-white/85 hover:text-white"
      )}
    >
      {children}
      {/* Underline animado en hover */}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300",
          scrolled ? "bg-earth-700" : "bg-white/60"
        )}
      />
    </Link>
  );
}

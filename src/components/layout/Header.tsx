"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          scrolled
            ? "bg-[#1a1a1a]/95 backdrop-blur-md border-white/10 py-4"
            : "bg-black/60 backdrop-blur-md border-white/10 py-5"
        )}
      >
        <div className="max-w-content mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <span className="font-serif tracking-[0.15em] text-xl text-white">
              NORTH
            </span>
            <span className="font-sans font-light tracking-[0.22em] text-[9px] uppercase text-white/60">
              Authentic Experience
            </span>
          </Link>

          {/* Nav escritorio */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink href="/apartamentos">Apartamentos</NavLink>
            <NavLink href="/el-lugar">El lugar</NavLink>
            <NavLink href="/nosotros">Nosotros</NavLink>

            <Link
              href="/contacto"
              className="font-sans text-[10px] tracking-widest uppercase font-semibold bg-white text-black px-7 py-3 hover:bg-stone-100 transition-colors duration-300"
            >
              Reservar
            </Link>
          </nav>

          {/* Hamburguesa */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
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

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-sans text-[10px] tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

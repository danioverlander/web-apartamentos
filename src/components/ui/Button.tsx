"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-500 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-700 focus-visible:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-earth-800 text-cream hover:bg-earth-900 active:scale-[0.98]",
    secondary:
      "bg-cream text-earth-800 hover:bg-earth-100 active:scale-[0.98]",
    ghost:
      "text-earth-700 hover:text-earth-900 underline underline-offset-4 decoration-earth-300 hover:decoration-earth-700",
    outline:
      "border border-earth-400 text-earth-700 hover:border-earth-700 hover:text-earth-900 bg-transparent active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs tracking-widest uppercase",
    md: "px-8 py-3.5 text-xs tracking-widest uppercase",
    lg: "px-10 py-4 text-sm tracking-widest uppercase",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

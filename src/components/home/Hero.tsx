import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] max-h-[1080px] flex items-center overflow-hidden">

      {/* Foto */}
      <Image
        src="/images/hero.jpg"
        alt="Terraza con vistas al valle — Apartamentos La Pornacal, Villar de Vildas, Somiedo"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-12 pt-28 md:pt-32">

        {/* Localización */}
        <p
          className="font-sans text-sm tracking-[0.3em] uppercase text-white/70 mb-5 animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          Villar de Vildas &nbsp;·&nbsp; Somiedo &nbsp;·&nbsp; Asturias
        </p>

        {/* Nombre del producto — lo más importante */}
        <p
          className="font-serif text-white/90 mb-3 animate-fade-in"
          style={{
            fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
            letterSpacing: "0.08em",
            animationDelay: "200ms",
          }}
        >
          Apartamentos La Pornacal
        </p>

        {/* Titular principal */}
        <h1
          className="font-serif text-white mb-5 animate-fade-up"
          style={{
            fontSize: "clamp(3.5rem, 8vw, 8.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            textShadow: "0 2px 40px rgba(0,0,0,0.6)",
            animationDelay: "300ms",
          }}
        >
          Desconecta.<br />
          <em className="not-italic">Vuelve a lo esencial.</em>
        </h1>

        {/* Subtítulo con datos concretos */}
        <p
          className="font-sans text-white/80 max-w-lg mb-10 leading-relaxed animate-fade-up"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            animationDelay: "450ms",
          }}
        >
          Siete apartamentos rurales en el corazón del Parque Natural de Somiedo.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "600ms" }}
        >
          <Link
            href="/apartamentos"
            className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase font-semibold bg-white text-neutral-900 px-10 py-4 hover:bg-neutral-100 transition-colors duration-300"
          >
            Ver apartamentos
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase font-semibold border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-neutral-900 transition-all duration-300"
          >
            Reservar ahora
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1200ms" }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/50 mb-1">
          scroll
        </span>
        <div className="w-px h-10 bg-white/25 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white/70 animate-[slideDown_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}

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

      {/* OVERLAY FUERTE — cubre toda la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/65" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-12 pt-24">

        {/* Localización */}
        <p
          className="font-sans text-sm tracking-[0.3em] uppercase text-white/80 mb-8 animate-fade-in"
          style={{ animationDelay: "150ms" }}
        >
          Villar de Vildas &nbsp;·&nbsp; Pueblo Ejemplar de Asturias &nbsp;·&nbsp; Somiedo
        </p>

        {/* Titular */}
        <h1
          className="font-serif text-white mb-8 animate-fade-up"
          style={{
            fontSize: "clamp(4rem, 9vw, 9.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            textShadow: "0 2px 40px rgba(0,0,0,0.7)",
            animationDelay: "300ms",
          }}
        >
          Desconecta.<br />
          <em className="not-italic">Vuelve a lo esencial.</em>
        </h1>

        {/* Subtítulo */}
        <p
          className="font-sans text-white/80 max-w-xl mb-14 leading-relaxed animate-fade-up"
          style={{
            fontSize: "clamp(1.05rem, 1.7vw, 1.2rem)",
            animationDelay: "480ms",
          }}
        >
          Siete apartamentos rurales en el corazón del Parque Natural de Somiedo.
          Un lugar para bajar el ritmo, respirar profundo y recordar lo que importa.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-5 animate-fade-up"
          style={{ animationDelay: "650ms" }}
        >
          <Link
            href="/apartamentos"
            className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase font-semibold bg-white text-black px-10 py-4 hover:bg-stone-100 transition-colors duration-300"
          >
            Ver apartamentos
          </Link>
          <Link
            href="/el-lugar"
            className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase border-2 border-white/70 text-white px-10 py-4 hover:border-white hover:bg-white/15 transition-all duration-300"
          >
            El lugar
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

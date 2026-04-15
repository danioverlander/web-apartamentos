import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-end overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Terraza con vistas al valle — Apartamentos La Pornacal, Villar de Vildas, Somiedo"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradiente oscuro desde abajo, más pronunciado para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950/95 via-earth-900/55 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-10 pb-16 md:pb-24">

        {/* Localización — más grande y visible */}
        <div className="flex flex-wrap items-center gap-2 mb-5 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-cream font-medium">
            Villar de Vildas
          </span>
          <span className="text-cream/40 text-xs">·</span>
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-cream/70">
            Pueblo Ejemplar de Asturias
          </span>
          <span className="text-cream/40 text-xs">·</span>
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-cream/70">
            Somiedo
          </span>
        </div>

        {/* Titular — más grande */}
        <h1
          className="font-serif text-cream leading-[1.05] tracking-tight mb-7 animate-fade-up"
          style={{
            fontSize: "clamp(4rem, 9vw, 9.5rem)",
            animationDelay: "350ms",
            textShadow: "0 2px 24px rgba(0,0,0,0.45)",
          }}
        >
          Desconecta.<br />
          <em className="not-italic">Vuelve a lo esencial.</em>
        </h1>

        {/* Subtítulo — más grande y legible */}
        <p
          className="font-sans font-light text-cream/85 max-w-lg mb-10 leading-relaxed animate-fade-up"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", animationDelay: "550ms" }}
        >
          Siete apartamentos rurales en el corazón del Parque Natural de Somiedo.
          Un lugar para bajar el ritmo, respirar profundo y recordar lo que importa.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "750ms" }}>
          <Link
            href="/apartamentos"
            className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase bg-cream text-earth-800 px-9 py-4 hover:bg-earth-100 transition-colors duration-500"
          >
            Ver apartamentos
          </Link>
          <Link
            href="/el-lugar"
            className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase border border-cream/60 text-cream px-9 py-4 hover:border-cream hover:bg-cream/10 transition-colors duration-500"
          >
            El lugar
          </Link>
        </div>
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in"
           style={{ animationDelay: "1200ms" }}>
        <div className="w-px h-12 bg-cream/30 relative overflow-hidden">
          <div className="w-full h-1/2 bg-cream/60 animate-[slideDown_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}

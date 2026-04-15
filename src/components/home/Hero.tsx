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

      {/* Overlay base — oscurece toda la imagen por igual */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient adicional de abajo hacia arriba — más profundidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-10 pt-20">

        {/* Localización */}
        <div
          className="flex flex-wrap items-center gap-2 mb-7 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <span className="font-sans text-xs md:text-[13px] tracking-[0.28em] uppercase text-white font-medium">
            Villar de Vildas
          </span>
          <span className="text-white/40 text-xs">·</span>
          <span className="font-sans text-xs md:text-[13px] tracking-[0.28em] uppercase text-white/75">
            Pueblo Ejemplar de Asturias
          </span>
          <span className="text-white/40 text-xs">·</span>
          <span className="font-sans text-xs md:text-[13px] tracking-[0.28em] uppercase text-white/75">
            Somiedo
          </span>
        </div>

        {/* Titular */}
        <h1
          className="font-serif text-white mb-8 animate-fade-up"
          style={{
            fontSize: "clamp(3.8rem, 8.5vw, 9rem)",
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            textShadow: "0 4px 32px rgba(0,0,0,0.5)",
            animationDelay: "350ms",
          }}
        >
          Desconecta.<br />
          <em className="not-italic">Vuelve a lo esencial.</em>
        </h1>

        {/* Subtítulo */}
        <p
          className="font-sans text-white/80 max-w-md mb-12 leading-relaxed animate-fade-up"
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            animationDelay: "520ms",
          }}
        >
          Siete apartamentos rurales en el corazón del Parque Natural de Somiedo.
          Un lugar para bajar el ritmo, respirar profundo y recordar lo que importa.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "700ms" }}
        >
          <Link
            href="/apartamentos"
            className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase font-medium bg-white text-earth-900 px-9 py-4 hover:bg-earth-100 transition-colors duration-300"
          >
            Ver apartamentos
          </Link>
          <Link
            href="/el-lugar"
            className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase border border-white/60 text-white px-9 py-4 hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            El lugar
          </Link>
        </div>
      </div>

      {/* Indicador scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1200ms" }}
      >
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white/60 animate-[slideDown_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}

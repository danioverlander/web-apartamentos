import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-end overflow-hidden">
      {/* Imagen de fondo — reemplaza src por tu foto real */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85"
        alt="Parque Natural de Somiedo, Asturias"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradiente oscuro desde abajo */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950/90 via-earth-900/40 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-10 pb-16 md:pb-24">
        {/* Microcopy */}
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-earth-200/70 mb-6 animate-fade-in"
           style={{ animationDelay: "200ms" }}>
          Somiedo · Asturias · Pueblo Ejemplar
        </p>

        {/* Titular */}
        <h1
          className="font-serif font-light text-cream leading-[1.05] tracking-tight mb-6 animate-fade-up"
          style={{
            fontSize: "clamp(3.5rem, 8vw, 8rem)",
            animationDelay: "400ms",
          }}
        >
          Desconecta.<br />
          <em className="not-italic">Vuelve a lo esencial.</em>
        </h1>

        {/* Subtítulo */}
        <p
          className="font-sans font-light text-earth-200/80 max-w-md mb-10 leading-relaxed animate-fade-up"
          style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", animationDelay: "600ms" }}
        >
          Siete apartamentos rurales en el corazón del Parque Natural de Somiedo.
          Un lugar para bajar el ritmo, respirar profundo y recordar lo que importa.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "800ms" }}>
          <Link
            href="/apartamentos"
            className="inline-flex items-center font-sans text-[10px] tracking-widest uppercase bg-cream text-earth-800 px-8 py-4 hover:bg-earth-100 transition-colors duration-500"
          >
            Ver apartamentos
          </Link>
          <Link
            href="/el-lugar"
            className="inline-flex items-center font-sans text-[10px] tracking-widest uppercase border border-cream/50 text-cream px-8 py-4 hover:border-cream hover:bg-cream/10 transition-colors duration-500"
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

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function CTAFinal() {
  return (
    <section className="relative py-section overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80"
        alt="Amanecer en los Picos de Europa, Asturias"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-earth-900/70" />

      {/* Contenido */}
      <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 text-center">
        <FadeIn>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-earth-200/60 mb-6">
            North Authentic Experience
          </p>
          <h2
            className="font-serif text-cream leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Tu refugio te espera.
          </h2>
          <p className="font-sans text-earth-200/80 max-w-md mx-auto leading-relaxed mb-10 text-base">
            Hay momentos que no pueden esperar. Este es uno de ellos.
            Siete apartamentos. Un lugar único. Somiedo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apartamentos"
              className="inline-flex items-center font-sans text-[10px] tracking-widest uppercase bg-cream text-earth-800 px-10 py-4 hover:bg-earth-100 transition-colors duration-500"
            >
              Ver apartamentos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center font-sans text-[10px] tracking-widest uppercase border border-cream/50 text-cream px-10 py-4 hover:border-cream hover:bg-cream/10 transition-colors duration-500"
            >
              Contactar
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

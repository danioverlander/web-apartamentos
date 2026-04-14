import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import ApartamentoCard from "@/components/apartamentos/ApartamentoCard";
import { apartamentos } from "@/data/apartamentos";

export const metadata: Metadata = {
  title: "Apartamentos La Pornacal",
  description:
    "Siete apartamentos rurales en Villar de Vildas, Somiedo. Desde refugios íntimos para dos hasta espacios para seis personas. Acceso directo a La Braña de La Pornacal.",
};

export default function ApartamentosPage() {
  return (
    <>
      {/* Hero de página */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80"
          alt="Apartamentos La Pornacal — Villar de Vildas, Somiedo"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-earth-900/30 to-transparent" />
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pb-14 w-full">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-earth-200/60 mb-4">
            Villar de Vildas · Somiedo · Asturias
          </p>
          <h1
            className="font-serif font-light text-cream leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Apartamentos<br />La Pornacal.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <SectionLabel>Siete refugios en la naturaleza</SectionLabel>
              <h2
                className="font-serif font-light text-earth-900 leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Cada uno, un espacio<br />
                pensado para desconectar.
              </h2>
            </FadeIn>
            <FadeIn delay={200} className="flex flex-col gap-4 md:pt-8">
              <p className="font-sans text-earth-600 leading-relaxed">
                No son apartamentos de catálogo. Cada uno tiene su carácter,
                sus vistas, su historia. Lo que todos comparten es lo mismo que
                comparte este lugar: silencio, naturaleza y la sensación de que
                aquí el tiempo va despacio.
              </p>
              <p className="font-sans text-earth-600 leading-relaxed">
                Desde el más íntimo para dos hasta el más amplio para seis.
                Todos con cocina equipada, calefacción y ropa de cama incluida.
                Y todos con algo que ningún catálogo puede capturar: estar aquí.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Grid de apartamentos */}
      <section className="bg-earth-50 py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {apartamentos.map((apt, i) => (
              <FadeIn key={apt.slug} delay={i * 60} direction="up">
                <ApartamentoCard apartamento={apt} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nota inferior */}
      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-narrow mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <p className="font-serif text-earth-600 text-lg md:text-xl font-light leading-relaxed">
              &ldquo;Para consultas de disponibilidad, reservas de grupo o
              estancias especiales, contáctanos directamente.
              Nos gusta hablar con la gente que viene aquí.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:daniel@northauthenticexperience.com"
                className="inline-flex items-center font-sans text-[10px] tracking-widest uppercase bg-earth-800 text-cream px-8 py-3.5 hover:bg-earth-900 transition-colors duration-500"
              >
                Contactar
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Nosotros — North Authentic Experience",
  description:
    "Conoce la historia detrás de North Authentic Experience y Apartamentos La Pornacal. Una marca que nace en Somiedo con la convicción de que hay una forma diferente de vivir la naturaleza.",
};

const valores = [
  { titulo: "Autenticidad",    texto: "No construimos experiencias de laboratorio. Lo que ofrecemos es real: un lugar real, una naturaleza real, un silencio real." },
  { titulo: "Calma",           texto: "Todo en esta marca está diseñado para reducir el ritmo. La estética, el tono, los espacios. Todo invita a ir despacio." },
  { titulo: "Sostenibilidad",  texto: "Somiedo es patrimonio. Lo tratamos como tal. Colaboramos con iniciativas locales y priorizamos el impacto mínimo en el entorno." },
  { titulo: "Conexión real",   texto: "Con la naturaleza, con el lugar, con las personas que vienen. Nos gusta conocer a quien se aloja aquí." },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
          alt="Bosque en Somiedo — North Authentic Experience"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-earth-900/20 to-transparent" />
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pb-14 w-full">
          <h1
            className="font-serif font-light text-cream leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Nosotros.
          </h1>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-cream py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <FadeIn>
              <SectionLabel>North Authentic Experience</SectionLabel>
              <h2
                className="font-serif font-light text-earth-900 leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}
              >
                Una forma diferente<br />
                de vivir la naturaleza.
              </h2>
              <Divider className="mb-8" />
              <div className="flex flex-col gap-5">
                <p className="font-sans text-earth-600 leading-relaxed">
                  North Authentic Experience nace en Somiedo con una convicción
                  sencilla: hay lugares en el mundo que merecen ser vividos despacio.
                  Y que la gente que busca esos lugares merece encontrarlos de verdad.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed">
                  Apartamentos La Pornacal es nuestro primer proyecto.
                  Siete apartamentos rurales en Villar de Vildas que hemos cuidado
                  con la misma atención que dedicamos a la propia experiencia de estar aquí.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed">
                  No somos una plataforma. No somos un portal de reservas.
                  Somos una marca pequeña con mucho territorio detrás y
                  la convicción de que esto, lo que hacemos aquí,
                  merece un lugar propio en el mundo.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=80"
                    alt="Parque Natural de Somiedo — paisaje de montaña"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-earth-900 py-section text-cream">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn className="mb-14">
            <SectionLabel light>Lo que nos guía</SectionLabel>
            <h2
              className="font-serif font-light text-cream leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Nuestros valores.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valores.map((v, i) => (
              <FadeIn key={v.titulo} delay={i * 100} direction="up">
                <div className="border-t border-earth-700 pt-6">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-earth-500 block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-cream text-2xl mb-3">{v.titulo}</h3>
                  <p className="font-sans text-earth-400 text-sm leading-relaxed">
                    {v.texto}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cita final + CTA */}
      <section className="bg-cream py-section text-center">
        <div className="max-w-narrow mx-auto px-6 md:px-10">
          <FadeIn>
            <blockquote className="mb-10">
              <p
                className="font-serif font-light text-earth-800 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
              >
                &ldquo;Creemos que los mejores momentos<br />
                son los que te hacen olvidar<br />
                que llevas el móvil en el bolsillo.&rdquo;
              </p>
            </blockquote>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apartamentos"
                className="inline-flex font-sans text-[10px] tracking-widest uppercase bg-earth-800 text-cream px-8 py-4 hover:bg-earth-900 transition-colors duration-500"
              >
                Ver apartamentos
              </Link>
              <Link
                href="/contacto"
                className="inline-flex font-sans text-[10px] tracking-widest uppercase border border-earth-400 text-earth-700 px-8 py-4 hover:border-earth-800 hover:text-earth-900 transition-all duration-500"
              >
                Contactar
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

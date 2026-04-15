import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "El Lugar — Villar de Vildas y La Braña de La Pornacal",
  description:
    "Villar de Vildas, Pueblo Ejemplar de Asturias en el Parque Natural de Somiedo. Acceso directo a La Braña de La Pornacal, uno de los conjuntos de teitos mejor conservados de Europa.",
};

const actividades = [
  { titulo: "Senderismo",        texto: "Rutas de todos los niveles desde el propio pueblo. El camino a La Braña, el más icónico." },
  { titulo: "La Braña",          texto: "20 minutos a pie desde Villar de Vildas. Un ecosistema único que hay que ver con los propios ojos." },
  { titulo: "Fauna salvaje",     texto: "Osos pardos, urogallos, corzos. El Parque Natural de Somiedo es uno de los mejores espacios naturales protegidos de España." },
  { titulo: "Lagos de Somiedo",  texto: "A menos de una hora en coche. Cuatro lagos glaciares rodeados de montañas que quitan el aliento." },
  { titulo: "Pueblos de la ruta",texto: "Pola de Somiedo, La Riera, Veigas. Cada pueblo del municipio tiene su propia historia." },
  { titulo: "Cicloturismo",      texto: "El municipio de Somiedo ofrece rutas en bicicleta para todos los niveles con vistas que compensan el esfuerzo." },
];

export default function ElLugarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="La Braña de La Pornacal — Villar de Vildas, Somiedo, Asturias"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/85 via-earth-900/30 to-transparent" />
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pb-16 w-full">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-earth-200/60 mb-4">
            Parque Natural de Somiedo · Asturias
          </p>
          <h1
            className="font-serif text-cream leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6.5rem)" }}
          >
            El lugar.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <SectionLabel>Villar de Vildas</SectionLabel>
              <h2
                className="font-serif text-earth-900 leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              >
                Un pueblo que<br />
                huele a historia.
              </h2>
              <Divider className="mb-6" />
              <div className="flex flex-col gap-4">
                <p className="font-sans text-earth-600 leading-relaxed">
                  En el corazón del Parque Natural de Somiedo, a más de 900 metros
                  de altitud, existe un pueblo que decidió que merece la pena conservar
                  las cosas como son. Casas de piedra con cubierta vegetal,
                  calles sin asfaltar, el ritmo de quien sabe que no hay prisa.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed">
                  Villar de Vildas fue declarado <strong className="font-medium text-earth-700">Pueblo Ejemplar de Asturias en 2004</strong>,
                  reconocimiento a la preservación de su patrimonio arquitectónico
                  y a la forma en que sus vecinos han sabido mantener vivo lo que
                  hace único a este rincón del norte.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed">
                  No es un pueblo museo. Es un pueblo vivo. Y eso se nota.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80"
                  alt="Villar de Vildas — Pueblo Ejemplar de Asturias"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-cream/95 p-5">
                  <p className="font-sans text-[9px] tracking-widest uppercase text-earth-500 mb-1">
                    Reconocimiento oficial
                  </p>
                  <p className="font-serif text-earth-800 text-base">
                    Pueblo Ejemplar de Asturias, 2004
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* La Braña — sección protagonista */}
      <section className="bg-earth-900 py-section text-cream">
        <div className="max-w-content mx-auto px-6 md:px-10">
          {/* Cabecera */}
          <FadeIn className="mb-16">
            <SectionLabel light>La Braña de La Pornacal</SectionLabel>
            <h2
              className="font-serif text-cream leading-tight max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 5rem)" }}
            >
              Uno de los conjuntos de teitos<br />
              mejor conservados de Europa.
            </h2>
          </FadeIn>

          {/* Imagen ancho completo */}
          <FadeIn className="mb-12">
            <div className="relative aspect-cinema overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
                alt="La Braña de La Pornacal — teitos de cubierta vegetal, Somiedo"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-earth-900/25" />
            </div>
          </FadeIn>

          {/* Explicación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            <FadeIn>
              <div className="flex flex-col gap-4">
                <p className="font-sans text-earth-300 leading-relaxed">
                  Los teitos son las construcciones de piedra con cubierta de hierba
                  que los pastores asturianos usaban como refugio durante los meses
                  de verano, cuando subían con el ganado a los pastos de altura.
                </p>
                <p className="font-sans text-earth-300 leading-relaxed">
                  La Braña de La Pornacal es el conjunto más grande y mejor preservado
                  de toda Asturias. Más de cuarenta construcciones que siguen en pie,
                  a veinte minutos a pie desde Villar de Vildas.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col gap-4">
                <p className="font-sans text-earth-300 leading-relaxed">
                  Caminar hasta la braña es una de esas experiencias que no se olvidan.
                  La ruta asciende suavemente entre prados y bosques hasta abrirse
                  de repente en un escenario que parece sacado de otra época.
                </p>
                <p className="font-sans text-earth-300 leading-relaxed">
                  Desde los apartamentos, es la primera excursión que hacen la mayoría
                  de los que se alojan aquí. Y casi siempre vuelven a hacerla.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Actividades */}
      <section className="bg-earth-50 py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn className="mb-12">
            <SectionLabel>Qué hacer en Somiedo</SectionLabel>
            <h2
              className="font-serif text-earth-900 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}
            >
              El entorno, a tu ritmo.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {actividades.map((a, i) => (
              <FadeIn key={a.titulo} delay={i * 80} direction="up">
                <div className="flex flex-col gap-3 p-6 bg-cream border border-earth-200">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-earth-500">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-earth-800 text-xl">{a.titulo}</h3>
                  <div className="w-8 h-px bg-earth-300" />
                  <p className="font-sans text-earth-600 text-sm leading-relaxed">
                    {a.texto}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-14 md:py-16 text-center">
        <div className="max-w-narrow mx-auto px-6 md:px-10">
          <FadeIn>
            <SectionLabel className="block mx-auto">El siguiente paso</SectionLabel>
            <h2
              className="font-serif text-earth-900 mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Reserva tu refugio.
            </h2>
            <p className="font-sans text-earth-500 leading-relaxed mb-8 text-sm">
              Todo lo que acabas de leer está a un apartamento de distancia.
            </p>
            <Link
              href="/apartamentos"
              className="inline-flex items-center font-sans text-[10px] tracking-widest uppercase bg-earth-800 text-cream px-10 py-4 hover:bg-earth-900 transition-colors duration-500"
            >
              Ver apartamentos
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

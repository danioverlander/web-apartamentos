import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const momentos = [
  {
    numero: "01",
    titulo: "Silencio real.",
    texto:
      "No el silencio de los auriculares puestos. El silencio profundo del campo: viento, pájaros, agua. El sonido de las cosas vivas.",
  },
  {
    numero: "02",
    titulo: "Naturaleza a tu puerta.",
    texto:
      "Rutas de senderismo desde el pueblo. La braña a veinte minutos a pie. Bosques de roble y haya que piden que te pierdas en ellos.",
  },
  {
    numero: "03",
    titulo: "Ritmo lento.",
    texto:
      "Aquí el tiempo funciona de otra manera. No hay agenda, no hay prisa. El desayuno puede durar lo que necesite durar.",
  },
  {
    numero: "04",
    titulo: "Desconexión total.",
    texto:
      "Sin notificaciones. Sin urgencias. Solo tú, la naturaleza y lo que realmente importa. Eso también es un lujo.",
  },
];

export default function ExperienciaBlock() {
  return (
    <section className="bg-earth-900 py-section text-cream overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        {/* Cabecera */}
        <FadeIn className="mb-16 md:mb-20">
          <SectionLabel light>La experiencia</SectionLabel>
          <h2
            className="font-serif text-cream leading-tight max-w-2xl"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
          >
            Despertarás diferente.
          </h2>
          <p className="font-sans text-earth-300 mt-5 max-w-lg leading-relaxed">
            No es solo un lugar donde dormir. Es un lugar donde recordar
            cómo se siente estar presente.
          </p>
        </FadeIn>

        {/* Grid momentos + imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Momentos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {momentos.map((m, i) => (
              <FadeIn key={m.numero} delay={i * 100} direction="up">
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-earth-500">
                    {m.numero}
                  </span>
                  <h3 className="font-serif text-cream text-xl font-light">
                    {m.titulo}
                  </h3>
                  <div className="w-8 h-px bg-earth-600" />
                  <p className="font-sans text-earth-400 text-sm leading-relaxed">
                    {m.texto}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Imagen vertical */}
          <FadeIn direction="left" delay={300} className="relative lg:sticky lg:top-24">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Bosque en Somiedo, Asturias — experiencia en la naturaleza"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-earth-900/20" />
            </div>
            {/* Quote flotante */}
            <div className="absolute bottom-8 left-6 right-6 bg-earth-800/90 backdrop-blur-sm p-6">
              <p className="font-serif text-cream text-lg font-light leading-snug">
                &ldquo;No vienes solo a dormir.<br />Vienes a desconectar.&rdquo;
              </p>
              <p className="font-sans text-[10px] tracking-widest uppercase text-earth-400 mt-3">
                — North Authentic Experience
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

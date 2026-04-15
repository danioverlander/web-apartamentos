import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export default function ElLugarBlock() {
  return (
    <section className="bg-earth-50 py-section overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        {/* Cabecera */}
        <FadeIn className="mb-16 md:mb-20">
          <SectionLabel>El lugar</SectionLabel>
          <h2
            className="font-serif text-earth-900 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Villar de Vildas.<br />
            <span className="text-earth-500">Somiedo, Asturias.</span>
          </h2>
        </FadeIn>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Imagen principal */}
          <FadeIn direction="right" className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80"
                alt="Villar de Vildas, Somiedo — Parque Natural de Asturias"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Etiqueta flotante */}
            <div className="absolute bottom-6 left-6 bg-cream/95 backdrop-blur-sm px-5 py-3">
              <p className="font-sans text-[9px] tracking-widest uppercase text-earth-500">
                Pueblo Ejemplar de Asturias · 2004
              </p>
              <p className="font-serif text-earth-800 text-sm mt-1">
                Parque Natural de Somiedo
              </p>
            </div>
          </FadeIn>

          {/* Texto */}
          <FadeIn direction="left" delay={200} className="flex flex-col gap-8 lg:pt-12">
            {/* Bloque Villar */}
            <div>
              <Divider className="mb-6" />
              <h3 className="font-serif text-earth-800 text-xl mb-3">
                Un pueblo que el tiempo trató con respeto.
              </h3>
              <p className="font-sans text-earth-600 leading-relaxed">
                Casas de piedra. Silencio real. El olor a hierba mojada después
                de la lluvia. Villar de Vildas fue elegido Pueblo Ejemplar de
                Asturias en 2004, no por casualidad: este lugar conserva la
                esencia de lo que el norte de España fue y quiere seguir siendo.
              </p>
            </div>

            {/* Bloque braña */}
            <div>
              <Divider className="mb-6" />
              <h3 className="font-serif text-earth-800 text-xl mb-3">
                La Braña de La Pornacal.
              </h3>
              <p className="font-sans text-earth-600 leading-relaxed">
                Desde el propio pueblo partes directamente hacia La Braña de
                La Pornacal: uno de los conjuntos de teitos de cubierta vegetal
                mejor conservados de Europa. Cabañas de piedra con techo de
                hierba que llevan siglos aquí, resistiendo inviernos y guardando
                historias.
              </p>
              <p className="font-sans text-earth-600 leading-relaxed mt-3">
                No vienes solo a ver paisajes. Vienes a habitarlos.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/el-lugar"
              className="inline-flex items-center gap-3 font-sans text-[10px] tracking-widest uppercase text-earth-700 hover:text-earth-900 transition-colors duration-300 group mt-2 w-fit"
            >
              Conocer el lugar
              <span className="w-8 h-px bg-earth-400 group-hover:w-12 transition-all duration-500" />
            </Link>
          </FadeIn>
        </div>

        {/* Imagen braña a ancho completo */}
        <FadeIn className="mt-16 md:mt-20">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
              alt="La Braña de La Pornacal — teitos de cubierta vegetal, Somiedo"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-earth-900/20" />
            <div className="absolute bottom-8 left-8 md:left-12">
              <p className="font-sans text-[10px] tracking-widest uppercase text-earth-200/70 mb-2">
                La Braña de La Pornacal
              </p>
              <p className="font-serif text-cream text-xl md:text-2xl font-light">
                Uno de los conjuntos de teitos mejor conservados de Europa.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const datos = [
  { num: "2004",   label: "Pueblo Ejemplar\nde Asturias"    },
  { num: "~40km²", label: "Parque Natural\nde Somiedo"      },
  { num: "7",      label: "Apartamentos\nrurales"           },
  { num: "1.400m", label: "Altitud media\ndel municipio"    },
];

export default function VillarBlock() {
  return (
    <section className="bg-earth-100 py-section overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <FadeIn direction="right">
            <SectionLabel>Villar de Vildas</SectionLabel>
            <h2
              className="font-serif font-light text-earth-900 leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Un pueblo con<br />
              <span className="text-earth-500">alma propia.</span>
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              <p className="font-sans text-earth-600 leading-relaxed">
                En el corazón del Parque Natural de Somiedo, Villar de Vildas
                es uno de esos lugares que te hacen entender qué significa
                la palabra &ldquo;auténtico&rdquo;. Un pueblo pequeño donde la arquitectura
                tradicional asturiana se conserva intacta.
              </p>
              <p className="font-sans text-earth-600 leading-relaxed">
                Fue reconocido Pueblo Ejemplar de Asturias en 2004 por la
                preservación de su patrimonio arquitectónico y natural.
                Un reconocimiento que los vecinos llevan con la discreción
                que caracteriza a este rincón del norte.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-earth-200 border border-earth-200 mb-8">
              {datos.map((d) => (
                <div key={d.num} className="bg-earth-100 p-4 text-center">
                  <p className="font-serif text-earth-800 text-2xl font-light">
                    {d.num}
                  </p>
                  <p className="font-sans text-[10px] text-earth-500 uppercase tracking-wide mt-1 whitespace-pre-line leading-tight">
                    {d.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/el-lugar"
              className="inline-flex items-center gap-3 font-sans text-[10px] tracking-widest uppercase text-earth-700 hover:text-earth-900 transition-colors duration-300 group"
            >
              Descubrir el lugar
              <span className="w-8 h-px bg-earth-400 group-hover:w-12 transition-all duration-500" />
            </Link>
          </FadeIn>

          {/* Mosaico de imágenes */}
          <FadeIn direction="left" delay={200}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
                  alt="Paisaje de montaña en Somiedo, Asturias"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80"
                    alt="Naturaleza del Parque Natural de Somiedo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80"
                    alt="Lago y montañas en Somiedo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

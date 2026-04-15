import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Mountain, Leaf, UtensilsCrossed, Info } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "El Lugar — Somiedo, Asturias",
  description:
    "Descubre Somiedo: La Braña de La Pornacal, los Lagos de Saliencia, fauna salvaje, cultura vaqueira y todo lo que necesitas saber antes de venir.",
};

// ─── Datos ────────────────────────────────────────────────────────────────────

const lugares = [
  {
    nombre: "Braña de La Pornacal",
    descripcion:
      "El conjunto de teitos más grande y mejor conservado de Asturias. Más de cuarenta construcciones de piedra con cubierta vegetal que siguen en pie, a veinte minutos a pie desde los apartamentos.",
    detalle: "20 min a pie · Dificultad baja",
    imagen: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80",
    icono: "🏚️",
  },
  {
    nombre: "Lagos de Saliencia",
    descripcion:
      "Cuatro lagos glaciares encadenados a más de 1.600 metros de altitud. Agua de un azul imposible rodeada de montañas. Una de las estampas más impresionantes de toda la Cordillera Cantábrica.",
    detalle: "45 min en coche · Dificultad media",
    imagen: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80",
    icono: "🏔️",
  },
  {
    nombre: "Cascada Foz de La Mouta",
    descripcion:
      "Una cascada escondida entre hayedos que solo conocen los que se adentran en el valle. El sonido del agua sobre la piedra y la luz filtrada por las copas de los árboles crean una atmósfera única.",
    detalle: "30 min en coche · Dificultad baja-media",
    imagen: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
    icono: "💧",
  },
];

const fauna = [
  {
    titulo: "Oso pardo cantábrico",
    texto:
      "Somiedo es uno de los últimos refugios del oso pardo en la Península Ibérica. Con paciencia y suerte, es posible avistarlos al amanecer desde algunos miradores del parque.",
  },
  {
    titulo: "Urogallo cantábrico",
    texto:
      "En peligro crítico de extinción, el urogallo encuentra en los hayedos y robledales de Somiedo uno de sus últimos reductos. Un privilegio verlo.",
  },
  {
    titulo: "Rebeco y ciervo",
    texto:
      "Las praderas de altura están salpicadas de rebecos todo el año. En otoño, la berrea del ciervo transforma el parque en un espectáculo sonoro sin igual.",
  },
  {
    titulo: "Águila real y buitre leonado",
    texto:
      "Las corrientes cálidas sobre los riscos son autopistas para las rapaces. Alzar la vista y ver una envergadura de dos metros sobre tu cabeza es algo que no se olvida.",
  },
];

const rutas = [
  {
    titulo: "La Braña de La Pornacal",
    nivel: "Fácil",
    tiempo: "45 min ida",
    texto: "Desde Villar de Vildas, ascenso suave entre prados y bosque hasta el conjunto de teitos. La excursión esencial.",
  },
  {
    titulo: "Lagos de Saliencia",
    nivel: "Moderada",
    tiempo: "3-4h circular",
    texto: "Ruta circular que recorre los cuatro lagos glaciares. Vistas panorámicas de la Cordillera Cantábrica en cada paso.",
  },
  {
    titulo: "Mirador de La Farrapona",
    nivel: "Fácil",
    tiempo: "15 min desde el aparcamiento",
    texto: "Accesible en coche hasta casi la cima. Panorámica de 360° sobre el parque natural. Ideal al atardecer.",
  },
  {
    titulo: "Valle del Lago",
    nivel: "Moderada",
    tiempo: "2h ida",
    texto: "Por el fondo del valle hasta el lago más accesible del municipio. Zona con alta presencia de fauna.",
  },
];

const restaurantes = [
  {
    nombre: "Casa Pachín",
    lugar: "Pola de Somiedo",
    texto: "Cocina tradicional asturiana. La fabada y el cachopo que la gente de la zona recomienda siempre.",
    imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    nombre: "La Casona del Lago",
    lugar: "Valle del Lago",
    texto: "Vista directa al lago. Productos de temporada y platos elaborados con lo que da la tierra.",
    imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  },
  {
    nombre: "Bar Restaurante Somiedo",
    lugar: "La Riera",
    texto: "El sitio de los lugareños. Sin florituras. Con truchas del río, queso afuega'l pitu y sidra natural.",
    imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  },
];

const consejos = [
  { icono: <Mountain size={16} />, texto: "La mejor época: mayo-junio y septiembre-octubre. Luz perfecta, sin aglomeraciones." },
  { icono: <Leaf size={16} />, texto: "En verano las brañas están en plena actividad ganadera. Respeta los caminos y el ganado." },
  { icono: <MapPin size={16} />, texto: "El aparcamiento en La Braña de La Pornacal se llena pronto en temporada alta. Sal antes de las 9h." },
  { icono: <Clock size={16} />, texto: "Para el avistamiento de fauna, las horas mágicas son el amanecer y la última hora de la tarde." },
  { icono: <Info size={16} />, texto: "No hay cobertura de datos en gran parte del parque. Descarga los mapas antes de salir (Maps.me o Wikiloc)." },
  { icono: <UtensilsCrossed size={16} />, texto: "Lleva siempre agua y algo de abrigo. El tiempo en la montaña cambia en minutos." },
];

// ─── Página ───────────────────────────────────────────────────────────────────

export default function ElLugarPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="Parque Natural de Somiedo — Asturias"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pb-16 w-full">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/60 mb-4">
            Parque Natural de Somiedo · Asturias
          </p>
          <h1
            className="font-serif text-white leading-tight"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
          >
            El lugar.
          </h1>
        </div>
      </section>

      {/* ── S1: BIENVENIDO A SOMIEDO ─────────────────────────────── */}
      <section className="bg-cream py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <FadeIn>
              <SectionLabel>Bienvenido a Somiedo</SectionLabel>
              <h2
                className="font-serif text-earth-900 leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)" }}
              >
                Naturaleza en<br />
                <span className="text-earth-500">estado puro.</span>
              </h2>
              <Divider className="mb-6" />
              <div className="flex flex-col gap-4 max-w-lg">
                <p className="font-sans text-earth-600 leading-relaxed">
                  Somiedo es uno de los espacios naturales más especiales de España.
                  Un municipio de montaña en el corazón de la Cordillera Cantábrica
                  donde el paisaje, la fauna y la cultura tradicional conviven
                  de una forma que ya casi no existe en ningún otro sitio.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed">
                  Montañas abiertas, brañas tradicionales, osos pardos y un silencio
                  que lo envuelve todo. No hace falta buscar más.
                  Aquí está lo que la mayoría lleva años queriendo encontrar.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed">
                  Reserva Natural de la Biosfera desde 2000. Parque Natural desde 1988.
                  Uno de los ecosistemas mejor preservados de toda Europa occidental.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150} direction="left">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80"
                    alt="Montañas de Somiedo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col gap-3 pt-8">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700&q=80"
                      alt="Lago en Somiedo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="bg-earth-900 p-5 text-cream">
                    <p className="font-serif text-2xl font-light mb-1">Reserva</p>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-earth-300">
                      de la Biosfera · UNESCO · 2000
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── S2: LUGARES IMPRESCINDIBLES ──────────────────────────── */}
      <section className="bg-earth-50 py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn className="mb-14">
            <SectionLabel>Lugares imprescindibles</SectionLabel>
            <h2
              className="font-serif text-earth-900 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Los tres que no<br />puedes perderte.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-14">
            {lugares.map((lugar, i) => (
              <FadeIn key={lugar.nombre} direction={i % 2 === 0 ? "right" : "left"} delay={100}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 !== 0 ? "[direction:ltr]" : ""}`}>
                    <Image
                      src={lugar.imagen}
                      alt={lugar.nombre}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className={i % 2 !== 0 ? "[direction:ltr]" : ""}>
                    <span className="font-sans text-[9px] tracking-widest uppercase text-earth-400 mb-3 block">
                      {lugar.detalle}
                    </span>
                    <h3
                      className="font-serif text-earth-800 leading-tight mb-4"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                    >
                      {lugar.nombre}
                    </h3>
                    <Divider className="mb-4" />
                    <p className="font-sans text-earth-600 leading-relaxed">
                      {lugar.descripcion}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: FAUNA Y RUTAS ────────────────────────────────────── */}
      <section className="bg-earth-900 text-cream py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">

          {/* Fauna */}
          <FadeIn className="mb-14">
            <SectionLabel light>Fauna salvaje</SectionLabel>
            <h2
              className="font-serif text-cream leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Explora Somiedo.
            </h2>
            <p className="font-sans text-earth-300 max-w-xl leading-relaxed">
              El Parque Natural de Somiedo es uno de los mejores espacios de observación
              de fauna salvaje de España. Hay que ir despacio, mirar alto y tener paciencia.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
            {fauna.map((animal, i) => (
              <FadeIn key={animal.titulo} delay={i * 80} direction="up">
                <div className="border border-earth-700 p-7 hover:border-earth-500 transition-colors duration-300">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-earth-500 mb-3 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-cream text-xl mb-3">{animal.titulo}</h3>
                  <div className="w-8 h-px bg-earth-600 mb-4" />
                  <p className="font-sans text-earth-400 text-sm leading-relaxed">
                    {animal.texto}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Rutas */}
          <FadeIn className="mb-10">
            <SectionLabel light>Rutas</SectionLabel>
            <h2
              className="font-serif text-cream leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}
            >
              A pie, a tu ritmo.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-earth-700">
            {rutas.map((ruta) => (
              <FadeIn key={ruta.titulo}>
                <div className="bg-earth-900 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-[9px] tracking-widest uppercase text-earth-400 border border-earth-700 px-2.5 py-1">
                      {ruta.nivel}
                    </span>
                    <span className="font-sans text-[9px] tracking-widest uppercase text-earth-500">
                      {ruta.tiempo}
                    </span>
                  </div>
                  <h3 className="font-serif text-cream text-xl mb-2">{ruta.titulo}</h3>
                  <p className="font-sans text-earth-400 text-sm leading-relaxed">
                    {ruta.texto}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: VIDA EN SOMIEDO ──────────────────────────────────── */}
      <section className="bg-cream py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
                  alt="Cultura tradicional en Somiedo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth-900/80 to-transparent p-8">
                  <p className="font-serif text-cream text-lg">
                    &ldquo;Vaqueiros d&rsquo;alzada&rdquo;
                  </p>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-earth-300 mt-1">
                    Cultura trashumante · Asturias
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150} direction="left">
              <SectionLabel>Un ritmo diferente</SectionLabel>
              <h2
                className="font-serif text-earth-900 leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              >
                La vida sencilla<br />
                <span className="text-earth-500">no se echa de menos.</span><br />
                Se encuentra.
              </h2>
              <Divider className="mb-6" />
              <div className="flex flex-col gap-4">
                <p className="font-sans text-earth-600 leading-relaxed">
                  Los <strong className="text-earth-700 font-medium">vaqueiros d&rsquo;alzada</strong> son el alma de Somiedo.
                  Durante siglos, estas familias trashumantes recorrían el territorio
                  con sus rebaños siguiendo los pastos según la estación.
                  Una forma de vida que todavía sobrevive en algunos rincones del municipio.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed">
                  Las brañas —los asentamientos estivales de los pastores— son la herencia
                  visible de esa cultura. Construcciones de piedra con cubierta vegetal
                  que resisten siglos de inviernos duros y que son, hoy, patrimonio de todos.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed">
                  Somiedo practica un turismo responsable. Las visitas respetuosas con el
                  entorno, los productores locales y la ganadería extensiva son parte
                  de lo que hace posible que este lugar siga siendo como es.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── S5: DÓNDE COMER ──────────────────────────────────────── */}
      <section className="bg-earth-100 py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn className="mb-12">
            <SectionLabel>Gastronomía</SectionLabel>
            <h2
              className="font-serif text-earth-900 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Dónde comer<br />
              <span className="text-earth-500">en Somiedo.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {restaurantes.map((r, i) => (
              <FadeIn key={r.nombre} delay={i * 100} direction="up">
                <div className="group bg-cream overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.imagen}
                      alt={r.nombre}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-sans text-[9px] tracking-widest uppercase text-earth-400 mb-1">
                      {r.lugar}
                    </p>
                    <h3 className="font-serif text-earth-800 text-xl mb-2">{r.nombre}</h3>
                    <p className="font-sans text-earth-500 text-sm leading-relaxed">
                      {r.texto}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="font-sans text-earth-500 text-sm leading-relaxed max-w-2xl">
              En Somiedo también encontrarás queserías artesanales, productores de miel de montaña
              y sidrerías donde la sidra natural acompaña cualquier conversación.
              Pregunta en los apartamentos — siempre tenemos alguna recomendación actualizada.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── S6: ANTES DE VENIR ───────────────────────────────────── */}
      <section className="bg-cream py-section">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn>
              <SectionLabel>Información práctica</SectionLabel>
              <h2
                className="font-serif text-earth-900 leading-tight mb-3"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
              >
                Antes de venir.
              </h2>
              <p className="font-sans text-earth-500 leading-relaxed mb-10 max-w-md">
                Somiedo es un parque natural protegido. Unas pocas cosas a tener en cuenta
                para que tu visita sea perfecta y el lugar siga siendo lo que es.
              </p>
              <div className="flex flex-col gap-5">
                {consejos.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 py-5 border-t border-earth-200 first:border-t-0 first:pt-0">
                    <span className="text-earth-400 mt-0.5 shrink-0">{c.icono}</span>
                    <p className="font-sans text-earth-700 text-sm leading-relaxed">{c.texto}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={150} direction="left" className="lg:pt-24">
              <div className="bg-earth-900 p-8 text-cream">
                <p className="font-sans text-[9px] tracking-widest uppercase text-earth-400 mb-4">
                  Cómo llegar
                </p>
                <h3 className="font-serif text-cream text-2xl mb-5">Villar de Vildas</h3>
                <Divider className="bg-earth-700 mb-5" />
                <div className="flex flex-col gap-4 font-sans text-earth-300 text-sm leading-relaxed">
                  <p><strong className="text-earth-100 font-medium">Desde Oviedo:</strong> 1h 20min por la AS-15 hacia Pola de Somiedo y luego la carretera comarcal hasta Villar de Vildas.</p>
                  <p><strong className="text-earth-100 font-medium">Desde Avilés / Gijón:</strong> Aproximadamente 1h 30min.</p>
                  <p><strong className="text-earth-100 font-medium">GPS:</strong> Villar de Vildas, Somiedo, Asturias. Las últimas indicaciones de Google Maps pueden ser inexactas — si tienes dudas, llámanos.</p>
                  <p><strong className="text-earth-100 font-medium">Aparcamiento:</strong> Gratuito junto a los apartamentos.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── S7: CTA FINAL ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-earth-900 py-24 md:py-32 text-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
            alt="Somiedo"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-narrow mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-earth-400 mb-6">
              Apartamentos La Pornacal · Villar de Vildas
            </p>
            <h2
              className="font-serif text-cream leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
            >
              Somiedo no se visita.<br />
              <em className="not-italic text-earth-300">Se vive.</em>
            </h2>
            <p className="font-sans text-earth-400 leading-relaxed mb-10 text-sm max-w-sm mx-auto">
              Todo lo que has leído está a pocos minutos de los apartamentos.
              Elige el tuyo y ven a comprobarlo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/apartamentos"
                className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase font-semibold bg-white text-neutral-900 px-10 py-4 hover:bg-neutral-100 transition-colors duration-300"
              >
                Ver apartamentos
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center font-sans text-[11px] tracking-widest uppercase border border-earth-600 text-earth-300 px-10 py-4 hover:border-earth-400 hover:text-cream transition-all duration-300"
              >
                Reservar ahora
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

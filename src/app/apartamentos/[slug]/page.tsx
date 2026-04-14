import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Users, BedDouble, Bath, Maximize, Check, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import ApartamentoGallery from "@/components/apartamentos/ApartamentoGallery";
import ApartamentoCard from "@/components/apartamentos/ApartamentoCard";
import { apartamentos, getApartamento } from "@/data/apartamentos";

interface PageProps {
  params: { slug: string };
}

// Genera rutas estáticas para los 7 apartamentos
export function generateStaticParams() {
  return apartamentos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const apt = getApartamento(params.slug);
  if (!apt) return {};
  return {
    title: `${apt.nombre} — Apartamentos La Pornacal`,
    description: `${apt.descripcionCorta} ${apt.capacidad} personas. Villar de Vildas, Somiedo, Asturias.`,
    openGraph: {
      images: [{ url: apt.imagen, width: 1200, height: 800, alt: apt.nombre }],
    },
  };
}

export default function ApartamentoPage({ params }: PageProps) {
  const apt = getApartamento(params.slug);
  if (!apt) notFound();

  // Apartamentos relacionados (excluye el actual)
  const relacionados = apartamentos.filter((a) => a.slug !== apt.slug).slice(0, 3);

  return (
    <>
      {/* Galería superior */}
      <section className="pt-24 pb-0 bg-earth-50">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-8">
          {/* Breadcrumb */}
          <Link
            href="/apartamentos"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-earth-500 hover:text-earth-700 transition-colors mb-8 group"
          >
            <ArrowLeft size={12} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Todos los apartamentos
          </Link>

          {/* Título */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <SectionLabel>Apartamentos La Pornacal</SectionLabel>
              <h1
                className="font-serif font-light text-earth-900 leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                {apt.nombre}
              </h1>
              <p className="font-sans text-earth-500 text-sm mt-2 tracking-wide">
                {apt.subtitulo}
              </p>
            </div>
            {apt.precio && (
              <div className="md:text-right">
                <p className="font-sans text-[10px] tracking-widest uppercase text-earth-500 mb-1">
                  Precio
                </p>
                <p className="font-serif text-earth-800 text-2xl">
                  {apt.precio} / noche
                </p>
              </div>
            )}
          </div>

          {/* Galería */}
          <ApartamentoGallery imagenes={apt.imagenes} nombre={apt.nombre} />
        </div>
      </section>

      {/* Contenido principal */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Descripción (columna ancha) */}
            <div className="lg:col-span-2">
              <FadeIn>
                {/* Specs rápidos */}
                <div className="flex flex-wrap gap-6 py-5 border-y border-earth-200 mb-10">
                  <Spec icon={<Users size={16} strokeWidth={1.5} />}  label="Personas"     value={apt.capacidad.toString()} />
                  <Spec icon={<BedDouble size={16} strokeWidth={1.5} />} label="Habitaciones" value={`${apt.habitaciones} doble${apt.habitaciones > 1 ? "s" : ""}`} />
                  <Spec icon={<Bath size={16} strokeWidth={1.5} />}   label="Baños"        value={`${apt.banos} completo${apt.banos > 1 ? "s" : ""}`} />
                  <Spec icon={<Maximize size={16} strokeWidth={1.5} />} label="Superficie" value={`${apt.metros} m²`} />
                </div>

                {/* Descripción larga */}
                <div className="mb-10">
                  <h2 className="font-serif text-earth-800 text-2xl mb-6">
                    El apartamento
                  </h2>
                  <div className="font-sans text-earth-600 leading-relaxed whitespace-pre-line text-base space-y-4">
                    {apt.descripcionLarga.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* Experiencia de estancia */}
                <div className="bg-earth-50 border-l-2 border-earth-400 p-6 md:p-8 mb-10">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-earth-500 mb-3">
                    La experiencia
                  </p>
                  <p className="font-serif text-earth-700 text-xl font-light leading-snug italic">
                    &ldquo;{apt.experiencia}&rdquo;
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                {/* Características */}
                <div>
                  <h2 className="font-serif text-earth-800 text-2xl mb-6">
                    Qué incluye
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {apt.caracteristicas.map((c) => (
                      <div
                        key={c}
                        className="flex items-start gap-3 font-sans text-sm text-earth-600"
                      >
                        <Check
                          size={14}
                          strokeWidth={2}
                          className="text-earth-500 mt-0.5 shrink-0"
                        />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar reserva */}
            <div className="lg:col-span-1">
              <FadeIn direction="left" delay={300}>
                <div className="sticky top-28">
                  {/* Panel reserva */}
                  <div className="bg-earth-50 border border-earth-200 p-6 md:p-8 mb-6">
                    <h3 className="font-serif text-earth-800 text-xl mb-2">
                      Reservar este apartamento
                    </h3>
                    <p className="font-sans text-earth-500 text-sm leading-relaxed mb-6">
                      Contacta con nosotros para consultar disponibilidad
                      y condiciones. Te respondemos en menos de 24h.
                    </p>
                    <a
                      href={`mailto:daniel@northauthenticexperience.com?subject=Reserva ${apt.nombre} — Apartamentos La Pornacal`}
                      className="block w-full text-center font-sans text-[10px] tracking-widest uppercase bg-earth-800 text-cream py-4 hover:bg-earth-900 transition-colors duration-500 mb-3"
                    >
                      Solicitar reserva
                    </a>
                    <a
                      href="tel:+34683153958"
                      className="block w-full text-center font-sans text-[10px] tracking-widest uppercase border border-earth-300 text-earth-600 py-3.5 hover:border-earth-600 hover:text-earth-800 transition-colors duration-500"
                    >
                      Llamar
                    </a>
                  </div>

                  {/* Info rápida */}
                  <div className="bg-earth-50 border border-earth-200 p-5">
                    <div className="flex flex-col gap-3">
                      <Info label="Ubicación"   value="Villar de Vildas, Somiedo" />
                      <Info label="Check-in"    value="A partir de las 15:00h" />
                      <Info label="Check-out"   value="Antes de las 11:00h" />
                      <Info label="Mascotas"    value="Consultar disponibilidad" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Apartamentos relacionados */}
      <section className="bg-earth-50 py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn className="mb-10">
            <SectionLabel>Otros apartamentos</SectionLabel>
            <h2
              className="font-serif font-light text-earth-900"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              También puede interesarte.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {relacionados.map((r, i) => (
              <FadeIn key={r.slug} delay={i * 80}>
                <ApartamentoCard apartamento={r} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-earth-500">{icon}</div>
      <p className="font-sans text-[9px] tracking-widest uppercase text-earth-400">{label}</p>
      <p className="font-sans text-sm text-earth-700 font-medium">{value}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4 text-sm">
      <span className="font-sans text-[10px] uppercase tracking-wide text-earth-400 shrink-0">
        {label}
      </span>
      <span className="font-sans text-earth-600 text-right">{value}</span>
    </div>
  );
}

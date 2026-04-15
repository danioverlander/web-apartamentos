"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

const faqs = [
  {
    categoria: "Reservas",
    items: [
      {
        pregunta: "¿Cómo puedo reservar un apartamento?",
        respuesta:
          "Puedes contactarnos por email (daniel@northauthenticexperience.com), por teléfono o a través del formulario de contacto. Nos gusta hablar con la gente que viene aquí antes de confirmar la reserva.",
      },
      {
        pregunta: "¿Con cuánta antelación debo reservar?",
        respuesta:
          "En temporada alta (verano y puentes) recomendamos reservar con al menos 4-6 semanas de antelación. En temporada baja, solemos tener disponibilidad a más corto plazo. Consulta siempre por disponibilidad.",
      },
      {
        pregunta: "¿Cuáles son las condiciones de cancelación?",
        respuesta:
          "Las condiciones varían según la temporada y el tipo de reserva. Te informamos de todas las condiciones al confirmar la reserva. Tratamos siempre de ser flexibles ante situaciones imprevistas.",
      },
      {
        pregunta: "¿Se puede pagar en efectivo?",
        respuesta:
          "Aceptamos transferencia bancaria y tarjeta. El pago en efectivo se puede gestionar en casos concretos. Consulta al reservar.",
      },
    ],
  },
  {
    categoria: "Los apartamentos",
    items: [
      {
        pregunta: "¿Qué incluye la estancia?",
        respuesta:
          "Todos los apartamentos incluyen ropa de cama, toallas, cocina equipada con utensilios básicos, calefacción y WiFi. El desayuno no está incluido, pero puedes tener todo lo necesario en la cocina.",
      },
      {
        pregunta: "¿Se admiten mascotas?",
        respuesta:
          "En algunos apartamentos sí. Consulta disponibilidad al reservar e indícanos el tipo y tamaño de tu mascota. Somiedo es un espacio natural protegido, por lo que hay ciertas normas que hay que respetar.",
      },
      {
        pregunta: "¿Los apartamentos tienen WiFi?",
        respuesta:
          "Sí, todos los apartamentos tienen WiFi. Dicho esto, Somiedo es montaña y la cobertura de datos móviles es limitada en algunas zonas. Lo consideramos parte de la experiencia de desconexión.",
      },
      {
        pregunta: "¿Hay aparcamiento?",
        respuesta:
          "Sí. Todos los apartamentos tienen aparcamiento disponible, sin coste adicional.",
      },
    ],
  },
  {
    categoria: "El lugar",
    items: [
      {
        pregunta: "¿Cómo llegar a Villar de Vildas?",
        respuesta:
          "Desde Oviedo por la AS-15 dirección Somiedo, aproximadamente 1h15min en coche. El pueblo está bien señalizado. No hay transporte público regular hasta el pueblo, por lo que recomendamos venir en vehículo propio.",
      },
      {
        pregunta: "¿Cuándo es la mejor época para visitar Somiedo?",
        respuesta:
          "Somiedo es espectacular todo el año. Verano para senderismo y La Braña. Otoño para el colorido del hayedo y los robledales. Invierno para la nieve y el silencio absoluto. Primavera para los prados en flor. No hay época mala.",
      },
      {
        pregunta: "¿Qué hay que visitar sí o sí?",
        respuesta:
          "La Braña de La Pornacal es imprescindible (a 20 minutos a pie desde el pueblo). Los Lagos de Somiedo merecen una excursión aparte. El pueblo de La Riera para comer. Y quedarte quieto en el porche viendo el valle: eso también cuenta.",
      },
      {
        pregunta: "¿Puedo ir sin coche?",
        respuesta:
          "Es posible llegar hasta Pola de Somiedo en bus desde Oviedo, pero desde allí hasta Villar de Vildas (18 km) no hay transporte público habitual. Recomendamos vehículo propio para disfrutar bien del municipio.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-section bg-cream">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn className="mb-14">
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h1
              className="font-serif text-earth-900 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)" }}
            >
              FAQ.
            </h1>
            <p className="font-sans text-earth-500 mt-4 max-w-lg leading-relaxed">
              Si tienes alguna pregunta que no encuentres aquí, escríbenos.
              Respondemos en menos de 24 horas.
            </p>
          </FadeIn>

          {/* Acordeón por categorías */}
          <div className="max-w-3xl flex flex-col gap-12">
            {faqs.map((cat) => (
              <div key={cat.categoria}>
                <p className="font-sans text-[10px] tracking-widest uppercase text-earth-500 mb-5 border-b border-earth-200 pb-3">
                  {cat.categoria}
                </p>
                <div className="flex flex-col gap-1">
                  {cat.items.map((item, i) => (
                    <FAQItem key={i} pregunta={item.pregunta} respuesta={item.respuesta} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA contacto */}
          <FadeIn className="mt-16 p-8 bg-earth-50 border border-earth-200 max-w-3xl">
            <h3 className="font-serif text-earth-800 text-2xl mb-3">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="font-sans text-earth-600 text-sm leading-relaxed mb-6">
              Escríbenos directamente. Nos gusta el contacto humano
              y respondemos a todas las consultas personalmente.
            </p>
            <Link
              href="/contacto"
              className="inline-flex font-sans text-[10px] tracking-widest uppercase bg-earth-800 text-cream px-8 py-3.5 hover:bg-earth-900 transition-colors duration-500"
            >
              Ir a contacto
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function FAQItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-earth-100">
      <button
        className="w-full flex items-start justify-between gap-6 py-5 text-left cursor-pointer group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans text-earth-700 group-hover:text-earth-900 transition-colors duration-300 text-sm leading-relaxed pr-4">
          {pregunta}
        </span>
        <span className="text-earth-500 group-hover:text-earth-700 transition-colors shrink-0 mt-0.5">
          {open ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="font-sans text-earth-500 text-sm leading-relaxed">
            {respuesta}
          </p>
        </div>
      )}
    </div>
  );
}

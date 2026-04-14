"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Divider from "@/components/ui/Divider";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Aquí conectarías con tu backend, Resend, Formspree, etc.
    // Por ahora simula un envío:
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-section bg-cream">
        <div className="max-w-content mx-auto px-6 md:px-10">
          {/* Cabecera */}
          <FadeIn className="mb-14">
            <SectionLabel>Habla con nosotros</SectionLabel>
            <h1
              className="font-serif font-light text-earth-900 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)" }}
            >
              Contacto.
            </h1>
            <p className="font-sans text-earth-500 mt-4 max-w-md leading-relaxed">
              Ya sea para reservar, consultar disponibilidad o simplemente
              preguntarnos algo sobre el lugar. Respondemos a todo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Formulario */}
            <FadeIn>
              {submitted ? (
                <div className="bg-earth-50 border border-earth-200 p-8 md:p-10">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-earth-500 mb-4">
                    Mensaje recibido
                  </p>
                  <h2 className="font-serif text-earth-800 text-2xl mb-3">
                    Gracias por escribirnos.
                  </h2>
                  <p className="font-sans text-earth-600 text-sm leading-relaxed">
                    Te respondemos en menos de 24 horas.
                    Si tu consulta es urgente, llámanos al{" "}
                    <a href="tel:+34683153958" className="underline">
                      683 153 958
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field id="nombre" label="Nombre" type="text" required />
                    <Field id="email" label="Email" type="email" required />
                  </div>
                  <Field id="telefono" label="Teléfono (opcional)" type="tel" />

                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-widest uppercase text-earth-500">
                      Apartamento de interés
                    </label>
                    <select
                      className="bg-earth-50 border border-earth-200 text-earth-700 font-sans text-sm px-4 py-3 focus:outline-none focus:border-earth-600 transition-colors"
                    >
                      <option value="">— Cualquiera / Sin preferencia —</option>
                      <option value="la-brana">La Braña (2 personas)</option>
                      <option value="el-teito">El Teito (2 personas)</option>
                      <option value="el-valle">El Valle (4 personas)</option>
                      <option value="la-majada">La Majada (4 personas)</option>
                      <option value="el-roble">El Roble (2 personas)</option>
                      <option value="el-hayedo">El Hayedo (6 personas)</option>
                      <option value="la-pornacal">La Pornacal (4 personas)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[10px] tracking-widest uppercase text-earth-500">
                        Llegada
                      </label>
                      <input
                        type="date"
                        className="bg-earth-50 border border-earth-200 text-earth-700 font-sans text-sm px-4 py-3 focus:outline-none focus:border-earth-600 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[10px] tracking-widest uppercase text-earth-500">
                        Salida
                      </label>
                      <input
                        type="date"
                        className="bg-earth-50 border border-earth-200 text-earth-700 font-sans text-sm px-4 py-3 focus:outline-none focus:border-earth-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="mensaje"
                      className="font-sans text-[10px] tracking-widest uppercase text-earth-500"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      placeholder="Cuéntanos qué buscas..."
                      className="bg-earth-50 border border-earth-200 text-earth-700 font-sans text-sm px-4 py-3 focus:outline-none focus:border-earth-600 transition-colors resize-none placeholder:text-earth-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="font-sans text-[10px] tracking-widest uppercase bg-earth-800 text-cream py-4 hover:bg-earth-900 transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              )}
            </FadeIn>

            {/* Info de contacto */}
            <FadeIn delay={200} direction="left">
              <div className="flex flex-col gap-10 lg:pt-2">
                <div>
                  <Divider className="mb-6" />
                  <h3 className="font-serif text-earth-800 text-xl mb-4">
                    Dónde estamos
                  </h3>
                  <p className="font-sans text-earth-600 text-sm leading-relaxed">
                    Villar de Vildas<br />
                    Concejo de Somiedo, Asturias<br />
                    España
                  </p>
                </div>

                <div>
                  <Divider className="mb-6" />
                  <h3 className="font-serif text-earth-800 text-xl mb-4">
                    Cómo contactarnos
                  </h3>
                  <div className="flex flex-col gap-3">
                    <ContactItem label="Email" value="daniel@northauthenticexperience.com" href="mailto:daniel@northauthenticexperience.com" />
                    <ContactItem label="Teléfono" value="683 153 958" href="tel:+34683153958" />
                  </div>
                </div>

                <div>
                  <Divider className="mb-6" />
                  <h3 className="font-serif text-earth-800 text-xl mb-4">
                    Horario de atención
                  </h3>
                  <p className="font-sans text-earth-600 text-sm leading-relaxed">
                    Lunes a viernes: 9:00 — 20:00h<br />
                    Sábados: 10:00 — 15:00h<br />
                    Respondemos emails fuera de horario.
                  </p>
                </div>

                <div className="bg-earth-50 border border-earth-200 p-6">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-earth-500 mb-2">
                    Tiempo de respuesta
                  </p>
                  <p className="font-serif text-earth-800 text-lg">
                    Menos de 24 horas.
                  </p>
                  <p className="font-sans text-earth-500 text-sm mt-1">
                    A veces mucho menos. Nos gusta atender bien.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type,
  required,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-sans text-[10px] tracking-widest uppercase text-earth-500"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="bg-earth-50 border border-earth-200 text-earth-700 font-sans text-sm px-4 py-3 focus:outline-none focus:border-earth-600 transition-colors placeholder:text-earth-300"
      />
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div>
      <p className="font-sans text-[9px] tracking-widest uppercase text-earth-400 mb-0.5">
        {label}
      </p>
      <a
        href={href}
        className="font-sans text-earth-700 text-sm hover:text-earth-900 transition-colors duration-300 underline underline-offset-4 decoration-earth-300 hover:decoration-earth-600"
      >
        {value}
      </a>
    </div>
  );
}

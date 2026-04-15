import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Legal — Aviso legal, Privacidad y Cookies",
  description: "Aviso legal, política de privacidad y política de cookies de North Authentic Experience.",
  robots: { index: false, follow: false },
};

export default function LegalPage() {
  return (
    <section className="pt-32 pb-section bg-cream">
      <div className="max-w-narrow mx-auto px-6 md:px-10">
        <FadeIn className="mb-12">
          <h1
            className="font-serif text-earth-900 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Legal.
          </h1>
        </FadeIn>

        <div className="prose-legal">
          {/* Aviso legal */}
          <section id="aviso" className="mb-14">
            <h2 className="font-serif text-earth-800 text-2xl mb-6 pb-3 border-b border-earth-200">
              Aviso legal
            </h2>
            <div className="flex flex-col gap-4 font-sans text-earth-600 text-sm leading-relaxed">
              <p>
                En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de
                la Información y Comercio Electrónico (LSSI-CE), se informa:
              </p>
              <p>
                <strong className="text-earth-700">Titular:</strong> North Authentic Experience (datos a completar por el titular)<br />
                <strong className="text-earth-700">CIF/NIF:</strong> [A COMPLETAR]<br />
                <strong className="text-earth-700">Domicilio:</strong> Villar de Vildas, Somiedo, Asturias, España<br />
                <strong className="text-earth-700">Email:</strong>{" "}
                <a href="mailto:daniel@northauthenticexperience.com" className="underline">
                  daniel@northauthenticexperience.com
                </a>
              </p>
              <p>
                El acceso y uso de este sitio web implica la aceptación plena y sin reservas
                de los presentes términos y condiciones de uso. La información contenida en
                esta web es meramente informativa y orientativa.
              </p>
            </div>
          </section>

          {/* Privacidad */}
          <section id="privacidad" className="mb-14">
            <h2 className="font-serif text-earth-800 text-2xl mb-6 pb-3 border-b border-earth-200">
              Política de privacidad
            </h2>
            <div className="flex flex-col gap-4 font-sans text-earth-600 text-sm leading-relaxed">
              <p>
                En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
                (LOPDGDD), informamos sobre el tratamiento de datos personales recogidos en
                este sitio web.
              </p>
              <p>
                <strong className="text-earth-700">Responsable del tratamiento:</strong> North Authentic Experience<br />
                <strong className="text-earth-700">Finalidad:</strong> Gestionar consultas, reservas y comunicaciones comerciales.<br />
                <strong className="text-earth-700">Legitimación:</strong> Consentimiento del interesado y ejecución de contrato.<br />
                <strong className="text-earth-700">Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal.<br />
                <strong className="text-earth-700">Derechos:</strong> Acceso, rectificación, supresión, limitación, portabilidad y oposición.
              </p>
              <p>
                Puede ejercer sus derechos enviando un email a{" "}
                <a href="mailto:daniel@northauthenticexperience.com" className="underline">
                  daniel@northauthenticexperience.com
                </a>
                {" "}adjuntando copia de su DNI.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies">
            <h2 className="font-serif text-earth-800 text-2xl mb-6 pb-3 border-b border-earth-200">
              Política de cookies
            </h2>
            <div className="flex flex-col gap-4 font-sans text-earth-600 text-sm leading-relaxed">
              <p>
                Este sitio web puede utilizar cookies técnicas necesarias para el correcto
                funcionamiento del sitio. No se utilizan cookies de seguimiento ni publicidad
                de terceros sin consentimiento previo.
              </p>
              <p>
                Puede configurar su navegador para rechazar o eliminar cookies. La desactivación
                de cookies técnicas puede afectar al funcionamiento del sitio.
              </p>
              <p>
                Para más información sobre gestión de cookies en tu navegador, consulta la
                ayuda del mismo.
              </p>
            </div>
          </section>
        </div>

        <p className="font-sans text-[11px] text-earth-400 mt-14 pt-6 border-t border-earth-200">
          Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long" })}
        </p>
      </div>
    </section>
  );
}

import FadeIn from "@/components/ui/FadeIn";
import Divider from "@/components/ui/Divider";

export default function EmotionalBlock() {
  return (
    <section className="bg-cream py-section">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Columna izquierda — cita grande */}
          <FadeIn direction="right">
            <blockquote>
              <p
                className="font-serif text-earth-800 leading-[1.2]"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
              >
                &ldquo;Vivimos demasiado rápido.<br />
                Demasiado conectados.<br />
                Demasiado lejos<br />
                de lo que somos.&rdquo;
              </p>
            </blockquote>
          </FadeIn>

          {/* Columna derecha — texto + marca */}
          <FadeIn direction="left" delay={200}>
            <div className="flex flex-col gap-6">
              <Divider />
              <div className="flex flex-col gap-4">
                <p className="font-sans text-earth-600 leading-relaxed text-base">
                  En North Authentic Experience creemos que todos necesitamos
                  pausar. Salir del ruido. Volver a la tierra, al silencio,
                  al ritmo lento de las cosas reales.
                </p>
                <p className="font-sans text-earth-600 leading-relaxed text-base">
                  Apartamentos La Pornacal nace de esa convicción: que un lugar
                  con historia, silencio y naturaleza genuina puede cambiarte
                  unos días. Y a veces, eso es suficiente para cambiarlo todo.
                </p>
              </div>

              {/* Valores en píldoras */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["Naturaleza real", "Calma", "Autenticidad", "Desconexión"].map(
                  (v) => (
                    <span
                      key={v}
                      className="font-sans text-[10px] tracking-widest uppercase text-earth-600 border border-earth-300 px-3 py-1.5"
                    >
                      {v}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

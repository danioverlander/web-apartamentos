import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-earth-400 mb-4">
          Error 404
        </p>
        <h1
          className="font-serif font-light text-earth-800 leading-tight mb-5"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Esta página<br />no existe.
        </h1>
        <p className="font-sans text-earth-500 text-sm leading-relaxed mb-10">
          Pero el lugar sí. Quizás buscabas los apartamentos
          o querías conocer el entorno.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex font-sans text-[10px] tracking-widest uppercase bg-earth-800 text-cream px-8 py-3.5 hover:bg-earth-900 transition-colors duration-500"
          >
            Volver al inicio
          </Link>
          <Link
            href="/apartamentos"
            className="inline-flex font-sans text-[10px] tracking-widest uppercase border border-earth-400 text-earth-700 px-8 py-3.5 hover:border-earth-700 transition-colors duration-500"
          >
            Ver apartamentos
          </Link>
        </div>
      </div>
    </section>
  );
}

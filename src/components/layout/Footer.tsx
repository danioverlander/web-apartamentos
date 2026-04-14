import Link from "next/link";

const navLinks = [
  { label: "Apartamentos", href: "/apartamentos" },
  { label: "El lugar",     href: "/el-lugar"      },
  { label: "Nosotros",     href: "/nosotros"       },
  { label: "FAQ",          href: "/faq"            },
  { label: "Contacto",     href: "/contacto"       },
];

const legalLinks = [
  { label: "Aviso legal",           href: "/legal#aviso"   },
  { label: "Política de privacidad",href: "/legal#privacidad" },
  { label: "Cookies",               href: "/legal#cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-300">
      <div className="max-w-content mx-auto px-6 md:px-10">
        {/* Bloque principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-earth-700/50">
          {/* Marca */}
          <div>
            <Link href="/" className="flex flex-col leading-none mb-6">
              <span className="font-serif font-light tracking-[0.12em] text-base text-cream">
                NORTH
              </span>
              <span className="font-sans font-light tracking-[0.25em] text-[9px] uppercase text-earth-400">
                Authentic Experience
              </span>
            </Link>
            <p className="font-sans text-sm text-earth-400 leading-relaxed max-w-xs">
              Una forma diferente de vivir la naturaleza. Siete apartamentos
              en el corazón del Parque Natural de Somiedo, Asturias.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-earth-500 mb-5">
              Navegación
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-earth-400 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-earth-500 mb-5">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-sans text-sm text-earth-400">
                Villar de Vildas, Somiedo<br />
                Asturias, España
              </p>
              <a
                href="mailto:daniel@northauthenticexperience.com"
                className="font-sans text-sm text-earth-400 hover:text-cream transition-colors duration-300"
              >
                daniel@northauthenticexperience.com
              </a>
              <a
                href="tel:+34683153958"
                className="font-sans text-sm text-earth-400 hover:text-cream transition-colors duration-300"
              >
                683 153 958
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 gap-4">
          <p className="font-sans text-[11px] text-earth-600">
            © {new Date().getFullYear()} North Authentic Experience. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[11px] text-earth-600 hover:text-earth-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

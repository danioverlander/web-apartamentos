# North Authentic Experience — Apartamentos La Pornacal

Web oficial de **Apartamentos La Pornacal**, producto de la marca **North Authentic Experience**.  
Siete apartamentos rurales en Villar de Vildas, Somiedo, Asturias.

---

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (opcional, FadeIn ya implementado con Intersection Observer)
- **Lucide React** (iconografía)

---

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Build de producción
npm run build
npm start
```

Requiere **Node.js 18+**.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx                 # Root layout con fuentes y metadata global
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Estilos globales + tokens
│   ├── sitemap.ts                 # Sitemap automático SEO
│   ├── robots.ts                  # robots.txt
│   ├── not-found.tsx              # Página 404
│   ├── apartamentos/
│   │   ├── page.tsx               # Grid de los 7 apartamentos
│   │   └── [slug]/
│   │       └── page.tsx           # Ficha individual de apartamento
│   ├── el-lugar/
│   │   └── page.tsx               # Villar de Vildas + La Braña
│   ├── nosotros/
│   │   └── page.tsx               # Sobre la marca
│   ├── faq/
│   │   └── page.tsx               # Preguntas frecuentes (acordeón)
│   ├── contacto/
│   │   └── page.tsx               # Formulario de contacto + reserva
│   └── legal/
│       └── page.tsx               # Aviso legal / Privacidad / Cookies
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Header fijo con cambio scroll
│   │   ├── Navigation.tsx         # Menú móvil (slide panel)
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx               # Hero full-screen
│   │   ├── EmotionalBlock.tsx     # Bloque "Vivimos demasiado rápido"
│   │   ├── ElLugarBlock.tsx       # Villar de Vildas + La Braña
│   │   ├── ApartamentosPreview.tsx # Grid 7 apartamentos
│   │   ├── ExperienciaBlock.tsx   # Momentos de la estancia
│   │   ├── VillarBlock.tsx        # Stats + mosaico fotográfico
│   │   └── CTAFinal.tsx           # CTA final "Tu refugio te espera"
│   ├── apartamentos/
│   │   ├── ApartamentoCard.tsx    # Tarjeta de apartamento
│   │   └── ApartamentoGallery.tsx # Galería con lightbox
│   └── ui/
│       ├── Button.tsx             # Botón polimórfico (link/button)
│       ├── SectionLabel.tsx       # Label de sección en mayúsculas
│       ├── FadeIn.tsx             # Animación scroll-triggered
│       └── Divider.tsx            # Línea decorativa
│
├── data/
│   └── apartamentos.ts            # Datos de los 7 apartamentos
├── lib/
│   └── utils.ts                   # cn() helper (clsx + twMerge)
└── types/
    └── index.ts                   # TypeScript types
```

---

## Sistema de diseño

### Paleta de colores

| Token           | Hex       | Uso                        |
|-----------------|-----------|----------------------------|
| `earth-50`      | `#FAF7F4` | Fondos secundarios         |
| `earth-100`     | `#F3EDE5` | Secciones alternas         |
| `earth-200`     | `#E5D9CC` | Bordes, divisores          |
| `earth-400`     | `#B89E82` | Iconos, detalles           |
| `earth-600`     | `#7D6249` | Texto secundario           |
| `earth-800`     | `#3F3024` | Texto principal, botones   |
| `earth-900`     | `#261D16` | Fondos oscuros, hero       |
| `cream`         | `#F8F4EF` | Fondo principal            |

### Tipografía

- **Cormorant Garamond** (serif) → Títulos, quotes, nombre de marca
- **Inter** (sans-serif) → Cuerpo, labels, CTAs, interfaz

### Principios de diseño

- Mucho espacio en blanco (secciones con padding `clamp(5rem, 10vw, 10rem)`)
- Tipografía fluida (`clamp()` en todos los titulares)
- Imágenes a sangre en hero y bloques principales
- Animaciones suaves (`cubic-bezier(0.16, 1, 0.3, 1)`)
- Sin bordes redondeados — estética angular, premium

---

## Datos de apartamentos

Los 7 apartamentos están en `src/data/apartamentos.ts`.  
Para añadir/editar uno, modifica el array `apartamentos`.

### Campos clave:

```typescript
{
  slug: "el-teito",           // URL: /apartamentos/el-teito
  nombre: "El Teito",
  capacidad: 2,
  habitaciones: 1,
  banos: 1,
  metros: 42,
  imagen: "/images/...",      // Imagen principal (tarjeta)
  imagenes: ["..."],          // Array de imágenes (galería)
  descripcionCorta: "...",    // Tarjeta y listing
  descripcionLarga: "...",    // Ficha individual
  experiencia: "...",         // Quote evocador en ficha
  caracteristicas: ["..."],   // Lista de equipamiento
  precio: "desde 90€",
}
```

---

## Imágenes

Las imágenes en `src/data/apartamentos.ts` apuntan a Unsplash como **placeholder**.  
Para producción, sustituye por tus fotos reales:

1. Coloca las fotos en `/public/images/apartamentos/{slug}/`
2. Actualiza las rutas en `src/data/apartamentos.ts`

**Formato recomendado:** JPG/WebP, 1200×800px mínimo para imágenes de galería.  
**Imagen principal de tarjeta:** 800×533px.  
**OG Image:** Sustituye `/public/og-image.jpg` por una imagen 1200×630px.

---

## SEO

- Metadata completa por página (title, description, OG, Twitter)
- Sitemap automático en `/sitemap.xml`
- robots.txt en `/robots.txt`
- Etiquetas semánticas (h1, h2, article, section, nav, main)
- Alt text descriptivo en todas las imágenes
- URLs amigables: `/apartamentos/la-brana`, `/el-lugar`, etc.

**Keywords principales trabajadas:**
- apartamentos rurales Somiedo
- Villar de Vildas
- alojamiento Asturias naturaleza
- La Braña de La Pornacal
- escapada rural Asturias
- Parque Natural de Somiedo

---

## Personalización pendiente

- [ ] Sustituir imágenes Unsplash por fotos reales de los apartamentos
- [ ] Añadir datos reales del titular en `/legal`  
- [ ] Configurar formulario de contacto (Resend / Formspree / propio)
- [ ] Reemplazar teléfono y email de placeholder
- [ ] Añadir dominio real en `metadata` de `layout.tsx` y `sitemap.ts`
- [ ] Añadir imagen OG real en `/public/og-image.jpg`
- [ ] Configurar sistema de reservas (Booking Widget / propio)
- [ ] Añadir Google Analytics / Plausible si se desea
- [ ] Añadir banner de cookies si se activan analytics

---

## Contacto

North Authentic Experience  
Villar de Vildas, Somiedo, Asturias  
hola@northauthenticexperience.com

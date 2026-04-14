import type { Apartamento } from "@/types";

// Imágenes: reemplaza estas rutas por tus fotos reales en /public/images/
// Formato recomendado: /images/apartamentos/{slug}/{nombre}.jpg
// Para desarrollo puedes usar imágenes de Unsplash como las de aquí abajo.

export const apartamentos: Apartamento[] = [
  {
    id: 1,
    slug: "la-brana",
    nombre: "La Braña",
    subtitulo: "Vistas a la braña · 2 personas",
    descripcionCorta:
      "El más cercano a La Braña de La Pornacal. Despertarás con las vistas que hacen que la gente repita.",
    descripcionLarga: `La Braña es el apartamento más íntimo de La Pornacal.
Dos personas. Silencio absoluto. Vistas directas al conjunto de teitos más hermoso de Europa.

Desde su ventana verás amanecer sobre el prado más antiguo de Somiedo.
No necesitas nada más para entender por qué este lugar existe.

El espacio está diseñado con materiales naturales, madera, piedra y lino,
para que el exterior entre en el interior y no notes la diferencia.`,
    capacidad: 2,
    habitaciones: 1,
    banos: 1,
    metros: 38,
    caracteristicas: [
      "Vistas directas a La Braña",
      "Cama doble 150cm",
      "Cocina equipada",
      "Calefacción central",
      "Ropa de cama incluida",
      "WiFi",
      "Terraza privada",
    ],
    experiencia:
      "Despertar con la niebla bajando por el valle. Café en la terraza mientras la braña despierta. El sonido del río a lo lejos.",
    imagen: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80",
    ],
    destacado: true,
    precio: "desde 95€",
  },
  {
    id: 2,
    slug: "el-teito",
    nombre: "El Teito",
    subtitulo: "Vista al pueblo · 2 personas",
    descripcionCorta:
      "Inspirado en los tejados de paja que definen el paisaje de Somiedo. Un refugio de piedra para dos.",
    descripcionLarga: `El Teito toma su nombre de los tejados de paja que durante siglos protegieron a los pastores asturianos.

Un espacio de piedra y madera que huele a historia y a campo húmedo después de la lluvia.
Para dos personas que quieren desaparecer del mundo unos días.

La luz entra por una ventana grande que enmarca el pueblo como si fuera un cuadro.
Por las noches, el silencio es tan profundo que casi puedes escucharlo.`,
    capacidad: 2,
    habitaciones: 1,
    banos: 1,
    metros: 42,
    caracteristicas: [
      "Vista al pueblo de Villar de Vildas",
      "Cama doble 160cm",
      "Cocina equipada completa",
      "Calefacción central",
      "Chimenea decorativa",
      "Ropa de cama incluida",
      "WiFi",
    ],
    experiencia:
      "La lluvia sobre el tejado. Un libro y una manta. Ver el pueblo desde dentro, como si siempre hubieras vivido aquí.",
    imagen: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200&q=80",
    ],
    precio: "desde 90€",
  },
  {
    id: 3,
    slug: "el-valle",
    nombre: "El Valle",
    subtitulo: "Familiar · 4 personas",
    descripcionCorta:
      "Espacio para cuatro. Amplio, luminoso y con vistas al valle que te quitan las palabras.",
    descripcionLarga: `El Valle es el apartamento para los que quieren compartir la experiencia.
Cuatro personas. Espacio real. Un salón donde pasan cosas.

Diseñado para familias o amigos que quieren escapar juntos sin renunciar a la comodidad.
Dos habitaciones separadas, cocina grande, y un ventanal al valle que convierte el desayuno en algo distinto.

Aquí la naturaleza no es el decorado. Es el protagonista.`,
    capacidad: 4,
    habitaciones: 2,
    banos: 1,
    metros: 65,
    caracteristicas: [
      "Vistas panorámicas al valle",
      "2 habitaciones dobles",
      "Salón-comedor amplio",
      "Cocina completa",
      "Calefacción central",
      "Ropa de cama incluida",
      "WiFi",
      "Aparcamiento incluido",
    ],
    experiencia:
      "Cuatro personas. Una mesa. Comida compartida. Fuera, el valle. Dentro, lo que de verdad importa.",
    imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    ],
    precio: "desde 130€",
  },
  {
    id: 4,
    slug: "la-majada",
    nombre: "La Majada",
    subtitulo: "Vista al prado · 4 personas",
    descripcionCorta:
      "La majada era el lugar donde descansaban los rebaños. Ahora es donde descansan las personas.",
    descripcionLarga: `La Majada recibe su nombre de los refugios estivales de los pastores.
Un homenaje a quienes convirtieron este paisaje en lo que es hoy.

Cuatro plazas, dos habitaciones bien pensadas, y un porche desde el que ver pacer a los animales
en el prado de abajo. Eso sigue siendo igual que hace cien años.

Para los que buscan desconectar de verdad, la Majada tiene una cualidad especial:
aquí la vida sencilla no se echa de menos, se encuentra.`,
    capacidad: 4,
    habitaciones: 2,
    banos: 2,
    metros: 70,
    caracteristicas: [
      "Porche con vistas al prado",
      "2 habitaciones (1 doble + 1 twin)",
      "2 baños completos",
      "Cocina equipada",
      "Calefacción central",
      "Ropa de cama incluida",
      "WiFi",
    ],
    experiencia:
      "El porche. La tarde. Ver pacer a los animales sin decir nada. Eso también es lujo.",
    imagen: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=1200&q=80",
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=1200&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    ],
    precio: "desde 135€",
  },
  {
    id: 5,
    slug: "el-roble",
    nombre: "El Roble",
    subtitulo: "Junto al bosque · 2 personas",
    descripcionCorta:
      "El apartamento más recogido. Para los que quieren el bosque cerca y el mundo lejos.",
    descripcionLarga: `El Roble está pensado para los que saben exactamente lo que buscan:
estar a solas con la naturaleza, sin interrupciones.

Orientado hacia el robledal que rodea el pueblo, este apartamento tiene una intimidad especial.
El sonido de las hojas. La luz filtrada. El olor a tierra húmeda después de la lluvia.

Dos personas. El bosque. Nada más que pedir.`,
    capacidad: 2,
    habitaciones: 1,
    banos: 1,
    metros: 40,
    caracteristicas: [
      "Vista al robledal",
      "Cama doble 150cm",
      "Cocina equipada",
      "Calefacción central",
      "Ropa de cama incluida",
      "WiFi",
      "Entrada independiente",
    ],
    experiencia:
      "Salir al amanecer y que el bosque ya esté ahí. Eso no lo encuentras en ningún otro sitio.",
    imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
    ],
    precio: "desde 88€",
  },
  {
    id: 6,
    slug: "el-hayedo",
    nombre: "El Hayedo",
    subtitulo: "El más grande · 6 personas",
    descripcionCorta:
      "Seis personas. Espacio para que una escapada sea también un reencuentro.",
    descripcionLarga: `El Hayedo es el apartamento más grande de La Pornacal.
Pensado para grupos que quieren compartir algo especial.

Tres habitaciones, dos baños, una cocina grande donde cocinar despacio y un salón donde
las conversaciones de medianoche florecen sin que nadie mire el reloj.

Somiedo tiene eso. Hace que el tiempo pase de otra manera.
El Hayedo está diseñado para aprovechar cada hora de ese tiempo distinto.`,
    capacidad: 6,
    habitaciones: 3,
    banos: 2,
    metros: 95,
    caracteristicas: [
      "3 habitaciones (2 dobles + 1 twin)",
      "2 baños completos",
      "Gran salón-comedor",
      "Cocina amplia equipada",
      "Calefacción central",
      "Ropa de cama incluida",
      "WiFi",
      "Aparcamiento incluido",
      "Terraza compartida",
    ],
    experiencia:
      "Seis personas. Una cocina que huele bien. Risas que se mezclan con el sonido del viento. Esto también es la experiencia.",
    imagen: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80",
    ],
    precio: "desde 190€",
  },
  {
    id: 7,
    slug: "la-pornacal",
    nombre: "La Pornacal",
    subtitulo: "El más especial · 4 personas",
    descripcionCorta:
      "El que da nombre al conjunto. El más cercano a la braña. El que más se recuerda.",
    descripcionLarga: `La Pornacal lleva el nombre del conjunto que lo hace todo posible.
El apartamento estrella. El más pensado. El que concentra en su espacio
todo lo que North Authentic Experience quiere ser.

Cuatro personas. Vistas directas a la braña. Un diseño que combina piedra centenaria
con comodidades contemporáneas sin traicionar el espíritu del lugar.

Si solo puedes elegir uno, elige este.
Pero avisa: es difícil marcharse.`,
    capacidad: 4,
    habitaciones: 2,
    banos: 2,
    metros: 75,
    caracteristicas: [
      "Vistas directas a La Braña de La Pornacal",
      "2 habitaciones dobles",
      "2 baños completos",
      "Cocina de diseño equipada",
      "Calefacción central",
      "Ropa de cama premium incluida",
      "WiFi de alta velocidad",
      "Terraza privada con vistas",
      "Aparcamiento incluido",
    ],
    experiencia:
      "Abrir la puerta de la terraza y que La Braña esté ahí, esperándote. Solo para ti. Solo en este momento.",
    imagen: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    ],
    destacado: true,
    precio: "desde 145€",
  },
];

export const getApartamento = (slug: string): Apartamento | undefined =>
  apartamentos.find((a) => a.slug === slug);

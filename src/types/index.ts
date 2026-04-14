export interface Apartamento {
  id: number;
  slug: string;
  nombre: string;
  subtitulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  capacidad: number;
  habitaciones: number;
  banos: number;
  metros: number;
  planta?: string;
  caracteristicas: string[];
  experiencia: string; // texto evocador sobre la estancia
  imagen: string;
  imagenes: string[];
  destacado?: boolean;
  precio?: string; // desde X€/noche
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  pregunta: string;
  respuesta: string;
}

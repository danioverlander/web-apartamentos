import type { Metadata } from "next";
import Hero                from "@/components/home/Hero";
import ApartamentosPreview from "@/components/home/ApartamentosPreview";
import EmotionalBlock      from "@/components/home/EmotionalBlock";
import ElLugarBlock        from "@/components/home/ElLugarBlock";
import ExperienciaBlock    from "@/components/home/ExperienciaBlock";
import VillarBlock         from "@/components/home/VillarBlock";
import CTAFinal            from "@/components/home/CTAFinal";

export const metadata: Metadata = {
  title: "Apartamentos La Pornacal | North Authentic Experience — Somiedo, Asturias",
  description:
    "Siete apartamentos rurales en el Parque Natural de Somiedo, con acceso directo a La Braña de La Pornacal. Desconecta en Villar de Vildas, Pueblo Ejemplar de Asturias.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ApartamentosPreview />
      <EmotionalBlock />
      <ElLugarBlock />
      <ExperienciaBlock />
      <VillarBlock />
      <CTAFinal />
    </>
  );
}

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Apartamentos La Pornacal | North Authentic Experience — Somiedo, Asturias",
    template: "%s | Apartamentos La Pornacal — Somiedo",
  },
  description:
    "Siete apartamentos rurales en Villar de Vildas, corazón del Parque Natural de Somiedo. Acceso directo a La Braña de La Pornacal. Alojamiento auténtico en Asturias para desconectar de verdad.",
  keywords: [
    "apartamentos rurales Somiedo",
    "alojamiento Asturias naturaleza",
    "Villar de Vildas",
    "Parque Natural Somiedo",
    "La Braña de La Pornacal",
    "escapada rural Asturias",
    "turismo rural Asturias",
    "alojamiento rural Somiedo",
    "casas rurales Asturias",
    "North Authentic Experience",
  ],
  authors: [{ name: "North Authentic Experience" }],
  creator: "North Authentic Experience",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://northauthenticexperience.com",
    siteName: "North Authentic Experience",
    title: "Apartamentos La Pornacal | Somiedo, Asturias",
    description:
      "Desconecta en el Parque Natural de Somiedo. Siete apartamentos rurales en Villar de Vildas con acceso directo a La Braña de La Pornacal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamentos La Pornacal — Villar de Vildas, Somiedo, Asturias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos La Pornacal | Somiedo, Asturias",
    description:
      "Desconecta en el Parque Natural de Somiedo. Siete apartamentos rurales en Villar de Vildas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://northauthenticexperience.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://structura-maroc.ma"),
  title: {
    default: "Structura Maroc — Génie Civil & Travaux Publics",
    template: "%s | Structura Maroc",
  },
  description:
    "La plateforme premium dédiée au Génie Civil et aux Travaux Publics au Maroc : métrés, plans AutoCAD, dossiers de marchés publics, formations et estimation des coûts.",
  keywords: [
    "génie civil Maroc",
    "travaux publics",
    "métré BTP",
    "AutoCAD DWG Maroc",
    "marchés publics Maroc",
    "estimation coûts BTP",
    "الهندسة المدنية المغرب",
  ],
  alternates: { languages: { fr: "/fr", ar: "/ar" } },
  openGraph: {
    title: "Structura Maroc",
    description: "Génie Civil & Travaux Publics — la référence premium au Maroc.",
    url: "https://structura-maroc.ma",
    siteName: "Structura Maroc",
    locale: "fr_MA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Structura Maroc" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

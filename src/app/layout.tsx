import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Enoem — Strategisk Rekrytering, Analys & Utveckling",
  description:
    "Enoem (Nilsson & Mossberger) är ett ledande HR- och rekryteringsföretag i Halmstad. Vi erbjuder Search, Rekrytering, Analys (SHL) och Utveckling (IPU).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`h-full ${geist.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

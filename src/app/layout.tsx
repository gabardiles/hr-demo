import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enoem — Strategic HR",
  description:
    "Enoem (Nilsson & Mossberger) is a leading HR and recruitment company based in Halmstad, Sweden. We specialise in Search, Recruitment, Analysis (SHL), and Individual & Group Development (IPU).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

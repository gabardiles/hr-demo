import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enoem — HR, Recruitment & Leadership Development",
  description:
    "Enoem (Nilsson & Mossberger) delivers strategic HR services from Halmstad: executive search, recruitment, SHL analysis, and IPU-based leadership development across Sweden.",
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

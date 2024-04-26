import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navibar"
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Systan Notícias",
  description: "Systan Sistema Tecnológico o seu site de Notícias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="msvalidate.01" content="120B2315344862DA76D8B598018BCE67" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>

  );
}

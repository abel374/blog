import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navibar"
import Footer from "@/components/Footer";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Systan Notícias',
  description: 'news for you where you can find what you need',
  icons: {
    icon: [{ url: '/img/favicon-32x32.png', sizes: "32x32" }, { url: '/img/favicon-16x16.png', sizes: "16x16" }],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180"
    }
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: 'News-U',
    description: 'news for you where you can find what you need',
    type: 'article',
    authors: 'systan',
  },
  keywords: ['systannoticias', 'news', 'noticias de angola']
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="msvalidate.01" content="120B2315344862DA76D8B598018BCE67" />
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0KM2X5Z75Y"></Script>
        <Script id="google-analytics">
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-0KM2X5Z75Y');
    `
          }
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>

  );
}

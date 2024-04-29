import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navibar";
import Footer from "@/components/Footer";
import Script from "next/script";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Systan Notícias",
  description: "news for you where you can find what you need",
  icons: {
    icon: [
      { url: "/img/favicon-32x32.png", sizes: "32x32" },
      { url: "/img/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: "Systan-Notícias",
    description: "novidades para você onde você pode encontrar o que precisa",
    type: "article",
    authors: "systan",
  },
  keywords: [
    "systannoticias",
    "notícias",
    "noticias de angola",
    "noticia de angola e mundo",
    "angola noticia de hoje",
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="msvalidate.01" content="120B2315344862DA76D8B598018BCE67" />
      <head>
        {/* <!-- Event snippet for Visualização de página conversion page --> */}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0KM2X5Z75Y"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-0KM2X5Z75Y');
    `}
        </Script>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

// src/app/layout.tsx (Layout global sem "use client")
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ConditionalFooter from "@/components/layouts/conditionalFooter"; // Componente para lógica do cliente
import WhatsAppButton from "@/components/layouts/whatsappButton";
import { PropertyProvider } from "@/context/PropertyContext";
import ConditionalNavbar from "@/components/layouts/conditionalNavbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Planta Empreendimentos",
  description: "Site da Planta Empreendimentos Imobiliarios e Incorporadora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WKQPV237');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body className={montserrat.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKQPV237"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>

        {/* End Google Tag Manager (noscript) */}

        <PropertyProvider>
          <ConditionalNavbar /> {/* Não renderiza o navbar na pagina uni501 */}
          <main>{children}</main>
          <WhatsAppButton />
          <ConditionalFooter /> {/* Renderiza o footer condicionalmente */}
        </PropertyProvider>
      </body>
    </html>
  );
}

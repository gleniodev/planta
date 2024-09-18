// import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
// import "./globals.css";
// import { Navbar } from "@/components/layouts/navbar";
// import Footer from "@/components/layouts/footer";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

// export const metadata: Metadata = {
//   title: "Planta Empreendimentos",
//   description: "Site da Planta Empreendimentos Imobiliarios e Incorporadora",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={montserrat.className}>
//         <Navbar />
//         {children}
//         <Footer variant="light" />
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx (Layout global sem "use client")
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ConditionalFooter from "@/components/layouts/conditionalFooter"; // Componente para lógica do cliente
import WhatsAppButton from "@/components/layouts/whatsappButton";

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
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <ConditionalFooter /> {/* Renderiza o footer condicionalmente */}
      </body>
    </html>
  );
}

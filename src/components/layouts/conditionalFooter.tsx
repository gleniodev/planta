// src/components/ConditionalFooter.tsx
"use client"; // Isso só será executado no cliente

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/layouts/footer";

export default function ConditionalFooter() {
  const [showFooter, setShowFooter] = useState(true);
  const pathname = usePathname();

  // Verifica a rota e decide se o footer deve ser exibido
  useEffect(() => {
    // Exclui o footer nas rotas que começam com /produtos ou exatamente /projeto22
    if (pathname.startsWith("/produtos") || pathname === "/projeto22") {
      setShowFooter(false); // Não mostrar o footer nessas páginas
    } else {
      setShowFooter(true); // Mostrar o footer nas outras páginas
    }
  }, [pathname]);

  return <>{showFooter && <Footer variant="light" />}</>;
}

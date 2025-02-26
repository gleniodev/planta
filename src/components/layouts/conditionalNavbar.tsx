"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layouts/navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Determinar imediatamente se o Navbar deve ser exibido
  const shouldShowNavbar =
    pathname &&
    !pathname.startsWith("/uni501") &&
    pathname !== "/noz" &&
    pathname !== "/noz/book-digital";

  return <>{shouldShowNavbar && <Navbar />}</>;
}

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import whatsLogo from "@/assets/whatsapp-rounded-button.svg";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5583991032141"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={whatsLogo}
        alt="WhatsApp"
        width={20}
        height={20}
        className="fixed bottom-5 right-5 z-50 hidden h-20 w-20 transition-all hover:h-16 hover:w-16 md:block"
      />
    </Link>
  );
}

export default WhatsAppButton;

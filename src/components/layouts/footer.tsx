"use client";

import Image from "next/image";
import Link from "next/link";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import iconWhatsBK from "@/assets/icon-whatsapp-black.png";
import iconWhatsLT from "@/assets/icon-whatsapp-white.png";
import iconEmailBK from "@/assets/icon-email-black.png";
import iconEmailLT from "@/assets/icon-email-white.png";
import iconInstagramLT from "@/assets/icon-instagram-white.png";
import iconInstagramBK from "@/assets/icon-instagram-black.png";
import iconFacebookLT from "@/assets/icon-facebook-white.png";
import iconFacebookBK from "@/assets/icon-facebook-black.png";

type FooterProps = {
  variant: "light" | "dark";
};

export default function Footer({ variant }: FooterProps) {
  const isDark = variant === "dark";

  return (
    <footer
      className={`py-10 ${
        isDark ? "bg-black text-white" : "bg-primary-500 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:justify-center lg:flex-row gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center lg:w-1/3">
          <Image
            src={isDark ? logoDark : logoLight}
            alt="Planta Logo"
            width={526}
            height={381}
            className="w-[70%]"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-2/3 justify-around gap-8">
          {/* Mapa do Site + Redes Sociais */}
          <div className="text-center flex flex-col justify-between gap-8 md:text-left lg:w-1/3">
            <div className="flex flex-col">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/" className="hover:underline">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/aplanta" className="hover:underline">
                    A PLANTA
                  </Link>
                </li>
                <li>
                  <Link href="/produtos" className="hover:underline">
                    PRODUTOS
                  </Link>
                </li>
                <li>
                  <Link href="/projeto22" className="hover:underline">
                    PROJETO 22
                  </Link>
                </li>
                <li>
                  <Link href="/comprar" className="hover:underline">
                    COMPRAR
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:underline">
                    CONTATO
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:underline">
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
            {/* Redes Sociais Desktop */}
            <div className="hidden lg:flex justify-center md:justify-start gap-8 w-full">
              <Link href="https://instagram.com">
                <Image
                  src={isDark ? iconInstagramLT : iconInstagramBK}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="https://facebook.com">
                <Image
                  src={isDark ? iconFacebookLT : iconFacebookBK}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 justify-between gap-8">
            {/* Contato */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-4">CONTATO</h3>
              <ul>
                <li className="mb-2 flex items-center justify-center md:justify-start">
                  <Image
                    src={isDark ? iconWhatsLT : iconWhatsBK}
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span>(83) 99103-2141</span>
                </li>
                <li className="mb-2 flex items-center justify-center md:justify-start">
                  <Image
                    src={isDark ? iconEmailLT : iconEmailBK}
                    alt="Email"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span>ATENDIMENTO@PLANTAEVOCE.COM</span>
                </li>
              </ul>
            </div>

            {/* Endereço */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-4">ENDEREÇO</h3>
              <p>RUA INÁCIO PEDRO DINIZ, 115 - 2º ANDAR</p>
              <p>CATOLÉ</p>
              <p>CAMPINA GRANDE - PB</p>
            </div>
          </div>
        </div>
      </div>
      {/* Redes Sociais Moile */}
      <div className="flex justify-center py-8 md:justify-start lg:hidden gap-8 w-full">
        <Link href="https://instagram.com">
          <Image
            src={isDark ? iconInstagramLT : iconInstagramBK}
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>

        <Link href="https://facebook.com">
          <Image
            src={isDark ? iconFacebookLT : iconFacebookBK}
            alt="Facebook"
            width={24}
            height={24}
          />
        </Link>
      </div>

      {/* copyrigth */}
      <div className="text-black mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © Planta Transformações Urbanas - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

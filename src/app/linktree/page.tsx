"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-symbol.svg";
import logoNome from "@/assets/logo-planta.svg";
import bgHero from "@/assets/bg-hero-white.png";

export default function LinkTree() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero.src})` }}
    >
      {/* Camada de opacidade */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Conteúdo acima do background */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Imagem de Perfil */}
        <div className="mb-4">
          <Image
            src={logo}
            alt="Imagem de Perfil"
            width={120}
            height={120}
            className="rounded-full border-4 border-secondary"
          />
        </div>

        {/* Nome e Descrição */}
        <Image
          src={logoNome}
          alt="Nome da Marca"
          width={220}
          height={220}
          className="mb-8"
        />

        <p className="text-secondary mb-6 text-center text-lg">
          Transformando espaços urbanos em lar.
        </p>

        {/* Links */}
        <div className="flex flex-col w-full max-w-md space-y-4">
          <Link
            href="https://plantaevoce.com"
            target="_blank"
            className="bg-terciary text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-secondary transition"
          >
            LANÇAMENTO
          </Link>
          <Link
            href="https://plantaevoce.com/uni501"
            target="_blank"
            className="bg-terciary text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-secondary transition"
          >
            UNI501
          </Link>
          <Link
            href="https://plantaevoce.com/noz/book-digital"
            target="_blank"
            className="bg-terciary text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-secondary transition"
          >
            NÓZ
          </Link>
          <Link
            href="https://plantaevoce.com"
            target="_blank"
            className="bg-terciary text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-secondary transition"
          >
            NOSSO SITE
          </Link>
          <Link
            href="https://wa.me/5583991032141?text=Olá! Gostaria de mais informações."
            target="_blank"
            className="bg-terciary text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-secondary transition"
          >
            FALE CONOSCO NO WHATSAPP
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCVR-DjXti-lzW_qYh7_tw9Q"
            target="_blank"
            className="bg-terciary text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-secondary transition"
          >
            YOUTUBE
          </Link>
        </div>
      </div>
    </section>
  );
}

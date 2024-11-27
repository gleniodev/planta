"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/assets/logo-planta.svg";
import logoSymbol from "@/assets/logo-symbol.svg";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "A PLANTA", path: "/aplanta" },
    { name: "PRODUTOS", path: "/produtos" },
    { name: "PROJETO 22", path: "/projeto22" },
    { name: "COMPRAR", path: "/comprar" },
    { name: "CONTATO", path: "/contato" },
  ];

  return (
    <header className="bg-white fixed z-50 w-full">
      <div className="w-full h-[80px] flex justify-between items-center font-light bg-white py-2 relative z-10">
        {/* Logo */}
        <div className="logo flex items-center gap-2 p-1">
          <Image
            src={logoSymbol}
            alt="Logo Symbol"
            width={50} // Define largura explícita
            height={50} // Define altura explícita
            priority // Garante que a logo seja carregada prioritariamente
            className="p-1 ml-1"
          />
          <Image
            src={logo}
            alt="Logo"
            width={200} // Define largura explícita
            height={20} // Define altura explícita
            priority // Garante carregamento prioritário
            className="md:hidden lg:block p-2" // A logo maior só aparece em telas maiores
          />
        </div>
        {/* Menu para desktop */}
        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span
                className={`${
                  pathname === link.path
                    ? "text-secondary"
                    : "text-primary-100 hover:text-primary-300"
                } select-text-secondary`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/*quando o login estiver ativo adicionar na div abaixo: md:flex */}
        <div className="hidden items-center space-x-6 md:flex ">
          <Link href="" passHref>
            <span className="text-black hover:text-primary-300 cursor-pointer md:pr-4 lg:pr-8">
              LOGIN
            </span>
          </Link>
        </div>
        {/* Botão de menu para mobile */}
        <button
          className="text-black md:hidden pr-10"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Menu para mobile */}
      {isMobileMenuOpen && (
        <nav className="bg-white absolute top-0 flex h-screen w-full flex-col items-center justify-start gap-16 px-4 py-20 text-2xl md:hidden">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} passHref>
                <span
                  className={`block py-2 ${
                    pathname === link.path
                      ? "text-secondary"
                      : "text-primary-100 hover:text-primary-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            {/*quando o login estiver ativo adicionar descomentar a tag LINK abaixo */}
            {/* <Link href="https://plataforma.metaverso.ltda/login" passHref>
              <span
                className="text-black hover:text-primary-300 block cursor-pointer py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                LOGIN
              </span>
            </Link> */}
          </div>
        </nav>
      )}
    </header>
  );
};

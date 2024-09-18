// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import useTypewriter from "react-typewriter-hook";
// import Image from "next/image";
// import Link from "next/link";

// import instagram from "@/assets/icon-instagram-black.png";
// import facebook from "@/assets/icon-facebook-black.png";
// import whatsapp from "@/assets/icon-whatsapp-black.png";
// import logoSymbol from "@/assets/logo-symbol.svg";
// import bgHero from "@/assets/bg-hero-white.png";

// const MagicWords = [
//   "BEM-VINDO",
//   "ORGANICIDADE",
//   "FORÇA DE TRABALHO",
//   "QUALIDADE EFICIENTE",
// ];

// export function HeroSection() {
//   const [magicWord, setMagicWord] = useState(MagicWords[0]);
//   const typewriter = useTypewriter(magicWord);
//   const indexRef = useRef(0);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       indexRef.current =
//         indexRef.current >= MagicWords.length - 1 ? 0 : indexRef.current + 1;
//       setMagicWord(MagicWords[indexRef.current]);
//     }, 5000); // Changes the word every 5 seconds

//     return () => clearTimeout(timeoutId);
//   }, [magicWord]);

//   return (
//     <div className="h-screen bg-cover bg-center relative flex gap">
//       {/* Barra lateral com ícones das redes */}
//       <div className="hidden absolute top-0 left-0 w-20 h-full md:flex flex-col items-center justify-center gap-16 p-4 space-y-4 z-9 bg-white">
//         {/* Substitua os src abaixo pelos caminhos dos seus ícones */}
//         <Link href={"https://www.instagram.com/plantaevoce/"} target="_blank">
//           <Image src={instagram} alt="Ícone Instagram" width={24} height={24} />
//         </Link>
//         <Link
//           href={"https://www.facebook.com/profile.php?id=100094514145491"}
//           target="_blank"
//         >
//           <Image src={facebook} alt="Ícone Facebook" width={24} height={24} />
//         </Link>
//         <Link
//           href={
//             "https://api.whatsapp.com/send/?phone=5583991032141&text=Ol%C3%A1!+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+UNI+501.&type=phone_number&app_absent=0"
//           }
//           target="_blank"
//         >
//           <Image src={whatsapp} alt="Ícone WhatsApp" width={24} height={24} />
//         </Link>
//       </div>
//       <div className="flex items-center justify-center w-full lg:p-32 lg:mt-24">
//         <Image
//           src={bgHero}
//           alt="bg-hero"
//           width={1482}
//           height={784}
//           className="border w-full"
//         />
//       </div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <Image src={logoSymbol} alt="Logo" width={60} height={60} />
//       </div>

//       <style jsx>{`
//         .blinker {
//           animation: blinker 1s step-start infinite;
//         }
//         @keyframes blinker {
//           50% {
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
import Image from "next/image";
import Link from "next/link";

import instagram from "@/assets/icon-instagram-black.png";
import facebook from "@/assets/icon-facebook-black.png";
import whatsapp from "@/assets/icon-whatsapp-black.png";
import logoSymbol from "@/assets/logo-symbol.svg";
import bgHero from "@/assets/bg-hero-white.png";

export function HeroSection() {
  return (
    <section className="overflow-hidden relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center lg:justify-start lg:items-start lg:bg-none">
      {/* Imagem de fundo para telas menores */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={bgHero}
          alt="bg-hero"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
      </div>

      {/* Barra lateral com ícones das redes sociais */}
      <div className="hidden lg:flex absolute top-0 left-0 w-20 h-full flex-col items-center justify-center gap-16 p-4 bg-white z-10">
        <Link href={"https://www.instagram.com/plantaevoce/"} target="_blank">
          <Image src={instagram} alt="Ícone Instagram" width={24} height={24} />
        </Link>
        <Link
          href={"https://www.facebook.com/profile.php?id=100094514145491"}
          target="_blank"
        >
          <Image src={facebook} alt="Ícone Facebook" width={24} height={24} />
        </Link>
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=5583991032141&text=Ol%C3%A1!+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+UNI+501.&type=phone_number&app_absent=0"
          }
          target="_blank"
        >
          <Image src={whatsapp} alt="Ícone WhatsApp" width={24} height={24} />
        </Link>
      </div>

      {/* Imagem para telas maiores (lg e acima) */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-full lg:mt-24">
        <Image
          src={bgHero}
          alt="bg-hero"
          width={1482}
          height={784}
          priority
          className="border w-full"
        />
      </div>

      {/* logo
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
        <Image
          src={logoSymbol}
          alt="Logo"
          width={60}
          height={60}
          className="md:hidden lg:block"
        />
      </div> */}

      <style jsx>{`
        .blinker {
          animation: blinker 1s step-start infinite;
        }
        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

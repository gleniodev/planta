"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : "."));
    }, 500); // Animação dos pontos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-secondary to-terciary text-white">
      {/* Título e animação dos pontos */}
      <h1 className="text-6xl font-bold mb-4">Em breve</h1>
      <h1 className="text-6xl font-bold mb-4">{dots}</h1>

      <p className="text-lg mb-8 text-center">
        Estamos trabalhando duro para trazer algo incrível para você!
      </p>

      {/* Fundo animado */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        <div className="w-64 h-64 bg-white opacity-20 rounded-full animate-ping"></div>
        <div className="w-96 h-96 bg-white opacity-10 rounded-full absolute animate-ping"></div>
      </div>
    </div>
  );
}

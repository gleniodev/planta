"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";

// Importe o ícone de play, as aspas e a imagem do fundo
import iconPlay from "@/assets/icon-play.svg";
import aspasUp from "@/assets/aspas-up.png";
import aspasDown from "@/assets/aspas-down.png";
import ImgQuemSomos from "@/assets/Quem Somos.png";
import Link from "next/link";

const SobreNos = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const opts = {
    height: "480",
    width: "854",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <section className="flex flex-col justify-center items-center text-gray-800 py-12 px-4 w-full">
      <div className="max-w-6xl w-full flex flex-col justify-center items-center gap-12 px-4">
        {/* Título da seção */}
        <div className="w-full text-center">
          <h2 className="text-3xl font-medium text-center text-primary-100 mb-6">
            A PLANTA
          </h2>

          {/* Divisória */}
          <div className="w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>
        </div>

        {/* Texto da seção com aspas */}
        <div className="relative text-center w-full flex flex-col items-center">
          {/* Aspas superiores
          <div className="absolute left-4 top-[-40px] w-8 h-8 md:w-12 md:h-12">
            <Image
              src={aspasUp}
              alt="Aspas superiores"
              layout="responsive"
              width={48}
              height={48}
            />
          </div> */}
          <blockquote className="text-justify w-[65%] text-lg md:text-xl italic mb-6 md:w-[40%]">
            Na essência de cada projeto, buscamos não apenas ocupar um espaço,
            mas enriquecê-lo, com harmonia e respeito pelo ambiente que nos
            acolhe.
          </blockquote>
          {/* Aspas inferiores
          <div className="absolute right-4 bottom-[-40px] w-8 h-8 md:w-12 md:h-12">
            <Image
              src={aspasDown}
              alt="Aspas inferiores"
              layout="responsive"
              width={48}
              height={48}
            />
          </div> */}
        </div>

        {/* Botão Saiba mais */}
        <div className="text-center mb-10">
          <Link href="/aplanta">
            <button className="border border-gray-500 px-6 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">
              Saiba mais
            </button>
          </Link>
        </div>
      </div>

      {/* Seção de Vídeo */}
      <div className="relative w-full flex justify-center items-center py-20">
        {/* Utilize o componente Image para o background */}
        <div className="flex justify-center w-full lg:h-[200px] h-auto">
          <Image
            src={ImgQuemSomos} // Imagem de fundo (se houver)
            alt="Imagem de Fundo"
            layout="fill"
            objectFit="cover"
            className="w-full h-auto "
          />
        </div>

        {/* Botão de Play */}
        <div className="absolute flex justify-center items-center">
          <button
            className="flex justify-center items-center"
            onClick={() => setIsVideoOpen(true)}
          >
            <Image
              src={iconPlay}
              alt="Play"
              width={50} // Tamanho do ícone ajustável
              height={50}
              className="transition-transform duration-300 ease-in-out hover:scale-110" // Aumenta 10% no hover
            />
          </button>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setIsVideoOpen(false)}
        >
          <YouTube
            videoId="zZgI1bOMCww"
            opts={opts}
          />
        </div>
      )}
    </section>
  );
};

export default SobreNos;

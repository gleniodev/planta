"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import logoUNI from "@/assets/logo-uni.png";
import logoNOZ from "@/assets/logo-noz.svg";
import bgSobre from "@/assets/bg-sobre.jpg";

// Dados dos slides (interface Slide)
interface Slide {
  title: string;
  description: string;
  image1: string;
  image2: string;
}

const CustomCarousel: React.FC = () => {
  // Estado para o slide atual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Referência para o Swiper
  const swiperRef = useRef<any>(null); // Inicializando com null

  // Função para mudar o slide atual
  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index); // Navega para o índice do slide
      }
    }
  };

  // Dados dos slides
  const slides: Slide[] = [
    {
      title: "UNI 501",
      description:
        "O UNI 501 localizado em um dos pontos mais altos e no bairro mais charmoso da cidade, o UNI501 conversa com o seu entorno através da sua arquitetura fluida, atemporal e orgânica.",
      image1: "/assets/uni-hall.jpeg",
      image2: "/assets/uni-fachada.png",
    },
    {
      title: "NÓZ",
      description:
        "O NÓZ traz para o bairro mais dinâmico e diverso de campina, o catolé, a leveza, simplicidade e elegância de um projeto pensado para acolher com aconchego cada um que desfrute dos seus espaços.",
      image1: "/assets/noz-ap.jpg",
      image2: "/assets/noz-fachada.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white p-6 md:p-10 font">
      <h2 className="text-2xl md:text-3xl font-medium text-center text-primary-100 mb-6">
        PRODUTOS
      </h2>

      {/* Botões de navegação */}
      <div className="w-full flex-wrap justify-center md:justify-start md:pl-8 space-x-4 mb-4 font-semibold text-center md:text-left">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={`bg-transparent text-primary-100 hover:text-primary-300 py-2 px-4 ${
              index === currentSlide ? "bg-transparent text-secondary" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            {slide.title}
          </button>
        ))}
        <div className="w-full h-[1px] bg-gray-300 mt-2"></div>
      </div>

      {/* Swiper para os slides */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Captura a instância do Swiper
        spaceBetween={50}
        slidesPerView={1}
        className="w-full flex justify-center items-center"
        navigation={false} // Desabilita a navegação por padrão
        modules={[Navigation]} // Adiciona o módulo Navigation corretamente
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide flex flex-col md:flex-row items-center justify-around p-6 md:p-10 lg:p-20 text-primary-100">
              {/* Conteúdo do slide */}
              <div className="flex flex-col w-full md:w-1/3 p-4 gap-4 md:gap-6">
                <h3 className="text-2xl md:text-4xl lg:text-6xl font-light mb-2 md:mb-4">
                  {/* COLOCAR LOGO AO INVES DOS NOMES */}
                  {/* <Image
                    src={bgSobre}
                    alt="Imagem do Imóvel"
                    layout="fill" // Preenche o contêiner com a imagem
                    objectFit="cover" // Garante que a imagem cubra o contêiner
                    className="filter grayscale " 
                  />*/}
                  {slide.title}
                </h3>
                <p className="text-lg md:text-xl text-justify">
                  {slide.description}
                </p>
              </div>
              <div className="max-h-[300px] flex items-center w-full md:w-1/2 space-x-4 gap-4">
                {/* Apenas uma imagem no modo mobile */}
                <div className="w-full h-[300px] md:h-[382px] hover:grayscale-0 transition-colors duration-300 relative">
                  <Image
                    src={slide.image1}
                    alt="Imagem 1"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition duration-50 ease-in-out cursor-pointer"
                  />
                </div>
                {/* Exibe a segunda imagem apenas em md para cima */}
                <div className="hidden md:block w-[272px] h-[432px] grayscale hover:grayscale-0 transition-colors duration-300 relative">
                  <Image
                    src={slide.image2}
                    alt="Imagem 2"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition duration-50 ease-in-out cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;

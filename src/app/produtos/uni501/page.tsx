"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  Play,
  Waves,
  ChevronLeft,
  ChevronRight,
  FileText,
  Building,
  Columns,
  Paintbrush,
  Key,
  Dumbbell,
  Utensils,
  Flower2,
  Blocks,
  Headphones,
  BrickWall,
  Pickaxe,
  Bath,
  PaintRoller,
} from "lucide-react";
import MapSection from "@/components/ui/map-section";
import ImageGallery from "@/components/ui/image-gallery";
import iconPlay from "@/assets/icon-play.svg";
import banner from "@/assets/uni-onze-upscale.webp";
import logoUni from "@/assets/logo-uni.png";
import heroImage from "@/assets/uni-fachada-2.webp";
import pracaImage from "@/assets/uni-praca.webp";
import jardimTavares from "@/assets/jardim-tavares.webp";
import bgVideoImg from "@/assets/bg-video-uni.webp";
import YouTube from "react-youtube";
import ImgQuemSomos from "@/assets/Quem Somos.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import VideoModal from "@/components/ui/videoModal";

const gallery = [
  {
    image: "/assets/uni-ap-01-111m.webp",
    index: 1,
    subtitle: "Planta Final 01",
  },
  {
    image: "/assets/uni-ap-02-69m.webp",
    index: 2,
    subtitle: "Planta Final 02",
  },
  {
    image: "/assets/uni-ap-03-69m.webp",
    index: 3,
    subtitle: "Planta Final 03",
  },
  {
    image: "/assets/uni-ap-04-110.webp",
    index: 4,
    subtitle: "Planta Final 04",
  },
  {
    image: "/assets/uni-ap-01-unificado-181m.webp",
    index: 5,
    subtitle: "Possível União de Plantas",
  },
];

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoOpenJardimTavares, setIsVideoOpenJardimTavares] =
    useState(false);
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Lado esquerdo - imagem do prédio */}
            <div className="flex justify-center">
              <div className="relative  overflow-hidden w-full max-w-md lg:max-w-none">
                <Image
                  src={heroImage}
                  alt="Fachada UNI 501"
                  height={625}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Lado direito - informações do empreendimento */}
            <div className="flex flex-col space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center lg:text-left text-primary-100">
                UNI 501
              </h1>

              <div className="space-y-6">
                <div className="border-2 border-gray-200 p-6 lg:p-8 ">
                  <h2 className="text-base sm:text-lg text-primary-100 font-medium leading-relaxed">
                    Em construção – Rua Arquelino de Souza Guimarães 501, Jardim
                    Tavares.
                  </h2>
                </div>

                <div className="border-2 border-gray-200 p-6 lg:p-8  space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    UNI vem da exclusividade de um projeto único e 501 era o
                    número de uma das onde o projeto foi edificado, no charmoso
                    bairro Jardim Tavares
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Localizado em um dos pontos mais altos de Campina Grande, o
                    UNI 501, do alto dos seus 22 andares, privilegia, entre
                    outras coisas, a vista e o clima serrano da nossa Rainha da
                    Borborema.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    Arquitetura – CRN Arquitetura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vídeo */}
      <section className="relative w-full ">
        <div className="relative w-full h-32 sm:h-40 lg:h-48 flex justify-center items-center">
          <Image
            src={ImgQuemSomos}
            alt="Imagem de Fundo"
            fill
            className="object-cover"
          />

          {/* Botão de Play */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              className="flex justify-center items-center z-10"
              onClick={() => setIsVideoOpen(true)}
            >
              <Image
                src={iconPlay}
                alt="Play"
                width={50}
                height={50}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </button>
          </div>
        </div>

        {isVideoOpen && (
          <VideoModal
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
            videoId="WDgdfrErd5A"
          />
        )}
      </section>

      {/* 3. O Projeto */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-medium text-center lg:text-left text-primary-100">
                O PROJETO
              </h2>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  Um projeto atemporal, o UNI 501 nasceu de ideias de
                  campinenses para pessoas de Campina, através de eventos de
                  cocriação, traduzidos pelo escritório CRN, em uma arquitetura
                  contemporânea, elegante e funcional, onde contemplar e
                  conversar com o entorno do charmoso bairro Jardim Tavares foi
                  a maior inspiração.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  Uma arquitetura flúida, onde generosas varandas e grandes
                  janelas abrem, para o UNI 501, o cenário perfeito à
                  contemplação do seu entorno, ao conforto gerado pela
                  ventilação abundante do bairro e pela amplitude ocasionada
                  pelas suas aberturas. Um movimento de traços que inserem o UNI
                  501 ao Jardim Tavares de forma harmoniosa e convidativa.
                </p>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96  overflow-hidden">
              <Image
                src={pracaImage}
                alt="Imagem do empreendimento"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Seção adicional do projeto */}
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="order-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-primary-100 font-medium leading-tight lg:!leading-[48px] mb-8 lg:mb-12 text-justify">
                  A união de ideias, realidades, necessidades e repertórios trás
                  para o UNI 501 a pluralidade e a versatilidade que os
                  arquitetos Ricardo Nogueira e Cristiano Rolim imprimiram em
                  cada detalhe, para fazer do 501 um endereço de desejo.
                </h3>
              </div>

              <div className="order-1 lg:order-2 space-y-4 max-h-80 lg:max-h-96 overflow-y-auto pr-2">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Com uma arquitetura moderna, perene e orgânica, o UNI 501 se
                  insere de forma harmônica ao local mais desejado do Jardim
                  Tavares, um bairro rodeado por belíssimos casarões das décadas
                  de 70 e 80, onde a tranquilidade faz morada e, acordar ao som
                  dos passarinhos, não é surpresa para quem tem a felicidade de
                  viver esse lugar.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Pensado para famílias em seus mais diversos momentos, o UNI
                  501 trouxe para os seus 68 apartamentos o conforto e a
                  versatilidade necessários a quem busca viver e morar bem. São
                  3 tipos de planta padrão, porém com a possibilidade de união
                  de plantas trazendo ainda mais conforto e espaço abre-se um
                  leque de possibilidades que só um projeto versátil e moderno
                  pode trazer, uma vez que ele foi pensado assim.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Os equipamentos de lazer e bem estar que fazem parte do
                  empreendimento faz com que ele seja ainda mais exclusivo e
                  desejado. Uma academia no décimo primeiro andar (ONZE), gormet
                  view ou uma piscina exclusiva sob reserva, são apenas algumas
                  possibilidades a serem vividas por quem irá desfrutar dessa
                  morada.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Os seus diversos jardins, pensados para proporcionar bem estar
                  e acolhimento, estão presentes desde sua entrada até sua
                  fachada, através de um jardim vertical que cobre parte dela,
                  quebrando a frieza do concreto. O toque tropical do projeto
                  paisagístico de Gilda Maldonado trouxe ao UNI toda
                  organicidade e aconchego em harmonia com cada ambiente.
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <h4 className="text-lg sm:text-xl lg:text-3xl text-primary-100 font-medium leading-relaxed text-center ">
                São 68 apartamentos com plantas que variam de 69m² a 111m², com
                a possibilidade de uniões chegando a 181m².
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Diferenciais */}
      <section className="py-16 sm:py-20 lg:py-8 lg:mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-medium text-center lg:text-left text-black">
                Diferenciais
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed text-center lg:text-left">
                Por ter se originado de ideias de um público plural o UNI 501 é
                um projeto repleto de diferencias
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <DiferencialItem
                title="Piscina com uso exclusivo"
                icon={<Waves className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <DiferencialItem
                title="Academia com vista panorâmica"
                icon={<Dumbbell className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <DiferencialItem
                title="Gourmet com vista panorâmica"
                icon={<Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <DiferencialItem
                title="Espaço relax"
                icon={
                  <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                }
              />
              <DiferencialItem
                title="Integração de espaços"
                icon={<Blocks className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <DiferencialItem
                title="Versatilidade de plantas"
                icon={<Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Galeria de Imagens */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium mb-8 lg:mb-12 text-black text-center">
            Galeria de Imagens
          </h2>
          <ImageGallery variant={"uni"} />
        </div>
      </section>

      {/* 6. Status da Obra */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 lg:space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-medium text-black">
                Status da Obra
              </h2>
              <StatusItem percentage={89} title={""} icon={undefined} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              <StatusItem
                title="Preparação do Terreno"
                percentage={100}
                icon={<Pickaxe className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <StatusItem
                title="Estrutura"
                percentage={100}
                icon={<Building className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <StatusItem
                title="Esquadrias"
                percentage={83}
                icon={<Columns className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <StatusItem
                title="Alvenaria"
                percentage={100}
                icon={
                  <BrickWall className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                }
              />
              <StatusItem
                title="Instalações"
                percentage={84}
                icon={<Bath className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <StatusItem
                title="Acabamentos"
                percentage={92}
                icon={
                  <PaintRoller className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Plantas Disponíveis */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium mb-8 lg:mb-12 text-black text-center">
            Plantas Disponíveis
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {gallery.map((item) => (
                <CarouselItem
                  key={item.index}
                  className="flex justify-center items-center p-4"
                >
                  <div className="flex flex-col justify-center items-center relative w-full max-w-4xl">
                    <h3 className="text-black mb-4">{item.subtitle}</h3>
                    <Image
                      src={item.image}
                      alt={`Planta ${item.index}`}
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto max-h-[70vh]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black border-black" />
            <CarouselNext className="text-black border-black" />
          </Carousel>
        </div>
      </section>

      {/* 8. Jardim Tavares */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-medium text-center lg:text-left text-primary-100">
                JARDIM TAVARES
              </h2>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  O bairro Jardim Tavares nasceu em 1957 quando foi lançado o
                  loteamento do mesmo nome, com a proposta de alcançar o público
                  que queria morar numa área nobre de Campina, hoje comprovado
                  com os casarões e a vizinhaça que lá existe.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  O Jardim Tavares está localizado em um dos pontos mais altos
                  da cidade, privilegiando a vista e o clima mais frio de serra.
                  É comum na época de inverno não enxergar o alto dos prédios
                  por conta da névoa.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  A atmosfera, tranquila e bucólica, gerada pelas frondosas
                  árvores e seus nobres moradores, os passarinhos, faz do bairro
                  um dos mais charmosos e desejados para quem espera viver com
                  tranquilidade e segurança.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  Sua proximidade do centro da cidade, menos de 2 minutos de
                  carro, e a presença do polo gastronômico em seu entorno, trás
                  aos moradores do bairro praticidade e comodidade, para uma
                  vida cada vez mais agitada.
                </p>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-full lg:w-full">
              <Image
                src={jardimTavares}
                alt="Jardim Tavares"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Vídeo Jardim Tavares */}
      <section className="relative w-full ">
        <div className="relative w-full h-32 sm:h-40 lg:h-48 flex justify-center items-center">
          <Image
            src={ImgQuemSomos}
            alt="Imagem de Fundo"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex justify-center items-center">
            <button
              className="flex justify-center items-center z-10"
              onClick={() => setIsVideoOpenJardimTavares(true)}
            >
              <Image
                src={iconPlay}
                alt="Play"
                width={50}
                height={50}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </button>
          </div>
        </div>

        {isVideoOpenJardimTavares && (
          <VideoModal
            isOpen={isVideoOpenJardimTavares}
            onClose={() => setIsVideoOpenJardimTavares(false)}
            videoId="4ApCDbG-VN8"
          />
        )}
      </section>

      {/* 10. Explore a Região */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium mb-8 lg:mb-12 text-center text-black">
            Explore a Região
          </h2>
          <MapSection />
        </div>
      </section>

      {/* 11. Chamada para Ação */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-black">
              Pronto para fazer parte deste projeto?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Não perca a oportunidade de investir em um empreendimento único,
              com localização privilegiada e acabamento de alto padrão.
            </p>
            <Link
              href={`https://wa.me/5583991032141?text=${encodeURIComponent(
                `Olá, gostaria de mais informações sobre o UNI 501`
              )}`}
              target="_blank"
              className="inline-block bg-black text-white py-3 px-8  hover:bg-gray-800 transition-colors duration-300"
            >
              Comprar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatusItem({
  title,
  percentage,
  icon,
}: {
  title: string;
  percentage: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center bg-white p-4 lg:p-6  shadow-sm border border-gray-100 w-full max-w-md mx-auto transition-transform hover:scale-105 gap-3 lg:gap-4">
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex-1 min-w-0">
        {title && (
          <h3 className="text-sm sm:text-base lg:text-lg font-medium text-black mb-2 truncate">
            {title}
          </h3>
        )}
        <div className="w-full h-2 lg:h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`relative h-full rounded-full transition-all duration-500 ${
              percentage < 100 ? "bar-animated bg-gray-400" : "bg-secondary"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-gray-600">{percentage}%</p>
      </div>
    </div>
  );
}

function DiferencialItem({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center bg-white p-4 lg:p-6  shadow-sm border border-gray-100 transition-transform hover:scale-105 text-center space-y-3">
      <div className="flex-shrink-0">{icon}</div>
      <h3 className="text-sm sm:text-base lg:text-lg font-medium text-black leading-tight">
        {title}
      </h3>
    </div>
  );
}

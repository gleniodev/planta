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

const gallery = [
  { image: "/assets/uni-ap-01-111m.webp", index: 1 },
  { image: "/assets/uni-ap-01-unificado-181m.webp", index: 2 },
  { image: "/assets/uni-ap-01-unificado-181m.webp", index: 3 },
  { image: "/assets/uni-ap-02-69m.webp", index: 4 },
  { image: "/assets/uni-ap-03-69m.webp", index: 5 },
  { image: "/assets/uni-ap-04-110.webp", index: 6 },
];

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const opts = {
    height: "480",
    width: "854",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="w-full bg-white py-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - imagem do prédio */}
          <div className="flex justify-center relative rounded-lg overflow-hidden">
            <Image
              src={heroImage}
              alt="Fachada UNI 501"
              height={625}
              className="object-cover"
            />
          </div>

          {/* Lado direito - informações do empreendimento */}
          <div className="flex flex-col items-center py-10 gap-8">
            <h1 className="text-3xl font-medium text-center text-primary-100 mb-6">
              UNI 501
            </h1>
            <div className=" mb-12 md:mb-0 md:px-10 text-justify">
              <h2 className="text-lg text-primary-100 font-medium leading-relaxed mb-10">
                Em construção – Rua Arquelino de Souza Guimarães 501, Jardim
                Tavares.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                UNI vem da exclusividade de um projeto único e 501 era o número
                de uma das onde o projeto foi edificado, no charmoso bairro
                Jardim Tavares
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Localizado em um dos pontos mais altos de Campina Grande, o UNI
                501, do alto dos seus 22 andares, privilegia, entre outras
                coisas, a vista e o clima serrano da nossa Rainha da Borborema.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Arquitetura – CRN Arquitetura
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vídeo */}
      <section className="relative w-full flex justify-center items-center py-20 md:mt-16 md:mb-16">
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

        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setIsVideoOpen(false)}
          >
            <YouTube videoId="WDgdfrErd5A" opts={opts} />
          </div>
        )}
      </section>

      {/* 3. Texto + Auto Slide */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col items-center py-10 gap-8">
              <h1 className="text-3xl font-medium text-center text-primary-100 mb-6">
                O PROJETO
              </h1>
              <div className=" mb-12 md:mb-0 md:px-10 text-justify">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Um projeto atemporal, o UNI 501 nasceu de ideias de
                  campinenses para pessoas de Campina, através de eventos de
                  cocriação, traduzidos pelo escritório CRN, em uma arquitetura
                  contemporânea, elegante e funcional, onde contemplar e
                  conversar com o entorno do charmoso bairro Jardim Tavares foi
                  a maior inspiração.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Uma arquitetura flúida, onde generosas varandas e grandes
                  janelas abrem, para o UNI 501, o cenário perfeito à
                  contemplação do seu entorno, ao conforto gerado pela
                  ventilação abundante do bairro e pela amplitude ocasionada
                  pelas suas aberturas. Um movimento de traços que inserem o UNI
                  501 ao Jardim Tavares de forma harmoniosa e convidativa.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-full overflow-hidden">
              <div className="absolute inset-0 carousel">
                <Image
                  src={pracaImage}
                  alt="Imagem do empreendimento 1"
                  fill
                  className="object-cover carousel-item"
                />
              </div>
            </div>
          </div>
          <div className="mb-0 md:px-10 text-justify mt-16">
            <h2 className="text-2xl md:text-3xl text-primary-100 font-medium leading-relaxed mb-16">
              A união de ideias, realidades, necessidades e repertórios trás
              para o UNI 501 a pluralidade e a versatilidade que os arquitetos
              Ricardo Nogueira e Cristiano Rolim imprimiram em cada detalhe,
              para fazer do 501 um endereço de desejo.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Com uma arquitetura moderna, perene e orgânica, o UNI 501 se
              insere de forma harmônica ao local mais desejado do Jardim
              Tavares, um bairro rodeado por belíssimos casarões das décadas de
              70 e 80, onde a tranquilidade faz morada e, acordar ao som dos
              passarinhos, não é surpresa para quem tem a felicidade de viver
              esse lugar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Pensado para famílias em seus mais diversos momentos, o UNI 501
              trouxe para os seus 68 apartamentos o conforto e a versatilidade
              necessários a quem busca viver e morar bem. São 3 tipos de planta
              padrão, porém com a possibilidade de união de plantas trazendo
              ainda mais conforto e espaço abre-se um leque de possibilidades
              que só um projeto versátil e moderno pode trazer, uma vez que ele
              foi pensado assim.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Os equipamentos de lazer e bem estar que fazem parte do
              empreendimento faz com que ele seja ainda mais exclusivo e
              desejado. Uma academia no décimo primeiro andar (ONZE), gormet
              view ou uma piscina exclusiva sob reserva, são apenas algumas
              possibilidades a serem vividas por quem irá desfrutar dessa
              morada.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Os seus diversos jardins, pensados para proporcionar bem estar e
              acolhimento, estão presentes desde sua entrada até sua fachada,
              através de um jardim vertical que cobre parte dela, quebrando a
              frieza do concreto. O toque tropical do projeto paisagístico de
              Gilda Maldonado trouxe ao UNI toda organicidade e aconchego em
              harmonia com cada ambiente.
            </p>
            <h2 className="text-2xl text-primary-100 font-medium leading-relaxed mt-16">
              São 68 apartamentos com plantas que variam de 69m² a 111m², com a
              possibilidade de uniões chegando a 181m².
            </h2>
          </div>
        </div>
      </section>

      {/* 5. Diferenciais */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-8 text-center text-black">
            Diferenciais
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-16 text-center">
            Por ter se originado de ideias de um público plural o UNI 501 é um
            projeto repleto de diferencias
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <DiferencialItem
              title="Piscina com uso exclusivo"
              icon={<Waves className="w-8 h-8 text-black" />}
            />
            <DiferencialItem
              title="Academia com vista panorâmica"
              icon={<Dumbbell className="w-8 h-8 text-black" />}
            />
            <DiferencialItem
              title="Gourmet com vista panorâmica"
              icon={<Utensils className="w-8 h-8 text-black" />}
            />
            <DiferencialItem
              title="Espaço relax"
              icon={<Headphones className="w-8 h-8 text-black" />}
            />
            <DiferencialItem
              title="Integração de espaços"
              icon={<Blocks className="w-8 h-8 text-black" />}
            />
            <DiferencialItem
              title="Versatilidade de plantas"
              icon={<Flower2 className="w-8 h-8 text-black" />}
            />
          </div>
        </div>
      </section>

      {/* 4. Galeria de Imagens */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bomediumld mb-8 text-black text-center">
            Galeria de Imagens
          </h2>
          <ImageGallery />
        </div>
      </section>

      {/* 5. Status da Obra */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col justify-center items-center mb-16 gap-4">
            <h2 className="text-3xl font-medium text-center text-black">
              Status da Obra
            </h2>
            <StatusItem percentage={67} title={""} icon={undefined} />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <StatusItem
              title="Preparação do Terreno"
              percentage={100}
              icon={<Pickaxe className="w-8 h-8 text-black" />}
            />
            <StatusItem
              title="Estrutura"
              percentage={99}
              icon={<Building className="w-8 h-8 text-black" />}
            />
            <StatusItem
              title="Esquadrias"
              percentage={35}
              icon={<Columns className="w-8 h-8 text-black" />}
            />
            <StatusItem
              title="Alvenaria"
              percentage={96}
              icon={<BrickWall className="w-8 h-8 text-black" />}
            />
            <StatusItem
              title="Instalações"
              percentage={55}
              icon={<Bath className="w-8 h-8 text-black" />}
            />
            <StatusItem
              title="Acabamentos"
              percentage={67}
              icon={<PaintRoller className="w-8 h-8 text-black" />}
            />
          </div>
        </div>
      </section>

      {/* Galeria de Imagens - Plantas Disponíveis */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-8 text-black text-center">
            Plantas Disponíveis
          </h2>
          <Carousel className="w-full h-full flex items-center justify-center">
            <CarouselContent className="w-full h-full">
              {gallery.map((item) => (
                <CarouselItem
                  key={item.index}
                  className="flex justify-center items-center w-full h-full my-auto mx-auto"
                >
                  <Image
                    src={item.image}
                    alt={`Imagem ${item.index}`}
                    layout="intrinsic"
                    width={800}
                    height={600}
                    className="object-contain max-w-[90vw] max-h-[80vh]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black border-black" />
            <CarouselNext className="text-black border-black" />
          </Carousel>
        </div>
      </section>

      {/* 7. Sobre o Bairro */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col items-center py-10 gap-8">
            <h1 className="text-3xl font-medium text-center text-primary-100 mb-6">
              JARDIM TAVARES
            </h1>
            <div className=" mb-12 md:mb-0 md:px-10 text-justify">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                O bairro Jardim Tavares nasceu em 1957 quando foi lançado o
                loteamento do mesmo nome, com a proposta de alcançar o público
                que queria morar numa área nobre de Campina, hoje comprovado com
                os casarões e a vizinhaça que lá existe.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                O Jardim Tavares está localizado em um dos pontos mais altos da
                cidade, privilegiando a vista e o clima mais frio de serra. É
                comum na época de inverno não enxergar o alto dos prédios por
                conta da névoa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A atmosfera, tranquila e bucólica, gerada pelas frondosas
                árvores e seus nobres moradores, os passarinhos, faz do bairro
                um dos mais charmosos e desejados para quem espera viver com
                tranquilidade e segurança.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed md:mb-4">
                Sua proximidade do centro da cidade, menos de 2 minutos de
                carro, e a presença do polo gastronômico em seu entorno, trás
                aos moradores do bairro praticidade e comodidade, para uma vida
                cada vez mais agitada.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-full overflow-hidden">
            <div className="absolute inset-0 carousel">
              <Image
                src={jardimTavares}
                alt="Imagem do empreendimento 1"
                fill
                className="object-cover carousel-item"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vídeo jardim tavares */}
      <section className="relative w-full flex justify-center items-center py-20 md:mt-16 mb-16">
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

        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setIsVideoOpen(false)}
          >
            <YouTube videoId="WDgdfrErd5A" opts={opts} />
          </div>
        )}
      </section>

      {/* 8. Explore a Região */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-8 text-center text-black">
            Explore a Região
          </h2>
          <MapSection />
        </div>
      </section>

      {/* 9. Chamada para Ação */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-6 text-black">
            Pronto para fazer parte deste projeto?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Não perca a oportunidade de investir em um empreendimento único, com
            localização privilegiada e acabamento de alto padrão.
          </p>
          <Link
            href={`https://wa.me/5583991032141?text=${encodeURIComponent(
              `Olá, gostaria de mais informações sobre o UNI 501`
            )}`}
            target="_blank"
            className="inline-block bg-black text-white py-3 px-6 hover:bg-gray-700 transition"
          >
            Comprar
          </Link>
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
    <div className="flex flex-row items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[480px] transition-transform hover:scale-105 gap-4">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-black mb-2">{title}</h3>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{percentage}%</p>
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
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[180px] transition-transform hover:scale-105">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-black mb-2">{title}</h3>
    </div>
  );
}

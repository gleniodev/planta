"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  Waves,
  Building,
  Columns,
  Dumbbell,
  Utensils,
  Flower2,
  Blocks,
  Headphones,
  BrickWall,
  Pickaxe,
  Bath,
  PaintRoller,
  Dog,
} from "lucide-react";
import MapSection from "@/components/ui/map-section";
import ImageGallery from "@/components/ui/image-gallery";
import iconPlay from "@/assets/icon-play.svg";
import heroImage from "@/assets/noz-fachada-2.webp";
import fachadaNoz from "@/assets/noz-fachada-3.webp";
import catole from "@/assets/catole.webp";
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
import MapSectionNoz from "@/components/ui/map-section-noz";

const gallery = [
  {
    image: "/assets/noz-ap-27.webp",
    index: 2,
    subtitle: "Planta do Loft 04",
  },
  {
    image: "/assets/noz-ap-28.webp",
    index: 3,
    subtitle: "Planta do Loft 05",
  },
  {
    image: "/assets/noz-ap-25.webp",
    index: 1,
    subtitle: "Planta do Loft 07",
  },
  {
    image: "/assets/noz-ap-29.webp",
    index: 4,
    subtitle: "Planta do Loft 09",
  },
  {
    image: "/assets/noz-ap-57.webp",
    index: 5,
    subtitle: "Planta Final 01",
  },
  {
    image: "/assets/noz-ap-56.webp",
    index: 5,
    subtitle: "Planta Final 02",
  },
  {
    image: "/assets/noz-ap-60.webp",
    index: 5,
    subtitle: "Planta Final 10",
  },
];

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoOpenJardimTavares, setIsVideoOpenJardimTavares] =
    useState(false);
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
                NÓZ
              </h1>

              <div className="space-y-6">
                <div className="border-2 border-gray-200 p-6 lg:p-8 ">
                  <h2 className="text-base sm:text-lg text-primary-100 font-medium leading-relaxed">
                    Nasceu da pluralidade do público que o inspira e da
                    segurança e aconchego pensado para abraçá-lo.
                  </h2>
                </div>

                <div className="border-2 border-gray-200 p-6 lg:p-8  space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Um projeto charmoso que veio conversar com o agitado bairro
                    do Catolé. Pensado para um público jovem e dinâmico, que
                    gosta de curtir a essência de um bairro vibrante e cheio de
                    vida.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    Em construção – Rua Aluísio Cunha Lima N°535 Arquitetura –
                    Yane Barreto Arquitetura
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
              // onClick={() => setIsVideoOpen(true)}
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
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            // onClick={() => setIsVideoOpen(false)}
          >
            <div className="w-full max-w-4xl">
              <YouTube videoId="WDgdfrErd5A" opts={opts} />
            </div>
          </div>
        )}
      </section>

      {/* 3. O Projeto */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-medium text-center lg:text-left text-primary-100">
                ‘’Arquitetura que acolhe respira e se conecta’’
              </h2>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  Localizado em um dos bairros mais nobres da cidade: o CATOLÉ!
                  Uma Das regiões mais queridas e completas de Campina Grande. O
                  Catolé é sinônimo de conforto, legado e movimento. Com toda
                  sua história, tradição e a essência de ser DIVERSO. Com lares,
                  famílias, feiras, shoppings, lojas, escolas, igrejas,
                  fámacias, o Parque da Criança e um crescimento exponencial do
                  mercado imobiliário.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  A arquitetura do NÓZ nasce do olhar sensível de quem entende
                  que morar é mais do que ocupar um espaço — é viver com
                  presença, conforto e beleza. Cada linha, cada escolha de cor,
                  cada detalhe da fachada foi pensado para criar um
                  empreendimento que conversa com a cidade e acolhe quem passa,
                  quem mora, quem visita.
                </p>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-full  overflow-hidden">
              <Image
                src={fachadaNoz}
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
                  para o NÓZ a pluralidade e a versatilidade que a arquiteta
                  Yanne Barreto imprimiu em cada detalhe, para fazer do NÓZ um
                  endereço de desejo.
                </h3>
              </div>

              <div className="order-1 lg:order-2 space-y-4 max-h-80 lg:max-h-96 overflow-y-auto pr-2 text-justify">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Com formas limpas, tons suaves e materiais naturais, o NÓZ
                  traduz a leveza da vida contemporânea. O concreto se equilibra
                  com a vegetação, a luz natural percorre os ambientes, e os
                  espaços internos se integram de forma fluida — permitindo
                  múltiplas formas de habitar.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  No térreo, a arquitetura se abre para a cidade. Áreas
                  compartilhadas, lounges aconchegantes, espaços ao ar livre —
                  tudo foi desenhado para favorecer o encontro, a gentileza
                  urbana, e o contato com a natureza presente no bairro do
                  Catolé.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  O NÓZ não impõe. Ele pertence. É um projeto que respeita o
                  tempo, o lugar e as pessoas. E é por isso que, ao olhar para
                  ele, sentimos: aqui a vida faz sentido.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed before:content-['“'] italic !mt-12">
                  Viver e sentir a vida: esse é sempre o meu ponto de partida ao
                  iniciar um novo projeto.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                  Meu primeiro olhar é sempre voltado para as pessoas — para
                  entender, com cuidado e sensibilidade, suas necessidades no
                  dia a dia. Foi com esse propósito que nasceu o NÓZ: pensado
                  para oferecer, com plenitude, o melhor contexto de vida aos
                  seus usuários.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed after:content-['”'] italic">
                  A versatilidade de viver no bairro Catolé me encanta. A
                  praticidade, a segurança e a possibilidade de uma vivência
                  mais presente foram as maiores inspirações na concepção deste
                  projeto. O <strong>NÓZ</strong> foi idealizado como um
                  empreendimento completo, com espaços compartilhados que
                  acolhem e dão suporte real ao cotidiano. São áreas ao ar livre
                  para contemplação, lounges aconchegantes de convivência e
                  ambientes que favorecem a gentileza urbana — tudo em harmonia
                  com a atmosfera verde e viva que o Catolé nos oferece.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed !mb-12">
                  (Yane Barreto Arquiteta)
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  O <strong>NÓZ</strong> é, em cada detalhe, feito para servir
                  bem a quem vive ali.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Ser <strong>NÓZ</strong> e viver no Catolé é, sem dúvida, uma
                  escolha que faz sentido.
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <h4 className="text-lg sm:text-xl lg:text-3xl text-primary-100 font-medium leading-relaxed text-center ">
                São 45 apartamentos e 45 Lofts com plantas que variam de 26m² a
                60m².
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
                Para atender a um bairro tão dinâmico e a um público tão plural
                o NÓZ trás diferenciais que marcam.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <DiferencialItem
                title="Piscina na cobertura"
                icon={<Waves className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <DiferencialItem
                title="Academia com vista panorâmica"
                icon={<Dumbbell className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <DiferencialItem
                title="Espaço Gourmet View"
                icon={<Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <DiferencialItem
                title="Coworking"
                icon={
                  <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                }
              />
              <DiferencialItem
                title="Petplace"
                icon={<Dog className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <DiferencialItem
                title="Integração de espaços"
                icon={<Blocks className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
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
          <ImageGallery variant={"noz"} />
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
              <StatusItem percentage={2} title={""} icon={undefined} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              <StatusItem
                title="Preparação do Terreno"
                percentage={42}
                icon={<Pickaxe className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <StatusItem
                title="Estrutura"
                percentage={0}
                icon={<Building className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <StatusItem
                title="Esquadrias"
                percentage={0}
                icon={<Columns className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <StatusItem
                title="Alvenaria"
                percentage={0}
                icon={
                  <BrickWall className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                }
              />
              <StatusItem
                title="Instalações"
                percentage={0}
                icon={<Bath className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              />
              <StatusItem
                title="Acabamentos"
                percentage={0}
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

      {/* 8. Catolé */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-medium text-center lg:text-left text-primary-100">
                CATOLÉ
              </h2>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  <strong>
                    Catolé — Um bairro que carrega história e constrói o futuro
                  </strong>
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  O Catolé tem <strong>raízes</strong> profundas na história de
                  Campina Grande. Seu nome vem do antigo Riacho Catolé, que
                  cortava a região e deu origem a uma pequena comunidade — que,
                  ao longo do tempo, cresceu e se tornou um dos bairros mais
                  emblemáticos da cidade.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  Nascido como uma área de chácaras e terrenos amplos, o Catolé
                  carregava a tranquilidade de um bairro em formação, rodeado
                  pela <strong>natureza</strong> e pelo silêncio das margens.
                  Com o crescimento urbano da cidade, foi se transformando,
                  ganhando movimento e estrutura — mas sem jamais perder sua
                  identidade <strong>autêntica</strong>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  Hoje, o Catolé é reconhecido por sua{" "}
                  <strong>diversidade</strong>, sua{" "}
                  <strong>energia urbana</strong> e seu forte senso de
                  pertencimento. Um bairro que pulsa <strong>vida</strong>, as
                  ruas se movimentam, e ao mesmo tempo, há espaços de
                  acolhimento, vizinhança e vida cotidiana. Um lugar onde a
                  tradição se mistura com o contemporâneo — e onde viver faz
                  sentido.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  O NÓZ nasce nesse cenário, como uma resposta arquitetônica ao
                  que o Catolé representa:
                  <strong> história, convivência e transformação</strong>. Um
                  projeto que respeita as origens e contribui para um futuro
                  ainda mais humano, integrado e inspirador.
                </p>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-full lg:w-full">
              <Image
                src={catole}
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
              // onClick={() => setIsVideoOpenJardimTavares(true)}
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
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            // onClick={() => setIsVideoOpenJardimTavares(false)}
          >
            <div className="w-full max-w-4xl">
              <YouTube videoId="4ApCDbG-VN8" opts={opts} />
            </div>
          </div>
        )}
      </section>

      {/* 10. Explore a Região */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium mb-8 lg:mb-12 text-center text-black">
            Explore a Região
          </h2>
          <MapSectionNoz />
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

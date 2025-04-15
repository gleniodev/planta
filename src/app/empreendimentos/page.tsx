import type React from "react";
import Image from "next/image";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  FileText,
  Building,
  Columns,
  Paintbrush,
  Key,
} from "lucide-react";
import MapSection from "../../components/ui/map-section";
import ImageGallery from "../../components/ui/image-gallery";
import banner from "@/assets/uni-onze.webp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh]">
        <Image
          src={banner}
          alt="Empreendimento Imobiliário"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  Um Projeto Atemporal
                </h1>
                <h2 className="text-xl md:text-2xl text-white/90 font-light">
                  Feito por quem pensa em Campina
                </h2>
              </div>
              <div className="bg-white/90 p-4 md:p-6 max-w-xs rounded-lg">
                <p className="text-gray-800 text-sm md:text-base">
                  Um empreendimento único que combina elegância, conforto e
                  localização privilegiada para proporcionar uma experiência de
                  moradia excepcional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vídeo */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer group">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Vídeo do empreendimento"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Texto + Auto Slide */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Sobre o Projeto
              </h2>
              <p className="text-gray-600 mb-4">
                Este empreendimento foi cuidadosamente planejado para oferecer o
                máximo de conforto e sofisticação. Com uma arquitetura moderna e
                atemporal, cada detalhe foi pensado para proporcionar uma
                experiência única de moradia.
              </p>
              <p className="text-gray-600 mb-4">
                Localizado em uma das áreas mais valorizadas de Campina, o
                projeto oferece fácil acesso a diversos serviços e comodidades,
                tornando-o ideal para famílias que buscam qualidade de vida e
                praticidade.
              </p>
              <p className="text-gray-600">
                Os apartamentos contam com acabamento de alto padrão, amplas
                áreas de lazer e segurança 24 horas, garantindo tranquilidade e
                bem-estar para todos os moradores.
              </p>
            </div>
            <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 carousel">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Imagem do empreendimento 1"
                  fill
                  className="object-cover carousel-item"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Galeria de Imagens */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Galeria de Imagens
          </h2>
          <ImageGallery />
        </div>
      </section>

      {/* 5. Status da Obra */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Status da Obra
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <StatusItem
              title="Projeto básico"
              percentage={100}
              icon={<FileText className="w-8 h-8 text-gray-800" />}
            />
            <StatusItem
              title="Fundação"
              percentage={50}
              icon={<Building className="w-8 h-8 text-gray-800" />}
            />
            <StatusItem
              title="Estrutura"
              percentage={10}
              icon={<Columns className="w-8 h-8 text-gray-800" />}
            />
            <StatusItem
              title="Acabamento"
              percentage={0}
              icon={<Paintbrush className="w-8 h-8 text-gray-800" />}
            />
            <StatusItem
              title="Entrega"
              percentage={0}
              icon={<Key className="w-8 h-8 text-gray-800" />}
            />
          </div>
        </div>
      </section>

      {/* 6. Plantas Disponíveis */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Plantas Disponíveis
          </h2>
          <div className="relative">
            <div className="flex overflow-x-hidden">
              <div className="min-w-full flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Planta 1"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10">
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10">
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Sobre o Bairro */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Sobre o Bairro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-4">
                O bairro onde está localizado nosso empreendimento é conhecido
                por sua excelente infraestrutura e qualidade de vida. Com áreas
                verdes, comércio local diversificado e fácil acesso às
                principais vias da cidade, oferece o equilíbrio perfeito entre
                tranquilidade e praticidade.
              </p>
              <p className="text-gray-600 mb-4">
                A região conta com escolas renomadas, supermercados, farmácias,
                academias e restaurantes a uma curta distância, permitindo que
                você tenha tudo o que precisa ao alcance das mãos.
              </p>
              <p className="text-gray-600">
                Além disso, a segurança do bairro é um diferencial,
                proporcionando tranquilidade para você e sua família desfrutarem
                de caminhadas e momentos de lazer ao ar livre.
              </p>
            </div>
            <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Imagem do bairro"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Explore a Região */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Explore a Região
          </h2>
          <MapSection />
        </div>
      </section>

      {/* 9. Chamada para Ação */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Pronto para fazer parte deste projeto?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Não perca a oportunidade de investir em um empreendimento único, com
            localização privilegiada e acabamento de alto padrão.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Comprar
          </button>
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
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-[180px] transition-transform hover:scale-105">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-800 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{percentage}%</p>
    </div>
  );
}

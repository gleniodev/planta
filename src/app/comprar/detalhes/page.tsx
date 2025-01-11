"use client";

import { useProperty } from "@/context/PropertyContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Images } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Correção: Usando os componentes corretos do shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Carrossel do shadcn

export default function Detalhes() {
  const { selectedProperty } = useProperty();
  const [showGallery, setShowGallery] = useState(false);

  if (!selectedProperty) {
    return <p>Imóvel não encontrado.</p>;
  }

  const openGallery = () => setShowGallery(true);
  const closeGallery = () => setShowGallery(false);

  return (
    <section className="container mx-auto px-4 py-32 flex flex-col items-center justify-center md:justify-start md:items-start md:flex-row gap-10 text-black lg:h-screen md:px-14">
      {/* Informação do Imóvel */}
      <div className="flex-1 space-y-6 w-full md:w-1/2">
        <h1 className="text-3xl font-semibold">{selectedProperty.title}</h1>
        <p className="text-lg text-gray-700">
          {selectedProperty.building}, {selectedProperty.neighborhood}
        </p>
        <p className="text-lg text-gray-700">{selectedProperty.description}</p>
        <Link
          href={`https://wa.me/5583991032141?text=${encodeURIComponent(
            `Olá, gostaria de mais informações sobre o ${selectedProperty.title}, ${selectedProperty.building}`
          )}`}
          target="_blank"
          className="inline-block bg-black text-white py-3 px-6 hover:bg-gray-700 transition"
        >
          Comprar
        </Link>
      </div>

      {/* Imagem do Imóvel */}
      <div className="flex flex-col flex-1 relative w-1/2 items-center">
        <Image
          src={selectedProperty.image}
          alt={selectedProperty.title}
          width={500}
          height={500}
          className="w-full rounded-lg max-w-sm"
        />

        <Dialog open={showGallery} onOpenChange={setShowGallery}>
          <DialogTrigger asChild>
            <div className="flex flex-col items-center">
              <button
                onClick={openGallery}
                className="mt-4 text-black py-2 px-4 rounded-lg hover:text-gray-700 transition flex gap-2"
              >
                Abrir Galeria <Images />
              </button>
              <h3 className="text-xs text-black mt-4">
                *Imagens meramente ilustrativas
              </h3>
            </div>
          </DialogTrigger>

          <DialogContent
            className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-[90vw] max-w-screen-lg h-[90vh] bg-white rounded-lg shadow-lg flex flex-col"
          >
            {/* Botão de Fechar Melhorado */}
            <button
              onClick={closeGallery}
              className="absolute top-3 right-3 bg-black p-3 text-white rounded-full hover:bg-gray-700 transition"
              aria-label="Fechar"
            ></button>

            {/* Carousel Responsivo */}
            <div className="flex-1 flex items-center justify-center p-12 w-full h-full relative">
              <h3 className="text-[10px] mb-4 text-black absolute left-4 bottom-0">
                *Imagens meramente ilustrativas
              </h3>
              <Carousel className="w-full h-full flex items-center justify-center">
                <CarouselContent className="w-full h-full  ">
                  {selectedProperty.gallery.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="flex justify-center items-center w-full h-full my-auto mx-auto "
                    >
                      <Image
                        src={image}
                        alt={`Imagem ${index + 1}`}
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
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

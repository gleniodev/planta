// src/app/comprar/detalhes/page.tsx

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
import { Carousel } from "@/components/ui/carousel"; // Carrossel do shadcn

export default function Detalhes() {
  const { selectedProperty } = useProperty();
  const [showGallery, setShowGallery] = useState(false);

  if (!selectedProperty) {
    return <p>Imóvel não encontrado.</p>;
  }

  const openGallery = () => setShowGallery(true);
  const closeGallery = () => setShowGallery(false);

  return (
    <section className="container mx-auto px-4 py-32 flex flex-col lg:flex-row gap-10 text-black lg:h-screen">
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
            <button
              onClick={openGallery}
              className="mt-4 text-black py-2 px-4 rounded-lg hover:text-gray-700 transition flex gap-2"
            >
              Abrir Galeria <Images />
            </button>
          </DialogTrigger>

          <DialogContent className="w-full md:w-full md:h-[90vh] mx-auto p-4 bg-white rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle>Galeria de Imagens</DialogTitle>
              <DialogDescription>
                Navegue pelas imagens do imóvel.
              </DialogDescription>
            </DialogHeader>

            <Carousel className="w-full max-h-[75vh]">
              {selectedProperty.gallery.map((image, index) => (
                <div key={index} className="carousel-item flex justify-center">
                  <Image
                    src={image}
                    alt={`Imagem ${index + 1}`}
                    width={800}
                    height={600}
                    className="object-contain w-[50%]"
                  />
                </div>
              ))}
            </Carousel>

            <button
              onClick={closeGallery}
              className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full"
            >
              X
            </button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

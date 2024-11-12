// src/app/comprar/detalhes/page.tsx

"use client";

import { useProperty } from "@/context/PropertyContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Detalhes() {
  const { selectedProperty } = useProperty();
  const [showGallery, setShowGallery] = useState(false);

  if (!selectedProperty) {
    return <p>Imóvel não encontrado.</p>;
  }

  const openGallery = () => setShowGallery(true);
  const closeGallery = () => setShowGallery(false);

  return (
    <section className="container mx-auto px-4 py-32 flex flex-col lg:flex-row gap-10 text-black">
      {/* Informação do Imóvel */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl font-semibold">{selectedProperty.title}</h1>
        <p className="text-lg text-gray-700">
          {selectedProperty.building}, {selectedProperty.neighborhood}
        </p>
        <Link
          href={`https://wa.me/5583991032141?text=${encodeURIComponent(
            `Olá, gostaria de mais informações sobre o ${selectedProperty.title}`
          )}`}
          target="_blank"
          className="inline-block bg-black text-white py-3 px-6 hover:bg-gray-700 transition"
        >
          Comprar
        </Link>
      </div>

      {/* Imagem do Imóvel */}
      <div className="flex-1 relative w-[60%]">
        <Image
          src={selectedProperty.image}
          alt={selectedProperty.title}
          width={500}
          height={500}
          className="w-[60%]"
        />
        <button
          onClick={openGallery}
          className="mt-4 text-black py-2 px-4 rounded-lg hover:text-gray-700 transition"
        >
          Abrir Galeria
        </button>
      </div>

      {/* Modal de Galeria */}
      {showGallery && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full max-w-3xl p-4 bg-white rounded-lg shadow-lg">
            <button
              onClick={closeGallery}
              className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full"
            >
              X
            </button>
            <Swiper spaceBetween={10} slidesPerView={1}>
              <SwiperSlide>
                <Image
                  src={selectedProperty.image}
                  alt="Imagem 1"
                  width={800}
                  height={600}
                />
              </SwiperSlide>
              {/* Adicione mais SwiperSlides com imagens, conforme necessário */}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Tipo das imagens
interface GalleryImage {
  src: string;
  alt: string;
}

// Tipo restrito para variant
type Variant = "uni" | "noz";

// Props do componente
interface ImageGalleryProps {
  variant: Variant;
}

export default function ImageGallery({ variant }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Dados das imagens da Uni
  const uniImages: GalleryImage[] = [
    { src: "/assets/uni-academia.webp", alt: "Galeria 1" },
    { src: "/assets/uni-bike.webp", alt: "Galeria 2" },
    { src: "/assets/uni-coworking.webp", alt: "Galeria 3" },
    { src: "/assets/uni-lobby.webp", alt: "Galeria 4" },
    { src: "/assets/uni-snackbar.webp", alt: "Galeria 5" },
    { src: "/assets/uni-churrasqueira.webp", alt: "Galeria 6" },
    { src: "/assets/uni-gourmet.webp", alt: "Galeria 7" },
    { src: "/assets/uni-citytoy.webp", alt: "Galeria 8" },
    { src: "/assets/uni-piscina-privativa.webp", alt: "Galeria 9" },
    { src: "/assets/uni-redario.webp", alt: "Galeria 10" },
    { src: "/assets/uni-pet.webp", alt: "Galeria 11" },
    { src: "/assets/uni-piscina.webp", alt: "Galeria 12" },
  ];

  // Dados das imagens da Noz
  const nozImages: GalleryImage[] = [
    { src: "/assets/noz-academia.webp", alt: "Galeria 1" },
    { src: "/assets/noz-delivery.webp", alt: "Galeria 2" },
    { src: "/assets/noz-coworking.webp", alt: "Galeria 3" },
    { src: "/assets/noz-lobby.webp", alt: "Galeria 4" },
    { src: "/assets/noz-pet.webp", alt: "Galeria 5" },
    { src: "/assets/noz-piscina.webp", alt: "Galeria 6" },
    { src: "/assets/noz-lavanderia.webp", alt: "Galeria 7" },
    { src: "/assets/noz-ap-1.webp", alt: "Galeria 8" },
    { src: "/assets/noz-espaco-kids.webp", alt: "Galeria 9" },
    { src: "/assets/noz-sala-ap.webp", alt: "Galeria 10" },
    { src: "/assets/noz-suite.webp", alt: "Galeria 11" },
    { src: "/assets/noz-ap.webp", alt: "Galeria 12" },
  ];

  // Lookup de variants
  const galleryMapping: Record<Variant, GalleryImage[]> = {
    uni: uniImages,
    noz: nozImages,
  };

  // Seleciona a lista com fallback seguro
  const galleryImages = galleryMapping[variant] ?? [];

  // Abrir modal
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  // Fechar modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Grid de imagens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative rounded-lg overflow-hidden cursor-pointer shadow-sm border border-gray-100"
            onClick={() => openModal(image)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Dados das imagens da galeria
  const galleryImages: GalleryImage[] = [
    { src: "/placeholder.svg?height=500&width=500", alt: "Galeria 1" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Galeria 2" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Galeria 3" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Galeria 4" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Galeria 5" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Galeria 6" },
  ]

  // Função para abrir o modal com a imagem selecionada
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    // Impedir o scroll da página quando o modal está aberto
    document.body.style.overflow = "hidden"
  }

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedImage(null)
    // Restaurar o scroll da página
    document.body.style.overflow = "auto"
  }

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

      {/* Modal para visualização ampliada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Evita que o clique na imagem feche o modal
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
  )
}


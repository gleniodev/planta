// Supondo que este é um componente em seu projeto Next.js.

import Image from "next/image";
import React from "react";
import post1 from "@/assets/post-insta-1.png";
import post2 from "@/assets/post-insta-2.png";
import post3 from "@/assets/post-insta-3.png";
import post4 from "@/assets/post-insta-4.png";

const InstagramSection = () => {
  const posts = [
    {
      href: "https://www.instagram.com/p/DBgd3DGxArB/", // Link da postagem no Instagram
      imgSrc: "/assets/post-insta-1.png", // Caminho para a imagem local ou URL
      alt: "Descrição da imagem 1",
      text: "Seu Condomínio Vertical com Cara de Lar",
    },
    {
      href: "https://www.instagram.com/p/DBgd2JuRsFU/", // Link da postagem no Instagram
      imgSrc: "/assets/post-insta-2.png", // Caminho para a imagem local ou URL
      alt: "Descrição da imagem 1",
      text: "Seu Condomínio Vertical com Cara de Lar",
    },
    {
      href: "https://www.instagram.com/p/DBgd2F_RaqE/", // Link da postagem no Instagram
      imgSrc: "/assets/post-insta-3.png", // Caminho para a imagem local ou URL
      alt: "Descrição da imagem 1",
      text: "Seu Condomínio Vertical com Cara de Lar",
    },
    {
      href: "https://www.instagram.com/p/DE0coVhP2v_/", // Link da postagem no Instagram
      imgSrc: "/assets/post-insta-4.png", // Caminho para a imagem local ou URL
      alt: "Descrição da imagem 1",
      text: "Seu Condomínio Vertical com Cara de Lar",
    },
    // ... Outros posts
  ];

  return (
    <div className=" w-full flex flex-col flex-wrap items-center bg-white text-primary-100 py-8 p-10">
      {/* Título da seção */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-medium text-center text-primary-100 mb-6">
          @plantaevoce
        </h2>

        {/* Divisória */}
        <div className="w-full h-[1px] bg-gray-300 mx-auto mb-14"></div>
      </div>

      <div className="flex justify-center items-center gap-4 md:w-2/3">
        {posts.map((post, index) => (
          <a
            href={post.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
          >
            <Image
              src={post.imgSrc}
              alt={post.alt}
              width={200} // Ajuste para a largura real da sua imagem
              height={200} // Ajuste para a altura real da sua imagem
              layout="responsive"
              className="filter grayscale hover:grayscale-0 transition-opacity duration-300"
            />
            {/* <p className="absolute bottom-0 left-0 bg-whitw bg-opacity-50 w-full text-center py-2">{post.text}</p> */}
          </a>
        ))}
      </div>

      {/* Indicadores de slide - não interativos, apenas estilísticos */}
      <div className="flex justify-center space-x-2 mt-4">
        <span className="block w-2 h-2 bg-white rounded-full"></span>
        <span className="block w-2 h-2 bg-white rounded-full"></span>
        <span className="block w-2 h-2 bg-white rounded-full"></span>
        {/* ... */}
      </div>
    </div>
  );
};

export default InstagramSection;

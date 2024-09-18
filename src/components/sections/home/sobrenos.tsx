// // components/SobreNos.tsx

// import Image from "next/image";
// import React from "react";

// import ImgQuemSomoas from "@/assets/Quem Somos.png";

// const SobreNos = () => {
//   return (
//     <section className="flex flex-col justify-center items-center  text-gray-800 py-12 px-4 w-full min-w-[1200px]">
//       <div className="min-w-[1200px] flex flex-col justify-center items-center gap-12">
//         {/* Título da seção */}
//         <div className="w-full text-center">
//           <h2 className="text-3xl font-medium text-center text-primary-100 mb-6">
//             A PLANTA
//           </h2>

//           {/* Divisória */}
//           <div className="w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>
//         </div>

//         {/* Texto da seção */}
//         <blockquote className="text-center text-2xl italic mb-2 w-[700px]">
//           “Na essência de cada projeto, buscamos não apenas ocupar um espaço,
//           mas enriquecê-lo, com harmonia e respeito pelo ambiente que nos
//           acolhe.”
//         </blockquote>

//         {/* Botão */}
//         {/* <div className="text-center w-[240px]">
//           <button className="w-full bg-transparent border border-gray-300 text-gray-800 px-4 py-2  hover:bg-gray-300 transition duration-300">
//             Saiba mais
//           </button>
//         </div> */}
//       </div>

//       <div className="w-full py-20">
//         {/* Utilize um ícone ou insira uma imagem com o componente Image do Next.js */}
//         <Image
//           src={ImgQuemSomoas} // Substitua pelo caminho correto do ícone
//           alt="Ícone de seta"
//           className="w-full"
//         />
//       </div>
//     </section>
//   );
// };

// export default SobreNos;

// components/SobreNos.tsx

// components/SobreNos.tsx

// components/SobreNos.tsx
// components/SobreNos.tsx

// components/SobreNos.tsx

import Image from "next/image";
import React from "react";

// Importe o ícone de play, as aspas e a imagem do fundo
import iconPlay from "@/assets/icon-play.svg";
import aspasUp from "@/assets/aspas-up.png";
import aspasDown from "@/assets/aspas-down.png";
import ImgQuemSomos from "@/assets/Quem Somos.png";
import Link from "next/link";

const SobreNos = () => {
  return (
    <section className="flex flex-col justify-center items-center text-gray-800 py-12 px-4 w-full">
      <div className="max-w-6xl w-full flex flex-col justify-center items-center gap-12 px-4">
        {/* Título da seção */}
        <div className="w-full text-center">
          <h2 className="text-3xl font-medium text-center text-primary-100 mb-6">
            A PLANTA
          </h2>

          {/* Divisória */}
          <div className="w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>
        </div>

        {/* Texto da seção com aspas */}
        <div className="relative text-center w-full flex flex-col items-center">
          {/* Aspas superiores
          <div className="absolute left-4 top-[-40px] w-8 h-8 md:w-12 md:h-12">
            <Image
              src={aspasUp}
              alt="Aspas superiores"
              layout="responsive"
              width={48}
              height={48}
            />
          </div> */}
          <blockquote className="text-justify w-[65%] text-lg md:text-xl italic mb-6 md:w-[40%]">
            Na essência de cada projeto, buscamos não apenas ocupar um espaço,
            mas enriquecê-lo, com harmonia e respeito pelo ambiente que nos
            acolhe.
          </blockquote>
          {/* Aspas inferiores
          <div className="absolute right-4 bottom-[-40px] w-8 h-8 md:w-12 md:h-12">
            <Image
              src={aspasDown}
              alt="Aspas inferiores"
              layout="responsive"
              width={48}
              height={48}
            />
          </div> */}
        </div>

        {/* Botão Saiba mais */}
        <div className="text-center mb-10">
          <Link href="/aplanta">
            <button className="border border-gray-500 px-6 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">
              Saiba mais
            </button>
          </Link>
        </div>
      </div>

      {/* Seção de Vídeo */}
      <div className="relative w-full flex justify-center items-center py-20">
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
          <button className="flex justify-center items-center">
            <Image
              src={iconPlay}
              alt="Play"
              width={50} // Tamanho do ícone ajustável
              height={50}
              className="transition-transform duration-300 ease-in-out hover:scale-110" // Aumenta 10% no hover
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;

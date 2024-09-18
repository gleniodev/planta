// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";
// import post1Img from "@/dataBlog/images/mobilidade-urbana.png";
// import post2Img from "@/dataBlog/images/energia-renovavel.png";

// const slides = [
//   [
//     {
//       title: "Desafios da Mobilidade Urbana",
//       description:
//         "A mobilidade urbana é um dos maiores desafios enfrentados pelas grandes cidades contemporâneas. Com o crescimento populacional acelerado e o aumento da frota de veículos, os centros urbanos estão cada vez mais congestionados, causando problemas de trânsito, poluição e, consequentemente, queda na qualidade de vida. Em resposta a esses desafios, a engenharia tem desempenhado um papel fundamental ao desenvolver soluções inovadoras que visam não apenas melhorar o fluxo de transporte, mas também transformar as cidades em espaços mais sustentáveis e conectados.",
//       image: "/assets/blog-post-2.png",
//     },
//     {
//       title: "Inovações em Energia Renovável",
//       description:
//         "O setor de energia está passando por uma transformação profunda e irreversível, impulsionada pela urgência de combater as mudanças climáticas e garantir um futuro sustentável. Nesse contexto, a energia renovável, proveniente de fontes como o sol, o vento, a água e a biomassa, tem ganhado destaque como uma solução viável e cada vez mais competitiva. A engenharia tem desempenhado um papel central nessa revolução energética, desenvolvendo tecnologias inovadoras que permitem a geração, armazenamento e distribuição de energia de maneira mais eficiente, econômica e ambientalmente responsável.",
//       image: "/assets/blog-post-1.png",
//     },
//   ],
// ];

// export function BlogSection() {
//   return (
//     <section className="bg-white py-10 max-h-vh">
//       <div className="container mx-auto px-4 relative   min-h-full flex flex-col ">
//         <span className="font-extrabold text-gray-100 text-[500px] absolute bottom-0 left-0 leading-none ">
//           22
//         </span>
//         <h2 className="text-3xl font-medium text-center text-primary-100 mb-6 ">
//           PROJETO 22
//         </h2>
//         {/* Divisória */}
//         <div className="w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>
//         {/* Fim Divisória */}
//         <div className="p-6 flex-1 h-[500px]">
//           <Swiper
//             modules={[Pagination, Navigation]}
//             spaceBetween={30}
//             pagination={{ clickable: true }}
//             navigation={true}
//             className=""
//           >
//             {slides.map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex justify-between px-14 mb-10 ">
//                   {slide.map((post, idx) => (
//                     <div key={idx} className=" flex w-1/2 ">
//                       {idx % 2 === 0 ? (
//                         // Post esquerdo
//                         <div className="flex w-full gap-4">
//                           <div className="p-2 flex flex-col justify-start gap-6 w-1/2 max-h-[440px] overflow-hidden ">
//                             <p className="text-3xl font-semibold mb-2 text-black">
//                               {post.title}
//                             </p>
//                             <p className="text-gray-700 mb-4  relative whitespace-normal text-ellipsis line-clamp-6">
//                               {post.description}
//                             </p>
//                             {/* <div className="bg-gradient-fade h-1/4 w-full absolute bottom-0"></div> */}
//                           </div>
//                           <div className="p-2 w-1/2">
//                             <Image
//                               src={post.image}
//                               alt="Post image"
//                               width={308}
//                               height={432}
//                               className="w-full h-auto"
//                             />
//                           </div>
//                         </div>
//                       ) : (
//                         // Post direito
//                         <div className="flex w-full gap-4 mt-20">
//                           <div className="p-2 w-1/2">
//                             <Image
//                               src={post.image}
//                               alt="Post image"
//                               width={308}
//                               height={432}
//                               className="w-full h-auto"
//                             />
//                           </div>
//                           <div className="p-2 flex flex-col justify-start gap-6 w-1/2 max-h-[440px] overflow-hidden ">
//                             <p className="text-3xl font-semibold mb-2 text-black">
//                               {post.title}
//                             </p>
//                             <p className="text-gray-700 mb-4  relative whitespace-normal text-ellipsis line-clamp-6">
//                               {post.description}
//                             </p>
//                             <div className="bg-gradient-fade h-1/4 w-full absolute bottom-0"></div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const slides = [
  [
    {
      title: "Desafios da Mobilidade Urbana",
      description:
        "A mobilidade urbana é um dos maiores desafios enfrentados pelas grandes cidades contemporâneas. Com o crescimento populacional acelerado e o aumento da frota de veículos, os centros urbanos estão cada vez mais congestionados, causando problemas de trânsito, poluição e, consequentemente, queda na qualidade de vida. Em resposta a esses desafios, a engenharia tem desempenhado um papel fundamental ao desenvolver soluções inovadoras que visam não apenas melhorar o fluxo de transporte, mas também transformar as cidades em espaços mais sustentáveis e conectados.",
      image: "/assets/blog-post-2.png",
    },
    {
      title: "Inovações em Energia Renovável",
      description:
        "O setor de energia está passando por uma transformação profunda e irreversível, impulsionada pela urgência de combater as mudanças climáticas e garantir um futuro sustentável. Nesse contexto, a energia renovável, proveniente de fontes como o sol, o vento, a água e a biomassa, tem ganhado destaque como uma solução viável e cada vez mais competitiva. A engenharia tem desempenhado um papel central nessa revolução energética, desenvolvendo tecnologias inovadoras que permitem a geração, armazenamento e distribuição de energia de maneira mais eficiente, econômica e ambientalmente responsável.",
      image: "/assets/blog-post-1.png",
    },
  ],
];

export function BlogSection() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 relative min-h-full flex flex-col">
        {/* Background numérico no fundo */}
        <span className="z-10 hidden md:block font-extrabold text-black text-[300px] md:text-[500px] absolute bottom-0 left-0 leading-none opacity-10">
          22
        </span>

        {/* Título da seção */}
        <h2 className="text-2xl md:text-3xl font-medium text-center text-primary-100 mb-6">
          PROJETO 22
        </h2>

        {/* Divisória */}
        <div className="max-w-6xl w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>

        <div className="p-6 flex-1 h-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={true}
            className=""
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row justify-between px-2 md:px-14 mb-10 gap-10 md:gap-4">
                  {slide.map((post, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row w-full md:w-1/2 gap-6"
                    >
                      {/* Post esquerdo no mobile e esquerdo no desktop */}
                      {idx % 2 === 0 ? (
                        <div className="flex flex-col md:flex-row w-full gap-6">
                          {/* Texto */}
                          <div className="p-2 flex flex-col justify-start gap-4 w-full md:w-1/2 max-h-[440px]">
                            <p className="text-lg md:text-2xl font-semibold mb-2 text-black">
                              {post.title}
                            </p>
                            <p className="text-sm md:text-base text-gray-700 mb-4 relative whitespace-normal line-clamp-6">
                              {post.description}
                            </p>
                          </div>

                          {/* Imagem */}
                          <div className="p-2 w-full md:w-1/2">
                            <Image
                              src={post.image}
                              alt="Post image"
                              width={308}
                              height={432}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </div>
                      ) : (
                        // Post direito no mobile e direito no desktop
                        <div className="flex flex-col-reverse md:flex-row w-full gap-6 md:mt-20">
                          {/* Imagem */}
                          <div className="p-2 w-full md:w-1/2">
                            <Image
                              src={post.image}
                              alt="Post image"
                              width={308}
                              height={432}
                              className="w-full h-auto object-cover"
                            />
                          </div>

                          {/* Texto */}
                          <div className="p-2 flex flex-col justify-start gap-4 w-full md:w-1/2 max-h-[440px]">
                            <p className="text-lg md:text-2xl font-semibold mb-2 text-black">
                              {post.title}
                            </p>
                            <p className="text-sm md:text-base text-gray-700 mb-4 relative whitespace-normal line-clamp-6">
                              {post.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mb-10">
          <Link href="/projeto22">
            <button className="border  bg-white border-gray-500 px-6 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">
              Ir para o <span className="font-bold">P22</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

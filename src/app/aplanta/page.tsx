"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgSobre from "@/assets/bg-hero-aplanta2.png"; // Imagem da Hero
import bgHistoria from "@/assets/nossa-historia3.webp"; // Imagem para a seção História
import bgMissao from "@/assets/missao.jpg"; // Imagem para a seção Missão
import Link from "next/link";

export default function APlanta() {
  return (
    <div className="bg-white text-gray-800">
      {/* Seção Hero */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Executa apenas uma vez
        className="relative flex items-center justify-center bg-cover bg-center pb-16 pt-24"
      >
        {/*
        <section className="w-full max-w-4xl mx-auto">
           Contêiner da imagem com bordas arredondadas e altura fixa 
          <div className="relative h-[300px]">
            <Image
              src={bgSobre}
              alt="Imagem do Imóvel"
              layout="fill" // Preenche o contêiner com a imagem
              objectFit="cover" // Garante que a imagem cubra o contêiner
              className="filter grayscale "
            />
            {/* Overlay com Opacidade 
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
            Texto sobre a imagem
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="text-white text-3xl md:text-5xl font-medium text-center px-4">
                PLANTA TRANSFORMAÇÕES URBANAS
              </h1>
              <p className="text-lg mt-4 text-white">
                Transformando paisagens urbanas com projetos únicos desde 2022.
              </p>
            </div>
          </div>
        </section>*/}
        <section className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center py-10">
            <div className="md:w-2/3">
              <Image
                src={bgSobre}
                alt="Nossa História"
                layout="responsive"
                width={600}
                height={400}
                className="shadow-lg filter grayscale"
              />
            </div>
            <div className="md:w-1/2 mb-12 md:mb-0 md:px-20 text-justify">
              <h1 className="text-3xl md:text-2xl text-center text-primary-100 font-medium leading-relaxed mb-10">
                PLANTA TRANSFORMAÇÕES URBANAS
              </h1>
              <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
                Transformando paisagens urbanas com projetos únicos desde 2022.
              </p>
            </div>
          </div>
        </section>
      </motion.section>

      {/* Seção História */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="md:py-20"
      >
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-center text-primary-100 mb-6">
            Nossa História
          </h2>
          {/* Divisória */}
          <div className="w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>
          <div className="flex flex-col md:flex-row items-center py-10">
            <div className="md:w-1/2 mb-12 md:mb-0 md:px-20 text-justify">
              <h2 className="text-lg text-primary-100 font-medium leading-relaxed mb-10">
                Da Raiz à Transformação: Como Crescemos Juntos para Redefinir a
                Paisagem Urbana.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A Planta Transformações Urbanas nasceu da união de ideias entre
                a WB Empreendimentos e a CCI Engenharia, que desde 2009
                empreendem juntas, e em 2022, nasce a Planta Transformações
                Urbanas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O nome PLANTA traduz o “começo” de todo BOM projeto, além de
                trazer toda a organicidade de uma empresa pensada por pessoas e
                para pessoas. A partir da PLANTA, tudo cresce e se edifica.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={bgHistoria}
                alt="Nossa História"
                layout="responsive"
                width={600}
                height={400}
                className="shadow-lg"
              />
            </div>
          </div>
        </section>
      </motion.section>

      {/* Seção Quem Somos */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#F7F7F7] py-24"
      >
        <section className="container mx-auto px-4 text-justify">
          <h2 className="text-3xl font-medium text-primary-100 mb-6 text-center">
            Quem Somos?
          </h2>
          {/* Divisória */}
          <div className="w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed  max-w-3xl mx-auto mb-8">
            A PLANTA acredita em gente, no poder de transformação de cada um.
            Acreditamos na organicidade, a empresa como um organismo vivo,
            pulsante. Acreditamos na união, na colaboração, no entusiasmo em
            realizar, no capricho em entregar, na satisfação em atender e em ser
            atendido.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-8 max-w-3xl mx-auto mb-8">
            Acreditamos que com nosso trabalho podemos transformar a paisagem
            urbana e trazer satisfação para quem vai viver a experiência dos
            nossos produtos e para quem está envolvido nesse universo de
            transformação conosco.
          </p>
          <h2 className="text-3xl font-medium text-primary-100 mb-6 text-center">
            Missão
          </h2>
          {/* Divisória */}
          <div className="w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed  max-w-3xl mx-auto mb-8">
            Existimos para proporcionar segurança, tranquilidade, desejo e
            valor, para todos que acreditam no nosso propósito de pensar,
            executar com qualidade e entregar com felicidade, imóveis que
            transformem positivamente o urbano.
          </p>
          <h2 className="text-3xl font-medium text-primary-100 mb-6 text-center">
            Visão
          </h2>
          {/* Divisória */}
          <div className="w-full h-[1px] bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed mt-8 max-w-3xl mx-auto mb-8">
            Promover a transformação urbana, o desenvolvimento e evolução de
            pessoas e cenários, através da fabricação e entrega de imóveis, que
            superem expectativas.
          </p>
        </section>
      </motion.section>

      {/* <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-medium mb-6">Missão</h3>
              <p className="text-lg leading-relaxed">
                Existimos para proporcionar segurança, tranquilidade, desejo e
                valor, para todos que acreditam no nosso propósito de pensar,
                executar com qualidade e entregar com felicidade, imóveis que
                transformem positivamente o urbano.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-6">Visão</h3>
              <p className="text-lg leading-relaxed">
                Promover a transformação urbana, o desenvolvimento e evolução de
                pessoas e cenários, através da fabricação e entrega de imóveis,
                que superem expectativas.
              </p>
            </div>
          </div>
        </div> */}

      {/* Seção CTA Contato */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-24 flex flex-col items-center bg-white"
      >
        <div className="container mx-auto text-center flex flex-col items-center justify-start gap-2 px-10">
          <h2 className="text-2xl md:text-xl font-light mb-2">
            Quer saber mais sobre nós?
          </h2>
          <h2 className="text-2xl md:text-xl font-light mb-8">
            Marque uma visita
          </h2>

          {/* Botão Saiba mais */}
          <div className="text-center mb-10">
            <Link href="https://wa.me/5583991032141">
              <button className="border border-gray-500 px-6 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">
                contato
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

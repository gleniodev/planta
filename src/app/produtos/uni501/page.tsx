"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Imagens e vídeos (substitua pelas imagens reais do projeto)
import bannerImage from "@/assets/uni-piscina.png";
import videoImage from "@/assets/uni-piscina.png";
import slideImage1 from "@/assets/uni-piscina.png";
import slideImage2 from "@/assets/uni-piscina.png";
import bairroImage from "@/assets/uni-piscina.png";

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, // Estado inicial (hidden)
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Estado animado (visible)
};

export default function ProdutoPage() {
  return (
    <div className="w-full">
      {/* Seção de Imagem Principal */}
      <motion.div
        className="w-full h-[60vh] relative"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Image
          src={bannerImage}
          alt="Imagem do Produto"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-semibold">
          Um Projeto Atemporal
        </div>
      </motion.div>

      {/* Seção de Descrição */}
      <section className="container mx-auto my-12 px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold">Um Projeto Atemporal</h1>
          <p className="text-lg mt-4">
            Feito para quem pensa em Campina Grande. Cada detalhe é pensado para
            oferecer o melhor para você e sua família.
          </p>
        </motion.div>
      </section>

      {/* Seção de Vídeo */}
      <section className="container mx-auto mb-12 px-4">
        <motion.div
          className="relative h-[300px] overflow-hidden rounded-lg"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Image
            src={videoImage}
            alt="Vídeo do Produto"
            layout="fill"
            objectFit="cover"
            className="cursor-pointer"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold">
            ▶ Vídeo
          </div>
        </motion.div>
      </section>

      {/* Galeria de Imagens */}
      <section className="container mx-auto mb-12 px-4">
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Image
            src={slideImage1}
            alt="Slide 1"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <Image
            src={slideImage2}
            alt="Slide 2"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </motion.div>
      </section>

      {/* Seção de Status */}
      <section className="container mx-auto mb-12 px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">Status do Projeto</h2>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="text-center">
              <p>Fundação</p>
              <div className="w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center">
                100%
              </div>
            </div>
            <div className="text-center">
              <p>Estrutura</p>
              <div className="w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center">
                50%
              </div>
            </div>
            <div className="text-center">
              <p>Acabamento</p>
              <div className="w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center">
                20%
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Plantas Disponíveis */}
      <section className="container mx-auto mb-12 px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">Plantas Disponíveis</h2>
          <div className="flex justify-center space-x-4 mt-6">
            <button className="p-4 bg-gray-200 rounded-lg">{"<"}</button>
            <Image
              src={slideImage1}
              alt="Planta 1"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src={slideImage2}
              alt="Planta 2"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <button className="p-4 bg-gray-200 rounded-lg">{">"}</button>
          </div>
        </motion.div>
      </section>

      {/* Seção Bairro */}
      <section className="container mx-auto mb-12 px-4">
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">Explore o Bairro</h2>
          <div className="w-full h-[200px] mt-6">
            <Image
              src={bairroImage}
              alt="Bairro"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <p className="mt-4 text-lg">
            Lazer, educação, mobilidade e conveniência. O bairro oferece tudo o
            que você precisa.
          </p>
        </motion.div>
      </section>

      {/* Google Maps */}
      <section className="container mx-auto mb-12 px-4">
        <motion.div
          className="relative h-[300px] rounded-lg overflow-hidden"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.9143890577874!2d-122.08424968469306!3d37.42199997982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba9801ba2a81%3A0x2b2869b2d57e4a12!2sGoogleplex!5e0!3m2!1sen!2sus!4v1626415164999!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            title="Localização"
          ></iframe>
        </motion.div>
      </section>

      {/* Botão Comprar */}
      <section className="container mx-auto mb-12 px-4 text-center">
        <Link
          href="/comprar"
          className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition"
        >
          Comprar
        </Link>
      </section>
    </div>
  );
}

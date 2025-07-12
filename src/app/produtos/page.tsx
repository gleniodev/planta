"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import bgUNI from "@/assets/uni-piscina.png";
import logoUNI from "@/assets/logo-uni.png";
import logoNOZ from "@/assets/logo-noz.svg";
import bgNOZ from "@/assets/noz-ap.webp";

export default function EmpreendimentosSection() {
  return (
    <div className="w-full h-screen pt-24">
      <div className="container mx-auto space-y-8 px-4 w-[50%]">
        {/* Primeira Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group h-[40vh] overflow-hidden rounded-xl"
        >
          <Link
            href="/produtos/uni501"
            className="block h-full w-full relative"
          >
            <Image
              src={bgUNI}
              alt="Empreendimento Uni501"
              layout="fill"
              objectFit="cover"
              className="filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Camada de Gradiente Radial invertido */}
            <div
              className="absolute inset-0 transition-all duration-700 group-hover:opacity-0"
              style={{
                background:
                  "radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.7) 70%)",
              }}
            ></div>
            {/* Logo sobreposto */}
            <div className="absolute inset-0 flex justify-start items-center pl-10">
              <Image
                src={logoUNI}
                alt="Logo Uni501"
                width={150}
                height={80}
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-700 hover:shadow-sm"
              />
            </div>
          </Link>
        </motion.div>

        {/* Segunda Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group h-[40vh] overflow-hidden rounded-xl"
        >
          <Link href="/produtos/noz" className="block h-full w-full relative">
            <Image
              src={bgNOZ}
              alt="Empreendimento Noz"
              layout="fill"
              objectFit="cover"
              className="filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Camada de Gradiente Radial invertido */}
            <div
              className="absolute inset-0 transition-all duration-700 group-hover:opacity-0"
              style={{
                background:
                  "radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.7) 70%)",
              }}
            ></div>
            {/* Logo sobreposto */}
            <div className="absolute inset-0 flex justify-start items-center p-10">
              <Image
                src={logoNOZ}
                alt="Logo Noz"
                width={150}
                height={80}
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-700 hover:shadow-sm"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

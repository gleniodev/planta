"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useProperty } from "@/context/PropertyContext";

// Estrutura de dados com imóveis
const properties = [
  {
    id: 1,
    title: "Apartamento de 69m²",
    type: "Residencial",
    neighborhood: "Jardim Tavares",
    size: "69",
    building: "UNI 501",
    status: "Em Obras",
    image: "/assets/uni-ap-01.png",
  },
  {
    id: 2,
    title: "Apartamento de 110m²",
    type: "Residencial",
    neighborhood: "Jardim Tavares",
    size: "110",
    building: "UNI 501",
    status: "Em Obras",
    image: "/assets/uni-ap-02.png",
  },
  {
    id: 3,
    title: "Apartamento de 111m²",
    type: "Residencial",
    neighborhood: "Jardim Tavares",
    size: "111",
    building: "UNI 501",
    status: "Em Obras",
    image: "/assets/uni-ap-03.png",
  },
  {
    id: 4,
    title: "Apartamento de 181m²",
    type: "Residencial",
    neighborhood: "Jardim Tavares",
    size: "181",
    building: "UNI 501",
    status: "Em Obras",
    image: "/assets/uni-ap-04.png",
  },
  {
    id: 5,
    title: "Apartamento de 180m²",
    type: "Residencial",
    neighborhood: "Jardim Tavares",
    size: "180",
    building: "UNI 501",
    status: "Em Obras",
    image: "/assets/uni-ap-01.png",
  },
  {
    id: 6,
    title: "Apartamento de 57m²",
    type: "Residencial",
    neighborhood: "Catolé",
    size: "57",
    building: "NÓZ",
    status: "Lançamento",
    image: "/assets/noz-ap-57.png",
  },
  {
    id: 7,
    title: "Apartamento de 56m²",
    type: "Residencial",
    neighborhood: "Catolé",
    size: "56",
    building: "NÓZ",
    status: "Lançamento",
    image: "/assets/noz-ap-56.png",
  },
  {
    id: 8,
    title: "Apartamento de 56m² SR",
    type: "Residencial",
    neighborhood: "Catolé",
    size: "56",
    building: "NÓZ",
    status: "Lançamento",
    image: "/assets/noz-ap-56.png",
  },
  {
    id: 9,
    title: "Apartamento de 60m²",
    type: "Residencial",
    neighborhood: "Catolé",
    size: "60",
    building: "NÓZ",
    status: "Lançamento",
    image: "/assets/noz-ap-60.png",
  },
  {
    id: 10,
    title: "Loft de 25m²",
    type: "Loft",
    neighborhood: "Catolé",
    size: "25",
    building: "NÓZ",
    status: "Lançamento",
    image: "/assets/noz-ap-25.png",
  },
  {
    id: 11,
    title: "Loft de 27m²",
    type: "Loft",
    neighborhood: "Catolé",
    size: "27",
    building: "NÓZ",
    status: "Lançamento",
    image: "/assets/noz-ap-27.png",
  },
  {
    id: 12,
    title: "Loft de 28m²",
    type: "Loft",
    neighborhood: "Catolé",
    size: "28",
    building: "NÓZ",
    status: "Lançamento",
    image: "/assets/noz-ap-28.png",
  },
  {
    id: 13,
    title: "Loft de 29m²",
    type: "Loft",
    neighborhood: "Catolé",
    size: "29",
    building: "NÓZ",
    status: "Lançamento",
    image: "/assets/noz-ap-29.png",
  },

  // Adicione mais imóveis aqui conforme necessário
];

// Component da página Comprar
export default function Comprar() {
  const [filteredType, setFilteredType] = useState("Todos");
  const [filteredStatus, setFilteredStatus] = useState("Todos");
  const { setSelectedProperty } = useProperty();

  // Filtro de imóveis
  const filteredProperties = properties.filter((property) => {
    const matchesType =
      filteredType === "Todos" || property.type === filteredType;
    const matchesStatus =
      filteredStatus === "Todos" || property.status === filteredStatus;
    return matchesType && matchesStatus;
  });

  return (
    <section className="bg-white text-gray-800 mb-32">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center bg-cover bg-center py-16"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="relative h-[100px]  mt-14">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-black text-xl md:text-2xl font-medium text-center px-4 uppercase w-[40%] ">
                Uma arquitetura que impacta positivamento o urbano
              </h1>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Filtros */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Filtro de Tipo (Loft, Residencial) */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button
            className={`px-6 py-2 cursor-pointer ${
              filteredType === "Todos"
                ? "bg-gray-800 text-white"
                : "border border-gray-500 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setFilteredType("Todos")}
          >
            Todos
          </button>
          <button
            className={`px-6 py-2 cursor-pointer ${
              filteredType === "Loft"
                ? "bg-gray-800 text-white"
                : "border border-gray-500 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setFilteredType("Loft")}
          >
            Loft
          </button>
          <button
            className={`px-6 py-2 cursor-pointer ${
              filteredType === "Residencial"
                ? "bg-gray-800 text-white"
                : "border border-gray-500 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setFilteredType("Residencial")}
          >
            Residencial
          </button>
        </div>

        {/* Filtro de Status */}
        <div className="flex space-x-4">
          <select
            className="px-6 py-2 border border-gray-500 text-gray-700 hover:bg-gray-100 cursor-pointer"
            value={filteredStatus}
            onChange={(e) => setFilteredStatus(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="Lançamento">Lançamento</option>
            <option value="Em Obras">Em Obras</option>
            <option value="Entregue">Entregue</option>
          </select>
        </div>
      </div>

      {/* Cards de Propriedades */}
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              className="border overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <section
                className="flex flex-col w-340 h-340 cursor-pointer"
                onClick={() => setSelectedProperty(property)}
              >
                <Link className="w-full h-full" href={"/comprar/detalhes"}>
                  <div className="relative w-full h-full aspect-square overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{property.title}</h2>
                  <h2 className="text-gray-600 mt-4">{property.building}</h2>
                  <p className="text-gray-600">{property.neighborhood}</p>
                  <p className="text-gray-600">{property.status}</p>
                </div>
              </section>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            Nenhum empreendimento encontrado.
          </p>
        )}
      </motion.div>
    </section>
  );
}

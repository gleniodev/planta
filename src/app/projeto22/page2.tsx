"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bgHero from "@/dataBlog/images/bg-hero-p22.png";
import articles from "@/dataBlog/articles"; // Array contendo todos os artigos

export default function Projeto22() {
  const [visibleArticles, setVisibleArticles] = useState(6); // Mostrar 6 artigos inicialmente
  const [searchOpen, setSearchOpen] = useState(false);

  // Ordenar os artigos pelo ID, do maior para o menor (mais recente)
  const sortedArticles = articles.sort((a, b) => b.id - a.id);

  const latestArticle = sortedArticles[0]; // O artigo com maior ID

  // Filtrar artigos por categoria
  const [filteredArticles, setFilteredArticles] = useState(sortedArticles);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + 3); // Carregar mais 3 artigos
  };

  const filterArticlesByCategory = (category: string) => {
    if (category === "all") {
      setFilteredArticles(sortedArticles); // Mostrar todos os artigos
    } else {
      setFilteredArticles(
        sortedArticles.filter((article) => article.category === category)
      );
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src={bgHero}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Projeto 22
        </h1>
      </div>

      {/* Menu de Categorias */}
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <div className="flex gap-4">
          <button
            onClick={() => filterArticlesByCategory("all")}
            className="hover:underline"
          >
            TODOS
          </button>
          <button
            onClick={() => filterArticlesByCategory("construção")}
            className="hover:underline"
          >
            CONSTRUÇÃO
          </button>
          <button
            onClick={() => filterArticlesByCategory("sustentabilidade")}
            className="hover:underline"
          >
            SUSTENTABILIDADE
          </button>
          <button
            onClick={() => filterArticlesByCategory("engenharia")}
            className="hover:underline"
          >
            ENGENHARIA
          </button>
          <button
            onClick={() => filterArticlesByCategory("infraestrutura")}
            className="hover:underline"
          >
            INFRAESTRUTURA
          </button>
          <button
            onClick={() => filterArticlesByCategory("tecnologia")}
            className="hover:underline"
          >
            TECNOLOGIA
          </button>
          <button
            onClick={() => filterArticlesByCategory("gestão")}
            className="hover:underline"
          >
            GESTÃO
          </button>
        </div>

        {/* Buscar com Animação */}
        <div className="relative">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hover:underline"
          >
            BUSCAR
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            className={`${
              searchOpen ? "w-64 p-2 border" : "w-0"
            } transition-all duration-300 ease-in-out overflow-hidden`}
          />
        </div>
      </div>

      {/* Seção de Destaques */}
      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Artigo mais novo em destaque */}
          <div className="col-span-1">
            <Image
              src={latestArticle.image}
              alt={latestArticle.title}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
            <h2 className="text-3xl font-bold mt-4">{latestArticle.title}</h2>
            <p className="text-gray-600 mt-2">{latestArticle.description}</p>
            <Link
              href={`/artigos/${latestArticle.slug}`}
              className="text-blue-500 mt-4 inline-block"
            >
              Ler mais
            </Link>
          </div>

          {/* Lista dos próximos 5 artigos */}
          <div className="grid grid-cols-1 gap-4">
            {filteredArticles.slice(1, 6).map((article) => (
              <div key={article.id} className="flex flex-col">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
                <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
                <Link
                  href={`/artigos/${article.slug}`}
                  className="text-blue-500 mt-2"
                >
                  Ler mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Artigos Adicionais */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.slice(6, visibleArticles).map((article) => (
          <div key={article.id} className="flex flex-col">
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
            <p className="text-gray-600 mt-2">{article.description}</p>
            <Link
              href={`/artigos/${article.slug}`}
              className="text-blue-500 mt-2"
            >
              Ler mais
            </Link>
          </div>
        ))}
      </section>

      {/* Botão Carregar Mais */}
      {visibleArticles < filteredArticles.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreArticles}
            className="px-6 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-all"
          >
            Carregar mais
          </button>
        </div>
      )}
    </div>
  );
}

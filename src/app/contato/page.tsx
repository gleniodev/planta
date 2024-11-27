"use client";

import Link from "next/link";

export default function ContatoPage() {
  const contactCards = [
    {
      title: "Ofereça a Sua Área",
      subtitle: "Tem um terreno? Vamos conversar.",
      description:
        "Estamos sempre em busca de novas áreas para transformar. Se você tem um terreno disponível, fale com a gente e juntos podemos planejar o futuro.",
      whatsappMessage:
        "Olá, gostaria de conversar sobre a possibilidade de oferecer meu terreno para a Planta.",
      buttonText: "Entrar em Contato",
    },
    {
      title: "Venha ser Nosso Parceiro",
      subtitle: "Construa o futuro conosco.",
      description:
        "Estamos abertos a parcerias com construtoras, arquitetos e outros profissionais do setor. Vamos construir juntos um legado urbano sustentável.",
      whatsappMessage: "Olá, tenho interesse em ser parceiro da Planta.",
      buttonText: "Ser Parceiro",
    },
    {
      title: "Trabalhe Conosco",
      subtitle: "Faça parte da nossa equipe.",
      description:
        "Procuramos profissionais talentosos e comprometidos para integrar nossa equipe. Envie seu interesse e venha fazer parte desse time!",
      whatsappMessage:
        "Olá, gostaria de saber mais sobre as oportunidades de trabalho na Planta.",
      buttonText: "Enviar Interesse",
    },
  ];

  return (
    <section className="bg-white py-32 px-4">
      <div className="container mx-auto text-center mb-20">
        <h2 className="text-4xl font-semibold text-primary-100 mb-4">
          Entre em Contato com a Planta
        </h2>
        <p className="text-lg text-gray-700">
          Estamos sempre abertos a novas oportunidades e parcerias. Escolha
          abaixo como podemos colaborar!
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 container mx-auto md:px-14">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between text-center max-w-[350px]"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary-100 mb-2">
                {card.title}
              </h3>
              <h4 className="text-lg font-medium text-primary-300 mb-8">
                {card.subtitle}
              </h4>
              <p className="text-gray-700 mb-8">{card.description}</p>
            </div>
            <Link
              href={`https://wa.me/5583991032141?text=${encodeURIComponent(
                card.whatsappMessage
              )}`}
              target="_blank"
              className="bg-secondary text-white py-3 px-6 hover:bg-terciary transition text-center"
            >
              {card.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

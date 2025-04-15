"use client";

import { useState } from "react";

// Tipos de filtro disponíveis
type FilterType =
  | "todos"
  | "lazer"
  | "educacao"
  | "mobilidade"
  | "conveniencia";

// Componente de botão de filtro
function FilterButton({
  label,
  active,
  color,
  onClick,
}: {
  label: string;
  active: boolean;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors ${
        active
          ? `${color} text-white`
          : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}

export default function MapSection() {
  // Estado para controlar o filtro ativo
  const [activeFilter, setActiveFilter] = useState<FilterType>("todos");

  // URLs dos mapas com diferentes filtros
  // Na prática, você precisaria criar esses mapas personalizados no Google Maps
  const mapUrls = {
    todos:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1594216025347!2d-35.88968492414805!3d-7.2241688927748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e5f9ac4f467f%3A0x9b0e4ab694d3a93b!2sR.%20Arquilino%20de%20Souza%20Guimar%C3%A3es%2C%20501%20-%20Campina%20Grande%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1716500880000!5m2!1spt-BR!2sbr",
    lazer:
      "https://www.google.com/maps/search/Coisas+legais+para+fazer/@-7.2129753,-35.8892699,5672m/data=!3m2!1e3!4b1!4m7!2m6!3m5!2sR.+Arquilino+de+Souza+Guimar%C3%A3es,+501+-+Jardim+Tavares!3s0x7ac1faa50e2bb6f:0xf470f410e57ddb15!4m2!1d-35.8738202!2d-7.2130287?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    educacao:
      "https://www.google.com/maps/search/escolas/@-7.213002,-35.8784336,709m/data=!3m2!1e3!4b1!4m7!2m6!3m5!2sR.+Arquilino+de+Souza+Guimar%C3%A3es,+501+-+Jardim+Tavares!3s0x7ac1faa50e2bb6f:0xf470f410e57ddb15!4m2!1d-35.8738202!2d-7.2130287?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    mobilidade:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3958.1594216025347!2d-35.88968492414805!3d-7.2241688927748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stransporte%20p%C3%BAblico%20perto%20de%20Rua%20Arquilino%20de%20Souza%20Guimar%C3%A3es%2C%20501%20-%20Campina%20Grande%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1716500880000!5m2!1spt-BR!2sbr",
    conveniencia:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3958.1594216025347!2d-35.88968492414805!3d-7.2241688927748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssupermercados%20perto%20de%20Rua%20Arquilino%20de%20Souza%20Guimar%C3%A3es%2C%20501%20-%20Campina%20Grande%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1716500880000!5m2!1spt-BR!2sbr",
  };

  return (
    <div>
      {/* Botões de filtro */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        <FilterButton
          label="Todos"
          active={activeFilter === "todos"}
          color="bg-gray-800"
          onClick={() => setActiveFilter("todos")}
        />
        <FilterButton
          label="Lazer"
          active={activeFilter === "lazer"}
          color="bg-red-500"
          onClick={() => setActiveFilter("lazer")}
        />
        <FilterButton
          label="Educação"
          active={activeFilter === "educacao"}
          color="bg-blue-500"
          onClick={() => setActiveFilter("educacao")}
        />
        <FilterButton
          label="Mobilidade"
          active={activeFilter === "mobilidade"}
          color="bg-green-500"
          onClick={() => setActiveFilter("mobilidade")}
        />
        <FilterButton
          label="Conveniência"
          active={activeFilter === "conveniencia"}
          color="bg-yellow-500"
          onClick={() => setActiveFilter("conveniencia")}
        />
      </div>

      {/* Container do mapa */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gray-100">
          <iframe
            src={mapUrls[activeFilter]}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title={`Mapa da região - ${activeFilter}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";

// // Tipos de filtro disponíveis
// type FilterType =
//   | "todos"
//   | "lazer"
//   | "educacao"
//   | "mobilidade"
//   | "conveniencia";

// // Componente de botão de filtro
// function FilterButton({
//   label,
//   active,
//   color,
//   onClick,
// }: {
//   label: string;
//   active: boolean;
//   color: string;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded-lg transition-colors ${
//         active
//           ? `${color} text-white`
//           : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
//       }`}
//     >
//       {label}
//     </button>
//   );
// }

// export default function MapSection() {
//   // Estado para controlar o filtro ativo
//   const [activeFilter, setActiveFilter] = useState<FilterType>("todos");

//   // URLs dos mapas com diferentes filtros
//   // Na prática, você precisaria criar esses mapas personalizados no Google Maps
//   const mapUrls = {
//     todos:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.796688450258!2d-35.877130759709026!3d-7.2134405399405415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1faa50e2bb6f%3A0xf470f410e57ddb15!2sR.%20Arquilino%20de%20Souza%20Guimar%C3%A3es%2C%20501%20-%20Jardim%20Tavares%2C%20Campina%20Grande%20-%20PB%2C%2058402-030!5e0!3m2!1spt-BR!2sbr!4v1749183316122!5m2!1spt-BR!2sbr",
//     lazer:
//       "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6656.957205798569!2d-35.87668390903993!3d-7.212246619467816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCoisas%20legais%20para%20fazer!5e0!3m2!1spt-BR!2sbr!4v1749195442431!5m2!1spt-BR!2sbr",
//     educacao:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1594216025347!2d-35.88968492414805!3d-7.2241688927748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e5f9ac4f467f%3A0x9b0e4ab694d3a93b!2sR.%20Arquilino%20de%20Souza%20Guimar%C3%A3es%2C%20501%20-%20Campina%20Grande%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1716500880000!2m1!1sescolas!5e0!3m2!1spt-BR!2sbr!4v1749182902367!5m2!1spt-BR!2sbr",
//     mobilidade:
//       "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3958.1594216025347!2d-35.88968492414805!3d-7.2241688927748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stransporte%20p%C3%BAblico%20perto%20de%20Rua%20Arquilino%20de%20Souza%20Guimar%C3%A3es%2C%20501%20-%20Campina%20Grande%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1716500880000!5m2!1spt-BR!2sbr",
//     conveniencia:
//       "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3958.1594216025347!2d-35.88968492414805!3d-7.2241688927748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssupermercados%20perto%20de%20Rua%20Arquilino%20de%20Souza%20Guimar%C3%A3es%2C%20501%20-%20Campina%20Grande%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1716500880000!5m2!1spt-BR!2sbr",
//   };

//   return (
//     <div>
//       {/* Botões de filtro */}
//       <div className="flex flex-wrap gap-2 mb-4 justify-center">
//         <FilterButton
//           label="Todos"
//           active={activeFilter === "todos"}
//           color="bg-gray-800"
//           onClick={() => setActiveFilter("todos")}
//         />
//         <FilterButton
//           label="Lazer"
//           active={activeFilter === "lazer"}
//           color="bg-red-500"
//           onClick={() => setActiveFilter("lazer")}
//         />
//         <FilterButton
//           label="Educação"
//           active={activeFilter === "educacao"}
//           color="bg-blue-500"
//           onClick={() => setActiveFilter("educacao")}
//         />
//         <FilterButton
//           label="Mobilidade"
//           active={activeFilter === "mobilidade"}
//           color="bg-green-500"
//           onClick={() => setActiveFilter("mobilidade")}
//         />
//         <FilterButton
//           label="Conveniência"
//           active={activeFilter === "conveniencia"}
//           color="bg-yellow-500"
//           onClick={() => setActiveFilter("conveniencia")}
//         />
//       </div>

//       {/* Container do mapa */}
//       <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
//         <div className="absolute inset-0 bg-gray-100">
//           <iframe
//             src={mapUrls[activeFilter]}
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen={false}
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="absolute inset-0"
//             title={`Mapa da região - ${activeFilter}`}
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

// Tipos de filtro disponíveis
type FilterType =
  | "início"
  | "lazer"
  | "educacao"
  | "mobilidade"
  | "conveniencia";

const FILTER_TYPES: { [key in Exclude<FilterType, "início">]: string } = {
  lazer: "restaurant",
  educacao: "school",
  mobilidade: "transit_station",
  conveniencia: "supermarket",
};

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
      className={`px-4 py-2 transition-colors ${
        active
          ? `${color} text-white`
          : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}

const centerCoords = { lat: -7.2130287, lng: -35.8738202 }; // UNI 501 coordenadas precisas

export default function MapSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("início");
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markers = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || mapInstance.current) return;

      // Estilo que remove apenas POIs de negocios e atrações, mantendo o essencial
      const styledMapType = new google.maps.StyledMapType([
        {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi.attraction",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ]);

      mapInstance.current = new google.maps.Map(mapRef.current, {
        center: centerCoords,
        zoom: 16,
        mapTypeControlOptions: {
          mapTypeIds: ["styled_map"],
        },
      });

      mapInstance.current.mapTypes.set("styled_map", styledMapType);
      mapInstance.current.setMapTypeId("styled_map");

      // Pino fixo com label visível
      new google.maps.Marker({
        position: centerCoords,
        map: mapInstance.current,
        title: "UNI 501",
        label: {
          text: "UNI 501",
          color: "#000",
          fontWeight: "bold",
        },
      });
    };

    if (typeof window !== "undefined" && window.google) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA9iDxyrFEawHL8Q6W_JEHtMXLhIbMtqKc&libraries=places`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!mapInstance.current) return;

    markers.current.forEach((marker) => marker.setMap(null));
    markers.current = [];

    if (activeFilter === "início") return;

    const service = new google.maps.places.PlacesService(mapInstance.current);
    service.nearbySearch(
      {
        location: centerCoords,
        radius: 1500,
        type: FILTER_TYPES[activeFilter],
      },
      (results, status) => {
        if (results && status === google.maps.places.PlacesServiceStatus.OK) {
          results.forEach((place) => {
            if (!place.geometry?.location) return;

            const marker = new google.maps.Marker({
              position: place.geometry.location,
              map: mapInstance.current!,
              title: place.name,
              label: {
                text: place.name?.substring(0, 10) ?? "",
                color: "#000",
                fontSize: "10px",
                fontWeight: "bold",
              },
            });

            markers.current.push(marker);
          });
        }
      }
    );
  }, [activeFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        <FilterButton
          label="Início"
          active={activeFilter === "início"}
          color="bg-black"
          onClick={() => setActiveFilter("início")}
        />
        <FilterButton
          label="Lazer"
          active={activeFilter === "lazer"}
          color="bg-black"
          onClick={() => setActiveFilter("lazer")}
        />
        <FilterButton
          label="Educação"
          active={activeFilter === "educacao"}
          color="bg-black"
          onClick={() => setActiveFilter("educacao")}
        />
        <FilterButton
          label="Mobilidade"
          active={activeFilter === "mobilidade"}
          color="bg-black"
          onClick={() => setActiveFilter("mobilidade")}
        />
        <FilterButton
          label="Conveniência"
          active={activeFilter === "conveniencia"}
          color="bg-black"
          onClick={() => setActiveFilter("conveniencia")}
        />
      </div>

      <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <div ref={mapRef} className="absolute inset-0 bg-gray-100" />
      </div>
    </div>
  );
}

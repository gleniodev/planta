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

// src/context/PropertyContext.tsx

"use client";

import { createContext, ReactNode, useContext, useState } from "react";

// Tipagem do imóvel
interface Property {
  id: number;
  title: string;
  type: string;
  neighborhood: string;
  size: string;
  building: string;
  status: string;
  image: string;
}

interface PropertyContextType {
  selectedProperty: Property | null;
  setSelectedProperty: (property: Property) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <PropertyContext.Provider value={{ selectedProperty, setSelectedProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

// Hook para acessar o contexto
export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error("useProperty deve ser usado dentro de um PropertyProvider");
  }
  return context;
};

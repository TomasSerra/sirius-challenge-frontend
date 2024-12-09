import { GameFilters } from "@/types/filters";
import React, { createContext, useContext, useState } from "react";

interface FiltersContextType {
  filters: Record<string, any>;
  setFilters: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

import { ReactNode } from "react";

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<GameFilters>({});
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);

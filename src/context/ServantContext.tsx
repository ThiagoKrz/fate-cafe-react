import { createContext, useContext, useState } from "react";

type ServerRegion = "NA" | "JP";

type ServantContextType = {
  region: ServerRegion;
  setRegion: (region: ServerRegion) => void;
  search: string;
  setSearch: (value: string) => void;
  servantClass: string;
  setServantClass: (value: string) => void;
};

const ServantContext = createContext<ServantContextType | null>(null);

export function ServantProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegion] = useState<ServerRegion>("NA");
  const [search, setSearch] = useState("");
  const [servantClass, setServantClass] = useState("");

  return (
    <ServantContext.Provider
      value={{
        region,
        setRegion,
        search,
        setSearch,
        servantClass,
        setServantClass,
      }}
    >
      {children}
    </ServantContext.Provider>
  );
}

export function useServantContext() {
  const ctx = useContext(ServantContext);
  if (!ctx) {
    throw new Error("useServantContext must be used inside ServantProvider");
  }
  return ctx;
}

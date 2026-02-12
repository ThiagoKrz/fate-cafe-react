import { useEffect, useState } from "react";
import { AtlasServant } from "@/types/atlas-servant";
import { useServantContext } from "@/context/ServantContext";
import { CLASS_MAP } from "@/util/servantClassMap";

export function useAtlasServants() {
  const { region, search, servantClass } = useServantContext();
  const [servants, setServants] = useState<AtlasServant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.atlasacademy.io/export/${region}/basic_servant.json`)
      .then((res) => res.json())
      .then((data: AtlasServant[]) => {
const correctedData = data.map((s) => ({
  ...s,
  name: s.name.replace(/Altria/g, "Artoria"), // Troca em qualquer servo (ex: Altria Lancer -> Artoria Lancer)
}));

let filtered = correctedData;

        // Filtro de Busca
        if (search.trim()) {
          filtered = filtered.filter((s) =>
            s.name.toLowerCase().includes(search.toLowerCase())
          );
        }
        
        // ... restante do código de filtros de classe ...
        setServants(filtered);

        if (servantClass) {
          const selected = servantClass.toLowerCase();

          filtered = filtered.filter((s) => {
            const apiClass = CLASS_MAP[s.className] ?? s.className;

            const normalized = apiClass.toLowerCase();

            if (selected === "beast") {
              return normalized.startsWith("beast");
            }

            return normalized === selected;
          });
        }

        setServants(filtered);
      })
      .catch((err) => {
        console.error("❌ Erro:", err);
        setError("Falha ao carregar servos");
      })
      .finally(() => setLoading(false));
  }, [region, search, servantClass]);

  return { servants, loading, error };
}

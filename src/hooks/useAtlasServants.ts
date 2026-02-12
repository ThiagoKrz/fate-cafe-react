import { useEffect, useState } from "react";
import { AtlasServant } from "@/types/atlas-servant";
import { useServantContext } from "@/context/ServantContext";
import { CLASS_MAP } from "@/util/servantClassMap";

export function useAtlasServants() {
  const { search, servantClass } = useServantContext();
  const [servants, setServants] = useState<AtlasServant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Adicionado para o TS

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Usando basic_servant_lang_en da região JP para ter todos os servos em inglês
    fetch(`https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json`)
      .then((res) => res.json())
      .then((data: AtlasServant[]) => {
        const correctedData = data.map((s: any) => {
          const displayName = s.name || "";
          let trueName = s.overwriteName || s.originalName || "";
          if (trueName === s.name) trueName = "";

          return {
            ...s,
            name: displayName.replace(/Altria/g, "Artoria"),
            displayName: displayName.replace(/Altria/g, "Artoria"),
            displayTrueName: trueName.replace(/Altria/g, "Artoria"),
            searchOverwrite: (s.overwriteName || "").toLowerCase(),
            searchTrue: (s.originalName || "").toLowerCase()
          };
        });

        let filtered = correctedData;

        if (search.trim()) {
          const term = search.toLowerCase();
          filtered = filtered.filter((s: any) => 
            s.displayName.toLowerCase().includes(term) || 
            s.searchOverwrite.includes(term) || 
            s.searchTrue.includes(term)
          );
        }

        if (servantClass) {
          const selected = servantClass.toLowerCase();
          filtered = filtered.filter((s) => {
            const apiClass = CLASS_MAP[s.className] ?? s.className;
            return apiClass.toLowerCase() === selected;
          });
        }

        setServants(filtered);
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao carregar");
      })
      .finally(() => setLoading(false));
  }, [search, servantClass]);

  return { servants, loading, error }; // Agora retorna o error
}
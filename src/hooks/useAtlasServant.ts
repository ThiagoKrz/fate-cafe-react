import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useServantContext } from "@/context/ServantContext";
import { AtlasServantFull } from "@/types/atlas-servant-full";

async function fetchServant(region: string, id: string) {
  // Adicionamos ?lang=en no final para forçar o nome/lore em inglês
  const res = await fetch(
    `https://api.atlasacademy.io/nice/JP/servant/${id}?lang=en`
  );
  const data = await res.json();
  if (data.name) {
    data.name = data.name.replace(/Altria/g, "Artoria");
  }
  return data;
}

export function useAtlasServant() {
  const { id } = useParams();
  const { region } = useServantContext();

  const [servant, setServant] = useState<AtlasServantFull | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    (async () => {
      let data = await fetchServant(region, id);
if (data.name.includes("Altria")) {
  data.name = data.name.replace(/Altria/g, "Artoria");
}
      //  Fallback JP se NA não tiver lore
      if (!data.profile?.story?.length && region !== "JP") {
        data = await fetchServant("JP", id);
      }

      // NORMALIZA IMAGENS
      const facesAscension = Object.values(data.extraAssets?.faces?.ascension ?? {});
const facesCostume = Object.values(data.extraAssets?.faces?.costume ?? {});
const faces = [...facesAscension, ...facesCostume]; // Agora inclui as skins!

const charaGraphAscension = Object.values(data.extraAssets?.charaGraph?.ascension ?? {});
const charaGraphCostume = Object.values(data.extraAssets?.charaGraph?.costume ?? {});
const charaGraph = [...charaGraphAscension, ...charaGraphCostume];

      //  NORMALIZA PROFILE
      const profile =
        data.profile?.story && data.profile.story.length > 0
          ? { story: data.profile.story }
          : undefined;

      setServant({
        ...data,
        faces,
        charaGraph,
        profile,
      });

      setLoading(false);
    })();
  }, [id, region]);

  return { servant, loading };
}

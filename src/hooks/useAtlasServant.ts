import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useServantContext } from "@/context/ServantContext";
import { AtlasServantFull } from "@/types/atlas-servant-full";

async function fetchServant(region: string, id: string) {
  const res = await fetch(
    `https://api.atlasacademy.io/nice/${region}/servant/${id}`
  );
  const data = await res.json();
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

      //  Fallback JP se NA não tiver lore
      if (!data.profile?.story?.length && region !== "JP") {
        data = await fetchServant("JP", id);
      }

      // NORMALIZA IMAGENS
      const faces = Object.values(
        data.extraAssets?.faces?.ascension ?? {}
      );

      const charaGraph = Object.values(
        data.extraAssets?.charaGraph?.ascension ?? {}
      );

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

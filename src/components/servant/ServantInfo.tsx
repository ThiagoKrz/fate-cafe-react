import { AtlasServantFull } from "@/types/atlas-servant-full";

interface Props {
  servant: AtlasServantFull;
}

export function ServantInfo({ servant }: Props) {
  return (
    <div className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44]">
      <h3 className="text-2xl font-bold text-[#D4A373] mb-4">
        Informações
      </h3>

      <div className="space-y-2 text-lg">
        <p><strong>Classe:</strong> {servant.className}</p>
        <p><strong>Raridade:</strong> {"★".repeat(servant.rarity)}</p>

        {servant.attribute && (
          <p><strong>Atributo:</strong> {servant.attribute}</p>
        )}

        {servant.gender && (
          <p><strong>Gênero:</strong> {servant.gender}</p>
        )}

        {servant.alignment && (
          <p><strong>Alinhamento:</strong> {servant.alignment}</p>
        )}

        {servant.traits && servant.traits.length > 0 && (
          <p className="text-sm">
            <strong>Traits:</strong>{" "}
            {servant.traits.map(t => t.name).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}

import { useServantContext } from "@/context/ServantContext";

const classes = [
  "",
  "Saber",
  "Archer",
  "Lancer",
  "Rider",
  "Caster",
  "Assassin",
  "Berserker",
  "Ruler",
  "Avenger",
  "MoonCancer",
  "AlterEgo",
  "Foreigner",
  "Pretender",
  "Beast",
  "Shielder",
];

export default function ServantFilters() {
  const {
    region,
    setRegion,
    search,
    setSearch,
    servantClass,
    setServantClass,
  } = useServantContext();

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Região */}
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value as "NA" | "JP")}
        className="bg-[#3E322F] border border-[#5A4A44] rounded px-4 py-2 text-white"
      >
        <option value="NA">Servidor NA</option>
        <option value="JP">Servidor JP</option>
      </select>

      {/* Busca */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar servo..."
        className="flex-1 bg-[#3E322F] border border-[#5A4A44] rounded px-4 py-2 text-white"
      />

      {/* Classe */}
      <select
        value={servantClass}
        onChange={(e) => {
          setServantClass(e.target.value);
        }}
        className="bg-[#3E322F] border border-[#5A4A44] rounded px-4 py-2 text-white"
      >
        <option value="">Selecionar Classe</option>
        {classes.map((cls) => (
          <option key={cls} value={cls}>
            {cls || "Todas"}
          </option>
        ))}
      </select>
    </div>
  );
}

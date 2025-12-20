import ServantCard from "./ServantCard";
import { useAtlasServants } from "@/hooks/useAtlasServants";

export default function ServantGrid() {
  const { servants, loading, error } = useAtlasServants();

  if (loading) {
    return <p className="text-center text-[#D4A373]">Carregando servos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400">{error}</p>;
  }

  return (
    <div
      className="
        grid grid-cols-2
        md:grid-cols-4
        lg:grid-cols-6
        xl:grid-cols-8
        gap-4
      "
    >
      {servants.map((servant) => (
        <ServantCard key={servant.id} servant={servant} />
      ))}
    </div>
  );
}

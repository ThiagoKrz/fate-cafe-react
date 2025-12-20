import { Link } from "react-router-dom";
import { AtlasServant } from "@/types/atlas-servant";

type Props = {
  servant: AtlasServant;
};

export default function ServantCard({ servant }: Props) {
  return (
    <Link
      to={`/servos/${servant.id}`}
      className="bg-[#3E322F] border border-[#5A4A44] rounded-lg
                 p-2 text-center transition-all
                 hover:border-[#D4A373] hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={servant.face}
        alt={servant.name}
        loading="lazy"
        className="w-full aspect-square object-cover rounded-md"
      />

      <span className="block text-sm font-semibold mt-2 text-white truncate">
        {servant.name}
      </span>

      {servant.originalName && (
        <span className="block text-xs text-gray-400 truncate">
          {servant.originalName}
        </span>
      )}

      <span className="block text-xs text-[#D4A373] capitalize">
        {servant.className}
      </span>
    </Link>
  );
}

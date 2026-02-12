import { Link } from "react-router-dom";
import { AtlasServant } from "@/types/atlas-servant";

type Props = {
  servant: AtlasServant;
};

export default function ServantCard({ servant }: Props) {
  // Função simples para detectar se o texto contém caracteres japoneses (Kanji/Kana)
  const isJapanese = (text: string) => /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/.test(text);

  // Lógica de Prioridade:
  // 1. Pegamos o overwriteName (que a API usa para nomes traduzidos como as Tam Lin)
  // 2. Se não existir ou for japonês, tentamos o originalName APENAS se não for japonês
  const rawTrueName = (servant as any).overwriteName || (servant as any).originalName;
  
  // Só exibimos se o nome não for japonês e for diferente do nome principal
  const trueName = rawTrueName && !isJapanese(rawTrueName) ? rawTrueName : null;

  return (
    <Link
      to={`/servos/${servant.id}`}
      className="bg-[#3E322F] border border-[#5A4A44] rounded-lg
                 p-2 text-center transition-all flex flex-col h-full
                 hover:border-[#D4A373] hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={servant.face}
        alt={servant.name}
        loading="lazy"
        className="w-full aspect-square object-cover rounded-md"
      />

      <div className="mt-2 flex-1 flex flex-col justify-center gap-0.5">
        <span className="block text-sm font-semibold text-white truncate">
          {servant.name}
        </span>

        {/* Exibe o True Name apenas se for válido, não-japonês e diferente do nome principal */}
        {trueName && trueName !== servant.name && (
          <span className="block text-[10px] leading-tight text-[#D4A373]/80 italic truncate px-1">
            {trueName}
          </span>
        )}

        <span className="block text-xs text-[#D4A373] capitalize mt-auto pt-1">
          {servant.className}
        </span>
      </div>
    </Link>
  );
}
import { Link } from "react-router-dom";

type ProgressItem = {
  label: string;
  value: number;
};

// Configuração de cores dos botões
const buttonVariants = {
  default: "bg-[#D4A373] text-[#2A2320] hover:bg-[#C9A66B]", // Dourado
  blue: "bg-[#172554] text-white hover:bg-[#1e3a8a] border border-[#3b82f6]/20 shadow-lg", // Azul Profundo
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  progress: ProgressItem[];
  slug: string;
  downloadAvailable?: boolean;
  downloadUrl?: string;
  downloadMessage?: string;
  buttonVariant?: keyof typeof buttonVariants;
}

export function ProjectCard({
  title,
  description,
  image,
  progress,
  slug,
  downloadAvailable = false,
  downloadUrl,
  downloadMessage,
  buttonVariant = "default",
}: ProjectCardProps) {
  return (
    <article className="bg-[#3E322F] border border-[#5A4A44] rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row h-full">
      {/* Imagem com Link */}
      <div className="w-full md:w-1/3 h-64 md:h-auto relative group">
        <Link to={`/traducoes/${slug}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col justify-between flex-1">
        {/* Texto */}
        <div>
          <Link to={`/traducoes/${slug}`}>
            <h4 className="text-3xl font-bold text-white mb-2 hover:text-[#D4A373] transition-colors">
              {title}
            </h4>
          </Link>

          <p className="text-[#EAE0D5] text-sm mb-5">{description}</p>
        </div>

        {/* Progresso */}
        <div className="space-y-3 mb-6">
          {progress.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs text-[#D4A373] mb-1">
                <span>{item.label}</span>
                <span className="font-semibold">{item.value}%</span>
              </div>

              <div className="w-full bg-[#5A4A44] rounded-full h-2.5">
                <div
                  className="bg-[#D4A373] h-2.5 rounded-full transition-all"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <Link
            to={`/traducoes/${slug}`}
            // MUDANÇA AQUI: Clareado de #5A4A44 para #866a5f
            // Hover ajustado para #856D63 (mais claro ainda)
            className="w-full sm:w-auto text-center bg-[#866a5f] text-[#EAE0D5] hover:text-white font-bold py-3 px-6 rounded-lg hover:bg-[#856D63] transition-colors shadow-md border border-transparent hover:border-[#D4A373]/30"
          >
            Página do Projeto
          </Link>

          {downloadAvailable && downloadUrl ? (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto text-center font-bold py-3 px-6 rounded-lg transition-all ${buttonVariants[buttonVariant]}`}
            >
              {downloadMessage || "Download"}
            </a>
          ) : (
            <span className="w-full sm:w-auto text-center bg-[#2A2320] border border-[#3E322F] text-gray-500 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
              Download (Indisponível)
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
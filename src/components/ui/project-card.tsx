import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ProgressItem = {
  label: string;
  value: number;
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  progress: ProgressItem[];
  slug: string;
  downloadAvailable?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  progress,
  slug,
  downloadAvailable = false,
}: ProjectCardProps) {
  return (
    <article className="bg-[#3E322F] border border-[#5A4A44] rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Imagem */}
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 h-64 md:h-auto object-cover"
      />

      {/* Conteúdo */}
      <div className="p-6 flex flex-col justify-between flex-1">
        {/* Texto */}
        <div>
          <h4 className="text-3xl font-bold text-white mb-2">{title}</h4>

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
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/traducoes/${slug}`}
            className="w-full sm:w-auto text-center bg-[#D4A373] text-[#2A2320] font-bold py-3 px-6 rounded-lg hover:bg-[#C9A66B] transition-colors"
          >
            Página do Projeto
          </Link>

          {downloadAvailable ? (
            <Link
              href="#"
              className="w-full sm:w-auto text-center bg-[#D4A373] text-[#2A2320] font-bold py-3 px-6 rounded-lg hover:bg-[#C9A66B]"
            >
              Download
            </Link>
          ) : (
            <span className="w-full sm:w-auto text-center bg-gray-600 text-gray-400 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
              Download (Indisponível)
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

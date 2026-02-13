import { useParams } from "react-router-dom";
import { projectsDetails } from "@/util/data/projects";

import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectBanner from "@/components/project/ProjectBanner";
import ProjectSynopsis from "@/components/project/ProjectSynopsis";
import ProjectScreenshots from "@/components/project/ProjectScreenshots";
import ProjectInstall from "@/components/project/ProjectInstall";
import ProjectStatus from "@/components/project/ProjectStatus";
import DetailedProgress from "@/components/project/DetailedProgress";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsDetails[slug as keyof typeof projectsDetails] as any;

  if (!project) {
    return <div className="p-10 text-white">Projeto não encontrado</div>;
  }

  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 md:px-10 pt-12 pb-24">
        <ProjectHeader title={project.title} />
        <ProjectBanner image={project.banner} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            <ProjectSynopsis text={project.synopsis} />
            
            {/* Tabela de Progresso Detalhado (Accordion) */}
            {project.detailedProgress && (
              <DetailedProgress data={project.detailedProgress} />
            )}

            <ProjectScreenshots images={project.screenshots} />
            <ProjectInstall />
          </div>

          {/* Barra Lateral */}
          <div className="space-y-8">
            {/* Status Geral */}
            <ProjectStatus routes={project.routes} />

            {/* Downloads Estilizados */}
            <div className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44] shadow-lg">
              <h3 className="text-3xl font-bold text-[#D4A373] border-b-2 border-[#5A4A44] pb-2 mb-4">Download</h3>
              <p className="text-gray-400 text-sm mb-6">Versão Atual: {project.version || "v1.0"}</p>
              
              <div className="space-y-3">
  {project.downloads?.map((dl: any, i: number) => (
    <a 
      key={i} 
      href={dl.url} 
      target="_blank"           // Adicione isso para abrir em nova guia
      rel="noopener noreferrer" // Adicione isso por segurança
      className={`w-full text-center block font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] ${
        dl.variant === 'primary' 
        ? 'bg-[#D4A373] text-[#2A2320] hover:bg-[#C9A66B]' 
        : 'border border-[#D4A373] text-[#D4A373] hover:bg-[#5A4A44]'
      }`}
    >
      {dl.label}
    </a>
  ))}
</div>
            </div>

            {/* Ficha Técnica */}
            {project.technicalInfo && (
              <div className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44] shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Ficha Técnica</h3>
                <ul className="text-sm text-[#EAE0D5] space-y-3">
                  <li><span className="text-[#D4A373] font-semibold">Desenvolvedora:</span> {project.technicalInfo.developer}</li>
                  <li><span className="text-[#D4A373] font-semibold">Roteiro:</span> {project.technicalInfo.writer}</li>
                  <li><span className="text-[#D4A373] font-semibold">Arte:</span> {project.technicalInfo.art}</li>
                  <li><span className="text-[#D4A373] font-semibold">Gênero:</span> {project.technicalInfo.genre}</li>
                  <li><span className="text-[#D4A373] font-semibold">Lançamento (JP):</span> {project.technicalInfo.releaseYear}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
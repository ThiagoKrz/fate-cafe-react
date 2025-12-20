import { useParams } from "react-router-dom";
import { projectsDetails } from "@/util/data/projects";

import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectBanner from "@/components/project/ProjectBanner";
import ProjectSynopsis from "@/components/project/ProjectSynopsis";
import ProjectScreenshots from "@/components/project/ProjectScreenshots";
import ProjectInstall from "@/components/project/ProjectInstall";
import ProjectStatus from "@/components/project/ProjectStatus";
import ProjectDownload from "@/components/project/ProjectDownload";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsDetails[slug as keyof typeof projectsDetails];

  if (!project) {
    return <div className="p-10 text-white">Projeto não encontrado</div>;
  }

  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 md:px-10 pt-12 pb-24">
        <ProjectHeader title={project.title} />
        <ProjectBanner image={project.banner} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <ProjectSynopsis text={project.synopsis} />
            <ProjectScreenshots images={project.screenshots} />
            <ProjectInstall />
          </div>

          <div className="space-y-8">
            <ProjectStatus routes={project.routes} />
            <ProjectDownload />
          </div>
        </div>
      </div>
    </main>
  );
}

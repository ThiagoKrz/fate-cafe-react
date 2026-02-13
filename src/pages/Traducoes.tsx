import { ProjectCard } from "@/components/ui/project-card";
import tsuki from "../assets/tsuki.avif";
import fsn from "@/assets/fsn.avif";
import mahoyo from "@/assets/mahoyo.avif";

const projects = [
  {
    slug: "tsukihime-remake",
    image: tsuki,
    title: "Tsukihime Remake",
    description:
      "O remake da lendária visual novel. Acompanhe Shiki Tohno e seu encontro com a princesa vampira Arcueid.",
    progress: [
      { label: "Tradução", value: 65 },
      { label: "Revisão", value: 62 },
    ],
  },
  {
    slug: "fate-stay-night",
    image: fsn,
    title: "Fate/stay night REMASTERED",
    description:
      "A Guerra do Santo Graal definitiva, agora em HD. Três rotas épicas aguardam você. Tradução por Meow Works, sendo adaptada e revisada para a versão remasterizada.",
    progress: [
      { label: "Tradução", value: 100 },
      { label: "Revisão", value: 5 },
    ],
  },
  {
    slug: "mahou-tsukai-no-yoru",
    image: mahoyo,
    title: "Mahou Tsukai no Yoru",
    description:
      "A história de Aoko Aozaki na era moderna. Uma jornada mágica e visualmente deslumbrante.",
    progress: [
      { label: "Tradução", value: 2 },
      { label: "Revisão", value: 2 },
    ],
  },
];

export default function Traducoes() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 md:px-10 pt-12 pb-24">
        <section>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in">
            Projetos de Tradução
          </h2>

          <p className="text-muted-foreground text-center mb-12 animate-fade-in">
            Confira o progresso das nossas traduções em andamento
          </p>

          <div className="mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 border-b border-border pb-2">
              Em Andamento
            </h3>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

import { useAtlasServant } from "@/hooks/useAtlasServant";
import { ServantHeader } from "./ServantHeader";
import { ServantImages } from "./ServantImages";
import { ServantInfo } from "./ServantInfo";
import { ServantLoreSection } from "./ServantLoreSection";

export default function ServantProfile() {
  const { servant, loading } = useAtlasServant();

  if (loading) {
    return <p className="text-center text-[#D4A373]">Carregando...</p>;
  }

  if (!servant) {
    return <p className="text-center text-red-400">Servo não encontrado</p>;
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-6 md:px-10 pt-12 pb-24">

        <ServantHeader
          name={servant.name}
          className={servant.className}
          rarity={servant.rarity}
        />

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="lg:w-1/3 space-y-8">
            <ServantImages
              face={servant.faces}
              charaGraph={servant.charaGraph}
            />
            <ServantInfo servant={servant} />
          </aside>

          <section className="lg:w-2/3 space-y-8">
            {servant.profile?.story?.length ? (
              <ServantLoreSection title="Perfil">
                {servant.profile.story.map((block, index) => (
                  <div key={index}>
                    {block.title && (
                      <h4 className="text-xl font-semibold text-[#D4A373] mb-2">
                        {block.title}
                      </h4>
                    )}
                    <p>{block.text}</p>
                  </div>
                ))}
              </ServantLoreSection>
            ) : (
              <ServantLoreSection title="Perfil">
                <p>Perfil não disponível.</p>
              </ServantLoreSection>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

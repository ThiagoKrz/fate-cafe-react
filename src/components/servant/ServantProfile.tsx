import { useAtlasServant } from "@/hooks/useAtlasServant";
import { ServantHeader } from "./ServantHeader";
import { ServantImages } from "./ServantImages";
import { ServantInfo } from "./ServantInfo";
import { ServantLoreSection } from "./ServantLoreSection";
import { useParams } from "react-router-dom";
import { servantTranslations } from "@/util/data/translations";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ServantProfile() {
  const { servant, loading } = useAtlasServant();
  const { id } = useParams();
  
  // Tipamos o manualData para evitar erros de 'any' implícito
  const manualData = id ? (servantTranslations as any)[id] : null;
  const [isFalasOpen, setIsFalasOpen] = useState(false);

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
          name={manualData?.nomeIngles || servant.name}
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
            {/* CAIXA 1: PERFIL */}
            <ServantLoreSection title={manualData?.perfil?.title || "Perfil"}>
              {manualData ? (
                // Adicionamos tipos aos parâmetros do map
                manualData.perfil.content.map((item: any, idx: number) => (
                  <div key={idx} className="mb-4 text-gray-200 leading-relaxed">
                    <span className="font-bold text-[#D4A373]">{item.label}:</span>{" "}
                    <span>{item.text}</span>
                  </div>
                ))
              ) : (
                servant.profile?.story?.map((block: any, index: number) => (
                  <div key={index} className="mb-4 text-gray-200">
                    {block.title && (
                      <span className="font-bold text-[#D4A373]">{block.title}:</span>
                    )}{" "}
                    <span>{block.text}</span>
                  </div>
                ))
              )}
            </ServantLoreSection>

            {/* CAIXA 2: FALAS */}
            {manualData?.falas && (
              <div className="space-y-4">
                <button
                  onClick={() => setIsFalasOpen(!isFalasOpen)}
                  className="flex items-center justify-between w-full p-4 bg-[#3A3330] hover:bg-[#4A4340] transition-colors rounded-t-lg border-b border-[#D4A373]/30"
                >
                  <h3 className="text-xl font-bold text-[#D4A373]">
                    {manualData.falas.title}
                  </h3>
                  {isFalasOpen ? (
                    <ChevronUp className="text-[#D4A373]" />
                  ) : (
                    <ChevronDown className="text-[#D4A373]" />
                  )}
                </button>

                {isFalasOpen && (
                  <div className="p-4 bg-[#3A3330]/50 rounded-b-lg border-t-0 animate-in fade-in slide-in-from-top-2">
                    {manualData.falas.sections.map((section: any, sIdx: number) => (
                      <div key={sIdx} className="mb-8 last:mb-0">
                        <h4 className="text-lg font-bold text-[#D4A373] mb-4 border-b border-[#D4A373]/10 pb-1 italic">
                          {section.category}
                        </h4>
                        {section.content.map((item: any, iIdx: number) => (
                          <div key={iIdx} className="mb-3 text-gray-200">
                            <span className="font-bold text-[#D4A373]">{item.label}:</span>{" "}
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
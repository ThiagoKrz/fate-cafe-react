import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

type Props = {
  images?: string[];
};

export default function ProjectScreenshots({ images = [] }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const hasImages = images.length > 0;

  return (
    <>
      <section className="bg-[#3E322F] p-6 rounded-lg shadow-lg border border-[#5A4A44]">
        <h3 className="text-3xl font-bold text-[#D4A373] border-b border-[#5A4A44] pb-2 mb-6">
          Screenshots
        </h3>

        {hasImages ? (
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Screenshot ${index + 1}`}
                onClick={() => setSelected(img)}
                className="cursor-pointer rounded-md border border-[#5A4A44] hover:opacity-80 transition"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-48 border border-dashed border-[#5A4A44] rounded-md text-[#9B8D82] text-center px-6">
            <p className="text-lg font-semibold mb-1">
              Screenshots indisponíveis
            </p>
            <p className="text-sm">
              Imagens serão adicionadas futuramente.
            </p>
          </div>
        )}
      </section>

      {selected && (
        <Lightbox image={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

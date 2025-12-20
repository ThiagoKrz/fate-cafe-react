import { useState, useEffect } from "react";

interface Props {
  face?: string[];
  charaGraph?: string[];
}

export function ServantImages({ face = [], charaGraph = [] }: Props) {
  const getInitialImage = () => {
    if (charaGraph.length > 0) return charaGraph[0];
    if (face.length > 0) return face[0];
    return "";
  };

  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    setCurrentImage(getInitialImage());
  }, [face, charaGraph]);

  if (!currentImage) {
    return (
      <div className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44] text-center text-[#D4A373]">
        Imagem não disponível
      </div>
    );
  }

  return (
    <div className="bg-[#3E322F] p-4 rounded-lg border border-[#5A4A44]">
      <img
        src={currentImage}
        alt="Servant"
        className="w-full rounded-md aspect-square object-contain"
      />

      {face.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {face.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Ascensão ${index + 1}`}
              onClick={() =>
                setCurrentImage(charaGraph[index] ?? img)
              }
              className="w-16 h-16 rounded-md cursor-pointer border-2 border-transparent hover:border-[#D4A373]"
            />
          ))}
        </div>
      )}
    </div>
  );
}

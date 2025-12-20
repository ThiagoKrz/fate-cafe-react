import React from "react";

type Props = {
  available: boolean;
  url?: string;
  message?: string;
};

export default function ProjectDownload({
  available,
  url,
  message = "Em desenvolvimento",
}: Props) {
  return (
    <section className="bg-[#3E322F] p-6 rounded-lg shadow-lg border border-[#5A4A44]">
      <h3 className="text-3xl font-bold text-[#D4A373] border-b border-[#5A4A44] pb-2 mb-6">
        Tradução
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {message}
      </p>

      {available && url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-[#D4A373] text-[#2A2320] font-bold py-3 px-6 rounded-lg hover:bg-[#C9A66B] transition-colors"
        >
          Download
        </a>
      ) : (
        <span className="w-full block text-center bg-gray-600 text-gray-400 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
          Download (Indisponível)
        </span>
      )}
    </section>
  );
}

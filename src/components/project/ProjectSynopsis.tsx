type Props = {
  text: string;
};

export default function ProjectSynopsis({ text }: Props) {
  return (
    <section className="bg-[#3E322F] p-6 rounded-lg shadow-lg border border-[#5A4A44]">
      <h3 className="text-3xl font-bold text-[#D4A373] border-b border-[#5A4A44] pb-2 mb-6">
        Sinopse
      </h3>

      <p className="text-[#EAE0D5] leading-relaxed text-lg whitespace-pre-line">
        {text}
      </p>
    </section>
  );
}

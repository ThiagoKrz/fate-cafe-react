export default function ProjectInstall() {
  return (
    <section className="bg-[#3E322F] p-6 rounded-lg shadow-lg border border-[#5A4A44]">
      <h3 className="text-3xl font-bold text-[#D4A373] border-b border-[#5A4A44] pb-2 mb-6">
        Instruções de Instalação
      </h3>

      <ol className="list-decimal list-inside space-y-2 text-lg text-[#EAE0D5]">
        <li>Compre e instale o jogo original (Steam/Nuuvem/etc).</li>
        <li>Baixe o patch de tradução quando disponível.</li>
        <li>Extraia o conteúdo do .zip na pasta do jogo.</li>
        <li>Substitua os arquivos quando solicitado.</li>
        <li>Execute o jogo normalmente.</li>
      </ol>
    </section>
  );
}

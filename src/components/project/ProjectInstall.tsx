export default function ProjectInstall() {
  return (
    <section className="bg-[#3E322F] p-6 rounded-lg shadow-lg border border-[#5A4A44]">
      <h3 className="text-3xl font-bold text-[#D4A373] border-b border-[#5A4A44] pb-2 mb-6">
        Instruções de Instalação
      </h3>

      <ol className="list-decimal list-inside space-y-2 text-lg text-[#EAE0D5]">
        <li>Compre e instale a Rom do jogo em um emulador ou Nintendo Switch, VERSÃO JP APENAS.</li>
        <li>Baixe o patch de tradução da Tsukihimates, e o patch de tradução PT-BR, anexados na aba Downloads.</li>
        <li>Instale o patch de tradução Tsukihimates.</li>
        <li>Coloque a pasta romfs dentro da pasta de mods do jogo.</li>
        <li>Execute o jogo normalmente.</li>
      </ol>
    </section>
  );
}

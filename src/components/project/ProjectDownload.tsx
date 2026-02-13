interface DownloadLink {
  label: string;
  url: string;
  variant?: 'primary' | 'outline';
}

interface ProjectDownloadProps {
  available: boolean;
  version?: string;
  downloads?: DownloadLink[];
}

export default function ProjectDownload({ available, version, downloads }: ProjectDownloadProps) {
  if (!available) {
    return (
      <div className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44] shadow-lg opacity-75">
        <h3 className="text-3xl font-bold text-gray-500 border-b-2 border-[#5A4A44] pb-2 mb-4">Download</h3>
        <button disabled className="w-full bg-gray-700 text-gray-400 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
          Indisponível
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44] shadow-lg">
      <h3 className="text-3xl font-bold text-[#D4A373] border-b-2 border-[#5A4A44] pb-2 mb-4">Download</h3>
      
      {version && (
        <p className="text-gray-400 text-sm mb-6">
          Versão Atual: <span className="text-white font-mono">{version}</span>
        </p>
      )}
      
      <div className="space-y-3">
        {downloads?.map((dl, i) => (
          <a 
            key={i} 
            href={dl.url} 
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full text-center block font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] ${
              dl.variant === 'primary' 
              ? 'bg-[#D4A373] text-[#2A2320] hover:bg-[#C9A66B]' 
              : 'border border-[#D4A373] text-[#D4A373] hover:bg-[#5A4A44]'
            }`}
          >
            {dl.label}
          </a>
        ))}
      </div>
    </div>
  );
}
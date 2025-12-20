import ServantFilters from "./ServantFilters";
import ServantGrid from "./ServantGrid";

export default function ServantsPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-6 md:px-10 pt-12 pb-24">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Banco de Dados de Servos
        </h2>

        <p className="text-center text-lg text-[#EAE0D5] max-w-2xl mx-auto mb-10">
          Uma lista de todos os servos. Clique em um servo para ver seu perfil completo.
        </p>

        {/* 🔥 AQUI */}
        <ServantFilters />

        <ServantGrid />
      </div>
    </main>
  );
}

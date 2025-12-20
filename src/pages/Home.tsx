import React from "react";
import maids from "../assets/maids.png"

const Home = () => {
  return (
    <main className="flex-1 h-full overflow-y-auto selection:bg-amber-600 selection:text-white">
      <div className="container mx-auto px-6 md:px-10 pt-12 pb-24">
        <section>

          <div className="relative bg-[#3E322F] rounded-lg shadow-lg overflow-hidden border border-[#5A4A44] p-10 md:p-16 text-center mb-12">
            <img
              src={maids}
              alt="Banner do Fate Café"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Bem-vindo ao Fate Café
              </h2>
              <p className="text-xl text-[#EAE0D5] max-w-3xl mx-auto">
                Hub de Dados e Traduções do Nasuverse em Português.
              </p>
            </div>
          </div>

          <div className="text-center bg-[#3E322F] p-10 md:p-12 rounded-lg shadow-inner border border-[#5A4A44]">
            <h2 className="text-4xl font-bold text-white mb-6">
              O que você vai encontrar aqui?
            </h2>
            <p className="text-lg text-[#EAE0D5] max-w-3xl mx-auto">
              Nossos projetos são feitos de fã para fã.
            </p>
          </div>
        </section>
      </div>

   
    </main>
  );
};

export default Home;

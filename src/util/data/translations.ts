// src/util/data/translations.ts

export interface ServantTranslation {
  perfil: {
    title: string;
    content: { label: string; text: string }[];
  };
  falas: {
    title: string;
    sections: { category: string; content: { label: string; text: string }[] }[];
  };
}

export const servantTranslations: Record<string, any> = {
  "100100": {
    nomeIngles: "Artoria Pendragon", // Aqui defines o nome correto
    perfil: {
      title: "Perfil de Servo",
      content: [
        { label: "Resumo", text: "A lendária Rei da Grã-Bretanha e a Rei dos Cavaleiros. Seu nome de infância era Artoria, mas ela passou a ser conhecida como Rei Arthur desde sua coroação. Em uma época em que a cavalaria morria como uma flor murchando, ela trouxe uma paz momentânea e o último fôlego de prosperidade para a Grã-Bretanha com sua espada sagrada em mãos. Nos livros de história, Arthur é homem, mas neste mundo ela é uma mulher disfarçada." },
        { label: "Bond Lv. 1", text: "Altura/Peso: 154cm, 42kg. Origem: Lenda do Rei Arthur. Alinhamento: Leal e Bom. Gênero: Feminino. Não sabe como reagir ao afeto, já que passou a vida fingindo ser um homem." },
        { label: "Bond Lv. 2", text: "Um rei idealista que acredita que uma vida digna é tudo o que alguém precisa. Protege os fracos, pune os fortes e é uma pessoa completamente impecável. Calma e firme, ela é sempre séria e um ser humano modelo. ...Mas, embora não diga em voz alta, ela detesta perder. Não pega leve consigo mesma e sente grande remorso quando falha." },
        { label: "Bond Lv. 3", text: "Uma líder nata para guiar exércitos. Melhora as forças de suas tropas no campo de batalha. Preza pela honestidade total e devoção altruísta. Cavaleiros se ajoelham perante sua justiça, e o povo sobrevive a qualquer dificuldade através da esperança que ela emana. Seu caminho como rei não é governar uma elite forte, mas salvar a multidão de necessitados." },
        { label: "Bond Lv. 4", text: "Rank A++. Tipo: Anti-Fortaleza. A Espada da Vitória Prometida. Uma arma não forjada por mãos humanas, mas um Construto Divino forjado dentro do próprio Planeta. O Fantasma Nobre que é o maior de todas as espadas sagradas. O verdadeiro poder da espada reside em sua bainha, que dizem estar perdida para sempre." },
        { label: "Bond Lv. 5", text: "A lenda do Rei Arthur marca o fim da era dos cavaleiros. O rei repeliu muitos inimigos estrangeiros, mas foi incapaz de salvar a Grã-Bretanha. Devido à traição de Mordred, o país foi dividido em dois e o castelo de Camelot perdeu seu brilho. Após derrotar Mordred na Colina de Camlann, Arthur sofreu ferimentos fatais. Antes de seu último suspiro, confiou sua espada a Bedivere e partiu para Avalon, o paraíso utópico além deste reino." },
      ]
    },
    falas: {
      title: "Falas e Diálogos",
      sections: [
        {
          category: "Frases de Bond (Vínculo)",
          content: [
            { label: "Bond Level 1", text: "Esta é a batalha para salvar toda a humanidade. Nossa tarefa é da mais alta importância, Mestre." },
            { label: "Bond Level 2", text: "Por que eu me vestia como homem, você pergunta? Em minha época, apenas homens detinham autoridade real. Eu não poderia proteger nada sendo apenas uma donzela." },
            { label: "Bond Level 3", text: "Mas... sabe? Às vezes eu sonhava com isso. Que tipo de vida eu teria levado se não tivesse tirado a espada do rei da pedra." },
            { label: "Bond Level 4", text: "Você conhece Merlin? Ele é um mago travesso, mas confiável. Estaríamos em uma situação muito melhor com ele ao nosso lado..." },
            { label: "Bond Level 5", text: "Sinto-me confortável com suas instruções. Há uma estranha gentileza nelas. Se minha espada puder lhe ser útil, Mestre, farei tudo o que estiver ao meu alcance para ajudar." },
          ]
        },
        {
          category: "Diálogos e Interações",
          content: [
            { label: "Conversa 1", text: "Indo para a batalha? Então permita-me acompanhá-lo." },
            { label: "Conversa 2", text: "Treinamento todos os dias, Mestre." },
            { label: "Conversa 3", text: "Servos existem para servir seus Mestres, mas espero que possamos trabalhar juntos em boa fé." },
            { label: "Conversa 4 (Gilgamesh)", text: "Formar um contrato com o Rei dos Heróis... Impressionante. Ele... certamente é um Espírito Heróico problemático, mas suas habilidades são inigualáveis. Você se acostumará com ele cedo ou tarde. Bem, eu é que nunca me acostumarei." },
            { label: "Conversa 5 (EMIYA)", text: "O arqueiro de manto vermelho... Lutar ao lado dele traz tanto alegria quanto tristeza. Não importa onde a vida o leve, ele é um Espírito Heróico destinado a lutar para sempre..." },
          ]
        },
        {
          category: "Preferências e Objetivos",
          content: [
            { label: "Gostos", text: "Algo que eu goste... Peço perdão, não consigo pensar em nada no momento." },
            { label: "Desgostos", text: "Não consigo pensar em nada que eu odeie... Que embaraçoso..." },
            { label: "Sobre o Santo Graal", text: "Tenho meus próprios pensamentos sobre a busca pelos Santos Graais, mas isso faz parte do passado. Se algo for maligno, eu mesma devo corrigir o seu caminho." },
            { label: "Durante um Evento", text: "Hmm. Parece que nosso esforço está valendo a pena... Vamos ver onde isso nos leva." },
            { label: "Aniversário", text: "Feliz aniversário, Mestre. Espero que tenha um dia maravilhoso." },
          ]
        },
        {
          category: "Evolução e Ascensão",
          content: [
            { label: "Level up", text: "Um pouco mais forte, entendo." },
            { label: "Ascensão 1", text: "Parece que meu nível aumentou." },
            { label: "Ascensão 2", text: "Vamos crescer juntos." },
            { label: "Ascensão 3", text: "O que acha? Espero estar à altura das suas expectativas." },
            { label: "Ascensão 4", text: "Mesmo que eu retorne a ser um rei, nossos votos não mudarão. Minha espada estará sempre com você. Vamos, Mestre!" },
            { label: "Invocação", text: "Eu lhe pergunto: você é o meu Mestre?" },
          ]
        }
      ]
    }
  }
};
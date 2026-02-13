import fsnBanner from "@/assets/fsn2.png";
import fsn1 from "@/assets/fsn_1.jpg";
import fsn2 from "@/assets/fsn_2.jpg";
import fsn3 from "@/assets/fsn_3.jpg";
import fsn4 from "@/assets/fsn_4.jpg";

import tsukiBanner from "@/assets/tsuki2.jpg";
import tsuki1 from "@/assets/tsuki_1.jpg";
import tsuki2 from "@/assets/tsuki_2.jpg";
import tsuki3 from "@/assets/tsuki_3.jpg";
import tsuki4 from "@/assets/tsuki_4.jpg";

import mahoyoBanner from "@/assets/mahoyo2.jpg";

export const projectsDetails = {
"tsukihime-remake": {
  title: "Tsukihime -A piece of blue glass moon-",
  banner: tsukiBanner,
  synopsis: `"Tsukihime -A piece of blue glass moon-" é o remake da lendária Visual Novel da Type-Moon. A história segue Shiki Tohno, um jovem que, após um acidente de infância, ganha os "Olhos Místicos de Percepção da Morte", permitindo-lhe ver as linhas que conectam todas as coisas à morte.

  Após anos vivendo longe, ele retorna à mansão Tohno e se vê arrastado para um mundo sombrio de vampiros, executores da Igreja e mistérios sobrenaturais, começando com seu encontro fatídico com a misteriosa princesa Arcueid Brunestud.`,
  screenshots: [tsuki1, tsuki2, tsuki3, tsuki4],

  // Status atualizado da barra lateral
  routes: {
    arcueid: [
      { label: "Tradução (Roteiro)", value: 100 },
      { label: "Revisão", value: 100 },
    ],
    ciel: [
      { label: "Tradução (Roteiro)", value: 20 },
      { label: "Revisão", value: 20 },
    ],
  },

  // Ficha Técnica
  technicalInfo: {
    developer: "Type-Moon",
    writer: "Kinoko Nasu",
    art: "Takeuchi Takashi",
    genre: "Visual Novel, Fantasia Urbana",
    releaseYear: "2021"
  },

  // Download e Versão
  downloadAvailable: true,
  downloadUrl: "https://drive.google.com/file/d/1iZ2jCEzitgSuIjZHxLFxLrgLV99DNgDL/view?usp=sharing",
  downloadMessage: "Download (Parcial)",
  version: "Patch Half-Moon (Rota Arcueid)",
  downloads: [
    { label: "Baixar Patch (Switch/Emulador)", url: "https://drive.google.com/file/d/1iZ2jCEzitgSuIjZHxLFxLrgLV99DNgDL/view?usp=sharing", variant: "primary" },
    { label: "Tutorial de Instalação", url: "https://youtu.be/2BMBy7UUgEU", variant: "outline" }
  ],

  // Tabela de Progresso Detalhado
  detailedProgress: [
    {
      section: "Rota Comum / Prólogo",
      colorClass: "bg-[#8C766D]",
      items: [
        { script: "0 / Glass Moon", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão, Hakata" },
        { script: "Prologue", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão" },
        { script: "1 / Morning of Homecoming I", trad: 100, rev: 100, ed: 100, total: 100, resp: "mj-r2, Cão" },
        { script: "2 / Day that Wasn't", trad: 100, rev: 100, ed: 100, total: 100, resp: "mj-r2, Cão" },
        { script: "3 / Inversion Impulse", trad: 100, rev: 100, ed: 100, total: 100, resp: "mj-r2, Cão" },
        { script: "4 / Infernal River of Blood I", trad: 100, rev: 100, ed: 100, total: 100, resp: "mj-r2, Cão" },
      ],
    },
    {
      section: "Rota Arcueid (Moon Princess)",
      colorClass: "bg-[#B48E5D]",
      items: [
        { script: "5 / Infernal River of Blood II", trad: 100, rev: 100, ed: 100, total: 100, resp: "mj-r2" },
        { script: "6 / Cerulean Stigma", trad: 100, rev: 100, ed: 100, total: 100, resp: "Unoxya" },
        { script: "7 / Eyes of Death Perception I", trad: 100, rev: 100, ed: 100, total: 100, resp: "Charity" },
        { script: "8 / Eyes of Death Perception II", trad: 100, rev: 100, ed: 100, total: 100, resp: "Charity, Cão" },
        { script: "9 / Death.", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão" },
        { script: "10 / Blacked Out Moon (Bad End)", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão" },
        { script: "10 / Scarlet Moon of Crimson I", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão" },
        { script: "11 / Scarlet Moon of Crimson II", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão" },
        { script: "12 / Night of Ill-Omen", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão" },
        { script: "13 / The Moon's Surface", trad: 100, rev: 100, ed: 100, total: 100, resp: "mj-r2" },
        { script: "14 / Moon Princess", trad: 100, rev: 100, ed: 100, total: 100, resp: "-" },
      ],
    },
    {
      section: "Rota Ciel (Rainbow in the Night)",
      colorClass: "bg-[#5D7BB4]",
      items: [
        { script: "3 / Inversion Impulse (Ciel)", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão" },
        { script: "4 / Infernal River of Blood I (Ciel)", trad: 100, rev: 100, ed: 100, total: 100, resp: "Cão" },
        { script: "5 / Distant Sea of Frost", trad: 100, rev: 100, ed: 100, total: 100, resp: "mj-r2" },
        { script: "6 / Vermillion Vestiges I", trad: 100, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "7 / Reverse Hatching I", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "8 / Reverse Hatching II", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "9 / L'Arc-en-Ciel I", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "10 / L'Arc-en-Ciel II", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "11 / Epilogue", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "12 / Vermillion Vestiges II", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "13 / Mirage", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "14 / Stone of Eternity", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "15 / Rainbow in the Night", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "15 / Daylight Blue", trad: 0, rev: 0, ed: 0, total: 0, resp: "-" },
        { script: "Teach me, Ciel-sensei!", trad: 30, rev: 0, ed: 0, total: 10, resp: "-" },
      ],
    },
  ],
},

  "fate-stay-night": {
    title: "Fate/stay night REMASTERED",
    banner: fsnBanner,
    synopsis: `"Fate/stay night" é a obra seminal da Type-Moon e a origem de tudo. A história acompanha Shirou Emiya, um    estudante que acaba envolvido na Quinta Guerra do Santo Graal, um ritual mortal onde sete magos invocam Espíritos Heróicos, os Servos, para lutar até a morte pelo desejo que o Graal pode conceder.

        Esta tradução é focada na versão "Remastered" (Realta Nua) em HD, trazendo a experiência definitiva da Visual Novel com a filosofia de adaptação do Fate Café, respeitando a personalidade de cada personagem.`,
    screenshots: [fsn1, fsn2, fsn3, fsn4],
    routes: {
      fate: [
        { label: "Tradução (Roteiro)", value: 80 },
        { label: "Revisão", value: 1 },
        { label: "QC", value: 1 },
      ],
      ubw: [{ label: "Tradução (Roteiro)", value: 0 }],
      hf: [{ label: "Tradução (Roteiro)", value: 0 }],
    },
    downloadAvailable: false,
    downloadUrl: undefined,
    downloadMessage: "Em desenvolvimento",
  },

  "mahou-tsukai-no-yoru": {
    title: "Mahou Tsukai no Yoru",
    banner: mahoyoBanner,
    synopsis: `"Mahou Tsukai no Yoru" (Witch on the Holy Night) é uma aclamada Visual Novel da Type-Moon, escrita por Kinoko Nasu e com arte de Hirokazu Koyama. A história se passa no final dos anos 1980.

    Aoko Aozaki, uma jovem aprendiz de maga, vive em uma antiga mansão com sua reclusa mentora, Alice Kuonji. A vida das duas é virada de cabeça para baixo quando um garoto quieto de sua escola, Soujuurou Shizuki, acidentalmente testemunha o uso de magia. Juntos, os três são arrastados para os mistérios sombrios e conflitos mágicos que cercam a cidade de Misaki.
     `,
    screenshots: [],
    routes: {
      geral: [
        { label: "Tradução (Roteiro)", value: 2 },
        { label: "Revisão", value: 1 },
        { label: "QC", value: 0 },
      ],
    },
    downloadAvailable: false,
    downloadUrl: undefined,
    downloadMessage: "Em desenvolvimento",
  },
};


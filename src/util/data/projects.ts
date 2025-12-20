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

    routes: {
      arcueid: [
        { label: "Tradução (Roteiro)", value: 69 },
        { label: "Revisão", value: 69 },
        { label: "QC", value: 69 },
      ],
      ciel: [
        { label: "Tradução (Roteiro)", value: 29 },
        { label: "Revisão", value: 29 },
        { label: "QC", value: 29 },
      ],
    },

    downloadAvailable: true,
    downloadUrl: undefined,
    downloadMessage: "Versão 1.0 (Beta)",
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

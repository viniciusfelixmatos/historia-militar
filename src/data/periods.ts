// Definindo o tipo para as informações dos períodos
export interface Period {
    name: string;
    imageUrl: string;
    description: string;
  }
  
  export const periods: Period[] = [
    {
      name: 'Guerra Civil Russa',
      imageUrl: '/images/russian-civil-war.jpg',
      description: 'A Guerra Civil Russa (1917-1923) foi um conflito interno entre os bolcheviques, liderados por Lenin, e as forças anti-bolcheviques, incluindo os exércitos do czar e facções regionais. Esse confronto foi crucial para a consolidação do regime soviético, resultando na vitória dos bolcheviques e na formação da União Soviética. O conflito resultou na centralização do poder político no Partido Comunista, na nacionalização de indústrias e na coletivização da agricultura, o que transformou profundamente a estrutura socioeconômica do país.'
    },
    {
      name: 'Primeira Guerra Mundial',
      imageUrl: '/images/ww1.jpg',
      description: 'A Primeira Guerra Mundial (1914-1918) foi um conflito global envolvendo as potências da Tríplice Entente (Reino Unido, França e Rússia) contra as Potências Centrais (Alemanha, Áustria-Hungria, Império Otomano). O conflito resultou em grandes transformações geopolíticas, com o desmantelamento de impérios e a redefinição das fronteiras da Europa e do Oriente Médio. A guerra também foi marcada pela introdução de novas tecnologias militares e pelo impacto devastador nas populações civis e militares.'
    },
    {
      name: 'Segunda Guerra Mundial',
      imageUrl: '/images/ww2.jpg',
      description: 'A Segunda Guerra Mundial (1939-1945) foi um conflito global envolvendo as potências do Eixo (Alemanha, Itália e Japão) contra os Aliados (Reino Unido, União Soviética, Estados Unidos, China, entre outros). A guerra resultou na morte de milhões de pessoas e na destruição de vastas áreas da Europa e do Pacífico. O conflito também levou à criação da Organização das Nações Unidas e à Guerra Fria, com a divisão do mundo entre os blocos liderados pelos Estados Unidos e pela União Soviética.'
    },
  ];
  
  
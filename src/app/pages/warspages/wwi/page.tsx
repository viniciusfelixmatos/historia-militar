// /pages/warspages/wwi/page.tsx
'use client'; // Diretiva para tornar este componente um componente de cliente

import { useRouter } from 'next/navigation';

export default function WWI() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Primeira Guerra Mundial</h1>

        <img
          src="/wars-images/thegreatwar/britanic-troops.jpg"
          alt="Introdução à Primeira Guerra Mundial"
          className="mx-auto rounded-lg shadow-lg border-4 border-gray-800"
        />

        <p className="text-center text-gray-600 text-sm italic mb-6">
          Tropas aliadas marchando durante a Primeira Guerra Mundial.
        </p>

        <p className="text-lg text-gray-700 mb-4 text-justify">
          A Primeira Guerra Mundial (28 de julho de 1914 – 11 de novembro de 1918), também conhecida como a Grande Guerra, 
          foi um conflito global entre duas coalizões: os Aliados (ou Entente) e as Potências Centrais. Os combates 
          ocorreram principalmente na Europa e no Oriente Médio, bem como em partes da África e da região Ásia-Pacífico. 
          Na Europa, o conflito foi caracterizado pela guerra de trincheiras, pelo uso em larga escala de artilharia, 
          metralhadoras, armas químicas (gás) e pela introdução de tanques e aeronaves. A Primeira Guerra Mundial foi 
          um dos conflitos mais mortais da história, resultando em cerca de 10 milhões de mortes militares, mais de 
          20 milhões de feridos e cerca de 10 milhões de mortes de civis, incluindo genocídios. O movimento de grandes 
          populações foi um fator importante na pandemia mortal da gripe espanhola.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          As causas da Primeira Guerra Mundial incluíram a ascensão da Alemanha e o declínio do Império Otomano, o que 
          perturbou o equilíbrio de poder de longa data na Europa, além da competição econômica entre as nações, 
          desencadeada pela industrialização e imperialismo. As tensões crescentes entre as grandes potências e nos 
          Bálcãs chegaram a um ponto de ruptura em 28 de junho de 1914, quando um servo-bósnio chamado Gavrilo Princip 
          assassinou o arquiduque Franz Ferdinand, herdeiro do trono austro-húngaro. A Áustria-Hungria responsabilizou 
          a Sérvia e declarou guerra em 28 de julho. Após a mobilização da Rússia em defesa da Sérvia, a Alemanha 
          declarou guerra à Rússia e à França, que possuíam uma aliança. O Reino Unido entrou na guerra após a invasão 
          da Bélgica pela Alemanha, cuja neutralidade o Reino Unido havia garantido, e os otomanos juntaram-se às Potências 
          Centrais em novembro. A estratégia da Alemanha em 1914 era derrotar rapidamente a França para então transferir 
          suas forças para o leste, mas seu avanço foi interrompido em setembro e, no final do ano, a Frente Ocidental 
          consistia em uma linha contínua de trincheiras que se estendia do Canal da Mancha até a Suíça. A Frente Oriental 
          era mais dinâmica, mas nenhum dos lados conseguiu uma vantagem decisiva, apesar das ofensivas custosas. Itália, 
          Bulgária, Romênia, Grécia e outros países juntaram-se ao conflito a partir de 1915.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          Grandes batalhas, incluindo Verdun, Somme e Passchendaele, falharam em romper o impasse na Frente Ocidental. 
          Em abril de 1917, os Estados Unidos juntaram-se aos Aliados após a Alemanha retomar a guerra submarina irrestrita 
          contra o transporte no Atlântico. Mais tarde naquele ano, os bolcheviques tomaram o poder na Rússia na Revolução 
          de Outubro; a Rússia Soviética assinou um armistício com as Potências Centrais em dezembro, seguido por um tratado 
          de paz separado em março de 1918. Naquele mês, a Alemanha lançou uma ofensiva de primavera no oeste, que, apesar 
          dos sucessos iniciais, deixou o exército alemão exausto e desmoralizado. A ofensiva dos Cem Dias dos Aliados, 
          iniciada em agosto de 1918, causou o colapso da linha de frente alemã. No início de novembro, Bulgária, Império 
          Otomano e Áustria-Hungria assinaram armistícios com os Aliados, deixando a Alemanha isolada. Enfrentando uma 
          revolução em casa, o Kaiser Guilherme II abdicou em 9 de novembro, e a guerra terminou com o Armistício de 
          11 de novembro de 1918.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          A Conferência de Paz de Paris de 1919–1920 impôs acordos às potências derrotadas, mais notavelmente o Tratado 
          de Versalhes, pelo qual a Alemanha perdeu territórios significativos, foi desarmada e foi obrigada a pagar 
          grandes reparações de guerra aos Aliados. A dissolução dos impérios Russo, Alemão, Austro-Húngaro e Otomano 
          redesenhou as fronteiras nacionais e resultou na criação de novos estados independentes, incluindo Polônia, 
          Finlândia, os estados bálticos, Tchecoslováquia e Iugoslávia. A Liga das Nações foi estabelecida para manter 
          a paz mundial, mas seu fracasso em lidar com a instabilidade durante o período entre guerras contribuiu para 
          o início da Segunda Guerra Mundial em 1939.
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">Nomes</h2>

        <p className="text-lg text-gray-700 text-justify">
          Antes da Segunda Guerra Mundial, os eventos de 1914–1918 eram geralmente conhecidos como a Grande Guerra ou 
          simplesmente a Guerra Mundial. Em agosto de 1914, a revista The Independent escreveu: 
          "Esta é a Grande Guerra. Ela se nomeia a si mesma". Em outubro de 1914, a revista canadense 
          Maclean's escreveu de forma semelhante: "Algumas guerras se nomeiam sozinhas. Esta é a Grande Guerra."  
          Os europeus da época também se referiam a ela como "a guerra para acabar com todas as guerras", e ela também foi 
          descrita como "a guerra para acabar com todas as guerras" devido à percepção de sua escala sem precedentes, 
          devastação e perda de vidas. O primeiro uso registrado do termo "Primeira Guerra Mundial" foi em 
          setembro de 1914 pelo biólogo e filósofo alemão Ernst Haeckel, que afirmou: "Não há dúvida de que o curso e o 
          caráter da temida 'Guerra Europeia' ... se tornarão a primeira guerra mundial no pleno sentido da palavra."
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">Contexto</h2>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">Alianças políticas e militares</h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Durante grande parte do século XIX, as principais potências europeias mantiveram um equilíbrio de poder 
          instável, conhecido como o Concerto da Europa. Após 1848, esse equilíbrio foi desafiado pelo isolamento 
          esplêndido do Reino Unido, pelo declínio do Império Otomano, pelo Novo Imperialismo e pela ascensão da 
          Prússia sob Otto von Bismarck. A vitória na Guerra Franco-Prussiana de 1870–1871 permitiu a Bismarck 
          consolidar um Império Alemão. Após 1871, o principal objetivo da política francesa era vingar essa derrota, 
          mas, no início da década de 1890, o foco mudou para a expansão do império colonial francês.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 1873, Bismarck negociou a Liga dos Três Imperadores, que incluía Áustria-Hungria, Rússia e Alemanha. 
          No entanto, após a Guerra Russo-Turca de 1877–1878, a Liga foi dissolvida devido às preocupações austríacas 
          sobre a crescente influência russa nos Bálcãs, uma região de importância estratégica vital. Alemanha e 
          Áustria-Hungria então formaram a Aliança Dual de 1879, que se tornou a Tríplice Aliança quando a Itália 
          aderiu em 1882. Para Bismarck, o objetivo desses acordos era isolar a França, garantindo que os três 
          impérios resolvessem suas disputas entre si. Em 1887, Bismarck estabeleceu o Tratado de Reaseguro, um 
          acordo secreto entre Alemanha e Rússia para manter a neutralidade caso alguma delas fosse atacada pela 
          França ou pela Áustria-Hungria.
        </p>

        <p className="text-lg text-gray-700 text-justify">
          Para Bismarck, a paz com a Rússia era a base da política externa alemã, mas em 1890 ele foi forçado a 
          se aposentar pelo imperador Guilherme II. O novo chanceler, Leo von Caprivi, convenceu Guilherme a não 
          renovar o Tratado de Reaseguro. Isso abriu caminho para que a França firmasse a Aliança Franco-Russa 
          em 1894, seguida pela Entente Cordiale com o Reino Unido em 1904. A Tríplice Entente foi completada com 
          a Convenção Anglo-Russa de 1907. Embora não fossem alianças formais, ao resolver disputas coloniais de 
          longa data na Ásia e na África, o apoio britânico à França ou à Rússia em um futuro conflito tornou-se 
          uma possibilidade. Essa tendência foi reforçada pelo apoio britânico e russo à França contra a Alemanha 
          durante a Crise de Agadir em 1911.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left mt-8">
          Corrida Armamentista
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A força econômica e industrial da Alemanha continuou a expandir rapidamente após 1871. 
          Com o apoio de Guilherme II, o almirante Alfred von Tirpitz procurou usar esse crescimento 
          para construir uma Marinha Imperial Alemã capaz de competir com a Marinha Real Britânica. 
          Essa política foi baseada no trabalho do autor naval dos EUA, Alfred Thayer Mahan, que 
          argumentava que a posse de uma marinha de águas azuis era vital para a projeção de poder global; 
          Tirpitz fez com que os livros de Mahan fossem traduzidos para o alemão, enquanto Guilherme II 
          os tornou leitura obrigatória para seus conselheiros e oficiais militares superiores.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No entanto, foi também uma decisão emocional, impulsionada pela admiração de Guilherme II pela 
          Marinha Real e pelo desejo de superá-la. Bismarck acreditava que os britânicos não interfeririam 
          na Europa, desde que sua supremacia marítima permanecesse segura, mas sua demissão em 1890 
          levou a uma mudança na política, dando início a uma corrida armamentista naval anglo-alemã. 
          Apesar dos vastos recursos gastos por Tirpitz, o lançamento do HMS Dreadnought em 1906 deu aos 
          britânicos uma vantagem tecnológica.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No fim, a corrida desviou grandes recursos para a criação de uma marinha alemã grande o suficiente 
          para antagonizar a Grã-Bretanha, mas não para derrotá-la; em 1911, o chanceler Theobald von 
          Bethmann Hollweg reconheceu a derrota, o que levou à Rüstungswende ou "ponto de inflexão dos 
          armamentos", quando ele redirecionou os gastos da marinha para o exército.
        </p>

        <p className="text-lg text-gray-700 text-justify">
          Essa decisão não foi motivada pela redução das tensões políticas, mas pela preocupação da Alemanha 
          com a rápida recuperação da Rússia após sua derrota na Guerra Russo-Japonesa e a subsequente Revolução 
          Russa de 1905. Reformas econômicas levaram a uma significativa expansão das ferrovias e infraestrutura 
          de transporte após 1908, especialmente nas regiões da fronteira ocidental. Como a Alemanha e a Áustria-Hungria 
          dependiam de uma mobilização mais rápida para compensar sua inferioridade numérica em relação à Rússia, 
          a ameaça representada pelo fechamento dessa lacuna tornou-se mais importante do que competir com a Marinha Real. 
          Após a Alemanha expandir seu exército permanente em 170.000 tropas em 1913, a França estendeu o serviço militar 
          obrigatório de dois para três anos; medidas semelhantes foram tomadas pelas potências dos Bálcãs e pela Itália, 
          o que levou ao aumento dos gastos pelos otomanos e pela Áustria-Hungria. Embora seja difícil calcular números absolutos 
          devido às diferenças na categorização de despesas, já que muitas vezes são omitidos projetos de infraestrutura civil 
          como ferrovias, que tinham importância logística e uso militar, é sabido que, entre 1908 e 1913, os gastos militares 
          das seis principais potências europeias aumentaram mais de 50% em termos reais.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left mt-8">
          Conflitos nos Bálcãs
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os anos antes de 1914 foram marcados por uma série de crises nos Bálcãs, à medida que outras potências tentavam se beneficiar do declínio do Império Otomano. 
          Enquanto a Rússia Pan-eslava e ortodoxa se considerava protetora da Sérvia e de outros estados eslavos, preferiam que o estreito de Bósforo, de vital importância estratégica, 
          fosse controlado por um governo otomano fraco, ao invés de um poder eslavo ambicioso como a Bulgária. 
          A Rússia tinha ambições no nordeste da Anatólia, enquanto seus aliados tinham reivindicações sobrepostas nos Bálcãs. 
          Esses interesses conflitantes dividiram os tomadores de decisão russos e aumentaram a instabilidade regional.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os estadistas austríacos viam os Bálcãs como essenciais para a continuidade do império e consideravam a expansão sérvia como uma ameaça direta. 
          A Crise Bósnia de 1908–1909 começou quando a Áustria anexou o território otomano da Bósnia e Herzegovina, que ocupava desde 1878. 
          Essa ação unilateral coincidiu com a Declaração de Independência da Bulgária do Império Otomano, sendo denunciada pelas potências europeias, mas aceita, já que não havia consenso sobre como resolver a situação. 
          Alguns historiadores consideram isso uma escalada significativa, encerrando qualquer chance de cooperação da Áustria com a Rússia nos Bálcãs, além de prejudicar as relações diplomáticas entre a Sérvia e a Itália.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          As tensões aumentaram após a Guerra Italo-Turca de 1911–1912, que demonstrou a fraqueza do Império Otomano e levou à formação da Liga Balcânica, uma aliança entre Sérvia, Bulgária, Montenegro e Grécia. 
          A Liga rapidamente conquistou a maior parte do território otomano nos Bálcãs durante a Primeira Guerra Balcânica de 1912–1913, surpreendendo observadores externos. 
          A captura de portos no Adriático pela Sérvia resultou em uma mobilização parcial da Áustria, iniciada em 21 de novembro de 1912, incluindo unidades ao longo da fronteira russa na Galícia. 
          O governo russo decidiu não mobilizar em resposta, não estando preparado para precipitar uma guerra.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          As Grandes Potências buscaram reassertar o controle por meio do Tratado de Londres de 1913, que criou uma Albânia independente enquanto ampliava os territórios da Bulgária, Sérvia, Montenegro e Grécia. 
          No entanto, disputas entre os vencedores desencadearam a Segunda Guerra Balcânica, de 33 dias, quando a Bulgária atacou a Sérvia e a Grécia em 16 de junho de 1913; foi derrotada, 
          perdendo a maior parte da Macedônia para a Sérvia e a Grécia, e o sul da Dobruja para a Romênia. O resultado foi que até os países que se beneficiaram das Guerras Balcânicas, 
          como a Sérvia e a Grécia, sentiram-se prejudicados por suas "conquistas legítimas", enquanto para a Áustria isso demonstrou a aparente indiferença com que outras potências viam suas preocupações, incluindo a Alemanha. 
          Essa mistura complexa de ressentimento, nacionalismo e insegurança ajuda a explicar por que os Bálcãs pré-1914 se tornaram conhecidos como o "pólvora da Europa".
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">Contexto</h2>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Assassinato de Sarajevo
        </h3>
        
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 28 de junho de 1914, o Arquiduque Francisco Fernando da Áustria, herdeiro presumido do Imperador Francisco José I da Áustria, 
          visitou Sarajevo, a capital da recentemente anexada Bósnia e Herzegovina. Cvjetko Popović, Gavrilo Princip, Nedeljko Čabrinović, 
          Trifko Grabež, Vaso Čubrilović (sérvios bósnios) e Muhamed Mehmedbašić (da comunidade bósnia), do movimento conhecido como Jovem Bósnia, 
          posicionaram-se ao longo do trajeto do cortejo do Arquiduque para assassiná-lo. Fornecidos com armas por extremistas dentro da organização de inteligência 
          Mão Negra Sérvia, eles esperavam que sua morte libertasse a Bósnia do domínio austríaco.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Čabrinović jogou uma granada no carro do Arquiduque e feriu dois de seus assistentes. Os outros assassinos também não tiveram sucesso. 
          Uma hora depois, quando Ferdinand retornava da visita aos oficiais feridos no hospital, seu carro tomou um rumo errado para uma rua onde Gavrilo Princip estava. 
          Ele disparou dois tiros de pistola, ferindo fatalmente Ferdinand e sua esposa Sophie.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Segundo o historiador Zbyněk Zeman, em Viena "o evento quase não causou nenhuma impressão. Em 28 e 29 de junho, as multidões ouviram música 
          e beberam vinho, como se nada tivesse acontecido." No entanto, o impacto do assassinato do herdeiro ao trono foi significativo, 
          e foi descrito pelo historiador Christopher Clark como um "efeito 9/11, um evento terrorista carregado de significado histórico, 
          transformando a química política em Viena".
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Expansão da violência na Bósnia e Herzegovina
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          As autoridades austro-húngaras encorajaram os subsequentes distúrbios anti-sérvios em Sarajevo. Ações violentas contra sérvios étnicos 
          também foram organizadas fora de Sarajevo, em outras cidades da Bósnia e Herzegovina sob controle austro-húngaro, na Croácia e na Eslovênia. 
          As autoridades austro-húngaras na Bósnia e Herzegovina prenderam cerca de 5.500 sérvios proeminentes, dos quais entre 700 a 2.200 morreram na prisão. 
          Outros 460 sérvios foram sentenciados à morte. Uma milícia especial predominantemente bósnia, conhecida como Schutzkorps, foi estabelecida 
          e executou a perseguição aos sérvios.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Crise de Julho
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          O assassinato iniciou a Crise de Julho, um mês de manobras diplomáticas entre Áustria-Hungria, Alemanha, Rússia, França e Grã-Bretanha. 
          Acreditando que a inteligência sérvia ajudou a organizar o assassinato de Francisco Fernando, os oficiais austríacos queriam usar a oportunidade 
          para terminar com a interferência na Bósnia e viam a guerra como o melhor meio para alcançar isso. No entanto, o Ministério das Relações Exteriores 
          não tinha provas concretas de envolvimento sérvio. Em 23 de julho, a Áustria entregou um ultimato à Sérvia, com dez exigências feitas de forma intencionalmente inaceitável 
          para servir como pretexto para iniciar hostilidades.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Sérvia ordenou mobilização geral em 25 de julho, mas aceitou todos os termos, exceto aqueles que concediam aos representantes austríacos o poder de suprimir "elementos subversivos" 
          dentro da Sérvia e participar da investigação e julgamento dos sérvios ligados ao assassinato. Alegando que isso significava rejeição, a Áustria rompeu relações diplomáticas 
          e ordenou mobilização parcial no dia seguinte; em 28 de julho, declarou guerra à Sérvia e começou a bombardear Belgrado. A Rússia ordenou mobilização geral em apoio à Sérvia em 30 de julho.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Ansioso para garantir apoio da oposição política SPD, apresentando a Rússia como a agressora, o chanceler alemão Bethmann Hollweg adiou o início dos preparativos de guerra até 31 de julho. 
          Naquela tarde, o governo russo recebeu uma nota exigindo que "cessassem todas as medidas de guerra contra a Alemanha e a Áustria-Hungria" dentro de 12 horas. 
          Uma nova exigência alemã por neutralidade foi recusada pelos franceses, que ordenaram mobilização geral, mas atrasaram a declaração de guerra. O Estado-Maior Geral alemão já supunha 
          que enfrentaria uma guerra em dois fronts; o Plano Schlieffen previa usar 80% do exército para derrotar a França, depois mudar para a Rússia. Como isso exigia ação rápida, ordens de mobilização 
          foram emitidas naquela tarde. Quando o ultimato alemão à Rússia expirou na manhã de 1º de agosto, os dois países estavam em guerra.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em uma reunião em 29 de julho, o gabinete britânico decidiu por pouco que suas obrigações com a Bélgica, sob o Tratado de Londres de 1839, 
          não exigiam que se opusessem a uma invasão alemã com força militar; no entanto, o primeiro-ministro Asquith e seus principais ministros de gabinete 
          já estavam comprometidos em apoiar a França, a Marinha Real havia sido mobilizada e a opinião pública estava fortemente a favor da intervenção. 
          Em 31 de julho, a Grã-Bretanha enviou notas à Alemanha e à França, pedindo que respeitassem a neutralidade belga; a França comprometeu-se a fazê-lo, mas a Alemanha não respondeu. 
          Ciente dos planos alemães de atacar pela Bélgica, o comandante-em-chefe francês Joseph Joffre pediu permissão ao governo para atravessar a fronteira e antecipar tal movimento. 
          Para evitar violar a neutralidade belga, foi informado de que qualquer avanço só poderia ocorrer após uma invasão alemã. Em vez disso, o gabinete francês ordenou 
          que seu exército se retirasse 10 km atrás da fronteira alemã, para evitar provocar a guerra. Em 2 de agosto, a Alemanha ocupou Luxemburgo e trocou tiros com unidades francesas 
          quando patrulhas alemãs entraram no território francês; em 3 de agosto, declarou guerra à França e exigiu passagem livre pela Bélgica, o que foi recusado. 
          Na madrugada de 4 de agosto, os alemães invadiram, e Alberto I da Bélgica pediu ajuda sob o Tratado de Londres. A Grã-Bretanha enviou um ultimato à Alemanha 
          exigindo que se retirasse da Bélgica; quando este expirou à meia-noite, sem resposta, os dois impérios estavam em guerra.
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Começo das hostilidades
        </h2>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Confusão entre as Potências Centrais
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A estratégia das Potências Centrais sofreu uma falta de comunicação. O Império Alemão prometeu apoiar a invasão da Sérvia pela Áustria-Hungria, 
          mas as interpretações do que isto significava diferiam. Planos de implantação previamente testados foram substituídos no início de 1914, mas eles nunca 
          foram testados em exercícios. Os líderes austro-húngaros acreditavam que a Alemanha cobriria o seu flanco do norte contra a Rússia. A Alemanha, no entanto, 
          imaginou que a Áustria-Hungria dirigia a maioria de suas tropas contra a Rússia, enquanto a Alemanha lidava com a França. Essa confusão forçou o Exército 
          Austro-Húngaro a dividir suas forças entre as frentes russa e sérvia.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Ainda por cima, o chanceler alemão da época, Bethmann, supostamente acabou por revelar os planos alemães de invadir a Bélgica para a Grã-Bretanha, 
          ao pedir a neutralidade bretã em troca do respeito à independência da Bélgica, na época comandada pelo rei Alberto I.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Campanha sérvia
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Áustria-Hungria invadiu e lutou contra o exército sérvio na Batalha de Cer e na Batalha de Kolubara em 12 de agosto. Durante as duas semanas seguintes, 
          os ataques austro-húngaros tiveram grandes perdas, que marcaram as primeiras vitórias aliadas da guerra e derrubaram as esperanças austro-húngaras de uma 
          vitória rápida. Como resultado, a Áustria-Hungria teve que manter forças consideráveis na frente sérvia, enfraquecendo seus esforços contra a Rússia. 
          A derrota sérvia da invasão austro-húngara de 1914 está entre as maiores vitórias do século XX.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Forças alemãs na Bélgica e na França
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No início da Primeira Guerra Mundial, 80% do exército alemão foi implantado em sete exércitos de campo no oeste, de acordo com o plano Aufmarsch II West. 
          No entanto, eles também foram designados para executar o plano Aufmarsch I West, também conhecido como o Plano Schlieffen. Isto fez com que os exércitos 
          alemães marchassem através do norte da Bélgica e da França, na tentativa de cercar o exército francês e depois violar a "segunda área defensiva" das fortalezas 
          de Verdun e Paris e o rio Marne.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          O Aufmarsch I West era um dos quatro planos de implantação disponíveis para o Estado-Maior alemão em 1914. Cada plano favorecia certas operações, mas não 
          especificava exatamente como estas operações deveriam ser realizadas, deixando aos comandantes a possibilidade de liderá-los por sua própria iniciativa e com 
          uma supervisão mínima. O Aufmarsch I West, projetado para uma guerra de uma frente com a França, havia sido retirado logo que ficou claro que era irrelevante 
          para as guerras que a Alemanha poderia esperar enfrentar; tanto a Rússia quanto o Reino Unido deveriam ajudar a França e não havia possibilidade de disponibilidade 
          de tropas italianas ou austro-húngaras para as operações contra a França. No entanto, apesar da sua inadequação e da disponibilidade de opções mais sensatas e decisivas, 
          manteve um certo fascínio devido à sua natureza ofensiva e ao pessimismo do pensamento anterior à guerra, que esperava que as operações ofensivas fossem de curta duração, 
          com muitas baixas e sem fator decisivo. Consequentemente, a implantação do Aufmarsch II West foi alterada pela ofensiva de 1914, apesar de seus objetivos irrealistas 
          e das forças insuficientes que a Alemanha tinha disponíveis para um sucesso concreto. Moltke tomou o Plano de Schlieffen e modificou a implantação de forças na Frente Ocidental, 
          reduzindo a ala direita, que avançaria pela Bélgica, de 85% para 70%. No final, o Plano Schlieffen foi tão radicalmente modificado por Moltke, que poderia ser melhor chamado de "Plano Moltke".
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          O plano orientava que o flanco direito do avanço alemão contornasse os exércitos franceses concentrados na fronteira franco-alemã, derrotasse as forças francesas 
          próximas de Luxemburgo e Bélgica e se movesse para o sul rumo a Paris. Inicialmente, os alemães tiveram sucesso, especialmente na Batalha das Fronteiras (14 a 24 de agosto). 
          Até o dia 12 de setembro, os franceses, com a ajuda da Força Expedicionária Britânica (BEF), pararam o avanço alemão a leste de Paris na Primeira Batalha do Marne (5–12 de setembro) 
          e empurraram as forças alemãs cerca de cinquenta quilômetros. A ofensiva francesa no sul da Alsácia, lançada em 20 de agosto com a Batalha de Mulhouse, teve sucesso limitado.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No leste, o Império Russo invadiu com dois exércitos. Em resposta, a Alemanha mudou rapidamente o papel de reserva do 8º Exército de Campo para usá-lo na invasão da França 
          da Prússia Oriental por trilhos através do Império Alemão. Este exército, liderado pelo general Paul von Hindenburg, derrotou a Rússia em uma série de batalhas coletivamente conhecidas 
          como a Primeira Batalha de Tannenberg (17 de agosto a 2 de setembro). Enquanto a invasão russa fracassou, causou o desvio das tropas alemãs para o leste, permitindo a vitória aliada 
          na Primeira Batalha do Marne. Isso significava que a Alemanha não conseguiria alcançar seu objetivo de evitar uma longa guerra de duas frentes. No entanto, o exército alemão abriu caminho 
          para uma boa posição defensiva na França e efetivamente reduziu à metade o abastecimento de carvão dos franceses. Também matou ou feriu permanentemente 230 mil soldados franceses e britânicos. 
          Apesar disto, os problemas de comunicação e decisões de comando questionáveis custaram à Alemanha a chance de um resultado mais decisivo.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Ásia e Pacífico
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Nova Zelândia ocupou a Samoa alemã (mais tarde Samoa Ocidental) em 30 de agosto de 1914. Em 11 de setembro, a Força Expedicionária Naval e Militar Australiana 
          pousou na ilha de Neu Pommern (mais tarde Nova Bretanha), que fazia parte da Nova Guiné Alemã. Em 28 de outubro, o cruzador alemão SMS Emden afundou o cruzador russo 
          Zhemchug na Batalha de Penang. O Japão apoderou-se das colônias micronésicas da Alemanha e, após o Cerco de Tsingtao, o porto de carvão alemão de Qingdao na península chinesa 
          de Shandong. Quando Viena se recusou a retirar o cruzador austro-húngaro SMS Kaiserin Elisabeth de Tsingtao, o Japão declarou a guerra não só à Alemanha, mas também à Áustria-Hungria; 
          o navio participou da defesa de Tsingtao, onde foi afundado em novembro de 1914. Dentro de alguns meses, as forças aliadas conquistaram todos os territórios alemães no Pacífico; 
          apenas postos de comércio isolados e algumas resistências permaneceram na Nova Guiné.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Campanhas africanas
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Alguns dos primeiros confrontos da guerra envolveram forças coloniais britânicas, francesas e alemãs na África. Nos dias 6 e 7 de agosto,
          as tropas francesas e britânicas invadiram o protetorado alemão de Togolândia e Kamerun. Em 10 de agosto, as forças alemãs no Sudoeste 
          Africano atacaram a África do Sul; confrontos esporádicos e ferozes aconteceram durante o resto da guerra. As forças coloniais alemãs 
          na África Oriental Alemã, lideradas pelo coronel Paul von Lettow-Vorbeck, lutaram contra uma campanha de guerrilha durante a Primeira Guerra
          Mundial e só se renderam duas semanas depois que o armistício entrou em vigor na Europa.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Apoio Indiano para os aliados
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Alemanha tentou usar o nacionalismo indiano e o pan-islamismo como vantagem. Ela tentou instigar revoltas na Índia britânica e enviou 
          uma missão ao Afeganistão exortando-o a se juntar à guerra ao lado das Potências Centrais. No entanto, contrariamente aos temores 
          britânicos de uma revolta na Índia, o início da guerra viu um surgimento sem precedentes de lealdade e boa vontade em relação à 
          Grã-Bretanha. Os líderes políticos indianos do Partido do Congresso Nacional Indiano e outros grupos estavam ansiosos para 
          apoiar o esforço de guerra britânico, uma vez que acreditavam que um forte apoio estimularia a causa da Liga de Autogoverno de 
          Toda a Índia. O Exército indiano, em geral, superava em número o Exército britânico no início da guerra; cerca de 1,3 milhão 
          de soldados e trabalhadores indianos serviram na Europa, África e Oriente Médio, enquanto o governo central e os Estados 
          principescos enviaram grandes estoques de comida, dinheiro e munições. No total, 140 000 homens serviram na Frente Ocidental e 
          quase 700 000 no Oriente Médio. As mortes de soldados indianos totalizaram 47 746, e 65 126 foram feridos durante a Primeira Guerra Mundial.
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Frente Ocidental
        </h2>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Começo da guerra de trincheiras
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          As táticas militares desenvolvidas antes da Primeira Guerra Mundial não conseguiram acompanhar os avanços na tecnologia e se mostraram 
          obsoletas. Esses avanços permitiram a criação de sistemas defensivos fortes, que táticas militares desatualizadas não podiam romper na maior
          parte da guerra. O arame farpado era um obstáculo significativo para os avanços de infantaria em massa, enquanto a artilharia, muito mais 
          letal do que na década de 1870, juntamente com metralhadoras, tornava extremamente difícil o cruzamento de terreno aberto. Os comandantes 
          de ambos os lados não conseguiram desenvolver táticas para violar posições entrincheiradas sem grandes baixas. Na época, no entanto, a tecnologia
          começou a produzir novas armas ofensivas, como a guerra química e o tanque.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Logo após a Primeira Batalha do Marne (5 a 12 de setembro de 1914), a Tríplice Entente e as forças alemãs tentaram repetidamente manobrar 
          para o norte em um esforço para se libertar; esta série de manobras ficou conhecida como a "Corrida para o Mar". Quando esses esforços de 
          libertação falharam, as forças opostas logo se encontraram diante de uma linha ininterrupta de posições entrincheiradas do Ducado da Lorena 
          até a costa da Bélgica. O Reino Unido e a França procuraram levar a ofensiva, enquanto a Alemanha defendia os territórios ocupados. 
          Consequentemente, as trincheiras alemãs foram muito mais bem construídas do que as de seus inimigos; as trincheiras anglo-francesas só 
          pretendiam ser "temporárias" antes de suas forças romperem as defesas alemãs.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Ambos os lados tentaram quebrar o impasse usando avanços científicos e tecnológicos. Em 22 de abril de 1915, na Segunda Batalha de Ypres, 
          os alemães (violando a Convenção da Haia) usaram gás de cloro pela primeira vez na Frente Ocidental. Vários tipos de gás logo se tornaram 
          amplamente utilizados por ambos os lados e, embora nunca tenha provado ser uma arma decisiva e vencedora de batalhas, o gás venenoso 
          tornou-se um dos mais temidos e mais lembrados horrores da guerra. Os tanques foram desenvolvidos pela Grã-Bretanha e pela França, 
          e foram usados pela primeira vez em combate pelos britânicos durante a Batalha de Flers-Courcelette (parte da Batalha do Somme) em 15 de 
          setembro de 1916, com um sucesso apenas parcial. No entanto, sua eficácia cresceria à medida que a guerra avançava; os aliados construíram 
          tanques em grande número, enquanto os alemães empregavam apenas alguns dos seus próprios projetos, complementados por tanques aliados capturados.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Continuação da guerra de trincheiras
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Nenhum dos lados provou poder dar um golpe decisivo nos dois anos seguintes. Ao longo de 1915–17, o Império Britânico e a França sofreram mais 
          baixas do que a Alemanha, por causa das posições estratégicas e táticas escolhidas pelos lados. Estrategicamente, enquanto os alemães montaram 
          apenas uma grande ofensiva, os Aliados fizeram várias tentativas para romper as linhas alemãs. Em fevereiro de 1916, os alemães atacaram 
          as posições defensivas francesas na região de Verdun, na que ficou conhecida como Batalha de Verdun. Durando até dezembro de 1916, 
          a batalha viu ganhos alemães iniciais, antes que os contra-ataques franceses voltassem para próximo ao ponto de partida. As baixas foram 
          maiores para os franceses, mas os alemães também tiveram muitas, com cerca de 700 000 a 975 000 vítimas sofridas entre os dois 
          combatentes. Verdun tornou-se um símbolo da determinação e do autossacrifício dos franceses.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Batalha do Somme foi uma ofensiva anglo-francesa de julho a novembro de 1916. A abertura desta ofensiva (1 de julho de 1916) fez o 
          exército britânico passar pelo dia mais sangrento de sua história, com 57 470 vítimas, incluindo 19 240 mortos, apenas no primeiro dia. 
          Toda a ofensiva da Somme custou ao exército britânico cerca de 420 mil vítimas. O francês sofreu outras duzentas mil vítimas estimadas 
          e os alemães estimam quinhentas mil.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A ação prolongada em Verdun ao longo de 1916, combinada com o derramamento de sangue em Somme, levou o exausto exército francês à beira 
          do colapso. As inúmeras tentativas de ataque frontal tiveram um preço elevado tanto para os britânicos quanto para os franceses e 
          levaram aos generalizados motins do exército francês, após o fracasso da onerosa Ofensiva Nivelle, de abril a maio de 1917.
          A Batalha de Arras teve alcance mais limitado e foi mais bem-sucedida, embora, em última instância, de pouco valor estratégico.
          Uma parte menor da ofensiva de Arras, a captura de Vimy pelo Corpo Canadense, tornou-se altamente significativa para aquele país: a 
          ideia de que a identidade nacional do Canadá nasceu na batalha é uma opinião amplamente usada em histórias militares e gerais do Canadá.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A última ofensiva em grande escala desse período foi um ataque britânico (com apoio francês) em Passchendaele (julho-novembro de 1917). Essa
          ofensiva abriu-se com grande promessa para os Aliados. As vítimas, embora contestadas, foram aproximadamente iguais, em cerca de 200 000-400 000
          por lado. Estes anos de guerra de trincheiras no Ocidente não viram grandes trocas de território e, como resultado, muitas vezes são 
          classificados como estáticos e imutáveis. No entanto, ao longo deste período, táticas britânicas, francesas e alemãs evoluíram constantemente
          para enfrentar os novos desafios do campo de batalha.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-left">
          Guerra naval
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No início da guerra, o Império Alemão tinha cruzadores espalhados por todo o globo, alguns dos quais posteriormente foram usados ​​para atacar 
          o transporte marítimo aliado. A Marinha Real Britânica caçou-os sistematicamente, embora fosse incapaz de proteger o transporte aéreo 
          aliado. Por exemplo, o cruzador leve alemão SMS Emden, parte do esquadrão da Ásia Oriental, estacionado em Qingdao, apreendeu ou destruiu 
          quinze navios mercantes, além de afundar um cruzador russo e um contratorpedeiro francês. No entanto, a maioria da esquadra alemã da 
          Ásia Oriental — composto pelos cruzadores blindados SMS Scharnhorst e SMS Gneisenau, os cruzadores rápidos SMS Nürnberg e SMS Leipzig e 
          dois navios de transporte — não tinha ordens para atacar embarcações e estava a caminho da Alemanha quando encontrou navios de guerra 
          britânicos. A flotilha alemã e o SMS Dresden afundaram dois cruzadores blindados na Batalha de Coronel, mas foram praticamente destruídos 
          na Batalha das Malvinas em dezembro de 1914, sendo que apenas o Dresden e alguns auxiliares escaparam, mas depois da Batalha de Más a Tierra, 
          estes também foram destruídos.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Logo após o início das hostilidades, o Reino Unido começou um bloqueio naval contra a Alemanha. A estratégia se mostrou efetiva, cortando 
          o suprimento vital militar e civil, embora este bloqueio tenha violado o direito internacional aceito, codificado por vários acordos 
          internacionais dos últimos dois séculos. A Grã-Bretanha minou águas internacionais para impedir que qualquer navio entrasse em 
          partes inteiras do oceano, o que causou perigo até mesmo para navios neutros. Uma vez que houve uma resposta limitada a essa tática 
          dos britânicos, a Alemanha esperava uma resposta semelhante à sua guerra submarina sem restrições.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Batalha da Jutlândia tornou-se a maior batalha naval da guerra. Foi o único choque em grande escala de navios de batalha durante a guerra 
          e um dos maiores da história. A Frota de Alto-Mar da Marinha Imperial Alemã, comandada pelo vice-almirante Reinhard Scheer, lutou contra a 
          Grande Frota da Marinha Real, liderada pelo Almirante Sir John Jellicoe. O ataque foi impedido, já que os alemães eram superados pela 
          frota britânica, mas conseguiram escapar e infligiram mais danos à frota britânica do que receberam. Estrategicamente, no entanto, 
          os britânicos afirmaram seu controle sobre o mar e a maior parte da frota de superfície alemã permaneceu confinada ao porto durante 
          o período da guerra.
        </p>
        
        <p className="text-lg text-gray-700 text-justify mb-4">
          Submarinos U-boots alemães tentaram cortar as linhas de abastecimento entre a América do Norte e o Reino Unido. A natureza da guerra 
          submarina significava que os ataques muitas vezes eram sem aviso prévio, dando às tripulações dos navios mercantes pouca esperança de 
          sobrevivência. Os Estados Unidos lançaram um protesto e a Alemanha mudou suas regras de ataque. Após o naufrágio do navio de 
          passageiros RMS Lusitania em 1915, a Alemanha prometeu não atacar navios de passageiros, enquanto a Grã-Bretanha armava seus navios mercantes, 
          colocando-os além da proteção das "regras do cruzador", que exigiam aviso e movimento de tripulações para "um lugar seguro" 
          (um padrão que os botes salva-vidas não tinham). Finalmente, no início de 1917, a Alemanha adotou uma política de guerra 
          submarina irrestrita, percebendo que os estadunidenses acabariam por entrar na guerra. A Alemanha procurou estrangular 
          as vias marítimas aliadas antes que os Estados Unidos pudessem transportar um grande exército, mas após os sucessos iniciais acabaram não 
          conseguiram fazê-lo.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A ameaça dos U-boots alemães diminuiu em 1917, quando os navios mercantes começaram a viajar em comboios, escoltados por contratorpedeiros. 
          Essa tática dificultou que U-boots encontrassem alvos, o que diminuiu significativamente as perdas; depois que o hidrofone e as cargas 
          de profundidade foram introduzidas, os destróieres que acompanhavam poderiam atacar um submarino submerso com alguma esperança de sucesso. 
          Os comboios diminuíram o fluxo de suprimentos, já que os navios tinham que esperar para que os comboios fossem montados. A solução para os 
          atrasos foi um extenso programa de construção de novos cargueiros. As tropas eram muito rápidas para os submarinos e não viajaram pelo 
          Atlântico Norte em comboios. Os U-boots haviam afundado mais de 5 000 navios aliados, a um custo de 199 submarinos. 
          A Primeira Guerra Mundial também viu o primeiro uso de porta-aviões em combate, com o HMS Furious lançando aviões Sopwith Camels em uma 
          invasão bem-sucedida contra os hangares de zepelins em Tondern em julho de 1918, além de dirigir a patrulha antissubmarina.
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">Guerra nos Balcãs</h2>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Ocupada com o Império Russo a leste, a Áustria-Hungria poderia dispor de apenas um terço do seu exército para atacar a Sérvia. 
          Depois de sofrer grandes perdas, os austríacos ocuparam brevemente a capital sérvia, Belgrado. Um contra-ataque sérvio na Batalha de Kolubara 
          conseguiu tirá-los do país até o final de 1914. Durante os primeiros dez meses de 1915, a Áustria-Hungria usou a maioria de suas reservas militares 
          para lutar contra o Reino da Itália. Os diplomatas alemães e austro-húngaros, no entanto, marcaram um golpe ao persuadir a Bulgária a participar 
          do ataque à Sérvia. As províncias austro-húngaras da Eslovênia, Croácia e Bósnia forneceram tropas para a Áustria-Hungria, na luta com a Sérvia, Rússia e Itália. 
          Montenegro se aliou com a Sérvia.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Bulgária declarou a guerra à Sérvia em 12 de outubro e se juntou ao ataque do exército austro-húngaro sob o exército de 250 mil soldados 
          de August von Mackensen, que já estava em andamento. A Sérvia foi conquistada em pouco mais de um mês, já que as Potências Centrais, 
          agora incluindo a Bulgária, enviaram um total de seiscentos mil soldados. O exército sérvio, lutando em duas frentes e enfrentando uma derrota certa, 
          recuou para o norte da Albânia. Os sérvios sofreram derrota na Batalha do Kosovo. Montenegro cobriu a retirada sérvia em direção à costa do Adriático 
          na Batalha de Mojkovac em 6–7 de janeiro de 1916, mas, finalmente, os austríacos também conquistaram Montenegro. Os soldados sérvios sobreviventes 
          foram evacuados por navio para a Grécia.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Após a conquista, a Sérvia foi dividida entre Áustria-Hungria e Bulgária.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No final de 1915, uma força franco-britânica desembarcou em Salônica, na Grécia, para oferecer assistência e pressionar seu governo a declarar 
          a guerra contra as Potências Centrais. No entanto, o rei pró-alemão, Constantino I, demitiu o governo pró-aliado de Elefthérios Venizélos antes da 
          chegada da força expedicionária dos Aliados. A fricção entre o Rei da Grécia e os Aliados continuou a se acumular com o Cisma Nacional, que efetivamente 
          dividiu a Grécia entre as regiões ainda leais ao rei e o novo governo provisório de Venizélos em Salônica. Após intensas negociações e um confronto 
          armado em Atenas entre forças aliadas e realistas (um incidente conhecido como Noemvriana), o rei da Grécia abdicou e seu segundo filho, Alexandre, 
          tomou seu lugar; a Grécia então se juntou oficialmente à guerra ao lado dos Aliados. No início, a Frente da Macedônia era principalmente estática. 
          As forças francesas e sérvias retomaram áreas limitadas da Macedônia, recuperando Bitola em 19 de novembro de 1916, após a custosa Ofensiva de Monastir, 
          que trouxe a estabilização da frente de batalha.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          As tropas sérvias e francesas finalmente fizeram um avanço em setembro de 1918, depois que a maioria das tropas alemãs e austro-húngaras foram retiradas. 
          Os búlgaros sofreram sua única derrota da guerra na Batalha de Dobro Pole. A Bulgária capitulou duas semanas depois, em 29 de setembro de 1918. 
          O Alto Comando Alemão respondeu enviando tropas para manter a linha, mas estas forças eram muito fracas para restabelecer uma frente.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          O desaparecimento da Frente da Macedônia significava que a estrada para Budapeste e Viena estava agora aberta para as forças aliadas. 
          Paul von Hindenburg e Erich Ludendorff concluíram que o equilíbrio estratégico e operacional agora havia mudado decididamente contra as Potências Centrais 
          e, um dia após o colapso búlgaro, insistiram por um acordo de paz imediato.
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Império Otomano
        </h2>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os otomanos ameaçaram os territórios da Rússia no Cáucaso e as
          comunicações da Grã-Bretanha com a Índia através do Canal de Suez. À
          medida que o conflito progrediu, o Império Otomano aproveitou a
          preocupação das potências europeias com a guerra e conduziu uma limpeza
          étnica em grande escala das populações nativas de armênios, gregos e
          assírios, episódios conhecidos como genocídio armênio, genocídio grego e
          genocídio assírio.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os britânicos e franceses abriram frentes ultramarinas com as campanhas
          de Galípoli (1915) e da Mesopotâmia (1914). Em Galípoli, o Império
          Otomano repeliu com sucesso o corpo de exército britânico, francês e das
          Forças Armadas da Austrália e Nova Zelândia (ANZACs). Na Mesopotâmia, em
          contraste, após a derrota dos defensores britânicos no Cerco de Kut pelos
          otomanos (1915–16), as forças do Império Britânico se reorganizaram e
          capturaram Bagdá em março de 1917. Os britânicos foram auxiliados na
          Mesopotâmia por tribos árabes e assírias locais, enquanto os otomanos
          empregavam tribos locais curdas e turcomanas.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Mais além no oeste, o Canal de Suez foi defendido dos ataques otomanos em
          1915 e 1916; em agosto, uma força alemã e otomana foi derrotada na Batalha
          de Romani pela Divisão Montada ANZAC e pela 52ª Divisão de Infantaria.
          Após esta vitória, uma Força Expedicionária Egípcia avançou através da
          Península do Sinai, empurrando as forças otomanas de volta à Batalha de
          Magdhaba em dezembro e a Batalha de Rafa na fronteira entre o Sinai egípcio
          e a Palestina otomana em janeiro de 1917.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os exércitos russos geralmente tiveram sucesso no Cáucaso. Enver Pasha,
          comandante supremo das forças armadas otomanas, era ambicioso e sonhava em
          reconquistar a Ásia central e áreas que haviam perdido para a Rússia
          anteriormente. Ele era, no entanto, um comandante medíocre. Ele lançou uma
          ofensiva contra os russos no Cáucaso, em dezembro de 1914, com cem mil
          soldados, insistindo em um ataque frontal contra as posições russas
          montanhosas no inverno. Ele perdeu 86% de sua força na Batalha de Sarikamish.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em dezembro de 1914, o Império Otomano, com apoio alemão, invadiu a Pérsia
          (o Irã moderno) em um esforço para cortar o acesso britânico e russo aos
          reservatórios de petróleo em torno de Baku, perto do Mar Cáspio. A Pérsia,
          ostensivamente neutra, esteve por muito tempo sob as esferas da influência
          britânica e russa. Os otomanos e os alemães foram auxiliados pelas forças
          curdas e azeri, juntamente com um grande número de grandes tribos iranianas,
          como qashqais, tangistanis, luros e khamseh, enquanto os russos e os
          britânicos tinham o apoio das forças armênias e assírias. A Campanha Persa
          duraria até 1918 e acabaria em fracasso para os otomanos e seus aliados. No
          entanto, a retirada russa da guerra em 1917 levou as forças armênias e
          assírias, que até então tinham infligido uma série de derrotas sobre as
          forças dos otomanos e seus aliados, a serem impedidas de acessar as linhas
          de suprimento, superadas em número e isoladas, forçando-as a lutar e fugir
          para linhas britânicas no norte da Mesopotâmia.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          O general Nikolai Yudenich, comandante russo de 1915 a 1916, expulsou os
          turcos da maior parte do sul do Cáucaso com uma série de vitórias. Em 1917,
          o grão-duque russo Nicolau Nikolaevich assumiu o comando da frente do Cáucaso.
          Nicolau planejou uma ferrovia da Geórgia Russa aos territórios conquistados,
          de modo que novos suprimentos pudessem ser trazidos para uma nova ofensiva em
          1917. No entanto, em março de 1917 (fevereiro no calendário russo
          pré-revolucionário), o czar abdicou no decorrer da Revolução de Fevereiro e
          o Exército Russo do Cáucaso começou a desmoronar.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Revolta Árabe, instigada pelo escritório árabe do Ministério das Relações
          Exteriores do Reino Unido, começou em junho de 1916 com a Batalha de Meca,
          liderada por Huceine ibne Ali de Meca, e terminou com a rendição otomana de
          Damasco. Fakhri Pasha, o comandante otomano da Medina, resistiu por mais de
          dois anos e meio durante o Cerco de Medina antes de render-se.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A tribo senussi, ao longo da fronteira da Líbia italiana e do Egito
          britânico, incitada e armada pelos turcos, realizou uma guerra de guerrilha
          em pequena escala contra tropas aliadas. Os britânicos foram forçados a
          enviar doze mil soldados para se oporem a eles na Campanha Senussi. Sua
          rebelião foi finalmente esmagada em meados de 1916. O total de vítimas
          aliadas nas frentes otomanas totalizaram 650 mil homens. As perdas totais
          otomanas foram de 725 000 homens (325 000 mortos e 400 000 feridos).
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Participação italiana
        </h2>

        <p className="text-lg text-gray-700 text-justify mb-4">
          O Reino da Itália tinha sido aliado dos impérios Alemão e Austro-Húngaro
          desde 1882 como parte da Tríplice Aliança. No entanto, a nação tinha seus
          próprios projetos no território austríaco em Trento, no Litoral austríaco,
          Fiume (Rijeka) e na Dalmácia. Roma tinha um pacto secreto com a França
          desde 1902, anulando efetivamente a sua parte na Tríplice Aliança.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No início das hostilidades, a Itália se recusou a comprometer tropas,
          argumentando que a Tríplice Aliança era defensiva e que a Áustria-Hungria
          era um agressor. O governo austro-húngaro iniciou negociações para garantir
          a neutralidade italiana, oferecendo a colônia francesa da Tunísia em
          troca. Os Aliados fizeram uma contraoferta em que a Itália receberia o
          Tirol do Sul, o Litoral austríaco e território austríaco na costa da
          Dalmácia após a derrota da Áustria-Hungria. Isso foi formalizado pelo
          Tratado de Londres. Encorajada ainda mais pela invasão aliada da Turquia em
          abril de 1915, a Itália ingressou na Tríplice Entente e declarou guerra à
          Áustria-Hungria em 23 de maio. Quinze meses depois, a Itália declarou guerra
          à Alemanha.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os italianos tinham superioridade numérica, mas essa vantagem foi perdida,
          não só por causa do difícil terreno em que ocorreu a luta, mas também pelas
          estratégias e táticas empregadas. O marechal de campo Luigi Cadorna, um
          firme defensor do ataque frontal, tinha o sonho de entrar no planalto
          esloveno, levando Ljubljana e ameaçando Viena. Na frente do Trentino, os
          austro-húngaros aproveitaram o terreno montanhoso, que favorecia o defensor.
          Depois de um recuo estratégico inicial, a frente permaneceu praticamente
          inalterada, enquanto os austríacos Kaiserschützen e Standschützen se
          envolveram em um áspero combate corpo a corpo com o Alpini italiano durante
          todo o verão. Os austro-húngaros contra-atacaram no Altopiano de Asiago, em
          direção a Verona e Pádua, na primavera de 1916 (Strafexpedition), mas
          fizeram poucos progressos.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 1915, os italianos, sob o comando de Cadorna, montaram onze ofensivas na
          frente de Isonzo ao longo do rio Isonzo (Soča), a nordeste de Trieste. Todas
          foram repelidas pelos austro-húngaros, que ocuparam o terreno mais alto. No
          verão de 1916, após a Batalha de Doberdò, os italianos capturaram a cidade
          de Gorizia. Após essa pequena vitória, a frente permaneceu estática por mais
          de um ano, apesar de várias ofensivas italianas, centradas no planalto de
          Banjšice e Karst, a leste de Gorizia.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          As Potências Centrais lançaram uma ofensiva esmagadora em 26 de outubro de
          1917, liderada pelos alemães. Eles alcançaram uma vitória na Batalha de
          Caporetto (Kobarid). O exército italiano foi redirecionado e recuou mais de
          100 quilômetros para se reorganizar, estabilizando-se no rio Piave. Como o
          exército italiano tinha sofrido grandes perdas na Batalha de Caporetto, o
          governo italiano convocou os chamados "Meninos de 99" (Ragazzi del '99): isto
          é, todos os homens nascidos em 1899 ou antes, e assim tinham 18 anos ou mais.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 1918, os austro-húngaros não conseguiram romper em uma série de batalhas
          no Piave e foram finalmente derrotados decisivamente na Batalha de Vittorio
          Veneto em outubro daquele ano. Em 1 de novembro, a Marinha italiana destruiu
          grande parte da frota austro-húngara estacionada em Pula, impedindo que fosse
          entregue ao novo Estado dos Eslovenos, Croatas e Sérvios. Em 3 de novembro, os
          italianos invadiram Trieste pelo mar. No mesmo dia, o Armistício de Villa
          Giusti foi assinado. Em meados de novembro de 1918, os militares italianos
          ocuparam todo o antigo Litoral austríaco e tomaram o controle da porção da
          Dalmácia garantida à Itália pelo Pacto de Londres.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No final das hostilidades em novembro de 1918, o Almirante Enrico Millo se
          declarou o Governador da Dalmácia da Itália. A Áustria-Hungria se rendeu em
          11 de novembro de 1918.
        </p>
      </section>
      
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Participação romena
        </h2>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Romênia tinha sido aliada das Potências Centrais desde 1882. Quando a
          guerra começou, no entanto, declarou sua neutralidade, argumentando que,
          como a Áustria-Hungria havia declarado guerra à Sérvia, a Romênia não tinha
          obrigação de se juntar à guerra. Quando as potências da Entente prometeram a
          Transilvânia e o Banato para a Romênia, grandes territórios do leste da
          Hungria, em troca de uma declaração de guerra da Romênia contra as Potências
          Centrais, o governo romeno renunciou à sua neutralidade.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 27 de agosto de 1916, o exército romeno lançou um ataque contra a
          Áustria-Hungria, com apoio russo limitado. A ofensiva romena foi
          inicialmente bem-sucedida contra as tropas austro-húngaras na Transilvânia,
          mas um contra-ataque das forças das Potências Centrais a levou de volta. Como
          resultado da Batalha de Bucareste, as Potências Centrais ocuparam Bucareste em
          6 de dezembro de 1916. Os combates na Moldávia continuaram em 1917, resultando
          em um impasse custoso para as Potências Centrais. A retirada russa da guerra no
          final de 1917, como resultado da Revolução de Outubro, significou que a
          Romênia foi obrigada a assinar um armistício com as Potências Centrais, o que
          aconteceu em 9 de dezembro de 1917.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em janeiro de 1918, as forças romenas estabeleceram o controle sobre a
          Bessarábia quando o exército russo abandonou a província. Embora um tratado
          tenha sido assinado pelos governos romeno e russo-bolchevique após negociações
          de 5 a 9 de março de 1918 sobre a retirada das forças romenas da Bessarábia em
          dois meses, em 27 de março de 1918, a Romênia anexou a Bessarábia ao seu
          território, formalmente com base em uma resolução aprovada pela assembleia
          local desse território por sua unificação com a Romênia.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Romênia fez um acordo de paz oficial com as Potências Centrais ao assinar o
          Tratado de Bucareste em 7 de maio de 1918. Sob esse tratado, a Romênia foi
          obrigada a acabar a guerra com as Potências Centrais e fazer pequenas
          concessões territoriais à Áustria-Hungria, cedendo o controle de algumas
          passagens nas montanhas dos Cárpatos e concedendo concessões de petróleo à
          Alemanha. Em troca, as Potências Centrais reconheceram a soberania da Romênia
          sobre a Bessarábia. O tratado foi repudiado em outubro de 1918 pelo governo de
          Alexandru Marghiloman e a Romênia reiniciou nominalmente a guerra em 10 de
          novembro de 1918. No dia seguinte, o Tratado de Bucareste foi anulado pelos
          termos do Armistício de Compiègne.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          As mortes romenas totais de 1914 a 1918, entre militares e civis, dentro das
          fronteiras contemporâneas, foram estimadas em 748 mil.
        </p>
      </section>
      
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Frente Oriental
        </h2>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Ações iniciais
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Enquanto a Frente Ocidental alcançou um impasse, a guerra continuou no leste
          da Europa. Os planos iniciais russos exigiam invasões simultâneas da Galícia
          Austríaca e da Prússia Oriental. Embora o avanço inicial da Rússia na Galícia
          tenha sido amplamente bem-sucedido, ela foi levada de volta da Prússia Oriental
          por Hindenburg e Ludendorff na Batalha de Tannenberg e na Primeira Batalha dos
          Lagos Masurianos em agosto e setembro de 1914. A base industrial menos
          desenvolvida da Rússia e a ineficiente liderança militar foram fundamentais nos
          eventos que se desenrolaram. Na primavera de 1915, os russos recuaram para a
          Galícia e, em maio, as Potências Centrais alcançaram um avanço notável nas
          fronteiras do sul da Polônia. Em 5 de agosto, elas capturaram Varsóvia e forçaram
          os russos a se retirarem da Polônia.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Revolução Russa
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Apesar do sucesso da Rússia com a Ofensiva Brusilov de junho de 1916 no leste
          da Galícia, a insatisfação com a condução da guerra pelo governo russo cresceu.
          O sucesso da ofensiva foi prejudicado pela relutância de outros generais em
          comprometer suas forças para apoiar a vitória. As forças aliadas e russas foram
          revividas apenas temporariamente pela entrada da Romênia na guerra em 27 de agosto.
          As forças alemãs vieram em auxílio de unidades austro-húngaras em disputa na
          Transilvânia, enquanto uma força alemã-búlgara atacava do sul e Bucareste era
          retomada pelas Forças Centrais em 6 de dezembro. Enquanto isso, a agitação crescia
          na Rússia com a permanência do czar na frente. O governo cada vez mais incompetente
          da Imperatriz Alexandra desencadeou protestos e resultou no assassinato de seu
          favorito, Rasputin, no final de 1916. Em março de 1917, manifestações em Petrogrado
          culminaram com a abdicação de czar Nicolau II e a nomeação de um fraco Governo
          Provisório, que compartilhou o poder com os socialistas do Soviete de Petrogrado.
          Este arranjo levou a confusão e caos à frente de batalha e na própria Rússia. O
          exército tornou-se cada vez mais ineficaz.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Após a abdicação do czar, Vladimir Lênin foi levado de trem da Suíça para a
          Rússia em 16 de abril de 1917. Ele foi financiado por Jacob Schiff. O descontentamento
          e as fraquezas do Governo Provisório levaram a um aumento da popularidade do Partido
          Bolchevique, liderado por Lênin, que exigia o fim imediato da guerra. A Revolução de
          Novembro foi seguida em dezembro por um armistício e negociações com a Alemanha.
          Inicialmente, os bolcheviques recusaram os termos alemães, mas quando as tropas
          alemãs começaram a marchar pela Ucrânia sem oposição (Operação Faustschlag), o
          novo governo russo aderiu ao Tratado de Brest-Litovsk em 3 de março de 1918. O tratado
          cedeu vastos territórios, incluindo a Finlândia, as províncias do Báltico, partes da
          Polônia e da Ucrânia para as Potências Centrais. Apesar deste enorme e aparente sucesso
          alemão, a mão de obra necessária para a ocupação alemã do antigo território russo pode
          ter contribuído para o fracasso da Ofensiva da Primavera e garantido relativamente pouca
          comida e outros suprimentos para o esforço de guerra das Potências Centrais.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Com a adoção do Tratado de Brest-Litovsk, a Entente já não existia. Os poderes
          aliados realizaram uma invasão em pequena escala da Rússia, em parte para impedir a
          Alemanha de explorar os recursos russos e, em menor grau, para apoiar os "brancos"
          (em oposição aos "vermelhos") na Guerra Civil Russa. As tropas aliadas chegaram em
          Arkhangelsk e em Vladivostok como parte da intervenção na Campanha do Norte da Rússia.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Legião Checoslovaca
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Legião Checoslovaca lutou junto com a Entente; seu objetivo era ganhar apoio
          para a independência da Tchecoslováquia. A Legião na Rússia foi criada em setembro
          de 1914, em dezembro de 1917 na França (incluindo voluntários da América) e em
          abril de 1918 na Itália. As tropas da Legião da Checoslováquia derrotaram o Exército
          Austro-Húngaro na vila ucraniana de Zborov em julho de 1917. Após esse sucesso, o
          número de legionários checoslovacos aumentou, assim como o poder militar checoslovaco.
          Na Batalha de Bakhmach, a Legião derrotou os alemães e forçou-os a fazer uma trégua.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Na Rússia, eles estavam fortemente envolvidos na Guerra Civil Russa, em parceria
          com os brancos contra os bolcheviques, às vezes controlando a maioria da Ferrovia
          Transiberiana e conquistando todas as principais cidades da Sibéria. A presença da
          Legião Checoslovaca perto de Ecaterimburgo parece ter sido uma das motivações para a
          execução do czar e de sua família pelos bolcheviques em julho de 1918. Os legionários
          chegaram menos de uma semana depois e capturaram a cidade. Como os portos europeus da
          Rússia não estavam seguros, o corpo foi evacuado por um longo desvio através do porto
          de Vladivostok. O último transporte foi o navio estadunidense Heffron em setembro de 1920.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Forças de paz das potências centrais
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em dezembro de 1916, depois de dez meses brutais da Batalha de Verdun e uma
          ofensiva bem-sucedida contra a Romênia, os alemães tentaram negociar uma paz com
          os Aliados. Logo depois, o então presidente dos Estados Unidos, Woodrow Wilson,
          tentou intervir como um pacificador, pedindo que ambos os lados declarassem suas
          demandas. O Gabinete de Guerra de Lloyd George considerou a oferta alemã como um
          estratagema para criar divisões entre os Aliados. Após a indignação inicial e muita
          deliberação, eles tomaram a nota de Wilson como um esforço separado, sinalizando que
          os Estados Unidos estavam prestes a entrar na guerra contra a Alemanha após os
          "ultrajes submarinos".
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Enquanto os Aliados debatiam uma resposta à oferta de Wilson, os alemães optaram
          por rejeitar isto em favor de "uma troca direta de pontos de vista". Ao saber sobre
          a resposta alemã, os governos aliados ficaram livres para fazer suas respectivas
          demandas como resposta em 14 de janeiro. Requereram restauração de danos, evacuação
          de territórios ocupados, reparações para a França, Rússia e Romênia, e reconhecimento
          do princípio das nacionalidades. Isso incluía a libertação de italianos, eslavos,
          romenos, checoslovacos e a criação de uma "Polônia livre e unida". Sobre a questão
          da segurança, os Aliados procuraram obter garantias que impedissem ou limitassem
          futuras guerras, com sanções, como condição para qualquer acordo de paz.
        </p>
      </section>
      
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          1917–1918
        </h2>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os acontecimentos de 1917 mostraram-se decisivos para acabar com a guerra,
          embora os seus efeitos não fossem plenamente sentidos até 1918. O bloqueio
          naval britânico começou a ter um sério impacto na Alemanha. Em resposta, em
          fevereiro de 1917, o Estado-Maior Alemão convenceu o chanceler Theobald von
          Bethmann-Hollweg a declarar a guerra submarina irrestrita, com o objetivo de
          fazer a Grã-Bretanha sair da guerra. Os planejadores alemães estimaram que
          a guerra submarina sem restrições custaria à Grã-Bretanha uma perda mensal de
          transporte de 600 mil toneladas.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          O Estado-Maior Geral reconheceu que a política quase certamente levaria os
          Estados Unidos a entrar no conflito, mas calculou que as perdas de frete
          britânicas seriam tão altas que seriam forçadas a negociar a paz após cinco
          a seis meses, antes que a intervenção estadunidense pudesse causar um impacto.
          Na realidade, a tonelagem subiu acima de 500 000 toneladas por mês de fevereiro
          a julho. Atingiu 860 mil toneladas em abril. Após julho, o sistema de escolta
          recém-reintroduzido tornou-se efetivo na redução da ameaça dos submarinos. O
          Reino Unido estava a salvo da fome, enquanto a produção industrial alemã caiu
          e os Estados Unidos se juntaram à guerra muito antes do que a Alemanha havia
          antecipado.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Motins no Exército Francês
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 3 de maio de 1917, durante a Ofensiva Nivelle, na Divisão Colonial Francesa,
          veteranos da Batalha de Verdun recusaram ordens, chegaram bêbados e sem armas.
          Seus oficiais não possuíam meios para punir uma divisão inteira e medidas
          severas não foram imediatamente implementadas. Os motins do exército francês
          acabaram por se espalhar para mais 54 divisões francesas e causaram a deserção
          de vinte mil homens. No entanto, os apelos ao patriotismo e ao dever, bem como
          as prisões e julgamentos em massa, encorajaram os soldados a voltarem a defender
          suas trincheiras, embora os soldados franceses se recusassem a participar de mais
          ações ofensivas.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Conferência de Rapallo e Armistício com a Rússia
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A vitória das Potências Centrais na Batalha de Caporetto levou os Aliados a convocar
          a Conferência de Rapallo, na qual formaram o Conselho da Suprema Guerra para coordenar
          o planejamento. Anteriormente, os exércitos britânico e francês haviam operado sob
          comandos separados. Em dezembro, as Potências Centrais assinaram um armistício com
          a Rússia, liberando assim um grande número de tropas alemãs para uso no oeste. Com
          reforços alemães e novas tropas estadunidenses entrando, o resultado foi decidido
          na Frente Ocidental. As Potências Centrais sabiam que não podiam vencer uma guerra
          prolongada, mas esperavam muito sucesso com base em uma ofensiva rápida final.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Tentativas de Paz Secreta
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 1917, o imperador Carlos I da Áustria tentou secretamente negociações de paz
          separadas com Clemenceau, através do irmão de sua esposa, Sixto de Bourbon-Parma,
          que atuou como intermediário, sem o conhecimento da Alemanha. A Itália se opôs
          às propostas. Quando as negociações falharam, sua tentativa foi revelada à Alemanha,
          resultando em uma catástrofe diplomática.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Conflito do Império Otomano, 1917–1918
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em março e abril de 1917, na Primeira e Segunda Batalha de Gaza, as forças alemãs
          e otomanas impediram o avanço da Força Expedicionária Egípcia, que começou em
          agosto de 1916 na Batalha de Romani. No final de outubro, a Campanha do Sinai e
          Palestina foi retomada, quando o XX Corpo, o XXI Corpo e o Corpo montado no deserto
          do general Edmund Allenby ganharam a Batalha de Beersheba. Dois exércitos otomanos
          foram derrotados algumas semanas depois na Batalha de Mughar Ridge e, no início de
          dezembro, Jerusalém foi capturada após uma outra derrota otomana na Batalha de Jerusalém.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 1918, a linha de frente foi estendida e o Vale do Jordão foi ocupado, seguindo
          o primeiro e o segundo ataque transjordano pelas forças do Império Britânico em
          março e abril de 1918. Em setembro de 1918, a Força Expedicionária Egípcia reorganizada,
          com o apoio de unidades indianas, quebrou as forças otomanas na Batalha de Megido,
          conquistando uma série de cidades importantes e derrotando o Império Otomano de forma
          decisiva. O Armistício de Mudros, assinado no final de outubro, encerrou as hostilidades
          com o Império Otomano, quando os combates continuaram no norte de Alepo.
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Entrada dos Estados Unidos
        </h2>

        <p className="text-lg text-gray-700 text-justify mb-4">
          No início da guerra, os Estados Unidos prosseguiram uma política de não intervenção, evitando
          conflitos enquanto tentavam negociar uma paz. Quando o U-boot alemão U-20 afundou o navio
          britânico RMS Lusitania em 7 de maio de 1915 com 128 estadunidenses entre os mortos, o presidente
          Woodrow Wilson insistiu que "a América está muito orgulhosa por lutar", mas exigiu o fim dos ataques
          aos navios de passageiros. A Alemanha cumpriu. Wilson tentou então, sem sucesso, mediar um acordo. No
          entanto, ele também advertiu repetidamente que os Estados Unidos não tolerariam a guerra submarina
          irrestrita, em violação do direito internacional. O ex-presidente Theodore Roosevelt denunciou os
          atos alemães como "pirataria".
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Em janeiro de 1917, a Alemanha retomou a guerra submarina sem restrições, percebendo que significaria
          a entrada estadunidense na guerra. O ministro das Relações Exteriores do Império Alemão, Arthur Zimmermann,
          convidou o México para se juntar à guerra como aliado da Alemanha contra os Estados Unidos no que ficou
          conhecido como "Telegrama Zimmermann". Em contrapartida, os alemães financiariam o esforço de guerra do México
          e o ajudariam a recuperar os territórios do Texas, do Novo México e do Arizona. O Reino Unido interceptou a
          mensagem e apresentou-a à embaixada dos Estados Unidos em Londres, o que abriu o caminho para o presidente
          Wilson divulgar o Telegrama Zimmermann ao público e os estadunidenses viram isso como casus belli.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Wilson pedia elementos antiguerra para acabar com todos os conflitos, ao ganhar esta guerra e eliminar o
          militarismo do globo. Ele argumentou que a guerra era tão importante que os Estados Unidos tinham que ter
          uma voz na conferência de paz. Após o naufrágio de sete navios mercantes dos Estados Unidos por submarinos
          e a publicação do Telegrama Zimmermann, Wilson pediu por uma guerra contra a Alemanha, o que o Congresso
          dos Estados Unidos declarou em 6 de abril de 1917.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os Estados Unidos nunca foram formalmente um membro dos Aliados, mas se tornaram uma autodenominada
          "Potência Associada". Os Estados Unidos tinham um pequeno exército, mas, após a aprovação do Ato do Serviço
          Seletivo, reuniu 2,8 milhões de homens e, no verão de 1918, enviava 10 mil novos soldados para a França todos
          os dias. Em 1917, o Congresso dos Estados Unidos concedeu a cidadania aos porto-riquenhos para permitir
          que eles fossem convocados para participar da Primeira Guerra Mundial, como parte da Lei Jones-Shafroth.
          A Alemanha acreditava que levaria muitos meses antes que os soldados estadunidenses chegassem e que a
          chegada deles poderia ser interrompida pelos U-boots, o que foi um erro de cálculo estratégico.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Marinha dos Estados Unidos enviou um grupo de navios de guerra para o Scapa Flow para se juntar à
          Grande Frota Britânica, destróieres de Queenstown, na Irlanda, e submarinos para ajudar na escolta
          dos navios. Vários regimentos de Marines também foram enviados para a França. Os britânicos e
          franceses queriam que as unidades estadunidenses reforçassem as suas tropas já nas linhas de batalha
          e não desperdiçassem o transporte escasso para trazer provisões. O general John J. Pershing,
          comandante das Forças Expedicionárias Americanas (AEF), recusou-se a separar as unidades estadunidenses
          para serem usadas como material de enchimento. Como uma exceção, ele permitiu que regimentos de combate
          afro-americanos fossem usados nas divisões francesas. 
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Os Harlem Hellfighters lutaram como parte da 16.ª Divisão francesa e ganharam uma Cruz de Guerra por
          suas ações em Château-Thierry, Belleau Wood e Sechault. A doutrina do AEF pedia o uso de assaltos
          frontais, o que há muito tempo tinha sido descartado pelo Império Britânico e pelos comandantes
          franceses devido à grande perda de vidas que este método resultava.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-left">
          Ofensiva alemã na primavera de 1918
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Ludendorff elaborou planos (sob o codinome Operação Michael) para a ofensiva de 1918 na Frente Ocidental. A Ofensiva da Primavera 
          procurou dividir as forças britânicas e francesas com uma série de fendas e avanços. A liderança alemã esperava acabar com a guerra 
          antes que grandes forças estadunidenses chegassem. A operação começou em 21 de março de 1918, com um ataque às forças britânicas perto 
          de Saint-Quentin. As forças alemãs alcançaram um avanço sem precedentes de sessenta quilômetros.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          As trincheiras britânicas e francesas foram penetradas usando novas táticas de infiltração, também chamadas de táticas Hutier, em 
          homenagem ao general Oskar von Hutier, por unidades especialmente treinadas chamadas stosstruppen. Anteriormente, os ataques eram 
          caracterizados por longos bombardeios de artilharia e assaltos em massa. No entanto, na Ofensiva da Primavera de 1918, Ludendorff 
          usou a artilharia apenas brevemente e infiltrou pequenos grupos de infantaria em pontos fracos das linhas inimigas. Eles atacaram 
          áreas de comando e logística e contornaram pontos de resistência séria. A infantaria armada, em seguida, destruiu essas posições isoladas. 
          Este sucesso alemão baseou-se muito no elemento surpresa.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A frente moveu-se por 120 quilômetros rumo a Paris. Três grandes canhões ferroviários Krupp dispararam 183 bombas na capital francesa, 
          fazendo com que muitos parisienses fugissem. A ofensiva inicial foi tão bem sucedida que o Kaiser Guilherme II declarou 24 de março um 
          feriado nacional. Muitos alemães achavam que a vitória estava próxima. Após uma forte luta, no entanto, a ofensiva foi interrompida. 
          Faltando tanques ou artilharia motorizada, os alemães não conseguiram consolidar seus ganhos. Os problemas de reabastecimento também 
          foram exacerbados por distâncias crescentes que agora se espalhavam em terrenos rasgados de bombas e muitas vezes intransitáveis.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O general Ferdinand Foch pressionou para usar as tropas estadunidenses que chegavam como substituições individuais, enquanto John J. 
          Pershing queria enquadrar as unidades dos EUA como uma força independente. Estas unidades foram atribuídas aos comandos do Reino Unido 
          e do Império Britânico em 28 de março. Um Conselho da Guerra Suprema das Forças Aliadas foi criado na Conferência de Doullens em 5 de 
          novembro de 1917. O general Foch foi nomeado Comandante Supremo das Forças Aliadas. Douglas Haig, Philippe Pétain e Pershing mantiveram o 
          controle tático de seus respectivos exércitos; Foch assumiu um papel de coordenação e não de direção, e os comandos britânico, francês e 
          estadunidense operavam, em grande medida, de forma independente.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Após a Operação Michael, a Alemanha lançou a Operação Georgette contra os portos do norte do Canal da Mancha. Os Aliados interromperam 
          a campanha após ganhos territoriais limitados pela Alemanha. O exército alemão para o sul conduziu as Operações Blücher e Yorck, chegando 
          próximo a Paris. A Alemanha lançou a Operação Marne (Segunda Batalha do Marne) em 15 de julho, na tentativa de cercar Reims. O contra-ataque 
          resultante, que iniciou a Ofensiva dos Cem Dias, marcou a primeira ofensiva aliada bem-sucedida da guerra. Até 20 de julho, os alemães se 
          retiraram em toda Marne até suas linhas iniciais, tendo conseguido pouco, e o Exército alemão nunca recuperou a iniciativa.
        </p>
        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-left">
          Novos estados em zona de guerra
        </h3>
        <p className="text-lg text-gray-700 text-justify mb-4">
          No final da primavera de 1918, três novos Estados foram formados na Transcaucásia: a Primeira República da Armênia, a República Democrática 
          do Azerbaijão e a República Democrática da Geórgia, que declarou sua independência do Império Russo. Foram estabelecidas duas outras entidades 
          menores, a Ditadura do Cáspio Central e a Governo Interino Nacional do Sudoeste do Cáucaso (a primeira foi destruída pelo Azerbaijão no outono 
          de 1918 e a última por uma força armada armênio-britânica no início de 1919). Com a retirada dos exércitos russos da frente do Cáucaso no 
          inverno de 1917–18, as três principais repúblicas prepararam-se para um iminente avanço otomano, que começou nos primeiros meses de 1918. 
          A solidariedade foi mantida brevemente quando a República Democrática Federativa Transcaucasiana foi criada na primavera de 1918, 
          mas entrou em colapso em maio, quando os georgianos pediram e receberam proteção da Alemanha e os azerbaijanos concluíram um tratado com o 
          Império Otomano, interpretado mais com uma aliança militar do que um tratado diplomático. A Armênia foi deixada para defender-se sozinha e 
          lutou por cinco meses contra a ameaça de uma ocupação de pleno direito pelos otomanos antes de derrotá-los na Batalha de Sardarabad.
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">

        <h3 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Vitória dos aliados: verão de 1918 em diante
        </h3>

        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-left">
          Ofensiva dos Cem Dias
        </h3>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A contraofensiva aliada, conhecida como Ofensiva dos Cem Dias, começou em 8 de agosto de 1918, com a Batalha de Amiens, que envolveu mais 
          de quatrocentos tanques e 120 mil tropas britânicas, dominicanas e francesas e, no final de seu primeiro dia, havia sido criado um espaço 
          de 24 quilômetros de comprimento nas linhas alemãs. Os defensores mostraram um colapso marcado da moral, fazendo com que Ludendorff se 
          referisse a este dia como o "Dia Negro do exército alemão". Em vez de continuar a Batalha de Amiens após o sucesso inicial, como 
          já havia sido feito tantas vezes no passado, os Aliados deslocaram sua atenção para outro lugar. Os líderes aliados já tinham percebido 
          que continuar um ataque depois que a resistência se endurecesse era um desperdício de vidas e era melhor mover as tropas do que tentar 
          penetrar a linha inimiga. Eles começaram a realizar ataques em ordem rápida para aproveitar os avanços bem-sucedidos nos flancos e depois 
          os quebravam quando cada ataque perdia seu ímpeto inicial.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          As forças britânicas lançaram a próxima fase da campanha com a Batalha de Albert em 21 de agosto. O ataque foi ampliado pelos franceses
          e depois por outras forças britânicas nos dias seguintes. Durante a última semana de agosto, a pressão aliada ao longo de uma frente de 110 
          quilômetros contra o inimigo era pesada e implacável. Das contas alemãs, "cada dia foi gasto em lutas sangrentas contra um inimigo cada vez 
          maior e as noites passavam sem dormir em retiradas para novas linhas". Diante desses avanços, em 2 de setembro, o Comando do Exército 
          Supremo Alemão emitiu ordens para retirar-se para a linha Hindenburg no sul. Isso se deu sem uma luta. De acordo com Ludendorff: "Tivemos 
          que admitir a necessidade ... retirar toda a frente do Scarpe para a Vesle.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em setembro os Aliados avançaram para a linha Hindenburg no norte e no centro. Os alemães continuaram a lutar contra fortes ações de 
          retaguarda e lançaram inúmeros contra-ataques em posições perdidas, mas apenas alguns tiveram sucesso temporário. As cidades, vilarejos 
          e trincheiras nas posições de postos avançados da linha Hindenburg continuaram a cair para os Aliados, sendo que a Força Expedicionária 
          Britânica sozinha levou 30 441 presos na última semana de setembro. Em 24 de setembro, um ataque britânico e francês chegou
          a 3 quilômetros de St. Quentin.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 8 de agosto, em quase quatro semanas de combates, mais de cem mil prisioneiros alemães foram levados. A partir daquele que foi considerado 
          "O Dia Negro do Exército Alemão", o Alto Comando alemão percebeu que a guerra estava perdida e tentou atingir um final satisfatório. No dia 
          seguinte a essa batalha, Ludendorff disse: "Não podemos mais vencer a guerra, mas também não devemos perder." Em 11 de agosto, ele ofereceu 
          sua renúncia ao Kaiser, que recusou, respondendo: "Vejo que devemos equilibrar. Chegamos ao limite de nossos poderes de resistência. A guerra 
          deve ser encerrada". Em 13 de agosto, em Spa, Hindenburg, Ludendorff, o chanceler e o ministro dos Negócios Estrangeiros, Johannes Hintz, 
          concordaram que a guerra não poderia ser encerrada militarmente e, no dia seguinte, o Conselho da Coroa Alemã decidiu que a vitória no campo 
          agora era improvável. A Áustria e a Hungria advertiram que só poderiam continuar a guerra até dezembro e Ludendorff recomendou negociações 
          imediatas de paz. Ruperto, Príncipe Herdeiro da Baviera advertiu o Príncipe Max de Baden: "Nossa situação militar se deteriorou tão rapidamente 
          que não acredito mais que podemos aguentar durante o inverno, e até mesmo que uma catástrofe venha mais cedo". Em 10 de setembro, Hindenburg 
          pediu a paz para o imperador Carlos da Áustria e a Alemanha apelou para os Países Baixos fazer a mediação. Em 14 de setembro, a Áustria enviou 
          uma nota a todos os beligerantes e neutros sugerindo uma reunião para conversas de paz em solo neutro e, em 15 de setembro, a Alemanha fez uma 
          oferta de paz para a Bélgica. Ambas as ofertas de paz foram rejeitadas e, em 24 de setembro, o Supremo Comando do Exército informou os líderes 
          em Berlim que as negociações de um armistício eram inevitáveis.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O ataque final à linha de Hindenburg começou com a Ofensiva Meuse-Argonne, lançada pelas tropas francesas e estadunidenses em 26 de setembro. 
          Na semana seguinte, as unidades francesas e estadunidenses cooperaram em Champanhe na Batalha de Mont Blanc, forçando os alemães a dominar as 
          montanhas próximo da fronteira belga. Em 8 de outubro, a linha foi novamente perfurada pelas tropas britânicas na Batalha de Cambrai.
          O exército alemão teve que encurtar sua frente e usar a fronteira neerlandesa como uma âncora para lutar contra as ações da retaguarda, já que 
          caiu para a Alemanha. Quando a Bulgária assinou um armistício separado em 29 de setembro, Ludendorff, tendo estado sob grande estresse 
          por meses, sofreu algo semelhante a um derrame. Era evidente que a Alemanha não poderia mais montar uma defesa de sucesso.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A notícia da iminente derrota militar do Império Alemão se espalhou por todas as forças armadas alemãs. A ameaça de motins era evidente. O 
          Almirante Reinhard Scheer e Ludendorff decidiram lançar uma última tentativa de restaurar o "valor" da Marinha alemã. Sabendo que o governo 
          do Príncipe Maximiliano de Baden iria vetar qualquer ação, Ludendorff decidiu não informá-lo. No entanto, a informação do ataque iminente 
          chegou aos marinheiros em Kiel. Muitos, recusando-se a fazer parte de uma ofensiva naval, que eles acreditavam ser suicida, se rebelaram e 
          foram presos. Ludendorff tomou a culpa e o Kaiser o demitiu no dia 26 de outubro. O colapso dos Balcãs significava que a Alemanha estava 
          prestes a perder seus principais suprimentos de petróleo e alimentos. Suas reservas foram usadas, mesmo quando as tropas dos Estados Unidos 
          continuavam chegando à taxa de dez mil soldados por dia. Os estadunidenses forneceram mais de 80% do petróleo aliado durante a guerra e 
          não houve escassez.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Com os militares vacilantes e com ampla perda de confiança no Kaiser, a Alemanha se movia para se render. O príncipe Maximiliano de Baden 
          assumiu o comando de um novo governo como Chanceler da Alemanha para negociar com os Aliados. As negociações com o presidente Woodrow Wilson 
          começaram imediatamente, com a esperança de que ele oferecesse melhores condições do que os britânicos e franceses. Wilson exigiu uma monarquia 
          constitucional e controle parlamentar sobre as forças armadas alemãs. Não houve resistência quando o social-democrata Philipp Scheidemann, 
          em 9 de novembro, declarou a Alemanha como uma república. O Kaiser, os reis e outros governantes hereditários foram removidos do poder e 
          Guilherme fugiu para o exílio nos Países Baixos. A Alemanha imperial estava morta; uma nova Alemanha nascia sob o nome de República de Weimar.
        </p>
        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-left">
          Armistícios e rendições
        </h3>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O colapso dos Impérios Centrais veio rapidamente. A Bulgária foi a primeira a assinar um armistício, em 29 de setembro de 1918, em 
          Saloniki. Em 30 de outubro, o Império Otomano rendeu-se, assinando o Armistício de Mudros.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 24 de outubro, os italianos começaram uma ofensiva que rapidamente recuperou território perdido após a Batalha de Caporetto. Isto culminou 
          na Batalha de Vittorio Veneto, que marcou o fim do Exército Austro-Húngaro como uma força de combate efetiva. A ofensiva também desencadeou a 
          desintegração do Império Austro-Húngaro. Durante a última semana de outubro, foram feitas declarações de independência em Budapeste, Praga e 
          Zagrebe. Em 29 de outubro, as autoridades imperiais pediram um armistício à Itália, mas os italianos continuaram avançando, chegando a Trento, 
          Udine e Trieste. Em 3 de novembro, a Áustria-Hungria enviou uma bandeira de trégua para solicitar um armistício (Armistício de Villa Giusti). 
          Os termos, organizados por telégrafo com as autoridades Aliadas em Paris, foram comunicados ao comandante austríaco e aceitos. O armistício com 
          a Áustria foi assinado na Villa Giusti, perto de Pádua, em 3 de novembro. A Áustria e a Hungria assinaram armistícios separados após o queda da 
          Monarquia Habsburgo.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 11 de novembro, às 5h da manhã, um armistício com a Alemanha foi assinado em um vagão de trem em Compiègne. Às 11 horas do dia 11 de novembro 
          de 1918 — "às 11 horas do 11.º dia do 11.º mês" — entrou em vigor um cessar-fogo. Durante as seis horas entre a assinatura do armistício e a sua 
          entrada em vigor, os exércitos opostos na Frente Ocidental começaram a se retirar de suas posições, mas os combates continuaram em muitas áreas 
          da frente, já que os comandantes queriam capturar o território antes que a guerra terminasse. A ocupação da Renânia ocorreu após o armistício. 
          Os exércitos da ocupação Aliada da Renânia consistiam em forças estadunidenses, belgas, britânicas e francesas.
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Consequências
        </h3>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Efeitos socioeconômicos
        </h3>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Nenhuma outra guerra mudou o mapa da Europa de forma tão dramática. Quatro impérios desapareceram após o fim do conflito: o Alemão, o 
          Austro-Húngaro, o Otomano e o Russo. Quatro dinastias, juntamente com as aristocracias que as apoiavam, caíram após a guerra: os Hohenzollern, 
          os Habsburgos, os Romanov e os Otomanos. Países como a Bélgica e a Sérvia passaram por destruições severas, assim como a França, que 
          perdeu 1,4 milhão de soldados, sem contar as vítimas civis. A Alemanha e Rússia foram igualmente afetadas.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A guerra teve consequências econômicas profundas. Dos sessenta milhões de soldados europeus que foram mobilizados entre os anos de 1914 e 1918, 
          oito milhões foram mortos, sete milhões foram incapacitados de maneira permanente e quinze milhões ficaram gravemente feridos. Morreram 6 
          milhões de civis durante a guerra. A Alemanha perdeu 15,1% de sua população masculina ativa, a Áustria-Hungria perdeu 17,1% e a 
          França perdeu 10,5%.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na Alemanha, as mortes de civis foram 474 mil mais elevadas do que em tempo de paz, em grande parte devido à escassez de alimentos e 
          desnutrição que enfraqueceu a resistência às doenças. As cláusulas da rendição do Império Alemão também impuseram um acréscimo na dívida 
          do país como indenização de guerra. Até o final da guerra, a fome matou cerca de cem mil pessoas no Líbano. As estimativas mais 
          confiáveis sobre o número de vítimas da fome russa de 1921, apontam a morte de entre 5 e 10 milhões de pessoas. Por volta de 1922, 
          havia entre 4,5 milhões e 7 milhões de crianças de rua na Rússia, como resultado de quase uma década de devastações causadas pela Primeira 
          Guerra Mundial, pela Guerra Civil Russa e pela crise de fome subsequente, entre 1920 e 1922. Muitos russos antissoviéticos fugiram do 
          país após a Revolução Russa de 1917; na década de 1930, a cidade chinesa de Harbin, no norte do país, recebeu cem mil russos. Outros 
          milhares emigraram para a França, Reino Unido e Estados Unidos. Os Estados Unidos enfrentaram um surto de inflação causado pelo aumento de 
          gastos públicos que começaram com a entrada na guerra e se encerrou apenas em 1919.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na Austrália, os efeitos da guerra sobre a economia não foram menos graves. O então primeiro-ministro australiano, Billy Hughes, escreveu ao 
          primeiro-ministro britânico da época, Lloyd George, dizendo: "Você tem que nos assegurar que não pode obter melhores condições. Eu muito me 
          arrependo e espero, mesmo agora, que alguma forma possa ser encontrada para garantir um acordo para exigir uma reparação compatível com os 
          tremendos sacrifícios feitos pelo Império Britânico e por seus aliados". A Austrália recebeu 5 571 720 de libras esterlinas como forma 
          de reparar os danos causados pela guerra, mas o custo direto da guerra para os australianos tinha sido de 376 993 052 libras esterlinas e, 
          em meados da década de 1930, as pensões de repatriação, gratificações de guerra, juros e encargos de naufrágio eram de 831 280 947 libras. 
          Dos cerca de 416 mil australianos que lutaram na guerra, cerca de sessenta mil foram mortos e outros 152 mil ficaram feridos.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Doenças floresceram nas condições caóticas da guerra. Apenas em 1914, piolhos infectados pelo tifo epidêmico mataram duzentas mil pessoas na 
          Sérvia. Entre 1918 e 1922, a Rússia tinha cerca de 25 milhões de infecções e três milhões de mortes por tifo. Considerando que antes 
          da Primeira Guerra Mundial a Rússia registrava cerca de 3,5 milhões de casos de malária, após o conflito seu povo sofreu com mais de treze 
          milhões de casos em 1923. Além disso, a grande epidemia de gripe em 1918 se espalhou pelo mundo. No geral, a pandemia de gripe espanhola 
          matou ao menos cinquenta milhões de pessoas. O lobby feito por Chaim Weizmann e o medo de que os judeus estadunidenses incentivassem 
          os Estados Unidos a apoiar a Alemanha culminaram na Declaração Balfour de 1917, feita pelo governo britânico e que endossava a criação de uma 
          pátria judaica na Palestina. Um total de mais de 1 172 000 soldados judeus serviram nas forças Aliadas e nas forças dos Impérios Centrais 
          na Primeira Guerra Mundial, incluindo 275 mil na Áustria-Hungria e 450 mil na Rússia czarista.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A desorganização social e a violência generalizada da Revolução Russa de 1917 e da Guerra Civil Russa que se seguiu provocaram mais de 2 000 
          pogroms no antigo Império Russo, principalmente na Ucrânia. Estima-se que entre sessenta mil e duzentos mil judeus civis foram mortos nas 
          atrocidades.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          No rescaldo da Primeira Guerra Mundial, a Grécia lutou contra nacionalistas turcos liderados por Mustafa Kemal, uma guerra que resultou em uma 
          enorme troca populacional entre os dois países no âmbito do Tratado de Lausanne. De acordo com várias fontes, várias centenas de milhares 
          de gregos pônticos morreram durante este período (ver genocídio grego).
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Tratados de paz e fronteiras nacionais
        </h3>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Após a guerra, a Conferência de Paz de Paris, em 1919, impôs uma série de tratados de paz às Potências Centrais, terminando oficialmente 
          com a guerra. O Tratado de Versalhes de 1919 lidou com a Alemanha e, com base nos Quatorze Pontos do então presidente estadunidense, 
          Woodrow Wilson, trouxe à existência a Liga das Nações em 28 de junho de 1919.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Ao assinar o tratado, a Alemanha reconheceu "toda a perda e danos a que os Aliados, os governos associados e seus nacionais foram submetidos 
          como consequência da guerra imposta sobre eles pelas agressões da Alemanha e de seus aliados". Esta cláusula também foi inserida mutatis 
          mutandis para os tratados assinados pelos outros membros das Potências Centrais. Esta cláusula mais tarde se tornou conhecida, para os alemães, 
          como a cláusula de culpa da guerra. Os tratados da Conferência de Paz de Paris também impuseram às nações derrotadas que pagassem reparações 
          aos vencedores. O Tratado de Versalhes causou um enorme sentimento de amargura no povo alemão, que os movimentos nacionalistas, especialmente 
          os nazistas, exploraram com uma teoria de conspiração que chamaram de Dolchstoßlegende ("Lenda da punhalada pelas costas"). A inflação 
          galopante na década de 1920 que foi causada pela frustração nos gastos militares contribuiu para o colapso econômico da República de Weimar 
          e o pagamento de indenizações foi suspenso em 1931, após a Quebra do Mercado de Ações de 1929 e o início do período que posteriormente ficou 
          conhecido como Grande Depressão em todo o mundo.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A Áustria-Hungria foi dividida em vários Estados sucessores (como a Áustria, a Hungria, a Tchecoslováquia e a Iugoslávia), que foram em grande 
          parte, mas não totalmente, definidos por grupos étnicos. A Transilvânia foi transferida da Hungria para a Romênia Maior. Os detalhes foram 
          contidos no Tratado de Saint-Germain-en-Laye e no Tratado de Trianon. Como resultado do tratado, 3,3 milhões de húngaros ficaram sob domínio 
          estrangeiro. Apesar de 54% da população do Reino da Hungria ter sido composta por húngaros no período pré-guerra, apenas 32% de seu território 
          foi deixado para a Hungria. Entre 1920 e 1924, 354 mil húngaros fugiram de antigos territórios húngaros ligados à Romênia, Tchecoslováquia e 
          Iugoslávia.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O Império Russo, que havia se retirado da guerra em 1917, após a Revolução de Outubro, perdeu grande parte de sua fronteira ocidental e as 
          nações recém-independentes da Estônia, Finlândia, Letônia, Lituânia e Polônia foram esculpidas a partir dela. A Bessarábia foi reanexada à 
          Romênia Maior, uma vez que tinha sido um território romeno por mais de mil anos.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O Império Otomano se desintegrou e muito do seu território fora da Anatólia foi tomado por várias potências aliadas como protetorados. 
          O núcleo turco foi reorganizado como a República da Turquia. O Império Otomano deveria ter sido dividido pelo Tratado de Sèvres, em 1920, 
          mas este tratado nunca foi ratificado pelo sultão e foi rejeitado pelo Movimento Nacional Turco, levando à guerra de independência turca e, 
          finalmente, ao Tratado de Lausanne, em 1923.
        </p>

      </section>

      <button
        onClick={() => window.history.back()} // Voltar para a página anterior
        className="fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-md shadow-md text-sm hover:bg-blue-700 transition"
      >
        Voltar
      </button>

      
    </div>
  );
}

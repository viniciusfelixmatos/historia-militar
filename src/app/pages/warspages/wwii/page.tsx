'use client'; // Diretiva para tornar este componente um componente de cliente

import { useRouter } from 'next/navigation';

export default function WWII() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Segunda Guerra Mundial
        </h1>

        <img
          src="/placeholders/segunda-guerra.jpg"
          alt="Segunda Guerra Mundial"
          className="w-3/4 h-auto object-contain mx-auto rounded-lg mb-4 border-2 border-gray-300"
        />

        <p className="text-lg text-gray-700 text-justify mb-4">
          A Segunda Guerra Mundial foi um conflito militar global que durou de
          1939 a 1945, envolvendo a maioria das nações do mundo — incluindo todas
          as grandes potências — organizadas em duas alianças militares opostas:
          os Aliados e o Eixo. Foi a guerra mais abrangente da história, com mais
          de 100 milhões de militares mobilizados. Em estado de "guerra total", os
          principais envolvidos dedicaram toda sua capacidade econômica, industrial
          e científica a serviço dos esforços de guerra, deixando de lado a distinção
          entre recursos civis e militares. Marcado por um número significante de ataques
          contra civis, incluindo o Holocausto e a única vez em que armas nucleares foram
          utilizadas em combate, foi o conflito mais letal da história da humanidade, que
          resultou na morte de 50-70 milhões de pessoas.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          Geralmente considera-se o ponto inicial da guerra como sendo a invasão da
          Polônia pela Alemanha Nazista em 1 de setembro de 1939 e subsequentes declarações
          de guerra contra a Alemanha pela França e pela maioria dos países do Império
          Britânico e da Commonwealth. Alguns países já estavam em guerra nesta época,
          como Etiópia e Reino de Itália na Segunda Guerra Ítalo-Etíope e China e Japão
          na Segunda Guerra Sino-Japonesa. Muitos dos que não se envolveram inicialmente
          acabaram aderindo ao conflito em resposta a eventos como a invasão da União
          Soviética pelos alemães e os ataques japoneses contra as forças dos Estados
          Unidos no Pacífico em Pearl Harbor e em colônias ultra marítimas britânicas,
          que resultaram em declarações de guerra contra o Japão pelos Estados Unidos,
          Países Baixos e o Commonwealth Britânico.
        </p>

        <p className="text-lg text-gray-700 text-justify mb-4">
          A guerra terminou com a vitória dos Aliados em 1945, alterando significativamente
          o alinhamento político e a estrutura social mundial. Enquanto a Organização das
          Nações Unidas (ONU) era estabelecida para estimular a cooperação global e evitar
          futuros conflitos, a União Soviética e os Estados Unidos emergiam como superpotências
          rivais, preparando o terreno para uma Guerra Fria que se estenderia pelos quarenta e
          seis anos seguintes (1945–1991). Nesse ínterim, a aceitação do princípio de autodeterminação
          acelerou movimentos de descolonização na Ásia e na África, enquanto a Europa ocidental dava
          início a um movimento de recuperação econômica e integração política.
        </p>
      </section>
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Cronologia
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O primeiro dia de setembro de 1939 é geralmente considerado o início da guerra, com a invasão alemã da Polônia; o Reino Unido e a França 
          declararam guerra à Alemanha nazista dois dias depois. Outras datas para o início da guerra incluem o início da Segunda Guerra Sino-Japonesa, 
          em 7 de julho de 1937.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Outros seguem o historiador britânico A. J. P. Taylor, que considerava que a Guerra Sino-Japonesa e a guerra na Europa e em suas colônias 
          ocorreram de forma simultânea e posteriormente se fundiram em 1941. Este verbete utiliza a data convencional. Outras datas por vezes 
          utilizadas para o início da Segunda Guerra Mundial incluem a invasão italiana da Abissínia em 3 de outubro de 1935. O historiador 
          britânico Antony Beevor vê o início da Segunda Guerra Mundial nas batalhas de Khalkhin Gol, travadas entre o Império do Japão e a 
          União Soviética de maio a setembro de 1939.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Também não existe consenso quanto à data exata do fim da guerra. Tem sido sugerido que a guerra terminou no armistício de 14 de agosto de 
          1945 (Dia V-J), ao invés da rendição formal do Japão em 2 de setembro de 1945; alguns apontam o fim da guerra no dia 8 de maio de 1945 
          (Dia V-E). No entanto, o tratado de paz com o Japão não foi assinado até 1951, enquanto o acordo de paz com a Alemanha não foi ratificado 
          até 1990.
        </p>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Antecedentes
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A Primeira Guerra Mundial alterou radicalmente o mapa geopolítico da Europa, com a derrota dos Impérios Centrais (Áustria-Hungria, Alemanha e 
          Império Otomano) e a tomada do poder pelos bolcheviques em 1917 na Rússia. Os aliados vitoriosos, como França, Bélgica, Itália, Grécia e 
          Romênia ganharam territórios, enquanto novos Estados foram criados a partir do colapso da Áustria-Hungria e dos impérios russo e otomano. 
          Apesar do movimento pacifista após o fim da guerra, as perdas causaram um nacionalismo irredentista e revanchista em vários 
          países europeus. O irredentismo e revanchismo eram fortes na Alemanha por causa das significativas perdas territoriais, coloniais e 
          financeiras incorridas pelo Tratado de Versalhes. Pelo tratado, a Alemanha perdeu cerca de 13% do seu território e todas as suas colônias 
          ultramarinas, foi proibida de anexar outros Estados, teve que pagar indenizações e sofreu limitações quanto ao tamanho e a 
          capacidade das suas forças armadas. Enquanto isso, a Guerra Civil Russa levava à criação da União Soviética.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O Império Alemão foi dissolvido durante a Revolução Alemã de 1918–1919 e um governo democrático, mais tarde conhecido como República 
          de Weimar, foi criado. O período entreguerras foi marcado pelo conflito entre os partidários da nova república e de opositores radicais, 
          tanto de direita quanto de esquerda. Embora a Itália como aliado Entente tenha feito alguns ganhos territoriais, os nacionalistas do 
          país ficaram irritados com as promessas feitas pelo Reino Unido e França para garantir a entrada italiana na guerra, que não foram 
          cumpridas com o acordo de paz. De 1922 a 1925, o movimento fascista, liderado por Benito Mussolini, tomou o poder na Itália 
          com uma agenda nacionalista, totalitária e de colaboração de classes, que aboliu a democracia representativa, reprimiu os 
          socialistas, a esquerda e as forças liberais, e seguiu uma política externa agressiva destinada a forjar, através da força, 
          o país como uma potência mundial — um "Novo Império Romano".
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Adolf Hitler, depois de uma tentativa fracassada de derrubar o governo alemão em 1923, tornou-se o chanceler da 
          Alemanha em 1933. Ele aboliu a democracia, defendendo uma revisão radical e racista da ordem mundial, e logo começou uma 
          campanha de rearmamento massivo do país. Enquanto isso, a França, para assegurar a sua aliança, permitiu que a Itália 
          agisse livremente na Etiópia, país que o governo italiano desejava como uma posse colonial. A situação se agravou no início 
          de 1935, quando o Território da Bacia do Sarre foi legalmente anexado à Alemanha e Hitler repudiou o Tratado de Versalhes, 
          acelerando seu programa de rearmamento e recrutamento. Na Alemanha, o partido nazista, liderado por Adolf Hitler, 
          procurou estabelecer um Estado nazista no país. Com o início da Grande Depressão, o apoio doméstico aos nazistas 
          fortaleceu-se e, em 1933, Hitler foi nomeado chanceler da Alemanha. Após o incêndio no Palácio do Reichstag, Hitler 
          conseguiu criar um governo unipartidário e totalitário liderado pelos nazistas.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na China, o partido Kuomintang (KMT) lançou uma campanha de unificação contra os líderes militares regionais 
          (os chamados senhores da guerra da China) e o país unificou-se em meados de 1920, mas logo viu-se envolvido em 
          uma guerra civil contra seus antigos aliados comunistas. Em 1931, o cada vez mais militarista Império Japonês, 
          começou a buscar influência na China como sendo o primeiro passo visto pelo governo para obter o direito do país 
          em governar a Ásia como afirmava o slogan político Hakkō ichiu ("todos sobre o mesmo teto"). Os japoneses usaram o 
          incidente de Mukden como pretexto para lançar uma invasão da Manchúria e estabelecer o Estado fantoche de Manchukuo.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Muito fraca para resistir ao Japão, a China apelou à Liga das Nações por ajuda. O Japão retirou-se desta organização 
          internacional após ser condenado por sua incursão na Manchúria. As duas nações passaram a enfrentar-se em várias batalhas, 
          em Xangai, Rehe e Hebei, até a Trégua de Tanggu ser assinada em 1933. Depois disso, forças voluntárias chinesas continuaram 
          a resistência à agressão japonesa na Manchúria, Chahar e Suiyuan.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na esperança de conter a Alemanha, o Reino Unido, a França e a Itália formaram a Frente de Stresa. A União Soviética, 
          preocupada com os objetivos da Alemanha de ocupar vastas áreas do leste da Europa, escreveu um tratado de assistência 
          mútua com a França. Antes de tomar efeito, porém, o pacto franco-soviético foi obrigado a passar pela burocracia da Liga 
          das Nações, que o tornou essencialmente sem poder. No entanto, em junho de 1935, o Reino Unido fez um acordo naval 
          independente com a Alemanha, flexibilizando as restrições anteriores. Os Estados Unidos, preocupados com os acontecimentos 
          na Europa e na Ásia, aprovaram a Lei de Neutralidade em agosto. Em outubro, a Itália invadiu a Etiópia e a Alemanha 
          foi o único grande país europeu que apoiou essa invasão. O governo italiano posteriormente abandonou as suas objeções com 
          relação às metas da Alemanha de dominar a Áustria.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Hitler desafiou os tratados de Versalhes e de Locarno com a remilitarização da Renânia, em março de 1936. Ele 
          recebeu pouca resposta de outras potências europeias. Quando a Guerra Civil Espanhola começou em julho, Hitler e 
          Mussolini apoiaram as forças nacionalistas fascistas e autoritárias em guerra civil contra a República Espanhola, esta 
          última era apoiada pela União Soviética. Os dois lados usaram o conflito para testar novas armas e métodos de guerra, 
          tendo os nacionalistas como vencedores no início de 1939. Em outubro de 1936, Alemanha e Itália formaram o Eixo Roma-Berlim. 
          Um mês depois, a Alemanha e o Japão assinaram o Pacto Anticomintern, com a adesão da Itália no ano seguinte. Na China, após o 
          incidente de Xi’an o Kuomintang e as forças comunistas concordaram com um cessar-fogo, com o objetivo de apresentar uma frente 
          unida para se opor à invasão japonesa.
        </p>
      </section>
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Eventos pré-guerra
        </h2>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Invasão italiana da Etiópia (1935)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A Segunda Guerra Ítalo-Etíope foi uma breve guerra colonial, que começou em outubro de 1935 e terminou em maio de 1936. A guerra 
          foi travada entre as forças armadas do Reino da Itália (Regno d'Italia) e as forças armadas do Império Etíope 
          (também conhecido como Abissínia). A guerra resultou na ocupação militar da Etiópia e na sua anexação à recém-criada colônia da África 
          Oriental Italiana (Africa Orientale Italiana ou AOI); além disso, expôs a fraqueza da Liga das Nações como uma força de manutenção da paz. 
          Tanto a Itália quanto a Etiópia eram países membros da organização, mas a Liga não fez nada quando a guerra claramente violou o seu Décimo 
          Artigo da Convenção.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Guerra Civil Espanhola (1936-1939)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
         A Alemanha e a Itália deram apoio à insurreição nacionalista liderada pelo general Francisco Franco na Espanha. 
         A União Soviética apoiou o governo existente, a República Espanhola, que apresentava tendências esquerdistas. 
         Ambos os lados usaram a guerra como uma oportunidade para testar armas e táticas melhores. O bombardeio de Guernica, 
         uma cidade que tinha entre 5 000 e 7 000 habitantes, foi considerado um ataque terrível, na época, e usado como uma 
         propaganda amplamente difundida no Ocidente, levando a acusações de "atentado terrorista" e de que 1 654 pessoas tinham 
         morrido no bombardeio. Na realidade, o ataque foi uma operação tática contra uma cidade com importantes comunicações 
         militares próximas à linha de frente e as estimativas modernas não rendem mais de 300-–400 mortos no fim do ataque.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Invasão japonesa da China (1937)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em julho de 1937, o Japão ocupou Pequim, a antiga capital imperial chinesa, depois de instigar o incidente da 
          Ponte Marco Polo, que culminou com a campanha japonesa para invadir toda a China. Os soviéticos rapidamente 
          assinaram um pacto de não agressão com a China para emprestar material de suporte, acabando com cooperação 
          prévia da China com a Alemanha (ver: Cooperação Sino-Germânica de 1911 a 1941). O Generalíssimo Chiang Kai-shek 
          usou o seu melhor exército para defender Xangai, mas depois de três meses de luta, a cidade caiu. 
          Os japoneses continuaram a empurrar as forças chinesas para trás, capturando a capital, Nanquim, em 
          dezembro de 1937 e cometendo o chamado "Massacre de Nanquim".
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em junho de 1938, as forças chinesas paralisaram o avanço japonês através da criação de enchentes no rio Amarelo; 
          esta manobra comprou tempo para os chineses prepararem as suas defesas em Wuhan, mas a cidade foi tomada em outubro. 
          As vitórias militares japonesas não provocaram o colapso da resistência chinesa que o Japão tinha a esperança de 
          alcançar, em vez disso o governo chinês se mudou do interior para Chongqing e continuou a guerra.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Invasão japonesa da União Soviética e Mongólia (1938-1939)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 29 de julho de 1938, os japoneses invadiram a União Soviética e foram combatidos na Batalha do Lago Khasan. 
          Apesar da vitória soviética, os japoneses consideraram-na um empate inconclusivo e em 11 de maio de 1939 
          decidiram mudar a fronteira japonesa mongol até o rio Khalkhin Gol pela força. Após sucessos iniciais do 
          ataque japonês à Mongólia, o Exército Vermelho infligiu a primeira derrota importante do Exército de Guangdong.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A vitória soviético-mongol nas batalhas de Khalkhin Gol levou a uma crise de governo convencendo algumas 
          partes do governo japonês de que deveriam se concentrar em se conciliar com o governo soviético para evitar 
          interferências na guerra contra a China e, ao invés de voltarem sua atenção militar para o sul, mudarem seu 
          foco para os territórios dos Estados Unidos e da Europa no Pacífico, e também impediram a demissão de 
          experientes líderes militares soviéticos, como Gueorgui Júkov, que mais tarde iria desempenhar um papel 
          vital na defesa de Moscou (ver: Batalha de Moscou). Em 13 de abril de 1941, o Pacto de Não-Agressão 
          Nipônico-Soviético foi assinado.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Ocupações e acordos na Europa
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na Europa, a Alemanha e a Itália foram se tornando mais ousadas. Em março de 1938, a Alemanha anexou a Áustria, 
          novamente provocando poucas reações de outras potências europeias. Incentivado, Hitler começou pressionando 
          reivindicações alemãs na região dos Sudetos, uma área da Checoslováquia com uma população predominantemente de 
          etnia alemã e logo a França e o Reino Unido concederam este território para a Alemanha no Acordo de Munique, 
          que foi feito contra a vontade do governo da Checoslováquia, em troca de uma promessa de fim de mais exigências 
          territoriais por parte dos alemães.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Logo depois, no entanto, a Alemanha e a Itália forçaram a Checoslováquia a ceder territórios adicionais à 
          Hungria e Polônia. Em março de 1939, a Alemanha invadiu o restante da Checoslováquia e, posteriormente, 
          dividiu-a no Protectorado de Boêmia e Morávia e em um Estado fantoche pró-alemão, a República Eslovaca.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Espantados e com Hitler a fazer exigências adicionais sobre Danzig (Crise de Danzig), França e Reino Unido 
          garantiram seu apoio à independência polonesa; quando a Itália conquistou a Albânia em abril de 1939, a mesma 
          garantia foi estendida à Romênia e Grécia. Logo após a promessa franco-britânica para a Polônia, Alemanha 
          e Itália formalizaram a sua própria aliança, o Pacto de Aço.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em agosto de 1939, a Alemanha e a União Soviética assinaram o Pacto Molotov-Ribbentrop, um tratado de 
          não agressão com um protocolo secreto (ver: Negociações sobre a adesão da União Soviética ao Eixo). 
          As partes do acordo deram direitos uns aos outros, "no caso de um rearranjo territorial e político", 
          "esferas de influência" (oeste da Polônia e da Lituânia para a Alemanha e leste da Polônia, Finlândia, 
          Estônia, Letônia e Bessarábia para a URSS). O tratado também levantou a questão de a Polônia continuar a ser 
          independente.
        </p>
      </section>
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          A guerra
        </h2>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Início da guerra na Europa (1939)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 1 de setembro de 1939, Alemanha e Eslováquia (que na época era um Estado fantoche alemão) atacaram a Polônia. 
          Em 3 de setembro, França e Reino Unido, seguido totalmente por todos os seus domínios independentes da 
          Comunidade Britânica — Austrália, Canadá, Nova Zelândia e África do Sul — declararam guerra à Alemanha, 
          mas proveram pouco apoio à Polônia, exceto por um pequeno ataque francês no Sarre. Reino Unido e França 
          também iniciaram um bloqueio naval à Alemanha em 3 de setembro, que tinha como objetivo danificar a economia 
          do país e seu esforço de guerra.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 17 de setembro, após a assinatura do Pacto Molotov-Ribbentrop, os soviéticos também invadiram a Polônia. 
          O território polonês foi então dividido entre a Alemanha e a União Soviética, além da Lituânia e da Eslováquia 
          também terem recebido pequenas partes. Os poloneses não se renderam, 
          estabeleceram o Estado Secreto Polaco e uma sede subterrânea para o seu exército, além de continuarem a lutar 
          junto com os Aliados em todas as frentes de batalha fora de seu país.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Cerca de 100 000 militares poloneses foram evacuados para a Romênia e países bálticos, muitos destes soldados 
          lutaram mais tarde contra os alemães em outras frentes da guerra. Decifradores poloneses de enigmas também 
          foram evacuados para a França. Durante este tempo, o Japão lançou o seu primeiro ataque contra Changsha, 
          uma cidade chinesa importante e estratégica, mas as forças japonesas foram repelidas no final de setembro.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Após a invasão da Polônia e de um tratado germano-soviético sobre controle da Lituânia, a União Soviética 
          forçou os países bálticos a permitir a permanência de tropas soviéticas nos seus territórios sob pactos de 
          "assistência mútua". A Finlândia rejeitou as demandas territoriais e foi invadida pela União 
          Soviética em novembro de 1939. O conflito resultante terminou em março de 1940 com concessões finlandesas. 
          França e Reino Unido, ao considerarem o ataque soviético sobre a Finlândia como o equivalente a entrar na 
          guerra no lado dos alemães, reagiram à invasão soviética, apoiando a expulsão da URSS da Liga das Nações.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na Europa Ocidental, as tropas britânicas chegaram ao continente, mas em uma fase apelidada de "Phoney War" 
          (Guerra de Mentira) pelos britânicos e de "Sitzkrieg" (Guerra Sentada) pelos alemães, nenhum dos lados lançou 
          grandes operações contra o outro, até abril de 1940. A União Soviética e a Alemanha entraram em um acordo 
          comercial em fevereiro de 1940, nos termos do qual os soviéticos receberam equipamento militar e industrial 
          alemão, em troca de fornecimento de matérias-primas para a Alemanha para ajudar a contornar o bloqueio aliado.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em abril de 1940, a Alemanha invadiu a Dinamarca e a Noruega para garantir embarques de minério de ferro da 
          Suécia, que os Aliados estavam prestes a romper. A Dinamarca imediatamente rendeu-se e apesar do apoio 
          dos Aliados, a Noruega foi conquistada dentro de dois meses. Em maio de 1940, o Reino Unido invadiu a 
          Islândia para antecipar uma possível invasão alemã da ilha. O descontentamento britânico sobre a 
          Campanha da Noruega levou à substituição do primeiro-ministro Neville Chamberlain por Winston Churchill, 
          em 10 de maio de 1940.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Avanços do Eixo (1940)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A Alemanha invadiu a França, Bélgica, Países Baixos e Luxemburgo em 10 de maio de 1940. Os Países 
          Baixos e a Bélgica foram invadidos através de táticas de blitzkrieg em poucos dias e semanas, respectivamente. 
          A linha fortificada francesa conhecida como Linha Maginot e as forças aliadas na Bélgica foram contornadas por 
          um movimento de flanco através da região densamente arborizada das Ardenas, considerada erroneamente pelos 
          planejadores franceses como uma barreira natural impenetrável contra veículos blindados.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          As tropas britânicas foram forçadas a evacuar do continente em Dunquerque, abandonando o seu equipamento 
          pesado no início de junho. Em 10 de junho, a Itália invadiu a França, declarando guerra ao governo 
          francês e ao Reino Unido; 12 dias depois, os franceses se renderam e o território de seu país foi logo 
          dividido em zonas de ocupação alemãs e italianas, além da criação de um Estado fantoche colaboracionista 
          alemão desocupado chamado França de Vichy. Em 3 de julho, os britânicos atacaram a frota francesa na Argélia 
          para evitar a sua eventual tomada pela Alemanha.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em junho, durante os últimos dias da Batalha da França, a União Soviética anexa à força Estônia, Letônia e 
          Lituânia e, em seguida, conquista a disputada região romena da Bessarábia. Enquanto isso, a aproximação 
          política e a cooperação econômica nazi-soviética gradualmente se paralisa e ambos os Estados 
          começam os preparativos para a guerra.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Com a França neutralizada, a Alemanha começou uma campanha de supremacia aérea sobre o Reino Unido 
          para se preparar para uma invasão. A campanha fracassou e os planos de invasão foram cancelados até setembro. 
          Usando os portos franceses recém-capturados, a Kriegsmarine obteve sucesso contra a melhor 
          preparada Marinha Real, usando U-Boots contra os navios britânicos no Atlântico. A Itália começou a operar 
          no Mediterrâneo, com o início do cerco de Malta em junho, a conquista da Somalilândia Britânica em agosto e em 
          uma incursão no Egito, que então era administrado pelos britânicos, em setembro de 1940. O Japão aumentou o 
          bloqueio contra a China em setembro, ao capturar várias bases no norte da agora isolada Indochina Francesa.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Durante todo esse período, o neutro Estados Unidos tomou medidas para ajudar a China e os Aliados Ocidentais. 
          Em novembro de 1939, a Lei de Neutralidade norte-americana foi alterada para permitir compras do chamado 
          "cash and carry" (dinheiro e transporte) por parte dos Aliados. Em 1940, após a captura alemã de Paris, 
          o tamanho da Marinha Americana aumentou significativamente e, depois da incursão japonesa na Indochina, o país 
          embargou ferro, aço e peças mecânicas contra o Japão. Em setembro, os Estados Unidos concordaram ainda em 
          comerciar destróieres estadunidenses para bases britânicas. Ainda assim, a grande maioria do público 
          norte-americano continuou a se opor a qualquer intervenção militar direta no conflito em 1941.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O Eixo expandiu-se em novembro de 1940, quando a Hungria, a Eslováquia e a Romênia aderiram ao Pacto Tripartite. 
          A Romênia faria uma grande contribuição para a guerra do Eixo contra a URSS, parcialmente ao recapturar o 
          território cedido à URSS e em parte para prosseguir com o desejo de seu líder, Ion Antonescu, de combater o 
          comunismo. Em outubro de 1940, a Itália invadiu a Grécia, mas em poucos dias foi repelida e foi forçada 
          de volta para a Albânia, onde um impasse logo ocorreu. Em dezembro de 1940, as forças britânicas da 
          Commonwealth começaram contraofensivas contra as forças italianas no Egito e na África Oriental Italiana. 
          No início de 1941, depois que as forças italianas terem sido afastadas de volta para a Líbia pela Commonwealth, 
          Churchill ordenou uma expedição de tropas na África para reforçar os gregos. A Marinha Real Italiana também 
          sofreu derrotas significativas, quando a Marinha Real colocou três de seus navios de guerra fora de ação depois 
          de um ataque em Tarento e quando vários outros de seus navios de guerra foram neutralizados na Batalha do Cabo 
          Matapão.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Os alemães logo intervieram para ajudar a Itália. Hitler enviou forças alemãs para a Líbia em fevereiro e até o 
          final de março eles lançaram uma ofensiva contra as enfraquecidas forças da Commonwealth. Em menos de 
          um mês, as forças da Commonwealth foram empurradas de volta para o Egito com exceção do sitiado porto de 
          Tobruk. A Comunidade Britânica tentou desalojar as forças do Eixo em maio e novamente em junho, mas 
          falhou em ambas as ocasiões. No início de abril, após a assinatura da Bulgária do Pacto Tripartite, 
          os alemães fizeram uma intervenção nos Balcãs ao invadir a Grécia e a Iugoslávia na sequência de um golpe; 
          nesse episódio os alemães também fizeram um rápido progresso e acabaram forçando os Aliados a evacuar 
          depois que a Alemanha conquistou a ilha grega de Creta, no final de maio.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Os Aliados tiveram alguns sucessos durante este tempo. No Oriente Médio, as forças da Commonwealth primeiro 
          anularam um golpe de Estado no Iraque, que tinha sido apoiado por aviões alemães a partir de bases dentro 
          da Síria controlada pela França de Vichy, então, com a ajuda da França Livre, invadiram a Síria e o 
          Líbano para evitar mais ocorrências. No Atlântico, os britânicos conquistaram um impulso moral público 
          muito necessário ao afundar o emblemático couraçado alemão Bismarck. Talvez ainda mais importante foi a 
          bem-sucedida resistência da Força Aérea Real, durante a Batalha da Grã-Bretanha, aos ataques da Luftwaffe alemã, 
          sendo que a campanha de bombardeio alemã em grande parte acabou em maio de 1941.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na Ásia, apesar de várias ofensivas de ambos os lados, a guerra entre a China e o Japão foi paralisada em 1940. 
          Com o objetivo de aumentar a pressão sobre a China ao bloquear rotas de abastecimento e para as forças japonesas 
          terem uma melhor posição em caso de uma guerra com as potências ocidentais, o Japão tomou o controle militar 
          do sul da Indochina. Em agosto daquele ano, os comunistas chineses lançaram um ofensiva na China Central; 
          em retaliação, o Japão instituiu medidas duras em áreas ocupadas para reduzir os 
          recursos humanos e materiais dos comunistas. A contínua antipatia entre as forças comunistas e 
          nacionalistas chinesas culminaram em confrontos armados em janeiro de 1941, efetivamente terminando 
          com a cooperação entre os dois grupos.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Com a situação na Europa e na Ásia relativamente estável, a Alemanha, o Japão e a União Soviética fizeram 
          preparativos. Com os soviéticos desconfiados das crescentes tensões com a Alemanha e o planejamento japonês 
          para tirar proveito da guerra na Europa, aproveitando as possessões europeias ricas em recursos no sudeste 
          da Ásia, as duas potências assinaram o pacto de neutralidade nipônico-soviético, em abril de 1941. Em 
          contraste, os alemães estavam constantemente fazendo preparativos para um ataque à URSS, com as suas forças 
          se acumulando na fronteira soviética.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          A guerra se torna global (1941)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 22 de junho de 1941, a Alemanha, juntamente com outros membros europeus do Eixo e a Finlândia, invadiu a 
          União Soviética na chamada Operação Barbarossa. Os principais alvos dessa ofensiva surpresa foram a 
          região do Mar Báltico, Moscou e Ucrânia, com o objetivo final de acabar com a campanha de 1941 perto da 
          linha de Arkhangelsk-Astrakhan (linha A-A), que ligava os mares Cáspio e Branco. O objetivo de Hitler 
          era eliminar a União Soviética como uma potência militar, exterminar o comunismo, gerar o Lebensraum 
          ("espaço vital") através da remoção da população nativa e garantir o acesso aos recursos 
          estratégicos necessários para derrotar os rivais restantes da Alemanha.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Embora o Exército Vermelho estivesse se preparando para contraofensivas estratégicas antes da guerra, a 
          Barbarossa forçou o comando supremo soviético a adotar uma defesa estratégica. Durante o verão, o Eixo 
          conquistou partes significativas do território soviético, causando imensos prejuízos, tanto material 
          quanto em vidas. Nos primeiros meses do ataque alemão, dezenas de comandantes soviéticos, principalmente 
          o general Dmitry Pavlov, tornaram-se bodes expiatórios dos fracassos. Pavlov seria preso e executado.
          Em meados de agosto, no entanto, o Alto Comando do Exército alemão decidiu suspender a ofensiva de um já 
          consideravelmente empobrecido Grupo de Exércitos Centro e desviar o 2.º Exército Panzer para reforçar as 
          tropas que avançavam em direção à região central da Ucrânia e à Leningrado. A ofensiva de Kiev teve 
          um sucesso esmagador, resultando no cerco e na eliminação de quatro exércitos soviéticos, além de tornar 
          possível o avanço na Crimeia e no industrialmente desenvolvido leste da Ucrânia 
          (Primeira Batalha de Carcóvia).
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O desvio de três quartos das tropas do Eixo e da maioria de suas forças aéreas da França e do Mediterrâneo 
          central para a Frente Oriental levou o Reino Unido a reconsiderar a sua grande estratégia. Em julho, 
          o Reino Unido e a União Soviética formaram uma aliança militar contra a Alemanha. Os britânicos e os 
          soviéticos invadiram o Irã para garantir o Corredor Persa e os campos de petróleo iranianos. Em agosto, 
          o Reino Unido e os Estados Unidos emitiram em conjunto a Carta do Atlântico.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em outubro, quando os objetivos operacionais do Eixo na Ucrânia e na região do Báltico foram alcançados, 
          sendo que apenas os cercos de Leningrado e Sebastopol ainda continuavam, uma grande ofensiva 
          contra Moscou havia sido renovada. Após dois meses de intensos combates, o exército alemão quase atingiu 
          os subúrbios da capital soviética, onde as tropas esgotadas foram forçadas a suspender sua ofensiva.
          Grandes ganhos territoriais foram conquistados pelas forças do Eixo, mas sua campanha não tinha atingido os 
          seus objetivos principais: duas cidades importantes permaneceram nas mãos da URSS, a capacidade de resistência 
          dos soviéticos não foi eliminada e a União Soviética manteve uma parte considerável do seu potencial militar. 
          A fase blitzkrieg da guerra na Europa havia terminado.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          No início de dezembro, as reservas recém-mobilizadas permitiram aos soviéticos atingir a equivalência 
          numérica com as tropas do Eixo. Isto, assim como dados de inteligência que estabeleceram um número mínimo 
          de tropas soviéticas no Oriente suficiente para impedir qualquer ataque pelo Exército de Guangdong japonês, 
          permitiu aos soviéticos começar uma grande contraofensiva que teve seu início em 5 de dezembro em 
          1 000 quilômetros da Frente Oriental e que empurrou as tropas alemãs de 100 a 250 quilômetros para o 
          oeste.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O sucesso alemão na Europa incentivou o Japão a aumentar a pressão sobre os governos europeus no sudeste asiático. 
          O governo holandês concordou em fornecer suprimentos de petróleo ao Japão a partir das Índias 
          Orientais Holandesas, recusando-se a entregar o controle político das suas colônias. A França de Vichy, por 
          outro lado, concordou com a ocupação japonesa da Indochina Francesa. Em julho de 1941, os Estados Unidos, 
          o Reino Unido e outros governos ocidentais reagiram à invasão da Indochina com um congelamento de bens japoneses, 
          enquanto os Estados Unidos (que forneciam 80% do petróleo do Japão) respondeu aplicando um embargo de 
          petróleo completo ao país. Isso significava que o Japão foi forçado a escolher entre abandonar as suas 
          ambições na Ásia e o prosseguimento da guerra contra a China ou perder os recursos naturais que precisava; 
          os militares japoneses não consideravam a primeira opção e muitos oficiais consideraram o embargo do petróleo 
          como uma declaração tácita de guerra.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          O Império Japonês planejava aproveitar rapidamente as colônias europeias na Ásia para criar um perímetro 
          defensivo por todo o Pacífico Central; os japoneses, então, seriam livres para explorar os recursos do Sudeste 
          Asiático, enquanto esgotariam os já sobrecarregados Aliados lutando uma guerra defensiva. Para evitar uma 
          intervenção americana nesse perímetro de segurança, foi planejada a neutralização da Frota do Pacífico dos 
          Estados Unidos. Em 7 de dezembro (8 de dezembro nos fusos horários asiáticos) de 1941, o Império do Japão 
          atacou os domínios britânicos e norte-americanos com ofensivas quase simultâneas contra o sudeste da Ásia e o 
          Pacífico Central. Estas incluíram um ataque contra a frota americana em Pearl Harbor, os desembarques na 
          Tailândia e Malásia e a batalha de Hong Kong.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Estes ataques levaram os Estados Unidos, o Reino Unido, a China, a Austrália e vários outros países a emitir 
          uma declaração de guerra formal contra o Japão (ver: Teatro de Operações do Pacífico). Enquanto a 
          União Soviética, que estava fortemente envolvida com as grandes hostilidades dos países europeus do Eixo, 
          preferiu manter um acordo de neutralidade com os japoneses. A Alemanha e as outras Potências 
          do Eixo responderam ao declarar guerra aos Estados Unidos. Em janeiro, Quatro Grandes 
          (Estados Unidos, Reino Unido, União Soviética, China) e outros 22 governos menores ou exilados emitiram a 
          Declaração das Nações Unidas, ratificando assim a Carta do Atlântico e tendo a obrigação de não assinar 
          a paz em separado com qualquer uma das Potências do Eixo. Em 1941, Stalin pediu persistentemente a Churchill e 
          Roosevelt para abrir uma "segunda frente" de batalha na França. A Frente Oriental tornou-se o grande 
          teatro da guerra na Europa e os muitos milhões de vítimas soviéticas minimizaram as poucas centenas de 
          milhares de mortes de Aliados ocidentais; Churchill e Roosevelt disseram que precisavam de mais tempo de 
          preparação, o que levou a reclamações de que eles paralisaram-se para salvar vidas ocidentais às custas de 
          vidas soviéticas.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Enquanto isso, até o final de abril de 1942, o Japão e seu aliado, a Tailândia, quase conquistaram totalmente 
          Birmânia, Malásia, Índias Orientais Holandesas, Singapura e Rabaul, causando fortes perdas para as tropas 
          dos Aliados e conquistando um grande número de prisioneiros. Apesar da resistência persistente em Corregidor, 
          as Filipinas foram capturadas em maio de 1942, forçando o governo da Commonwealth das Filipinas ao exílio. 
          As forças japonesas também alcançaram vitórias navais no Mar da China Meridional, Mar de Java e no 
          Oceano Índico, além de bombardearem a base naval aliada de Darwin, na Austrália. O único sucesso real 
          dos Aliados contra o Japão foi uma vitória chinesa em Changsha, no início de janeiro de 1942. 
          Estas vitórias fáceis sobre adversários despreparados deixaram o Japão confiante, além de sobrecarregado.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A Alemanha também manteve a iniciativa. Explorando as duvidosas decisões do comando naval americano, a Marinha 
          Alemã devastou navios dos Aliados ao longo da costa americana do Atlântico 
          (ver: Ataques na América durante a Segunda Guerra Mundial). Apesar de perdas consideráveis, os 
          membros europeus do Eixo pararam a grande ofensiva contra os soviéticos na Europa Central e no 
          sul da Rússia, mantendo os ganhos territoriais que haviam alcançados durante o ano anterior. 
          No norte da África, os alemães lançaram uma ofensiva em janeiro, empurrando os britânicos de volta 
          às posições na Linha de Gazala no início de fevereiro, o que foi seguido por uma calmaria 
          temporária nos combates que a Alemanha usou para preparar as suas próximas ofensivas militares.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Paralisação dos avanços do Eixo (1942)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          No início de maio de 1942, o Japão iniciou as operações para capturar Port Moresby através de desembarques 
          militares e, assim, cortar as comunicações e linhas de abastecimento entre os Estados Unidos e a Austrália. 
          Os Aliados, no entanto, impediram a invasão ao interceptar e derrotar as forças navais japonesas na Batalha 
          do Mar de Coral. O próximo plano do Japão, motivado pelo Ataque Doolittle, era conquistar o Atol Midway 
          e atrair companhias norte-americanas para a batalha para serem eliminadas; como uma distração, o governo 
          japonês também enviou forças para ocupar as Ilhas Aleutas, no Alasca. No início de junho, o Império 
          Japonês colocou suas operações em ação, mas os norte-americanos, por terem decifrado os códigos navais 
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Com a sua capacidade de ação agressiva consideravelmente diminuída após a Batalha de Midway, o Japão optou por 
          se concentrar em uma tentativa tardia de capturar Port Moresby por uma campanha terrestre no Território 
          de Papua. Os americanos planejaram um contra-ataque contra as posições japonesas no sul das Ilhas Salomão, 
          principalmente em Guadalcanal, como um primeiro passo para a captura de Rabaul, a principal base japonesa no 
          Sudeste Asiático.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Ambos os planos começaram em julho, mas em meados de setembro, a Batalha de Guadalcanal teve prioridade para os 
          japoneses e as tropas da Nova Guiné foram obrigadas a retirar-se da área de Port Moresby para a parte norte da 
          ilha, onde enfrentaram tropas australianas e norte-americanas na Batalha de Buna-Gona. Guadalcanal logo 
          tornou-se um ponto focal para ambos os lados, com o comparecimento pesado de tropas e navios nessa batalha. 
          Até o início de 1943, os japoneses iriam ser derrotados na ilha e retirariam suas tropas. Na 
          Birmânia, as forças da Commonwealth montavam duas operações. A primeira, uma ofensiva na região de 
          Arakan no final de 1942, foi desastrosa, forçando um recuo de volta à Índia em maio de 1943. A 
          segunda foi a inserção de forças irregulares por trás das linhas japonesas em fevereiro, o que, até 
          o final de abril, tinha conseguido resultados ainda duvidosos.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na Frente Oriental da Alemanha, o Eixo derrotou ofensivas soviéticas na Península Kerch e em Kharkov, e, 
          em seguida, lançou sua ofensiva principal contra o sul da Rússia em junho de 1942, para aproveitar os campos 
          de petróleo do Cáucaso e ocupar as estepes de Kuban, mantendo posições sobre as áreas norte e central da Frente. 
          Os alemães dividiram o Grupo de Exércitos Sul em dois: o Grupo de Exércitos A na parte inferior do rio Don e o 
          Grupo de Exércitos B no sudeste do Cáucaso, no rio Volga. Os soviéticos decidiram fazer sua plataforma de combate 
          em Stalingrado, que estava no caminho dos
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em meados de novembro, os alemães tinham quase conquistado Stalingrado em severos combates de rua quando os 
          soviéticos começaram a segunda contraofensiva de inverno, com o início de um cerco às forças nazistas na 
          cidade e um assalto à saliente Rzhev, perto de Moscou, embora esta último tenha falhado desastrosamente. 
          No início de fevereiro de 1943, o exército alemão tinha sofrido fortes perdas; as tropas alemãs em Stalingrado 
          tinham sido forçadas a se render e a linha de frente foi empurrada para trás, além da sua posição de antes 
          da ofensiva de verão. Em meados de fevereiro, após o impulso soviético diminuir, os alemães lançaram outro ataque 
          em Carcóvia, com a criação de um saliente em sua linha de frente em volta da cidade russa de Kursk.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em novembro de 1941, as forças da Commonwealth lançaram uma contraofensiva, a Operação Crusader, 
          no norte da África, e recuperaram todos os ganhos que os alemães e os italianos tinham feito na região. 
          No Ocidente, preocupações com respeito ao governo japonês usar as bases da França de Vichy em Madagascar 
          resultaram na invasão britânica da ilha no início de maio de 1942. Esta bem-sucedida invasão foi logo 
          compensada por uma ofensiva do Eixo na Líbia que levou os Aliados a recuar para o Egito, até que as forças 
          do Eixo foram paradas em El Alamein. No continente, as incursões de comandos aliados a alvos estratégicos, 
          culminando com a desastrosa Batalha de Dieppe, demonstraram incapacidade dos Aliados ocidentais em lançar 
          uma invasão da Europa continental sem uma melhor preparação, equipamentos e segurança operacional.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em agosto de 1942, os Aliados conseguiram repelir um segundo ataque contra El Alamein e, a um alto custo, 
          conseguiu entregar suprimentos desesperadamente necessários à Malta sitiada. Poucos meses depois, os Aliados 
          iniciaram um ataque próprio no Egito, desalojando as forças do Eixo e o início de uma unidade à oeste de toda a 
          Líbia. Este ataque foi seguido pouco depois por uma invasão anglo-americana do Norte da África Francês, o 
          que resultou na captura da região pelos aliados. Hitler respondeu com a deserção da colônia francesa, 
          ordenando a ocupação da França de Vichy, embora as forças de Vichy não terem resistido a esta violação do 
          armistício, elas conseguiram afundar sua frota para evitar a sua captura pelas forças alemãs. As agora 
          poucas forças do Eixo na África recuaram para a Tunísia, que foi conquistada pelos Aliados em maio de 1943.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Aliados ganham impulso (1943)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Após a Campanha de Guadalcanal, os Aliados iniciaram várias operações contra o Japão no Pacífico. Em maio de 
          1943, forças aliadas foram enviadas para eliminar as forças japonesas nas Aleutas. Logo depois começaram 
          as suas operações principais para isolar Rabaul, através da captura de ilhas vizinhas e para quebrar o perímetro 
          Central Japonês do Pacífico nas ilhas Gilbert e Marshall. Até o final de março de 1944, os Aliados tinham 
          concluído ambos os objetivos, e, adicionalmente, neutralizaram a principal base japonesa em Truk, nas Ilhas 
          Carolinas. Em abril, as forças aliadas lançaram uma operação para retomar a Nova Guiné Ocidental.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na União Soviética, tanto os alemães quanto os soviéticos passaram a primavera e o início do verão de 1943 
          fazendo preparativos para grandes ofensivas na Rússia central. Em 4 de julho de 1943, a Alemanha atacou as 
          forças soviéticas ao redor de Kursk. Dentro de uma semana, as forças alemãs tinham se esgotado na luta contra 
          as defesas profundamente escalonadas e bem construídas dos soviéticos e, pela primeira vez na guerra, 
          Hitler cancelou a operação antes de ter alcançado o sucesso tático ou operacional. Esta decisão foi 
          parcialmente afetada pela invasão dos aliados ocidentais à Sicília, lançada em 9 de julho e que, combinada 
          com falhas anteriores dos italianos, resultou na destituição e na prisão de Mussolini no final daquele mês.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 12 de julho de 1943, os soviéticos lançaram suas próprias contraofensivas, afastando assim qualquer esperança 
          de vitória, ou até mesmo empate, para o exército alemão no leste. A vitória soviética em Kursk anunciou a queda 
          de superioridade alemã, dando à União Soviética a iniciativa na Frente Oriental. Os alemães 
          tentaram estabilizar sua frente nordeste ao longo da apressadamente fortificada linha Panther-Wotan, no entanto, 
          os soviéticos a romperam em Smolensk e na ofensiva de Dnieper.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          No início de setembro de 1943, os Aliados ocidentais invadiram a península itálica, após um armistício com os 
          italianos. A Alemanha respondeu ao desarmar as forças italianas, tomar o controle militar das áreas até 
          então controladas pela Itália e ao criar uma série de linhas defensivas. As forças especiais alemãs 
          resgataram Mussolini, que logo em seguida estabeleceu um novo Estado fantoche na Itália ocupada pelos alemães 
          chamado de República Social Italiana. Os Aliados ocidentais lutaram por várias frentes até chegar à 
          principal linha defensiva alemã, em meados de novembro.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          As operações alemãs no Atlântico também sofreram. Em maio de 1943 (Maio Negro), conforme contraofensivas aliadas 
          se tornavam cada vez mais eficazes, as consideráveis perdas resultantes de submarinos alemães forçaram a 
          suspensão temporária da campanha naval alemã no Atlântico. Em novembro de 1943, Franklin D. Roosevelt 
          e Winston Churchill se encontraram com Chiang Kai-shek no Cairo e, depois, com Josef Stalin em Teerã. 
          A primeira conferência determinou o recuo do território japonês no pós-guerra, enquanto a última incluía 
          um acordo de que os Aliados ocidentais invadiriam a Europa em 1944 e de que a União Soviética iria declarar 
          guerra ao Japão dentro de três meses após a derrota da Alemanha. A inteligência alemã pôs em prática a 
          malsucedida Operação Long Jump, cujo objetivo era capturar (ou assassinar) os líderes reunidos em Teerã.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Desde novembro de 1943, durante a Batalha de Changde, os chineses forçaram o Japão a lutar uma custosa guerra 
          de atrito, enquanto aguardavam as forças aliadas. Em janeiro de 1944, os Aliados lançaram uma série 
          de ataques na Itália contra a linha em Monte Cassino e tentaram flanquear desembarques em Anzio. Até o final 
          de janeiro, uma grande ofensiva soviética expulsou as forças alemãs da região de Leningrado, terminando com o 
          mais longo e letal cerco da história.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          A próxima ofensiva soviética foi interrompida nas fronteiras pré-guerra da Estônia pelo Grupo de Exércitos Norte 
          alemão auxiliado por estonianos que tinham a esperança de restabelecer a independência nacional. Este atraso 
          diminuiu as subsequentes operações soviéticas na região do Mar Báltico. No final de maio de 1944, os 
          soviéticos tinham libertado a Crimeia, expulsado a maior parte das forças do Eixo da Ucrânia e feito incursões 
          na Romênia, que foram repelidas pelas tropas do Eixo. As ofensivas Aliadas na Itália tinha tido sucesso e, 
          às custas de permitir o recuo de várias divisões alemãs, em 4 de junho Roma foi capturada.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Os Aliados experimentaram sortes diferentes na Ásia continental. Em março de 1944, os japoneses lançaram 
          a primeira de duas invasões: uma operação contra as posições britânicas em Assam, na Índia, e logo 
          cercaram as posições da Commonwealth em Imphal e Kohima. Em maio de 1944, as forças britânicas montaram 
          uma contraofensiva que levou as tropas japonesas de volta para a Birmânia e as forças chinesas que 
          invadiram o norte da Birmânia no final de 1943 sitiaram as tropas japonesas em Myitkyina. A segunda 
          invasão japonesa tentou destruir as principais forças de combate da China, proteger as ferrovias entre os 
          territórios ocupados e os aeroportos Aliados capturados pelo Japão. Em junho, os japoneses tinham 
          conquistado a província de Henan e começaram um ataque renovado contra Changsha, na província de Hunan.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Aproximação dos Aliados (1944)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 6 de junho de 1944 (conhecido como Dia D), depois de três anos de pressão soviética, os Aliados 
          ocidentais invadiram o norte da França. Após reatribuir várias divisões Aliadas da Itália, eles também 
          atacaram o sul da França. Os desembarques foram bem-sucedidos e levaram à derrota das unidades do 
          exército alemão na França. Paris foi libertada pela resistência local, com o apoio das Forças da França 
          Livre em 25 de agosto e os Aliados ocidentais continuaram a forçar o recuo das forças alemãs na Europa 
          Ocidental durante a última parte do ano. Uma tentativa de avançar para o norte da Alemanha liderada por uma 
          grande operação aérea nos Países Baixos terminou em um fracasso. Depois disso, os Aliados ocidentais 
          lentamente moveram-se para Alemanha, sem sucesso, tentando atravessar o rio Rur em uma grande ofensiva. 
          Na Itália, o avanço Aliado também desacelerou, quando se depararam com a última grande linha de defesa alemã.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 22 de junho, os soviéticos lançaram uma ofensiva estratégica na Bielorrússia 
          (conhecida como "Operação Bagration"), que resultou na destruição quase completa do Grupo de Exércitos 
          Centro alemão. Logo depois, outra ofensiva soviética estratégica forçou o recuo das tropas alemãs 
          da Ucrânia ocidental e Polônia oriental. O sucesso do avanço das tropas soviéticas impulsionou forças de 
          resistência na Polônia a iniciar várias revoltas, embora a maior delas, em Varsóvia, além de uma revolta 
          eslovaca no sul, não terem recebido auxílio soviético e acabarem sendo abatidas por forças alemãs. 
          A ofensiva estratégica do Exército Vermelho no leste da Romênia desestabilizou e destruiu consideravelmente 
          as tropas alemãs na região e desencadeou um bem sucedido golpe de Estado na Romênia e na Bulgária, seguido 
          pelo deslocamento desses países para o lado dos Aliados.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em setembro de 1944, as tropas do Exército Vermelho soviético avançaram para a Iugoslávia e forçaram a rápida 
          retirada dos Grupos E e F do exército alemão na Grécia, Albânia e Iugoslávia. Neste ponto, os partisans 
          apoiados pelos comunistas e liderados pelo Marechal Josip Broz Tito, que havia liderado uma campanha de guerrilha 
          cada vez mais bem-sucedida contra a ocupação desde 1941, controlavam grande parte do território iugoslavo e estavam 
          engajados em retardar os esforços contra as forças alemãs mais ao sul. No norte da Sérvia, o Exército Vermelho, 
          com apoio limitado de forças búlgaras, ajudou os guerrilheiros em uma libertação conjunta de capital Belgrado em 
          20 de outubro. Poucos dias depois, os soviéticos lançaram um ataque maciço contra a Hungria ocupada pelos alemães, 
          que durou até a queda de Budapeste, em fevereiro de 1945. Em contraste com as impressionantes vitórias 
          soviéticas nos Balcãs, a pungente resistência finlandesa contra a ofensiva soviética no Istmo da Carélia impediu 
          a ocupação do território finlandês e levou à assinatura do armistício soviético-finlandês em condições 
          relativamente suaves, com a subsequente mudança da Finlândia para o lado dos Aliados.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Até o início de julho, as forças da Commonwealth no sudeste asiático haviam repelido os cercos japoneses em 
          Assam, empurrando os japoneses para o rio Chindwin enquanto os chineses capturaram Myitkyina. Na China, 
          os japoneses estavam tendo maiores sucessos, tendo finalmente tomado Changsha, em meados de junho, e a cidade 
          de Hengyang, no início de agosto. Logo depois, eles ainda invadiram a província de Guangxi, vencendo 
          batalhas importantes contra as forças chinesas em Guilin e Liuzhou até o final de novembro e com sucesso 
          ligando as suas forças na China e na Indochina em meados de dezembro.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          No Pacífico, as forças norte-americanas continuaram a pressionar o perímetro japonês. Em meados de junho de 
          1944, elas começaram sua ofensiva contra as ilhas Marianas e Palau e derrotaram as forças japonesas na Batalha 
          do Mar das Filipinas. Estas derrotas levaram à renúncia de primeiro-ministro japonês Hideki Tōjō e muniram os 
          Estados Unidos com bases aéreas para lançar ataques de bombardeiros pesados e intensivos sobre as ilhas japonesas. 
          No final de outubro, as forças norte-americanas invadiram a ilha filipina de Leyte; logo depois, as forças navais 
          aliadas marcaram outra grande vitória na Batalha do Golfo de Leyte, uma das maiores batalhas navais da 
          história.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
          Colapso do Eixo e vitória dos Aliados (1945)
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 16 de dezembro de 1944, a Alemanha tentou sua última e desesperada medida para obter sucesso na Frente 
          Ocidental, usando a maior parte das suas reservas restantes para lançar uma grande contraofensiva nas Ardenas 
          para tentar dividir os Aliados ocidentais, cercar grandes porções de tropas aliadas e tomar a sua porta de 
          alimentação primária na Antuérpia, com o objetivo de levar a uma solução política. Em janeiro, a ofensiva 
          tinha sido repelida sem cumprir os seus objetivos estratégicos. Na Itália, os Aliados ocidentais 
          ficaram num impasse na linha defensiva alemã. Em meados de janeiro de 1945, os soviéticos atacaram na 
          Polônia, movendo-se do Vístula ao rio Oder, na Alemanha, e invadiram a Prússia Oriental. Em 4 de 
          fevereiro, os líderes norte-americanos, britânicos e soviéticos se encontraram na Conferência de Yalta. 
          Eles concordaram com a ocupação da Alemanha no pós-guerra e sobre quando a União Soviética iria se 
          juntar à guerra contra o Japão.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em fevereiro, os soviéticos invadiram a Silésia e a Pomerânia, enquanto aliados ocidentais entraram na 
          Alemanha Ocidental e aproximaram-se do rio Reno. Em março, os Aliados ocidentais atravessaram o norte do 
          Reno e o sul do Ruhr, cercando o Grupo de Exércitos B alemão, enquanto os soviéticos avançaram para 
          Viena. No início de abril, os Aliados ocidentais finalmente avançaram na Itália e atravessaram a Alemanha 
          Ocidental, enquanto as forças soviéticas invadiram Berlim no final de abril; as duas forças encontraram-se 
          no rio Elba em 25 de abril. Em 30 de abril de 1945, o Reichstag foi capturado, simbolizando a derrota militar 
          do Terceiro Reich.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Várias mudanças de liderança ocorreram durante este período: em 12 de abril, o então presidente dos Estados 
          Unidos, Roosevelt, morreu e foi sucedido por Harry S. Truman. Benito Mussolini foi morto por partisans italianos 
          em 28 de abril e, dois dias depois, Hitler cometeu suicídio e foi sucedido pelo Grande Almirante 
          Karl Dönitz.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Na Itália, a rendição assinada em 29 de abril pelo comando das forças alemãs naquele país, se efetivou em 2 de 
          maio. O tratado de rendição alemão foi assinado em 7 de maio em Reims e ratificado em 8 de maio em 
          Berlim. O Grupo de Exércitos Centro alemão resistiu em Praga até o dia 11 de maio, no que seria a última 
          grande ofensiva aliada em solo europeu. No Pacífico, as forças estadunidenses acompanhadas por forças 
          da Comunidade das Filipinas avançaram no território filipino, tomando Leyte até o final de abril de 1945. Eles 
          desembarcaram em Luzon em janeiro de 1945 e ocuparam Manila em março, deixando-a em ruínas. Combates continuaram 
          em Luzon, Mindanao e em outras ilhas das Filipinas até o final da guerra.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em maio de 1945, tropas australianas aterraram em Bornéu. Forças britânicas, estadunidenses e chinesas derrotaram 
          os japoneses no norte da Birmânia em março e os britânicos chegaram a Yangon em 3 de maio. Forças 
          estadunidenses também chegam ao Japão, tomando Iwo Jima em março e Okinawa até o final de junho. 
          Bombardeiros estadunidenses destroem as cidades japonesas e submarinos bloqueiam as importações do país.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Em 11 de julho, os líderes Aliados se reuniram em Potsdam, na Alemanha. Lá eles confirmam acordos anteriores 
          sobre a Alemanha e reiteram a exigência de rendição incondicional de todas as forças japonesas, 
          especificamente afirmando que "a alternativa para o Japão é a rápida e total destruição". Durante 
          esta conferência, o Reino Unido realizou a sua eleição geral e Clement Attlee substitui Churchill como 
          primeiro-ministro
        </p>
        <p className="text-lg text-gray-700 text-justify mb-4">
          Como o Japão continuou a ignorar os termos de Potsdam, os Estados Unidos lançam bombas atômicas sobre as 
          cidades japonesas de Hiroshima e Nagasaki em agosto. Nessa época, os japoneses tentavam desenvolver também 
          um programa para produção de armas nucleares, que não havia chegado à conclusão. Entre as duas bombas, os 
          soviéticos, em conformidade com o acordo de Yalta, invadem a Manchúria, dominada pelos japoneses e rapidamente 
          derrotam o Exército de Guangdong, que era a principal força de combate japonesa. O Exército Vermelho 
          também captura a ilha Sacalina e as ilhas Curilas. Em 15 de agosto de 1945 o Japão se rende, sendo os documentos 
          de rendição finalmente assinados a bordo do convés do navio de guerra americano USS Missouri em 2 de setembro de 
          1945, o que pôs fim à guerra.
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

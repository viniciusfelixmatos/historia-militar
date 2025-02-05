// src/app/pages/battlespages/stalingrad/pages.tsx
'use client';

import Image from "next/image";


import StalingradCard from '../../../../components/component-page/stalingradcard'; // Importa o componente StalingradCard

export default function StalingradPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Componente StalingradCard */}
      <div className="mb-8">
        <StalingradCard />
      </div>
      {/* Texto detalhado sobre a Batalha de Stalingrado */}
      <div className="mt-8 text-lg text-gray-600">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Batalha de Stalingrado</h1>
        <p className="text-justify">
          A Batalha de Stalingrado (17 de julho de 1942 – 2 de fevereiro de 1943) foi uma grande batalha na Frente Oriental da Segunda Guerra Mundial, 
          que começou quando a Alemanha Nazista e seus aliados do Eixo atacaram e ficaram presos em uma longa luta contra a União Soviética pelo 
          controle da cidade soviética de Stalingrado (atualmente conhecida como Volgogrado), no sul da Rússia. A batalha foi caracterizada por combates 
          corpo a corpo ferozes e ataques diretos contra civis em bombardeios aéreos; ela representou a essência da guerra urbana, sendo a maior e mais 
          cara batalha urbana da história militar.
        </p>
        <p className="mt-4 text-justify">
          Foi a batalha mais sangrenta e feroz de toda a Segunda Guerra Mundial — e, possivelmente, de toda a história humana —, com ambos os lados 
          sofrendo enormes baixas em meio a combates intensos dentro e ao redor da cidade. A batalha é amplamente considerada o ponto de virada no teatro 
          europeu da Segunda Guerra Mundial, já que o Oberkommando der Wehrmacht da Alemanha foi forçado a retirar uma quantidade considerável de forças 
          militares de outras regiões para repor as perdas na Frente Oriental.
        </p>
        <p className="mt-4 text-justify">
          Ambos os lados atribuíram grande importância estratégica a Stalingrado, pois era o maior centro industrial da União Soviética e um importante 
          eixo de transporte no rio Volga: controlar Stalingrado significava obter acesso aos campos de petróleo do Cáucaso e ter autoridade suprema 
          sobre o rio Volga. A cidade também possuía um significado simbólico significativo por carregar o nome de Joseph Stalin, o líder em exercício 
          da União Soviética.
        </p>
        <p className="mt-4 text-justify">
          Em 19 de novembro, o Exército Vermelho lançou a Operação Urano, um ataque em duas frentes que tinha como alvo os exércitos romenos protegendo 
          os flancos do 6º Exército. Os flancos do Eixo foram invadidos, e o 6º Exército foi cercado. Adolf Hitler estava determinado a manter a cidade 
          a qualquer custo para a Alemanha e proibiu o 6º Exército de tentar uma fuga; em vez disso, foram feitas tentativas de abastecê-lo pelo ar e 
          romper o cerco de fora. Em 2 de fevereiro de 1943, o 6º Exército, tendo esgotado sua munição e comida, finalmente capitulou após vários meses 
          de batalha, tornando-se o primeiro exército de campanha de Hitler a se render.
        </p>
        <p className="mt-4 text-justify">
          Na Rússia moderna, o legado da vitória do Exército Vermelho em Stalingrado é comemorado entre os Dias de Honra Militar. Ela também é amplamente 
          conhecida em muitos outros países que pertenciam às potências aliadas e, portanto, tornou-se parte da cultura popular. Da mesma forma, em vários 
          estados pós-soviéticos, a Batalha de Stalingrado é reconhecida como um aspecto importante do que é conhecido como a Grande Guerra Patriótica.
        </p>
      </div>
      <div className="mt-8 text-lg text-gray-600">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Plano de Fundo da Campanha de 1942</h1>
        <p className="text-justify">
          Na primavera de 1942, apesar do fracasso da Operação Barbarossa em derrotar a União Soviética em uma única campanha, 
          a Wehrmacht havia capturado vastos territórios, incluindo Ucrânia, Belarus e as repúblicas bálticas. Na Frente Ocidental, 
          a Alemanha controlava a maior parte da Europa, a ofensiva dos U-boats limitava o apoio americano e, no Norte da África, 
          Erwin Rommel havia acabado de capturar Tobruk.
        </p>
        <p className="mt-4 text-justify">
          No leste, os alemães estabilizaram uma frente de Leningrado a Rostov, com alguns pequenos salientes. Hitler permanecia confiante 
          em derrotar o Exército Vermelho, apesar das pesadas perdas ao oeste de Moscou no inverno de 1941–42, porque grandes partes do 
          Grupo de Exércitos Centro haviam sido descansadas e reequipadas. Ele decidiu que a campanha de verão de 1942 teria como alvo 
          o sul da União Soviética.
        </p>
        <p className="mt-4 text-justify">
          Em 23 de julho de 1942, Hitler expandiu os objetivos da campanha para incluir a ocupação de Stalingrado, uma cidade de grande 
          valor propagandístico devido ao seu nome, que homenageava o líder soviético. Ele ordenou a aniquilação da população de Stalingrado, 
          declarando que, após a captura, todos os homens seriam mortos e as mulheres e crianças deportadas devido ao seu caráter 
          "profundamente comunista". A captura da cidade também visava interromper o tráfego do Rio Volga, crucial para conectar o Cáucaso 
          e o Mar Cáspio ao centro da Rússia.
        </p>
        <p className="mt-4 text-justify">
          Enquanto isso, Stalin, convencido de que o principal ataque alemão visaria Moscou, priorizou a defesa da capital soviética. 
          Após a culminação da contraofensiva de inverno em março de 1942, o comando soviético começou a planejar a campanha de verão. 
          Apesar do desejo de Stalin por uma ofensiva geral, ele foi convencido a adotar uma "defesa estratégica ativa" enquanto ordenava 
          ofensivas locais ao longo da Frente Oriental.
        </p>
        <p className="mt-4 text-justify">
          A Operação Kharkov, iniciada em maio, teve sucesso inicial, mas a contraofensiva alemã cercou e destruiu grande parte das forças 
          soviéticas na Segunda Batalha de Kharkov. Este revés deixou os soviéticos vulneráveis à ofensiva de verão alemã. Apesar disso, Stalin 
          continuou priorizando a defesa de Moscou, destinando apenas reforços limitados à Frente Sudoeste.
        </p>
      </div>
      <div className="mt-8 text-lg text-gray-600 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Prelúdio</h1>

        {/* Imagem centralizada */}
        <div className="relative mb-4 max-w-4xl w-full">
          <Image
            src="/battles-image/stalingrad/stalingrad-prelude.jpg" // Caminho da nova imagem
            alt="Prelúdio da Batalha de Stalingrado"
            layout="intrinsic" // Ajusta para o tamanho original da imagem
            width={800}  // Defina a largura original ou máxima desejada (em px)
            height={500} // Defina a altura original ou máxima desejada (em px)
            className="rounded-lg shadow-md mx-auto"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Texto descritivo da imagem */}
        <p className="text-center text-sm mt-2 italic">
          "Oficiais de comando alemães e romenos consultam-se em uma posição de campo perto do rio Don, agosto de 1942."
        </p>

        <p className="text-justify mt-4">
          O Grupo de Exércitos Sul foi escolhido para avançar rapidamente pelas estepes do sul da Rússia até o Cáucaso, a fim de capturar os vitais campos de petróleo soviéticos. 
          A planejada ofensiva de verão, com o codinome Fall Blau (Caso Azul), deveria incluir os 6º, 17º, 4º Exército Panzer e 1º Exército Panzer alemães.
        </p>
        <p className="mt-4 text-justify">
          No entanto, Hitler interveio, ordenando que o Grupo de Exércitos se dividisse em dois. O Grupo de Exércitos Sul (A), sob o comando de Wilhelm List, deveria continuar 
          avançando para o sul em direção ao Cáucaso, conforme planejado, com o 17º Exército e o 1º Exército Panzer. O Grupo de Exércitos Sul (B), incluindo o 6º Exército de Paulus 
          e o 4º Exército Panzer de Hermann Hoth, deveria mover-se para o leste, em direção ao Volga e a Stalingrado. O Grupo de Exércitos B foi comandado pelo General Maximilian von Weichs.
        </p>
        <p className="mt-4 text-justify">
          O início do Caso Azul estava planejado para o final de maio de 1942. No entanto, várias unidades alemãs e romenas que participariam da operação Blau estavam sitiando 
          Sevastopol na Península da Crimeia. Os atrasos no fim do cerco adiaram várias vezes a data de início da operação, e a cidade só caiu no início de julho.
        </p>
        <p className="mt-4 text-justify">
          A Operação Fridericus I, conduzida pelos alemães contra o "saliente de Izyum", eliminou o saliente soviético na Segunda Batalha de Kharkov, resultando no cerco de uma 
          grande força soviética entre 17 de maio e 29 de maio. Da mesma forma, a Operação Wilhelm atacou Voltshansk em 13 de junho, e a Operação Fridericus atacou Kupiansk em 22 de junho.
        </p>
        <p className="mt-4 text-justify">
          A operação Blau finalmente começou quando o Grupo de Exércitos Sul iniciou seu ataque ao sul da Rússia em 28 de junho de 1942. A ofensiva alemã obteve sucesso rápido, 
          já que as forças soviéticas ofereceram pouca resistência nas vastas estepes vazias e começaram a recuar para o leste. Várias tentativas de restabelecer uma linha defensiva 
          falharam quando unidades alemãs as flanqueavam. Dois grandes bolsões foram formados e destruídos: o primeiro, ao nordeste de Kharkov, em 2 de julho, e o segundo, em torno 
          de Millerovo, no Oblast de Rostov, uma semana depois. Enquanto isso, o 2º Exército Húngaro e o 4º Exército Panzer Alemão haviam lançado um ataque a Voronezh, capturando a 
          cidade em 5 de julho.
        </p>
        <p className="mt-4 text-justify">
          O avanço inicial do 6º Exército foi tão bem-sucedido que Hitler interveio e ordenou que o 4º Exército Panzer se juntasse ao Grupo de Exércitos Sul (A) ao sul. 
          Um enorme bloqueio de estradas ocorreu quando o 4º Panzer e o 1º Panzer congestionaram as estradas, parando ambos enquanto limpavam o caos de milhares de veículos. 
          Estima-se que o engarrafamento tenha atrasado o avanço em pelo menos uma semana. Com o avanço agora desacelerado, Hitler mudou de ideia e reassumiu o 4º Exército Panzer 
          para o ataque a Stalingrado.
        </p>
        <p className="mt-4 text-justify">
          No final de julho, as forças soviéticas foram empurradas de volta através do rio Don. Nesse ponto, os rios Don e Volga estão a apenas 65 km de distância, e os alemães 
          deixaram seus principais depósitos de suprimentos a oeste do Don. Os alemães começaram a usar os exércitos de seus aliados italianos, húngaros e romenos para proteger 
          seu flanco esquerdo (norte). As ações italianas também foram mencionadas em comunicados oficiais alemães. As forças italianas eram geralmente vistas com pouco respeito 
          pelos alemães e acusadas de baixa moral: na realidade, as divisões italianas lutaram relativamente bem, com a 3ª Divisão de Infantaria "Ravenna" e a 5ª Divisão de 
          Infantaria "Cosseria" demonstrando espírito, de acordo com um oficial de ligação alemão. As forças italianas foram forçadas a recuar apenas após um ataque maciço de tanques, 
          no qual os reforços alemães não chegaram a tempo.
        </p>
        <p className="mt-4 text-justify">
          Ao sul, o Grupo de Exércitos A estava avançando profundamente no Cáucaso, mas o avanço desacelerou à medida que as linhas de suprimento ficavam sobrecarregadas. 
          Os dois grupos de exércitos alemães estavam muito distantes para apoiar um ao outro.
        </p>
        <p className="mt-4 text-justify">
          Depois que as intenções alemãs ficaram claras em julho, Stalin nomeou o General Andrey Yeryomenko como comandante da Frente Sudeste em 1º de agosto de 1942. 
          Yeryomenko e o Comissário Nikita Khrushchev foram encarregados de planejar a defesa de Stalingrado. Além do rio Volga, na fronteira leste de Stalingrado, unidades 
          soviéticas adicionais foram formadas no 62º Exército, sob o comando do Tenente General Vasiliy Chuikov, em 11 de setembro de 1942. Encarregado de manter a cidade a 
          qualquer custo, Chuikov proclamou: "Defenderemos a cidade ou morreremos tentando." A batalha lhe rendeu uma das duas honras de Herói da União Soviética.
        </p>
      </div>

      <div className="mt-8 text-lg text-gray-600 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Ataque Inicial</h1>

        <div className="relative mb-4 max-w-4xl w-full">
          <Image
            src="/battles-image/stalingrad/battleplans-stalingrad.png"
            alt="Prelúdio da Batalha de Stalingrado"
            layout="intrinsic"
            width={800}
            height={500}
            className="rounded-lg shadow-md mx-auto"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <p className="mt-4 text-justify">
          As forças alemãs se enfrentaram com a Frente de Stalingrado pela primeira vez em 17 de julho, nas abordagens distantes a Stalingrado, na curva do Don. 
          Um confronto significativo nas primeiras fases da batalha ocorreu em Kalach, onde "Tivemos que pagar um alto custo em homens e material... deixados no campo de batalha de Kalach estavam inúmeros tanques alemães queimados ou destruídos." 
          O historiador militar David Glantz indicou que quatro batalhas intensas – coletivamente conhecidas como as Operações Kotluban – ao norte de Stalingrado, onde os soviéticos fizeram sua maior resistência, decidiram o destino da Alemanha antes que os nazistas pisassem na cidade, sendo um ponto de virada na guerra. 
          Começando no final de agosto e durando até outubro, os soviéticos comprometeram entre dois e quatro exércitos em ataques apressadamente coordenados e mal controlados contra o flanco norte dos alemães. 
          As ações resultaram em mais de 200.000 baixas do Exército Soviético, mas retardaram o ataque alemão.
        </p>

        <p className="mt-4 text-justify">
          Os alemães formaram cabeceiras de ponte ao longo do Don em 20 de agosto, com as Divisões de Infantaria 295ª e 76ª permitindo que o XIV Corpo de Tanques "avançasse até o Volga, ao norte de Stalingrado". 
          O 6º Exército alemão estava a apenas algumas dezenas de quilômetros de Stalingrado. 
          O 4º Exército Panzer, ordenado para o sul em 13 de julho para bloquear a retirada soviética "enfraquecida pelo 17º Exército e o 1º Exército Panzer", havia se virado para o norte para ajudar a tomar a cidade pelo sul. 
          Em 19 de agosto, as forças alemãs estavam em posição para lançar um ataque à cidade.
        </p>

        <p className="mt-4 text-justify">
          Em 23 de agosto, o 6º Exército chegou às margens de Stalingrado, em perseguição aos Exércitos 62º e 64º, que haviam recuado para a cidade. 
          Kleist disse após a guerra:
        </p>

        <blockquote className="mt-4 text-justify italic">
          "A captura de Stalingrado era subsidiária ao objetivo principal. Era importante apenas como um local conveniente, no estreitamento entre o Don e o Volga, onde poderíamos bloquear um ataque em nosso flanco pelas forças russas vindo do leste. 
          No início, Stalingrado não era mais do que um nome no mapa para nós."
        </blockquote>

        <p className="mt-4 text-justify">
          Os soviéticos tiveram aviso suficiente sobre o avanço alemão para enviar grãos, gado e vagões ferroviários através do Volga, fora do alcance dos inimigos. 
          Esta "vitória da colheita" deixou a cidade sem alimentos mesmo antes do ataque alemão começar. 
          Antes que o Heer chegasse à cidade, a Luftwaffe havia cortado o transporte no Volga. 
          Entre 25 e 31 de julho, 32 navios soviéticos foram afundados, com outros nove danificados.
        </p>

        <p className="mt-4 text-justify">
          O Generaloberst Wolfram von Richthofen da Luftflotte 4 lançou cerca de 1.000 toneladas de bombas em 23 de agosto, sendo o ataque aéreo em Stalingrado o bombardeio mais intenso até aquele momento na Frente Oriental, e o raid aéreo mais pesado que já havia ocorrido na Frente Oriental. 
          Pelo menos 90% do estoque habitacional da cidade foi obliterado como resultado. 
          A Fábrica de Tratores de Stalingrado continuou a produzir tanques T-34 até que as tropas alemãs invadiram a planta. 
          O 369º Regimento de Infantaria Reforçado (Croata) foi a única unidade não alemã escolhida pela Wehrmacht para entrar na cidade de Stalingrado durante as operações de assalto, lutando como parte da 100ª Divisão de Caçadores.
        </p>

        <p className="mt-4 text-justify">
          Georgy Zhukov, que era o comandante-geral e comandante da defesa de Stalingrado durante a batalha, observou a importância da batalha, afirmando que:
        </p>

        <blockquote className="mt-4 text-justify italic">
          "Estava claro para mim que a batalha por Stalingrado era de grande significância militar e política. 
          Se Stalingrado caísse, o comando inimigo seria capaz de cortar o sul do país do centro. 
          Poderíamos perder o Volga – a importante via aquática, ao longo da qual uma grande quantidade de mercadorias fluía do Cáucaso."
        </blockquote>

        <p className="mt-4 text-justify">
          Stalin enviou todas as tropas disponíveis para a margem oriental do Volga, algumas vindas até da Sibéria. 
          As balsas regulares do rio foram rapidamente destruídas pela Luftwaffe, que então atacou as barcaças de tropas que eram rebocadas lentamente por rebocadores. 
          Diz-se que Stalin impediu os civis de saírem da cidade acreditando que sua presença incentivaria uma maior resistência dos defensores da cidade. 
          Civis, incluindo mulheres e crianças, foram colocados para trabalhar na construção de trincheiras e fortificações protetoras. 
          As baixas devido ao ataque aéreo de 23 de agosto e além são debatidas, pois entre 23 e 26 de agosto, os relatórios soviéticos indicam que 955 pessoas foram mortas e outras 1.181 feridas como resultado do bombardeio. 
          No entanto, o número de mortos entre os civis devido ao bombardeio foi estimado em 40.000, ou até 70.000, embora essas estimativas possam ser exageradas. 
          Também se estimam 150.000 feridos.
        </p>

        <p className="mt-4 text-justify">
          A Força Aérea Soviética, a Voyenno-Vozdushnye Sily (VVS), foi completamente dominada pela Luftwaffe. 
          As bases da VVS na área imediata perderam 201 aeronaves entre 23 e 31 de agosto e, apesar dos modestos reforços de cerca de 100 aeronaves ao longo de agosto, restaram apenas 192 aeronaves operacionais, das quais 57 eram caças.
        </p>

        <p className="mt-4 text-justify">
          No início de 23 de agosto, as Divisões Panzer 16ª e Motorizada 3ª alemãs atacaram a partir da cabeceira de ponte em Vertyachy com uma força de 120 tanques e mais de 200 veículos blindados de transporte de tropas. 
          O ataque alemão rompeu o 1382º Regimento de Fuzileiros da 87ª Divisão de Fuzileiros e a 137ª Brigada de Tanques, que foram forçados a recuar em direção a Dmitryevka. 
          A 16ª Divisão Panzer avançou em direção ao Volga, apoiada pelos ataques das aeronaves de ataque ao solo Henschel Hs 129.
        </p>

        <p className="mt-4 text-justify">
          Cruzando a linha ferroviária para Stalingrado na estação do quilômetro 564 ao meio-dia, ambas as divisões continuaram sua investida em direção ao rio. 
          Por volta das 15h, o Destacamento Panzer de Hyacinth Graf Strachwitz e o Kampfgruppe do 2º Batalhão do 64º Regimento Panzer Grenadier da 16ª Panzer chegaram às áreas de Latashanka, Rynok e Spartanovka, nos subúrbios do norte de Stalingrado, e à Fábrica de Tratores de Stalingrado.
        </p>

        <p className="mt-4 text-justify">
          Uma soldada soviética relatou sobre a batalha:
        </p>

        <blockquote className="mt-4 text-justify italic">
          "Eu imaginava como era a guerra – tudo em chamas, crianças chorando, gatos correndo de um lado para o outro, e quando chegamos a Stalingrado, descobri que era realmente assim, só que ainda mais terrível."
        </blockquote>

        <p className="mt-4 text-justify">
          Uma das primeiras unidades a oferecer resistência nesta área foi o 1077º Regimento Antiaéreo, que cobria a Fábrica de Tratores de Stalingrado e a balsa do Volga perto de Latashanka. 
          A maioria do regimento era composta por homens, mas as equipes de direção, medição de alcance e o quartel-general da unidade eram formados por mulheres. 
          Várias mulheres também operavam os canhões antiaéreos. O 1077º foi notificado sobre a aproximação dos tanques alemães às 14h30, e sua 6ª Bateria, que dominava o desfiladeiro Sukhaya Mechatka, afirmou ter destruído 28 tanques alemães. 
          Mais tarde naquele dia, sua 3ª Bateria, na estrada entre Yerzovka e Stalingrado, enfrentou combates intensos contra a 16ª Panzer, lutando, segundo relatos, "tiro por tiro". 
        </p>

        <p className="mt-4 text-justify">
          Duas mulheres foram condecoradas por suas ações naquele dia, e o relatório do regimento elogiou a "excepcional firmeza e heroísmo" das soldadas. 
          O regimento perdeu 35 canhões, teve dezoito mortos, 46 feridos e 74 desaparecidos nos dias 23 e 24 de agosto. 
          A história da 16ª Divisão Panzer mencionou seu encontro com o regimento, alegando a destruição de 37 canhões, além de destacar a surpresa ao descobrir que seus oponentes incluíam mulheres.
        </p>

        <p className="mt-4 text-justify">
          Nos estágios iniciais da batalha, o NKVD organizou "milícias de trabalhadores" mal armadas, semelhantes às que haviam defendido a cidade vinte e quatro anos antes. 
          Essas milícias eram compostas por civis que não estavam diretamente envolvidos na produção de guerra e foram enviadas imediatamente para a batalha. 
          Frequentemente, os civis eram enviados ao combate sem rifles. 
        </p>

        <p className="mt-4 text-justify">
          O corpo técnico e os estudantes da universidade técnica local formaram uma unidade "destruidora de tanques". 
          Eles montaram tanques a partir de peças sobressalentes na fábrica de tratores. Esses tanques, não pintados e sem miras, eram dirigidos diretamente do chão da fábrica para a linha de frente. 
          Só podiam ser disparados a curta distância, mirando pelo cano das armas. Chuikov comentou posteriormente que os soldados que chegavam à batalha diziam: 
          "Estamos entrando no inferno", mas após um ou dois dias, diziam: "Não, isso não é o inferno, isso é dez vezes pior que o inferno."
        </p>

        <p className="mt-4 text-justify">
          No final de agosto, o Grupo de Exércitos Sul (B) finalmente alcançou o Volga, ao norte de Stalingrado. 
          Outro avanço para o rio, ao sul da cidade, seguiu-se, enquanto os soviéticos abandonavam sua posição em Rossoshka em direção ao anel defensivo interno a oeste de Stalingrado. 
          As alas do 6º Exército e do 4º Exército Panzer se encontraram perto de Jablotchni ao longo do Zaritza em 2 de setembro.
        </p>
    </div>

    <div className="mt-8 text-lg text-gray-600">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Operação Urano</h1>
      <p className="text-justify">
        No outono, Zhukov e Vasilevsky, responsáveis pelo planejamento estratégico na área de Stalingrado, concentraram forças nas estepes ao norte e ao sul da cidade.
        O flanco norte era defendido por unidades romenas, muitas vezes posicionadas em áreas abertas nas estepes. A linha natural de defesa, o rio Don, nunca foi
        devidamente estabelecida pelo lado alemão. Os exércitos na região também estavam mal equipados em termos de armas antitanque. O plano soviético era romper
        os flancos estendidos e fracamente defendidos e cercar as forças alemãs na região de Stalingrado.
      </p>
      <p className="mt-4 text-justify">
        Durante os preparativos para o ataque, o Marechal Zhukov visitou pessoalmente a frente de batalha e, ao perceber a má organização, insistiu em um adiamento
        de uma semana no início do ataque planejado. A operação foi codinomeada "Urano" e lançada em conjunto com a Operação Marte, que foi direcionada ao Grupo de
        Exércitos Centro, cerca de 1.000 quilômetros a noroeste. O plano era semelhante ao usado por Zhukov para alcançar a vitória em Khalkhin Gol em 1939, onde ele
        realizou um cerco duplo e destruiu a 23ª Divisão do exército japonês.
      </p>
      <p className="mt-4 text-justify">
        Em 19 de novembro de 1942, a Operação Urano foi lançada. As unidades soviéticas atacantes, sob o comando do general Nikolay Vatutin, consistiam em três exércitos
        completos: o 1º Exército de Guardas, o 5º Exército de Tanques e o 21º Exército, incluindo um total de 18 divisões de infantaria, oito brigadas de tanques, duas
        brigadas motorizadas, seis divisões de cavalaria e uma brigada antitanque. Os preparativos para o ataque foram percebidos pelos romenos, que pediram reforços,
        mas foram recusados. O 3º Exército da Romênia, que protegia o flanco norte do 6º Exército alemão, foi devastado devido às linhas finas, ao número inferior de tropas
        e à falta de equipamentos adequados.
      </p>
      <p className="mt-4 text-justify">
        Em 20 de novembro, uma segunda ofensiva soviética (composta por dois exércitos) foi lançada ao sul de Stalingrado contra posições mantidas pelo 4º Corpo de Exército
        Romeno. As forças romenas, compostas principalmente por infantaria, foram devastadas por grandes números de tanques. As forças soviéticas avançaram para o oeste e
        se encontraram em 23 de novembro na cidade de Kalach, fechando o cerco em torno de Stalingrado.
      </p>
    </div>

    <div className="mt-8 text-lg text-gray-600">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">6º Exército Cercado</h1>
      <p className="text-justify">
        No momento do cerco, aproximadamente 330.000 soldados do Eixo, incluindo alemães, romenos, italianos e croatas, estavam presos. Entre eles, havia entre 40.000 e
        65.000 Hilfswillige (Hiwi), ou "auxiliares voluntários", recrutados entre prisioneiros de guerra soviéticos e civis. Esses Hiwi frequentemente atuavam em funções
        de apoio, mas também eram destacados para unidades da linha de frente devido ao aumento de seus números.
      </p>
      <p className="mt-4 text-justify">
        As condições dentro do 6º Exército Alemão se deterioraram, tornando-se semelhantes às da guerra de trincheiras da Primeira Guerra Mundial. As tropas foram
        obrigadas a ocupar posições em campo aberto na estepe, sem condições básicas de saneamento, o que levou à rápida disseminação de infecções e disenteria,
        debilitando ainda mais os soldados. Em 19 de novembro de 1942, as forças alemãs cercadas somavam cerca de 210.000 homens, com 50.000 soldados fora do cerco.
        Dos que ficaram presos, 10.000 continuaram a lutar, 105.000 eventualmente se renderam, 35.000 foram evacuados por via aérea e 60.000 morreram.
      </p>
      <p className="mt-4 text-justify">
        Apesar da situação desesperadora do 6º Exército, nenhum reforço foi retirado do Grupo de Exércitos A no Cáucaso para ajudar no alívio de Stalingrado.
        Somente após as forças soviéticas romperem as linhas na Operação Pequeno Saturno, ameaçando cercar o Grupo de Exércitos A, foi ordenada uma retirada em 31
        de dezembro para evitar o completo aprisionamento.
      </p>
      <p className="mt-4 text-justify">
        O Grupo de Exércitos Don foi estabelecido sob o comando do Marechal de Campo von Manstein, com a tarefa de liderar as 20 divisões alemãs e duas romenas
        cercadas em Stalingrado. Apesar da recomendação de Manstein para uma ruptura, Hitler insistiu em manter a cidade, confiando em uma ponte aérea malfadada
        para abastecer o 6º Exército, que falhou em fornecer os suprimentos necessários. A ponte aérea ficou muito aquém do necessário, entregando apenas 105 toneladas
        por dia, muito abaixo das 750 toneladas requeridas. A situação piorou após os soviéticos capturarem o aeródromo de Tatsinskaya em 24 de dezembro, forçando os
        alemães a transferir suas operações aéreas para bases mais distantes e menos eficazes. À medida que os suprimentos diminuíam, fome e doenças devastaram o 6º Exército.
        Quando a ponte aérea foi encerrada, a Luftwaffe já havia perdido cerca de 500 aeronaves, incluindo 266 Ju 52s, e não conseguiu manter níveis adequados de abastecimento.
        No final, o fracasso em socorrer Stalingrado selou o destino do 6º Exército, resultando em uma das derrotas mais catastróficas da história militar.
      </p>
    </div>


    <div className="mt-8 text-lg text-gray-600">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Operação Tempestade de Inverno</h1>
      <p className="text-justify">
        O plano de Manstein para resgatar o Sexto Exército – a Operação Tempestade de Inverno – foi desenvolvido em total consulta com o quartel-general de Hitler.
        Ele tinha como objetivo romper o cerco ao Sexto Exército e estabelecer um corredor para mantê-lo abastecido e reforçado, de modo que, de acordo com a ordem
        de Hitler, ele pudesse manter sua posição de "pedra angular" no Volga, "com relação às operações em 1943". No entanto, Manstein, que sabia que o Sexto Exército
        não poderia sobreviver ao inverno naquela posição, instruiu seu quartel-general a elaborar um plano adicional, caso Hitler mudasse de ideia.
      </p>
      <p className="mt-4 text-justify">
        Este plano adicional incluía uma fuga subsequente do Sexto Exército, no caso de uma fase inicial bem-sucedida, e sua reincorporação física ao Grupo de Exércitos Don.
        Este segundo plano recebeu o nome de Operação Trovão. Como previsto por Zhukov, a Tempestade de Inverno foi originalmente planejada como um ataque em duas frentes.
        Um avanço viria da área de Kotelnikovo, bem ao sul, a cerca de 160 quilômetros (100 milhas) do Sexto Exército. O outro partiria da frente de Chir, a oeste do Don,
        a pouco mais de 60 quilômetros (40 milhas) da borda do "Kessel" (caldeirão, referência ao cerco), mas os ataques contínuos do 5º Exército de Tanques de Romanenko
        contra os destacamentos alemães ao longo do rio Chir inviabilizaram essa linha de partida.
      </p>
      <p className="mt-4 text-justify">
        Isso deixou apenas o LVII Corpo Panzer em torno de Kotelnikovo, apoiado pelo resto do muito diversificado Quarto Exército Panzer de Hoth, para aliviar as divisões
        cercadas de Paulus. O LVII Corpo Panzer, comandado pelo General Friedrich Kirchner, era inicialmente fraco. Ele consistia de duas divisões de cavalaria romenas
        e a 23ª Divisão Panzer, que contava com não mais que trinta tanques em condições de operação. A 6ª Divisão Panzer, chegando da França, era uma formação muito mais
        poderosa, mas seus membros dificilmente receberam uma impressão encorajadora.
      </p>
      <p className="mt-4 text-justify">
        Em 18 de dezembro, o Exército Alemão avançou até 48 km (30 milhas) das posições do Sexto Exército. No entanto, a previsibilidade da operação de socorro trouxe um risco
        significativo para todas as forças alemãs na área. As forças famintas cercadas em Stalingrado não fizeram nenhuma tentativa de romper o cerco ou se unir ao avanço de
        Manstein. Alguns oficiais alemães solicitaram que Paulus desafiasse as ordens de Hitler para manter a posição e, em vez disso, tentasse romper o cerco em Stalingrado.
        Paulus recusou, preocupado com os ataques do Exército Vermelho no flanco do Grupo de Exércitos Don e do Grupo de Exércitos B em sua marcha sobre Rostov-no-Don.
      </p>
    </div>

    <div className="mt-8 text-lg text-gray-600">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Operação Pequeno Saturno</h1>
      <img 
        src="/battles-image/stalingrad/operation-little-saturn.png" 
        alt="Operação Pequeno Saturno" 
        className="w-auto h-auto max-w-full max-h-96 mx-auto mb-4"
      />
      <p className="text-justify">
        Em 16 de dezembro, os soviéticos lançaram a Operação Pequeno Saturno, que tinha como objetivo atravessar o exército do Eixo (principalmente italianos) no rio Don.
        Os alemães estabeleceram uma "defesa móvel" com pequenas unidades que deveriam manter as cidades até que reforços blindados chegassem. A partir da cabeça de ponte
        soviética em Mamon, 15 divisões – apoiadas por pelo menos 100 tanques – atacaram as divisões italianas Cosseria e Ravenna. Apesar de estarem em desvantagem
        numérica de 9 para 1, os italianos lutaram bem inicialmente, recebendo elogios dos alemães pela qualidade de sua defesa. No entanto, em 19 de dezembro, com as linhas
        italianas se desintegrando, o quartel-general da ARMIR ordenou que as divisões devastadas recuassem para novas linhas.
      </p>
      <p className="mt-4 text-justify">
        Os combates forçaram uma reavaliação total da situação alemã. Percebendo que esta era a última chance de uma ruptura, Manstein implorou a Hitler em 18 de dezembro,
        mas Hitler recusou. O próprio Paulus também duvidava da viabilidade de tal tentativa. O plano de romper em direção a Stalingrado foi abandonado, e o Grupo de Exércitos A
        recebeu ordens de recuar do Cáucaso. O 6º Exército já estava além de qualquer esperança de alívio alemão. Embora uma fuga motorizada pudesse ter sido possível nas
        primeiras semanas, o 6º Exército agora não tinha combustível suficiente, e os soldados alemães enfrentariam grandes dificuldades para atravessar as linhas soviéticas
        a pé em condições rigorosas de inverno. Mesmo assim, na sua posição defensiva no Volga, o 6º Exército continuou a imobilizar um número significativo de exércitos soviéticos.
      </p>
      <p className="mt-4 text-justify">
        Em 23 de dezembro, a tentativa de aliviar Stalingrado foi abandonada, e as forças de Manstein mudaram para a defensiva para lidar com novas ofensivas soviéticas.
        Como Zhukov afirma:
      </p>
      <blockquote className="mt-4 italic border-l-4 border-gray-400 pl-4 text-justify">
        A liderança militar e política da Alemanha Nazista não buscava aliviá-los, mas sim fazê-los lutar o máximo possível para imobilizar as forças soviéticas.
        O objetivo era ganhar o máximo de tempo possível para retirar forças do Cáucaso (Grupo de Exércitos A) e enviar tropas de outras frentes para formar uma nova
        linha de defesa que pudesse, em alguma medida, conter nossa contraofensiva.
      </blockquote>
    </div>

    <div className="mt-8 text-lg text-gray-600">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Vitória Soviética</h1>
      <img 
        src="/battles-image/stalingrad/konstantin-in-front.jpg" 
        alt="Konstantin no front" 
        className="w-auto h-auto max-w-full max-h-96 mx-auto mb-4 border-4 border-gray-300 rounded-lg"
      />

      <p className="text-center font-semibold text-gray-700">
        Comandante-em-chefe da Frente do Don, General Konstantin Rokossovsky
      </p>

      <p className="text-justify mt-4">
        O Alto Comando do Exército Vermelho enviou três emissários enquanto, simultaneamente, aeronaves e alto-falantes anunciavam os termos de capitulação em 7 de janeiro de 1943. 
        A carta foi assinada pelo Coronel-General de Artilharia Voronov e pelo comandante-chefe da Frente do Don, Tenente-General Rokossovsky. Um grupo de emissários soviéticos de 
        baixo escalão (composto pelo Major Aleksandr Smyslov, Capitão Nikolay Dyatlenko e um trompetista) levou termos generosos de rendição para Paulus: se ele se rendesse dentro 
        de 24 horas, receberia garantias de segurança para todos os prisioneiros, cuidados médicos para os doentes e feridos, permissão para que os prisioneiros mantivessem seus 
        pertences pessoais, rações "normais" de alimentos e repatriação para qualquer país que desejassem após a guerra. A carta de Rokossovsky também enfatizava que os homens de 
        Paulus estavam em uma situação insustentável. Paulus pediu permissão para se render, mas Hitler rejeitou o pedido de imediato. Assim, Paulus não respondeu.
      </p>
      <p className="mt-4 text-justify">
        A operação começou em 10 de janeiro de 1943 com o que foi o maior bombardeio da guerra até aquele momento, com quase 7.000 canhões de campanha, lançadores e morteiros 
        disparando contra as posições alemãs. A operação foi provavelmente a maior ofensiva de economia de forças conduzida na história militar. Os alemães recuaram dos subúrbios 
        de Stalingrado para a cidade. A perda dos dois aeródromos, Pitomnik em 16 de janeiro de 1943 e Gumrak na noite de 21/22 de janeiro, significou o fim do abastecimento aéreo 
        e da evacuação dos feridos. A terceira e última pista de pouso utilizável, na escola de voo de Stalingradskaya, teve seus últimos pousos e decolagens em 23 de janeiro. Após 
        essa data, não houve mais pousos registrados, apenas lançamentos intermitentes de suprimentos até o fim.
      </p>
      <p className="mt-4 text-justify">
        Apesar da terrível situação enfrentada pelas forças alemãs, famintas e sem munição, elas continuaram a resistir. Transcrições mostram que, embora muitos soldados alemães 
        gritassem "Hitler kaput" para evitar serem mortos ao se renderem, o nível de resistência armada permaneceu extraordinariamente alto até o final da batalha. Em particular, os 
        chamados HiWis, cidadãos soviéticos lutando pelos alemães, não tinham ilusões sobre seu destino caso fossem capturados. A guerra urbana sangrenta recomeçou em Stalingrado, 
        mas desta vez foram os alemães que foram empurrados para as margens do Volga.
      </p>
      <p className="mt-4 text-justify">
        Em 30 de janeiro de 1943, no 10º aniversário da ascensão de Hitler ao poder, Goebbels leu uma proclamação incluindo a frase: "A luta heroica de nossos soldados no Volga 
        deve ser um aviso para todos darem o máximo pela luta pela liberdade da Alemanha e pelo futuro do nosso povo". O mesmo dia, Hitler promoveu Paulus a Generalfeldmarschall, 
        acreditando que ele preferiria lutar até o último homem ou cometer suicídio em vez de se render.
      </p>
      <p className="mt-4 text-justify">
        No dia seguinte, a situação do 6º Exército colapsou. As forças soviéticas alcançaram a entrada do quartel-general alemão no departamento GUM destruído. Em 2 de fevereiro, 
        as forças restantes do norte, comandadas pelo General Karl Strecker, se renderam. Cerca de 91.000 prisioneiros exaustos, doentes, feridos e famintos foram capturados, 
        incluindo 22 generais. Hitler ficou furioso e confidenciou que Paulus "poderia ter se libertado de toda a tristeza e ascendido à eternidade e à imortalidade nacional, mas 
        prefere ir para Moscou".
      </p>
    </div>
    
    <button
      onClick={() => window.history.back()} // Voltar para a página anterior
      className="fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-md shadow-md text-sm hover:bg-blue-700 transition"
    >
      Voltar
    </button>


    </div>

  );
}

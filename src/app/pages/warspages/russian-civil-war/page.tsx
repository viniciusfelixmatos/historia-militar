'use client'; // Diretiva para tornar este componente um componente de cliente

import { useRouter } from 'next/navigation';

export default function RussianCivilWar() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Seção de Introdução */}
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Guerra Civil Russa</h1>
        <img
          src="/wars-images/russian-civil-war/russian-intro.jpg"
          alt="Introdução à Guerra Civil Russa"
          className="w-auto h-auto max-w-full max-h-96 mx-auto mb-4 border-4 border-gray-300 rounded-lg"
        />
        <div className="text-gray-700 text-justify leading-relaxed space-y-4">
          <p className="text-lg text-gray-700 mb-4">
            A Guerra Civil Russa (em russo: Гражданская война в России, romanizado: Grazhdanskaya voyna v Rossii) foi uma 
            guerra civil multipartidária no antigo Império Russo, desencadeada pela derrubada do Governo Provisório Russo 
            durante a Revolução de Outubro, quando várias facções lutaram para determinar o futuro político da Rússia. Ela 
            resultou na formação da República Socialista Federativa Soviética da Rússia e, posteriormente, na União Soviética 
            na maior parte de seu território. Seu desfecho marcou o fim da Revolução Russa, um dos eventos-chave do século XX.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A monarquia russa terminou com a abdicação do czar Nicolau II durante a Revolução de Fevereiro, deixando a Rússia 
            em estado de incerteza política. O verão tenso culminou na Revolução de Outubro, quando os bolcheviques derrubaram 
            o governo provisório da nova República Russa. A tomada do poder pelos bolcheviques não foi universalmente aceita, 
            e o país mergulhou em um conflito que se tornou uma guerra civil em grande escala entre maio e junho de 1918.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Os dois maiores combatentes foram o Exército Vermelho, lutando pela criação de um estado socialista liderado pelos 
            bolcheviques sob Vladimir Lenin, e as forças conhecidas como Movimento Branco (e seu Exército Branco), lideradas 
            principalmente por oficiais pró-monarquia do antigo Império Russo, como Alexander Kolchak. Além disso, grupos 
            socialistas rivais, notavelmente os anarquistas ucranianos de Makhnovshchina e os Socialistas-Revolucionários de 
            Esquerda, também estavam envolvidos em conflitos contra os bolcheviques.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Treze estados estrangeiros intervieram contra o Exército Vermelho, notavelmente a intervenção Aliada, cujo objetivo 
            principal era restabelecer a Frente Oriental da Primeira Guerra Mundial. Além disso, três estados estrangeiros das 
            Potências Centrais intervieram para manter o território que haviam recebido no Tratado de Brest-Litovsk com a Rússia 
            Soviética.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A guerra continuou com altos e baixos para ambas as partes. O Exército Branco lançou várias ofensivas em 1919, mas, 
            no início de 1920, já estava em retirada e derrotado em todas as frentes. Apesar da vitória dos bolcheviques, o 
            território do Estado Russo foi reduzido, pois muitos grupos étnicos não russos usaram o caos para buscar a 
            independência nacional.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Em março de 1921, durante uma guerra relacionada contra a Polônia, foi assinado o Tratado de Riga, dividindo os 
            territórios disputados na Bielorrússia e na Ucrânia entre a República da Polônia, de um lado, e a Rússia Soviética 
            e a Ucrânia Soviética, de outro. Os bolcheviques também enfrentaram movimentos nacionalistas na Ucrânia, Cáucaso e 
            Ásia Central, alguns dos quais duraram até o final da década de 1920.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Estima-se que entre 7 e 12 milhões de pessoas tenham morrido durante a guerra, a maioria civis, devido à violência, 
            fome e doenças.
          </p>
        </div>
      </section>

      {/* Seção de Conteúdo Principal */}
            {/* Nova Seção: Contexto Histórico */}
      {/* Nova Seção: Contexto Histórico */}
      <section className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Plano de Fundo</h2>
        <div className="text-gray-700 text-justify leading-relaxed space-y-4">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Da Primeira Guerra Mundial à Revolução Russa</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            O Império Russo lutou na Primeira Guerra Mundial a partir de 1914 ao lado da França e do Reino Unido (Triple Entente), 
            contra a Alemanha, Áustria-Hungria e o Império Otomano (Potências Centrais).
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A Revolução de Fevereiro de 1917 resultou na abdicação do Imperador Nicolau II da Rússia. Como resultado, o Governo 
            Provisório foi formado por uma coalizão de partidos de centro, e os sovietes, conselhos eleitos de trabalhadores, soldados 
            e camponeses, foram organizados por todo o país, levando a uma situação de poder dual. A República Russa foi proclamada 
            em setembro do mesmo ano.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Revolução de Outubro</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            O Governo Provisório, liderado pelo político do Partido Socialista Revolucionário, Alexander Kerensky, não conseguiu 
            resolver as questões mais urgentes do país, especialmente o fim da guerra com as Potências Centrais. Um golpe militar 
            fracassado do General Lavr Kornilov, em setembro de 1917, levou a um aumento no apoio aos bolcheviques, que assumiram 
            o controle dos sovietes, até então dominados pelos Socialistas Revolucionários. Prometendo o fim da guerra e "todo 
            o poder aos Soviets", os bolcheviques derrubaram o Governo Provisório no final de outubro, na véspera do Segundo Congresso 
            Pan-Russo dos Sovietes de Deputados Trabalhadores e Soldados, no que seria a segunda Revolução de 1917.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A primeira fase da Revolução de Outubro, que envolveu o ataque a Petrogrado, ocorreu de forma praticamente sem vítimas 
            humanas. Apesar da tomada de poder pelos bolcheviques, eles perderam para o Partido Socialista Revolucionário nas 
            eleições para a Assembleia Constituinte Russa de 1917, e a Assembleia Constituinte foi dissolvida pelos bolcheviques em 
            retaliação.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Os bolcheviques logo perderam o apoio de outros aliados de extrema-esquerda, como os Socialistas Revolucionários de 
            Esquerda, após aceitarem os termos do Tratado de Brest-Litovsk imposto pelo Império Alemão.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Resolução sobre o Poder Constituinte</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Em 4 de janeiro de 1918, o Comitê Executivo Central Pan-russo emitiu uma resolução dizendo que o slogan 
            "todo o poder à Assembleia Constituinte" era contrarrevolucionário e equivalente a "fora com os sovietes".
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A Assembleia Constituinte se reuniu em 18 de janeiro de 1918. O SR de direita Chernov foi eleito presidente, derrotando 
            a candidata apoiada pelos bolcheviques, a SR de esquerda Maria Spiridonova (que mais tarde rompeu com os bolcheviques e 
            após décadas de gulag, foi executada a mando de Stalin em 1941). Os bolcheviques, subsequentemente, dissolveram a Assembleia 
            Constituinte e passaram a governar o país como um estado de partido único, com todos os partidos de oposição banidos em 1921.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Uma manifestação simultânea em favor da Assembleia Constituinte foi dispersa à força, mas houve pouca protesto posteriormente.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Repressão da Cheka e o Levante da Assembleia Constituinte</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A primeira grande repressão da Cheka, envolvendo a morte de socialistas libertários em Petrogrado, começou em abril de 1918. 
            Em 1º de maio de 1918, ocorreu uma batalha em Moscovo entre os anarquistas e a polícia bolchevique.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A União de Regeneração foi fundada em Moscovo em abril de 1918 como uma organização subterrânea de "resistência democrática" 
            aos bolcheviques, composta por Socialistas Populares e "representantes pessoais" de SR de direita, Kadets e Defensistas, 
            entre outros. Eles tinham a missão de apoiar as forças anti-bolcheviques e criar um sistema estatal russo baseado em 
            "consciência estatal, patriotismo e liberdades civis", com o objetivo de libertar o país do "jugo Germano-Bolchevique".
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Em 7 de maio de 1918, o Oitavo Conselho do Partido do Socialismo Revolucionário começou em Moscovo e reconheceu o papel 
            principal da União, deixando de lado ideologias políticas e classes para salvar a Rússia. Eles decidiram iniciar um levante 
            contra os bolcheviques, com o objetivo de reconvocar a Assembleia Constituinte Russa.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Movimento Branco e Intervenções Estrangeiras</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            O principal movimento militar e político russo que se opôs aos bolcheviques era conhecido como o Movimento Branco, ou 
            simplesmente os Brancos; suas formações armadas eram chamadas de Exército Branco.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Alguns historiadores distinguem o Movimento Branco da chamada "contrarrevolução democrática", liderada principalmente pelos 
            SRs de direita e os Mencheviques, que defendiam os valores da democracia parlamentar e mantinham contra-governos 
            anti-bolcheviques (Komuch, Diretório de Ufa) com base em uma aliança com os partidos de direita da Rússia até novembro de 1918.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Após o golpe de Kolchak, os SRs de direita e os Mencheviques passaram a se opor aos Brancos, cooperando com ambas as 
            facções da Guerra Civil em um nível tático, ao mesmo tempo em que tentavam derrubar as administrações Brancas ou 
            estabelecerem-se como "a terceira força" da guerra.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            O movimento branco incluía uma variedade de opiniões políticas, desde liberais até monarquistas e os ultranacionalistas 
            Black Hundreds. O principal apoio ao movimento vinha dos oficiais conservadores, e o movimento compartilhava muitas 
            características com os movimentos contrarrevolucionários de direita da época, como nacionalismo, racismo e desconfiança 
            pela política liberal e democrática.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Intervenção Aliada</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Os Aliados Ocidentais armados apoiaram os Brancos, preocupados com uma possível aliança russo-alemã e com a ameaça 
            de que os bolcheviques cumprissem suas ameaças de não pagar as enormes dívidas externas da Rússia Imperial.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            O Império Alemão também apoiou as forças anti-bolcheviques e os Brancos, após o Tratado de Brest-Litovsk, com o objetivo 
            de manter os territórios recentemente conquistados e evitar o restabelecimento da Frente Oriental.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Movimentos Pró-Independência e Protetorados Alemães</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            O Império Alemão criou vários estados-tampão de curta duração dentro de sua esfera de influência após o Tratado de 
            Brest-Litovsk, incluindo o Ducado Báltico Unido, o Ducado da Curlândia e Semigália, o Reino da Lituânia, o Reino da Polônia, 
            a República Popular da Bielorrússia e o Estado Ucraniano.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            A Finlândia foi o primeiro país a declarar sua independência da Rússia em dezembro de 1917 e estabeleceu-se na 
            subsequente Guerra Civil Finlandesa entre os Guardas Brancos nacionalistas apoiados pelos alemães e os Guardas Vermelhos 
            bolcheviques de janeiro a maio de 1918.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Oposição e repressão na Rússia Soviética</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
          No Congresso de Soviets de Toda a Rússia de 4 de julho de 1918, os Socialistas-Revolucionários de Esquerda tinham 352 delegados, comparados a 745 bolcheviques de um total de 1132.
          Os SRs de Esquerda levantaram divergências sobre a supressão de partidos rivais, a pena de morte e, principalmente, o Tratado de Brest-Litovsk. Os bolcheviques excluíram
          os SRs de Direita e os Mencheviques do governo em 14 de junho por se associarem com contra-revolucionários e buscarem "organizar ataques armados contra os trabalhadores e camponeses"
          (embora os Mencheviques não existissem como um movimento unido e fossem divididos em facções de esquerda "internacionalistas" e facções mais direitistas), enquanto os SRs de 
          Esquerda defendiam a formação de um governo de todos os partidos socialistas. Os SRs de Esquerda concordavam com a execução extrajudicial de opositores políticos para impedir
          a contra-revolução, mas se opunham a que o governo pronunciasse sentenças de morte legalmente, uma posição incomum que é melhor compreendida no contexto do passado terrorista
          do grupo. Os SRs de Esquerda se opuseram fortemente ao Tratado de Brest-Litovsk e se opuseram à insistência de Trotsky para que ninguém tentasse atacar as tropas alemãs na Ucrânia.
          </p>
          <p className="text-lg text-gray-700 mb-4">
          Segundo o historiador Marcel Liebman, as medidas de guerra de Lenin, como a proibição de partidos de oposição, foram motivadas pelo fato de que vários partidos políticos tomaram
          armas contra a nova República Socialista Federativa Soviética Russa, ou participaram de sabotagem, colaboração com os tsaristas depostos, ou fizeram tentativas de assassinato contra
          Lenin e outros líderes bolcheviques. Liebman observou que partidos de oposição, como os Cadetes e Mencheviques, que haviam sido democraticamente eleitos para os soviets em algumas
          áreas, usaram então seu mandato para dar boas-vindas às forças militares tsaristas e capitalistas estrangeiras. Em um incidente em Baku, o exército britânico, uma vez convidado, 
          executou membros do Partido Bolchevique que haviam se retirado pacificamente do Soviet quando falharam nas eleições. Como resultado, os bolcheviques proibiram cada partido de 
          oposição quando este se voltava contra o governo soviético. Em alguns casos, as proibições foram retiradas. Essa proibição de partidos não teve o mesmo caráter repressivo das 
          proibições posteriores impostas sob o regime de Stalin.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Repressão</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
          Em dezembro de 1917, Felix Dzerzhinsky foi nomeado para a tarefa de erradicar as ameaças contra-revolucionárias ao governo soviético. Ele foi o diretor da Comissão Extraordinária
          All-Russa (também conhecida como Cheka), um precursor da KGB que servia como a polícia secreta para os soviéticos.
          </p>
          <p className="text-lg text-gray-700 mb-4">
          Os bolcheviques começaram a ver os anarquistas como uma ameaça legítima e associaram a criminalidade, como roubos, expropriações e assassinatos, a associações anarquistas. 
          Subsequentemente, o Conselho de Comissários do Povo (Sovnarkom) decidiu liquidar a imprudência criminosa associada aos anarquistas e desarmar todos os grupos anarquistas diante de 
          sua militância.
          </p>
          <p className="text-lg text-gray-700 mb-4">
          Desde o início de 1918, os bolcheviques iniciaram a eliminação física da oposição, de outras frações socialistas e revolucionárias. Os anarquistas estavam entre os primeiros:
          </p>

          <blockquote className="bg-gray-100 border-l-4 border-gray-700 p-6 my-4 italic text-gray-800 font-serif">
            <p className="leading-relaxed">
              De todos os elementos revolucionários na Rússia, são os anarquistas que agora sofrem a perseguição mais implacável e sistemática. A repressão por parte dos bolcheviques começou já em 1918, quando — no mês de abril daquele ano — o governo comunista atacou, sem provocação ou aviso, o Clube Anarquista de Moscovo e, utilizando metralhadoras e artilharia, "liquidou" toda a organização. Foi o começo da perseguição aos anarquistas, mas foi esporádica, ocorrendo de vez em quando, sem planejamento, e frequentemente contraditória.
            </p>
            <footer className="mt-4 text-right text-gray-600 text-sm">
              — Alexander Berkman, Emma Goldman, <cite className="font-bold">"Bolcheviques matando anarquistas"</cite>
            </footer>
          </blockquote>

          <p className="text-lg text-gray-700 mb-4">
          Antes dos eventos que oficialmente catalisaram o Terror Vermelho, Vladimir Lenin emitiu ordens e fez discursos que incluíam expressões duras e descrições de medidas brutais a serem 
          tomadas contra os "inimigos de classe", que, no entanto, muitas vezes não eram ordens reais ou não foram executadas como tal. Por exemplo, em um telegrama que ficou conhecido como 
          "A ordem de enforcar de Lenin", ele exigiu e "esmagou" os proprietários de terras em Penza e mandou "enforcar pelo menos 100 kulaks, bastardos ricos e conhecidos sanguessugas" em 
          resposta a uma revolta lá; no entanto, apenas os 13 organizadores do assassinato de autoridades locais e da revolta foram presos, enquanto a revolta terminou com atividades de 
          propaganda realizadas ali; em 1920, tendo recebido informações de que na Estônia e na Letônia, com as quais a Rússia soviética havia concluído tratados de paz, voluntários estavam 
          sendo recrutados para destacamentos anti-bolcheviques, Lenin ofereceu avançar "10–20 milhas (versts) e enforcar kulaks, padres, proprietários de terras" "enquanto se fingia de verde", 
          mas em vez disso, seu governo se limitou a enviar notas diplomáticas.
          </p>
          <p className="text-lg text-gray-700 mb-4">
          Leonid Kannegisser, um jovem cadete militar do Exército Imperial Russo, assassinou Moisey Uritsky em 17 de agosto de 1918, fora da sede da Cheka em Petrogrado, em retaliação pela 
          execução de seu amigo e outros oficiais.
          </p>
          <p className="text-lg text-gray-700 mb-4">
          Em 30 de agosto, a SR Fanny Kaplan tentou assassinar Lenin sem sucesso, que procurava eliminar a dissidência política, a oposição e qualquer outra ameaça ao poder bolchevique. Como 
          resultado da tentativa frustrada de assassinato contra Lenin, ele começou a reprimir seus inimigos políticos em um evento conhecido como o Terror Vermelho. De maneira mais ampla, o 
          termo é normalmente aplicado à repressão política bolchevique durante toda a Guerra Civil (1917–1922).
          </p>
          <p className="text-lg text-gray-700 mb-4">
          Durante o interrogatório pela Cheka, ela fez a seguinte declaração:
          </p>

          <blockquote className="bg-gray-100 border-l-4 border-gray-700 p-6 my-4 italic text-gray-800 font-serif">
            <p className="leading-relaxed">
            Meu nome é Fanya Kaplan. Hoje eu atirei em Lenin. Eu fiz isso sozinha. Não direi de quem obtive meu revólver. Não darei detalhes. Eu já havia resolvido matar Lenin há muito tempo. 
            Eu o considero um traidor da Revolução. Fui exilada para Akatui por participar de uma tentativa de assassinato contra um oficial tsarista em Kiev. Passei 11 anos no trabalho forçado. Após a Revolução, fui libertada. Eu favorava a Assembleia Constituinte e ainda sou a favor dela.
            </p>
            <footer className="mt-4 text-right text-gray-600 text-sm">
              — Fanny Kaplan
            </footer>
          </blockquote>

          <p className="text-lg text-gray-700 mb-4">Kaplan se referiu ao crescente autoritarismo dos bolcheviques, citando seu fechamento forçado da Assembleia Constituinte em janeiro de 1918, para a qual haviam perdido as eleições. 
            Quando ficou claro que Kaplan não implicaria nenhum cúmplice, ela foi executada no Jardim Alexandre. A ordem foi executada pelo comandante do Kremlin, o ex-marinheiro báltico P. D. 
            Malkov e um grupo de bolcheviques latvianos em 3 de setembro de 1918, com um tiro na nuca. Seu cadáver foi enrolado em um barril e incendiado. A ordem veio de Yakov Sverdlov, que 
            apenas seis semanas antes havia ordenado o assassinato do tsar e sua família.
          </p>
          <p className="text-lg text-gray-700 mb-4">Esses eventos persuadiram o governo a ouvir o apelo de Dzerzhinsky por um maior terror contra a oposição. A campanha de repressões em massa começaria oficialmente a partir daí. 
            O Terror Vermelho é considerado oficialmente iniciado entre 17 e 30 de agosto de 1918.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Revoltas contra a requisição de grãos</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">Protestos contra a requisição de grãos dos camponeses foram um componente importante da Revolta de Tambov e de levantes semelhantes; a Nova Política Econômica de Lenin foi 
            introduzida como uma concessão.
          </p>
          <p className="text-lg text-gray-700 mb-4">As políticas de "ditadura alimentar" proclamadas pelos bolcheviques em maio de 1918 provocaram resistência violenta em vários distritos da Rússia Europeia: revoltas e 
            confrontos entre os camponeses e o Exército Vermelho foram relatados em Voronezh, Tambov, Penza, Saratov e nos distritos de Kostroma, Moscou, Novgorod, Petrogrado, Pskov e Smolensk. 
            As revoltas foram sanguinariamente esmagadas pelos bolcheviques: na província de Voronezh, a Guarda Vermelha matou dezesseis camponeses durante a pacificação da aldeia, 
            enquanto outra aldeia foi bombardeada com artilharia para forçar os camponeses a se renderem e na província de Novgorod, os camponeses revoltosos foram dispersos com fogo de 
            metralhadora de um trem enviado por um destacamento de soldados latvianos do Exército Vermelho. Embora os bolcheviques tenham imediatamente denunciado a revolta como 
            orquestrada pelos SRs, na realidade não há evidências de que eles estivessem envolvidos na violência camponesa, o que consideraram contraproducente.
          </p>
        </div>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        {/* Título da seção */}
        <h2 className="text-3xl font-semibold mb-4">
          Geografia e Cronologia
        </h2>

        {/* Imagem e legenda */}
        <div className="mb-6 p-4 rounded-lg">
        <img 
          src="/wars-images/russian-civil-war/white-army.jpg" 
          alt="Exército Voluntário Branco no Sul da Rússia, Janeiro de 1918" 
          className="mx-auto rounded-lg shadow-lg w-100 h-auto"
        />

          <p className="text-center text-gray-700 mt-4 font-semibold text-lg">
            Exército Voluntário Branco no Sul da Rússia, Janeiro de 1918
          </p>
        </div>

        {/* Conteúdo traduzido */}
        <div className="text-gray-700 text-justify leading-relaxed space-y-4">
          <p className="mb-4">
            Na parte europeia da Rússia, a guerra foi travada em três frentes principais: 
            a oriental, a sul e a noroeste. Também pode ser dividida grosseiramente nos seguintes períodos.
          </p>

          <p className="mb-4">
            O primeiro período durou da Revolução até o Armistício, ou aproximadamente de março de 1917 a novembro de 1918. 
            Já na data da Revolução, o general cosaco Alexey Kaledin recusou reconhecê-la e assumiu autoridade total na região do Don, 
            onde o Exército Voluntário começou a reunir apoio. A assinatura do Tratado de Brest-Litovsk também resultou na intervenção 
            direta dos Aliados na Rússia e no armamento de forças militares opostas ao governo bolchevique. Muitos comandantes alemães também ofereceram apoio contra os bolcheviques, temendo uma confrontação com eles.
          </p>

          <p className="mb-4">
            Durante o primeiro período, os bolcheviques tomaram o controle da Ásia Central das mãos do Governo Provisório e do Exército Branco, 
            estabelecendo uma base para o Partido Comunista na Steppe e no Turkestão, onde quase dois milhões de colonos russos estavam localizados.
          </p>

          <p className="mb-4">
            A maior parte dos combates no primeiro período foi esporádica, envolvia apenas pequenos grupos e tinha uma situação estratégica 
            fluida e em rápida mudança. Entre os antagonistas estavam a Legião Tchecoslovaca, os poloneses das Divisões de Rifles 4ª e 5ª e os riflemen latvianos pró-bolcheviques.
          </p>

          <p className="mb-4">
            O segundo período da guerra durou de janeiro a novembro de 1919. Inicialmente, os avanços dos exércitos brancos do sul (sob Denikin), 
            leste (sob Kolchak) e noroeste (sob Yudenich) foram bem-sucedidos, forçando o Exército Vermelho e seus aliados a recuar nas três frentes. 
            Em julho de 1919, o Exército Vermelho sofreu outra reversão após uma deserção em massa de unidades na Crimeia para o Exército Insurgente 
            anarquista sob o comando de Nestor Makhno, permitindo que as forças anarquistas consolidassem o poder na Ucrânia. Leon Trotsky logo reformou 
            o Exército Vermelho, concluindo a primeira das duas alianças militares com os anarquistas. Em junho, o Exército Vermelho deteve o avanço de Kolchak. 
            Após uma série de confrontos, assistidos por uma ofensiva do Exército Insurgente contra as linhas de abastecimento brancas, o Exército Vermelho derrotou 
            os exércitos de Denikin e Yudenich em outubro e novembro.
          </p>

          <p className="mb-4">
            O terceiro período da guerra foi o cerco prolongado das últimas forças brancas na Crimeia em 1920. O general Wrangel reuniu os remanescentes dos exércitos 
            de Denikin, ocupando grande parte da Crimeia. Uma tentativa de invasão da Ucrânia do sul foi repelida pelo Exército Insurgente sob o comando de Makhno. 
            Perseguido até a Crimeia pelas tropas de Makhno, Wrangel passou à defensiva na Crimeia. Após uma tentativa frustrada de avançar para o norte contra o Exército Vermelho, 
            as tropas de Wrangel foram forçadas a recuar para o sul pelas forças do Exército Vermelho e do Exército Insurgente; Wrangel e os remanescentes de seu exército 
            foram evacuados para Constantinopla em novembro de 1920.
          </p>
        </div>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
      <div className="text-gray-700 text-justify leading-relaxed space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          O Conflito
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          No início da guerra, os Bolcheviques controlavam as áreas centrais da
          Rússia, incluindo as grandes cidades de Petrogrado e Moscou, que se tornou
          a nova capital soviética em 1918. O Exército Branco, no entanto, dominava
          periferias e áreas vastas, como o sul da Rússia, a Sibéria e o norte, além
          de contar com o apoio de potências estrangeiras como o Reino Unido, França,
          Estados Unidos e Japão, que temiam a propagação do comunismo.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Entre 1918 e 1919, o Exército Branco lançou várias ofensivas para tentar
          reconquistar o poder. No sul, o general Anton Denikin liderou uma campanha
          em direção a Moscou, chegando perto de capturá-la. No leste, o almirante
          Alexander Kolchak controlava vastas áreas da Sibéria e se proclamou
          "Governante Supremo" da Rússia. E no noroeste, as forças de Nikolai Yudenich
          ameaçaram Petrogrado. No entanto, os Bolcheviques, liderados por Leon Trotsky
          e seu eficiente Exército Vermelho, conseguiram resistir a essas ofensivas.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          A partir de 1919, a maré começou a virar a favor dos Bolcheviques. Eles
          lançaram contra-ofensivas bem-sucedidas, aproveitando-se da desunião e
          falta de coordenação entre as diferentes facções Brancas. As forças de Denikin
          foram derrotadas e forçadas a recuar para a Crimeia, onde eventualmente foram
          evacuadas. Kolchak foi capturado e executado em 1920 e Yudenich também foi
          derrotado e depois aprisionado.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Em 1920, os Bolcheviques já controlavam a maior parte da Rússia europeia
          e da Sibéria. Os últimos focos de resistência dos Brancos foram eliminados
          na Crimeia, onde as forças lideradas por Pyotr Wrangel foram derrotadas e
          evacuadas. Ao mesmo tempo, as tropas estrangeiras começaram a se retirar,
          sinalizando o fim do apoio externo aos Brancos. O fim da guerra não veio com
          uma vitória numa batalha isolada, mas foi na verdade uma combinação de
          fatores. Em várias regiões e nações que compunham o antigo Império Russo viu
          a derrota dos comunistas, embora estes conseguissem se consolidar no poder
          em Moscou e Petrogrado. Desta maneira, a guerra terminou como começou, caótica.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          O desfecho da Guerra Civil Russa teve consequências profundas e duradouras.
          A devastação da guerra deixou o país economicamente arrasado, com milhões de
          mortos, fome generalizada e infraestrutura em ruínas. A vitória dos bolcheviques
          levou à fundação da União Soviética em 1922, um novo estado socialista que
          buscava reconstruir a nação sob princípios comunistas. A guerra também consolidou
          o caráter autoritário do regime soviético, com o Partido Comunista mantendo
          controle rigoroso sobre todos os aspectos da vida, justificado pela necessidade
          de reconstruir e proteger o estado nascente de inimigos internos e externos.
        </p>
        </div>
      </section>

      <section className="text-center mb-8 max-w-7xl mx-auto">
        <div className="text-gray-700 text-justify leading-relaxed space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Consequências
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            A guerra terminou com uma vitória Bolchevique no atual território da Rússia.
            Os governos da República Russa e do Estado Russo haviam colapsado e a criação
            da União Soviética viria um ano depois, em 1924. A Família Imperial Russa havia
            sido executada e o movimento pró-Monarquia se enfraqueceu consideravelmente,
            com muitos monarquistas fugindo (perto de dois milhões de pessoas) e alguns se
            envolvendo com movimentos partisans anti-comunistas. Estados bolcheviques foram
            estabelecidos na Mongólia e em Tuva. Muitos dos proeminentes intelectuais e
            ativistas russos foram expulsos do país. Contudo, vários territórios do antigo
            Império Russo ou se tornaram completamente independentes ou foram anexados por
            outras nações. Entre os países que conseguiram firmar sua independência estavam
            Finlândia, Estônia, Letônia, Lituânia e Polônia. Outros Estados, como Ucrânia,
            Bielorrússia, Geórgia, Armênia, Azerbaijão e Moldávia conquistaram independência
            parcial, tiveram partes dos seus territórios tomados por outros países ou acabaram
            voltando sob o controle bolchevique. Os ucranianos, por exemplo, mantiveram sua
            independência até o final de 1921, quando foram incorporados no que viria a ser
            a União Soviética.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Em termos humanos, os resultados da guerra civil foram impactantes em todo o
            território russo. O demógrafo soviético Boris Urlanis estimou que 300.000 homens
            foram mortos em combate durante a guerra civil russa e a Guerra Polaco-Soviética
            (125.000 no Exército Vermelho, 175.500 exércitos brancos e poloneses) e o número
            total de militares de ambos os lados mortos por doenças em 450.000 pessoas.
            Boris Sennikov estimou as perdas totais entre a população da região de Tambov em
            1920 até 1922 resultantes da guerra, execuções e prisões em campos de concentração
            como aproximadamente 240.000 pessoas.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Cerca de 10 milhões de vidas foram perdidas como resultado da Guerra Civil Russa,
            sendo que a esmagadora maioria delas foram vítimas civis. Não há consenso entre os
            historiadores ocidentais sobre o número de mortes causadas pelo Terror Vermelho. Uma
            fonte fornece estimativas de 28 mil execuções por ano, de dezembro de 1917 a fevereiro
            de 1922. As estimativas do número de pessoas baleadas durante o período inicial do
            Terror Vermelho são de pelo menos 10.000. As estimativas de execuções para todo o
            período chegam a um mínimo de 50.000 a até 140.000 ou 200.000 executados. A maioria
            das estimativas para o número total de execuções gira em torno de 100.000 pessoas mortas.
            De acordo com a investigação de Vadim Erlikhman, o número de vítimas do Terror Vermelho
            é de pelo menos 1.200.000 pessoas.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Ao final da guerra civil, a Rússia Soviética estava exausta e perto da ruína. Secas
            e problemas de distribuição de comida e requisição de alimentos, entre 1920 e 1921,
            causaram enorme fome, matando milhões de pessoas. Doenças atingiram proporções pandêmicas,
            com pelo menos três milhões de pessoas morrendo de tifo durante a guerra. Outros milhões
            também morreram de fome generalizada, massacres em massa cometidos por ambos os lados e
            pogroms contra judeus na Ucrânia e no sul da Rússia. Até 1922, havia pelo menos sete
            milhões de crianças de rua na Rússia como resultado de quase dez anos de devastação da
            Primeira Guerra Mundial e da guerra civil.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            O comunismo de guerra salvou o governo soviético durante a guerra civil, mas grande
            parte da economia russa ficou paralisada. Alguns camponeses responderam às requisições
            de alimentos (Prodrazverstka) pelos soviéticos recusando-se a cultivar a terra. Em 1921,
            as terras cultivadas tinham diminuído para 62% da área anterior à guerra e o rendimento
            da colheita era apenas cerca de 37% do normal. O número de cavalos diminuiu de 35 milhões
            em 1916 para 24 milhões em 1920 e de gado de 58 para 37 milhões. A taxa de câmbio com o
            dólar americano caiu de dois rublos em 1914 para 1.200 Rbls em 1920. Entre 1921 e 1922,
            uma fome devastou os territórios russos, especialmente afetando áreas controladas pelos
            soviéticos. Perto de cinco milhões de pessoas morreram neste período.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            A guerra civil teve um impacto devastador na economia russa. Um mercado negro surgiu na
            Rússia, apesar da ameaça da lei marcial contra a especulação. O rublo entrou em colapso,
            com o escambo substituindo cada vez mais o dinheiro como meio de troca e, em 1921, a
            produção da indústria pesada caiu para 20% dos níveis de 1913. Em torno de 90% dos salários
            foram pagos com bens e não com dinheiro. Cerca de 70% das locomotivas necessitavam de reparo
            e a requisição de alimentos, combinada com os efeitos de sete anos de guerra e uma seca severa,
            contribuíram para uma fome que causou entre 3 e 10 milhões de mortes. A produção de carvão diminuiu
            de 27,5 milhões de toneladas (1913) para 7 milhões de toneladas (1920), enquanto a produção industrial
            geral também diminuiu de 10 bilhões de rublos para 1 bilhão de rublos. Segundo o historiador David
            Christian, a colheita de grãos também foi reduzida de 80,1 milhões de toneladas (1913) para 46,5 milhões
            de toneladas (1920).
          </p>
        </div>
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

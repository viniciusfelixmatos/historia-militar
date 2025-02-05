'use client';

import { useState, useEffect } from 'react';
import Footer from '../../../components/footer'; // Importando o rodapé
import { useRouter } from 'next/navigation';
import { generals } from '../../../data/generals'; // Dados de generais
import Image from 'next/image'; // Importando o componente Image do Next.js

// Definindo a interface para os dados de um general
interface General {
  id: number;
  name: string;
  slug: string;
  description: string;
  period: string;
  nation: string;
  imageUrl: string;
}

export default function KolchakPage() {
  const [general, setGeneral] = useState<General | null>(null); // Tipando o estado
  const router = useRouter();

  useEffect(() => {
    // Verificar se 'generals' existe e é um array
    if (!Array.isArray(generals)) {
      console.error('Dados de generais não encontrados ou mal formatados');
      return;
    }

    // Buscar o general Kolchak na lista de generais usando o slug
    const kolchak = generals.find((general) => general.slug === 'kolchak');

    if (kolchak) {
      setGeneral(kolchak);
    } else {
      console.error('General Kolchak não encontrado.');
    }
  }, []);

  // Verifica se o componente já foi montado no cliente
  if (!general) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Botão de Voltar */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Voltar
      </button>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-start min-h-screen px-4">
  {/* Imagem de Destaque e Informações Adicionais */}
  <h1 className="text-5xl font-bold mb-6 text-gray-800">{general.name}</h1>
  <div className="flex flex-col md:flex-row items-center mb-12 md:mb-0 ">
    <div className="flex-shrink-0 mb-6 md:mb-0">
      <Image
        src="/images/alexander-kolchak.jpg"
        alt={`Imagem de Aleksandr Kolchak`}
        width={400}
        height={400}
        className="object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Informações adicionais */}
    <div className="text-lg text-gray-600 ml-0 md:ml-6">
      <ul className="space-y-4 text-left">
        <li><strong>Nascimento:</strong> 16 de novembro de 1874</li>
        <li><strong>Morte:</strong> 7 de fevereiro de 1920</li>
        <li><strong>Alma Mater:</strong> Corpo de Cadetes Navais</li>
        <li><strong>Ocupação:</strong> Oficial da Marinha, Explorador Polar</li>
        <li><strong>País:</strong> Império Russo</li>
        <li><strong>Serviço:</strong> Marinha Imperial Russa</li>
        <li><strong>Anos de serviço:</strong> 1894–1919</li>
        <li><strong>Patente:</strong> Almirante</li>
      </ul>
    </div>
  </div>

  {/* Descrição do General (Texto) */}
  <section className="text-center md:text-left mb-12">

    <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
      Almirante Aleksandr Vasilyevich Kolchak (russo: Алекса́ндр Васи́льевич Колча́к; 16 de novembro [4 de novembro no calendário juliano] de 1874 – 7 de fevereiro de 1920) foi um oficial da marinha russa e explorador polar que liderou o movimento Branco na Guerra Civil Russa. Ao assumir o título de Líder Supremo da Rússia em 1918, ele chefiou uma ditadura militar, embora seu controle sobre o território russo fosse limitado. Ele era um defensor do nacionalismo russo e do militarismo, enquanto se opunha à democracia como um princípio que acreditava estar ligado ao pacifismo, internacionalismo e socialismo. Como principal líder do movimento Branco, ele foi um dos principais arquitetos do Terror Branco.
    </p>
    <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
      Kolchak serviu na Marinha Imperial Russa e lutou na Guerra Russo-Japonesa e na Primeira Guerra Mundial. Filho de um oficial de artilharia naval, Kolchak se formou no Corpo de Cadetes Navais e tornou-se um oceanógrafo e explorador do Ártico renomado. Ele esteve envolvido em várias expedições ao norte da Rússia, incluindo as Ilhas Novas da Sibéria, e se tornou o vice-almirante mais jovem da Marinha Imperial. Foi ferido e feito prisioneiro durante a Guerra Russo-Japonesa no cerco de Port Arthur, e, após seu retorno, defendeu o fortalecimento da frota na Duma de Estado, incluindo a introdução de submarinos e aviões. Kolchak foi chefe de operações da Frota Báltica quando a Primeira Guerra Mundial começou e foi nomeado comandante da Frota do Mar Negro pouco antes da Revolução de Fevereiro. Quando o imperador Nicolau II pediu aos comandantes de cada grupo de exército e frota sua opinião sobre a abdicação, Kolchak foi o único a se opor à abdicação do czar.
    </p>
    <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
      Durante a Revolução Russa de 1917, Kolchak foi popular entre os jornais conservadores, que o viam como um possível ditador militar. No início da guerra civil, Kolchak serviu brevemente como Ministro da Guerra e da Marinha no Governo Provisório de Toda a Rússia – o primeiro governo reconhecido por todas as forças militares e políticas brancas a leste dos Urais, pelo menos nominalmente – até um golpe de novembro de 1918, quando ele assumiu o poder e toda a autoridade foi transferida para o seu governo. Seu governo estava baseado em Omsk, no sudoeste da Sibéria. Ao assumir o título de Líder Supremo, sua autoridade foi reconhecida pelos outros líderes do movimento Branco, embora Anton Denikin tivesse mais poder do que Kolchak.
    </p>
    <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
      Após sucessos iniciais no começo de 1919, as forças de Kolchak perderam terreno devido à falta de apoio da população local e à falha em unir os líderes dos movimentos contrarrevolucionários. Omsk caiu para o Exército Vermelho em novembro de 1919 durante a Grande Marcha do Gelo da Sibéria, o que forçou Kolchak a transferir sua sede para Irkutsk. Em dezembro, ele foi traído e detido pelo chefe da missão militar aliada na Sibéria, Maurice Janin, e pela Legião Tchecoslovaca, que o entregaram aos Socialistas-Revolucionários locais em janeiro de 1920; os bolcheviques o executaram no mês seguinte em Irkutsk.
    </p>
  </section>
</div>






          {/* Detalhes adicionais */}
          <section className="text-center mb-12 px-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Início da Carreira</h1>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak nasceu em São Petersburgo em 4 de novembro de 1874. Sua família era de origens moldavas. Seus pais eram de Odessa. Seu pai era um major-general reformado da artilharia naval e veterano do cerco de Sebastopol em 1854, que, após a aposentadoria, trabalhou como engenheiro em fábricas de munições perto de São Petersburgo.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak foi educado para uma carreira naval, ingressando no Corpo de Cadetes Navais em 1888 e se formando em 1894 com honras. Após ser comissionado como  guarda-marinha na Marinha Imperial Russa, serviu nos oceanos Báltico e Pacífico em vários navios entre 1895 e 1899, e começou a publicar artigos sobre hidrologia durante esse período. Agora tenente, em 1900 Kolchak participou da expedição polar russa do barão Eduard von Toll no navio Zarya como hidrologista e cartógrafo.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Durante o inverno de 1901, Kolchak e Toll viajaram em trenós puxados por cães por 500 km para realizar um levantamento topográfico da Península de Taymyr, e na primavera, usaram os trenós para fazer um estudo geológico e hidrológico das Ilhas Novas da Sibéria. Em 1902, ele estudou o Mar da Sibéria Oriental enquanto estava a bordo do Zarya.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Após consideráveis dificuldades, Kolchak retornou em dezembro de 1902; Eduard Toll, junto com outros três exploradores, seguiu mais ao norte e se perdeu. Kolchak participou de duas expedições árticas para procurar os exploradores perdidos (que não foram encontrados) e por um tempo foi apelidado de &quot;Kolchak-Poliarnyi&quot; (&quot;Kolchak, o Polar&quot;). Por suas explorações, Kolchak recebeu a Medalha de Constantino, a mais alta condecoração da Sociedade Geográfica Imperial Russa.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Em dezembro de 1903, Kolchak estava a caminho de São Petersburgo para se casar com sua noiva, Sophia Omirova, quando, não muito longe de Irkutsk, recebeu a notícia do início da guerra com o Império do Japão e apressadamente convocou sua noiva e seu pai para a Sibéria por telegrama para o casamento, antes de seguir diretamente para Port Arthur. Nos primeiros estágios da Guerra Russo-Japonesa, ele serviu como oficial de vigia no cruzador Askold, e depois comandou o destróier Serdity. Realizou várias saídas noturnas para colocar minas navais, uma das quais conseguiu afundar o cruzador japonês Takasago. Foi condecorado com a Ordem de São Anna, 4ª classe, pela façanha.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              À medida que o bloqueio do porto se intensificava e o cerco de Port Arthur se agravava, foi dado o comando de uma bateria de artilharia costeira. Ele foi ferido na batalha final por Port Arthur e feito prisioneiro de guerra em Nagasaki, onde passou quatro meses. Sua saúde debilitada (reumatismo, consequência de suas expedições polares) levou à sua repatriação antes do fim da guerra. Kolchak recebeu a Espada Dourada de São Jorge com a inscrição &quot;Por Bravura&quot; ao retornar à Rússia.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Retornando a São Petersburgo em abril de 1905, Kolchak foi promovido a comandante e participou da reconstrução da Marinha Imperial Russa, que havia sido quase completamente destruída durante a guerra. Serviu no Estado-Maior Naval a partir de 1906, ajudando a elaborar um programa de construção naval, um programa de treinamento e desenvolvendo um novo plano de proteção para São Petersburgo e o Golfo da Finlândia.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak participou do projeto de quebra-gelos especiais Taimyr e Vaigach, lançados em 1909 e na primavera de 1910. Baseados em Vladivostok, esses navios foram enviados em uma expedição cartográfica ao Estreito de Bering e ao Cabo Dezhnev. Kolchak comandou o Vaigach durante esta expedição e depois trabalhou na Academia de Ciências com os materiais coletados por ele durante as expedições. Seu estudo, Gelo dos Mares de Kara e Sibéria, foi impresso nos Anais da Academia Imperial Russa de Ciências e é considerado o trabalho mais importante sobre este tema. Trechos dele foram publicados sob o título &quot;A Embalagem Ártica e a Polínia&quot; no volume publicado em 1929 pela American Geographical Society, Problemas da Pesquisa Polar. Em 1910, ele retornou ao Estado-Maior Naval e, em 1912, foi designado para a Frota Báltica Russa.
            </p>
          </section>


          {/* Detalhes adicionais */}
          <section className="text-center mb-12 px-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Primeira Guerra Mundial</h1>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              O início da Primeira Guerra Mundial encontrou Kolchak no navio insignia Pogranichnik, onde supervisionou a colocação de extensos campos minados de defesa costeira e comandou as forças navais no Golfo de Riga. O almirante comandante Essen não se contentou em permanecer na defensiva e ordenou a Kolchak que preparasse um plano para atacar as abordagens das bases navais alemãs. Durante o outono e inverno de 1914-1915, destróieres e cruzadores russos começaram uma série de operações noturnas perigosas, colocando minas nas abordagens de Kiel e Danzig. Kolchak, acreditando que o responsável pelo planejamento das operações deveria também participar de sua execução, estava sempre a bordo dos navios que realizavam as operações e, às vezes, assumia o comando direto das flotilhas de destróieres.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Foi promovido a vice-almirante em agosto de 1916, o mais jovem homem a alcançar essa patente, e foi nomeado comandante da Frota do Mar Negro, substituindo o almirante Eberhardt. A missão principal de Kolchak era apoiar o general Yudenich em suas operações contra o Império Otomano. Ele também foi encarregado de combater a ameaça dos submarinos e planejar a invasão do Bósforo (nunca realizada). A frota de Kolchak teve sucesso ao afundar os cargueiros turcos. Como não havia ferrovia ligando as minas de carvão da Turquia oriental a Constantinopla, os ataques da frota russa aos navios de carvão turcos causaram grandes dificuldades ao governo otomano. Em 1916, em um ataque combinado de Exército e Marinha, a frota russa do Mar Negro ajudou o exército russo a capturar a cidade otomana de Trebizonda (atual Trabzon).
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Um desastre notável ocorreu sob o comando de Kolchak: o encouraçado Imperatritsa Mariya explodiu no porto de Sebastopol em 7 de outubro de 1916. Uma investigação cuidadosa não conseguiu determinar se a causa do desastre foi um acidente ou sabotagem.
            </p>
          </section>

          {/* Detalhes adicionais */}
          <section className="text-center mb-12 px-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Revolução 1917</h1>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              A Frota do Mar Negro mergulhou em um caos político após o início da Revolução de Fevereiro de 1917. Kolchak foi afastado do comando da frota em junho e viajou para Petrogrado (atualmente São Petersburgo). Ao chegar em Petrogrado, Kolchak foi convidado para uma reunião do Governo Provisório. Lá, ele apresentou sua visão sobre a condição das forças armadas russas e sua completa desmoralização. Ele afirmou que a única maneira de salvar o país era restabelecer uma disciplina rigorosa e restaurar a pena de morte no exército e na marinha.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Durante esse período, muitas organizações e jornais de inclinação conservadora o viam como um futuro ditador. Várias novas e secretas organizações surgiram em Petrogrado com o objetivo de suprimir o movimento bolchevique e remover os membros extremistas do governo. Algumas dessas organizações pediram a Kolchak que aceitasse a liderança.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Quando as notícias sobre essas conspirações chegaram ao então Ministro da Marinha do Governo Provisório, Alexander Kerensky, ele ordenou que Kolchak saísse imediatamente para a América. O almirante James H. Glennon, membro da missão americana chefiada pelo senador Elihu Root, convidou Kolchak a ir para os Estados Unidos para informar a Marinha Americana sobre a situação estratégica no Bósforo. Em 19 de agosto de 1917, Kolchak, acompanhado de vários oficiais, deixou Petrogrado rumo à Grã-Bretanha e aos Estados Unidos como um observador militar quase oficial. Ao passar por Londres, foi recebido cordialmente pelo Primeiro Lorde do Mar, almirante Sir John Jellicoe, que lhe ofereceu transporte a bordo de um cruzador britânico a caminho de Halifax, no Canadá. A viagem para os Estados Unidos se mostrou desnecessária, pois, quando Kolchak chegou, os EUA haviam abandonado a ideia de qualquer ação independente nos Dardanelos. Kolchak visitou a Frota Americana e seus portos, decidindo então retornar.
            </p>
          </section>

            {/* Detalhes adicionais */}
          <section className="text-center mb-12 px-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Guerra Civil Russa</h1>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              A Revolução Bolchevique de novembro de 1917 encontrou Kolchak no Japão. Em dezembro, ele visitou a embaixada britânica em Tóquio e ofereceu seus serviços &quot;incondicionalmente e em qualquer capacidade&quot; aos britânicos. Dois anos depois, quando interrogado pelos bolcheviques, ele explicou que, como apoiador do Governo Provisório, se considerava obrigado a continuar a guerra contra a Alemanha e, entendendo que não havia um papel adequado na Marinha Britânica para um almirante russo, ele estava disposto a lutar como soldado no exército britânico. Sua oferta foi encaminhada ao Secretário de Relações Exteriores, Arthur Balfour, e aceita em 29 de dezembro. Foi instruído a se juntar à missão militar britânica em Bagdá, mas, ao chegar em Cingapura, foi ordenado a voltar e seguir via Xangai e Pequim até Harbin, para comandar as tropas russas que guardavam a Ferrovia Transiberiana, na Manchúria, que o governo britânico decidira ser uma base para derrubar o governo bolchevique e reentrar na guerra contra a Alemanha. Ao chegar em Omsk, na Sibéria, a caminho de alistar-se no Exército Voluntário, ele concordou em se tornar ministro do Governo Regional Siberiano (Branco). Ao ingressar em um gabinete de 14 membros, ele era uma figura de prestígio; o governo esperava aproveitar o respeito que ele tinha pelos aliados, especialmente pelo chefe da missão militar britânica, o general Alfred Knox. Knox escreveu que Kolchak &quot;tinha mais coragem, determinação e patriotismo honesto do que qualquer russo na Sibéria&quot;.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              De acordo com o historiador Richard Pipes, Kolchak era um homem com poucas habilidades sociais, sendo melancólico, taciturno e muito desconfortável ao lidar com pessoas. Ao chegar a um jantar, o Coronel John Ward o descreveu como &quot;uma alma pequena, errante e solitária, sem amigos, que entra sem ser convidado em uma festa&quot;. Quem o conhecia escrevia:
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            &quot;O caráter e a alma do Almirante são tão transparentes que, em uma semana de contato, sabe-se tudo sobre ele. Ele é uma grande criança doente, um idealista puro, um convicto escravo do dever e do serviço a uma ideia e à Rússia. Um indiscutível neurótico, que se irrita rapidamente, extremamente impetuoso e descontrolado em suas expressões de desagrado e raiva; nesse sentido, assimilou as tradições pouco atraentes do serviço naval, que permitem, em altos postos navais, comportamentos que em nosso exército já caíram no campo da lenda. Ele está completamente absorvido pela ideia de servir à Rússia, de salvá-la da opressão vermelha, e de restaurá-la ao seu pleno poder e à inviolabilidade de seu território. Por isso, pode ser persuadido a fazer qualquer coisa. Ele não tem interesses pessoais, não tem orgulho: neste aspecto, ele é cristalino. Despreza apaixonadamente toda a ilegalidade e arbitrariedade, mas, por ser tão descontrolado e impulsivo, ele mesmo frequentemente transgride a lei, principalmente ao tentar defendê-la, sempre sob a influência de algum estranho. Ele não conhece a vida em sua dura realidade prática e vive em um mundo de ilusões e ideias emprestadas. Não tem planos, não tem sistema, não tem vontade: nesse sentido, é uma cera mole de onde conselheiros e íntimos podem moldar o que quiserem, explorando o fato de que é o suficiente disfarçar algo como necessário para o bem da Rússia e do bem da causa para ter sua aprovação.&quot;
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Outro que o conhecia escreveu sobre Kolchak:
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            &quot;Ele é gentil e, ao mesmo tempo, severo, sensível e ao mesmo tempo envergonhado de mostrar sentimentos humanos, escondendo sua suavidade atrás de uma severidade de faz de conta. Ele é impaciente e teimoso, perde a paciência, ameaça e depois se acalma, fazendo concessões, espalha as mãos em um gesto de impotência. Ele está ansioso para estar com o povo, com as tropas, mas quando os enfrenta, não sabe o que dizer.&quot;
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Politicamente ingênuo e um administrador inepto, Kolchak se descrevia como um &quot;técnico militar&quot; que não entendia de política, considerava o poder como uma &quot;cruz&quot;, e em uma carta à sua esposa escreveu sobre o &quot;terrível fardo do Supremo Poder&quot;, admitindo que, como &quot;um homem de luta, ele estava relutante em enfrentar os problemas da política&quot;. O historiador americano Richard Pipes escreveu que as únicas forças de Kolchak eram sua coragem, patriotismo, integridade e forte senso de honra, acrescentando que ele era &quot;... em muitos aspectos, junto com Wrangel, o comandante Branco mais honrado na Guerra Civil&quot;, mas suas fraquezas, como sua tendência a sofrer de depressão maníaca e a incapacidade de &quot;entender as pessoas ou se comunicar com elas&quot;, o transformaram em &quot;um administrador execrável, em nome de quem foram cometidos atos imperdoáveis de corrupção e brutalidade que ele pessoalmente achava absolutamente repugnantes&quot;.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Em novembro de 1918, o impopular governo regional foi derrubado em um golpe patrocinado pelos britânicos. Kolchak retornou a Omsk em 16 de novembro após uma visita de inspeção. Ele foi abordado e recusou assumir o poder. O líder da diretoria socialista-revolucionária (SR) e outros membros foram presos em 18 de novembro por uma tropa de cossacos sob o ataman Krasilnikov. Os membros restantes do gabinete se reuniram e votaram para que Kolchak se tornasse o chefe do governo com poderes de emergência. Ele foi nomeado Supremo Governante (Verkhovnyi Pravitel) e se promoveu a almirante pleno. Os políticos da SR presos foram expulsos da Sibéria e acabaram na Europa.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              O programa do governo Kolchak incluía: acabar com o bolchevismo e restaurar a lei e a ordem; restabelecer as forças armadas russas; convocar uma nova Assembleia Constituinte; introduzir reformas econômicas; e manter a integridade territorial da Rússia. Kolchak emitiu o seguinte apelo à população:
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            &quot;Não seguirei o caminho da reação ou o fatal caminho da partidocracia. Coloco como meu principal objetivo a criação de um exército eficiente, a vitória sobre o bolchevismo e o estabelecimento da lei e da ordem, para que o povo possa escolher a forma de governo que deseja sem obstáculos e realizar as grandes ideias de liberdade que agora são proclamadas em todo o mundo. Convido vocês, cidadãos, à unidade, à luta contra o bolchevismo, ao trabalho e aos sacrifícios&quot;.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Os líderes da SR na Rússia denunciaram Kolchak e pediram sua assassinação. Suas atividades resultaram em uma pequena revolta em Omsk em 22 de dezembro de 1918, que foi rapidamente reprimida por cossacos e pela Legião Tchecoslovaca, que executou sumariamente quase 500 rebeldes. Posteriormente, os SRs iniciaram negociações com os bolcheviques e, em janeiro de 1919, o Exército Popular SR se juntou ao Exército Vermelho.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak seguiu uma política de perseguição aos revolucionários, bem como aos socialistas de várias facções. Seu governo emitiu um decreto em 3 de dezembro de 1918 afirmando: &quot;Para preservar o sistema e o governo do Supremo Governante, os artigos do código penal da Rússia Imperial foram revisados, sendo que os artigos 99 e 100 estabeleciam pena de morte para tentativas de assassinato contra o Supremo Governante e para tentativas de derrubar seu governo.&quot; Insultos escritos, impressos e orais são punidos com prisão pelo artigo 103. Sabotagem burocrática, segundo o artigo 329, era punida com trabalhos forçados de 15 a 20 anos.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Embora a notícia da ascensão de Kolchak ao poder tenha se espalhado muito lentamente atrás das linhas bolcheviques, causou grande excitação entre os russos anti-comunistas que viviam lá. Ivan Bunin escreveu em seu diário: &quot;17/04 junho 1919. A Entente nomeou Kolchak o Supremo Governante da Rússia. Izvestia escreveu um artigo obsceno dizendo: &apos;Diga-nos, réptil, quanto você recebeu por isso?&apos; Que se danem. Eu me cruzei com lágrimas de alegria&quot;.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Em 11 de abril de 1919, o governo Kolchak adotou o Regulamento nº 428, &quot;Sobre perigos à ordem pública devido a laços com a Revolta Bolchevique&quot;. A legislação foi publicada no jornal Omsk Gazette (nº 188 de 19 de julho de 1919). Ela impunha uma pena de 5 anos de prisão para &quot;indivíduos considerados uma ameaça à ordem pública devido aos seus laços de qualquer forma com a revolta bolchevique&quot;. No caso de retorno não autorizado do exílio, poderia haver trabalhos forçados de 4 a 8 anos. Os artigos 99-101 permitiam a pena de morte, trabalhos forçados e prisão, repressão por tribunais militares, sem comissões de investigação.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak reconheceu todas as dívidas da Rússia, devolveu fábricas e plantas nacionalizadas aos seus proprietários, concedeu concessões a investidores estrangeiros, dispersou sindicatos, perseguiu marxistas e dissolveu os sovietes. A política agrária de Kolchak foi voltada para restaurar a propriedade privada de terras. Para isso, as antigas leis tsaristas sobre propriedade foram restauradas.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Em 26 de maio de 1919, o Supremo Conselho de Guerra em Paris ofereceu a Kolchak o fornecimento ilimitado de alimentos, armas, munições e outros suprimentos (mas sem reconhecimento diplomático), desde que ele estivesse disposto a cumprir as seguintes condições:
            </p>
            <ul className="mt-4 text-lg text-gray-600 leading-relaxed text-justify list-disc pl-6">
              <li>Prometer convocar a Assembleia Constituinte que os bolcheviques haviam dissolvido em janeiro de 1918.</li>
              <li>Permitir o autogoverno local nos territórios sob seu controle.</li>
              <li>Prometer não restaurar a aristocracia, o &quot;antigo sistema de terras&quot; e &quot;não tentar reintroduzir o regime que a revolução havia destruído&quot; (ou seja, não restaurar a monarquia).</li>
              <li>Reconhecer a independência da Finlândia e da Polônia.</li>
              <li>Aceitar mediação aliada para as relações com os estados bálticos e no Cáucaso.</li>
              <li>Prometer aderir à Liga das Nações.</li>
              <li>Prometer pagar todas as dívidas da Rússia.</li>
            </ul>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Pipes escreveu que, embora os Aliados quisessem uma Assembleia Constituinte para decidir o futuro da Rússia, eles haviam decidido com antecedência, nas suas condições, que, por exemplo, não haveria restauração da monarquia, entre outras questões que deveriam ser decididas pela Assembleia Constituinte. Como Kolchak dependia totalmente do fornecimento de suprimentos da Grã-Bretanha—os britânicos enviaram entre outubro de 1918 e outubro de 1919 cerca de 600.000 rifles, 6.831 metralhadoras e cerca de 200.000 uniformes—ele teve que aceitar quase todas as condições. Em um telegrama enviado a Paris em 4 de junho de 1919, Kolchak aceitou todas as condições, exceto a independência da Finlândia, que ele aceitou apenas de fato, não de jure, dizendo que queria que a Assembleia Constituinte concedesse à Finlândia sua independência. Como os Aliados eram especialmente contra o retorno da Casa de Romanov, Kolchak declarou enfaticamente &quot;que não pode haver um retorno ao regime que existia na Rússia antes de fevereiro de 1917.&quot; O Secretário de Guerra britânico Winston Churchill pressionou fortemente no gabinete para o reconhecimento britânico do governo de Kolchak, mas o Primeiro Ministro David Lloyd George só o faria se os Estados Unidos também reconhecessem Kolchak. O presidente americano Woodrow Wilson era fortemente hostil a Kolchak, duvidava abertamente de sua palavra e era contra o reconhecimento diplomático. O principal conselheiro de Wilson sobre a Rússia era o ex-líder do Governo Provisório, Alexander Kerensky, que disse a Wilson que Kolchak era um &quot;reacionário&quot; que &quot;iniciaria um regime não menos sanguinário e repressivo do que o dos bolcheviques.&quot; Embora as forças americanas na Sibéria cooperassem com Kolchak, estava claro que ele não era o homem favorecido pelos Estados Unidos como o próximo líder da Rússia. As forças americanas haviam sido enviadas para a Sibéria menos para ajudar os Brancos do que para impedir que os japoneses, que haviam ocupado o Extremo Oriente Russo, anexassem a região, pois Tóquio estava considerando abertamente isso.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              A Grande Enciclopédia Soviética alega que mais de 25.000 pessoas foram fuziladas ou torturadas até a morte apenas na província de Yekaterinburgo. Em março de 1919, Kolchak exigiu de um de seus generais que &quot;seguíssemos o exemplo dos japoneses que, na região do Amur, exterminaram a população local.&quot; A Sovietskaya Rossiya, um órgão oficial do Bureau Soviético estabelecido por Ludwig Martens, citou um órgão menchevique, Vsegda Vperyod, alegando que os homens de Kolchak usaram chicoteamentos em massa e destruíram vilarejos inteiros com fogo de artilharia. Aproximadamente 4.000 camponeses supostamente se tornaram vítimas de tribunais de campo e expedições punitivas, e todas as moradias de rebeldes foram queimadas. Kolchak também permitiu que Boris Annenkov massacrasse entre 2.000 a 3.000 judeus.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Em um trecho da ordem do governo do condado de Yenisei na província de Irkutsk, o General S. Rozanov disse:
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            &quot;Aquelas vilas cuja população encontre as tropas com armas, queimem as vilas e atirem nos homens adultos sem exceção. Se reféns forem feitos em casos de resistência às tropas do governo, atirem nos reféns sem piedade.&quot;
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              O historiador britânico Edward Hallett Carr escreveu:
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            &quot;Não é mais possível para qualquer homem são ver as campanhas de Kolchak, Yudenich, Denikin e Wrangel de outra forma senão como tragédias de dimensões colossais.&quot;
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Por outro lado, um ex-chefe de estado-maior de Kolchak escreveu:
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            &quot;Kolchak, Kornilov, Denikin e Wrangel foram, antes de tudo, patriotas com um amor profundo por seu país e trabalharam para sua salvação sem qualquer consideração por autoavaliação. Intrigas políticas eram desconhecidas para eles e estavam prontos para trabalhar com homens de qualquer partido político, desde que soubessem que esses homens eram sinceros em seus esforços para libertar a Rússia... e para possibilitar, após o fim da guerra, que uma Assembleia Nacional, escolhida pelo povo, decidisse o caráter do futuro Governo da Rússia.&quot;
            </p>

          </section>


          <section className="text-center mb-12 px-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Supremo Governante da Rússia</h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak com Radola Gajda em 1919 Inicialmente, as forças brancas sob seu comando tiveram algum sucesso. Kolchak não estava familiarizado com combates em terra e delegou a maior parte do planejamento estratégico para D. A. Lebedev, Paul J. Bubnar e sua equipe. O exército do norte sob o comando do russo Anatoly Pepelyayev e o tcheco Rudolf Gajda conquistaram Perm no final de dezembro de 1918 e, após uma pausa, outras forças se espalharam a partir dessa base estratégica. O plano era realizar três avanços principais – Gajda para conquistar Arkhangelsk, Khanzhin para capturar Ufa, e os Cossacos sob o comando de Alexander Dutov para conquistar Samara e Saratov.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              As forças brancas tomaram Ufa em março de 1919 e seguiram de lá para conquistar Kazan e se aproximar de Samara no rio Volga. Levantes anti-comunistas em Simbirsk, Kazan, Viatka e Samara ajudaram em seus esforços. O recém-formado Exército Vermelho se mostrou relutante em combater e recuou, permitindo que os brancos avançassem até uma linha que ia de Glazov, passando por Orenburg até Uralsk. O território de Kolchak cobria mais de 300.000 km² e tinha cerca de 7 milhões de habitantes. Em abril, o alarmado Comitê Executivo Central bolchevique fez a derrota de Kolchak sua prioridade máxima. Mas, com a chegada da primavera, a posição de Kolchak se deteriorou – seus exércitos haviam ultrapassado suas linhas de suprimento, estavam exaustos e o Exército Vermelho começou a reforçar as tropas na região.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Desenho do brasão de armas do governo russo Kolchak também havia despertado a antipatia de aliados em potencial, incluindo a Legião Tchecoslovaca e a 5ª Divisão de Fuzileiros Polonesa. Eles se retiraram do conflito em outubro de 1918, mas continuaram presentes; seu conselheiro estrangeiro, o general Maurice Janin, via Kolchak como um instrumento dos britânicos e era pró-SR. Kolchak também não podia contar com ajuda japonesa; os japoneses temiam que ele interferisse na ocupação da Rússia do Extremo Oriente e se recusaram a lhe dar assistência, criando um estado tampão a leste do lago Baikal sob controle dos Cossacos. Os cerca de 7.000 soldados americanos na Sibéria se mantiveram estritamente neutros em relação aos &quot;assuntos internos da Rússia&quot; e serviram apenas para manter a operação da ferrovia Transiberiana no Extremo Oriente. O comandante americano, general William S. Graves, pessoalmente desaprovava o governo de Kolchak, que via como monarquista e autocrático, uma visão compartilhada pelo presidente americano, Woodrow Wilson.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Selo postal emitido em 1919 com a inscrição &quot;Pela Rússia Unida – Supremo Líder da Rússia, Kolchak.&quot; Derrota e Morte A partir de 1919, quando as forças bolcheviques conseguiram se reorganizar e iniciar o ataque contra Kolchak, ele rapidamente perdeu terreno. O contra-ataque vermelho começou no final de abril no centro da linha branca, visando Ufa. Os combates foram ferozes, pois, ao contrário de antes, ambos os lados lutaram arduamente. Ufa foi tomada pelo Exército Vermelho em 9 de junho e, ainda nesse mês, as forças vermelhas sob o comando de Mikhail Tukhachevsky romperam os Urais. Libertados das limitações geográficas das montanhas, os vermelhos avançaram rapidamente, capturando Chelyabinsk em 25 de julho e forçando as forças brancas a recuar para o norte e sul para evitar serem isoladas. As forças brancas restabeleceram uma linha ao longo dos rios Tobol e Ishim para retardar temporariamente os vermelhos. Mantiveram essa linha até outubro, mas a perda constante de homens mortos ou feridos foi além da capacidade das brancas de reposição. Reforçados, os vermelhos romperam a linha no Tobol em meados de outubro e, em novembro, as forças brancas começaram a recuar para Omsk em uma massa desorganizada. Nesse ponto, os vermelhos ficaram suficientemente confiantes para começar a redeployar algumas de suas forças para o sul para enfrentar Anton Denikin.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Última foto de Kolchak tirada antes de sua execução em 1920 Uma cruz memorial colocada no local de descanso de Kolchak Kolchak também passou a ser ameaçado por outros setores: opositores locais começaram a se agitar e o apoio internacional começou a diminuir, com até os britânicos se voltando mais para Denikin. Gajda, demitido do comando do exército do norte, tentou um golpe fracassado em meados de novembro. Omsk foi evacuada em 14 de novembro, e o Exército Vermelho tomou a cidade sem resistência significativa, capturando grandes quantidades de munição, quase 50.000 soldados e dez generais. Como continuava a haver um fluxo de refugiados em direção ao leste, o tifo também se tornou um problema sério.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak havia deixado Omsk no dia 13 para Irkutsk ao longo da ferrovia Transiberiana. Notoriamente, ele conseguiu tomar posse dos antigos suprimentos de ouro imperial e levou-os consigo em seu trem. Esse ouro pesava cerca de 1.600 toneladas e tinha um valor de bilhões de dólares. O destino final dessas reservas de ouro nunca foi claramente determinado, deixando muito espaço para lendas e especulações (uma ideia popular é que o ouro acabou no Lago Baikal).
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Viajando por uma seção de trilho controlada pelos tchecos, Kolchak foi desviado e parado; em dezembro, seu trem havia chegado apenas a Nizhneudinsk. No final de dezembro, Irkutsk caiu sob o controle de um grupo de esquerda (incluindo SRs e Mencheviques) que formaram o Centro Político. Uma das primeiras ações deles foi demitir Kolchak. Quando ele soube disso em 4 de janeiro de 1920, anunciou sua renúncia, entregando seu cargo a Denikin e passando o controle de suas forças remanescentes ao redor de Irkutsk para um ataman, G. M. Semyonov. A transferência de poder para Semyonov provou ser uma decisão particularmente mal pensada.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak então recebeu a promessa de passagem segura pelos tchecos para a missão militar britânica em Irkutsk. No entanto, ele foi entregue às autoridades de esquerda em Irkutsk em 14 de janeiro. Em 20 de janeiro, o governo de Irkutsk entregou o poder a um comitê militar bolchevique. O Exército Branco sob o comando do General Vladimir Kappel avançou em direção a Irkutsk enquanto Kolchak era interrogado por uma comissão de cinco homens representando o Comitê Revolucionário (REVKOM) durante nove dias, entre 21 de janeiro e 6 de fevereiro. Apesar da chegada de uma ordem contrária de Moscou, o almirante Kolchak foi condenado à morte junto com seu primeiro-ministro, Viktor Pepelyayev.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Ambos os prisioneiros foram levados diante de um pelotão de fuzilamento na noite de 6 de fevereiro de 1920. De acordo com testemunhas oculares, Kolchak estava completamente calmo e sem medo, &quot;como um inglês&quot;. O almirante perguntou ao comandante do pelotão de fuzilamento: &quot;Você seria tão gentil a ponto de enviar uma mensagem para minha esposa em Paris dizendo que abençoo meu filho?&quot; O comandante respondeu: &quot;Vou ver o que posso fazer, se não me esquecer.&quot;
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Um sacerdote da Igreja Ortodoxa Russa então deu a extrema-unção aos dois homens. O pelotão disparou e ambos caíram. Os corpos foram chutados e empurrados para uma encosta e jogados sob o gelo do rio Angara. Seus corpos nunca foram recuperados. Quando o Exército Branco soube das execuções, sua liderança restante decidiu se retirar ainda mais para o leste. Seguiu-se a Grande Marcha de Gelo da Sibéria. O Exército Vermelho só entrou em Irkutsk em 7 de março, e foi somente então que a notícia da morte de Kolchak foi oficialmente divulgada.
            </p>
          </section>
          <section className="text-center mb-12 px-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Legado</h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              O governo do Almirante Kolchak não foi bem-sucedido desde o momento em que ele assumiu o cargo de &quot;Supremo Líder&quot; até sua morte.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak não conseguiu obter o reconhecimento diplomático de nenhuma nação no mundo, nem mesmo do Reino Unido (embora os britânicos o apoiassem até certo ponto). Além disso, ele alienou a Legião Tchecoslovaca, que por um tempo foi uma força militar organizada e muito anti-bolchevique na região. Como mencionado anteriormente, o comandante americano, General Graves, não gostava de Kolchak e se recusou a lhe fornecer qualquer ajuda militar. O movimento &quot;Pela Fé e Pátria&quot; tentou reabilitar a reputação de Kolchak. No entanto, dois pedidos de reabilitação foram negados, por um tribunal militar regional em 1999 e pela Suprema Corte da Federação Russa em 2001. Em 2004, o Tribunal Constitucional da Rússia devolveu o caso de Kolchak ao tribunal militar para uma nova audiência.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Monumentos dedicados a Kolchak foram construídos em São Petersburgo em 2002 e em Irkutsk em 2004, apesar das objeções de alguns políticos comunistas e de esquerda, assim como de antigos veteranos do exército soviético. O memorial dele em São Petersburgo é um alvo frequente de vandalismo. Existe também uma Ilha Kolchak. A moderna Marinha Russa considerou nomear o terceiro navio da nova classe de fragatas Admiral Grigorovich como Admiral Kolchak em homenagem ao Almirante, mas acabou decidindo não fazê-lo.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
              Kolchak foi um especialista proeminente em minas navais e membro da Sociedade Geográfica Russa. Ele também era conhecido na área de pesquisa ártica, tendo publicado 16 artigos sobre o assunto. Seus prêmios incluem a Espada de Ouro de São Jorge pela Bravura, dada por suas ações na batalha de Port Arthur, e a Grande Medalha Dourada de Constantino da Sociedade Geográfica Russa.
            </p>
          </section>

          {/* Botão para voltar */}
          <div className="text-center">
            <button
              onClick={() => router.back()}
              className="py-2 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Voltar para os Líderes
            </button>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

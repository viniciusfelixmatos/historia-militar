'use client';

import HastingsCard from '../../../../components/component-page/hastingcard'; // Importa o componente HastingsCard

export default function HastingsPage() {
  return (
    <div className="container mx-auto p-8">
      {/* Título da página */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-green-700">A Batalha de Hastings</h1>
      </div>

      {/* Componente HastingsCard no topo */}
      <div className="mb-8">
        <HastingsCard />
      </div>

      {/* Centraliza o conteúdo da página */}
      <div className="flex justify-center">
        {/* Coluna principal de texto */}
        <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
          <p className="mb-6">
            A Batalha de Hastings foi travada em 14 de outubro de 1066 entre o exército normando-francês de Guilherme, 
            Duque da Normandia, e um exército inglês sob o rei anglo-saxão Harold Godwinson, marcando o início da Conquista Normanda da Inglaterra. 
            Ela ocorreu aproximadamente a 11 km ao noroeste de Hastings, perto da atual cidade de Battle, East Sussex, e foi uma vitória decisiva para os normandos.
          </p>

          <p className="mb-6">
            O contexto da batalha foi a morte do rei Eduardo, o Confessor, em janeiro de 1066, o que gerou uma luta pela sucessão entre vários pretendentes 
            ao seu trono. Harold foi coroado rei logo após a morte de Eduardo, mas enfrentou invasões de Guilherme, de seu próprio irmão Tostig, e do rei 
            norueguês Harald Hardrada (Haroldo III da Noruega). Hardrada e Tostig derrotaram um exército inglês reunido às pressas na Batalha de Fulford 
            em 20 de setembro de 1066. Eles, por sua vez, foram derrotados por Harold na Batalha de Stamford Bridge cinco dias depois.
          </p>

          <p className="mb-6">
            As mortes de Tostig e Hardrada em Stamford Bridge deixaram Guilherme como o único adversário sério de Harold. Enquanto Harold e suas forças 
            se recuperavam, Guilherme desembarcou com suas forças invasoras no sul da Inglaterra, em Pevensey, em 28 de setembro de 1066, estabelecendo 
            uma cabeça de praia para sua conquista do reino. Harold foi forçado a marchar rapidamente para o sul, reunindo forças pelo caminho.
          </p>

          <p className="mb-6">
            Após mais marcha e alguns confrontos, Guilherme foi coroado rei no dia de Natal de 1066. Continuaram as rebeliões e resistência ao governo de 
            Guilherme, mas Hastings efetivamente marcou o auge da conquista normanda da Inglaterra. As estimativas de vítimas são difíceis de obter, 
            mas alguns historiadores estimam que 2.000 invasores morreram, juntamente com aproximadamente o dobro desse número de ingleses.
          </p>
        </div>
      </div>

      {/* Seção Background */}
    <div className="flex justify-center border-t-4 border-gray-800 pt-6 mt-6">
      <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contexto</h2>
          <p className="mb-6">
            Em 911, o governante carolíngio Carlos, o Simples, permitiu que um grupo de vikings se estabelecesse na Normandia sob a liderança de Rollo. 
            O assentamento deles foi bem-sucedido, e rapidamente se adaptaram à cultura local, renunciando ao paganismo, convertendo-se ao cristianismo e 
            se casando com a população local. Com o tempo, as fronteiras do ducado se expandiram para o oeste.
          </p>
          <p className="mb-6">
            Em 1002, o rei Æthelred II casou-se com Emma, irmã de Ricardo II, Duque da Normandia. Seu filho, Eduardo, o Confessor, passou muitos anos em 
            exílio na Normandia e sucedeu ao trono inglês em 1042. Isso levou ao estabelecimento de um poderoso interesse normando na política inglesa, 
            pois Eduardo contou muito com seus antigos anfitriões, trazendo cortesãos, soldados e clérigos normandos e nomeando-os para posições de poder, 
            especialmente na Igreja.
          </p>
          <p className="mb-6">
            Eduardo não tinha filhos e estava em conflito com o formidável Godwin, Conde de Wessex, e seus filhos, e ele pode também ter incentivado as 
            ambições do Duque Guilherme da Normandia para o trono inglês.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Crise de Sucessão na Inglaterra</h3>
          <p className="mb-6">
            A morte do rei Eduardo em 5 de janeiro de 1066 deixou um sucessor incerto, e vários contendores reivindicaram o trono de Inglaterra. O sucessor imediato de 
            Eduardo foi o Conde de Wessex, Harold Godwinson, o mais rico e poderoso dos aristocratas ingleses e filho de Godwin, o anterior opositor de Eduardo. Harold foi 
            eleito rei pelo Witenagemot de Inglaterra e coroado por Ealdred, o Arcebispo de York, embora a propaganda normanda tenha alegado que a cerimônia foi realizada por 
            Stigand, o arcebispo de Canterbury não eleito canonicamente.
          </p>
          <p className="mb-6">
            Harold foi imediatamente desafiado por dois poderosos governantes vizinhos. O Duque Guilherme alegou que havia sido prometido o trono por Eduardo, e que Harold 
            havia jurado concordar com isso. Harald Hardrada da Noruega também contestou a sucessão. Sua reivindicação ao trono baseava-se em um acordo entre seu predecessor 
            Magnus, o Bom, e o anterior Rei de Inglaterra Harthacnut, em que, se qualquer um deles morresse sem herdeiro, o outro herdaria tanto a Inglaterra quanto a Noruega.
          </p>
          <p className="mb-6">
            Guilherme e Harald Hardrada imediatamente começaram a reunir tropas e navios para invasões separadas.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Invasões de Tostig e Hardrada</h3>
          <p className="mb-6">
            No início de 1066, o exilado irmão de Harold, Tostig Godwinson, saqueou o sudeste da Inglaterra com uma frota que havia recrutado na Flandres, sendo depois 
            unido por outros navios de Orkney. Ameaçado pela frota de Harold, Tostig moveu-se para o norte e saqueou na East Anglia e Lincolnshire. Ele foi forçado a retornar 
            para seus navios pelos irmãos Edwin, Conde de Mercia, e Morcar, Conde de Northumbria. Desertado pela maior parte de seus seguidores, ele retirou-se para a Escócia, 
            onde passou a maior parte do ano recrutando novas forças.
          </p>
          <p className="mb-6">
            Hardrada invadiu o norte da Inglaterra no início de setembro, liderando uma frota de mais de 300 navios com talvez 15.000 homens. O exército de Hardrada foi 
            reforçado pelas forças de Tostig, que apoiavam a candidatura do rei norueguês ao trono. Avançando para York, os noruegueses ocuparam a cidade após derrotarem um 
            exército do norte da Inglaterra sob Edwin e Morcar em 20 de setembro na Batalha de Fulford.
          </p>
        </div>
      </div>

      {/* Seção English army and Harold's preparations */}
      <div className="flex justify-center border-t-4 border-gray-800 pt-6 mt-6">
      <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exército Inglês e Preparativos de Harold</h2>
          <p className="mb-6">
            O exército inglês estava organizado de acordo com as linhas regionais, com o fyrd, ou alistamento local, servindo sob um magnata local – seja um conde, bispo ou xerife. O fyrd era composto por homens que possuíam suas próprias terras, sendo equipados pela comunidade para cumprir as demandas do rei por forças militares. Para cada cinco hides (unidades de terra capazes de sustentar uma família), um homem deveria servir. Parece que a centena era a principal unidade de organização do fyrd. Como um todo, a Inglaterra poderia fornecer cerca de 14.000 homens para o fyrd quando fosse convocado. O fyrd normalmente servia por dois meses, exceto em emergências. Era raro que todo o fyrd nacional fosse chamado, entre 1046 e 1065 isso ocorreu apenas três vezes, em 1051, 1052 e 1065.
          </p>
          <p className="mb-6">
            O rei também tinha um grupo de homens armados pessoais, conhecidos como housecarls, que formavam a espinha dorsal das forças reais. Alguns condes também tinham suas próprias forças de housecarls. Os thegns, as elites locais de proprietários de terras, lutavam junto aos housecarls reais ou se juntavam às forças de um conde ou outro magnata. O fyrd e os housecarls lutavam a pé, com a principal diferença entre eles sendo a armadura superior dos housecarls. O exército inglês não parecia ter um número significativo de arqueiros.
          </p>
          <p className="mb-6">
            Harold passou a metade de 1066 na costa sul com um grande exército e frota aguardando a invasão de Guilherme. A maior parte de suas forças era formada por milícia que precisava colher suas colheitas, então em 8 de setembro, Harold dispensou a milícia e a frota. Ao saber da invasão norueguesa, ele se apressou para o norte, reunindo forças enquanto seguia, surpreendendo os noruegueses e derrotando-os na Batalha de Stamford Bridge em 25 de setembro. Harald Hardrada e Tostig foram mortos, e os noruegueses sofreram tantas perdas que apenas 24 dos 300 navios originais foram necessários para levar os sobreviventes. A vitória inglesa foi alcançada a um alto custo, pois o exército de Harold ficou em um estado enfraquecido e distante do sul.
          </p>
        </div>
      </div>

      {/* Seção Preparação de Wiliam para o desembarque */}
    <div className="flex justify-center border-t-4 border-gray-800 pt-6 mt-6">
      <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preparações de Guilherme e Desembarque</h2>
        <p className="mb-6">
          Guilherme reuniu uma grande frota de invasão e um exército recrutado na Normandia e no restante da França, incluindo grandes contingentes da Bretanha e Flandres. Ele passou quase nove meses em seus preparativos, já que precisou construir uma frota do zero. De acordo com algumas crônicas normandas, ele também garantiu apoio diplomático, embora a precisão dos relatos tenha sido alvo de debates históricos. A alegação mais famosa é que o Papa Alexandre II deu uma bandeira papal como símbolo de apoio, o que aparece apenas no relato de Guilherme de Poitiers, e não em narrativas mais contemporâneas.
        </p>
        <p className="mb-6">
          Em abril de 1066, o Cometa de Halley apareceu no céu e foi amplamente reportado por toda a Europa. Relatos contemporâneos conectaram a aparição do cometa à crise de sucessão na Inglaterra.
        </p>
        <p className="mb-6">
          Guilherme reuniu suas forças em Saint-Valery-sur-Somme e estava pronto para cruzar o Canal da Mancha por volta de 12 de agosto. Mas a travessia foi adiada, seja devido ao clima desfavorável ou para evitar ser interceptado pela poderosa frota inglesa. Os normandos cruzaram para a Inglaterra alguns dias após a vitória de Harold sobre os noruegueses, com a dispersão da força naval de Harold, e desembarcaram em Pevensey, no Sussex, em 28 de setembro. Alguns navios foram desviados e aterraram em Romney, onde os normandos combateram o fyrd local.
        </p>
        <p className="mb-6">
          Após o desembarque, as forças de Guilherme construíram um castelo de madeira em Hastings, de onde realizaram ataques à área ao redor. Mais fortificações foram erguidas em Pevensey.
        </p>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Forças Normandas em Hastings</h2>
        <p className="mb-6">
          Os números exatos e a composição da força de Guilherme são desconhecidos. Um documento contemporâneo afirma que Guilherme tinha 776 navios, mas esse número pode ser exagerado. Os números fornecidos por escritores contemporâneos para o tamanho do exército variam enormemente, de 14.000 a 150.000. Historiadores modernos oferecem uma faixa de estimativas para o tamanho das forças de Guilherme: de 7.000 a 8.000 homens, incluindo 1.000 a 2.000 cavaleiros; de 10.000 a 12.000 homens; de 10.000 homens, incluindo 3.000 cavaleiros; ou 7.500 homens. O exército consistia em cerca de metade de infantaria, um quarto de cavalaria e um quarto de arqueiros ou homens de besta.
        </p>
        <p className="mb-6">
          Mais tarde, listas de companheiros de Guilherme, o Conquistador, sobrevivem, mas a maioria contém nomes adicionais; apenas cerca de 35 indivíduos nomeados podem ser identificados com confiabilidade como tendo estado com Guilherme em Hastings.
        </p>
        <p className="mb-6">
          A principal armadura consistia em hauberques de cota de malha, geralmente até os joelhos, com aberturas para permitir montar, alguns com mangas até os cotovelos. Alguns hauberques podem ter sido feitos de escamas presas a uma túnica, com as escamas feitas de metal, chifre ou couro endurecido. O capacete era geralmente cônico, com uma faixa vertical protegendo a ponte do nariz. Cavaleiros e infantaria carregavam escudos. O escudo do soldado de infantaria era geralmente redondo e feito de madeira com reforço metálico. Os cavaleiros usavam um escudo em forma de pipa e eram geralmente armados com uma lança. A lança posicionada sob o braço direito, um novo estilo, provavelmente não foi usada em Hastings, pois o terreno era desfavorável para longos ataques de cavalaria. Tanto a infantaria quanto a cavalaria geralmente lutavam com uma espada reta, longa e de lâmina dupla. A infantaria também poderia usar lanças e dardos longos.
        </p>
        <p className="mb-6">
          Alguns dos cavaleiros podem ter usado uma maça em vez de uma espada. Os arqueiros usavam arcos ou bestas, e a maioria não usava armaduras.
        </p>
      </div>
    </div>

    {/* Harold se move para o Sul */}
    <div className="flex justify-center border-t-4 border-gray-800 pt-6 mt-6">
      <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Harold Avança para o Sul</h2>
        <p className="mb-6">
          Após derrotar seu irmão Tostig e Harald Hardrada no norte, Harold deixou grande parte de suas forças no norte, incluindo Morcar e Edwin, e marchou com o restante de seu exército para o sul para lidar com a ameaça de invasão normanda. Não está claro quando Harold soube do desembarque de Guilherme, mas provavelmente foi durante a marcha. Harold parou em Londres por cerca de uma semana antes de Hastings, então provavelmente passou cerca de uma semana em sua marcha para o sul, percorrendo uma média de cerca de 43 km por dia, para as aproximadamente 320 km totais.
        </p>
        <p className="mb-6">
          Harold acampou em Caldbec Hill na noite de 13 de outubro, perto de uma "macieira de galho cinza", a cerca de 13 km do castelo de Guilherme em Hastings. Alguns dos primeiros relatos contemporâneos franceses mencionam um emissário ou emissários enviados por Harold a Guilherme, o que é provável, embora nada tenha ocorrido disso.
        </p>
        <p className="mb-6">
          Embora Harold tenha tentado surpreender os normandos, os batedores de Guilherme reportaram a chegada dos ingleses ao duque. Os eventos exatos que antecederam a batalha são obscuros, com relatos contraditórios nas fontes, mas todos concordam que o exército de Guilherme avançou de seu castelo em direção ao inimigo.
        </p>
        <p className="mb-6">
          Harold tomou uma posição defensiva no topo da colina Senlac (atualmente Battle, East Sussex), a cerca de 9,7 km do castelo de Guilherme em Hastings.
        </p>
      </div>
    </div>

    <div className="flex justify-center mt-6">
      <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Forças Inglesas em Hastings</h2>
        <p className="mb-6">
          O número exato de soldados no exército de Harold em Hastings é desconhecido, pois os registros contemporâneos não fornecem números confiáveis. Algumas fontes normandas falam de 400.000 a 1.200.000 do lado de Harold, enquanto fontes inglesas parecem subestimar o exército de Harold, talvez para tornar a derrota inglesa menos devastadora. Historiadores recentes sugerem números entre 5.000 e 13.000, enquanto a maioria argumenta que o exército inglês contava de 7.000 a 8.000 homens. Esses homens seriam uma mistura do fyrd e dos housecarls.
        </p>
        <p className="mb-6">
          Poucos ingleses individuais são conhecidos por terem estado presentes; cerca de 20 indivíduos nomeados podem razoavelmente ser considerados como tendo lutado com Harold em Hastings, incluindo os irmãos de Harold, Gyrth e Leofwine, e dois outros parentes.
        </p>
        <p className="mb-6">
          O exército inglês consistia inteiramente de infantaria. É possível que alguns membros de classe mais alta do exército tivessem cavalgado para a batalha, mas depois desmontado quando o combate começou para lutar a pé. O núcleo do exército era formado pelos housecarls, soldados profissionais em tempo integral. Sua armadura consistia em um capacete cônico, uma hauberk de malha e um escudo, que poderia ser em forma de pipa ou redondo.
        </p>
        <p className="mb-6">
          A maioria dos housecarls lutava com o machado de batalha dinamarquês de duas mãos, mas também poderiam carregar uma espada. O restante do exército era formado por recrutas do fyrd, também infantaria, mas mais levemente armados e não profissionais. A maioria da infantaria teria formado parte do "escudo de parede", no qual as primeiras fileiras trancavam seus escudos juntos. Atrás deles estariam os axemen, os atiradores de dardos e arqueiros.
        </p>
      </div>
    </div>

    {/* Batalha de Hastings */}
    <div className="flex justify-center border-t-4 border-gray-800 pt-6 mt-6">
      <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
        <h2 className="text-2xl font-bold mb-4">Batalha de Hastings: Descrição e Contexto</h2>

        <h3 className="text-xl font-semibold mb-2">Background e Localização</h3>
        <p className="mb-4">
          Devido às várias contradições entre os relatos primários, é impossível fornecer uma descrição autoritativa da batalha. Os únicos fatos indiscutíveis são que os combates começaram às 9h da manhã de sábado, 14 de outubro de 1066, e que a batalha durou até o anoitecer. O pôr do sol naquele dia foi às 16h54, com o campo de batalha já escuro por volta das 17h54 e em completa escuridão às 18h24. A lua surgiu naquela noite somente às 23h12, portanto, uma vez que o sol se pôs, havia pouca luz no campo de batalha. William de Jumièges relata que o Duque Guilherme manteve seu exército armado e pronto contra um ataque surpresa durante toda a noite anterior.
        </p>
        <p className="mb-4">
          A batalha ocorreu 11 km ao norte de Hastings, na atual cidade de Battle, entre duas colinas – Caldbec Hill ao norte e Telham Hill ao sul. A área era densamente arborizada, com um pântano nas proximidades. O nome tradicional dado à batalha é incomum, pois havia várias localidades muito mais próximas do campo de batalha do que Hastings. A crônica anglo-saxônica a chamou de "batalha da árvore de maçã velha". Dentro de 40 anos, a batalha foi descrita pelo cronista anglo-normando Orderic Vitalis como "Senlac", uma adaptação normanda-francesa da palavra em inglês antigo "Sandlacu", que significa "água arenosa". Isso pode ter sido o nome do riacho que atravessa o campo de batalha.
        </p>

        <h3 className="text-xl font-semibold mb-2">Disposição das Forças e Táticas</h3>
        <p className="mb-4">
          As forças de Harold se posicionaram em uma formação pequena e densa no topo de uma encosta íngreme, com seus flancos protegidos por bosques e terreno pantanoso à sua frente. A linha de combate pode ter se estendido o suficiente para ser ancorada em um riacho próximo. Os ingleses formaram um muro de escudos, com as fileiras da frente segurando seus escudos próximos uns aos outros ou até sobrepondo-os para se protegerem dos ataques.
        </p>
        <p className="mb-4">
          Em relação à disposição normanda, Guilherme parece ter organizado suas forças em três divisões ou "batalhas", que correspondiam aproximadamente às suas origens. As unidades à esquerda eram os bretões, juntamente com os de Anjou, Poitou e Maine. Esta divisão foi comandada por Alan o Vermelho, parente do conde bretão. O centro foi ocupado pelos normandos, sob o comando direto do duque, com muitos de seus parentes e parentes próximos agrupados ao redor do partido ducal. A última divisão, à direita, consistia nos franceses, com alguns homens de Picardia, Bolonha e Flandres. A direita foi comandada por William fitzOsbern e pelo Conde Eustace II de Bolonha.
        </p>

        <h3 className="text-xl font-semibold mb-2">Início da Batalha</h3>
        <p className="mb-4">
          A batalha começou com os arqueiros normandos atirando em direção à parede de escudos dos ingleses, mas com pouco efeito. O ângulo de subida fez com que as flechas ou ricocheteassem nos escudos dos ingleses ou passassem por cima deles, caindo além da linha. Depois do ataque dos arqueiros, Guilherme enviou os lanceiros para atacar os ingleses. Eles foram recebidos por uma chuva de projéteis, não flechas, mas lanças, machados e pedras. A infantaria não conseguiu abrir brechas no muro de escudos, e a cavalaria avançou para dar suporte.
        </p>
        <p className="mb-4">
          A cavalaria também não conseguiu avançar, e uma retirada geral começou, sendo atribuída à divisão bretã no flanco esquerdo de Guilherme. Rumores começaram a circular de que o duque havia sido morto, o que causou confusão. As forças inglesas começaram a perseguir os invasores em fuga, mas Guilherme atravessou suas forças, mostrando seu rosto e gritando que ainda estava vivo. O duque então liderou um contra-ataque contra as forças inglesas em perseguição, e alguns ingleses se reuniram em uma elevação antes de serem superados.
        </p>

        <h3 className="text-xl font-semibold mb-2">Fugas Fingidas</h3>
        <p className="mb-4">
          É provável que tenha ocorrido uma pausa no início da tarde, sendo necessário um descanso e alimentação. Guilherme pode também ter usado esse tempo para implementar uma nova estratégia, possivelmente inspirada pela perseguição inglesa e subsequente derrota pelas forças normandas. O uso de fugas fingidas como uma tática deliberada é geralmente aceito pelos historiadores modernos, e essas fugas provavelmente enfraqueceram as forças da casa real inglesa no muro de escudos.
        </p>

        <h3 className="text-xl font-semibold mb-2">Morte de Harold</h3>
        <p className="mb-4">
          Harold parece ter morrido no final da batalha, embora os relatos nas fontes sejam contraditórios. A versão tradicional de Harold morrendo de uma flecha no olho surgiu pela primeira vez nos anos 80 do século XI, a partir de um monge italiano, Amatus de Montecassino. Outros relatos sugerem que Harold foi morto em combate por um cavaleiro normando. No final, a morte de Harold levou à desintegração das forças inglesas, que começaram a fugir.
        </p>

        <h3 className="text-xl font-semibold mb-2">Razões para o Resultado</h3>
        <p className="mb-4">
          A derrota de Harold provavelmente se deveu a várias circunstâncias. Uma delas foi a necessidade de defender contra duas invasões quase simultâneas. Outro fator importante foi a decisão de Harold de apressar sua marcha para o sul para conter as investidas de Guilherme. A falta de cavalaria nas forças inglesas também limitou suas opções táticas. No final, a morte de Harold foi decisiva, pois sinalizou a quebra das forças inglesas, levando à vitória normanda.
        </p>
      </div>
    </div>

    {/* As Consequências da batalha */}
    <div className="flex justify-center border-t-4 border-gray-800 pt-6 mt-6">
      <div className="lg:w-2/3 text-lg text-justify leading-relaxed mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consequências</h2>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Identificação do Corpo de Harold</h3>
        <p className="mb-6">
          No dia seguinte à batalha, o corpo de Harold foi identificado, seja por sua armadura ou por marcas em seu corpo. Seu estandarte pessoal foi apresentado a Guilherme e, posteriormente, enviado para o papado. Os corpos dos mortos ingleses, incluindo alguns dos irmãos de Harold e housecarls, foram deixados no campo de batalha, embora alguns tenham sido removidos por parentes posteriormente. Os mortos normandos foram enterrados em uma grande cova comum, que não foi localizada até hoje.
        </p>
        <p className="mb-6">
          As figuras exatas de baixas são desconhecidas. Para os ingleses que participaram da batalha, o número de mortos implica que a taxa de mortalidade foi de cerca de 50% dos envolvidos, embora esse número possa ser exagerado. Entre os normandos que lutaram em Hastings, um em sete é dito ter morrido, mas todos eram nobres, e a taxa de mortalidade entre os soldados comuns provavelmente foi mais alta. Embora as figuras de Orderic Vitalis sejam altamente exageradas, sua proporção de um em quatro baixas pode ser precisa. Marren especula que talvez 2.000 normandos e 4.000 ingleses tenham sido mortos em Hastings. Relatos afirmam que alguns dos mortos ingleses ainda estavam sendo encontrados na colina anos depois.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Lendas e Relatos Sobre o Corpo de Harold</h3>
        <p className="mb-6">
          Uma história relata que Gytha, mãe de Harold, ofereceu ao duque vencedor o peso do corpo de seu filho em ouro por sua custódia, mas a oferta foi recusada. Guilherme ordenou que o corpo de Harold fosse jogado no mar, mas não se sabe se isso realmente aconteceu. Outra história afirma que Harold foi enterrado no topo de um penhasco. A Abadia de Waltham, fundada por Harold, posteriormente afirmou que seu corpo foi secretamente enterrado lá. Outras lendas afirmam que Harold não morreu em Hastings, mas fugiu e se tornou um eremita em Chester.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Resistência Continuada</h3>
        <p className="mb-6">
          Guilherme esperava receber a submissão dos líderes ingleses sobreviventes após sua vitória, mas, em vez disso, Edgar o Ætheling foi proclamado rei pelo Witenagemot, com o apoio dos condes Edwin e Morcar, Stigand, o Arcebispo de Canterbury, e Ealdred, o Arcebispo de York. Guilherme então avançou em direção a Londres, marchando ao redor da costa de Kent. Ele derrotou uma força inglesa que o atacou em Southwark, mas não conseguiu tomar a Ponte de Londres, forçando-o a chegar à capital por uma rota mais indireta.
        </p>
        <p className="mb-6">
          Guilherme subiu o vale do Tamisa para cruzar o rio em Wallingford, onde recebeu a submissão de Stigand. Ele então viajou para o nordeste ao longo das Chilterns, antes de avançar em direção a Londres pelo noroeste, enfrentando mais batalhas contra forças da cidade. Os líderes ingleses se renderam a Guilherme em Berkhamsted, Hertfordshire. Guilherme foi aclamado Rei da Inglaterra e coroado por Ealdred em 25 de dezembro de 1066, na Abadia de Westminster.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Rebeliões e Conflitos Pós-Batalha</h3>
        <p className="mb-6">
          Apesar da submissão dos nobres ingleses, a resistência continuou por vários anos. Houve rebeliões em Exeter no final de 1067, uma invasão pelos filhos de Harold em meados de 1068 e uma revolta em Northumbria em 1068. Em 1069, Guilherme enfrentou mais problemas com os rebeldes de Northumbria, uma frota dinamarquesa invasora e revoltas no sul e oeste da Inglaterra. Ele reprimiu implacavelmente as várias insurreições, culminando na Devastação do Norte no final de 1069 e início de 1070, que devastou partes do norte da Inglaterra. Uma nova rebelião em 1070 por Hereward the Wake também foi derrotada pelo rei, em Ely.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Fundação da Abadia de Battle</h3>
        <p className="mb-6">
          A Abadia de Battle foi fundada por Guilherme no local da batalha. De acordo com fontes do século XII, Guilherme fez um voto de fundar a abadia, e o altar maior da igreja foi colocado no local onde Harold havia morrido. É mais provável que a fundação tenha sido imposta a Guilherme pelos legados papais em 1070. A topografia do campo de batalha foi alterada pela construção subsequente da abadia, e a encosta defendida pelos ingleses agora é muito menos íngreme do que era na época da batalha; o topo da colina também foi construído e nivelado.
        </p>
        <p className="mb-6">
          Após a Dissolução dos Mosteiros, as terras da abadia passaram para proprietários seculares, que as usaram como residência ou casa de campo. Em 1976, a propriedade foi colocada à venda e comprada pelo governo com a ajuda de alguns doadores americanos que desejavam honrar o 200º aniversário da independência dos Estados Unidos. O campo de batalha e os terrenos da abadia são atualmente de propriedade e administrados pela English Heritage e estão abertos ao público.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">O Tapeçário de Bayeux</h3>
        <p className="mb-6">
          O Tapeçário de Bayeux é uma narrativa bordada dos eventos que levaram à Batalha de Hastings, provavelmente encomendada por Odo de Bayeux logo após a batalha, talvez para ser pendurado no palácio do bispo de Bayeux. Nos tempos modernos, as reencenações anuais da Batalha de Hastings atraem milhares de participantes e espectadores para o local da batalha original.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Veteranos da Batalha de Hastings</h3>
        <p className="mb-6">
          Alguns veteranos ingleses da batalha deixaram a Inglaterra e se juntaram à Guarda Varangiana em Constantinopla. Eles lutaram contra os normandos novamente na Batalha de Dyrrhachium em 1081, sendo derrotados novamente em circunstâncias semelhantes.
        </p>
      </div>
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

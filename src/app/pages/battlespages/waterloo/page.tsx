// src/app/pages/battlespages/waterloo/pages.tsx
'use client';

import Image from "next/image";

export default function WaterlooPage() {
  return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Batalha de Waterloo</h1>
          <img
            src="/battles-image/waterloo.png"
            alt="Batalha de Waterloo"
            className="w-auto h-auto max-w-full max-h-96 mx-auto mb-4 border-4 border-gray-300 rounded-lg"
          />

          <p className="text-lg text-gray-600 text-justify mb-6">
              A Batalha de Waterloo foi um confronto militar ocorrido a 18 de Junho de 1815 perto de Waterloo, na atual
              Bélgica (então parte integrante do Reino Unido dos Países Baixos). Um exército do Primeiro Império Francês, sob
              o comando do Imperador Napoleão (72 000 homens), foi derrotado pelos exércitos da Sétima Coligação que incluíam
              uma força britânica liderada pelo Duque de Wellington, e uma força prussiana comandada por Gebhard Leberecht
              von Blücher (118 000 homens). Este confronto marcou o fim dos Cem Dias e foi a última batalha de Napoleão; a
              sua derrota terminou com o seu governo como Imperador.
          </p>
          <p className="text-lg text-gray-600 text-justify mb-6">
              Depois do regresso de Napoleão ao poder em 1815, muitos dos Estados que se tinham oposto ao Imperador formaram
              a Sétima Coligação, dando início à mobilização dos seus exércitos. Duas forças de grande dimensão sob o comando
              de Wellington e de Blücher concentraram-se perto da fronteira nordeste da França. Napoleão decidiu atacar na
              esperança de as destruir antes que dessem início a uma invasão coordenada da França, juntamente com outros
              membros da coligação. O confronto decisivo da campanha de três dias de Waterloo — 16 a 19 de Junho de 1815 —
              teve lugar em Waterloo. De acordo com Wellington, a batalha foi "a mais renhida a que assisti na minha vida".
          </p>
          <p className="text-lg text-gray-600 text-justify mb-6">
              Napoleão atrasou o início da batalha até ao meio-dia esperando que o terreno secasse. O exército de Wellington,
              posicionado ao longo da estrada para Bruxelas, na escarpa de Mont-Saint-Jean, resistiu a múltiplos ataques
              franceses até que, no final do dia, os prussianos chegaram em força e penetraram no flanco direito de Napoleão.
              Naquele momento, o exército de Wellington contra-atacou provocando a desordem das tropas francesas no
              campo-de-batalha. Posteriormente, as forças da coligação entraram em França repondo Luís XVIII no trono
              francês. Napoleão abdicou, rendeu-se aos britânicos e foi exilado na ilha de Santa Helena, onde morreu em 1821.
          </p>
          <p className="text-lg text-gray-600 text-justify mb-6">
              O campo-de-batalha fica, atualmente em território belga, a cerca de 13 km a sudeste de Bruxelas, e a 1,6 km da
              cidade de Waterloo. No local da batalha existe hoje um enorme monumento designado por Monte do Leão (em francês
              Butte du Lion), construído por terra trazida do próprio terreno da batalha.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contexto Histórico</h2>
          <p className="text-lg text-gray-600 text-justify mb-6">
              Os últimos dias de março de 1815 foram azedos para os diplomatas reunidos em Viena. Ali, representantes do
              Império Russo, Reino da Prússia, Império Austríaco, Suécia, Reino Unido e várias nações e reinos menores
              tentavam, havia meses, redesenhar o mapa político da Europa, reinstaurando as monarquias e os territórios que
              existiam antes do furacão napoleônico. Porém, a ilusão de que o general corso estava liquidado acabou quando
              souberam que ele não só havia retornado do exílio na ilha de Elba (uma ilhota no mar Mediterrâneo), como no dia
              20 de março fora recebido em glória em Paris. Os aliados mal puderam acreditar. Napoleão Bonaparte, dez meses
              antes, em 11 de abril de 1814, fora derrotado por uma coalizão de mais de 500 mil soldados de várias nações
              europeias, que se sublevaram contra o domínio francês após a desastrosa campanha da Rússia, em 1812.
              Vitoriosos, os aliados colocaram Luís XVIII no trono da França e enviaram Bonaparte ao exílio.
          </p>

          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Início da campanha</h2>

            {/* Div central com imagem e texto */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              
              {/* Lado esquerdo */}
              <div
                className="flex flex-col items-center border border-gray-300 rounded-lg p-4 md:mr-6" // Aplicando margem apenas para telas médias ou maiores
                style={{ maxHeight: '400px' }}
              >
                <img
                  src="/battles-image/waterloo/waterloo_campaing.png"
                  alt="Mapa tático da Batalha de Waterloo"
                  className="w-auto max-h-64 mb-2"
                />
                <p className="text-center text-gray-600 font-medium">Mapa tático da Batalha de Waterloo</p>
              </div>

              {/* Lado direito */}
              <div className="flex-1">
                <p className="text-lg text-gray-600 text-justify mb-4">
                  Em 15 de junho, com 73 000 homens, Napoleão invadiu a Bélgica. Seu único trunfo era bater separadamente os exércitos 
                  inimigos antes que se reunissem. As tropas que estavam na área eram formadas por prussianos e outras compostas por 
                  ingleses, belgas, neerlandeses e alemães, instalados na Bélgica. Napoleão tentaria batê-los para forçar algum armistício 
                  com as outras nações, que estavam com seus exércitos mais distantes da França. O desafio não era fácil: o exército 
                  anglo-batavo-alemão contava com 93 mil homens, liderados pelo Duque de Wellington. O prussiano tinha 117 mil homens, 
                  comandados por um militar muito experiente, o general Blücher. Mesmo em inferioridade numérica, Napoleão teria de atacar. 
                  Dentro de um mês, o exército austríaco de 210 mil homens, outro russo, de 150 mil e um terceiro grupo austro-italiano, 
                  de 75 mil invadiriam a França pelo norte e pelo sul.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vitória apertada</h2>

            {/* Div central com imagem e texto */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              
              {/* Lado esquerdo */}
              <div
                className="flex flex-col items-center border border-gray-300 rounded-lg p-4 md:mr-6" // Aplicando margem apenas para telas médias ou maiores
                style={{ maxHeight: '400px' }}
              >
                <img
                  src="/battles-image/waterloo/gebhard-blucher.jpg"
                  alt="General Blücher"
                  className="w-auto max-h-64 mb-2"
                />
                <p className="text-center text-gray-600 font-medium">General Blücher durante a campanha</p>
              </div>

              {/* Lado direito */}
              <div className="flex-1">
                <p className="text-lg text-gray-600 text-justify mb-4">
                  Quando Napoleão invadiu a Bélgica as tropas inglesas, prussianas e russas ainda não haviam se juntado ao Exército Prussiano. 
                  Napoleão decidiu bater primeiramente os prussianos, que estavam à sua direita em Ligny, e enviou o marechal Michel Ney com 24 mil 
                  homens, para Quatre-Bras a fim de barrar qualquer tentativa dos ingleses ajudarem os aliados. No dia 16 de junho de 1815 Bonaparte 
                  encarou o velho Blücher. Sabendo que eram os franceses que tinham de correr atrás do osso, o prussiano entrincheirou seus homens em 
                  fazendas próximas a Ligny e esperou. A batalha durou todo o dia. No fim da tarde a Guarda Imperial Francesa arrebentou o centro 
                  prussiano, decidindo a batalha. Blücher evitou uma desgraça maior, liderando o contra-ataque com a cavalaria. Os prussianos puderam 
                  recuar em ordem, na escuridão.
                </p>
                <p className="text-lg text-gray-600 text-justify mt-4">
                  Ao término do embate, os prussianos amargavam 22 mil baixas, contra 11 mil dos franceses. Blücher evitou a derrota. Napoleão, porém, 
                  conseguiu o que queria: afastar os prussianos para bater os ingleses em seguida. Para não deixar que os prussianos pudessem se juntar 
                  aos ingleses na batalha seguinte, Napoleão destacou uma tropa de 30 mil homens, entregou-a ao general Emmanuel de Grouchy e ordenou 
                  que perseguisse os prussianos.
                </p>
              </div>
            </div>
          </div>
        


          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wellesley</h2>

            {/* Div central com imagem e texto */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              
              {/* Lado esquerdo */}
              <div
                className="flex flex-col items-center border border-gray-300 rounded-lg p-4 md:mr-6"
                style={{ maxHeight: '400px' }}
              >
                <img
                  src="/battles-image/waterloo/wellington.jpg" // Substitua pelo caminho correto da imagem de Wellesley
                  alt="Duque de Wellington"
                  className="w-auto max-h-64 mb-2"
                />
                <p className="text-center text-gray-600 font-medium">Duque de Wellington</p>
              </div>

              {/* Lado direito */}
              <div className="flex-1">
                <p className="text-lg text-gray-600 text-justify mb-4">
                  No dia seguinte, 17 de Junho, o duque de Wellington se aproveitou da chuva forte que caiu sobre a região para levar o exército a uma posição mais segura, o monte Saint Jean. 
                  Os franceses chegaram lá ao fim do dia. O temporal continuava mas Napoleão não dispunha de tempo. Mesmo sob tempestade ele foi pessoalmente verificar as condições do campo durante a noite. 
                  Naquele momento Bonaparte tinha a chance com que tanto sonhara. Os prussianos estavam em retirada, sendo acossados por Grouchy. A ele só restava ter um bom desempenho contra os ingleses no dia seguinte 
                  e demonstrar à Europa que a França ainda estava viva.
                </p>
                <p className="text-lg text-gray-600 text-justify mt-4">
                  Pela manhã o tempo melhorara. Wellington contava com 23 mil ingleses e 44 mil soldados aliados, vindos da Bélgica, dos Países Baixos e de pequenos estados alemães, num total de 67 mil homens, 
                  apoiados por 160 canhões. Os franceses contavam com 74 mil homens e 250 canhões. Wellington posicionou suas tropas ao longo da elevação de Saint Jean. Sua ala direita se concentrava em torno 
                  da fazenda de Hougomount. No centro, logo abaixo da colina, outra fazenda, La Haye Sainte, estava ocupada por King's German Legion (Hanover). À esquerda tropas aliadas se posicionavam em torno 
                  a uma terceira fazenda, a Papelotte. Wellesley assumiu uma postura extremamente defensiva, em parte porque seu exército não era dos melhores e porque para ele quanto mais tempo demorasse a batalha, 
                  maiores eram as chances de o reforço prussiano chegar.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Canhões na fazenda</h2>

            {/* Div central com texto */}
            <div className="flex flex-col md:flex-row items-start">
              {/* Lado direito */}
              <div className="flex-1">
                <p className="text-lg text-gray-600 text-justify mb-4">
                  Napoleão queria começar o ataque cedo. A violenta tempestade noturna, entretanto, fez com que Napoleão adiasse o ataque previsto para a noite de 17 de Junho para o meio-dia do dia 18, 
                  a fim de aguardar que o solo secasse já que a chuva havia transformado o campo de batalha num lamaçal. Ele teve de esperar até aproximadamente 11 horas da manhã, quando o solo ficou mais seco, 
                  para iniciar o ataque contra Arthur Wellesley. A ideia era chamar a atenção para esse setor e fazer o inglês desperdiçar tropas ali e então atacar no centro. O ataque a Hougomount, com fogo de canhões, 
                  durou meia hora. O lugar era protegido por duas companhias inglesas, que não somavam mais de 3,5 mil homens. Elas receberam o peso de mais de 10 mil franceses, mas não cederam. 
                  Aos poucos, o que era para ser um blefe tragou durante todo o dia preciosos recursos franceses. Pior, Wellesley não caíra na armadilha e mantinha as melhores tropas no centro, perto de La Haye Sainte. 
                  Napoleão então decidiu que era a hora de atacar o centro da linha inglesa.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12 horas 30 minutos</h2>

            {/* Div central com texto */}
            <div className="flex flex-col md:flex-row items-start">
              {/* Lado direito */}
              <div className="flex-1">
                <p className="text-lg text-gray-600 text-justify mb-4">
                  O marechal Ney, seu braço-direito, posicionou 74 canhões contra a estratégica fazenda de La Haye Sainte. Napoleão agora faria o que sempre comandava com eficiência: explodir o centro adversário. 
                  Pressentindo o perigo, Wellesley ordenou às tropas posicionadas no alto do monte Saint Jean que se jogassem ao chão para diminuir os danos, mas nem todos tiveram a chance. 
                  As tropas belgo-neerlandesas do general Bilandt, que permaneceram na encosta desprotegida do monte, foram simplesmente massacradas. Mal os canhões se calaram, foi a vez de os tambores da infantaria francesa iniciarem seu rufar.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13 horas</h2>

            {/* Div central com texto em coluna */}
            <div className="flex flex-col items-start">
              <p className="text-lg text-gray-600 text-justify mb-4">
                Marchando em colunas, os 17 mil homens do corpo comandado pelo general D'Erlon atacaram. O objectivo: conquistar a fazenda de La Haye Sainte, o ponto vital do centro inglês. Ao mesmo tempo, outro contingente se aproximava, pressionando a ala esquerda dos britânicos. Napoleão agora declarava as suas verdadeiras intenções e partia para o ataque frontal.
                Acossadas pela infantaria francesa, as tropas inglesas perderam Papellote e deixaram vulnerável a ala esquerda. Ao mesmo tempo, as tropas alemãs da Legião do Rei, as responsáveis pela guarda de La Haye Sainte, no centro, ameaçavam sucumbir.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                Foi o momento de Wellesley pensar rápido. Na ala esquerda, o comandante inglês ordenou que o príncipe alemão Bernhardt de Saxe-Weimar retomasse Papelotte, o que foi feito com sucesso. Para conter o ataque da infantaria napoleônica no centro, ele acionou a 5ª Brigada, veterana da guerra na Espanha. Fuziladas a curta distância, as tropas de Napoleão retrocederam, não sem antes deixar morto no campo, com uma bala na cabeça, o chefe da brigada inimiga, o general Picton.
                Ao ver os franceses recuando, Wellesley viu a chance de liquidar a batalha. Acionou sua cavalaria para um contra-ataque no centro. As brigadas Household, Union e Vivian provocaram desordem entre os franceses. Mas por pouco tempo. Perto da linha de canhões inimiga, a cavalaria inglesa foi surpreendida por um contra-golpe mortal.
                A cavalaria pesada francesa, com seus Cuirassiers (couraceiros), apoiados pelos Lanciers (cavalaria leve), atacou os ingleses. O general Ponsonby, chefe da brigada Union, morreu junto com sua unidade, aniquilada. Napoleão dava o troco e continha os ingleses.
              </p>
            </div>
          </div>

          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">15 horas</h2>

            {/* Div central com texto em coluna */}
            <div className="flex flex-col items-start">
              <p className="text-lg text-gray-600 text-justify mb-4">
                A batalha permanecia num impasse. Na ala direita de Wellesley, a luta prosseguia sem um resultado decisivo em Hougomount. 
                No centro e na esquerda, os ingleses e os aliados batavos e alemães haviam a muito custo mantido La Haye Sainte e Papilotte. 
                Foi nessa hora, entretanto, que Bonaparte recebeu uma notícia que o alarmou. Cerca de 40 mil homens se aproximavam do lado 
                direito do exército francês, nas imediações de Papilotte. De início, chegou a pensar que fosse o general Emmanuel de Grouchy 
                — que havia sido encarregado de afastar os prussianos — chegando. Logo suas esperanças se desfizeram. Grouchy falhara. Aquele 
                corpo de exército era simplesmente a vanguarda do exército prussiano, que chegava para socorrer o aliado inglês. Napoleão teve 
                que improvisar. Sua ala direita, comandada pelo general Lobau, se realinhou de modo defensivo para segurar a chegada dos prussianos 
                e dar ao imperador algumas horas para agir.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                Enquanto isso, ele ordenou ao marechal Michel Ney que, de uma vez por todas, tomasse La Haye Sainte e rompesse o centro inglês, 
                assegurando a vitória. Às 16 horas, o marechal Ney, com dois batalhões de infantaria, ordenou um ataque coordenado e capturou 
                La Haye Sainte, uma fazenda no meio das linhas aliadas. A artilharia francesa então começou a atacar os aliados a partir do centro. 
                Nesse momento Ney, cometeu um erro fatal de julgamento. Em meio à fumaça dos canhões e à loucura da batalha, supôs que o exército 
                inglês estava recuando. Ele então ordenou que sua cavalaria partisse para cima do inimigo. Napoleão achou o movimento precipitado, 
                mas, uma vez que Ney era quem estava encabeçando o ataque, enviou mais cavaleiros para sustentar a carga.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                A tremenda carga dos Cuirassiers terminou de forma trágica. A infantaria inglesa não estava recuando, como Ney imaginava. 
                Eles se agruparam em quadrados e passaram a fuzilar os cavaleiros franceses, que não conseguiam romper as formações defensivas. 
                Nas duas horas seguintes, Ney lideraria ao menos 12 cargas de cavalaria contra o centro inglês, com mais de 5 mil cavaleiros.
              </p>
            </div>
          </div>

          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">17 horas</h2>

            {/* Div central com texto em coluna */}
            <div className="flex flex-col items-start">
              <p className="text-lg text-gray-600 text-justify mb-4">
                La Haye Sainte finalmente caiu em mãos francesas, mas os ingleses ainda mantinham seu centro coeso no alto do monte Saint Jean.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                A cavalaria francesa lançou o assalto final e foi novamente batida. Os ingleses não estavam em melhor estado e suas linhas estavam 
                a ponto de romper. Ney, dessa vez corretamente, identificou a oportunidade de vencer e implorou a Napoleão por mais tropas. 
                "De onde você espera que eu tire mais tropas? Quer que eu invente algumas agora?", respondeu Napoleão, irritado. 
                "Nesse momento, Bonaparte viu a vitória escapar. Mais um esforço e Wellesley teria sido derrotado. A essa altura, os prussianos estavam 
                esmigalhando a direita de seu exército e ele teve que priorizar esse setor para ganhar mais fôlego. Na verdade, talvez ele esperasse ver 
                surgir, a qualquer momento as tropas de Emmanuel de Grouchy. Com trinta mil homens a mais, ele poderia ter vencido a batalha. 
                A luta com os prussianos ia de mal a pior. Dez batalhões da Guarda Imperial após um combate feroz contra o dobro de inimigos, 
                haviam perdido 80% de seus homens e começavam a recuar.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                Napoleão decidiu então utilizar sua última e preciosa reserva: a sua famosa Guarda Imperial, a elite de seus veteranos. 
                Ele enviou dois batalhões contra os prussianos — e mais uma vez eles fizeram valer a sua reputação. Quando a Guarda Imperial entra em campo, 
                os inimigos tremiam. Até então ela nunca havia sido derrotada em batalha. Os dois batalhões varreram sozinhos 14 batalhões prussianos, 
                estabilizaram a ala direita e deram ao imperador a chance de lutar novamente contra Wellesley no centro.
              </p>
            </div>
          </div>

          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">19 horas</h2>

            {/* Div central com texto em coluna */}
            <div className="flex flex-col items-start">
              <p className="text-lg text-gray-600 text-justify mb-4">
                Às 7 horas, Napoleão então jogou a última cartada. Ele enviou contra o centro inglês os últimos quatro batalhões da Velha Guarda 
                em uma tentativa de quebrar a então enfraquecida artilharia de Wellington. Wellesley, nesse meio tempo, embora quase tenha dado 
                o toque de retirada, foi beneficiado pela intensa pressão dos prussianos, que diminuíram seu front e lhes livraram algumas unidades.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                Nesta ocasião, Blücher (marechal-de-campo prussiano) apareceu com a maior parte das tropas prussianas, atingindo Napoleão no flanco, 
                e Wellesley ordenou o avanço geral.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                Em desespero, o general inglês reuniu tudo o que tinha e esperou o ataque final entrincheirado no alto do Saint Jean. Enquanto subia 
                o monte, a Guarda Imperial foi assaltada pelas unidades inglesas, alemãs e holandesas. Uma a uma, foram repelidas, enquanto os veteranos 
                de Napoleão continuavam seu avanço.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                A Quinta Brigada inglesa, do general Hallket, tentou pará-los, mas logo seus homens fugiram assustados diante do avanço francês. 
                Apesar de sofrer baixas horríveis e lutar na proporção de 1 para 3, simplesmente ninguém conseguia parar a Velha Guarda. 
                Wellesley foi salvo não por suas próprias tropas, mas por um general belga que durante anos lutou ao lado de Napoleão — 
                quando a Bélgica era um domínio francês. O general David Hendrik Chassé, à testa de seis batalhões neerlandeses e belgas, 
                se lançou numa carga feroz de baioneta contra os franceses. O ataque foi demais, até mesmo para a Guarda Imperial. 
                Sem apoio e em menor número, pela primeira vez os veteranos de Napoleão recuaram.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                Quando invadiu, as tropas inglesas, prussianas e russas ainda não haviam se juntado, logo, os gritos de "La Garde recule!" 
                (a Guarda recua) ecoaram pelo campo. O centro inglês havia resistido a despeito de todos os esforços. Pelo lado direito, 
                os 40 mil prussianos finalmente esmagavam os 20 mil franceses que lhes haviam obstruído durante horas. 
                Em um último ato de coragem, três batalhões da Velha Guarda permaneceram lutando para dar ao imperador a chance de fugir. 
                Lutariam até o fim. Cercados por prussianos, receberam ordem de rendição. O general Pierre Cambronne, o líder, teria então afirmado: 
                "A Guarda morre, mas não se rende". Em outro ponto, o marechal Ney, apelidado por Napoleão como "o bravo dos bravos", ao ver tudo perdido, 
                reuniu um grupo de soldados fiéis e liderou uma última carga de cavalaria, gritando: "Assim morre um marechal da França!”.
              </p>
              <p className="text-lg text-gray-600 text-justify mb-4">
                Napoleão, agarrado por auxiliares, foi retirado à força do campo de batalha. Seria posteriormente posto sob custódia inglesa e 
                enviado à distante ilha de Santa Helena, no Atlântico Sul, onde morreria em 1821. A batalha custara a ingleses, belgas, neerlandeses 
                e alemães 15 mil baixas. Os prussianos deixaram no campo 7 mil homens. Os franceses amargaram 25 mil mortos e feridos, além de 
                8 mil prisioneiros.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            {/* Título no topo */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">21 horas</h2>

            {/* Div central com texto em coluna */}
            <div className="flex flex-col items-start">
              <p className="text-lg text-gray-600 text-justify mb-4">
                Arthur Wellesley finalmente se encontrou com Von Blücher para o aperto de mãos. A ameaça napoleônica fora vencida de vez. 
                Blücher queria chamar a batalha de Belle Aliance — nome da fazenda que fora o quartel-general de Napoleão durante a batalha. 
                Wellesley, porém, teve outra ideia, influenciada por uma de suas manias, que era batizar combates com o nome do lugar onde 
                ele dormira na noite anterior. Uma vila a alguns quilômetros dali, conhecida por Waterloo, deu então o nome à histórica batalha.
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

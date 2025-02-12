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

export default function BudyonnyPage() {
  const [general, setGeneral] = useState<General | null>(null); // Tipando o estado
  const router = useRouter();

  useEffect(() => {
    // Verificar se 'generals' existe e é um array
    if (!Array.isArray(generals)) {
      console.error('Dados de generais não encontrados ou mal formatados');
      return;
    }

    // Buscar o general Semyon Budyonny na lista de generais usando o slug
    const budyonny = generals.find((general) => general.slug === 'budyonny');

    if (budyonny) {
      setGeneral(budyonny);
    } else {
      console.error('General Semyon Budyonny não encontrado.');
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
          <div className="flex flex-col items-center justify-center min-h-screen px-4">

            {/* Seção do Título */}
            <section className="text-center mb-6">
              <h1 className="text-5xl font-bold text-gray-800">{general.name}</h1>
            </section>

            {/* Seção da Imagem e Informações Adicionais */}
            <section className="flex flex-col items-center mb-12">
              <div className="flex-shrink-0 mb-4">
                <Image
                  src={general.imageUrl}
                  alt={`Imagem de ${general.name}`}
                  className="rounded-lg shadow-lg max-w-md"
                  width={500}
                  height={500}
                />
                <p className="text-center text-gray-600 mt-2">{general.name} durante sua carreira militar</p>
              </div>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
              <p className="text-lg text-gray-700 leading-relaxed">
                Semyon Mikhailovich Budyonny foi um cavaleiro russo e soviético, comandante 
                militar durante a Guerra Civil Russa, Guerra Polaco-Soviética e Segunda Guerra Mundial, além de político, sendo um aliado próximo 
                do líder soviético Joseph Stalin.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Nascido em uma família camponesa pobre da região dos cossacos do Don, no sul da Rússia, Budyonny foi recrutado para o Exército 
                Imperial Russo em 1903. Serviu com distinção em um regimento de dragões durante a Primeira Guerra Mundial, recebendo todas as 
                quatro classes da Ordem de São Jorge. Quando a Guerra Civil Russa eclodiu, Budyonny fundou a Cavalaria Vermelha, que desempenhou 
                um papel crucial na vitória bolchevique; ele se tornou renomado por sua bravura e foi tema de várias canções patrióticas populares.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em 1922, tornou-se comandante de todas as tropas no distrito militar do norte do Cáucaso. Atuou como inspetor da cavalaria do 
                Exército Vermelho (1924–37) e comandante do distrito militar de Moscou (1937–40). Como aliado político de Stalin, tornou-se um 
                dos cinco primeiros Marechais da União Soviética. Foi um dos dois comandantes militares mais seniores a sobreviver ao Grande 
                Expurgo e permanecer em posição quando a Alemanha invadiu a URSS em 1941. Após as forças soviéticas sob seu comando serem 
                derrotadas nas batalhas de Kiev e Uman, foi removido do comando da linha de frente.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Budyonny era um defensor ferrenho da cavalaria. Durante o Grande Expurgo, testemunhou contra os esforços de Mikhail Tukhachevsky 
                para criar um corpo independente de tanques, alegando que era tão inferior à cavalaria e ilógico que equivalia a "sabotagem". 
                Ao ser informado sobre a importância dos tanques na guerra iminente, em 1939, ele comentou: "Vocês não vão me convencer. Assim 
                que a guerra for declarada, todos gritarão: 'Chamem a Cavalaria!'"
              </p>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Infância e Juventude</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny nasceu em uma família camponesa pobre na propriedade rural de Kozyurin, perto da cidade de Salsk, na região dos Cossacos 
                  do Don, no sul do Império Russo (atualmente Oblast de Rostov). Embora tenha crescido em uma região cossaca, sua família era 
                  etnicamente russa, vinda da província de Voronezh. Trabalhou como lavrador, ajudante de loja, aprendiz de ferreiro e condutor 
                  de uma máquina de debulha a vapor, até o outono de 1903, quando foi recrutado para o Exército Imperial Russo.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Ele tornou-se cavaleiro ao reforçar o 46º Regimento Cossaco durante a Guerra Russo-Japonesa de 1904–1905. Após a guerra, foi 
                  transferido para o Regimento de Dragões Primorsk. Em 1907, foi enviado para a Academia de Oficiais de Cavalaria na Escola de 
                  Equitação de São Petersburgo. Ele se formou em primeiro lugar na turma após um ano, tornando-se instrutor com o posto de 
                  suboficial júnior. Retornou ao seu regimento como instrutor de equitação com o posto de suboficial sênior. No início da 
                  Primeira Guerra Mundial, juntou-se a um batalhão de cavalaria de dragões da reserva.
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Primeira Guerra Mundial</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Durante a Primeira Guerra Mundial, Budyonny foi oficial de tropa do 5º Esquadrão no 18º Regimento de Dragões Seversky, Divisão de 
                  Cavalaria do Cáucaso, no front oriental. Ele se tornou famoso por seu ataque a uma coluna de suprimentos alemã perto de Brzeziny, 
                  sendo condecorado com a Cruz de São Jorge de 4ª Classe. No entanto, os oficiais sob os quais ele serviu (principalmente 
                  aristocratas caucasianos que recebiam comissões com base em sua posição social) demonstraram grande incompetência.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em novembro de 1916, a Divisão de Cavalaria do Cáucaso foi transferida para o front do Cáucaso para lutar contra os turcos 
                  otomanos. Budyonny se envolveu em um confronto acalorado com o sargento-mor do esquadrão sobre o mau tratamento dos soldados e a 
                  constante falta de comida. O sargento-mor atacou Budyonny, que revidou com um soco, derrubando o oficial. Os soldados apoiaram 
                  Budyonny durante o interrogatório, alegando que o sargento-mor havia sido chutado por um cavalo. Como resultado, Budyonny foi 
                  privado de sua Cruz de São Jorge, embora pudesse ter sido julgado em corte marcial e condenado à morte.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny viria a receber novamente a Cruz de São Jorge de 4ª Classe, durante a Batalha de Van. Ele recebeu a Cruz de São Jorge de 
                  3ª Classe ao lutar contra os turcos perto de Mendelij, no caminho para Bagdá. Depois, recebeu a Cruz de São Jorge de 2ª Classe por 
                  operar atrás das linhas turcas por 22 dias. Por fim, foi condecorado com a Cruz de São Jorge de 1ª Classe por capturar um 
                  sargento-major e seis soldados inimigos.
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">A Cavalaria Vermelha</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Após a Revolução de Fevereiro derrubar o regime czarista em 1917, Budyonny foi eleito presidente do comitê do esquadrão e membro 
                  do comitê do regimento. Quando a Divisão de Cavalaria do Cáucaso foi transferida para Minsk, ele foi eleito presidente do comitê 
                  do regimento e vice-presidente do comitê da divisão.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Ao retornar para Platovskaya, Budyonny foi eleito vice-presidente do Soviete de Deputados de Trabalhadores, Camponeses, Cossacos 
                  e Soldados da Stanitsa em 12 de janeiro de 1918. Em 18 de fevereiro, foi eleito membro do Presidium do Distrito de Salsk e chefe 
                  do Departamento de Terras do Distrito. Na noite de 23 de fevereiro, Budyonny organizou uma força de 24 homens para retomar 
                  Platovskaya das forças da Guarda Branca, mas logo foi acompanhado por um grande número de novos recrutas. Pela manhã, eles 
                  haviam libertado 400 habitantes e matado 350 soldados russos brancos. Sua força agora consistia em 520 homens, dos quais, 
                  em 27 de fevereiro, ele formou o que mais tarde seria reconhecido como o primeiro esquadrão de cavalaria vermelha, com 120 
                  homens. Eventualmente, ele foi eleito comandante de batalhão.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny conheceu Stalin e Voroshilov em julho de 1918. Ambos apoiavam a ideia de criar um corpo de cavalaria para lutar ao lado 
                  dos bolcheviques na Guerra Civil Russa. No entanto, quando Leon Trotsky, o Comissário do Povo para a Guerra, visitou o sul da 
                  Rússia logo depois, disse a Budyonny que a cavalaria era "uma força muito aristocrática, comandada por príncipes, barões e 
                  condes."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Apesar das objeções de Trotsky, o 1º Regimento Socialista de Cavalaria foi formado em Tsaritsyn, em outubro de 1918, comandado 
                  por Boris Dumenko, com Budyonny como vice-comandante. Budyonny ingressou no Partido Comunista da União Soviética (PCUS) em 1919. 
                  Durante o verão de 1919, enquanto a Cavalaria Vermelha enfrentava o General Branco Anton Denikin, Trotsky descreveu a unidade 
                  com desprezo, chamando-a de "o corpo de Budyonny — uma horda, e Budyonny — seu líder ataman... Ele é o Stenka Razin dos dias de 
                  hoje, e para onde ele levar sua gangue, eles irão: hoje pelos Vermelhos, amanhã pelos Brancos."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  No entanto, em outubro de 1919, Budyonny conseguiu uma vitória espetacular ao atacar e derrotar o corpo do Exército Branco 
                  comandado por Konstantin Mamontov, na maior batalha de cavalaria da guerra civil. Em 25 de outubro, Trotsky enviou um despacho 
                  prevendo que o Exército Branco no sul nunca se recuperaria dessa derrota e elogiando Budyonny como "um verdadeiro guerreiro da 
                  classe trabalhadora".
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Guerra Polaco-Soviética</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Quando a Polônia declarou independência, não havia um acordo entre seu governo e as autoridades soviéticas sobre onde a fronteira 
                  deveria ser estabelecida. Em abril de 1920, a cavalaria de Budyonny foi encarregada de expulsar o exército polonês da Ucrânia. 
                  Em 5 de junho, ele participou da reconquista de Kiev e, nos dias seguintes, conseguiu empurrar os poloneses para o oeste.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  No início da guerra contra a Polônia, Budyonny foi designado para a frente sul, comandada por Stalin. Em 15 de agosto, ele 
                  solicitou ao comandante-em-chefe das forças soviéticas na Polônia, Mikhail Tukhachevsky, autorização para avançar ao norte e 
                  ajudar na captura de Varsóvia. Com o aval de Stalin, ele tentou primeiro capturar Lviv. Sem sucesso, acabou desviando suas 
                  forças para o norte, mas, nesse momento, as tropas de Tukhachevsky já haviam sido rechaçadas, forçando uma retirada geral.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Após a derrota do exército de Budyonny na Batalha de Komarów (uma das maiores batalhas de cavalaria da história), ele foi 
                  obrigado a recuar para território controlado pelos soviéticos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny também participou da reconquista da Crimeia, a fase final da Guerra Civil Russa.
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Reputação</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Apesar da derrota na Polônia, Budyonny foi um dos heróis militares da Rússia Soviética ao final da Guerra Civil. Com Semyon |
                  Timoshenko e Kliment Voroshilov, ele foi um dos líderes do grupo do Exército de Cavalaria e um apoiador de Stalin.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em 1920, o compositor soviético Dmitry Pokrass escreveu a canção "Marcha de Budyonny", que foi uma das primeiras músicas a se 
                  tornar amplamente popular em toda a União Soviética.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  O escritor Isaac Babel cavalgou com a cavalaria de Budyonny na Polônia e publicou uma série de contos sobre essa experiência, que 
                  alcançou aclamação mundial como uma das maiores contribuições à literatura soviética – mas que ofendeu Budyonny, que fez uma 
                  "rara e furiosa incursão na imprensa" em março de 1924, exigindo que a reputação da Cavalaria Vermelha fosse protegida contra 
                  "calúnias" por um "degenerado literário". Isso provocou uma resposta de Maxim Gorky, então o escritor russo mais famoso, 
                  defendendo Babel, mas em 1928, Budyonny voltou ao ataque com uma carta aberta a Gorky acusando Babel de "calúnia grosseira, 
                  deliberada e arrogante", o que Gorky chamou de um "insulto imerecido".
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  William Reswick, correspondente da agência americana AP, descreveu uma celebração nos bastidores de uma casa de ópera, por volta 
                  do 10º aniversário da revolução, onde:
                </p>
                <blockquote className="text-lg text-gray-700 leading-relaxed mt-4 italic">
                  "Budyonny, o célebre cavaleiro, um dançarino amador e admirador do balé, se juntou a nós. Ele estava de bom humor. Após se servir 
                  de um pouco de vodka, ele se ofereceu para dançar melhor do que qualquer profissional na Kamarinskaya. A bailarina Abramova 
                  aceitou o desafio. Então, Budyonny chamou um harmonicista e entrou em um giro, dançando uma capoeira cossaca com a facilidade e 
                  graça de um jovem."
                </blockquote>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Carreira Militar Posterior</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  De 1921 a 1923, Budyonny foi vice-comandante do Distrito Militar do Cáucaso do Norte. Em 1923, Budyonny chegou à Chechênia com uma 
                  proclamação do Comitê Executivo Central anunciando a formação da Região Autônoma Chechena.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  No mesmo ano, ele também foi nomeado assistente do comandante da cavalaria do Exército Vermelho. Durante 1924–37, ele foi 
                  Inspetor de Cavalaria do Exército Vermelho. Ele dedicou muito tempo e esforço à organização e gestão de instalações equestres, 
                  além de desenvolver novas raças de cavalos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny foi considerado um oficial de cavalaria corajoso e colorido, mas demonstrou desdém pelos instrumentos da guerra moderna, 
                  particularmente os tanques, que ele, junto com Grigory Kulik, considerava "incapazes de substituir a cavalaria".
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Isso o colocou em conflito direto com Tukhachevsky, que estava encarregado do desenvolvimento de armas e previu a iminência da 
                  guerra mecanizada. Mesmo após a prisão de Tukhachevsky, o Exército Vermelho nunca deixou de desenvolver grandes corporações 
                  mecanizadas, e cada frente tinha diversos desses corpos como uma força de segunda linha em 1940–41, mas Budyonny nunca foi 
                  criticado por estar do lado errado da discussão, sendo um aliado fiel de Stalin e Voroshilov.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny se formou na Academia Militar M. V. Frunze em 1932. Em 1934, foi feito membro candidato do Comitê Central do Partido 
                  Comunista da União Soviética.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em 1935, Budyonny foi feito um dos primeiros cinco Marechais da União Soviética. Três desses cinco foram executados durante a 
                  Grande Purga do final dos anos 1930, restando apenas Budyonny e Voroshilov.
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Papel na Grande Purga</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  No início da Grande Purga, Budyonny foi nomeado comandante do Distrito Militar de Moscou, possivelmente porque Stalin estava 
                  nervoso com a possibilidade de um golpe militar após decidir agir contra dois dos bolcheviques mais populares, Nikolai Bukharin 
                  e Alexei Rykov. Quando Bukharin tentava se defender, durante um plenário do Comitê Central do Partido Comunista da União 
                  Soviética, em 26 de fevereiro de 1937, Budyonny o interrompeu, chamando-o de jesuíta.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em 24 de maio de 1937, Budyonny foi copiado em uma resolução propondo a prisão do Marechal Tukhachevsky e do alto oficial 
                  partidário Janis Rudzutaks. Ele escreveu na resolução: "É necessário acabar com essa escória."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em 11 de junho, Budyonny foi um dos juízes no julgamento de Tukhachevsky e outros sete comandantes do Exército Vermelho, cuja 
                  execução deu início a uma purga em massa do corpo oficial do Exército Vermelho. No julgamento, ele testemunhou que os esforços 
                  de Tukhachevsky para criar um corpo mecanizado de tanques eram tão inferiores à cavalaria a cavalo e tão ilógicos que se 
                  tratavam de um "sabotagem deliberada".
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Meio século após o julgamento, as autoridades soviéticas admitiram que todos os oito réus eram inocentes. As "provas" 
                  consistiam em confissões forçadas sob tortura. Duas semanas após suas execuções, Budyonny enviou um memorando a Voroshilov 
                  revelando que Tukhachevsky inicialmente retirou sua confissão, mas Budyonny concluiu que todos os oito eram "espiões 
                  patenteados... desde 1931, e alguns deles até antes estavam se infiltrando em nossas fileiras desde o início da revolução".
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Mais tarde, conforme a Grande Purga continuava, o NKVD foi interrogar e prender Budyonny; a resposta de Budyonny foi se armar 
                  com seu revólver Nagant M1895 e ligar para Stalin para exigir que os agentes fossem removidos. Stalin atendeu à solicitação e o 
                  evento nunca mais foi discutido.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em dezembro de 1937, Budyonny foi alocado em uma grande dacha com pomares, arbustos de framboesas e groselhas, um cavalo de 
                  trabalho, uma vaca preta e um porco de 250 quilos.
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Serviço na Segunda Guerra Mundial</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  De julho a setembro de 1941, Budyonny foi Comandante-em-Chefe (главком, glavkom) das forças armadas soviéticas na Direção 
                  Sudoeste (Frentes Sudoeste e Sul) durante a invasão alemã da Ucrânia. Esta invasão começou como parte da Operação Barbarossa 
                  da Alemanha, que foi lançada em 22 de junho. Ele também foi um dos membros originais da Stavka do Supremo Comando Supremo, o 
                  mais alto órgão de comando militar soviético durante a Grande Guerra Patriótica, desde o início da guerra até 17 de fevereiro 
                  de 1945.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Operando sob ordens rigorosas de Stalin (que tentou micromanejar a guerra nos estágios iniciais) para não recuar sob nenhuma 
                  circunstância, as forças de Budyonny acabaram cercadas durante a Batalha de Uman e a Batalha de Kiev pelas forças nazistas. Os 
                  desastres que seguiram o cerco custaram à União Soviética 1,5 milhão de homens mortos ou feitos prisioneiros. Este foi o maior 
                  cerco da história militar.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em 13 de setembro de 1941, Stalin demitiu Budyonny como bode expiatório, substituindo-o por Semyon Timoshenko. Ele nunca mais 
                  foi autorizado a comandar tropas em combate novamente. Primeiramente, foi colocado no comando do Front de Reserva 
                  (setembro–outubro de 1941), depois feito Comandante-em-Chefe das tropas na Direção do Cáucaso do Norte (abril–maio de 1942), 
                  Comandante da Frente do Cáucaso do Norte (maio–agosto de 1942) – mas foi removido desse cargo à medida que os alemães se 
                  aproximavam, sendo nomeado Inspetor de Cavalaria do Exército Vermelho (a partir de 1943), além de diversos cargos honoríficos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Apesar de sua bravura como comandante de cavalaria, a visão de seus companheiros oficiais era de que Budyonny era inepto para 
                  comandar um exército em uma guerra mecanizada. Logo após a guerra, o Marechal Konev disse ao comunista iugoslavo Milovan Đilas: 
                  "Budyonny nunca soube muito e nunca estudou nada. Ele se mostrou completamente incompetente e permitiu que erros terríveis fossem 
                  cometidos."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  O Marechal de Campo alemão Rundstedt, comandante do Grupo de Exércitos Sul nas batalhas de Kiev e Uman, disse após a guerra: 
                  "De Budyonny, que comandava os exércitos que enfrentavam-me, um oficial russo capturado observou corretamente — 'Ele é um homem 
                  com um bigode muito grande, mas um cérebro muito pequeno.'"
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Devido ao seu excepcional histórico na Guerra Civil e à sua popularidade pública, ele continuou a desfrutar do patrocínio de 
                  Stalin e não sofreu punições reais pelo desastre em Kiev.
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Carreira Pós-Guerra</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Após a guerra, Budyonny foi nomeado vice-ministro da Agricultura da URSS, sendo responsável, entre outras coisas, pela criação de 
                  cavalos. Quando se aposentou, manteve sua adesão ao Soviete Supremo da União Soviética.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny faleceu devido a uma hemorragia cerebral em 26 de outubro de 1973, aos 90 anos. Ele foi enterrado com honras militares 
                  no Necrópole da Muralha do Kremlin, em um dos doze túmulos individuais localizados entre o Mausoléu de Lenin e a muralha do 
                  Kremlin. Os porta-bandeiras em seu funeral incluíram o Secretário Geral do PCUS, Leonid Brezhnev, e o Ministro da Defesa da 
                  URSS, Marechal Grechko.
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Outras Contribuições e Legado</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny escreveu uma autobiografia em cinco volumes, na qual descreveu os anos turbulentos da guerra civil, assim como a vida 
                  cotidiana do Primeiro Exército de Cavalaria. Ele foi frequentemente homenageado por sua bravura em muitas músicas militares 
                  populares soviéticas, incluindo a canção "A Cavalaria Vermelha" (Konarmieyskaya) e "A Marcha de Budyonny". A Budenovka, uma 
                  parte do uniforme militar soviético, é nomeada em homenagem a Semyon Budyonny. Ele também foi frequentemente mencionado nas 
                  obras voltadas à cavalaria de Isaac Babel.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Babel havia começado a cobrir Budyonny como jornalista para um jornal soviético durante a Guerra Polaco-Soviética.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Budyonny, que era um renomado criador de cavalos, também criou uma nova raça de cavalo que ainda é mantida em grande número na 
                  Rússia: o cavalo Budyonny, famoso por seu alto desempenho em esportes e resistência.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Semyon Budyonny também era um tocador amador de bayan; alguns discos de vinil instrumentais foram lançados na URSS apresentando 
                  um duo com seu amigo, o bayanista cosaco Grigory Zaytsev, intitulado como "Duo de Bayanistas" (Дуэт баянистов).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  A Academia Militar do Corpo de Sinalização de São Petersburgo leva o nome de honra de S. M. Budyonny.
                </p>
              </section>

              <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800">Vida Pessoal</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  A primeira esposa de Budyonny foi uma cosaca analfabeta, cujo nome e patronímico eram Nadezhda Ivanovna. Eles se casaram em 1903, 
                  logo antes de ele ingressar no exército. Ele não a viu por sete anos. Após a Revolução Bolchevique, ela viajou com a Cavalaria 
                  Vermelha, organizando suprimentos de comida e médicos. De 1920 a 1923, o casal viveu com os Voroshilov em Yekaterinoslav. Eles 
                  se mudaram para Moscou em 1923.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em 1924, Nadezhda Ivanovna foi morta por um tiro. Sua morte gerou várias histórias. Mikhail Soloviev, um oficial do exército 
                  soviético que se estabeleceu no Ocidente após ser capturado no início da Guerra Germano-Soviética, alegou que Budyonny matou 
                  sua esposa depois que ela o confrontou sobre sua infidelidade. Budyonny disse à filha de um casamento subsequente que ela 
                  havia se suicidado, possivelmente sem querer, quando o casamento deles estava falhando.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em 1925, ele se casou com a cantora Olga Stefanovna Mikhailova, que tinha cerca de metade da sua idade, filha de um trabalhador 
                  ferroviário de Kursk. Após o casamento, ela ingressou no Conservatório de Moscou, se formando em 1930, e depois se juntou ao 
                  Teatro Bolshoi. De acordo com o comunista croata Ante Ciliga, membros da Juventude Comunista (Komsomol) ficaram tão chocados ao 
                  vê-lo com sua nova esposa em um banquete público, beijando suas mãos, que ameaçaram criar um escândalo que as autoridades do 
                  partido "tiveram que usar mão pesada para sufocar". Budyonny se divorciou dela antes de setembro de 1937.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Em seguida, Budyonny se casou com a prima de Olga, Maria Vasilevna, uma estudante 33 anos mais jovem que ele, que cozinhava para 
                  ele após a prisão de Olga. Esse casamento durou até a sua morte. Eles tiveram dois filhos, Sergei, nascido em 1938, e Mikhail, 
                  nascido em 1944, e uma filha, Nina, nascida em 1939.
                </p>
              </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

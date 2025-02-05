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

export default function FrunzePage() {
  const [general, setGeneral] = useState<General | null>(null); // Tipando o estado
  const router = useRouter();

  useEffect(() => {
    // Verificar se 'generals' existe e é um array
    if (!Array.isArray(generals)) {
      console.error('Dados de generais não encontrados ou mal formatados');
      return;
    }

    // Buscar o general Mikhail Frunze na lista de generais usando o slug
    const frunze = generals.find((general) => general.slug === 'frunze');

    if (frunze) {
      setGeneral(frunze);
    } else {
      console.error('General Mikhail Frunze não encontrado.');
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
              <div className="flex-shrink-0 mb-6">
                <img
                  src="/images/frunze-history.jpg"
                  alt={`Imagem de ${general.name}`}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </section>

            {/* Seção de Biografia Traduzida */}
            <section className="mt-8 max-w-4xl text-justify">
              <p className="text-lg text-gray-700 text-justify mb-4">
                Mikhail Vasilyevich Frunze (Russo: Михаил Васильевич Фрунзе; Romeno: Mihail Frunză; 2 de fevereiro de 1885 – 31 de outubro de 1925) foi um revolucionário soviético, 
                político, oficial do exército e teórico militar.
              </p>
              <p className="text-lg text-gray-700 text-justify mb-4">
                Nascido de pai bessarábio e mãe russa no Turquestão Russo, Frunze frequentou a Universidade Politécnica de São Petersburgo e tornou-se membro ativo do Partido 
                Operário Social-Democrata Russo (POSDR). Após a divisão ideológica do POSDR, ele ficou ao lado da facção bolchevique de Vladimir Lenin. Ele liderou a greve dos 
                trabalhadores têxteis em Ivanovo durante a Revolução Russa de 1905, pela qual foi posteriormente condenado à morte, mas a pena foi comutada para trabalhos forçados 
                na Sibéria por toda a vida. Ele escapou dez anos depois e participou ativamente da Revolução de Fevereiro de 1917 em Minsk e da Revolução de Outubro em Moscou. 
                Frunze destacou-se como um dos comandantes mais bem-sucedidos do Exército Vermelho durante a Guerra Civil Russa, alcançando grandes vitórias sobre o Exército 
                Branco de Pyotr Wrangel na Crimeia e o movimento anarquista de Nestor Makhno na Ucrânia. Em 1921, Frunze foi eleito para o Comitê Central do Partido Comunista. 
                Em 1925, foi nomeado presidente do Conselho Militar Revolucionário.
              </p>
              <p className="text-lg text-gray-700 text-justify mb-4">
                Frunze morreu em 1925 por envenenamento com clorofórmio durante uma cirurgia para uma úlcera crônica. Alega-se que Frunze foi assassinado por Joseph Stalin, que 
                teria organizado a cirurgia. Ele foi enterrado na Necrópole da Muralha do Kremlin. A capital da SSR do Quirguistão e sua cidade natal, Pishpek 
                (atualmente Bishkek), foi renomeada em sua homenagem de 1926 até 1991. A Academia Militar Frunze, uma das instituições educacionais militares mais prestigiadas 
                da União Soviética, também recebeu seu nome.
              </p>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Vida e Atividade Política</h2>

            <p className="text-lg text-gray-700 text-justify mb-4">
                Frunze nasceu em 1885 em Pishpek (atualmente Bishkek, no Quirguistão), que na época era uma pequena cidade de guarnição imperial russa na parte quirguiz do Turkestão Russo 
                (Oblast de Semirechye). Seu pai era um paramédico romeno bessarábio (feldsher) (originalmente da província de Kherson) e sua mãe era russa.
            </p>

            <p className="text-lg text-gray-700 text-justify mb-4">
                Frunze iniciou seus estudos superiores em Verniy (atualmente Almaty) e, em 1904, frequentou a Universidade Politécnica de São Petersburgo. Frunze se envolveu ativamente no 
                Partido Social-Democrata Operário Russo (RSDLP). No Segundo Congresso do RSDLP em Londres (1903), Vladimir Lenin e Julius Martov, os dois principais líderes, se confrontaram 
                em uma divisão ideológica sobre as táticas do partido. Frunze, aos 18 anos, ficou do lado da maioria de Lenin, os chamados bolcheviques ("majoritários"), em oposição à minoria de 
                Martov, os mencheviques ("minoritários").
            </p>

            <p className="text-lg text-gray-700 text-justify mb-4">
                Dois anos após o Segundo Congresso, Frunze tornou-se um importante líder na Revolução de 1905. Ele liderou trabalhadores têxteis em greve em Shuya e Ivanovo. Após o fim do movimento, 
                Frunze foi preso em 1907 e condenado à morte; ele foi preso e passou vários meses no corredor da morte aguardando sua execução. Sua sentença foi comutada para prisão perpétua com trabalhos forçados. 
                Após 10 anos em prisões siberianas, Frunze escapou para Chita. Lá, ele se tornou editor do jornal semanal bolchevique <i>Vostochnoe Obozrenie</i> (Revisão Oriental).
            </p>

            <p className="text-lg text-gray-700 text-justify mb-4">
                Durante a Revolução de Fevereiro de 1917, Frunze chefiou a milícia civil de Minsk antes de ser eleito presidente do Soviet da Bielorrússia. Ele posteriormente foi a Moscou e liderou uma força armada 
                de trabalhadores para ajudar na luta pelo controle da cidade.
            </p>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Guerra Civil Russa</h2>

                <p className="text-lg text-gray-700 mb-4">
                    Após a Revolução de Outubro de 1917, Frunze foi nomeado, em 1918, Comissário Militar para a Província de Ivanovo-Voznesensk. Durante a Guerra Civil Russa de 1917–1922, 
                    ele foi nomeado chefe do Grupo de Exércitos do Sul do Exército Vermelho, Frente Oriental (março de 1919). Após as tropas de Frunze derrotarem o almirante Alexander Kolchak 
                    e o Exército Branco em Omsk, Leon Trotsky (o chefe do Exército Vermelho) deu a ele o comando geral da Frente Oriental (19 de julho de 1919).
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    Frunze expulsou os insurgentes Basmachi e as tropas do Exército Branco de seu Turquestão natal. Ele capturou Khiva em fevereiro e Bukhara em setembro de 1920.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    Em novembro de 1920, o exército de Frunze tomou a Crimeia e conseguiu expulsar o general branco Pyotr Wrangel e suas tropas da Rússia. Como comandante da frente sul, Frunze também liderou 
                    a destruição do movimento anarquista de Nestor Makhno na Ucrânia e o movimento nacionalista de Symon Petliura.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    Em dezembro de 1921, Frunze visitou Ancara, durante a Guerra de Independência Turca, como embaixador da SSR da Ucrânia, e estabeleceu relações turco-soviéticas. Mustafa Kemal Atatürk 
                    o valorizou como aliado e amigo, a ponto de colocar uma estátua de Frunze como parte do Monumento da República na Praça Taksim, em Istambul.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    Em 1921, Frunze foi eleito para o Comitê Central do Partido Bolchevique Russo. Em 2 de junho de 1924, tornou-se membro candidato do Politburo e, em janeiro de 1925, tornou-se o 
                    Presidente do Conselho Militar Revolucionário.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    O apoio de Frunze a Grigory Zinoviev foi o suficiente para atrair a atenção indesejada de Joseph Stalin, um dos principais oponentes de Zinoviev. Eles já haviam se dado bem, 
                    pois Stalin demonstrava respeito por seu companheiro revolucionário da "velha guarda" e ex-prisioneiro.
                </p>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Morte</h2>

            <p className="text-lg text-gray-700 mb-4">
                Frunze foi destacado entre os líderes comunistas por possuir uma visão criativa e quase heterodoxa sobre questões de implementação e política. Ele conquistou o respeito e a admiração 
                de seus camaradas graças ao seu sucesso na perseguição de objetivos militares complicados e sua resistência durante o período em que o Partido Comunista era ilegal. Ele foi considerado 
                um possível sucessor de Lenin, devido à sua força em questões teóricas e práticas de avanço da agenda do Partido Comunista, e sua aparente falta de ambição pessoal separada do partido.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Frunze sofria de uma úlcera crônica. Embora os médicos recomendassem cirurgia, ele favorecia tratamentos mais conservadores. Após um episódio especialmente severo em 1925, Frunze foi 
                hospitalizado. Stalin e Anastas Mikoyan foram visitá-lo e insistiram na necessidade de uma operação.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Pouco antes de sua morte, Frunze escreveu para sua esposa: "No momento, estou me sentindo absolutamente saudável, e parece ridículo até pensar em, e ainda mais, fazer uma operação. No entanto, 
                ambos os representantes do partido estão exigindo isso."
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Frunze morreu durante a cirurgia em 31 de outubro de 1925. Dada a política interna, surgiram rumores de que Stalin havia ordenado secretamente sua morte. O Dr. Ochkin administrou uma overdose 
                múltipla de éter e clorofórmio a Frunze, aparentemente por ordem de Stalin. Vários historiadores atribuíram sua morte ao envenenamento por clorofórmio, sendo que a cirurgia havia sido organizada por 
                Joseph Stalin.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                O historiador Roman Brackman argumentou que Frunze havia se recusado a apoiar Stalin em seu conflito com a oposição política. Brackman também observou que Stalin estava encarregado de supervisionar 
                o cuidado médico dos altos oficiais soviéticos e ignorou os avisos do médico de Frunze de que a administração de clorofórmio seria fatal para Frunze.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Da mesma forma, o historiador trotskista Vadim Rogovin escreveu que Stalin ordenou a consulta de médicos especialmente escolhidos, que recomendaram a intervenção cirúrgica. Rogovin explicou 
                que essa decisão foi tomada apesar do fato de que médicos anteriores haviam se recusado a recomendar uma operação, pois Frunze poderia não ter condições de suportar o clorofórmio devido ao seu 
                coração fraco. Rogovin também citou as memórias de Anna Larina, que referenciavam o depoimento da mãe de Frunze, que acreditava que Stalin removeu Frunze porque ele "reconheceu a autoridade de Trotsky 
                até muito recentemente e o tratava com grande respeito."
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Boris Bazhanov, secretário de Stalin, sugeriu que Stalin envenenou Frunze e "teve um número infinito de maneiras de envenenar Trotsky", antes de prosseguir para enterrá-lo na Praça Vermelha "com 
                pompa e discursos cerimoniosos".
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Um artigo de 26 de outubro de 2010, publicado no Izvestiya, relatou que a Frunze foi administrada uma dose de clorofórmio que superou a dose normal em sete vezes.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Frunze foi enterrado na Necrópole da Muralha do Kremlin. Hoje, seu túmulo é um dos doze túmulos individuais localizados entre o Mausoléu de Lenin e a parede do Kremlin.
            </p>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Legado</h2>

            <p className="text-lg text-gray-700 mb-4">
                Em 1926, a capital de Bishkek, no Quirguistão, foi renomeada para Frunze em sua homenagem. O nome foi revertido para o original em 1991, após a dissolução da União Soviética. Frunze 
                ainda é comemorado na cidade: sua estátua equestre fica em frente à estação principal de trem. Uma rua e um museu no centro da cidade levam seu nome. Além disso, o museu contém sua casa 
                de infância, uma pequena casa instalada dentro de uma estrutura moderna maior. O código IATA do Aeroporto Internacional Manas, em Bishkek, é FRU, as iniciais de Frunze.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Shuya, no Oblast de Ivanovo, abriga outro museu memorial dedicado a Frunze.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Várias aldeias na Rússia foram nomeadas em sua homenagem. Ruas em muitas cidades russas também levam seu nome.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                A Academia Militar Frunze, em Moscou, uma das mais respeitadas da antiga União Soviética, foi nomeada em sua homenagem.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                A 2ª Divisão de Fuzileiros Soviética foi anteriormente conhecida como a 2ª Divisão de Fuzileiros Vermelha Bielorrussa, em nome de M.V. Frunze.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Existem estações nomeadas Frunzenskaya em sua honra no metrô de Moscou, no metrô de São Petersburgo e no metrô de Minsk, e uma escultura de sua imagem está localizada em uma das extremidades 
                da estação.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                O distrito de Nemyshlyanskyi em Kharkiv, Ucrânia, era anteriormente denominado Distrito Frunzensky. Em 2016, foi renomeado para seu nome atual, para cumprir as leis de descomunização.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Após sua morte, o nome Frunzik (algo como "Pequeno Frunze") se tornou bastante popular no Cáucaso e no Turquestão Soviético. O mais notável desses foi provavelmente Frunzik Mkrtchyan.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                O navio de guerra russo Poltava foi renomeado para Frunze em sua homenagem em janeiro de 1926, assim como o segundo cruzador nuclear da classe Kirov (atualmente o "Admiral Lazarev") em 1981. 
                O submarino da classe Leninets L-3, lançado em 1931, recebeu o nome de Frunzenets ("Frunzeista", seguidor de Frunze) em sua homenagem.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                O General Frunze também é homenageado com um lugar logo atrás de Atatürk, no Monumento da República, localizado no coração da Praça Taksim, em Istambul, na Turquia.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Frunze é lembrado por alguns por sua doutrina militar. Um autor até o coloca ao lado de Clausewitz.
            </p>
            </section>


          </div>
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

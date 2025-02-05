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

export default function ChapayevPage() {
  const [general, setGeneral] = useState<General | null>(null); // Tipando o estado
  const router = useRouter();

  useEffect(() => {
    // Verificar se 'generals' existe e é um array
    if (!Array.isArray(generals)) {
      console.error('Dados de generais não encontrados ou mal formatados');
      return;
    }

    // Buscar o general Vasily Chapayev na lista de generais usando o slug
    const chapayev = generals.find((general) => general.slug === 'chapayev');

    if (chapayev) {
      setGeneral(chapayev);
    } else {
      console.error('General Vasily Chapayev não encontrado.');
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
                Vasily Ivanovich Chapayev (Russo: Василий Иванович Чапаев; 9 de fevereiro [28 de janeiro no calendário juliano] de 1887 – 5 de setembro de 1919) foi 
                um soldado russo e comandante do Exército Vermelho durante a Guerra Civil Russa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Chapayev nasceu em uma família camponesa pobre na vila de Budayka, atualmente parte de Cheboksary. Durante a Primeira Guerra Mundial, lutou como 
                sargento e foi condecorado três vezes com a Cruz de São Jorge. Em setembro de 1917, juntou-se ao Partido Trabalhista Social-Democrata Russo 
                (Bolcheviques). Em dezembro, foi eleito comandante do 138º Regimento de Infantaria pelos soldados do regimento. Posteriormente, comandou a 2ª 
                Divisão Nikolaev e a 25ª Divisão de Fuzileiros.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em 5 de setembro de 1919, o quartel-general divisionário perto de Lbishchensk (renomeado Chapayev em sua homenagem) foi emboscado pelas forças do 
                Exército Branco. As circunstâncias da morte de Chapayev são incertas e seu corpo nunca foi recuperado. A versão canônica, popularizada pelo filme 
                "Chapayev" de 1934, afirma que ele se afogou ao tentar cruzar o rio Ural. Outras versões, incluindo conspirações envolvendo Leon Trotsky, não 
                receberam evidências documentais.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em 1908, Chapayev conheceu Pelageya Metelina, com quem se casou, apesar da desaprovação de seu pai. Eles viveram juntos por seis anos e tiveram 
                três filhos. Em 1917, Chapayev começou a viver com a viúva de um colega soldado falecido, também chamada Pelageya, adotando os filhos dela. 
                Atualmente, sua tataraneta Vasilisa Chapayeva é a única descendente viva conhecida.
              </p>
            </section>

            <section className="mt-12 max-w-4xl text-justify">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Legado</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Museus memoriais de Chapaev foram abertos em Cheboksary, perto do local de seu nascimento; na cidade de Pugachev (antiga Nikolaevsk), com uma 
                filial na cidade de Balakovo, onde passou sua infância e juventude. Museus também foram abertos nos edifícios onde estavam localizados os 
                quartéis-generais da 25ª Divisão de Infantaria durante a Guerra Civil: na vila de Krasny Yar no distrito de Ufimsky da República do 
                Bashkortostan, na cidade de Belebey da República do Bashkortostan, na cidade de Uralsk e na vila de Lbischenskaya (agora a cidade de Chapaev) no 
                local da última batalha do chefe da divisão. Nos anos soviéticos, museus dedicados a Chapaev e ao caminho de combate da 25ª divisão existiam em 
                muitas escolas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Dezenas de assentamentos nas regiões de Samara (Chapayevsk), Saratov, Orenburg e outras regiões da Rússia foram nomeados em homenagem a Chapaev, 
                Lbishensk no Cazaquistão moderno também foi renomeado em sua honra durante a era soviética, ruas Chapaev existem em centenas de assentamentos no 
                território da antiga URSS, o rio Chapaevka foi nomeado em sua homenagem. Em 1937, o cinema Kiev "Lira" na Rua Bolshaya Zhitomirskaya, 40 foi 
                renomeado para "cinema Chapaev".
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Monumentos a Chapaev foram erguidos nas cidades de Samara (1932), em São Petersburgo (1933), em Pugachev (1957), em Cheboksary (1960) 
                (anteriormente desde a década de 1930 estava localizado no território da VDNKh em Moscou), na vila de Chapaev - uma estela no local da morte 
                presumida e um monumento na praça central (1979), em Uralsk (1982), bem como em dezenas de outras cidades e vilarejos da antiga União Soviética. 
                Em 1973, para o museu em Uralsk, Efim Deshalyt pintou a diorama "A Última Batalha de Chapaev", em 1976 para o museu em Chapaev - a diorama "Luta 
                dos Chapaevs na vila de Lbischenskaya" pelos artistas Veniamin Sibirsky e Evgeny Danilevsky.
              </p>
            </section>

            <section className="mt-12 max-w-4xl text-justify">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Na Cultura Russa</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Após o estabelecimento da União Soviética, Chapaev foi imortalizado pela propaganda soviética como um herói da Guerra Civil Russa. Em 1923, o escritor 
                russo Dmitriy Furmanov, que serviu como comissário na divisão de Chapaev, escreveu um romance popular intitulado Chapaev. Mais tarde, em 1934, foi 
                transformado no filme Chapaev pelos irmãos Vasilyev. O filme tornou-se altamente popular na União Soviética. O ator e cantor alemão Ernst Busch 
                também gravou a canção Tschapajews Tod, que fala sobre sua morte nos Urais.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Mais recentemente, ele se tornou um dos personagens centrais no romance Chapaev e o Vazio do escritor russo moderno Viktor Pelevin.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em novembro de 1998, o jogo de aventura gráfica point-and-click Red Comrades Save the Galaxy foi desenvolvido pela S.K.I.F. e publicado pela Buka 
                Entertainment (atualmente 1C Company). O protagonista do jogo, Vasily Ivanovich Chapaev, é inspirado em Chapaev.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Chapaev, junto com seu assistente Petka, o comissário Furmanov e Anka, a metralhadora, tornou-se um personagem recorrente em piadas populares russas.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

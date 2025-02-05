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

export default function TrotskyPage() {
  const [general, setGeneral] = useState<General | null>(null); // Tipando o estado
  const router = useRouter();

  useEffect(() => {
    // Verificar se 'generals' existe e é um array
    if (!Array.isArray(generals)) {
      console.error('Dados de generais não encontrados ou mal formatados');
      return;
    }

    // Buscar o general Leon Trotsky na lista de generais usando o slug
    const trotsky = generals.find((general) => general.slug === 'trotsky');

    if (trotsky) {
      setGeneral(trotsky);
    } else {
      console.error('General Leon Trotsky não encontrado.');
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
            <div className="flex-shrink-0 mb-1">  {/* Alterei de mb-6 para mb-4 */}
                <Image
                src="/images/trotsky.jpg"
                alt={`Imagem de ${general.name}`}
                className="rounded-lg shadow-lg max-w-md"
                width={500}
                height={500}
                />
                <p className="text-center text-gray-600 mt-2">Trotsky em 1924</p>
            </div>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
            <p className="text-lg text-gray-700 leading-relaxed">
                Lev Davidovich Bronstein (7 de novembro [26 de outubro no calendário juliano] de 1879 – 21 de agosto de 1940), mais conhecido como Leon Trotsky, foi um 
                revolucionário russo, político soviético e teórico político. Ele foi uma figura central na Revolução de 1905, Revolução de Outubro de 1917, 
                Guerra Civil Russa e na fundação da União Soviética, da qual foi exilado em 1929 antes de ser assassinado em 1940. Trotsky e Vladimir Lenin foram 
                amplamente considerados as duas figuras soviéticas mais proeminentes de 1917 até a morte de Lenin em 1924. Ideologicamente um marxista e leninista, 
                as ideias de Trotsky inspiraram uma vertente do marxismo conhecida como trotskismo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Nascido em uma família judaica rica na Ucrânia, então parte do Império Russo, Trotsky se juntou ao Partido Social-Democrata Russo em 1898. Foi preso 
                por atividades revolucionárias e exilado na Sibéria, mas em 1902 escapou para Londres, onde conheceu Lenin e passou a escrever para o jornal do 
                partido Iskra. Trotsky inicialmente se alinhou com os mencheviques contra os bolcheviques de Lenin na cisão do partido de 1903, mas se declarou 
                não-facționalista em 1904. Durante a Revolução de 1905, Trotsky retornou à Rússia e foi eleito presidente do Soviet de São Petersburgo. Foi novamente 
                exilado na Sibéria, mas escapou em 1907 e viveu na Europa e nos Estados Unidos. Após a Revolução de Fevereiro de 1917, Trotsky retornou à Rússia e 
                se juntou aos bolcheviques. Como presidente do Soviet de Petrogrado, ajudou a liderar a Revolução de Outubro e, no primeiro governo de Lenin, foi 
                nomeado Comissário do Povo para os Negócios Estrangeiros e liderou as negociações para o Tratado de Brest-Litovsk, pelo qual a Rússia se retirou 
                da Primeira Guerra Mundial. Ele serviu como Comissário do Povo para os Assuntos Militares e Navais de 1918 a 1925, período em que construiu o 
                Exército Vermelho e o liderou até a vitória na guerra civil. Em 1922, Lenin formou uma aliança com Trotsky contra a burocracia soviética e 
                várias vezes propôs que ele se tornasse um dos seus vice-premiês, mas Trotsky recusou o cargo. A partir de 1923, Trotsky liderou a facção 
                Oposição de Esquerda do partido, que se opunha às concessões do mercado da Nova Política Econômica de Lenin.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Após a morte de Lenin em 1924, Trotsky emergiu como o crítico mais proeminente de Joseph Stalin, mas rapidamente foi superado por ele politicamente. 
                Trotsky foi expulso do Politburo em 1926 e do partido em 1927, exilado internamente para Alma-Ata em 1928 e deportado em 1929. Ele viveu na Turquia, 
                França e Noruega antes de se estabelecer no México em 1937. No exílio, Trotsky escreveu polêmicas contra o stalinismo, defendendo o internacionalismo 
                proletário contra a teoria de Stalin de socialismo em um só país. A teoria de Trotsky sobre a revolução permanente postulava que a revolução 
                socialista só poderia sobreviver se fosse espalhada para os países capitalistas avançados. Em A Revolução Traída (1936), Trotsky argumentou que 
                a União Soviética havia se tornado um "estado operário degenerado" e uma ditadura devido ao seu isolamento e, em 1938, fundou a Quarta Internacional 
                como uma alternativa ao Comintern liderado pela União Soviética. Após ser condenado à morte na primeira sessão de julgamento de Moscou em 1936, 
                Trotsky foi assassinado em 1940 em sua casa na Cidade do México por um agente stalinista, Ramón Mercader.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Apagado da história oficial soviética sob Stalin, Trotsky foi um dos poucos de seus rivais que nunca foi reabilitado politicamente pelos líderes 
                posteriores. No Ocidente, Trotsky se tornou um herói da esquerda antistalinista por sua defesa de uma forma de socialismo mais democrático e 
                internacionalista contra o totalitarismo stalinista, e por suas contribuições intelectuais ao marxismo. Embora algumas de suas ações durante a 
                guerra sejam controversas, como sua defesa ideológica do Terror Vermelho e a repressão violenta da rebelião de Kronstadt, os estudos classificam 
                a liderança de Trotsky no Exército Vermelho de maneira positiva entre as figuras históricas, e ele é creditado por seu grande envolvimento com o 
                desenvolvimento militar, econômico, cultural e político da União Soviética.
            </p>
            </section>


            {/* Seção de Vida e Atividade Política */}
            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Infância e Família (1879–1895)</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                Leon Trotsky nasceu Lev Davidovich Bronstein, filho de David Leontyevich Bronstein (1847–1922) e Anna Lvovna (nascida Zhivotovskaya, 1850–1910) em 7 
                de novembro de 1879, sendo o quinto filho de uma rica família judia em Yanovka, no governo de Kherson, Império Russo (atualmente Bereslavka, Ucrânia). 
                Seu pai, David Leontyevich, havia morado em Poltava e mais tarde se mudou para Bereslavka, que possuía uma grande comunidade judaica. A irmã mais 
                nova de Trotsky, Olga, que também se tornou bolchevique e política soviética, casou-se com o proeminente bolchevique Lev Kamenev.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Alguns autores, notavelmente Robert Service, afirmaram que o nome de infância de Trotsky era Yiddish Leiba. O trotskista americano David North 
                afirmou que isso foi uma suposição baseada no nascimento judeu de Trotsky, mas, ao contrário das afirmações de Service, não há evidências 
                documentais que comprovem que ele usava um nome yídiche, já que essa língua não era falada por sua família. Tanto North quanto o historiador 
                político Walter Laqueur escreveram que o nome de infância de Trotsky era Lyova, um diminutivo russo comum de Lev. North comparou a especulação 
                sobre o nome dado a Trotsky à ênfase desnecessária dada ao fato de ele ter um sobrenome judeu.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                A língua falada em casa não era o Yiddish, mas uma mistura de russo e ucraniano, conhecida como Surzhyk. Embora Trotsky falasse francês, inglês e 
                alemão com bom nível, ele disse em sua autobiografia "Minha Vida" que nunca foi fluente em nenhuma língua além do russo. Raymond Molinier 
                escreveu que Trotsky falava francês fluentemente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Quando Trotsky tinha oito anos, seu pai o enviou para Odessa para estudar. Ele foi matriculado em uma escola luterana de língua alemã 
                (Escola da Catedral Luterana de São Paulo, de Alemães do Mar Negro, que aceitava alunos de outras religiões e origens), que se tornou russificada 
                durante seus anos em Odessa devido à política imperial de russificação do governo. Trotsky e sua esposa Natalia mais tarde registraram seus filhos 
                como luteranos, já que a lei austríaca da época exigia que as crianças recebessem educação religiosa "na fé de seus pais". Odessa, na época, era 
                uma cidade portuária cosmopolita e agitada, muito diferente das típicas cidades russas da época. Esse ambiente contribuiu para o desenvolvimento 
                da visão internacionalista do jovem.
            </p>
            </section>


            {/* Seção de Morte */}
            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Atividades Políticas Iniciais e Vida (1896–1917)</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Atividade Revolucionária e Prisão (1896–1898)</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
                Trotsky se envolveu em atividades revolucionárias em 1896, após se mudar para a cidade portuária de Nikolayev, no Mar Negro. Inicialmente um 
                narodnik (socialista agrário populista revolucionário), ele se opôs ao marxismo, mas foi conquistado por sua futura primeira esposa, Aleksandra 
                Sokolovskaya. No mesmo ano, ele se formou no ensino secundário com honras de primeira classe. De acordo com seu parente, Valery Bronstein, seu pai 
                pretendia que Trotsky se tornasse engenheiro mecânico após concluir a escola moderna.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Trotsky frequentou brevemente a Universidade de Odessa, onde estudou engenharia e matemática. Ele abandonou os estudos no início de 1897 para ajudar 
                a organizar o Sindicato dos Trabalhadores do Sul da Rússia, em Nikolayev. Um colega de universidade, um engenheiro proeminente que servia como 
                Diretor Técnico do Estaleiro Báltico, observou que Trotsky demonstrava um talento excepcional para matemática. Usando o nome "Lvov", ele escreveu 
                e imprimiu panfletos e proclamações, distribuiu panfletos revolucionários e popularizou ideias socialistas entre os trabalhadores industriais e 
                estudantes revolucionários.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em janeiro de 1898, mais de 200 membros do sindicato, incluindo Trotsky, foram presos. Ele foi mantido na prisão pelos próximos dois anos aguardando 
                julgamento, primeiro em Nikolayev, depois em Kherson, Odessa e, finalmente, em Moscou. Na prisão de Moscou, entrou em contato com outros 
                revolucionários, soube de Lenin e leu o livro de Lenin, "O Desenvolvimento do Capitalismo na Rússia". Dois meses após sua prisão, de 1 a 3 de 
                março de 1898, foi realizado o primeiro Congresso do recém-formado Partido Social-Democrata Operário Russo (RSDLP). A partir de então, Trotsky 
                se identificou como membro do partido.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Primeiro Casamento e Exílio na Sibéria (1899–1902)</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
                Enquanto estava preso em Moscou, no verão de 1899, Trotsky casou-se com Aleksandra Sokolovskaya (1872–1938), uma marxista. A cerimônia foi realizada 
                por um capelão judeu. Em 1900, ele foi condenado a quatro anos de exílio na Sibéria. Devido ao casamento, Trotsky e sua esposa foram exilados para 
                o mesmo local na Sibéria: Ust-Kut e Verkholensk, na região do Lago Baikal. Eles tiveram duas filhas, Zinaida (1901–1933) e Nina (1902–1928), 
                nascidas na Sibéria.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Na Sibéria, Trotsky estudou filosofia. Ele se tornou consciente das diferenças dentro do partido, que havia sido dizimado por prisões em 1898 e 
                1899. Alguns social-democratas conhecidos na fraseologia leninista como "economistas" argumentavam que o partido deveria focar em ajudar os 
                trabalhadores industriais a melhorar suas condições e estavam menos preocupados em mudar o governo. Outros argumentavam que derrubar a monarquia 
                era mais importante e que um partido revolucionário bem organizado e disciplinado era essencial. A posição mais radical foi expressa pelo jornal 
                Iskra (A Faísca), fundado em 1900. Trotsky rapidamente se alinhou à posição do Iskra e começou a escrever para o jornal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                No verão de 1902, a pedido de sua esposa, Aleksandra, Trotsky escapou da Sibéria escondido em feno. Aleksandra mais tarde fugiu com suas filhas. 
                Ambas as filhas se casaram, e Zinaida teve filhos, mas as filhas morreram antes dos pais. Nina Nevelson morreu de tuberculose em 1928, sendo 
                cuidada em seus últimos meses pela irmã mais velha. Zinaida Volkova seguiu o pai no exílio em Berlim, levando seu filho do segundo casamento, 
                mas deixando uma filha na Rússia. Sofrendo também de tuberculose e depressão, Zinaida cometeu suicídio em 1933. Aleksandra desapareceu em 1935 
                durante as Grandes Purgações sob Stalin e foi assassinada pelas forças soviéticas três anos depois.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Primeira Emigração e Segundo Casamento (1902–1903)</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
                Até esse ponto, Trotsky usava seu nome de nascimento: Lev (Leon) Bronstein. Ele mudou seu sobrenome para "Trotsky", o nome que usaria pelo resto de 
                sua vida. Diz-se que ele adotou o nome de um carcereiro da prisão de Odessa, onde ele havia sido mantido anteriormente. Esse se tornou seu 
                pseudônimo revolucionário principal. Após a fuga da Sibéria, Trotsky se mudou para Londres, onde se juntou a Georgi Plekhanov, Vladimir Lenin, 
                Julius Martov e outros editores do Iskra. Sob o pseudônimo de Pero ("pena"), Trotsky logo se tornou um dos principais redatores do jornal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Sem o conhecimento de Trotsky, os seis editores do Iskra estavam divididos entre a "velha guarda", liderada por Plekhanov, e a "nova guarda", 
                liderada por Lenin e Martov. Os apoiadores de Plekhanov eram mais velhos e haviam passado os 20 anos anteriores no exílio na Europa. Membros da 
                nova guarda estavam na casa dos 30 anos e haviam emigrado recentemente da Rússia. Lenin, que tentava estabelecer uma maioria permanente contra 
                Plekhanov dentro do Iskra, esperava que Trotsky, então com 23 anos, se alinhasse com a nova guarda. Em março de 1903, Lenin escreveu:
            </p>
            <blockquote className="text-lg text-gray-700 leading-relaxed mt-4 italic">
                "Sugiro a todos os membros da diretoria que cooptam 'Pero' como membro da diretoria nas mesmas condições dos outros membros. [...] Precisamos 
                muito de um sétimo membro, tanto como uma conveniência para votar (seis sendo um número par) quanto como um acréscimo às nossas forças. 'Pero' 
                tem contribuído para cada edição por vários meses; ele trabalha, em geral, de forma mais enérgica para o Iskra; ele faz palestras 
                (nas quais teve muito sucesso). Na seção de artigos e notas sobre os eventos do dia, ele não será apenas muito útil, mas absolutamente 
                necessário. Sem dúvida, um homem de habilidades raras, tem convicção e energia, e ele irá muito mais longe."
            </blockquote>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Devido à oposição de Plekhanov, Trotsky não se tornou um membro pleno da diretoria, mas participou de suas reuniões como conselheiro, o que 
                lhe rendeu a inimizade de Plekhanov.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                No final de 1902, Trotsky conheceu Natalia Sedova (1882–1962), que logo se tornou sua companheira. Eles se casaram em 1903, e ela ficou ao lado 
                dele até sua morte. Juntos, tiveram dois filhos: Lev Sedov (1906–1938) e Sergei Sedov (1908–1937), ambos falecendo antes dos pais. Em relação 
                aos sobrenomes dos filhos, Trotsky explicou mais tarde que, após a revolução de 1917:
            </p>
            <blockquote className="text-lg text-gray-700 leading-relaxed mt-4 italic">
                "Para não obrigar meus filhos a mudar de nome, eu, para fins de 'cidadania', adotei o sobrenome de minha esposa."
            </blockquote>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Trotsky nunca usou o nome "Sedov", nem de forma privada nem pública. Natalia Sedova às vezes assinava seu nome como "Sedova-Trotskaya".
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Ruptura com Lenin (1903–1904)</h3>

            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Enquanto isso, após um período de repressão da polícia secreta e confusão interna que se seguiu ao Primeiro Congresso do Partido Social-Democrata 
                Trabalhista Russo em 1898, o Iskra conseguiu convocar o Segundo Congresso do partido em Londres, em agosto de 1903. Trotsky e outros editores do 
                Iskra participaram. O primeiro congresso ocorreu conforme o planejado, com os apoiadores do Iskra derrotando com facilidade os poucos delegados 
                "economistas". Em seguida, o congresso discutiu a posição do Bund judeu, que havia co-fundado o Partido Social-Democrata Trabalhista Russo (RSDLP) 
                em 1898, mas queria permanecer autônomo dentro do partido.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Pouco depois, os delegados pró-Iskra se dividiram inesperadamente em duas facções. A divisão inicial foi sobre uma questão organizacional. Lenin e 
                seus apoiadores, os bolcheviques, argumentaram a favor de um partido menor, mas altamente organizado, onde apenas os membros do partido seriam 
                considerados como membros, enquanto Martov e seus apoiadores, os mencheviques, defendiam um partido maior e menos disciplinado, onde pessoas que 
                ajudassem também seriam consideradas membros. Em um desenvolvimento surpreendente, Trotsky e a maioria dos editores do Iskra apoiaram Martov e os 
                mencheviques, enquanto Plekhanov apoiou Lenin e os bolcheviques. Durante 1903 e 1904, muitos membros mudaram de lado nas facções. Trotsky deixou os 
                mencheviques em setembro de 1904 devido à insistência deles em uma aliança com liberais russos e sua oposição à reconciliação com Lenin e os 
                bolcheviques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                De 1904 até 1917, Trotsky se descreveu como um "social-democrata não-faccionista". Ele tentou reconciliar diferentes grupos dentro do partido, o 
                que resultou em muitos conflitos com Lenin e outros membros proeminentes do partido. Trotsky mais tarde afirmou que estava errado em se opor a 
                Lenin sobre a questão do partido. Trotsky começou a desenvolver sua teoria da revolução permanente e estabeleceu uma estreita relação de trabalho 
                com Alexander Parvus entre 1904 e 1907. Durante a divisão, Lenin chamou Trotsky de "Pequeno Judas" (Iudushka, baseado no personagem do romance A 
                Família Golovlyov de Mikhail Saltykov-Shchedrin), um "canalha" e um "porco".
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Revolução de 1905 e julgamento (1905–1906)</h3>

            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                A agitação contra o governo russo culminou em São Petersburgo em 3 de janeiro de 1905 (Calendário Juliano), quando uma greve estourou nas Obras 
                Putilov da cidade. Essa única greve cresceu para uma greve geral, e até 7 de janeiro de 1905, havia 140.000 grevistas em São Petersburgo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                No domingo, 9 de janeiro de 1905, o Padre Georgi Gapon liderou uma procissão de radicais misturados com grupos maiores de cidadãos comuns pelas 
                ruas em direção ao Palácio de Inverno para suplicarem ao czar por comida e alívio do governo. De acordo com o próprio Gapon, ele levou as pessoas 
                para um Guardião do Palácio já em defesa, devido à violência do grupo contra eles. Eles eventualmente dispararam contra a manifestação, resultando 
                de 1905 tenha se tornado conhecido como o Domingo Sangrento, a biografia de Gapon aponta para uma conspiração. Isso foi mais tarde confirmado por 
                registros policiais russos que listaram o número de radicais militantes encontrados entre os mortos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Após os eventos do Domingo Sangrento, Trotsky retornou secretamente à Rússia em fevereiro de 1905, passando por Kiev. Inicialmente, ele escreveu 
                folhetos para uma prensa subterrânea em Kiev, mas logo se mudou para a capital, São Petersburgo. Lá, ele trabalhou com bolcheviques, como o membro 
                do Comitê Central Leonid Krasin, e com o comitê local dos mencheviques, os quais ele pressionou em uma direção mais radical. Estes, no entanto, 
                foram traídos por um agente da polícia secreta em maio, e Trotsky teve que fugir para a Finlândia rural. Lá, ele trabalhou em sua teoria da 
                revolução permanente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em 19 de setembro de 1905, os tipógrafos da gráfica de Ivan Sytin em Moscou entraram em greve por menos horas e maiores salários. Na noite de 
                24 de setembro, os trabalhadores de outras 50 gráficas de Moscou também entraram em greve. Em 2 de outubro de 1905, os tipógrafos das gráficas 
                de São Petersburgo decidiram entrar em greve em apoio aos grevistas de Moscou. Em 7 de outubro de 1905, os trabalhadores ferroviários da Ferrovia 
                Moscovo-Kazan entraram em greve.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                No meio da confusão resultante, Trotsky retornou de Finlândia a São Petersburgo em 15 de outubro de 1905. Nesse dia, Trotsky falou perante o 
                Conselho Soviético de Deputados dos Trabalhadores de São Petersburgo, que estava reunido no Instituto Tecnológico da cidade. Também estavam 
                presentes cerca de 200.000 pessoas que se aglomeraram do lado de fora para ouvir os discursos — cerca de metade de todos os trabalhadores em 
                São Petersburgo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Após seu retorno, Trotsky e Parvus assumiram o jornal Gazeta Russa, aumentando sua circulação para 500.000. Trotsky também co-fundou, junto com 
                Parvus, Julius Martov e outros mencheviques, o "Nachalo" ("O Início"), que também se tornou um jornal muito bem-sucedido no ambiente revolucionário 
                de São Petersburgo em 1905.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Antes de Trotsky retornar, os mencheviques haviam criado independentemente a mesma ideia que Trotsky tinha: uma organização revolucionária 
                não-partidária eleita representando os trabalhadores da capital, o primeiro Soviete ("Conselho") de Trabalhadores. Quando Trotsky chegou, o Soviete 
                de São Petersburgo já estava funcionando, presidido por Khrustalyev-Nosar (Georgy Nosar, pseudônimo Pyotr Khrustalyov). Khrustalyev-Nosar havia sido 
                uma figura de compromisso quando eleito presidente do Soviete de São Petersburgo. Ele era um advogado que se mantinha acima das facções políticas 
                presentes no Soviete.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                No entanto, desde sua eleição, ele se mostrou muito popular com os trabalhadores, apesar da oposição original dos bolcheviques a ele. 
                Khrustalyev-Nosar se tornou famoso em sua posição como porta-voz do Soviete de São Petersburgo. De fato, para o mundo exterior, Khrustalyev-Nosar 
                era a personificação do Soviete de São Petersburgo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Trotsky ingressou no Soviete sob o nome de "Yanovsky" (após a vila onde nasceu, Yanovka) e foi eleito vice-presidente. Ele fez muito do trabalho 
                real no Soviete e, após a prisão de Khrustalyev-Nosar em 26 de novembro de 1905, foi eleito presidente. Em 2 de dezembro, o Soviete emitiu uma 
                proclamação que incluía a seguinte declaração sobre o governo czarista e suas dívidas externas:
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                "O autocracia nunca gozou da confiança do povo e nunca recebeu autoridade do povo. Decidimos, portanto, não permitir o pagamento de tais empréstimos 
                feitos pelo governo czarista quando estava em guerra aberta com todo o povo."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                No dia seguinte, em 3 de dezembro de 1905, o Soviete foi cercado por tropas leais ao governo e os deputados foram presos. Trotsky e outros líderes 
                do Soviete foram julgados em 1906 sob acusações de apoiar uma rebelião armada. Em 4 de outubro de 1906, ele foi condenado e sentenciado ao exílio 
                interno na Sibéria.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Segunda emigração (1907–1914)</h3>

            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Durante o caminho para o exílio em Obdorsk, Sibéria, em janeiro de 1907, Trotsky escapou em Berezov e mais uma vez se dirigiu a Londres. Ele 
                participou do 5º Congresso do RSDLP. Em outubro, mudou-se para Viena, Áustria-Hungria. Nos próximos sete anos, participou com frequência das 
                atividades do Partido Social-Democrata Austríaco e, ocasionalmente, do Partido Social-Democrata Alemão.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em Viena, Trotsky se aproximou de Adolph Joffe, seu amigo pelos próximos 20 anos, que o introduziu na psicanálise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em outubro de 1908, ele foi convidado a integrar a equipe editorial do Pravda ("Verdade"), um jornal bi-semanal em russo para os trabalhadores 
                russos, que ele co-editou com Adolph Joffe e Matvey Skobelev. O jornal foi contrabandeado para a Rússia. O jornal apareceu de forma irregular; apenas 
                cinco edições foram publicadas no primeiro ano.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Evitando a política faccional, o jornal se tornou popular entre os trabalhadores industriais russos. Tanto os bolcheviques quanto os mencheviques 
                se dividiram várias vezes após a falha da revolução de 1905–1907. A publicação de Pravda teve dificuldade devido à falta de dinheiro. 
                Trotsky procurou o Comitê Central Russo para buscar apoio financeiro para o jornal durante todo o ano de 1909.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                A maioria dos bolcheviques controlava o Comitê Central em 1910. Lenin concordou com o financiamento de Pravda, mas exigiu que um bolchevique fosse nomeado 
                como co-editor do jornal. Quando várias facções bolcheviques e mencheviques tentaram se reunificar na reunião do Comitê Central do RSDLP em janeiro de 1910 
                em Paris, apesar da objeção de Lenin, o Pravda foi feito o "órgão central" financiado pelo partido. Lev Kamenev, cunhado de Trotsky, foi adicionado ao conselho 
                editorial pelos bolcheviques, mas as tentativas de unificação falharam em agosto de 1910. Kamenev renunciou ao conselho em meio a recriminações mútuas. Trotsky 
                continuou publicando Pravda por mais dois anos até que o jornal finalmente faliu em abril de 1912.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Os bolcheviques começaram um novo jornal voltado para os trabalhadores em São Petersburgo em 22 de abril de 1912, também chamado de Pravda. Trotsky 
                ficou tão chateado com o que viu como uma usurpação do nome de seu jornal que, em abril de 1913, escreveu uma carta a Nikolay Chkheidze, um líder 
                menchevique, criticando duramente Lenin e os bolcheviques. Embora logo tenha superado o desacordo, a mensagem foi interceptada pela polícia secreta 
                russa, e uma cópia foi colocada em seus arquivos. Logo após a morte de Lenin em 1924, a carta foi encontrada e divulgada pelos opositores de Trotsky 
                dentro do Partido Comunista para retratá-lo como inimigo de Lenin.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                A década de 1910 foi um período de tensões intensificadas dentro do RSDLP, levando a inúmeros atritos entre Trotsky, os bolcheviques e os 
                mencheviques. O desacordo mais sério que Trotsky e os mencheviques tinham com Lenin na época era sobre a questão das "expropriações", ou seja, 
                o roubo armado de bancos e outras empresas por grupos bolcheviques para arrecadar dinheiro para o Partido. Essas ações foram banidas pelo 5º Congresso, 
                mas continuaram a ser praticadas pelos bolcheviques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em janeiro de 1912, a maioria da facção bolchevique, liderada por Lenin, além de alguns menshevique dissidentes, realizou uma conferência em Praga 
                e decidiu se separar do Partido Social-Democrata Trabalhista Russo, formando um novo partido, o Partido Social-Democrata Trabalhista Russo 
                (Bolcheviques). Em resposta, Trotsky organizou uma conferência de "unificação" das facções sociais-democratas em Viena, em agosto de 1912 
                (conhecida como "O Bloco de Agosto"), e tentou reunir novamente os bolcheviques e mensheviques em um único partido. A tentativa foi, em geral, 
                malsucedida.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em Viena, Trotsky publicou continuamente artigos em jornais radicais russos e ucranianos, como o Kievskaya Mysl, sob vários pseudônimos, 
                frequentemente usando "Antid Oto", um nome escolhido aleatoriamente de um dicionário italiano, com Trotsky brincando que "queria injetar o antídoto 
                marxista nos jornais legítimos". Em setembro de 1912, o Kievskaya Mysl o enviou para os Bálcãs como seu correspondente de guerra, onde ele cobriu as 
                duas Guerras Bálcãs durante o ano seguinte. Enquanto estava lá, Trotsky documentou o "limpeza étnica" realizada pelo exército sérvio contra a 
                população civil albanesa. Ele se tornou amigo próximo de Christian Rakovsky, mais tarde um importante político soviético e aliado de Trotsky no 
                Partido Comunista Soviético. Em 3 de agosto de 1914, com o estopim da Primeira Guerra Mundial, na qual a Áustria-Hungria lutava contra o Império 
                Russo, Trotsky foi forçado a fugir de Viena para a Suíça neutra para evitar a prisão como um emigrante russo.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Primeira Guerra Mundial (1914–1917)</h3>

            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                A eclosão da Primeira Guerra Mundial causou uma reorientação repentina dentro do RSDLP e de outros partidos sociais-democratas europeus sobre questões 
                de guerra, revolução, pacifismo e internacionalismo, dividindo novamente o partido em derrotistas e defensistas. Dentro do RSDLP, Lenin, Trotsky e 
                Martov defenderam várias posições internacionalistas anti-guerra, que viam a derrota da classe dominante imperialista do próprio país como o 
                "mal menor" na guerra, enquanto se opunham a todos os imperialistas na guerra imperialista. Esses crentes anti-guerra eram conhecidos como 
                "derrotistas". Aqueles que apoiavam um lado contra o outro na guerra eram conhecidos como "defensistas". Plekhanov e muitos outros sociais-democratas 
                defensistas (tanto bolcheviques quanto mensheviques) apoiaram o governo russo em certa medida e queriam que ele vencesse a guerra, enquanto Parvus, 
                ex-colega de Trotsky, agora defensista, se opôs tão fortemente à Rússia que desejava a vitória da Alemanha na guerra. Na Suíça, Trotsky trabalhou 
                brevemente dentro do Partido Socialista Suíço, levando-o a adotar uma resolução internacionalista. Ele escreveu um livro contra a guerra, 
                A Guerra e o Internacional, e contra a posição pró-guerra adotada pelos partidos sociais-democratas europeus, principalmente o partido alemão.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Como correspondente de guerra do Kievskaya Mysl, Trotsky se mudou para a França em 19 de novembro de 1914. Em janeiro de 1915, em Paris, começou a 
                editar (inicialmente com Martov, que logo renunciou quando o jornal se moveu para a esquerda) o Nashe Slovo ("Nossa Palavra"), um jornal socialista 
                internacionalista. Ele adotou o slogan "paz sem indenizações ou anexações, paz sem conquistadores ou conquistados". Lenin defendia a derrota da 
                Rússia na guerra e exigia uma ruptura completa com a Segunda Internacional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Trotsky participou da Conferência de Zimmerwald dos socialistas anti-guerra em setembro de 1915 e defendeu um curso intermediário entre aqueles que, 
                como Martov, ficariam na Segunda Internacional a qualquer custo e aqueles que, como Lenin, romperiam com a Segunda Internacional e formariam uma 
                Terceira Internacional. A conferência adotou a linha intermediária proposta por Trotsky. Inicialmente oposto, no final Lenin votou a favor da 
                resolução de Trotsky para evitar uma divisão entre os socialistas anti-guerra.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Em setembro de 1916, Trotsky foi deportado da França para a Espanha por suas atividades anti-guerra. As autoridades espanholas não o queriam e o 
                deportaram para os Estados Unidos em 25 de dezembro de 1916. Ele chegou a Nova York em 13 de janeiro de 1917. Ficou por mais de dois meses no 
                endereço 1522 Vyse Avenue, no Bronx. Em Nova York, escreveu artigos para o jornal local socialista em russo, Novy Mir, e para o diário em iídiche, 
                Der Forverts ("Forward"), em tradução. Também fez discursos para os emigrantes russos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Trotsky estava vivendo em Nova York quando a Revolução de Fevereiro de 1917 levou à abdicação do czar Nicolau II. Ele deixou Nova York a bordo do 
                SS Kristianiafjord em 27 de março de 1917, mas seu navio foi parado pela Marinha Real em Halifax, na Nova Escócia. Trotsky foi preso e detido por 
                um mês no Campo de Internamento de Amherst, na Nova Escócia. Enquanto estava preso no campo, Trotsky estabeleceu uma crescente amizade com os 
                trabalhadores e marinheiros entre seus companheiros de cativeiro, descrevendo seu mês no campo como "uma reunião contínua de massas".
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Os discursos e a agitação de Trotsky incorreram na ira dos prisioneiros alemães no campo, que se queixaram ao comandante, o coronel Morris, sobre a 
                atitude "anti-patriótica" de Trotsky. Morris, então, proibiu Trotsky de fazer mais discursos públicos, levando 530 prisioneiros a protestar e 
                assinar uma petição contra a decisão de Morris. De volta à Rússia, após uma hesitação inicial e sob pressão dos Soviets de trabalhadores e 
                camponeses, o ministro das Relações Exteriores russo Pavel Milyukov foi compelido a exigir a liberação de Trotsky como cidadão russo, e o governo 
                britânico o libertou em 29 de abril de 1917.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Trotsky chegou à Rússia em 17 de maio de 1917. Após seu retorno, Trotsky concordou substancialmente com a posição bolchevique, mas não se juntou a 
                eles imediatamente. Os sociais-democratas russos estavam divididos em pelo menos seis grupos, e os bolcheviques estavam aguardando o próximo Congresso 
                do Partido para determinar com quais facções se fundiriam. Trotsky juntou-se temporariamente aos Mezhraiontsy, uma organização social-democrata 
                regional em Petrogrado, e tornou-se um de seus líderes. No Primeiro Congresso dos Soviets, em junho, foi eleito membro do primeiro Comitê Executivo 
                Central All-Russo ("VTsIK") pela facção Mezhraiontsy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Após uma insurreição pró-bolchevique malsucedida em Petrogrado, Trotsky foi preso em 7 de agosto de 1917. Foi libertado 40 dias depois, após a falha 
                da insurreição contrarrevolucionária de Lavr Kornilov. Após os bolcheviques conquistarem a maioria no Soviet de Petrogrado, Trotsky foi eleito 
                presidente em 8 de outubro [25 de setembro no calendário juliano] de 1917.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Trotsky se aliou a Lenin contra Grigory Zinoviev e Lev Kamenev quando o Comitê Central bolchevique discutiu a possibilidade de realizar uma 
                insurreição armada, e ele liderou os esforços para derrubar o Governo Provisório Russo, chefiado pelo socialista Aleksandr Kerensky.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                O seguinte resumo sobre o papel de Trotsky em 1917 foi escrito por Joseph Stalin no Pravda, em 6 de novembro de 1918. Embora esse trecho tenha 
                sido citado no livro de Stalin, A Revolução de Outubro (1934), ele foi expurgado das Obras de Stalin (1949).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                "Todo o trabalho prático relacionado à organização da insurreição foi feito sob a direção imediata do camarada Trotsky, o presidente do Soviet de 
                Petrogrado. Pode-se afirmar com certeza que o Partido deve principalmente e principalmente ao camarada Trotsky pela rápida adesão da guarnição 
                ao lado do Soviet e pela maneira eficiente com que o trabalho do Comitê Militar Revolucionário foi organizado."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Após o sucesso da Revolução de Outubro, em 7-8 de novembro de 1917, Trotsky liderou os esforços para repelir um contra-ataque dos cossacos sob 
                o comando do General Pyotr Krasnov e outras tropas ainda leais ao Governo Provisório deposto, em Gatchina. Aliado a Lenin, ele derrotou as 
                tentativas de outros membros do Comitê Central bolchevique (Zinoviev, Kamenev, Rykov, etc.) de compartilhar o poder com outros partidos 
                socialistas moderados. Trotsky foi um defensor fervoroso de um governo predominantemente bolchevique e relutante em relembrar os mensheviques 
                como parceiros após sua retirada voluntária do Congresso dos Soviets. No entanto, ele libertou vários ministros socialistas da prisão, e nem 
                Trotsky nem seus colegas de 1917 quiseram suprimir esses partidos. Os bolcheviques também reservaram um número de cadeiras vagas nos Soviets e 
                no Comitê Executivo Central para os partidos, proporcionalmente ao número de votos que eles receberam no Congresso.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Ao mesmo tempo, vários membros proeminentes dos Socialistas Revolucionários de Esquerda assumiram posições no governo de Lenin e lideraram 
                comissariados em várias áreas. Isso incluía agricultura (Kolegaev), propriedade (Karelin), justiça (Steinberg), correios e telégrafos (Proshian) e 
                governo local (Trutovsky).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Segundo Deutscher, os mensheviques e os Socialistas Revolucionários apresentaram uma série de exigências para um governo de coalizão. Essas 
                exigências propunham desarmar os destacamentos bolcheviques e excluir Lenin e Trotsky da coalizão. Isso foi visto como inaceitável até mesmo 
                para os negociadores bolcheviques mais moderados, como Kamenev e Sokolnikov.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                No final de 1917, Trotsky era indiscutivelmente o segundo homem no Partido Bolchevique, atrás de Lenin. Ele eclipsou Zinoviev, que havia sido o 
                principal tenente de Lenin na última década.
            </p>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Comissário da Guerra</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1918: Formulação da política militar e primeiros sucessos</h3>

            <p className="text-lg text-gray-700 mb-4">
                Contrariamente ao que desejava a Velha Guarda Bolchevique, Trótski reorganizou o Exército Vermelho em torno do recrutamento compulsório de 
                camponeses, enquadrados por oficiais do antigo Exército Imperial Russo, os quais eram vigiados quanto às suas simpatias políticas, por 
                propagandistas e militantes bolcheviques ("comissários políticos") encarregados de validar as ordens militares dadas por estes oficiais 
                e de garantir sua confiabilidade ("comando dual").
            </p>

            <p className="text-lg text-gray-700 mb-4">
                O Exército Vermelho foi assim constituído como uma organização hierarquizada e burocrática, que, como era norma em todos os exércitos 
                desse tempo, apoiava-se no uso de uma disciplina estrita que previa a pena de morte para atos de covardia e deserção, sendo aplicável 
                tanto aos ex-oficiais do exército imperial quanto aos comunistas. Como o próprio Trótski declarou:
            </p>

            <blockquote className="border-l-4 pl-4 mb-4 text-gray-700">
                "Aviso que se qualquer unidade [militar] recuar sem ordens para tal, o primeiro a ser fuzilado será o comissário [político] da unidade, 
                e depois o comandante[...] É o que prometo solenemente diante de todo o Exército Vermelho."
            </blockquote>

            <p className="text-lg text-gray-700 mb-4">
                Tal atitude levou a constantes protestos por parte de militantes bolcheviques, que prefeririam um Exército Vermelho organizado como uma 
                milícia popular dirigida exclusivamente por comunistas e dotada de oficiais eleitos. Para Trótski - que nada tinha de militar profissional 
                -, no entanto, as necessidades de uma guerra moderna requeriam conhecimentos técnicos especializados que apenas poderiam ser encontrados 
                num corpo de militares de carreira; daí a necessidade absoluta do recurso a "especialistas burgueses". Leve-se em conta que, mediante 
                o emprego de uma disciplina tida por muitos como "brutal", Trótski procurou impor o princípio meritocrático no Exército Vermelho, não 
                hesitando em promover oficiais tzaristas competentes a postos de responsabilidade, nem tampouco em validar punições, incluindo 
                fuzilamentos, de militantes comunistas culpados de atos de covardia.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Não obstante deixasse as decisões militares a cargo dos oficiais profissionais, a qualidade da liderança de Trótski beneficiou-se 
                grandemente de sua experiência percorrendo o front, durante boa parte da Guerra Civil, a bordo do seu lendário trem blindado - dotado 
                de uma tipografia portátil, uma banda e outras instalações -, a partir do qual podia monitorar as atividades militares, fazer propaganda, 
                resolver diferendos burocráticos ou logísticos e eventualmente lançar mão dos seus talentos oratórios para elevar o moral da tropa.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Na situação militar desesperada do verão de 1918, com os bolcheviques reduzidos apenas à posse da parte da Rússia Europeia em torno de 
                Moscou e Petrogrado (São Petersburgo), com os alemães e austríacos ocupando a fronteira ocidental, os ingleses e franceses no Ártico russo 
                e as várias formações antibolcheviques na Sibéria, Trótski recebeu carta branca do partido para aplicar seus métodos. O primeiro grande 
                sucesso militar do Comissário da Guerra seria a defesa da linha de frente dos Urais, contra as tropas da Legião Checoslovaca - uma tropa de 
                soldados checos emigrados mobilizados para a luta contra os austríacos, ao lado do exército tzarista, instigados pela Entente Cordiale 
                (franco-britânica) e pela oposição russa a lutarem contra os bolcheviques. A defesa organizada por Trótski culminou na tomada de Kazan 
                pelo Exército Vermelho, em 10 de setembro de 1918.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Após essa vitória, como prova da confiança do partido na política militar de Trótski, o Conselho Militar Supremo foi (temporariamente) 
                extinto, em favor do estabelecimento de um Comandante em Chefe do Exército Vermelho, o qual viria a ser Ioakim Vatsetis (ou Jukums Vacietis), 
                o comandante do Regimento Vermelho de Fuzileiros Letões (a Letônia tendo sido uma das regiões de fronteira do Império Russo onde o bolchevismo 
                tinha encontrado mais seguidores) e homem de confiança do Comissário da Guerra. 
            </p>

            <p className="text-lg text-gray-700 mb-4">
                À medida que a situação militar da Rússia Soviética se tornava menos crítica, no entanto, a oposição ao Comissário da Guerra, paradoxalmente, 
                recrudescia. Logo após a vitória na frente dos Urais, Vatsetis propôs seguir uma estratégia puramente defensiva, no front siberiano - onde 
                a Legião Checoslovaca havia sido substituída pelas tropas do almirante branco Aleksandr Kolchak - de forma a poupar tropas para operações 
                no front ucraniano, onde as tropas brancas do general Anton Ivanovich Denikin estavam na ofensiva. Esta proposta foi rejeitada pelo Comitê 
                Central bolchevique, e, como o avanço no front oriental acabou por provar-se bem-sucedido - contra as expectativas de Trótski e Vatsetis - 
                este acabou por ser demitido da posição de Comandante em Chefe, que foi dada ao general Sergey Kamenev.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Por trás de todas estas querelas, estava a defesa de Trótski do Exército Vermelho como organização não partidária, que fez com que ele tivesse, 
                desde muito cedo, de defrontar-se com uma cabala no interior do partido, dirigida por Stalin - que, entre Maio e Outubro de 1918, estava encarregado 
                de organizar serviços de intendência na frente de Tsartsin - a futura Stalingrado - e havia tornada-se o governante informal da região do Baixo 
                Volga, onde instalara um reinado de terror dirigido contra as antigas classes dirigentes e especialmente contra os antigos oficiais do exército 
                imperial, fuzilados sob qualquer pretexto. Stalin e seu futuro Ministro da Defesa, Kliment Voroshilov, levaram sua oposição a Trótski ao ponto de 
                recusarem subordinar-se ao ex-general tzarista Andrei Snesarev, nomeado por Trótski para dirigir as operações militares na região.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Em outubro de 1918, quando a ameaça dos exércitos brancos na frente dos Urais tinha desaparecido, no entanto, Trótski voltou sua atenção para a 
                Frente Sul e acabou por impor-se a Stalin, recebendo o apoio de Lenin, que, no entanto, ciente da necessidade de não diminuir Stalin diante de seus 
                camaradas de partido, organizou sua remoção honrosa para Moscou e encarregou o então Secretário Geral do Partido, Sverdlov, de organizar um 
                encontro de reconciliação entre os dois antagonistas, o qual, no entanto, falhou: Trótski respondeu a Stalin, quando este pediu-lhe para que não 
                perseguisse seus "rapazes", que a revolução não tinha tempo para esperar que os "rapazes" crescessem...
            </p>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">1919: Crise e restauração de prestígio</h2>

            <p className="text-lg text-gray-700 mb-4">
                Continuamente importunado pela oposição da velha guarda bolchevique, comandada por Stalin, às suas políticas, Trótski chegou, em julho de 1919, a 
                oferecer sua renúncia ao cargo de Comissário da Guerra ao órgão do Comitê Central do Partido responsável pelas nomeações para cargos administrativos, 
                o Orgburo, de forma a obrigar a cúpula do partido a expressar abertamente seu desacordo consigo ou apoiá-lo. Que a segunda opção tenha sido a escolhida 
                deveu-se antes de tudo a Lenin, que, muito embora encontrasse dificuldades em conciliar os atritos criados por Trótski, pelo seu comportamento 
                arrogante, com o restante dos líderes do partido, continuou em última instância a apoiar sua política militar, chegando mesmo a, num dado momento em 
                1919, entregar-lhe um papel timbrado com sua assinatura que Trótski poderia utilizar para validar qualquer ordem sua.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                No entanto, Trótski continuaria tendo suas políticas fortemente contestadas pelo partido durante todo o início de 1919, especialmente em razão da 
                estratégia tímida que havia proposto para a frente siberiana (onde as tropas vermelhas continuavam a ter sucessos contra o Almirante Kolchak), assim 
                como pela sua incapacidade de resolver a situação militar na frente ucraniana, onde as tropas brancas do general Anton Denikin tinham sua base. No 
                entanto, uma mudança de situação acabaria por restabelecer o seu prestígio.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Stalin e Sergei Kamenev propunham que a estratégia para lidar com a situação na Ucrânia deveria incluir um assalto à retaguarda de Denikin, na região 
                caucasiana do Kuban, onde havia uma concentração de aldeias de cossacos aliados dos Brancos. Trótski, por sua vez, alegava que tal estratégia 
                nada mais faria do que soldar a aliança entre as forças cossacas e os brancos, e que a situação deveria ser resolvida por um ataque na direção do 
                Leste da Ucrânia, onde a concentração de indústrias atrairia o apoio dos operários ao Exército Vermelho; os cossacos - que lutavam em defesa de 
                suas terras - deixados à própria sorte, acabariam por ficar neutros. E, efetivamente, a execução do plano de Stalin apenas reforçou o Exército 
                Branco, que, em setembro de 1919, tomou Orel e avançou para o Norte, na direção de Moscou e do centro de produção de munições de Tula, ameaçando a 
                própria existência do regime soviético. Ao final, o plano de Trótski que acabaria por ser adotado: em outubro de 1919, dois ataques de flanco 
                lançados contra o Exército Branco o separaram da cavalaria cossaca, forçando Denikin a recuar para a Ucrânia, de onde o Exército Branco, 
                completamente desmoralizado e já sem os subsídios do governo britânico, recuaria para a Crimeia.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                No entanto, os responsáveis pela defesa da Frente Sul jamais admitiram abertamente o seu débito para com Trótski, o qual, inclusive, antes da 
                ofensiva final, enviou ao Comitê Central do Partido uma carta defendendo sua estratégia e eximido-se da responsabilidade pelos erros anteriores 
                do comando do Exército Vermelho na Ucrânia - uma reação que Lenin classificaria, numa anotação à margem da carta de Trótski, como produto de 
                "nervosismo". O que afinal reabilitou a reputação de Trótski foi a sua eficiente defesa de Petrogrado contra as tropas do general branco Yudenich, 
                que atacaria a antiga capital também em outubro de 1919, tentando solapar o moral do Exército Vermelho mediante a tomada do berço da revolução. 
                Opondo-se às objeções de Lenin - que a princípio pensara em abandonar Petrogrado para concentrar-se na defesa da Frente Sul - Trótski comandou a 
                defesa pessoalmente, chegando a cavalgar sozinho em direção às linhas inimigas, para animar tropas em fuga. Essa vitória decisiva elevaria o 
                Comissário da Guerra ao auge do seu prestígio - o qual, no entanto, seria imediatamente seguido pelo seu declínio.
            </p>

            <p className="text-lg text-gray-700 mb-4">
                Após a derrota de Denikin e Yudenich, o Exército Branco estava reduzido a um remanescente entrincheirado na Crimeia, sob o comando do barão Pyotr 
                Nikolayevich Wrangel, remanescente este que poderia ser liquidado facilmente pelo Exército Vermelho, quando o ditador nacionalista da Polônia, 
                Józef Piłsudski, resolveu aproveitar-se do vácuo de poder na Ucrânia - onde a autoridade dos bolcheviques encontrava dificuldade para afirmar-se 
                diante da atividade dos nacionalistas ucranianos e dos bandos anarquistas comandados por Nestor Makhno - para tentar restaurar o antigo império 
                polonês nesta região, avançando para o leste com seu exército e tomando Kiev em 7 de maio de 1920. A reação nacionalista que este ataque 
                provocou na Rússia determinou que o contra-ataque do Exército Vermelho fosse extremamente bem-sucedido, limpando a Ucrânia e a Bielorrússia 
                ocidentais de tropas polonesas. Para Trótski, a contraofensiva deveria limitar-se a esta restauração do poder soviético nas repúblicas 
                não-russas da fronteira ocidental, mas Lenin viu na situação a oportunidade de instalar, na Polônia, um regime socialista que servisse de 
                elo de ligação entre a Rússia soviética e a Alemanha, onde as forças de esquerda poderiam recuperar-se da repressão do levante spartakista de 
                1919, e ordenou uma ofensiva na direção de Varsóvia, onde esperava um levantamento operário na retaguarda de Pilsudiski. Trótski, no entanto, 
                considerava que os poloneses, recém-independentes, tenderiam a colocar a garantia de sua independência acima da transformação socialista, e a 
                derrota do Exército Vermelho nos arredores de Varsóvia em agosto de 1920, se privou a Rússia soviética de uma fronteira comum com a Alemanha - 
                para grande prejuízo do movimento comunista internacional - ao mesmo tempo aumentou o prestígio de Trótski, que havia considerado as expectativas 
                de Lenin e dos bolcheviques como irreais e advertido contra o otimismo excessivo. A instâncias de Trótski, foi firmado um tratado de paz com a 
                Polônia, o qual permitiu que o Exército Vermelho liquidasse o bastião Branco na Crimeia em Novembro de 1920, encerrando a Guerra Civil.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">O Pós-Guerra Civil</h3>

            <p className="text-lg text-gray-700 mb-4">
                A autossuficiência de Trótski, mesmo após a vitória dos Vermelhos na Guerra Civil, acabou por determinar que seu prestígio público sofresse abalos 
                importantes: o primeiro, quando da repressão brutal das revoltas de Kronstadt e de Tambov, em que teve papel importante na adoção de uma política de 
                repressão e de rejeição de qualquer compromisso com os rebeldes. Segundo, quando, após haver proposto um abandono do comunismo de guerra e um retorno 
                parcial ao livre mercado, pela adoção do que viria a consistir na futura NEP, no início de 1920, foi desautorizado por Lenin, propondo então, como uma 
                alternativa, que "os métodos de guerra fossem aplicados sistematicamente", mediante um combate decidido ao desemprego decorrente da desmobilização e 
                visando a rápida recuperação econômica da Rússia Soviética pela abolição total da independência, mesmo nominal, dos sindicatos e pela generalização 
                do trabalho forçado através da formação de "exércitos do trabalho" que mobilizariam forçosamente trabalhadores ociosos. Somando-se à desconfiança 
                dos veteranos bolcheviques por sua adesão tardia ao partido, estas posições lhe darão uma fama de bonapartista e ditador militar potencial, e 
                em muito enfraquecerão sua posição diante de Stalin; Lenin, no seu Testamento Político, falará de Trótski como "o homem mais capaz do presente 
                Comitê Central", mas deplorará suas tendências autoritárias (nas palavras de Lenin, "sua tendência a abordar as questões apenas pelo lado 
                administrativo").
            </p>
            </section>



            {/* Seção de Legado */}
            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Derrota diante de Stalin</h2>
            <p className="text-lg text-gray-700 mb-4">
                Desde 1920, Lenin receia crescentemente a burocratização do partido e do estado e criticava Trótski pela sua falta de "opinião firme sobre o 
                marxismo" e o condenava na tentativa de querer conciliar as diferentes classes sociais esquerdistas. A sua morte, em 1924, gera um vazio de poder 
                que acirra a disputa interna entre o setor burocratizado e o setor em defesa de uma maior sovietização do regime. O primeiro, simbolizado por Stálin, 
                acaba por vencer, assumindo a direção quase total do partido. Nesse momento, Trótski não quis ou não pôde opor-se ativamente a Stalin, mantendo-se 
                discreto no 12º congresso do partido em 1923, onde acaba por perder o poder para um triunvirato, também chamado de Troika, constituído por Stalin, 
                Lev Kamenev e Grigori Zinoviev. Trótski e seus apoiantes organizam-se na Oposição de Esquerda, facção que nos anos seguintes luta no interior do 
                partido contra Stalin.
            </p>
            <p className="text-lg text-gray-700 mb-4">
                Havia, no entanto, uma assimetria fundamental nesta luta faccionária: a oposição de esquerda, por mais bem implantada que estivesse no interior da 
                militância comum do partido, não tinha qualquer poder no interior das instâncias decisórias de um Partido Bolchevique já totalmente burocratizado. 
                Trótski, pela sua entrada tardia no partido e por não ter assumido responsabilidade por nomeações burocráticas como Stalin, não possuía capacidade 
                de alavancar suas posições pelo exercício do clientelismo. Mas ainda, desde o seu décimo congresso, em 1920, o Partido Bolchevique havia adotado - 
                com o apoio de Trótski, diga-se de passagem - um novo regimento administrativo que proibia a existência de facções permanentemente organizadas no 
                partido, o que tornava possível a qualquer contestação à liderança do Partido ser caracterizada como "faccionária". Resumindo, o prestígio pessoal 
                de Trótski era inteiramente desproporcional aos recursos políticos concretos que ele poderia mobilizar no interior de um partido a cuja vida interna 
                ele era estranho. Daí, em grande parte, a inação de Trótski diante da ascensão de Stalin; na ausência de Lenin - que até então havia sempre abonado 
                suas políticas em momentos decisivos - Trótski escolheu não desafiar o conclave bolchevique, sabendo que suas chances de vitória eram reduzidas.
            </p>
            <p className="text-lg text-gray-700 mb-4">
                Durante a preparação pelo Comintern de um levante revolucionário na Alemanha em finais de 1923- com Lenin ainda vivo mas incapacitado - Trótski já 
                havia solicitado ao partido permissão para atender um convite feito pelo líder comunista alemão Heinrich Brandler e dirigir o levante projetado in 
                loco como combatente revolucionário internacional - um projeto que de certa forma antecipava a aventura boliviana de Che Guevara. A permissão foi, 
                no entanto, negada, pois Stalin temia que, se Trótski caísse prisioneiro ou morto, o embaraço que tal provocaria ao governo soviético, e temia mais 
                ainda a possibilidade de que ele retornasse da Alemanha vitorioso, caso em que o aumento de seu poder e influência seria irresistível. O levante 
                alemão, mal preparado e executado, foi um fracasso, e fortaleceu a tendência stalinista de abandonar a revolução socialista internacional pelo 
                "socialismo num só país".
            </p>
            <p className="text-lg text-gray-700 mb-4">
                No decorrer das lutas confusas que se seguiriam, Trótski buscou uma consolação - assim como um aumento da sua influência - pela concentração no 
                trabalho teórico e intelectual. Trótski já havia, durante a Revolução de 1905, formulado a Teoria da Revolução Permanente- a proposição de que a 
                revolução liberal-burguesa, nas condições de um país capitalista atrasado como a Rússia não se deteria na constituição de uma república democrática, 
                mas avançaria para a revolução socialista, num processo sem solução de continuidade - contrariamente ao entendimento evolucionista do marxismo 
                predominante à época, segundo o qual a revolução socialista seria um produto do esgotamento prévio das possibilidades de desenvolvimento capitalista 
                nacional. Além disso, segundo essa teoria, o único agente social capaz de levar uma revolução russa até o fim seria o proletariado, aliado as massas 
                camponesas. Após a Revolução de 1917, passou a defender também que a revolução socialista era um processo mundial e que a Revolução Russa necessitaria 
                continuar a desenrolar-se numa arena mundial, no âmbito de uma perspectiva internacionalista que contrastava claramente com a política estalinista 
                do "socialismo num só país". Defendeu a rápida industrialização da economia e o abandono da NEP (Nova Política Econômica) de Lenin, quando Stalin e o 
                teórico Bukharin defendiam a industrialização gradual e a manutenção daquela política.
            </p>
            <p className="text-lg text-gray-700 mb-4">
                A dissidência no interior do partido vem a público quando Trótski publica, em 1924, um prefácio à edição dos seus escritos de 1917, As Lições de 
                Outubro, criticando a falta de estratégia revolucionária de Stalin e da Direção do Comintern na direção do levante alemão de 1923, e compara suas 
                atitudes com a indecisão demonstrada por Kamenev e Zinoviev às vésperas da Revolução de Outubro. Estas discordâncias abertas afastam politicamente 
                Trótski de Stalin, culminando na sua expulsão do partido a 12 de novembro de 1927, o exílio em Alma Ata (hoje Altana), na então República Socialista 
                Soviética do Cazaquistão, a 31 de janeiro de 1928, e finalmente a expulsão da União Soviética em 1929. Ainda em julho desse ano, começa a publicar 
                um boletim mensal da oposição, que continuaria a ser publicado e contrabandeado para o território soviético durante todo o seu exílio.
            </p>
            <p className="text-lg text-gray-700 mb-4">
                Ironicamente, afastado Trótski, Stalin vira-se contra Bukharin e acaba por apropriar-se de muitos dos preceitos da política econômica enunciados por 
                Trótski, implementando-a, todavia, de uma forma criticada por uma grande maioria, como exageradamente violenta e autoritária. Tal "virada à Esquerda" 
                de Stalin, no entanto, fez muito para privar a Oposição de Esquerda de grande parte dos seus partidários na URSS, que acabam por aderir a Stalin, que 
                consideram estar realizando na prática o programa da oposição, nomeadamente o economista Ievguêni Preobrajenski e o antigo chefe de governo da Ucrânia 
                soviética e amigo pessoal de Trótski desde a época de sua estadia nos Bálcãs, o socialista romeno de etnia búlgara Christian Rakovski - que, 
                juntamente com a imensa maioria dos antigos trotskistas, haveriam de perecer nas Grandes Purgas dos anos 1930.
            </p>
            </section>

            <section className="mt-8 max-w-4xl text-justify">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Exílio e Morte</h2>
            
            <p className="text-lg text-gray-700 mb-4">
                Após a deportação, Trótski passou pela Turquia, França (julho de 1933 a junho de 1935) e Noruega (junho de 1935 a setembro de 1936), 
                fixando-se finalmente no México, a convite do pintor Diego Rivera, vivendo temporariamente em casa deste e mais tarde em casa da esposa 
                de Rivera, a pintora Frida Kahlo. A medida que aumenta a repressão stalinista, multiplicam-se os lutos familiares. Além da morte dos seus 
                quatro filhos, os genros, noras, netos, e outros parentes próximos de Trótski são igualmente vítimas da repressão por sua ligação com um 
                "inimigo do povo" e desaparecem nos sucessivos expurgos da década de 1930, com exceção do único filho que Zina pôde levar consigo ao 
                exterior, e que acabou por reunir-se ao avô no México, após complicadas negociações com a mulher francesa de Leon Sedov - que havia se 
                responsabilizado pelo sobrinho até a sua própria morte num hospital parisiense.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
                No final de 1932 Trótski entrou em um bloco de oposição a Stalin dentro da URSS. Não havia evidências em suas cartas de uma aliança com 
                a Alemanha nazista ou o Japão, como alegou a União Soviética. Os membros do bloco eram seguidores de Zinoviev, direitistas e trotskistas 
                que "capitularam" a Stalin. Kamenev e Zinoviev também eram membros do bloco. Trótski não queria que a aliança se tornasse uma fusão, 
                e ele temia que a direita ganhasse muito poder dentro do bloco. Historiadores como Pierre Broué concluíram que o bloco provavelmente se 
                dissolveu no início de 1933, já que alguns de seus membros, como Zinoviev e Kamenev, se juntaram a Stalin novamente, e porque não havia 
                cartas no arquivo de Trotsky em Harvard mencionando o bloco depois de 1932.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
                No seu crescente isolamento pessoal e político, Trótski, a partir desta altura, aumenta consideravelmente a sua produção escrita, 
                escrevendo importantes obras como sua autobiografia, Minha Vida (1930), a História da Revolução Russa (em 2 vols., 1930 e 
                1932), A Revolução Permanente (1930) e A Revolução Traída (1936), uma crítica violenta ao Stalinismo. Apoiando-se 
                sobre um panfleto de Rakovski, Os Perigos profissionais do poder, Trótski considerava em A Revolução Traída que a União 
                Soviética se tornara num Estado de trabalhadores degenerado, controlado por uma burocracia não-democrática - derivada, no entanto, da 
                própria classe operária (em um processo descrito como Degenerescência Burocrática) e que teria eventualmente de ser derrubada por uma 2ª 
                revolução política que restaurasse o caráter democrático da revolução socialista, ou, então, degenerar ao ponto de regressar ao capitalismo.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
                Trótski rejeitou as teses ultraesquerdistas de certos opositores bolcheviques do estalinismo (notadamente os "Centralistas Democráticos" 
                liderados por Sapronov), que consideravam que o stalinismo era uma restauração do capitalismo, algo similar à restauração da monarquia 
                francesa pelos Bourbons em 1815. Através desta mesma analogia com a Revolução Francesa, Trótski considerou que o regime de Stalin era 
                um Termidor soviético, no sentido de que, assim como o 9 Termidor francês havia derrubado o radicalismo pequeno-burguês de Robespierre, 
                Saint-Just e dos jacobinos, mas preservado o caráter burguês da sociedade francesa, do mesmo modo o estalinismo havia eliminado todos 
                os elementos internacionalistas e de democracia proletária do regime soviético, mas não havia, de momento, abolido o caráter socialista 
                da economia e das relações sociais na Rússia.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
                A 3 de setembro de 1938, numa reunião com 25 delegados de 11 países, Trótski e seus seguidores fundam a Quarta Internacional, como 
                alternativa à Terceira Internacional estalinista. Trótski tinha entrado entretanto em conflito com Diego Rivera - numa disputa que tinha 
                tanto a ver com as pretensões políticas de Rivera no movimento trotskista, que Trótski desfavorecia, quanto com a breve ligação amorosa 
                de Trótski com Frida Kahlo - e mudara-se em 1939 para uma casa própria no bairro de Coyoacán, na Cidade do México. A 24 de maio de 
                1940 sobrevive a um ataque à sua casa por assassinos alegadamente a mando de Stalin. Não sobreviverá, no entanto, ao segundo ataque de 
                Stalin: em 20 de agosto de 1940, o agente Ramón Mercader consegue, sob disfarce, entrar pacificamente na sua sala para um encontro e, 
                aproveitando um momento de distração, aplica com uma picareta um golpe fatal no seu crânio. Ao ouvir o ruído, os guarda-costas de Trótski 
                precipitam-se para a sala e quase matam Mercader, mas Trótski detém-nos, exclamando: "Não o matem! Esse homem tem uma história para contar!".
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
                Nas últimas horas da sua vida, o revolucionário manteve-se determinado e ditou tanto o seu testamento como artigos sobre estratégia 
                política, num momento em que a humanidade vivia um dos mais mortíferos conflitos mundiais. Entre as frases ditadas, proferiu: “Morro 
                com a certeza inabalável no futuro comunista da humanidade. Essa certeza dá-me hoje uma força que religião alguma me poderia dar.” 
                Faleceu no dia seguinte.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
                A casa de Trótski em Coyocán, preservada no mesmo estado em que se encontrava naquele dia, é hoje um museu, em cujos terrenos se 
                encontra ainda o cenotáfio de Trótski, com a foice e martelo talhados sobre seu nome.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
                Trótski nunca foi formalmente reabilitado pelo governo soviético, seja durante a "desestalinização" de Khrushchov, seja durante a 
                "Glasnost" de Mikhail Gorbatchov, apesar da reabilitação, durante estes dois episódios, da maioria da velha guarda bolchevique morta 
                durante os grandes expurgos de Stalin. Dos descendentes de Trótski, o único que pôde preservar sua conexão com a família seria o seu 
                neto, o engenheiro Esteban Volkov, filho de Zina, que seria criado por Natalia Sedova no México e muito faria pela preservação da 
                memória do avô pela manutenção da sua casa de Coyoacán como um museu privado, depois apropriado pelo governo mexicano. Na década de 
                1990, Volkov viajaria à Rússia para encontrar-se, após sessenta anos de separação, com uma irmã recém-localizada, doente terminal de 
                câncer, com a qual teve de conversar através de um intérprete, para explicar-lhe que a decisão de deixá-la na URSS havia sido imposta 
                à sua mãe por Stalin.
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

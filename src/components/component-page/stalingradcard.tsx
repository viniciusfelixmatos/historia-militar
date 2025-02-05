import Image from 'next/image'; // Para otimizar imagens no Next.js

export default function StalingradCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto p-6">
      {/* Cabeçalho */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-2">
          Batalha de Stalingrado
        </h2>
      </div>

      {/* Imagem */}
    <div className="relative w-full h-0 pb-[80%] sm:pb-[60%] mb-4"> {/* Aumentando ainda mais as proporções */}
        <Image
            src="/battles-image/stalingrad-battle.jpg" // Substitua pela URL real da imagem
            alt="Batalha de Stalingrado"
            layout="fill" // Garante que a imagem preencha o container
            objectFit="cover" // Mantém proporção da imagem
            className="rounded-lg shadow-md"
        />
    </div>

      {/* Explicação da Imagem */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600 italic">
          "A resistência soviética em Stalingrado mudou o rumo da guerra na Frente Oriental."
        </p>
      </div>

      {/* Países envolvidos e Informações adicionais */}
      <div className="bg-gray-100 p-6 rounded-md mb-6">
        {/* Título da seção */}
        <p className="text-center text-xl font-medium text-gray-800 mb-4">Informações da Batalha</p>

        {/* Países envolvidos */}
        <div className="mb-4">
          <p className="text-center font-medium text-gray-700 mb-2">Países Envolvidos</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="font-normal text-gray-700">União Soviética</p>
            </div>
            <div className="text-center">
              <p className="font-normal text-gray-700">Alemanha Nazista</p>
            </div>
          </div>
        </div>

        {/* Detalhes adicionais */}
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Período:</strong> 23 de agosto de 1942 – 2 de fevereiro de 1943</li>
          <li><strong>Local:</strong> Stalingrado, União Soviética (atual Volgogrado, Rússia)</li>
          <li><strong>Resultado:</strong> Vitória decisiva da União Soviética</li>
          <li><strong>Mortes:</strong> Entre 1,8 e 2 milhões de baixas</li>
        </ul>
      </div>
    </div>
  );
}

import Image from 'next/image'; // Para otimizar imagens no Next.js

export default function HastingsCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
      {/* Cabeçalho */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-semibold text-gray-800">Batalha de Hastings</h2>
        <p className="text-sm text-gray-500 italic">Parte da Conquista Normanda</p>
      </div>

      {/* Imagem */}
      <div className="flex justify-center mb-4">
        <Image
          src="/placeholders/hastings-landpage.jpg" // Substitua pela URL real da imagem
          alt="Batalha de Hastings"
          layout="intrinsic"  // Ajusta a imagem para seu tamanho original
          width={800}  // Largura original (substitua por valores reais)
          height={500} // Altura original (substitua por valores reais)
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Explicação da Imagem */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600 italic">
          "Harold Rex Interfectus Est": A famosa frase da Tapeçaria de Bayeux, retratando a morte do rei Harold.
        </p>
      </div>

      {/* Países que se enfrentaram */}
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-center font-medium text-gray-700">Países Envolvidos</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="font-normal text-gray-700">Ducado da Normandia</p>
          </div>
          <div className="text-center">
            <p className="font-normal text-gray-700">Reino da Inglaterra</p>
          </div>
        </div>
      </div>
    </div>
  );
}

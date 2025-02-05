'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importando o useRouter
import { wars } from '@/data/wars'; // Atualize o caminho conforme necessário
import { motion } from 'framer-motion'; // Importando o framer-motion
import Link from 'next/link'; // Importando o Link do Next.js

export default function Wars() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter(); // Inicializando o useRouter

  const filteredWars = wars.filter((war) =>
    war.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 text-center">Guerras Históricas</h1>

      {/* Botão de Voltar */}
      <button
        onClick={() => router.back()} // Usando router.back() para navegar para a página anterior
        className="fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-md shadow-md text-sm hover:bg-blue-700 transition"
      >
        Voltar
      </button>


      {/* Caixa de Pesquisa */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquisar conflitos..."
          className="border border-gray-300 p-2 rounded-lg w-1/2"
        />
      </div>

      {/* Lista de Guerras em grade com animações */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWars.length > 0 ? (
          filteredWars.map((war, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col" // Adicionado flex e flex-col
              initial={{ opacity: 0, y: 20 }} // Animação inicial
              animate={{ opacity: 1, y: 0 }} // Animação final
              transition={{ duration: 0.5, delay: index * 0.2 }} // Transição suave
            >
              <img
                src={war.image}
                alt={war.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex-grow"> {/* Flex-grow para empurrar o botão */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{war.title}</h2>
                <p className="text-base text-gray-600 mb-4">{war.description}</p>
              </div>
              {/* Botão fixo no final */}
              <Link
                href={`pages/warspages/${war.slug}`} // Usando uma propriedade 'slug' definida previamente no objeto 'war'
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 mt-auto"
              >
                Saiba mais sobre
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-600 col-span-full">
            Nenhum conflito encontrado.
          </p>
        )}
      </div>
    </div>
  );
}

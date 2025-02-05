'use client';

import { useState } from 'react';
import Link from 'next/link';
import { battles } from '@/data/battles'; // Atualize o caminho conforme necessário
import { motion } from 'framer-motion'; // Importando o framer-motion

export default function Battles() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBattles = battles.filter((battle) =>
    battle.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 text-center">Batalhas Históricas</h1>

      {/* Botão de Voltar */}
      <button
        onClick={() => window.history.back()} // Voltar para a página anterior
        className="fixed top-2 left-4 p-2 bg-blue-600 text-white rounded-md shadow-md text-sm hover:bg-blue-700 transition z-50"
      >
        Voltar
      </button>

      {/* Caixa de Pesquisa */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquisar batalhas..."
          className="border border-gray-300 p-2 rounded-lg w-1/2"
        />
      </div>

      {/* Lista de Batalhas com animações */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBattles.length > 0 ? (
          filteredBattles.map((battle, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col" // Adicionado flex e flex-col
              initial={{ opacity: 0, y: 20 }}  // Animação inicial
              animate={{ opacity: 1, y: 0 }}   // Animação final
              transition={{ duration: 0.5, delay: index * 0.2 }}  // Transição suave
            >
              <img
                src={battle.image}
                alt={battle.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex-grow"> {/* Flex-grow para expandir e empurrar o botão */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{battle.title}</h2>
                <p className="text-base text-gray-600 mb-4">{battle.description}</p>
              </div>
              {/* Botão "Saiba mais sobre" fixado no final */}
              <Link
                href={`pages/battlespages/${battle.title.split(' ').pop()?.toLowerCase()}`} // Usando o último nome da batalha
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 mt-auto"
              >
                Saiba mais sobre
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-600 col-span-full">
            Nenhuma batalha encontrada.
          </p>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { generals } from '../../data/generals'; // Importando os dados
import Footer from '../../components/footer';
import Link from 'next/link';
import PeriodCard from '../../components/periodcard'; // Importando o novo componente
import { AnimatePresence, motion } from 'framer-motion'; // Importando o AnimatePresence
import { periods } from '../../data/periods'; // Certifique-se de importar os períodos
import Image from 'next/image'; // Importando o componente Image do Next.js

export default function LeadersPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>(''); // Garantir que seja uma string
  const [selectedNation, setSelectedNation] = useState<string>(''); 
  const [searchQuery, setSearchQuery] = useState<string>(''); // Estado para a barra de pesquisa
  const [isClient, setIsClient] = useState(false); // Controle para garantir que o código seja executado apenas no cliente

  useEffect(() => {
    setIsClient(true); // Apenas ativa no lado do cliente
  }, []);

  const filteredGenerals = generals.filter((general) => {
    return (
      (selectedPeriod === '' || general.period === selectedPeriod) &&
      (selectedNation === '' || general.nation === selectedNation) &&
      (general.name.toLowerCase().includes(searchQuery.toLowerCase())) // Filtrando pelo nome
    );
  });

  const handleResetFilters = () => {
    setSelectedPeriod('');
    setSelectedNation('');
    setSearchQuery(''); // Limpar o campo de pesquisa ao resetar os filtros
  };

  // Definindo as imagens para cada período histórico
  const periodImages: Record<string, string> = {
    'Guerra Civil Russa': '/placeholders/guerra-civil-russa.jpg',
    // Adicione mais períodos e suas imagens aqui
  };

  // Função para buscar a descrição do período selecionado
  const getPeriodDescription = (selectedPeriod: string) => {
    const period = periods.find((p) => p.name === selectedPeriod);
    return period ? period.description : '';
  };

  const renderPeriodCard = () => {
    if (!selectedPeriod) return null;

    const periodImage = periodImages[selectedPeriod] || '/placeholders/placeholder.jpg'; // Imagem padrão caso não haja correspondência
    const periodDescription = getPeriodDescription(selectedPeriod); // Obtém a descrição

    return (
      <AnimatePresence>
        <motion.div
          key="period-card" // Chave única para o PeriodCard
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PeriodCard 
            period={selectedPeriod} 
            imageUrl={periodImage} 
            description={periodDescription} // Passando a descrição correta
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Botão de Voltar */}
      {isClient && (
        <button
        onClick={() => window.history.back()} // Voltar para a página anterior
        className="fixed top-2 left-4 p-2 bg-blue-600 text-white rounded-md shadow-md text-sm hover:bg-blue-700 transition z-50"
      >
        Voltar
      </button>
      )}

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Líderes Militares
        </h1>

        {/* Barra de Pesquisa */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Pesquisar Generais..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-400 w-3/4 md:w-1/2 transition duration-200 ease-in-out placeholder:text-gray-400"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {/* Filtro de Período */}
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:ring-2 focus:ring-blue-400 w-64 transition duration-200 ease-in-out"
          >
            <option value="">Todos os períodos</option>
            <option value="Guerra Civil Russa">Guerra Civil Russa</option>
            {/* Adicione outros períodos aqui */}
          </select>

          {/* Filtro de Facção */}
          <select
            value={selectedNation}
            onChange={(e) => setSelectedNation(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg shadow-md bg-white focus:ring-2 focus:ring-blue-400 w-64 transition duration-200 ease-in-out"
          >
            <option value="">Todas as facções</option>
            <option value="Exército Vermelho">Exército Vermelho</option>
            <option value="Exército Branco">Exército Branco</option>
          </select>

          {/* Botão de Resetar Filtros */}
          <button
            onClick={handleResetFilters}
            className="p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-200 ease-in-out"
          >
            Resetar Filtros
          </button>
        </div>

        {/* Card do Período Selecionado */}
        {renderPeriodCard()}

        {/* Lista de Generais com animação de fade e scale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredGenerals.length > 0 ? (
            filteredGenerals.map((general, index) => (
              <motion.div
                key={general.id}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }} // Adiciona delay para a animação de cada card
              >
                <div className="relative w-full h-80">
              <Image
                src={general.imageUrl || '/images/placeholder.jpg'}
                alt={`Imagem do general ${general.name}`}
                fill  
                style={{ objectFit: 'cover' }}  
                className="rounded-t-lg"
              />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-800">{general.name}</h3>
                <p className="mb-4 text-gray-600">{general.description}</p>

                {/* Botão "História" */}
                <Link
                  href={`/generalpages/${general.name ? general.name.split(" ").pop()!.toLowerCase() : 'default'}`} // Usando o último nome
                  className="inline-block py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                >
                  Ver História Completa
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              Nenhum general encontrado com os filtros aplicados.
            </p>
          )}
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

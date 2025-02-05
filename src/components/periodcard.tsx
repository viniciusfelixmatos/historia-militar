'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Importando o motion do Framer Motion
import Link from 'next/link';

interface PeriodCardProps {
  period: string;
  imageUrl: string;
  description?: string; // Agora é opcional
}

const PeriodCard: React.FC<PeriodCardProps> = ({ period, imageUrl, description }) => {
  return (
    <motion.div
      className="period-card p-6 rounded-lg shadow-md mb-8"
      style={{
        backgroundImage: `url(${imageUrl})`, // Aplica a imagem como fundo
        backgroundSize: 'cover', // A imagem cobre toda a área da div
        backgroundPosition: 'center', // A imagem fica centralizada
      }}
      initial={{ opacity: 0, y: 20 }} // Inicializa com opacidade 0 e um deslocamento no eixo Y
      animate={{ opacity: 1, y: 0 }}  // Anima para opacidade 1 e sem deslocamento
      exit={{ opacity: 0, y: 100, scale: 0.8 }} // Quando sair, grande deslocamento no eixo Y, diminui a opacidade e escala
      transition={{ 
        opacity: { duration: 0.5 }, // A opacidade vai durar 0.5s
        y: { duration: 0.6 }, // O movimento no eixo Y vai durar 0.6s
        scale: { duration: 0.5 }, // A escala vai durar 0.5s
      }}  // Define a duração das animações
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        {/* Título do período */}
        <h3 className="text-4xl font-extrabold text-white mb-4 shadow-md">{period}</h3>

        {/* Descrição do período */}
        <p className="text-xl mb-6 text-white leading-relaxed font-medium">
          {description}
        </p>

        {/* Link estilizado */}
        <Link
          href="/wars"
          className="inline-block py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          Explorar
        </Link>
      </div>
    </motion.div>
  );
};

export default PeriodCard;

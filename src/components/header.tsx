'use client';

import { motion } from 'framer-motion'; // Importando o motion do Framer Motion

export default function Header() {
  return (
    <header
      className="bg-dark-gray text-light-beige h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/header-background.jpg')" }}
    >
      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center relative z-10 animate-fade-in">
        {/* Título com animação de fade-in e escala ao passar o mouse */}
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-white text-center leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-transform duration-1000 transform hover:scale-105"
          initial={{ opacity: 0, y: -50 }} // Começa com opacidade 0 e deslocamento para cima
          animate={{ opacity: 1, y: 0 }} // Anima para opacidade 1 e posição original
          transition={{ duration: 1 }} // Define a duração da animação
        >
          Bem-vindo à História Militar
        </motion.h1>

        {/* Descrição com animação de fade-in */}
        <motion.p 
          className="mt-6 text-lg md:text-2xl text-white text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 30 }} // Começa com opacidade 0 e deslocamento para baixo
          animate={{ opacity: 1, y: 0 }} // Anima para opacidade 1 e posição original
          transition={{ duration: 1, delay: 0.5 }} // Atraso de 0.5 segundos para a descrição
        >
          Explorando as grandes guerras, batalhas e líderes que mudaram o curso da história.
        </motion.p>
      </div>
    </header>
  );
}

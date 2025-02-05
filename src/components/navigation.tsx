'use client';

import Link from 'next/link'; 
import { useState } from 'react';
import { motion } from 'framer-motion'; // Importando o motion do Framer Motion

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-light-beige fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-3xl font-bold">História Militar</Link>
          <button
            className="text-light-beige lg:hidden"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className="hidden lg:flex space-x-6">
            {/* Links de navegação com animação ao passar o mouse */}
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/" className="hover:text-gold">Home</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/wars" className="hover:text-gold">Guerras</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/battles" className="hover:text-gold">Batalhas Históricas</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/leaders" className="hover:text-gold">Líderes Militares</Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Menu Mobile com animação de transição */}
      <motion.div
        className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white text-light-beige flex flex-col items-center py-4">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link href="/" className="py-2">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link href="/wars" className="py-2">Guerras</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link href="/battles" className="py-2">Batalhas Históricas</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link href="/leaders" className="py-2">Líderes Militares</Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}

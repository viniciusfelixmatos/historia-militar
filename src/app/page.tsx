'use client';

import Header from '../components/header';
import Link from 'next/link';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import Image from 'next/image'; // Importando o componente Image do Next.js
import { motion } from 'framer-motion'; // Importando o motion do Framer Motion

// Definindo a tipagem para o array de temas
type Theme = {
  id: number;
  title: string;
  description: string;
  path: string;
  imageUrl: string;
};

export default function HomePage() {
  const themes: Theme[] = [
    { id: 1, title: 'Guerras', description: 'Explore os conflitos que moldaram o mundo.', path: '/wars', imageUrl: '/images/war.jpg' },
    { id: 2, title: 'Batalhas Históricas', description: 'Reviva os momentos decisivos que definiram impérios.', path: '/battles', imageUrl: '/images/battles.jpg' },
    { id: 3, title: 'Líderes Militares', description: 'Conheça os estrategistas que mudaram o curso da história.', path: '/leaders', imageUrl: '/images/leaders.jpg' },
  ];

  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <Header />

      {/* Barra de Navegação */}
      <Navigation />

      {/* Seção de Temas */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          História dos Conflitos e Líderes Militares
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <motion.div
              key={theme.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col" // Flex para alinhar os itens
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Usando o componente Image do Next.js */}
              <Image
                src={theme.imageUrl}
                alt={theme.title}
                width={500} // Largura desejada
                height={300} // Altura desejada
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className="flex-grow"> {/* Adicionado flex-grow para empurrar o botão para baixo */}
                <h3 className="text-2xl font-bold mb-4">{theme.title}</h3>
                <p className="mb-4">{theme.description}</p>
              </div>
              {/* Botão fixo no final */}
              <Link
                href={theme.path}
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 text-center mt-auto"
              >
                Explore o tema →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

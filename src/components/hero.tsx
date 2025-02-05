// src/components/hero.tsx
import React from 'react';

'use client';

const Hero = () => {
  return (
    <section className="relative h-96 bg-gray-800 text-white flex items-center justify-center text-center">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}></div>

      {/* Texto sobre a imagem */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Explore a História Militar Mundial</h1>
        <p className="text-lg mb-6">Reviva os grandes conflitos, batalhas e conheça os líderes que moldaram o curso da história.</p>
        <a href="#themes" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Comece a Explorar</a>
      </div>
    </section>
  );
};

export default Hero;

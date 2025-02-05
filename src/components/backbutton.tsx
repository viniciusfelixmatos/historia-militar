'use client';

import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-4 left-4 p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
    >
      Voltar
    </button>
  );
};

export default BackButton;

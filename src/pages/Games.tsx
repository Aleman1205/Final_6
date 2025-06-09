import React from 'react';
import Container from '../components/ui/Container';

const Games: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Nuestros Juegos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Descubre nuestra colección de juegos!
        </p>
      </Container>
    </div>
  );
};

export default Games;
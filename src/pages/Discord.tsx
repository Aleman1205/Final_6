import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Discord() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <MessageCircle className="w-16 h-16 mx-auto mb-6 text-indigo-500" />
        <h1 className="text-4xl font-bold mb-6">Únete a Nuestra Comunidad en Discord</h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Conéctate con otros gamers, recibe las últimas actualizaciones y participa en la conversación dentro de nuestra vibrante comunidad de Discord.
        </p>
        <a
          href="https://discord.gg/wyx2zS56qP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Unirse al Servidor de Discord
        </a>
      </div>
      
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Eventos Comunitarios</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Participa en sesiones de juego semanales, torneos y eventos especiales organizados por nuestra comunidad.
          </p>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Discusión de Juegos</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Comparte estrategias, consejos y discute sobre tus juegos favoritos con otros jugadores apasionados.
          </p>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Canal de Soporte</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Recibe ayuda de nuestros moderadores y otros jugadores para cualquier duda relacionada con el juego.
          </p>
        </div>
      </div>
    </div>
  );
}

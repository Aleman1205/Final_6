import React from 'react';
import Container from '../components/ui/Container';

const Forums: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Foros de la Comunidad
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Bienvenido a los Foros de Mov Enterprise
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                ¡Únete a nuestra vibrante comunidad gamer! Discute estrategias, comparte experiencias y conéctate con otros jugadores.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Categorías del Foro */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Categorías Populares
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Discusión de Juegos', topics: 234, posts: 1543 },
                    { name: 'Soporte Técnico', topics: 156, posts: 892 },
                    { name: 'Eventos de la Comunidad', topics: 89, posts: 445 },
                    { name: 'Comentarios y Sugerencias', topics: 123, posts: 678 }
                  ].map((category, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {category.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {category.topics} temas · {category.posts} publicaciones
                        </p>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        Ver →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discusiones Recientes */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Discusiones Recientes
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Discusión sobre Nuevas Funciones del Juego', replies: 23, views: 156 },
                    { title: 'Guía de Consejos para Principiantes', replies: 45, views: 289 },
                    { title: 'Comentarios sobre el Evento del Fin de Semana', replies: 12, views: 98 },
                    { title: 'Reporte de Error: Problema en la Misión Principal', replies: 34, views: 167 }
                  ].map((discussion, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {discussion.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {discussion.replies} respuestas · {discussion.views} vistas
                        </p>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        Leer →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Forums;

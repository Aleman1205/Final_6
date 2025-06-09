import React from 'react';
import { Download } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const Game: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white pt-20">
      <Container className="py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl font-bold mb-6">Campus Zero</h1>
            <div className="aspect-video rounded-lg overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="Campus Zero Launch Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <img
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                alt="Game screenshot 1"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                alt="Game screenshot 2"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                alt="Game screenshot 3"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              De los mentes de Mov Enterprise llega Campus Zero, una experiencia narrativa en 2D ambientada en una versión pixelada del icónico TEC de Monterrey. Un misterioso brote de la enfermedad de pandemia se propaga en zonas de guerra, llenas de tecnología corrupta y robots fuera de control.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mientras el caos se propaga y los estudiantes desaparecen, solo un alumno verídico —sin intención alguna de ser héroe— se interpone entre el orden y la caída total. Armado con reflejos, sarcasmo y herramientas improvisadas, deberá infiltrarse en aulas bloqueadas, enfrentar máquinas hostiles y descubrir el origen del desastre.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg sticky top-24 shadow-lg">
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                alt="Game cover"
                className="rounded-lg w-full shadow-md"
              />
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Desarrolladora</span>
                <span className="font-medium">mov enterprises</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Editora</span>
                <span className="font-medium">mov enterprises</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Fecha de lanzamiento</span>
                <span className="font-medium">09/04/2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Lanzamiento inicial</span>
                <span className="font-medium">28/05/2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plataforma</span>
                <span className="font-medium">Windows</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-primary">0 MXN</div>
              <Button 
                size="lg"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold"
              >
                DESCARGAR AHORA
                <Download size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Game;
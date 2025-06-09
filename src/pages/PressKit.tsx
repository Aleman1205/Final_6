import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Download, Image, FileText, Package } from 'lucide-react';

const PressKit: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kit de Prensa
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Todo lo que necesitas saber sobre Mov Enterprise y nuestros juegos
            </p>
          </div>

          {/* Información de la Empresa */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Información de la Empresa
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Acerca de</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mov Enterprise es un estudio innovador de desarrollo de videojuegos enfocado en crear experiencias únicas que desafían los límites creativos.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fundación</h3>
                  <p className="text-gray-600 dark:text-gray-300">2023</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ubicación</h3>
                  <p className="text-gray-600 dark:text-gray-300">Monterrey, Nuevo León</p>
                </div>
              </div>
            </div>
          </section>

          {/* Último Lanzamiento */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Último Lanzamiento: Campus Zero
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fecha de Lanzamiento</h3>
                  <p className="text-gray-600 dark:text-gray-300">9 de abril de 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Plataformas</h3>
                  <p className="text-gray-600 dark:text-gray-300">Windows PC</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Género</h3>
                  <p className="text-gray-600 dark:text-gray-300">Aventura Narrativa 2D</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Descripción</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Una experiencia narrativa única en 2D ambientada en una versión pixelada del TEC de Monterrey, donde los jugadores deben sobrevivir a un misterioso brote mientras descubren la verdad detrás del caos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Descargas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Descargas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Image className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Logos y Recursos
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Descarga nuestros recursos de marca, incluidos logotipos, íconos y capturas de pantalla.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Recursos
                </Button>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Hoja Informativa
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Obtén información detallada sobre nuestra empresa y videojuegos.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Hoja
                </Button>
              </div>
            </div>
          </section>

          {/* Contacto de Prensa */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contacto de Prensa
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Para consultas de prensa, por favor contacta a:
              </p>
              <p className="text-gray-900 dark:text-white font-medium">
                press@moventerprise.com
              </p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PressKit;

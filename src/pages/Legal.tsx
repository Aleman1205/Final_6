import React from 'react';
import Container from '../components/ui/Container';
import { useLocation } from 'react-router-dom';

const Legal: React.FC = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');

  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Política de Privacidad */}
          <section id="privacy" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Política de Privacidad</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Última actualización: 15 de marzo de 2025
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. Información que Recopilamos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Recopilamos la información que nos proporcionas directamente, incluyendo:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Información de cuenta (nombre de usuario, dirección de correo electrónico)</li>
                <li>Información de perfil</li>
                <li>Progreso y preferencias del juego</li>
                <li>Datos de comunicación</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. Cómo Usamos tu Información
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Usamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Proveer y mantener nuestros servicios</li>
                <li>Mejorar la experiencia del usuario</li>
                <li>Enviar notificaciones importantes</li>
                <li>Prevenir fraudes y abusos</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                3. Política de Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Recordar tus preferencias</li>
                <li>Entender cómo utilizas nuestros servicios</li>
                <li>Proporcionar contenido personalizado</li>
                <li>Mejorar nuestros servicios</li>
              </ul>
            </div>
          </section>

          {/* Términos de Servicio */}
          <section id="terms" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Términos de Servicio</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Última actualización: 15 de marzo de 2025
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. Aceptación de los Términos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Al acceder o utilizar nuestros servicios, aceptas estar sujeto a estos Términos de Servicio.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. Responsabilidades del Usuario
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Eres responsable de:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Mantener la seguridad de tu cuenta</li>
                <li>Seguir las normas de la comunidad</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>Cumplir con las leyes aplicables</li>
              </ul>
            </div>
          </section>

          {/* Acuerdo de Licencia de Usuario Final */}
          <section id="eula" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Acuerdo de Licencia de Usuario Final (EULA)</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Última actualización: 15 de marzo de 2025
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. Concesión de Licencia
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Te concedemos una licencia limitada y no exclusiva para:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Descargar e instalar el juego</li>
                <li>Jugar para uso personal</li>
                <li>Acceder a funciones en línea</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. Restricciones
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                No puedes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Copiar o distribuir el juego</li>
                <li>Modificar o crear trabajos derivados</li>
                <li>Realizar ingeniería inversa del software</li>
                <li>Usar trampas o modificaciones no autorizadas</li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Legal;

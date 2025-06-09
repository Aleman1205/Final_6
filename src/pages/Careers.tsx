import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const positions = [
  {
    title: 'Desarrollador de Videojuegos',
    department: 'Ingeniería',
    location: 'Monterrey, NL',
    type: 'Tiempo completo',
    description: 'Buscamos un desarrollador de videojuegos apasionado para unirse a nuestro equipo y ayudar a crear experiencias de juego innovadoras.',
    requirements: [
      'Título en Ciencias de la Computación o campo relacionado',
      'Más de 3 años de experiencia en desarrollo de videojuegos',
      'Dominio de Unity o Unreal Engine',
      'Sólidos conocimientos de programación en C++ o C#',
      'Experiencia en optimización de juegos y mejora del rendimiento'
    ]
  },
  {
    title: 'Artista de Videojuegos',
    department: 'Arte',
    location: 'Monterrey, NL',
    type: 'Tiempo completo',
    description: 'Únete a nuestro equipo de arte para crear impresionantes recursos visuales para nuestros próximos juegos.',
    requirements: [
      'Portafolio que demuestre sólidas habilidades artísticas',
      'Más de 3 años de experiencia en arte para videojuegos',
      'Dominio de Maya, Blender u otro software 3D similar',
      'Experiencia en creación de texturas y mapeo UV',
      'Conocimiento de técnicas de optimización de arte para videojuegos'
    ]
  }
];

const benefits = [
  'Salario competitivo y participación accionaria',
  'Seguro médico, dental y de visión',
  'Horario laboral flexible',
  'Opciones de trabajo remoto',
  'Presupuesto para desarrollo profesional',
  'Eventos y conferencias de la industria de videojuegos'
];

const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        {/* Sección Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Únete a Nuestro Equipo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ayúdanos a crear la próxima generación de experiencias de juego. Siempre estamos buscando personas talentosas que sean apasionadas por los videojuegos y la innovación.
          </p>
        </div>

        {/* Sección de Beneficios */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            ¿Por Qué Trabajar con Nosotros?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <p className="text-gray-900 dark:text-white font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Vacantes */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Vacantes Disponibles
          </h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {position.title}
                    </h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {position.department}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="w-5 h-5 mr-2" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Competitivo
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {position.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Requisitos:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li 
                          key={reqIndex}
                          className="text-gray-600 dark:text-gray-300 flex items-center"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full sm:w-auto">
                    Postularse Ahora
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Careers;

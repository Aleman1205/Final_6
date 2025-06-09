import React from 'react';
import Container from '../components/ui/Container';
import { Award, Users, Target, Rocket } from 'lucide-react';

const milestones = [
  {
    year: '2023',
    title: 'Fundación',
    description: 'Mov Enterprise fue fundada con la visión de crear experiencias de juego innovadoras.',
  },
  {
    year: '2024',
    title: 'Primer Proyecto',
    description: 'Comenzó el desarrollo de nuestro título insignia "Campus Zero".',
  },
  {
    year: '2025',
    title: 'Lanzamiento',
    description: 'Lanzamiento exitoso de Campus Zero, alcanzando a miles de jugadores en todo el mundo.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Innovación',
    description: 'Superamos los límites en el desarrollo de videojuegos y narrativa.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Construimos relaciones sólidas con nuestros jugadores y socios.',
  },
  {
    icon: Award,
    title: 'Calidad',
    description: 'Ofrecemos experiencias de juego excepcionales que superan las expectativas.',
  },
  {
    icon: Rocket,
    title: 'Crecimiento',
    description: 'Evolucionamos y expandimos constantemente nuestros horizontes creativos.',
  },
];

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Acerca Mov Enterprise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Somos un equipo apasionado de desarrolladores, artistas y narradores dedicados a crear experiencias de juego extraordinarias que impulsan los límites de la innovación y el entretenimiento.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary/5 dark:bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Misión</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Crear experiencias de juego inmersivas que inspiren la creatividad, fomenten la comunidad y ofrezcan momentos inolvidables a jugadores de todo el mundo. Creemos en el poder de los videojuegos para conectar personas, contar historias impactantes y transformar el entretenimiento interactivo.
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Nuestra Trayectoria</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24">
                  <div className="text-xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Fabian Garza",
                position: "Líder de Proyecto / Diseño Técnico",
                description: "Dirige la visión técnica del juego, asegurando que todas las mecánicas, físicas y sistemas estén integrados y optimizados. Su enfoque es estructurar el desarrollo de forma ágil y funcional.",
                image: "/images/team/fabian.png"
              },
              {
                name: "Mauricio Campos",
                position: "Arte y Dirección Visual",
                description: "Diseñador principal del estilo pixel art de Campus Zero. Define la estética visual, crea personajes, escenarios y asegura coherencia gráfica en toda la experiencia.",
                image: "/images/team/mau.png"
              },
              {
                name: "Juan Ángel Cerda",
                position: "Arte y Dirección Visual",
                description: "Especialista en lógica de juego, responsable de los sistemas de movimiento, combate e interacción con NPCs y objetos. Desarrolla directamente en Unity con C#.",
                image: "/images/team/angel.png"
              },
              {
                name: "José Ángel Aleman",
                position: "UI/UX y Backend",
                description: "Diseñó la interfaz de usuario, el HUD y el mapa interactivo del campus. Además, implementó la conexión con Firebase para guardar el progreso y gestionar datos del jugador.",
                image: "/images/team/jose.png"
              },
              {
                name: "Luis Eduardo Cantu",
                position: "Audio, QA y Documentación",
                description: "Encargado de la ambientación sonora, efectos y pruebas funcionales. Documenta cada fase del desarrollo y lidera el control de calidad.",
                image: "/images/team/luis.png"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

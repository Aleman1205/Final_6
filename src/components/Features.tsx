import React from 'react';
import { Zap, Shield, LineChart, RefreshCw, Heart, Layers } from 'lucide-react';
import Container from './ui/Container';

const features = [
  {
    title: 'Mapa',
    description: 'Exploración profunda en un TEC interconectado, con múltiples rutas, secretos ocultos y áreas desbloqueables.',
    icon: Zap,
  },
  {
    title: 'Enfrentamientos',
    description: 'Combate 2D ágil y preciso, inspirado en Hollow Knight, con ataques cuerpo a cuerpo, habilidades especiales y enemigos desafiantes.',
    icon: Shield,
  },
  {
    title: 'Exploración con progresión por habilidades',
    description: 'Progresión basada en habilidades: desbloquea nuevas mecánicas (doble salto, dash, hackeo, etc.) para acceder a zonas previamente inaccesibles.',
    icon: LineChart,
  },
  {
    title: 'Ambietacion',
    description: 'Descubre el misterio del brote digital a través del entorno, personajes secundarios y fragmentos de datos ocultos.',
    icon: RefreshCw,
  },
  {
    title: 'ODS 3: Salud y Bienestar',
    description: 'Explora temas de salud mental y bienestar estudiantil, promoviendo la importancia del equilibrio emocional y el apoyo entre compañeros.',
    icon: Heart,
  },
  {
    title: 'Diseño visual',
    description: 'Estilo pixel art con una atmósfera tecnológica y universitaria, evocando familiaridad en un mundo transformado.',
    icon: Layers,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          TE DAMOS LA BIENVENIDA A CAMPUS ZERO
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
          Explora un TEC alternativo afectado por un brote digital. Una IA rebelde ha tomado el control, convirtiendo el campus en una zona peligrosa con robots descontrolados y aulas bloqueadas. Vive una experiencia 2D tipo soulslike con exploración, combate y toma de decisiones en cada rincón del campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
import React from 'react';
import { Mail, Phone, MessageSquare, HelpCircle, FileQuestion, Users } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const supportOptions = [
  {
    title: 'Soporte por Email',
    description: 'Recibe ayuda por correo en menos de 24 horas',
    icon: Mail,
    action: 'Enviar Email',
    link: 'mailto:support@moventerprise.com'
  },
  {
    title: 'Soporte Telefónico',
    description: 'Habla directamente con nuestro equipo de soporte',
    icon: Phone,
    action: 'Llamar Ahora',
    link: 'tel:+1234567890'
  },
  {
    title: 'Chat en Vivo',
    description: 'Chatea con nuestro equipo de soporte en tiempo real',
    icon: MessageSquare,
    action: 'Iniciar Chat',
    link: '#chat'
  },
  {
    title: 'Preguntas Frecuentes',
    description: 'Encuentra respuestas a preguntas comunes',
    icon: HelpCircle,
    action: 'Ver FAQ',
    link: '#faq'
  },
  {
    title: 'Documentación',
    description: 'Explora nuestra documentación detallada',
    icon: FileQuestion,
    action: 'Leer Docs',
    link: '#docs'
  },
  {
    title: 'Foro Comunitario',
    description: 'Conéctate con otros usuarios',
    icon: Users,
    action: 'Unirse al Foro',
    link: '/forums'
  }
];

const Support: React.FC = () => {
  return (
    <div className="py-20 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Cómo Podemos Ayudarte?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Elige entre nuestras opciones de soporte para obtener la ayuda que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-5">
                <option.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {option.description}
              </p>
              <Button
                as="a"
                href={option.link}
                variant="outline"
                className="w-full"
              >
                {option.action}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 dark:bg-gray-800 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Aún Necesitas Ayuda?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier pregunta o inquietud.
            </p>
            <Button size="lg">Contactar Equipo de Soporte</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Support;
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin } from 'lucide-react';
import Container from './ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Juegos',
      links: [
        { name: 'Ultimos lanzamientos', href: '/latest-releases' },
        { name: 'Proximamente', href: '/coming-soon' },
        { name: 'Actualizaciones del juego', href: '/game-updates' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Comunidad',
      links: [
        { name: 'Foros', href: '/forums' },
        { name: 'Discord', href: '/discord' },
        { name: 'Eventos', href: '/events' },
        { name: 'Soporte', href: '/support' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Acerca de nosotros', href: '/about' },
        { name: 'Carreras', href: '/careers' },
        { name: 'Kit de prensa', href: '/press-kit' },
        { name: 'Contacto', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de privacidad', href: '/legal#privacy' },
        { name: 'Términos del servicio', href: '/legal#terms' },
        { name: 'Política de cookies', href: '/legal#cookies' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@mov.com' },
    { icon: MapPin, text: 'Calle Sol 34, Monterrey, Nuevo León, 64000' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                Mov Enterprise
              </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Creamos experiencias de juego inmersivas que impulsan los límites de la innovación y el entretenimiento.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center text-gray-500 dark:text-gray-400">
                  <item.icon size={18} className="mr-2 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 dark:border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Mov Enterprise. Derechos Reservados.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
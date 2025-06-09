import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';
import Container from '../components/ui/Container';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Cuenta",
    question: "¿Cómo creo una cuenta nueva?",
    answer: "Para crear una cuenta nueva, haz clic en el botón 'Sign Up' en la esquina superior derecha. Completa el formulario con tu correo electrónico y contraseña. Recibirás un correo de confirmación para activar tu cuenta."
  },
  {
    category: "Cuenta",
    question: "¿Cómo recupero mi contraseña?",
    answer: "Si olvidaste tu contraseña, haz clic en 'Forgot password' en la página de inicio de sesión. Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña."
  },
  {
    category: "Servicios",
    question: "¿Qué incluye la membresía premium?",
    answer: "La membresía premium incluye acceso anticipado a nuevos juegos, contenido exclusivo, eventos especiales y descuentos en la tienda. También recibirás soporte prioritario y recompensas mensuales."
  },
  {
    category: "Servicios",
    question: "¿Puedo jugar sin conexión a internet?",
    answer: "Sí, la mayoría de nuestros juegos pueden jugarse sin conexión una vez descargados. Sin embargo, algunas funciones como el multijugador y las clasificaciones requieren conexión a internet."
  },
  {
    category: "Precios",
    question: "¿Cuánto cuesta el juego?",
    answer: "Campus Zero es gratuito para jugar. Sin embargo, ofrecemos contenido adicional y cosméticos que pueden comprarse en la tienda del juego."
  },
  {
    category: "Precios",
    question: "¿Hay reembolsos disponibles?",
    answer: "Ofrecemos reembolsos dentro de los 14 días posteriores a la compra si el juego se ha jugado menos de 2 horas. Cada caso se evalúa individualmente."
  },
  {
    category: "Soporte",
    question: "¿Cómo reporto un error en el juego?",
    answer: "Puedes reportar errores a través de nuestro sistema de soporte en el juego o enviando un correo a support@moventerprise.com. Include screenshots y detalles del problema."
  },
  {
    category: "Soporte",
    question: "¿Cuál es el tiempo de respuesta del soporte técnico?",
    answer: "Nuestro equipo de soporte responde dentro de 24 horas en días hábiles. Los usuarios premium reciben respuesta prioritaria dentro de 4 horas."
  },
  {
    category: "General",
    question: "¿En qué plataformas está disponible el juego?",
    answer: "Actualmente, Campus Zero está disponible para Windows PC. Estamos trabajando en versiones para otras plataformas que se anunciarán próximamente."
  },
  {
    category: "General",
    question: "¿Hay eventos especiales en el juego?",
    answer: "Sí, organizamos eventos especiales regularmente, incluyendo torneos, desafíos temporales y eventos temáticos. Mantente atento a nuestras redes sociales para anuncios."
  }
];

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['all', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (index: number) => {
    const newExpandedItems = new Set(expandedItems);
    if (expandedItems.has(index)) {
      newExpandedItems.delete(index);
    } else {
      newExpandedItems.add(index);
    }
    setExpandedItems(newExpandedItems);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>

          {/* Search and Categories */}
          <div className="mb-8 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar preguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  {expandedItems.has(index) ? (
                    <ChevronUp className="flex-shrink-0 text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="flex-shrink-0 text-gray-400" size={20} />
                  )}
                </button>
                {expandedItems.has(index) && (
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Back to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={24} />
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
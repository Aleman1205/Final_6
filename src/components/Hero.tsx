import React from 'react';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Campus <span className="text-primary">Zero</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              La unica materia es sobrevivir.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Descargar Ahora
                <Download className="ml-2 inline-block transition-transform group-hover:translate-y-1" size={20} />
              </Button>
              <Link 
                to="/game"
                     className="inline-block px-6 py-3 text-lg font-semibold border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">Conoce Mas
              </Link>

            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                alt="Gaming setup with neon lights"
                className="rounded-lg shadow-xl z-10 relative"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-secondary/10 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
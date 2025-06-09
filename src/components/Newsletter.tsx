import React, { useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    // For now, we'll just show a success message
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 bg-primary/5 dark:bg-gray-800">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Mantente actualizado con nuestras noticias
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Recibe las últimas noticias, consejos e información directamente en tu correo.
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
              <p className="text-green-700 dark:text-green-300 font-medium">
              ¡Gracias por suscribirte! Revisa tu correo para confirmar tu suscripción.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
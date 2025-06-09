import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Correo',
    content: 'contact@mov.com',
    description: 'Respuesta dentro de 24 horas',
  },
  {
    icon: Phone,
    title: 'Telefono',
    content: '+52 8123232452',
    description: 'Lunes - Viernes, 9am-6pm PST',
  },
  {
    icon: MapPin,
    title: 'Direccion',
    content: 'Gaming District, Silicon Valley, CA',
    description: 'Visitanos con cita previa',
  },
  {
    icon: Clock,
    title: 'Horas laborales',
    content: 'Lunes - Viernes',
    description: '9:00 AM - 6:00 PM PST',
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contáctanos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            ¿Tienes dudas? Nos encantaría escucharte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-900 dark:text-white font-medium mb-1">
                  {item.content}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                Hemos recibido tu mensaje y te responderemos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
                  >
                     <option value="">Selecciona un asunto</option>
                    <option value="general">Consulta general</option>
                    <option value="support">Soporte técnico</option>
                    <option value="business">Colaboración comercial</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                Enviar mensaje
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
import React from 'react';
import Container from './ui/Container';

const testimonials = [
  {
    quote: "Working with this team completely transformed our online presence. The results exceeded our expectations in every way.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "The website they built for us has significantly increased our conversion rates and improved our customer engagement.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "Their attention to detail and focus on user experience made all the difference. Highly recommended!",
    author: "Emma Rodriguez",
    role: "Founder, ArtisanCraft",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const companyLogos = [
  { name: "Company 1", logo: "https://placeholder.pics/svg/150x50/DEDEDE/555555/company%201" },
  { name: "Company 2", logo: "https://placeholder.pics/svg/150x50/DEDEDE/555555/company%202" },
  { name: "Company 3", logo: "https://placeholder.pics/svg/150x50/DEDEDE/555555/company%203" },
  { name: "Company 4", logo: "https://placeholder.pics/svg/150x50/DEDEDE/555555/company%204" },
  { name: "Company 5", logo: "https://placeholder.pics/svg/150x50/DEDEDE/555555/company%205" },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Confiado por empresas líderes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
          Mira lo que nuestros clientes dicen sobre su experiencia trabajando con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Confiado por empresas innovadoras de todo el mundo
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {companyLogos.map((company, index) => (
              <img 
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-8 sm:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
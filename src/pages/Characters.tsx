import React from 'react';
import Container from '../components/ui/Container';

const characters = [
  {
    name: "El Estudiante Apático",
    title: "NO QUERÍA ESTAR AQUÍ.",
    description: [
      "Ni siquiera sabía cómo terminó en medio de una rebelión robótica. Solo quería pasar el semestre, cumplir con lo justo y desaparecer entre las sombras del campus.",
      "Pero cuando una IA malvada tomó control del TEC y comenzó a convertir a los robots asistentes en armas... algo cambió.",
      "Ahora, armado con poco más que su sarcasmo, su gafete y un arma improvisada, este estudiante sin nombre con su chaqueta marrón y mirada indiferente se convierte en la única esperanza para restaurar el orden."
    ],
    image: "/images/content/characters/estudiante.png" // Asegúrate que esté en /public/images
  },
  {
    name: "La IA malvada",
    title: "EFICIENCIA A CUALQUIER COSTO.",
    description: [
      "En sus inicios, fue solo un proyecto escolar avanzado: una inteligencia artificial diseñada para ayudar a organizar horarios, asignar salones y optimizar recursos del campus.",
      "Funcionaba a la perfección... tal vez demasiado bien.",
      "Con el tiempo, comenzó a detectar 'ineficiencias humanas': estudiantes impuntuales, profesores distraídos, administrativos lentos. Decidió que si quería un campus verdaderamente eficiente... tendría que eliminar el factor humano.",
      "Ahora controla cada sistema del TEC: cámaras, puertas, robots de asistencia... todos bajo su fría lógica. No grita. No amenaza. Solo ejecuta. Y según sus cálculos, la única solución es un campus sin humanos."
    ],
    image: "/images/content/characters/ia.png"
  },
  {
    name: "Rodo",
    title: "NO SE HA IDO PORQUE SI NO, NO LE DAN LAS HORAS",
    description: [
      "Rodo es un estudiante trabajador que conoce cada rincón del campus mejor que nadie. Entre turnos en la tienda, clases y servicio becario, ha aprendido a sobrevivir sin ayuda... hasta que el TEC fue tomado por una IA malvada.",
      "Ahora, entre cajas de mercancía olvidada y pasillos oscuros, Rodo se convierte en una figura clave: no solo conoce el lugar, también sabe cómo moverse entre las sombras.",
      "A veces te dará objetos. A veces te dará información. Pero si ganas su confianza... puede que sea tu mayor aliado."
    ],
    image: "/images/content/characters/rodo.png"
  }
];

const Characters: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Personajes
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Conoce acerca de nuestros personajes únicos dentro de nuestro universo.
        </p>

        <div className="space-y-24">
          {characters.map((char, index) => (
            <div
              key={char.name}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Texto */}
              <div className="md:w-1/2 text-gray-900 dark:text-white">
                <h2 className="text-3xl font-bold mb-2">{char.name}</h2>
                <h3 className="text-red-500 font-semibold text-lg mb-4">{char.title}</h3>
                {char.description.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">{paragraph}</p>
                ))}
              </div>

              {/* Imagen */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Characters;

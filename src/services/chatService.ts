export interface ChatMessage {
  text: string;
  isBot: boolean;
}

interface ResponseRule {
  keywords: string[];
  response: string;
}

const RESPONSE_RULES: Record<string, ResponseRule[]> = {
  general: [
    {
      keywords: ['trata', 'que es', 'campus zero'],
      response: 'Campus Zero es un juego 2D narrativo ambientado en una versión pixelada del TEC de Monterrey. En el juego, deberás enfrentar un misterioso brote digital mientras exploras el campus y resuelves enigmas.'
    },
    {
      keywords: ['empiezo', 'comenzar', 'jugar'],
      response: 'Para empezar a jugar Campus Zero, simplemente descarga el juego desde nuestra página principal y sigue las instrucciones de instalación. ¡Es gratis!'
    },
    {
      keywords: ['cuesta', 'precio', 'valor'],
      response: 'Campus Zero es completamente gratuito para jugar. Puedes descargarlo y disfrutarlo sin costo alguno.'
    },
    {
      keywords: ['contactar', 'soporte', 'ayuda'],
      response: 'Puedes contactar a nuestro equipo de soporte enviando un correo a support@moventerprise.com o visitando nuestra sección de Soporte.'
    }
  ],
  technical: [
    {
      keywords: ['rendimiento', 'fps', 'lento'],
      response: 'Para mejorar el rendimiento, asegúrate de tener los últimos drivers de tu tarjeta gráfica y cierra aplicaciones en segundo plano. También puedes ajustar la configuración gráfica en el menú de opciones.'
    },
    {
      keywords: ['guardar', 'partida', 'save'],
      response: 'El juego guarda automáticamente tu progreso en puntos específicos. Si experimentas problemas, verifica que tengas espacio suficiente en disco y que tu antivirus no esté bloqueando el proceso.'
    },
    {
      keywords: ['conexión', 'internet', 'online'],
      response: 'Si tienes problemas de conexión, verifica tu conexión a internet, reinicia el juego y el router. Si el problema persiste, intenta usar una conexión por cable en lugar de WiFi.'
    },
    {
      keywords: ['bug', 'error', 'fallo'],
      response: 'Para reportar un bug, toma una captura de pantalla del error, describe los pasos para reproducirlo y envíalo a través de nuestro formulario de reporte de bugs en la sección de Soporte.'
    }
  ],
  gameplay: [
    {
      keywords: ['principiante', 'empezar', 'consejos'],
      response: 'Como principiante, te recomiendo explorar el campus con cuidado, hablar con todos los NPCs y practicar el sistema de combate en áreas seguras. No olvides guardar tu progreso frecuentemente.'
    },
    {
      keywords: ['jefe', 'boss', 'derrotar'],
      response: 'Para derrotar al primer jefe, debes aprender sus patrones de ataque. Usa el dash para esquivar sus ataques eléctricos y ataca durante las pausas entre sus movimientos.'
    },
    {
      keywords: ['secreto', 'objeto', 'ubicación'],
      response: 'Los objetos secretos suelen estar ocultos detrás de paredes destruibles o en áreas que requieren habilidades específicas para acceder. Presta atención a las pistas visuales en el entorno.'
    },
    {
      keywords: ['habilidad', 'poder', 'skill'],
      response: 'Las habilidades se desbloquean progresivamente al derrotar jefes y completar misiones. Cada habilidad puede ser mejorada usando los puntos de experiencia que ganas al derrotar enemigos.'
    }
  ]
};

export const generateResponse = async (
  messages: ChatMessage[],
  context: keyof typeof RESPONSE_RULES = 'general'
): Promise<string> => {
  const userMessage = messages[messages.length - 1].text.toLowerCase();
  const rules = RESPONSE_RULES[context];

  // Find matching rule
  const matchingRule = rules.find(rule =>
    rule.keywords.some(keyword => userMessage.includes(keyword))
  );

  if (matchingRule) {
    return matchingRule.response;
  }

  // Default responses for each context
  const defaultResponses = {
    general: "Lo siento, no entendí tu pregunta. ¿Podrías reformularla o elegir una de las opciones sugeridas?",
    technical: "No reconozco ese problema técnico. Por favor, describe el problema con más detalle o elige una de las opciones de soporte.",
    gameplay: "No tengo información específica sobre eso. ¿Te gustaría conocer algunos consejos generales sobre el juego?"
  };

  return defaultResponses[context];
};
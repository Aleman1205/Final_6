import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Minimize2, Send, Bot, Wrench, Gamepad2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import QuickReply from './QuickReply';
import { generateResponse, ChatMessage as ChatMessageType } from '../../services/chatService';

const quickReplies = {
  general: [
    '¿De qué trata Campus Zero?',
    '¿Cómo empiezo a jugar?',
    '¿Cuánto cuesta el juego?',
    'Contactar soporte',
  ],
  technical: [
    'Problemas de rendimiento',
    'Error al guardar partida',
    'Problemas de conexión',
    'Reportar un bug',
  ],
  gameplay: [
    'Consejos para principiantes',
    'Cómo derrotar al primer jefe',
    'Ubicación de objetos secretos',
    'Guía de habilidades',
  ],
};

type ChatContext = 'general' | 'technical' | 'gameplay';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ChatContext>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: '¡Hola! ¿En qué puedo ayudarte hoy?', isBot: true }]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newMessage = { text, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await generateResponse([...messages, newMessage], context);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        text: "Lo siento, hubo un error. Por favor, intenta de nuevo.",
        isBot: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickReply = (text: string) => {
    handleSend(text);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
  };

  const switchContext = (newContext: ChatContext) => {
    setContext(newContext);
    setMessages([{
      text: `¡Hola! Ahora estoy en modo ${
        newContext === 'general' ? 'asistente general' :
        newContext === 'technical' ? 'soporte técnico' : 'guía de juego'
      }. ¿En qué puedo ayudarte?`,
      isBot: true
    }]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && !isMinimized ? (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-xl w-[350px] max-w-[calc(100vw-2rem)]">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Asistente Virtual</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={minimizeChat}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => switchContext('general')}
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                  context === 'general' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <Bot size={14} />
                General
              </button>
              <button
                onClick={() => switchContext('technical')}
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                  context === 'technical' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <Wrench size={14} />
                Técnico
              </button>
              <button
                onClick={() => switchContext('gameplay')}
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                  context === 'gameplay' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <Gamepad2 size={14} />
                Gameplay
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isBot={msg.isBot}
              />
            ))}
            {isTyping && <ChatMessage message="\" isBot={true} isTyping={true} />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 overflow-x-auto">
            <div className="flex gap-2">
              {quickReplies[context].map((reply, index) => (
                <QuickReply
                  key={index}
                  text={reply}
                  onClick={() => handleQuickReply(reply)}
                />
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
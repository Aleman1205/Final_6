import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isTyping?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot, isTyping }) => {
  return (
    <div className={`flex items-start gap-2 mb-4 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-primary/10 text-primary' : 'bg-gray-100 dark:bg-gray-700'
      }`}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className={`max-w-[75%] rounded-lg px-4 py-2 ${
        isBot 
          ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white' 
          : 'bg-primary text-white'
      }`}>
        {isTyping ? (
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
        ) : (
          <p className="text-sm">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
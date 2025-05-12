import React from 'react';
import { User } from 'lucide-react';

export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

interface ChatMessageProps {
  message: MessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div 
      className={`flex w-full mb-4 animate-fade-in ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      <div 
        className={`flex max-w-[80%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div 
          className={`flex items-center justify-center h-8 w-8 rounded-full shrink-0 ${
            isUser ? 'ml-2 bg-blue-500' : 'mr-2 bg-purple-500'
          }`}
        >
          {isUser ? (
            <User size={18} className="text-white" />
          ) : (
            <span className="text-white font-semibold">LB</span>
          )}
        </div>
        
        <div>
          <div 
            className={`p-3 rounded-2xl ${
              isUser 
                ? 'bg-blue-500 text-white rounded-tr-none' 
                : 'bg-gray-200 text-gray-800 rounded-tl-none'
            }`}
          >
            <p className="text-sm md:text-base">{message.content}</p>
          </div>
          <p className={`text-xs mt-1 text-gray-500 ${
            isUser ? 'text-right' : 'text-left'
          }`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
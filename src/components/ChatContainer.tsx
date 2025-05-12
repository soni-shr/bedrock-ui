import React, { useState, useEffect, useRef } from 'react';
import ChatMessage, { MessageType } from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';

const INITIAL_MESSAGES: MessageType[] = [
  {
    id: '1',
    content: 'Hello! I\'m lagBuster, your AI assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date(),
  }
];

// Simulated responses
const BOT_RESPONSES = [
  "I'm lagBuster, an AI assistant designed to help answer your questions.",
  "That's an interesting question. Let me think about that...",
  "I can help with information on a wide range of topics.",
  "I'm designed to be helpful, harmless, and honest in my responses.",
  "I don't have personal experiences, but I can provide information based on my training data.",
  "I'm always learning and trying to improve my responses.",
  "Is there anything specific you'd like to know more about?",
  "Thanks for chatting with me today!",
  "I can assist with writing, information lookup, creative ideas, and more.",
  "I aim to provide balanced, nuanced perspectives on complex topics."
];

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * BOT_RESPONSES.length);
    return BOT_RESPONSES[randomIndex];
  };

  const simulateTyping = (callback: () => void) => {
    // Random typing time between 1 and 3 seconds
    const typingTime = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(callback, typingTime);
  };

  const handleSendMessage = (content: string) => {
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate AI thinking and typing
    simulateTyping(() => {
      const botMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: getRandomResponse(),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    });
  };

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white">
      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <h2 className="text-xl font-bold">lagBuster Chat Assistant</h2>
        <p className="text-sm opacity-80">Ask me anything</p>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
        <div className="space-y-2">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <ChatInput 
        onSendMessage={handleSendMessage} 
        disabled={isTyping}
      />
    </div>
  );
};

export default ChatContainer;
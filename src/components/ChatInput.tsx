import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center p-3 border-t border-gray-200 bg-white rounded-b-lg shadow-sm"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
        className="flex-grow px-4 py-2 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className={`ml-2 p-2 rounded-full transition-all duration-200 ${
          message.trim() && !disabled
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;
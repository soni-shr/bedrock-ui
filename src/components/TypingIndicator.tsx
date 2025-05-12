import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 p-3 mb-4 w-fit rounded-2xl bg-gray-200 text-gray-800 rounded-tl-none">
      <div className="flex space-x-1">
        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <span className="text-sm text-gray-500 font-medium">lagBuster is thinking</span>
    </div>
  );
};

export default TypingIndicator;
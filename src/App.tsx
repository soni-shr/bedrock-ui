import React from 'react';
import ChatContainer from './components/ChatContainer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[600px] md:h-[700px]">
        <ChatContainer />
      </div>
      <footer className="mt-4 text-sm text-center text-gray-500">
        <p>© 2025 AI Chat Assistant. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
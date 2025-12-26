import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl text-white font-light mb-8 animate-pulse">
          Bienvenido
        </h1>
        <div className="w-64 h-1 bg-gray-800 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 50%; margin-left: 25%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loading;
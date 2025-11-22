import React from 'react';

const NeuralButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <button className="pointer-events-auto group relative px-8 py-4 bg-black overflow-hidden clip-path-polygon border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] hover:border-cyan-400">
        
        {/* Hover Background Slide */}
        <div className="absolute inset-0 bg-cyan-900 transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 opacity-50"></div>
        
        {/* Text Content */}
        <div className="relative flex items-center space-x-3 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-lg md:text-xl font-bold text-white font-['Orbitron'] tracking-wider group-hover:text-cyan-100">
            JOIN THE NEURAL NETWORK
          </span>
        </div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500"></div>
      </button>
    </div>
  );
};

export default NeuralButton;
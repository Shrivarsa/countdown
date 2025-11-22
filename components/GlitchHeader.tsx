import React from 'react';

const GlitchHeader: React.FC = () => {
  return (
    <header className="relative z-10 w-full py-8 text-center border-b border-cyan-900/50 bg-black/80 backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      <h1 
        className="glitch-text text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-600 uppercase tracking-widest font-['Orbitron'] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        data-text="METAVERSE HACKATHON 2025"
      >
        METAVERSE HACKATHON 2025
      </h1>
      
      <div className="mt-2 flex items-center justify-center space-x-4">
        <span className="h-px w-12 bg-red-500 animate-pulse"></span>
        <p className="text-red-500 tracking-[0.5em] text-sm md:text-base font-bold animate-pulse">
          SYSTEM_OVERRIDE_INITIATED
        </p>
        <span className="h-px w-12 bg-red-500 animate-pulse"></span>
      </div>
    </header>
  );
};

export default GlitchHeader;
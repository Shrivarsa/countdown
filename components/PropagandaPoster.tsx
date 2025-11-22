import React from 'react';

const PropagandaPoster: React.FC = () => {
  return (
    <div className="relative group w-full max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
      {/* Lighting effect */}
      <div className="absolute -top-20 -left-10 w-60 h-60 bg-red-600 blur-[100px] opacity-20 pointer-events-none mix-blend-screen"></div>

      {/* Frame */}
      <div className="relative border-4 border-gray-800 bg-gray-900 p-2 shadow-2xl">
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] opacity-30 z-20 pointer-events-none"></div>
        
        {/* Tape marks */}
        <div className="absolute -top-3 left-1/2 w-12 h-6 bg-yellow-100/20 transform -translate-x-1/2 rotate-2 z-30 backdrop-blur-sm"></div>
        <div className="absolute -bottom-3 right-10 w-12 h-6 bg-yellow-100/20 transform -rotate-3 z-30 backdrop-blur-sm"></div>

        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[3/4] bg-black">
           {/* Placeholder Image with Filters */}
           <img 
            src="https://picsum.photos/600/800?grayscale" 
            alt="Propaganda" 
            className="w-full h-full object-cover contrast-125 brightness-75 sepia-[0.5] group-hover:scale-105 transition-transform duration-700 ease-out"
           />
           
           {/* Overlaid Text / Graphic Design */}
           <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 border-8 border-double border-red-600/40 m-4">
             <div className="bg-red-600 text-black font-['Orbitron'] font-black text-5xl md:text-6xl px-6 py-2 mb-4 transform -skew-x-12 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
               BE
             </div>
             <div className="text-white font-['Orbitron'] font-black text-4xl md:text-5xl tracking-[0.3em] uppercase bg-black/90 px-4 py-2 border-2 border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.6)]">
               SILENT
             </div>
             
             <div className="mt-12 border-2 border-white p-2 rounded-full opacity-80">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
               </svg>
             </div>
             
             <p className="absolute bottom-8 text-xs text-center text-gray-400 font-mono w-3/4 opacity-80 tracking-widest">
               COMPLIANCE IS MANDATORY
             </p>
           </div>

           {/* Grime/Dirt Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default PropagandaPoster;
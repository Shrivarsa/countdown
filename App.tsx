import React, { useEffect, useState } from 'react';
import GlitchHeader from './components/GlitchHeader';
import CountdownTimer from './components/CountdownTimer';
import PropagandaPoster from './components/PropagandaPoster';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-gray-100 overflow-hidden scanlines selection:bg-cyan-500 selection:text-black">
      
      {/* Ambient Background Layers */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, #111827 0%, #000000 100%)`,
          transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px) scale(1.05)`
        }}
      >
        {/* Grid Texture */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)',
               backgroundSize: '50px 50px',
               maskImage: 'radial-gradient(circle, black 40%, transparent 100%)'
             }}>
        </div>
      </div>

      {/* Industrial Fog/Steam */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent z-0 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <GlitchHeader />

        <main className="flex-grow flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto p-4 lg:p-12 gap-12 lg:gap-24">
          
          {/* Left/Top: Timer Section */}
          <section className="w-full lg:w-1/2 flex flex-col items-center text-center order-2 lg:order-1">
            <div className="mb-8 space-y-2">
               <div className="flex items-center justify-center space-x-2 text-cyan-500 text-xs tracking-widest opacity-70">
                 <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                 <span>SERVER_TIME_UTC</span>
               </div>
            </div>
            
            <CountdownTimer />

            <div className="mt-8 p-4 border border-gray-800 bg-gray-900/50 backdrop-blur text-left max-w-md w-full">
              <h3 className="text-cyan-500 font-bold mb-2 uppercase text-xs tracking-wider border-b border-gray-700 pb-1">Status Log</h3>
              <ul className="text-xs font-mono text-gray-400 space-y-1">
                <li className="flex justify-between"><span>{'>'} CONNECTING_TO_MAINFRAME...</span> <span className="text-green-500">OK</span></li>
                <li className="flex justify-between"><span>{'>'} BYPASSING_FIREWALLS...</span> <span className="text-green-500">OK</span></li>
                <li className="flex justify-between"><span>{'>'} SYNCING_NEURAL_CLOCKS...</span> <span className="text-yellow-500 animate-pulse">PROCESSING</span></li>
              </ul>
            </div>
          </section>

          {/* Right/Bottom: Poster Section */}
          <section className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
            <PropagandaPoster />
          </section>

        </main>
      </div>
      
      {/* Rain Effect using simple repeating gradients for performance */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-10" 
           style={{
             backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, #444 50px, transparent 51px)`,
             backgroundSize: '100% 100px',
             animation: 'rain 2s linear infinite'
           }}>
      </div>
      <style>{`
        @keyframes rain {
          from { background-position: 0 0; }
          to { background-position: 0 100px; }
        }
      `}</style>
    </div>
  );
};

export default App;
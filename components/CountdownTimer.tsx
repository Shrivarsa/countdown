import React, { useEffect, useState } from 'react';
import { HACKATHON_DURATION_MS, startHackathon, subscribeToCountdown } from '../services/firebase';

const CountdownTimer: React.FC = () => {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(HACKATHON_DURATION_MS);
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToCountdown((val) => {
      setEndTime(val);
      setIsSyncing(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let interval: number;

    if (endTime) {
      interval = window.setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, endTime - now);
        setTimeLeft(remaining);
        
        if (remaining <= 0) {
          clearInterval(interval);
        }
      }, 100); // Update frequently for smooth milliseconds if needed, though we show seconds
    } else {
      setTimeLeft(HACKATHON_DURATION_MS);
    }

    return () => clearInterval(interval);
  }, [endTime]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    
    // Pad with zeros
    const hh = h.toString().padStart(2, '0');
    const mm = m.toString().padStart(2, '0');
    const ss = s.toString().padStart(2, '0');
    
    return { hh, mm, ss };
  };

  const { hh, mm, ss } = formatTime(timeLeft);

  const handleStart = () => {
    // In a real app, this would be protected
    startHackathon();
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-6 md:p-12 border-4 border-dashed border-lime-900/50 bg-black/60 backdrop-blur-md rounded-xl shadow-[0_0_50px_rgba(0,255,0,0.1)]">
      {/* HUD Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-lime-500"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-lime-500"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-lime-500"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-lime-500"></div>

      {/* Label */}
      <h2 className="text-lime-400 font-['Orbitron'] tracking-widest text-sm mb-4 uppercase">
        <span className="mr-2 text-lime-600">///</span> 
        Sequence Countdown 
        <span className="ml-2 text-lime-600">///</span>
      </h2>

      {/* Digits */}
      <div className="flex items-baseline space-x-2 md:space-x-6 font-['VT323'] text-7xl md:text-9xl text-lime-300 drop-shadow-[0_0_15px_rgba(100,255,100,0.8)] select-none">
        <div className="relative group">
          <span className="absolute inset-0 blur-md text-lime-500 opacity-50">{hh}</span>
          <span className="relative z-10">{hh}</span>
          <span className="block text-xs md:text-sm text-center text-lime-700 font-sans tracking-widest mt-2">HRS</span>
        </div>
        <span className="text-lime-600 animate-pulse">:</span>
        <div className="relative">
          <span className="absolute inset-0 blur-md text-lime-500 opacity-50">{mm}</span>
          <span className="relative z-10">{mm}</span>
          <span className="block text-xs md:text-sm text-center text-lime-700 font-sans tracking-widest mt-2">MIN</span>
        </div>
        <span className="text-lime-600 animate-pulse">:</span>
        <div className="relative">
          <span className="absolute inset-0 blur-md text-lime-500 opacity-50">{ss}</span>
          <span className="relative z-10">{ss}</span>
          <span className="block text-xs md:text-sm text-center text-lime-700 font-sans tracking-widest mt-2">SEC</span>
        </div>
      </div>

      {/* Decorators */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-lime-800 to-transparent mt-8 mb-4"></div>
      
      {/* Status or Start Button */}
      <div className="h-12 flex items-center justify-center">
        {isSyncing ? (
           <span className="text-lime-700 text-sm animate-pulse">SYNCHRONIZING NEURAL LINK...</span>
        ) : !endTime ? (
          <button 
            onClick={handleStart}
            className="group relative px-6 py-2 bg-transparent border border-red-600 hover:bg-red-600/20 transition-all duration-300 overflow-hidden"
          >
             <span className="absolute w-full h-[2px] top-0 left-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
             <span className="absolute w-full h-[2px] bottom-0 right-0 bg-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
             <span className="font-['Orbitron'] text-red-500 font-bold tracking-wider text-sm">
               INITIALIZE_SEQUENCE_01
             </span>
          </button>
        ) : (
           <div className="flex items-center space-x-2">
              <span className="block w-2 h-2 bg-lime-500 rounded-full animate-ping"></span>
              <span className="text-lime-500 text-xs tracking-[0.2em]">SYSTEM LIVE</span>
           </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
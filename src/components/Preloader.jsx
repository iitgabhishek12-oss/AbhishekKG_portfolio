import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress counter from 0 to 100
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400); // Slight pause at 100% before exit
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 3; // Random smooth increments
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden font-sans"
        >
          {/* Ambient Rotating Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-white via-zinc-500 to-zinc-800 rounded-full blur-[180px] opacity-15 pointer-events-none animate-pulse" />

          {/* Top Brand Indicator */}
          <div className="flex justify-between items-center relative z-10">
            <span className="text-zinc-400 font-mono text-xs tracking-[0.3em] uppercase">
              // INITIALIZING SYSTEM
            </span>
            <span className="text-zinc-500 font-mono text-xs tracking-widest">
              PORTFOLIO 2026
            </span>
          </div>

          {/* Center Cinematic Title & Live Counter */}
          <div className="flex flex-col items-center justify-center relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4">
                Sushmita <span className="text-zinc-600">Dasari</span>
              </h1>
            </motion.div>

            <p className="text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-12">
              Full-Stack AI & ML Engineer
            </p>

            {/* Massive Numbers Percentage */}
            <div className="text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-700 font-mono tracking-tighter">
              {Math.min(count, 100)}%
            </div>
          </div>

          {/* Bottom Progress Bar & Status */}
          <div className="flex flex-col gap-4 relative z-10 max-w-xl mx-auto w-full">
            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                style={{ width: `${Math.min(count, 100)}%` }}
              />
            </div>
            
            <div className="flex justify-between items-center text-[10px] md:text-xs font-mono text-zinc-500 tracking-widest uppercase">
              <span>Loading Modules...</span>
              <span>Secure Connection</span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
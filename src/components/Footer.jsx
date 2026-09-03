import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-black text-zinc-400 py-20 px-6 md:px-12 w-full font-mono text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-zinc-900 overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-zinc-200 via-zinc-600 to-zinc-800 rounded-full blur-[160px] opacity-10 pointer-events-none" />

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium relative z-10">
        <div className="flex flex-col gap-1.5">
          <p className="text-white font-bold">// Strategic Focus</p>
          <p className="text-zinc-400">Digital Marketing & Growth</p>
          <p className="text-zinc-400">SEO, Campaigns & Analytics</p>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-center">
          <p className="text-white font-bold">// Location</p>
          <p className="text-zinc-400">Tiruvannamalai & Bangalore, India</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1 text-zinc-300">View Campaigns</a>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-end">
          <p className="text-white font-bold">// Contact</p>
          <p className="text-zinc-400">+91 8015783190</p>
          <p className="text-zinc-400">{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text with Hover Glow */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden relative z-10">
        <motion.h2 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="text-[15vw] md:text-[14vw] leading-none font-black tracking-tighter uppercase select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-700 w-full text-center cursor-default"
        >
          Balaji
        </motion.h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium relative z-10">
        <div className="flex flex-col gap-4">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold text-white">Contact Transmission</a>
          <p className="text-zinc-500 font-mono text-[10px]">
            &copy; {new Date().getFullYear()} Balaji Sivakumar | Digital Marketing Manager
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:balaji07siva@gamil.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase text-zinc-300">
            balaji07siva@gamil.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 text-zinc-300">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
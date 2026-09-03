import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-black text-zinc-300 py-20 px-6 md:px-12 w-full font-mono text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-zinc-900 overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-zinc-200 via-zinc-600 to-zinc-800 rounded-full blur-[160px] opacity-10 pointer-events-none" />

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-bold relative z-10">
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm font-black tracking-wider">// Strategic Focus</p>
          <p className="text-zinc-100 font-semibold">Digital Marketing & Growth</p>
          <p className="text-zinc-200 font-semibold">SEO, Campaigns & Analytics</p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <p className="text-white text-sm font-black tracking-wider">// Location</p>
          <p className="text-zinc-100 font-semibold">Tiruvannamalai & Bangalore, India</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-2 text-zinc-100 font-semibold">View Campaigns</a>
        </div>
        
        <div className="flex flex-col gap-2 md:items-end">
          <p className="text-white text-sm font-black tracking-wider">// Connect</p>
          <div className="flex items-center gap-4 mt-1">
            {/* Instagram Link with SVG Logo */}
            <a 
              href="https://www.instagram.com/balajisivakumarr?igsi=OXB1aDdzMnk5NHgy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20"
              aria-label="Instagram Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* LinkedIn Link with SVG Logo */}
            <a 
              href="https://www.linkedin.com/in/balajisivakumarr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <p className="text-zinc-100 font-semibold mt-1">+91 8015783190</p>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-bold relative z-10">
        <div className="flex flex-col gap-4">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-2 font-black text-white text-sm">Contact Transmission</a>
          <p className="text-zinc-300 font-mono text-[11px] font-semibold">
            &copy; {new Date().getFullYear()} Balaji Sivakumar | Digital Marketing Manager
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:balaji07siva@gamil.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-2 lowercase text-zinc-100 font-semibold">
            balaji07siva@gamil.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline hover:text-white transition-colors underline-offset-4 decoration-2 text-zinc-100 font-semibold">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
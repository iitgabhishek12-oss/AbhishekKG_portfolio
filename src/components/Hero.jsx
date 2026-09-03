import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/herovideo.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out'
    });

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const section = document.getElementById('home');
          const video = videoRef.current;
          if (section && video) {
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight - window.innerHeight;
            const scrollDistance = -rect.top;
            const progress = Math.max(0, Math.min(1, scrollDistance / sectionHeight));
            
            setScrollProgress(progress);

            if (video.duration && !video.seeking) {
              video.currentTime = progress * video.duration;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTime = scrollProgress * 10;
  
  // Dynamic Title & Right-Side Message Sequence
  let currentTitle = "CREATIVE DEVELOPER";
  let rightSideHeading = "TURNING IDEAS INTO REALITY";
  let rightSideSubtext = "Available for hire. Building fast, responsive web applications using modern tech stacks.";
  
  if (currentTime > 2.5 && currentTime <= 6) {
    currentTitle = "FULL STACK DEV";
    rightSideHeading = "I BUILD SCALABLE APPLICATIONS";
    rightSideSubtext = "Specialized in high-performance web applications using React, Node.js & Tailwind CSS.";
  } else if (currentTime > 6) {
    currentTitle = "SCALABLE SYSTEMS";
    rightSideHeading = "ROBUST BACKEND ARCHITECTURE";
    rightSideSubtext = "Architecting robust backend pipelines, cloud microservices, and database optimization.";
  }

  return (
    <section id="home" className="relative w-full h-[600vh] bg-black">
      {/* Sticky viewport container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Crystal-Clear HD Video Layer with Max Sharpness & GPU Acceleration */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            filter: 'contrast(1.25) saturate(1.1) brightness(1.05)',
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)'
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* --- SPOTLIGHT LIGHTING EFFECT --- */}
        {/* 1. Bright Center Spotlight Glow to illuminate the face and middle area */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,transparent_65%)] z-10 pointer-events-none" />
        
        {/* 2. Heavy Dark Vignette around the edges (dim around, bright in center) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_85%)] z-10 pointer-events-none" />
        
        {/* 3. Deep side gradients to keep left/right text areas contrasting sharply */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 z-10 pointer-events-none" />

        {/* Main Content Layout */}
        <div className="absolute inset-0 z-25 px-6 sm:px-12 md:px-16 lg:px-20 max-w-[1440px] mx-auto flex flex-col justify-between w-full h-full py-10 pointer-events-none">
          
          {/* Top spacer */}
          <div className="w-full h-8" />

          {/* SPLIT LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-between w-full my-auto gap-8 pointer-events-auto">
            
            {/* LEFT SIDE (Span 5 columns): Name & Title */}
            <div className="lg:col-span-5 flex flex-col items-start justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-zinc-300 text-sm md:text-base font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              >
                HI, I'M <span className="text-white font-black underline decoration-white underline-offset-4">SUSHMITA</span>
              </motion.div>

              <div className="overflow-hidden py-1 min-h-[80px] sm:min-h-[110px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={currentTitle}
                    initial={{ y: 35, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -35, opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter drop-shadow-[0_10px_25px_rgba(0,0,0,0.95)]"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                      {currentTitle}
                    </span>
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>

            {/* EMPTY CENTER GAP (Span 2 columns to protect center lighting and face visibility) */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* RIGHT SIDE (Span 5 columns) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right justify-center">
              <div className="min-h-[110px] flex flex-col justify-center items-start lg:items-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rightSideHeading}
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-start lg:items-end"
                  >
                    <h3 className="text-zinc-300 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase mb-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] font-bold">
                      // {rightSideHeading}
                    </h3>
                    <p className="text-zinc-100 text-sm sm:text-base md:text-lg font-medium max-w-sm drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] leading-relaxed">
                      {rightSideSubtext}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Scroll Tip & Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 pointer-events-auto pb-2">
            <p className="text-zinc-400 text-xs tracking-widest uppercase font-medium hidden sm:block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              ↓ Scroll to scrub timeline
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a 
                href="#projects" 
                className="px-7 py-3.5 text-xs sm:text-sm rounded-full bg-white text-black font-extrabold hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] transform hover:scale-105 text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-7 py-3.5 text-xs sm:text-sm rounded-full bg-black/60 border border-white/40 text-white font-extrabold hover:bg-white/20 transition-all duration-300 backdrop-blur-xl shadow-2xl transform hover:scale-105 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
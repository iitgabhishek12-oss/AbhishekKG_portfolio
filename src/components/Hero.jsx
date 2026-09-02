import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero_video/hero_video.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Switches between play and pause states for the video
  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video - Adjusted mobile object-position to focus on the right */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-[85%_center] md:object-[center_right] z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay factor for optimized readability without completely muddying up the red tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start text-left w-full h-full pt-28 md:pt-[12%]">
        
        {/* Left Side: Text and Buttons - Shifted higher up */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I’m Aravind Durgaraj <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              Quality Engineering Leader
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            Specializing in test automation, robust CI/CD release engineering, and practical AI/LLM evaluation.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
            >
              View My Work
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>

      {/* Play/Pause Controller */}
      <div 
        data-aos="zoom-in"
        data-aos-delay="600"
        className="absolute top-32 right-12 md:top-36 md:right-20 z-30 flex flex-col items-center justify-center gap-1 cursor-pointer group"
        onClick={togglePlay}
      >
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl">
          {isPlaying ? (
            // Pause Icon
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            // Play Icon
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
            </svg>
          )}
        </div>
        <span className="text-white text-[8px] md:text-[10px] font-extrabold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          {isPlaying ? "Pause" : "Play"}
        </span>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-white opacity-70" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
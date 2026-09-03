import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to track positioning parameters safely
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Expertise', 'Skills', 'Experience', 'Certifications', 'Achievements', 'Gallery', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen 
          ? 'bg-zinc-950/95 backdrop-blur-xl py-4 border-b border-zinc-800'
          : isScrolled 
            ? 'bg-zinc-950/85 backdrop-blur-md py-3.5 border-b border-zinc-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-2xl font-black tracking-tight text-white transition-opacity duration-300 hover:opacity-80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Balaji <span className="text-zinc-400">.</span>
          </a>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex space-x-6 xl:space-x-7">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="font-semibold text-xs xl:text-sm tracking-wide relative group transition-colors duration-300 text-zinc-300 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {link}
              {/* Active underline indicator */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 bg-white/10 border border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-md shadow-2xl"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile/Tablet Hamburger Trigger */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 text-white transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            aria-label="Toggle navigation drawer menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 overflow-hidden ${
          isOpen ? 'max-h-[600px] py-6 opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white font-bold text-base border-b border-zinc-800/80 pb-2.5 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-2">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-black font-extrabold hover:bg-zinc-200 transition-all duration-300 w-full text-center shadow-xl"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
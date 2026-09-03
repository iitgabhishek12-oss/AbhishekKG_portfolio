import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import stackImage from '../assets/about/image.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative bg-black pt-36 pb-36 px-6 md:px-12 w-full overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-20">
        
        {/* Left Side: Animated Gradient Border & Animated Image Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full lg:w-[420px] shrink-0"
        >
          <div className="relative group w-full max-w-[340px]">
            {/* Smooth Rotating Multi-Color/Gradient Animated Outer Border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-zinc-200 via-zinc-600 to-white rounded-[3rem] blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 animate-spin" style={{ animationDuration: '8s' }}></div>
            
            {/* Main Portrait Frame with Subtle Floating Animation */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative bg-zinc-950 border border-zinc-800/80 rounded-[2.8rem] p-3.5 shadow-[0_35px_70px_rgba(0,0,0,0.95)] overflow-hidden"
            >
              <div className="w-full aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-zinc-900 relative">
                
                {/* Gradient Shimmer Overlay Effect on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>

                <img 
                  src={stackImage} 
                  alt="Balaji Sivakumar" 
                  className="w-full h-full object-cover filter contrast-115 grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Staggered Cinematic Text Content */}
        <div className="flex-1 text-white text-left relative z-20">
          
          {/* Badge Tag */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
            <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">// System Profile</span>
          </motion.div>

          {/* Title Header */}
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 drop-shadow-md leading-[1.05]"
          >
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Balaji Sivakumar
            </span>
          </motion.h2>
          
          {/* Bio Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl drop-shadow mb-12"
          >
            Dynamic Digital Marketing Manager with a proven track record in strategic content creation and data analytics. Expert in leveraging social media platforms to boost engagement by over 50% and implementing SEO strategies that increase web traffic by 40%. Skilled in brand identity development, CRM management, and high-impact campaign execution.
          </motion.p>

          {/* Quick Stats Grid with Scale-in Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-zinc-800/80"
          >
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl hover:border-zinc-500 transition-all duration-300 group">
              <h4 className="text-white text-2xl font-black tracking-tight mb-1 group-hover:translate-x-1 transition-transform">Digital Strategy</h4>
              <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">Campaigns & Ads</p>
            </div>
            
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl hover:border-zinc-500 transition-all duration-300 group">
              <h4 className="text-white text-2xl font-black tracking-tight mb-1 group-hover:translate-x-1 transition-transform">SEO & Analytics</h4>
              <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">GA4 & SEMRush</p>
            </div>
            
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl hover:border-zinc-500 transition-all duration-300 group sm:col-span-1 col-span-1">
              <h4 className="text-white text-2xl font-black tracking-tight mb-1 group-hover:translate-x-1 transition-transform">Brand Growth</h4>
              <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">Community Scaling</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle bottom border transition divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default About;
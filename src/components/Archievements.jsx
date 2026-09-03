import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const achievementsData = [
    {
      metric: "421k → 781k",
      title: "YouTube Channel Growth",
      description: "Scaled subscriber base organically from 421k to 781k through strategic content management and engagement."
    },
    {
      metric: "3K+ Organic",
      title: "Hospital Instagram Followers",
      description: "Built and nurtured the official hospital Instagram and YouTube community from the ground up."
    },
    {
      metric: "HP LIFE",
      title: "Social Media Manager",
      description: "Successfully completed specialized programs and managed digital social media initiatives under HP LIFE."
    },
    {
      metric: "1.25 Lakh",
      title: "DMK Meet Branding",
      description: "Executed large-scale branding and strategic promotional rollouts for an audience of 125,000 people."
    }
  ];

  return (
    <section id="achievements" ref={ref} className="relative bg-black py-32 px-6 md:px-12 w-full overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Cinematic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
            <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">// Track Record</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Key Milestones & Achievements
          </motion.h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.12, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Dynamic Shifting Glow Border Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 via-white to-zinc-700 rounded-[2.4rem] opacity-20 group-hover:opacity-100 transition duration-700 blur-sm pointer-events-none" 
              />

              {/* Card Container */}
              <div className="relative rounded-3xl p-8 bg-zinc-950 border border-zinc-800/80 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between h-full">
                
                {/* Subtle Hover Gradient Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="text-zinc-200 font-mono text-2xl font-black tracking-tight group-hover:text-white transition-colors"
                    >
                      {item.metric}
                    </motion.span>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-300" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default Achievements;
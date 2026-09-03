import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const roadmapSteps = [
    { 
      number: "01", 
      title: "Digital Strategy & Branding", 
      tech: "Campaigns & Identity",
      desc: "Developing high-impact brand identities and managing large-scale promotional rollouts."
    },
    { 
      number: "02", 
      title: "Social Media & Growth", 
      tech: "Instagram & YouTube",
      desc: "Scaling organic community engagement and subscriber bases significantly across platforms."
    },
    { 
      number: "03", 
      title: "Content & Creative Production", 
      tech: "Editing & AI Videos",
      desc: "Producing engaging content, professional graphic designs, video editing, and advanced AI video assets."
    },
    { 
      number: "04", 
      title: "SEO & Web Analytics", 
      tech: "GA4 & SEMRush",
      desc: "Implementing technical SEO strategies to maximize web traffic and search performance."
    },
    { 
      number: "05", 
      title: "Ads & Conversion", 
      tech: "Meta & Google Ads",
      desc: "Executing targeted ad campaigns, CRM management, and cross-channel marketing."
    },
  ];

  return (
    <section id="expertise" ref={ref} className="relative bg-black py-32 px-6 md:px-12 w-full overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Dynamic Moving Gradient Mesh Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-zinc-200 via-zinc-600 to-zinc-800 rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4 shadow-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">// Strategic Roadmap</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Core Execution Roadmap
          </motion.h2>
        </div>

        {/* Root Map Timeline / Flow Container */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-800 -translate-y-1/2 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Smooth Rotating Multi-Color/Gradient Animated Outer Border Effect */}
                <div 
                  className="absolute -inset-1.5 bg-gradient-to-r from-zinc-200 via-zinc-600 to-white rounded-[2.2rem] blur-md opacity-40 group-hover:opacity-100 transition duration-1000 animate-spin pointer-events-none" 
                  style={{ animationDuration: '8s' }}
                />

                {/* Card Container */}
                <div className="relative rounded-3xl p-6 bg-zinc-950 border border-zinc-800/80 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between h-full">
                  
                  {/* Subtle Hover Gradient Shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Step Number & Glowing Node */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-zinc-400 font-mono text-xs tracking-widest font-bold group-hover:text-white transition-colors">
                        // STAGE {step.number}
                      </span>
                      <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all duration-300" />
                    </div>

                    <h3 className="text-xl font-black text-white tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {step.title}
                    </h3>

                    <p className="text-zinc-400 text-xs leading-relaxed font-normal mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 mt-2">
                    <span className="text-zinc-300 text-xs font-mono tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-white/5 group-hover:border-white/20 transition-all inline-block">
                      {step.tech}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default Expertise;
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const certsData = [
    {
      title: "Advance Digital Marketing",
      issuer: "HCL Guvi",
      link: "https://drive.google.com/file/d/1Ywe1u-NuJAF2VIN2VOzKjaKVd3hnrhMk/view?usp=drive_link",
      description: "Comprehensive professional training covering modern digital growth strategies, performance marketing, and analytics."
    },
    {
      title: "Meta Certified Advanced Digital Marketer",
      issuer: "Meta",
      link: "https://drive.google.com/file/d/1MNpZVF_XFtQ-3iurTL_BzKGmQ0sw88fp/view?usp=drive_link",
      description: "Advanced certification verifying expertise in cross-platform advertising, Meta Ads Manager, and campaign execution."
    },
    {
      title: "HP LIFE - Your Target Audience",
      issuer: "HP LIFE Foundation",
      link: "https://drive.google.com/file/d/1jl4kd4SBt8IQRVNyA37hvvZ1fUOmXiMI/view?usp=drive_link",
      description: "Focused on customer research methodologies, survey design, market data gathering, and audience profiling."
    },
    {
      title: "HP LIFE - Social Media Marketing",
      issuer: "HP LIFE Foundation",
      link: "https://drive.google.com/file/d/12wb7qlgMEyL86amZRDAfe5jOvzt4_J2P/view?usp=drive_link",
      description: "Trained in social media campaign strategies, ad targeting, and effective multi-channel audience engagement."
    }
  ];

  return (
    <section id="certifications" ref={ref} className="relative bg-black py-32 px-6 md:px-12 w-full overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Cinematic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">// Credentials</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Licenses & Certifications
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {certsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative"
            >
              {/* Animated Gradient Outer Border */}
              <div 
                className="absolute -inset-1.5 bg-gradient-to-r from-zinc-200 via-zinc-600 to-white rounded-[2.2rem] blur-md opacity-30 group-hover:opacity-80 transition duration-1000 animate-spin pointer-events-none" 
                style={{ animationDuration: '8s' }}
              />

              {/* Card Container */}
              <div className="relative rounded-3xl p-8 bg-zinc-950 border border-zinc-800/80 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between h-full">
                
                {/* Subtle Hover Gradient Shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-zinc-400 font-mono text-xs tracking-widest font-bold uppercase">
                      // {cert.issuer}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all duration-300" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed font-normal mb-8">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-zinc-500 text-xs font-mono">Verified Credential</span>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-extrabold hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
                  >
                    View Certificate →
                  </a>
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

export default Certifications;
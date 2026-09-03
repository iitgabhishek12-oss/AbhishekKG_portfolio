import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const projectsData = [
    {
      number: "01",
      title: "Notice Hub Platform",
      category: "University Communication",
      description: "Engineered a centralized platform to consolidate university announcements and streamline student communication.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      number: "02",
      title: "Payment Gateway System",
      category: "Fintech & Security",
      description: "Developed a full-stack payment gateway simulator featuring secure transaction state management and multi-method processing.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker"],
      link: "#"
    },
    {
      number: "03",
      title: "Multi-Tenant SaaS Platform",
      category: "Cloud Architecture",
      description: "Architected a containerized multi-tenant SaaS platform enforcing strict tenant data isolation and secure schema routing.",
      tech: ["Node.js", "MongoDB", "Docker", "Express"],
      link: "#"
    },
    {
      number: "04",
      title: "Productivity Suite Extension",
      category: "Browser Automation",
      description: "Developed a custom Chrome extension using JavaScript and Chrome APIs to manage tasks and boost daily workflow efficiency.",
      tech: ["JavaScript", "Chrome APIs", "Tailwind CSS"],
      link: "#"
    },
  ];

  // Duplicate the array to create a seamless infinite loop
  const marqueeProjects = [...projectsData, ...projectsData, ...projectsData];

  return (
    <section id="projects" ref={ref} className="relative bg-black py-32 px-6 md:px-12 w-full overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Cinematic Animated Moving White Gradient Background Effect */}
      <motion.div 
        animate={{ 
          x: ['-20%', '20%', '-20%'],
          y: ['-10%', '15%', '-10%'],
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-white via-zinc-400 to-zinc-700 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-20 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4 shadow-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">// Portfolio Work</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Featured Engineering Projects
          </motion.h2>
        </div>
      </div>

      {/* Continuously Moving Marquee Track Container */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Gradient Fade Edges for Cinematic Look */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 shrink-0 items-center pl-4"
          >
            {marqueeProjects.map((project, idx) => (
              <div
                key={`${project.number}-${idx}`}
                className="group relative w-[350px] md:w-[420px] rounded-[2.5rem] p-8 bg-zinc-950/90 border border-zinc-800/80 hover:border-white/50 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between whitespace-normal"
              >
                {/* Subtle Hover Gradient Shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Category Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-zinc-400 font-mono text-xs tracking-widest font-bold group-hover:text-white transition-colors">
                      // PROJECT {project.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-normal mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Bar: Tech Stack Tags & Link */}
                <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-zinc-300 transition-colors group-hover:translate-x-1"
                  >
                    Code 
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default Projects;
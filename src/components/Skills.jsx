import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Java', 'Python', 'REST APIs', 'JWT Auth', 'MySQL', 'MongoDB'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Machine Learning', 'NLP', 'Generative AI', 'LLMs', 'Computer Vision', 'Prompt Engineering'],
    },
    {
      category: 'Tools & Cloud',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'CI/CD', 'AWS', 'Figma'],
    },
  ];

  // Duplicate skills arrays to ensure seamless infinite looping without gaps
  const rowOneSkills = [...skillsData[0].skills, ...skillsData[0].skills, ...skillsData[1].skills, ...skillsData[1].skills];
  const rowTwoSkills = [...skillsData[2].skills, ...skillsData[2].skills, ...skillsData[3].skills, ...skillsData[3].skills];

  return (
    <section id="skills" className="relative w-full bg-black py-28 md:py-36 overflow-hidden border-t border-zinc-900">
      
      {/* Cinematic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
              <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">Technical Stack</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Technologies I Work With
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-normal">
            Full-stack expertise across modern web development, artificial intelligence, and cloud infrastructure.
          </p>
        </motion.div>
      </div>

      {/* Marquee Tickers Container */}
      <div className="relative w-full flex flex-col gap-6 overflow-hidden py-4">
        
        {/* Gradient Fade Edges for Cinematic Look */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1: Left to Right */}
        <div className="flex overflow-hidden whitespace-nowrap select-none">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 shrink-0 items-center"
          >
            {rowOneSkills.map((skill, idx) => (
              <div
                key={idx}
                className="group px-6 py-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-default"
              >
                <span className="text-sm md:text-base font-mono font-bold text-zinc-300 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2: Right to Left */}
        <div className="flex overflow-hidden whitespace-nowrap select-none">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 shrink-0 items-center"
          >
            {rowTwoSkills.map((skill, idx) => (
              <div
                key={idx}
                className="group px-6 py-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-default"
              >
                <span className="text-sm md:text-base font-mono font-bold text-zinc-300 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Subtle floating background lighting elements */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-10 w-64 h-64 bg-zinc-300 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-5 w-72 h-72 bg-zinc-400 rounded-full blur-3xl pointer-events-none"
      />

      {/* Bottom subtle divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default Skills;
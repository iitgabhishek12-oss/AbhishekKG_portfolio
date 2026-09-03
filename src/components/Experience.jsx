import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${isActive ? 'bg-white border-zinc-200 shadow-[0_20px_50px_rgba(255,255,255,0.15)]' : 'bg-zinc-950 border border-zinc-800/80 shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.95)]'
        }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] absolute top-4 border border-zinc-800 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-zinc-400 rounded-full opacity-40"></div>
      </div>

      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${isActive ? 'bg-zinc-900' : 'bg-zinc-950'
        }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${isActive ? 'text-zinc-200' : 'text-zinc-500'
          }`}>{number}</span>

        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-zinc-200'
          }`}>{title}</h3>

        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${isActive ? 'text-zinc-300' : 'text-zinc-400'
          }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="bg-black pt-32 pb-20 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-zinc-900"
    >
      {/* Cinematic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative md:h-[1100px] z-10">

        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
            <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">Professional Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight relative">
            Driving Brand Growth & Digital Excellence
            {/* Hand-drawn arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden" />
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1100px] pointer-events-none z-0"
          viewBox="0 0 1000 1100"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,750 700,750 650,950"
            fill="none"
            stroke="#27272a"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          <mask id="path-mask-exp">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,750 700,750 650,950"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,750 700,750 650,950"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask-exp)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#27272a"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile-exp">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile-exp)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-6 md:pb-0">

          <TagCard
            number="2021 - 2026"
            title="Digital Marketing Manager"
            text="Arunai Medical College & Super Specialty Hospital, Tiruvannamalai. Spearheaded branding through signage, flex, social media posts, and reels, driving organic growth (3k Instagram, 1.93k YouTube) and launching the new hospital website with SEO optimization."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="2019 - 2020"
            title="Touring Talkies @ YouTube"
            text="Actor & Producer Chitra Lakshumanan. Managed cinema star interviews, video edits for reviews, maintained consistent content calendars, and scaled channel subscribers organically from 421k to 781k while managing community engagement."
            className="md:absolute md:top-[380px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="2017 - 2019"
            title="Video Editor Intern"
            text="Produced rough-cut videos for short films and cine interviews, handled active social media channel operations, and delivered graphic design assets."
            className="md:absolute md:top-[740px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

         

        </div>

      </div>
    </section>
  );
};

export default Experience;
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ReferenceWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const youtubeVideos = [
    {
      title: "Touring Talkies Work Sample 1",
      embedId: "IE4Tw9LUlKg",
      url: "https://www.youtube.com/watch?v=IE4Tw9LUlKg",
    },
    {
      title: "Touring Talkies Work Sample 2",
      embedId: "X0mZ7WS1DOg",
      url: "https://www.youtube.com/watch?v=X0mZ7WS1DOg",
    },
    {
      title: "Touring Talkies Work Sample 3",
      embedId: "-6SuyAMGiAo",
      url: "https://www.youtube.com/watch?v=-6SuyAMGiAo",
    },
    {
      title: "Touring Talkies Work Sample 4",
      embedId: "brUOzaCAGqo",
      url: "https://www.youtube.com/watch?v=brUOzaCAGqo",
    }
  ];

  const presentationItem = {
    title: "Digital Marketing Strategy Presentation",
    embedUrl: "https://docs.google.com/presentation/d/1XeHygD9Getu30A6vFbKxyc38q0AJ49wKnSGiYRaXOiM/embed?start=false&loop=false&delayms=3000",
    url: "https://docs.google.com/presentation/d/1XeHygD9Getu30A6vFbKxyc38q0AJ49wKnSGiYRaXOiM/edit?usp=sharing",
  };

  return (
    <section id="referenceworks" ref={ref} className="relative bg-black py-20 px-6 md:px-12 w-full overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Cinematic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-3 shadow-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span className="text-zinc-300 text-[10px] font-mono tracking-widest uppercase">// Reference Works</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2"
          >
            Touring Talkies Channel Works
          </motion.h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-normal">
            Celebrity interviews, cinema reviews, daily broadcasts, and strategy decks.
          </p>
        </div>

        {/* Google Slides Presentation Compact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative group mb-8 max-w-3xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 via-zinc-600 to-white rounded-[1.8rem] blur-sm opacity-30 group-hover:opacity-70 transition duration-700 pointer-events-none" />

          <div className="relative rounded-2xl p-4 md:p-6 bg-zinc-950 border border-zinc-800/80 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-1/2">
              <span className="text-zinc-400 font-mono text-[10px] tracking-widest font-bold uppercase block mb-1">
                // Strategy Deck
              </span>
              <h3 className="text-lg font-black text-white tracking-tight mb-1">
                {presentationItem.title}
              </h3>
              <p className="text-zinc-400 text-xs mb-3">
                Slide deck outlining campaign structures and analytics.
              </p>
              <a 
                href={presentationItem.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold hover:bg-white hover:text-black transition-all"
              >
                Open Presentation →
              </a>
            </div>

            <div className="relative w-full sm:w-1/2 aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <iframe
                src={presentationItem.embedUrl}
                title={presentationItem.title}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Videos Grid (Compact 2x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 max-w-4xl mx-auto">
          {youtubeVideos.map((video, index) => (
            <motion.div
              key={video.embedId}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 via-zinc-600 to-white rounded-[1.8rem] blur-sm opacity-25 group-hover:opacity-60 transition duration-700 pointer-events-none" />

              <div className="relative rounded-2xl p-4 bg-zinc-950 border border-zinc-800/80 backdrop-blur-xl shadow-lg flex flex-col justify-between h-full">
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-400 font-mono text-[10px] tracking-widest font-bold uppercase">
                      // Video Sample {index + 1}
                    </span>
                  </div>

                  {/* Compact YouTube Player */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 mb-3 border border-zinc-800">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-zinc-500 text-[10px] font-mono">Touring Talkies</span>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold hover:bg-white hover:text-black transition-all"
                  >
                    Watch →
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

export default ReferenceWorks;
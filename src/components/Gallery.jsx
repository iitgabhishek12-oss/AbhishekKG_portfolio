import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Import images from gallery folder structure shown in screenshot
import img1 from '../assets/gallery/img1.jpeg';
import img2 from '../assets/gallery/img2.jpeg';
import img3 from '../assets/gallery/img3.jpeg';
import img4 from '../assets/gallery/img4.jpeg';
import img5 from '../assets/gallery/img5.jpeg';
import img6 from '../assets/gallery/img6.jpeg';
import img7 from '../assets/gallery/img7.jpeg';
import img8 from '../assets/gallery/img8.jpeg';
import img9 from '../assets/gallery/img9.jpeg';
import galleryVideo from '../assets/gallery/video.mp4';

const Gallery = () => {
  const videoRef = useRef(null);

  // Combine items into a mixed media array for infinite marquee scrolling
  const mediaItems = [
    { type: 'image', src: img1, alt: 'Balaji Sivakumar with Celebs 1' },
    { type: 'image', src: img2, alt: 'Balaji Sivakumar with Celebs 2' },
    { type: 'video', src: galleryVideo },
    { type: 'image', src: img3, alt: 'Balaji Sivakumar with Celebs 3' },
    { type: 'image', src: img4, alt: 'Balaji Sivakumar with Celebs 4' },
    { type: 'image', src: img5, alt: 'Balaji Sivakumar with Celebs 5' },
    { type: 'image', src: img6, alt: 'Balaji Sivakumar with Celebs 6' },
    { type: 'image', src: img7, alt: 'Balaji Sivakumar with Celebs 7' },
    { type: 'image', src: img8, alt: 'Balaji Sivakumar with Celebs 8' },
    { type: 'image', src: img9, alt: 'Balaji Sivakumar with Celebs 9' },
  ];

  // Duplicate array for seamless infinite looping
  const duplicatedMedia = [...mediaItems, ...mediaItems];

  return (
    <section id="gallery" className="relative w-full bg-black py-28 md:py-36 overflow-hidden border-t border-zinc-900">
      
      {/* Cinematic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
              <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">Visual Archive</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Moments & Celebrity Interactions
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-normal">
            A continuous marquee reel capturing campaigns, celebrity interviews, and behind-the-scenes video highlights.
          </p>
        </motion.div>
      </div>

      {/* Marquee Ticker Container */}
      <div className="relative w-full flex overflow-hidden py-4 select-none">
        
        {/* Gradient Fade Edges for Cinematic Look */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 shrink-0 items-center"
        >
          {duplicatedMedia.map((item, idx) => (
            <div
              key={idx}
              className="relative group w-[280px] sm:w-[340px] aspect-[4/5] rounded-3xl bg-zinc-950 border border-zinc-800/80 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl shrink-0"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              {/* Inner Glow Border on Hover */}
              <div className="absolute inset-0 border border-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom subtle divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default Gallery;
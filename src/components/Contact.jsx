import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  
  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission logic to open WhatsApp with pre-filled details
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert("Please accept the contact permission checkbox.");
      return;
    }

    const phoneNumber = "+918015783190";
    const textMessage = `Hello Balaji,\n\nMy name is ${formData.firstName} ${formData.lastName}.\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(textMessage);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={ref} id="contact" className="relative bg-black w-full min-h-screen overflow-hidden flex items-center justify-center py-32 px-6 md:px-12 border-t border-zinc-900 font-sans">
      
      {/* Huge Background Parallax Text */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden pointer-events-none z-0"
      >
        <h1 
          className="text-[22vw] leading-[0.75] font-black text-zinc-900/60 uppercase tracking-tighter select-none scale-y-[1.5]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Cinematic Ambient Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-white via-zinc-400 to-zinc-700 rounded-full blur-[160px] pointer-events-none z-0" 
      />

      {/* Unique Dual-Column Interactive Contact Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Contact Info & Details Card */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          {/* Rotating Gradient Outer Border */}
          <div 
            className="absolute -inset-1.5 bg-gradient-to-r from-zinc-200 via-zinc-600 to-white rounded-[2.8rem] blur-md opacity-30 pointer-events-none animate-spin" 
            style={{ animationDuration: '10s' }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-zinc-400 font-mono text-xs tracking-widest uppercase">// Get In Touch</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
              Let's Build Something Exceptional.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-normal mb-8">
              Reach out directly or send a message to open WhatsApp with your details pre-filled.
            </p>
          </div>

          {/* Contact Details Box */}
          <div className="relative z-10 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 font-mono text-xs text-zinc-300 space-y-3 shadow-inner">
            <div className="text-zinc-500">// contact_info</div>
            <div>
              <span className="text-zinc-500">name:</span> <span className="text-white">Balaji Sivakumar</span>
            </div>
            <div>
              <span className="text-zinc-500">phone:</span> <span className="text-white">+91 8015783190</span>
            </div>
            <div>
              <span className="text-zinc-500">email:</span> <span className="text-white">balaji07siva@gamil.com</span>
            </div>
            <div>
              <span className="text-zinc-500">location:</span> <span className="text-white">Tiruvannamalai & Bangalore, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Sleek Glassmorphism Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-zinc-950/90 backdrop-blur-2xl border border-zinc-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name" 
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder-zinc-500 text-white font-medium"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name" 
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder-zinc-500 text-white font-medium"
                />
              </div>
            </div>

            <div>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                required
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder-zinc-500 text-white font-medium"
              />
            </div>

            <div>
              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..." 
                required
                rows={4}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder-zinc-500 text-white font-medium resize-none"
              ></textarea>
            </div>

            {/* Permission Checkbox & Submit Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-zinc-900">
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="permission" 
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-white focus:ring-0 cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer text-xs text-zinc-400 leading-snug max-w-[240px]">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <button 
                type="submit" 
                className="px-8 py-4 rounded-full bg-white text-black font-extrabold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all duration-300 group shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                Send via WhatsApp
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
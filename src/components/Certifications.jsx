import React from 'react';
import { motion } from 'framer-motion';

const certificationsData = [
  {
    title: "B.Tech. Major — Chemical Engineering",
    issuer: "IIT Guwahati",
    status: "CGPA: 7.58",
    description: "Current undergraduate studies focusing on process simulation, advanced controls, and transport phenomena (2023–Present).",
    tag: "Education"
  },
  {
    title: "Best Sports Secretary Award",
    issuer: "IIT Guwahati",
    status: "2025–2026",
    description: "Led 180+ students across 20+ sports disciplines during SPARDHA, contributing to 1st place among 14 hostels.",
    tag: "Leadership"
  },
  {
    title: "Overall Champion, SPARDHA",
    issuer: "IIT Guwahati",
    status: "2026",
    description: "Secured 1st place overall representing Brahmaputra Hostel, alongside multiple gold and silver medals in cricket and kho-kho.",
    tag: "Achievements"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-white py-24 px-6 md:px-12 relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="mb-20 relative max-w-2xl" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Education & Leadership
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Continuous Academic & Extracurricular Growth
            <svg className="absolute -bottom-4 left-0 w-48 h-3 text-[#ff2a2a]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed mt-8">
            Formal education at the Indian Institute of Technology, Guwahati, combined with leadership roles and athletic achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white border border-gray-200 rounded-[2rem] p-1.5 relative flex flex-col items-center hover:scale-[1.02] hover:border-red-400 hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] transition-all duration-700"
            >
              {/* Hole Punch */}
              <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] absolute top-3 border border-gray-300 z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-10"></div>
              </div>

              {/* Inner Card Container */}
              <div className="w-full h-full rounded-[1.4rem] mt-6 p-6 flex flex-col justify-between min-h-[240px] bg-[#f4f4f4] group-hover:bg-red-50/20 transition-colors duration-700">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-[#ff2a2a]/90">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-gray-200 text-gray-500">
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 tracking-tight mb-3 group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/50">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold rounded-md bg-white border border-gray-200/60 text-gray-600">
                    {cert.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
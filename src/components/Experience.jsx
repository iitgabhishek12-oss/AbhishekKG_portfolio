import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
  {
    company: "Brahmaputra Hostel, IIT Guwahati",
    role: "Sports Secretary",
    location: "IIT Guwahati, Assam",
    period: "Apr. 2025 – Apr. 2026",
    description:
      "Led hostel-level sports operations and coordinated students, tournaments, workshops, scheduling, and end-to-end event execution across a wide range of sporting activities.",
    highlights: [
      "Led 180+ students across 20+ sports disciplines during SPARDHA, contributing to 1st place among 14 hostels.",
      "Organized and conducted 5+ intra-hostel sports tournaments along with Athletics and Aquatics workshops.",
      "Managed participants, scheduling, coordination, and end-to-end execution of hostel sports activities.",
      "Conducted Athletics and Aquatics workshops for 70+ students.",
      "Received the Best Sports Secretary Award at IIT Guwahati."
    ]
  }
];

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section
      id="experience"
      className="bg-gray-50 py-24 px-6 md:px-12 w-full font-sans"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="mb-16" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Leadership Journey
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Experience & Leadership
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative pl-8 md:pl-10"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#ff2a2a] border-4 border-white shadow-md" />

              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">

                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900">
                      {exp.role}
                    </h3>

                    <span className="text-base font-bold text-[#ff2a2a]">
                      {exp.company}
                    </span>

                    <span className="text-sm text-gray-400 block sm:inline sm:before:content-['•'] sm:before:mx-2">
                      {exp.location}
                    </span>
                  </div>

                  <span className="mt-2 sm:mt-0 inline-block px-3 py-1 bg-gray-100 text-gray-600 font-bold text-xs rounded-full self-start sm:self-auto">
                    {exp.period}
                  </span>

                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base font-medium mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 border-t border-gray-100 pt-4">
                  {exp.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm text-gray-500 font-medium flex items-start gap-2"
                    >
                      <span className="text-[#ff2a2a] font-bold mt-0.5">
                        ▸
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
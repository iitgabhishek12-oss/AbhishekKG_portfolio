import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
  {
    company: "Zoho Corporation",
    role: "Member Technical Staff, QA",
    location: "Chennai, Tamil Nadu",
    period: "May 2021 – Present",
    description: "Founding QA engineer on Zoho Catalyst (cloud-native serverless platform). Built the quality function from zero, owning test automation, release pipelines, and AI engineering tooling.",
    highlights: [
      "Grew test automation coverage from 10% to 80% using Selenium Grid and Jenkins.",
      "Manages a team of 6 engineers as manager on record while overseeing release pipelines across Jenkins, GitHub Actions, and GitLab CI.",
      "Reduced production incidents by 75% through comprehensive release management and stability initiatives.",
      "Standardized QA processes across 5 teams, cutting engineer onboarding time by 30%.",
      "Automated REST API testing across 100+ endpoints using Rest Assured, JUnit, and Postman."
    ]
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Quality Analyst",
    location: "Coimbatore, Tamil Nadu",
    period: "May 2018 – April 2021",
    description: "Focused on enterprise insurance and healthcare systems, laying robust test-planning and defect-management foundations.",
    highlights: [
      "Defined QA procedures for a 10-member team, reducing defect leakage by 20%.",
      "Authored detailed test plans and scripts in HP ALM, expanding test coverage by 30%.",
      "Managed defect triage and root-cause analysis for 200+ defects in JIRA."
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
    <section id="experience" className="bg-gray-50 py-24 px-6 md:px-12 w-full font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Career Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company} data-aos="fade-up" data-aos-delay={index * 150} className="relative pl-8 md:pl-10">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#ff2a2a] border-4 border-white shadow-md" />

              {/* Card Container */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                
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

                <p className="text-gray-600 text-sm md:text-base font-medium mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights Bullets */}
                <ul className="space-y-2.5 border-t border-gray-100 pt-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-500 font-medium flex items-start gap-2">
                      <span className="text-[#ff2a2a] font-bold mt-0.5">▸</span>
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
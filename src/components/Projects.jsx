import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = [
  {
    title: "LLM Evaluation Suite",
    category: "AI • LLM Evaluation",
    description: "A 50-case evaluation suite covering instruction following, refusal calibration, and JSON validity using deterministic scorers and an LLM-as-judge validated against human labels.",
    github: "https://github.com/aravinddurgaraj",
    demo: "#",
    tags: ["Promptfoo", "Python", "Anthropic Claude API"],
  },
  {
    title: "AI-Assisted PR Code-Review Agent",
    category: "AI Agents • Code Analysis",
    description: "An internal POC agent that constructs repository dependency graphs to reason about change ripples and risk-tiers pull requests for streamlined, intelligent code reviews.",
    github: "https://github.com/aravinddurgaraj",
    demo: "#",
    tags: ["LLM Agent", "Dependency Graph", "Java"],
  },
  {
    title: "Production AI Application Platform",
    category: "Production SaaS • AI",
    description: "A live platform serving ~20,000 users where natural language inputs are transformed into working React frontend applications via prompt-routing and end-to-end Cucumber BDD testing.",
    github: "https://github.com/aravinddurgaraj",
    demo: "#",
    tags: ["React", "Zoho Catalyst", "Cucumber BDD", "LLM Routing"],
  },
  {
    title: "High-Traffic Public Signup Platform",
    category: "Performance • Load Testing",
    description: "Conducted end-to-end functional testing and built Apache JMeter load-test plans simulating 10,000 concurrent users to absorb sharply-peaked signup spikes at launch.",
    github: "https://github.com/aravinddurgaraj",
    demo: "#",
    tags: ["Apache JMeter", "Load Testing", "Functional Testing"],
  },
  {
    title: "AI UI-Automation Tool",
    category: "Internal Tool • UI Automation",
    description: "An internal tool translating human-readable plain natural language test cases into structured, executable UI test actions via advanced prompt design.",
    github: "https://github.com/aravinddurgaraj",
    demo: "#",
    tags: ["Prompt Engineering", "UI Automation"],
  },
  {
    title: "Code-Graph RAG Assistant",
    category: "RAG • Code Intelligence",
    description: "A retrieval-augmented generation assistant over large Java codebases using a code-graph representation to account for structural relationships rather than simple text similarity.",
    github: "https://github.com/aravinddurgaraj",
    demo: "#",
    tags: ["RAG", "Graph Retrieval", "Java"],
  },
];

const otherMiniProjects = [
  { title: "LLM-Based Test Generation", lang: "Python" },
  { title: "Zoho Catalyst Serverless QA Suite", lang: "Java" },
  { title: "Selenium Grid CI Regression Pipeline", lang: "Selenium" },
  { title: "API Endpoint Validation Harness", lang: "Rest Assured" },
  { title: "Record-and-Run Defect Tracker", lang: "Tooling" },
  { title: "Enterprise Insurance Claim Test Plans", lang: "HP ALM" },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section
      id="projects"
      className="bg-white py-24 px-6 md:px-12 relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="mb-20 relative max-w-2xl" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Projects That Define My Journey
            <svg className="absolute -bottom-4 left-0 w-48 h-3 text-[#ff2a2a]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed mt-8">
            A curated portfolio of quality platforms, test automation frameworks, CI/CD pipelines, and practical AI/LLM evaluation tooling.
          </p>
        </div>

        {/* Small Project Cards Grid - 3 Columns on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {projectData.map((project, index) => {
            const tiltClass = index % 3 === 0 ? "hover:rotate-1" : index % 3 === 1 ? "hover:-rotate-1" : "hover:rotate-0";

            return (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group bg-white border border-gray-200 rounded-[2rem] p-1.5 relative flex flex-col items-center hover:scale-[1.02] ${tiltClass} hover:border-red-400 hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] transition-all duration-700`}
              >
                {/* Skeuomorphic Tag Hole Punch Component */}
                <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] absolute top-3 border border-gray-300 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-10"></div>
                </div>

                {/* Inner Card Container Frame */}
                <div className="w-full h-full rounded-[1.4rem] mt-6 p-6 flex flex-col justify-between min-h-[310px] bg-[#f4f4f4] group-hover:bg-red-50/20 transition-colors duration-700">
                  <div>
                    {/* Category Label */}
                    <span className="text-xs uppercase tracking-wider font-extrabold text-[#ff2a2a]/90 block mb-2">
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="text-xl font-black text-gray-900 tracking-tight mb-3 group-hover:text-[#ff2a2a] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description Text */}
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Project Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[10px] md:text-xs font-bold rounded-md bg-white border border-gray-200/60 text-gray-600 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive External Links */}
                    <div className="flex items-center gap-4 border-t border-gray-200/50 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-black text-gray-900 hover:text-[#ff2a2a] inline-flex items-center gap-1 transition-colors duration-300"
                      >
                        Source Code
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects Section */}
        <div className="mt-28">
          <div className="flex items-center gap-4 mb-10" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
              System Logs & Other Repositories
            </h3>
            <div className="h-[1px] bg-gray-200 flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherMiniProjects.map((project, index) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group border border-gray-200 bg-white rounded-2xl p-5 hover:border-red-300 hover:shadow-[0_10px_30px_rgba(255,42,42,0.05)] transition-all duration-300 flex items-center justify-between"
              >
                <div className="max-w-[75%]">
                  <h4 className="font-extrabold text-sm md:text-base text-gray-900 group-hover:text-[#ff2a2a] transition-colors duration-300 truncate">
                    {project.title}
                  </h4>
                  <span className="text-[11px] font-medium text-gray-400 block mt-1">
                    Repository Node Engine
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-gray-100 text-gray-500 border border-gray-200/50 group-hover:bg-red-50 group-hover:text-[#ff2a2a] group-hover:border-red-100 transition-colors duration-300">
                  {project.lang}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Organic Hand-drawn Accent */}
        <div data-aos="fade-in" className="text-center mt-20 relative">
          <div className="font-['Caveat',cursive] text-3xl text-gray-500 inline-block transform rotate-1">
            Reviewing architecture matrices continuous...
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
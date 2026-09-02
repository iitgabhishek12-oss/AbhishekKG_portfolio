import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = [
  // 1. DATA SCIENCE & ML — PRIMARY
  {
    title: "RetailIQ",
    category: "Data, Analytics & ML • Customer Intelligence",
    description: "Built an end-to-end customer intelligence pipeline using PostgreSQL, SQL and Python. Engineered RFM and behavioral features across 8K customers, developed Logistic Regression and Random Forest churn models, and optimized targeting under budget constraints to yield ₹16.66M expected revenue.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["Python", "PostgreSQL", "Scikit-learn", "Power BI"],
  },
  {
    title: "ImpactIQ",
    category: "Data, Analytics & ML • Uplift Optimization",
    description: "Analyzed a 64K-customer randomized experiment to estimate treatment effects. Implemented S, T, and X-learners with Qini analysis (X-learner achieved strongest Qini AUC of 0.038), achieving an 87% relative conversion lift (0.57% to 1.07%) through profit-aware targeting policies.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["Causal ML", "X-learners", "Qini Analysis", "Python"],
  },
  {
    title: "RevenueIQ",
    category: "Data, Analytics & ML • SaaS Analytics",
    description: "Built an end-to-end SaaS analytics platform featuring an automated ETL pipeline and SQL data warehouse. Delivered executive-level KPI reporting for cohort retention, churn, CLV, MRR, ARR, and ARPU via Streamlit and Power BI dashboards.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["ETL Pipeline", "SQL", "Streamlit", "Power BI"],
  },
  {
    title: "StockSense AI",
    category: "Data, Analytics & ML • Demand Forecasting",
    description: "Built demand forecasting pipelines comparing SARIMAX, Random Forest, XGBoost, and LSTM models—achieving up to 67.60% MAPE improvement. Optimized (s,Q) and (R,S) inventory policies via 10,000 Monte Carlo simulations to maintain 99.16%–100% fill rates.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["LSTM", "XGBoost", "Monte Carlo", "Stochastic Simulation"],
  },

  // 2. PRODUCT MANAGEMENT — SECONDARY
  {
    title: "MoneyFlow",
    category: "Product Management • FinTech Strategy",
    description: "Addressed financial friction for students and early-career professionals by defining Jobs-To-Be-Done (JTBD) and prioritizing MVP capabilities using RICE. Designed an activation-led growth loop targeting 45% 7-day actionable check-ins.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["JTBD", "RICE", "MVP", "FinTech Strategy"],
  },
  {
    title: "ProductLab AI",
    category: "Product Management • Discovery Platform",
    description: "Designed an AI-assisted discovery workflow converting research evidence into personas, hypotheses, and controlled A/B experiments. Enforced deterministic analytics and schema validation to prevent unvalidated synthetic metrics from mimicking product-market fit.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["Product Discovery", "A/B Testing", "LLM Evaluation", "Validation"],
  },
  {
    title: "LaunchPilot AI",
    category: "Product Management • Launch Decision OS",
    description: "Designed a 5-gate AI product launch framework covering customer value, AI quality, trust & safety, and operational readiness. Quantified launch risk using Likelihood x Impact Exposure to structure GO/ITERATE/NO-GO executive workflows.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["AI Quality", "Risk Management", "GTM", "Framework Design"],
  },
  {
    title: "CampusOS AI",
    category: "Product Management • Campus Operating System",
    description: "Defined an AI-native campus copilot as an initial product wedge to tackle fragmented navigation across 10+ portals. Prioritized citation-based answers and confidence-gated escalation, targeting a 30% ticket deflection across departments.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["AI Copilot", "Roadmapping", "Product Metrics", "EdTech"],
  },

  // 3. CORE CHEMICAL ENGINEERING — THIRD
  {
    title: "Naphtha HDS",
    category: "Chemical Engineering • Process Simulation",
    description: "Developed a component-level steady-state hydrodesulfurization (HDS) model for a 3,000 kg/h naphtha feed using stoichiometric material balances and LMTD heat-recovery design. Optimized reactor temperature via constrained grid search to reach 10 ppm product sulfur.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["Process Simulation", "Heat Recovery", "Optimization", "LMTD"],
  },
  {
    title: "Dynamic CSTR Modeling & Control",
    category: "Chemical Engineering • Advanced Control",
    description: "Developed a first-principles nonlinear dynamic CSTR model using mass/energy balances and Arrhenius kinetics. Designed and tuned P, PI, and PID controllers featuring anti-windup and derivative filtering to achieve stable 302 K setpoint tracking.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["MATLAB/Simulink", "Aspen Plus", "Nonlinear Dynamics", "PID Control"],
  },
  {
    title: "Green Ammonia Process Design",
    category: "Chemical Engineering • Techno-Economic Optimization",
    description: "Designed an integrated green ammonia process (2,500 kg/h target) covering H2 production, N2 separation, and Haber-Bosch synthesis. Performed rigorous sensitivity analysis and reduced screening-level levelized cost of ammonia ($1,025/t to $665/t NH3).",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["Aspen Plus", "Techno-Economic Modeling", "Haber-Bosch", "Python"],
  },
  {
    title: "Capillary Filling Dynamics",
    category: "Chemical Engineering • Mathematical Modeling",
    description: "Developed a first-principles mathematical model for capillary-driven liquid filling in non-uniform microchannels. Incorporated channel geometry, capillary pressure, and viscous resistance to analyze transient meniscus motion and parameter sensitivity.",
    github: "https://github.com/abhishekkumargond",
    demo: "#",
    tags: ["Mathematical Modeling", "Numerical Methods", "Transport Phenomena"],
  },
];

const otherMiniProjects = [
  { title: "Brahmaputra Hostel SPARDHA Management", lang: "Leadership" },
  { title: "Intra-Hostel Cricket Tournaments", lang: "Sports" },
  { title: "NSS Blood Camp & Cleanliness Drive", lang: "NSS CoS" },
  { title: "Hostel Independence & Republic Day Parades", lang: "Cultural" },
  { title: "Flipkart GRiD 7.0 Semi-Final Pipeline", lang: "Competition" },
  { title: "Data Analyst Sandbox Repository", lang: "Analytics" },
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
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Projects That Define My Journey
            <svg className="absolute -bottom-4 left-0 w-48 h-3 text-[#ff2a2a]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed mt-8">
            A curated portfolio spanning data, analytics, ML & product strategy, and core chemical engineering simulations.
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
                        GitHub Repository
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
              Leadership & Co-Curricular Logs
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
                    IIT Guwahati Record
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
            Analyzing data, modeling systems, scaling impact...
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
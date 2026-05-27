import { useState, useEffect, useRef } from "react";

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  // =======================================================
  // SCROLL TRIGGER LOGIC (Lag-Free)
  // =======================================================
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("trigger-exp-anim");
        } else {
          // Removes class when out of view so it replays when scrolling back!
          sectionRef.current.classList.remove("trigger-exp-anim");
        }
      },
      { threshold: 0.25 } // Triggers when 25% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const experiences = [
    {
      year: "2025",
      duration: "01 June - 31 July",
      months: "2 months",
      title: "Visual Design Intern",
      details: [
        "Worked on packaging, social media creatives, and print materials across multiple brands.",
        "Handled continuous client feedback and revisions in a fast-paced agency setup.",
        "Managed multiple projects simultaneously, improving multitasking and speed."
      ]
    },
    {
      year: "2026",
      duration: "01 Jan - 31 April",
      months: "4 months",
      title: "Graduation Project Intern",
      details: [
        "Worked on a single large-scale brand project across brochure design, logo, campaigns, and sales/office branding.",
        "Followed mentor feedback closely, iterating designs to align with the overall brand direction.",
        "Collaborated with teams to understand real project requirements and execution flow.",
        "Gained deeper exposure to handling projects consistently from start to finish."
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#fff8f3] overflow-hidden pt-20 pb-10 font-ginder">

      {/* ======================================================= */}
      {/* CUSTOM TIMELINE ANIMATIONS */}
      {/* ======================================================= */}
      <style>
        {`
          @keyframes fadeUpExp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes drawLineCenter {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes popInExp {
            from { opacity: 0; transform: scale(0.3); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes fadeInExp {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* General Float Up */
          .anim-exp-up {
            opacity: 0;
            will-change: transform, opacity;
          }
          .trigger-exp-anim .anim-exp-up {
            animation: fadeUpExp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          /* The Line draws from the center outwards */
          .anim-exp-line {
            transform: scaleX(0);
            transform-origin: center;
            will-change: transform;
          }
          .trigger-exp-anim .anim-exp-line {
            animation: drawLineCenter 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          /* The Dots pop in */
          .anim-exp-pop {
            opacity: 0;
            will-change: transform, opacity;
          }
          .trigger-exp-anim .anim-exp-pop {
            animation: popInExp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          /* Expanded content stagger animation */
          .anim-exp-detail {
            opacity: 0;
            animation: fadeUpExp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `}
      </style>

      {/* EXPANDED BOTTOM SHAPE */}
      {expanded && (
        <div className="absolute left-0 bottom-0 z-0 pointer-events-none" style={{ animation: "fadeInExp 0.5s ease-out forwards" }}>

          {/* BOTTOM LONG RECTANGLE (Base Height is 280px) */}
          <div className="w-[740px] h-[190px] bg-[#ffebde] rounded-tr-[42px]" />

          {/* TOP LEFT BLOCK */}
          <div className="absolute left-0 bottom-[150px] w-[182px] h-[242px] bg-[#ffebde] rounded-tr-[42px]" />

          {/* INNER CONNECTOR CURVE */}
          <div className="absolute left-[182px] bottom-[190px] w-[42px] h-[42px] bg-[#ffebde]">
            <div className="w-full h-full bg-[#fff8f3] rounded-bl-[42px]" />
          </div>

        </div>
      )}

      <div className="relative max-w-[1200px] mx-auto px-6 z-10">

        {/* TITLE */}
        <div className="text-center">
          <h2 
            className="text-[#0D2748] text-[42px] lg:text-[58px] leading-none tracking-[2px] font-medium anim-exp-up"
            style={{ animationDelay: "0.1s" }}
          >
            Design Experience
          </h2>

          <p 
            className="mt-2 text-[#0D2748] text-[36px] tracking-[3px] leading-none anim-exp-up"
            style={{ animationDelay: "0.2s" }}
          >
            at
          </p>

          <div 
            className="mt-2 anim-exp-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-black text-[38px] leading-none font-urbanist tracking-[1px]">
              thinkingpartners
            </h3>

            <p className="mt-2 text-[14px] tracking-[2px] font-ginder text-black/75">
              IDEAS | STRATEGY | DESIGN
            </p>
          </div>
        </div>

        {/* TOP TIMELINE INFO */}
        <div className="mt-8 grid grid-cols-2 gap-10 items-center">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center anim-exp-up"
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <h4 className="text-[#0D2748] text-[28px] font-urbanist font-bold">
                {exp.year}
              </h4>

              <div className="mt-2 px-8 py-3 rounded-full border-[1.8px] border-[#0D2748] text-[#0D2748] text-[20px] font-urbanist font-semibold bg-transparent">
                {exp.duration}
              </div>

              <p className="mt-1 text-[#0D2748] text-[24px] font-urbanist font-bold">
                {exp.months}
              </p>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="relative mt-10">

          {/* THE LINE (Wrapped in a positioning div so the line itself can scale cleanly) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[9px] w-[590px] h-[1.5px] z-0">
             <div 
               className="w-full h-full bg-[#0D2748] anim-exp-line"
               style={{ animationDelay: "0.6s" }}
             />
          </div>

          {/* LEFT DOT */}
          <div className="absolute left-[calc(43%-230px)] top-0 z-10">
            <div 
              className="w-[18px] h-[18px] rounded-full bg-[#0D2748] flex items-center justify-center anim-exp-pop"
              style={{ animationDelay: "1.0s" }}
            >
              <div className="w-[15px] h-[15px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[11px] h-[11px] rounded-full bg-[#F28E38]" />
              </div>
            </div>
          </div>

          {/* RIGHT DOT */}
          <div className="absolute right-[calc(43%-230px)] top-0 z-10">
            <div 
              className="w-[18px] h-[18px] rounded-full bg-[#0D2748] flex items-center justify-center anim-exp-pop"
              style={{ animationDelay: "1.0s" }}
            >
              <div className="w-[15px] h-[15px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[11px] h-[11px] rounded-full bg-[#F28E38]" />
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE CONTENT */}
        <div className={`mt-26 max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-[40px] transition-all duration-500 font-neue font-medium`}>
          {experiences.map((exp, index) => (
            <div key={index}>

              {/* INNER WRAPPER */}
              <div 
                className={`${index === 0 ? "lg:pl-[65px]" : "lg:pl-[80px]"} anim-exp-up`}
                style={{ animationDelay: `${0.8 + index * 0.15}s` }}
              >

                <h3 className="text-[#0D2748] text-[34px] leading-none font-ginder tracking-[1px]">
                  {exp.title}
                </h3>

                {expanded && (
                  <ul className="mt-8 space-y-6">
                    {exp.details.map((detail, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-4 anim-exp-detail"
                        style={{ animationDelay: `${i * 0.1}s` }} /* Cascades the bullet points! */
                      >

                        <span className="text-[#F28E38] text-[18px] leading-none mt-[7px]">
                          ✦
                        </span>

                        <p className="text-[#0D2748] text-[18px] leading-[1.35] max-w-[350px]">
                          {detail}
                        </p>

                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div 
          className="flex justify-center mt-10 anim-exp-up"
          style={{ animationDelay: "1.2s" }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-[#0D2748] text-white px-10 py-4 rounded-full text-[24px] leading-none hover:scale-[1.03] transition-all duration-300 flex items-center gap-3 font-causten font-bold tracking-[2px] shadow-lg"
          >
            {expanded ? "See Less" : "See More"}
            <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
              ↓
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
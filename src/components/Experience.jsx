import { useState } from "react";

export default function Experience() {

  const [expanded, setExpanded] = useState(false);

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
    <section className="relative w-full bg-[#fff8f3] overflow-hidden pt-20 pb-10 font-ginder">

      {/* EXPANDED BOTTOM SHAPE */}
      {expanded && (
        <div className="absolute left-0 bottom-0 z-0 pointer-events-none">

          {/* BOTTOM LONG RECTANGLE (Base Height is 280px) */}
          <div className="w-[740px] h-[190px] bg-[#ffebde] rounded-tr-[42px]" />

          {/* TOP LEFT BLOCK 
              Starts exactly at bottom-[280px] so it sits perfectly on top of the horizontal block 
          */}
          <div className="absolute left-0 bottom-[150px] w-[182px] h-[242px] bg-[#ffebde] rounded-tr-[42px]" />

          {/* INNER CONNECTOR CURVE 
              Sits precisely in the corner (left 182px, bottom 280px) where the two blocks intersect.
          */}
          <div className="absolute left-[182px] bottom-[190px] w-[42px] h-[42px] bg-[#ffebde]">
            {/* The mask uses the page background color to carve out the perfect concave curve! */}
            <div className="w-full h-full bg-[#fff8f3] rounded-bl-[42px]" />
          </div>

        </div>
      )}

      <div className="relative max-w-[1200px] mx-auto px-6 z-10">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-[#0D2748] text-[42px] lg:text-[58px] leading-none tracking-[2px] font-medium">
            Design Experience
          </h2>

          <p className="mt-2 text-[#0D2748] text-[36px] tracking-[3px] leading-none">
            at
          </p>

          <div className="mt-2">
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
            <div key={index} className="flex flex-col items-center">

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

          <div className="absolute left-1/2 -translate-x-1/2 top-[9px] w-[590px] h-[1.5px] bg-[#0D2748]" />

          {/* LEFT DOT */}
          <div className="absolute left-[calc(43%-230px)] top-0 w-[18px] h-[18px] rounded-full bg-[#0D2748] flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded-full bg-white flex items-center justify-center">
              <div className="w-[11px] h-[11px] rounded-full bg-[#F28E38]" />
            </div>
          </div>

          {/* RIGHT DOT */}
          <div className="absolute right-[calc(43%-230px)] top-0 w-[18px] h-[18px] rounded-full bg-[#0D2748] flex items-center justify-center">
            <div className="w-[15px] h-[15px] rounded-full bg-white flex items-center justify-center">
              <div className="w-[11px] h-[11px] rounded-full bg-[#F28E38]" />
            </div>
          </div>
        </div>

        {/* EXPERIENCE CONTENT */}
        <div className={`mt-26 max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-[40px] transition-all duration-500 font-neue font-medium`}>
          {experiences.map((exp, index) => (
            <div key={index}>

              {/* INNER WRAPPER */}
              <div className={index === 0 ? "lg:pl-[65px]" : "lg:pl-[80px]"}>

                <h3 className="text-[#0D2748] text-[34px] leading-none font-ginder tracking-[1px]">
                  {exp.title}
                </h3>

                {expanded && (
                  <ul className="mt-8 space-y-6">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4">

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
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-[#0D2748] text-white px-10 py-4 rounded-full text-[24px] leading-none hover:scale-[1.03] transition-all duration-300 flex items-center gap-3 font-causten font-bold tracking-[2px]"
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
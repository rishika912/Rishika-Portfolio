export default function Experience() {
    const experiences = [
      {
        year: "2025",
        duration: "01 June - 31 July (2 months)",
        title: "Visual Design Intern",
        details: [
          "Worked on packaging, social media creatives and print materials",
          "Handled continuous client feedback in a fast-paced setup",
          "Managed multiple projects simultaneously"
        ]
      },
      {
        year: "2026",
        duration: "01 Jan - 31 April (4 months)",
        title: "Graduation Project Intern",
        details: [
          "Worked on large-scale brand projects including logos and campaigns",
          "Collaborated with teams to understand real project requirements",
          "Handled projects consistently from start to finish"
        ]
      }
    ];
  
    return (
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C2A43] text-center mb-2">My Work Experience</h2>
        <p className="text-center text-gray-500 mb-12">at <span className="font-bold text-lg text-black">thinkingpartners</span></p>
        
        <div className="relative border-t-2 border-gray-200 mt-20 flex flex-col md:flex-row justify-between gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pt-8 w-full md:w-1/2">
              {/* The Timeline Dot */}
              <div className="absolute -top-[11px] left-0 w-5 h-5 bg-white border-4 border-[#E87A5D] rounded-full"></div>
              
              <div className="space-y-4">
                <span className="bg-[#1C2A43] text-white px-4 py-1 rounded-full text-sm">{exp.year}</span>
                <p className="text-xs text-gray-400 font-medium">{exp.duration}</p>
                <h3 className="text-xl font-bold text-[#1C2A43]">{exp.title}</h3>
                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-[#E87A5D]">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
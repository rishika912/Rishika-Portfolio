export default function CoreSkills() {
    const skills = [
      "Typography", "Wayfinding", "Publication Design", 
      "Campaign Design", "Packaging Design", "Visual System", 
      "UI Design", "Environmental Graphics", "Brand Identity Design"
    ];
  
    return (
      <section className="bg-[#F39237] py-16 px-8 rounded-[40px] mx-4 md:mx-8 my-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-white text-3xl font-bold mb-8">Core Skills</h2>
          
          {/* Adobe Icons Placeholder */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Id', 'Ae', 'Ai', 'Ps', 'Pr'].map(icon => (
              <div key={icon} className="w-12 h-12 bg-[#1C2A43] text-white flex items-center justify-center rounded-lg font-bold shadow-md border border-white/20">
                {icon}
              </div>
            ))}
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-md">
               <span className="text-xs font-bold text-blue-500">Figma</span>
            </div>
          </div>
  
          {/* Floating Skill Bubbles */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {skills.map((skill) => (
              <span key={skill} className="bg-[#1C2A43] text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
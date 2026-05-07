export default function Projects() {
    const projectList = [
      {
        title: "Katheang",
        subtitle: "BRAND GUIDELINES",
        tags: ["Media Applications", "Brand Strategy", "Cultural storytelling", "Visual Identity"],
        color: "bg-[#D1E2E0]" // Light teal from PDF
      },
      {
        title: "Drop Dead",
        subtitle: "GAME DESIGN",
        tags: ["Game Loop Structuring", "Prototyping", "Packaging Design", "Illustration"],
        color: "bg-[#FDE7D2]" // Light peach from PDF
      }
    ];
  
    return (
      <section className="py-12 space-y-12 max-w-6xl mx-auto px-6">
        {projectList.map((project, index) => (
          <div key={index} className={`${project.color} rounded-[40px] overflow-hidden p-8 md:p-12 shadow-sm`}>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-sm font-bold tracking-widest text-gray-500">{project.subtitle}</h3>
                <h2 className="text-4xl font-bold text-[#1C2A43]">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1 border border-gray-400 rounded-full text-xs font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-6 bg-[#E87A5D] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#cf6d52] transition-colors">
                  View ↗
                </button>
              </div>
              {/* Placeholder for the project imagery */}
              <div className="w-full md:w-1/2 bg-white/50 rounded-2xl h-80 flex items-center justify-center border border-white/20">
                <p className="text-gray-400 italic">Project Visuals from {project.title}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
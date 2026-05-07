export default function FeaturedProjects() {
    return (
      <section className="px-4 md:px-8 max-w-7xl mx-auto my-12">
        <div className="bg-[#1C2A43] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 z-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
              Featured Projects
            </h2>
            
            <div className="space-y-6 text-gray-300 font-medium text-sm md:text-base max-w-sm">
              <p>
                Behind every visual lies a process<br/>
                of exploration, experimentation,<br/>
                and storytelling.
              </p>
              <p>
                Discover how each idea evolved into a <span className="text-[#E87A5D]">design solution.</span>
              </p>
            </div>
  
            {/* Dot indicator */}
            <div className="flex gap-2 mt-12">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            </div>
          </div>
  
          {/* Right Content - Cascading Cards Placeholder */}
          <div className="w-full md:w-1/2 h-64 md:h-auto flex justify-end relative mt-10 md:mt-0">
            {/* Note: In a real build, you would slice the "cascading cards" graphic from your PDF/Figma and place it here as an <img src="..." /> */}
            <div className="w-full max-w-md h-64 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-500 text-sm italic">
              [Insert Cascading Cards Graphic Here]
            </div>
          </div>
  
        </div>
      </section>
    );
  }
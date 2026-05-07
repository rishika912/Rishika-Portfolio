export default function Navbar({ currentView, setView }) {
  return (
    <nav className="w-full flex justify-center pt-8 pb-4 relative z-50">
      <div className="flex font-['Urbanist',sans-serif]">
        {/* Rishika Button - Dark Navy */}
        <button 
          onClick={() => setView('rishika')}
          className={`flex items-center gap-2 px-8 py-3 rounded-l-full text-[15px] font-bold transition-all ${
            currentView === 'rishika' ? 'bg-[#1C2A43] text-white' : 'bg-[#1C2A43]/80 text-white hover:bg-[#1C2A43]'
          }`}
        >
          {/* Orange Splash Icon Placeholder */}
          <div className="w-5 h-5 bg-[#F2854A] rounded-full flex items-center justify-center overflow-hidden">
             <span className="text-white text-[10px]">R</span>
          </div>
          Rishika
        </button>
        
        {/* Projects Button - Orange */}
        <button 
          onClick={() => setView('projects')}
          className={`px-8 py-3 rounded-r-full text-[15px] font-bold transition-all ${
            currentView === 'projects' ? 'bg-[#F2854A] text-white' : 'bg-[#F2854A]/90 text-white hover:bg-[#F2854A]'
          }`}
        >
          Projects
        </button>
      </div>
    </nav>
  );
}
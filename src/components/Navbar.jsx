import React from "react";
import logo from "/logo.png"; // <-- Keep this import!

export default function Navbar({ currentView, setView }) {
  return (
    <nav className="flex justify-center w-full pt-6 pb-0 mb-0 relative z-50 font-['Urbanist',sans-serif] translate-y-4">
      
      {/* Outer Container: The overall Orange Pill */}
      <div className="relative w-[420px] h-[65px] bg-[#F2854A] rounded-full shadow-sm flex overflow-hidden cursor-pointer">
        
        {/* Sliding Navy Background Pill */}
        <div 
          className="absolute top-0 bottom-0 w-[55%] bg-[#1C2A43] rounded-full transition-all duration-300 ease-in-out z-0"
          style={{
            left: currentView === 'rishika' ? '0%' : '45%',
          }}
        ></div>

        {/* Rishika Button */}
        <button 
          onClick={() => setView('rishika')}
          className="flex-1 flex items-center justify-center gap-2.5 text-[22px] font-neue font-medium z-10 tracking-[1px] translate-y-0.5 text-white transition-colors"
        >
          {/* TAB BAR LOGO */}
          <div className={`w-7 h-7 rounded-full overflow-hidden transition-opacity duration-300 -translate-y-0.5 ${
            currentView === 'rishika' ? 'opacity-100' : 'opacity-40'
          }`}>
            <img src={logo} alt="Icon" className="w-full h-full object-cover" />
          </div>
          Rishika
        </button>

        {/* Projects Button */}
        <button 
          onClick={() => setView('projects')}
          className="flex-1 flex items-center justify-center text-[22px] font-neue font-medium z-10 tracking-[1px] translate-y-0.5 text-white transition-colors"
        >
          Projects
        </button>

      </div>
    </nav>
  );
}
export default function Navbar({ currentView, setView }) {
  return (
    <nav className="flex justify-center w-full pt-6 pb-0 mb-0 relative z-50 font-['Urbanist',sans-serif] translate-y-4">
      
      {/* Outer Container: The overall Orange Pill */}
      <div className="relative w-[420px] h-[65px] bg-[#F2854A] rounded-full shadow-sm flex overflow-hidden cursor-pointer">
        
        {/* Sliding Navy Background Pill */}
        {/* The 'left' property changes dynamically based on the currentView state */}
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
          {/* Circular Icon - Fades to semi-transparent when inactive so it doesn't clash with the orange */}
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
            currentView === 'rishika' ? 'bg-[#F2854A]' : 'bg-white/30'
          }`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.43 4 16.05 4 12C4 7.95 7.05 4.57 11 4.07V19.93ZM13 4.07C16.95 4.57 20 7.95 20 12C20 16.05 16.95 19.43 13 19.93V4.07Z"/>
            </svg>
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
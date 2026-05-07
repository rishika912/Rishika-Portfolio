import rishikaPortrait from '../assets/rishika-portrait.png'; // Make sure the extension matches your file!

export default function Hero() {
  return (
    <section className="pb-16 px-6 lg:px-8 max-w-[1050px] mx-auto bg-[#FAF8F4] relative overflow-hidden font-['Urbanist',sans-serif]">
      
      {/* Center Header - Pushed up closer to the navbar */}
      <div className="flex flex-col items-center text-center mb-10 mt-2">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-xl font-medium text-[#1C2A43]">Hello,</span>
          {/* Orange swoosh flourish */}
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 2C16.5 5 22 5.5 22 5.5C22 5.5 17 8.5 13.5 5.5C10 2.5 14.5 2 14.5 2Z" fill="#F2854A"/>
            <path d="M4.5 9.5C7.5 13 14 13.5 14 13.5C14 13.5 8.5 17 4.5 13.5C0.5 10 4.5 9.5 4.5 9.5Z" fill="#F2854A"/>
          </svg>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium text-[#1C2A43] mb-2 tracking-tight">
          I'm <span className="text-[#F2854A] font-bold">Rishika Jain,</span>
        </h1>
        <h2 className="text-[2.5rem] leading-none font-medium text-[#1C2A43] tracking-tight">
          Visual Communication Designer
        </h2>
      </div>

      {/* 3-Column Layout - Tighter Max-Width to bring columns closer */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_auto_240px] gap-8 lg:gap-12 items-end justify-center w-full">
        
        {/* LEFT COLUMN: Quote & Stats */}
        <div className="flex flex-col justify-end w-full pb-4">
          <div className="relative mb-10 pl-2">
            <span className="text-[70px] text-[#1C2A43] font-serif absolute -top-9 -left-4 leading-none">“</span>
            <p className="text-[#1C2A43] text-[13px] leading-relaxed relative z-10 font-medium">
              I enjoy collaborating with teams<br/>
              and creating design solutions<br/>
              through open communication<br/>
              and thoughtful problem solving.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-[2px] border-[#F2854A] pb-2 w-[180px]">
              <span className="text-[55px] font-light text-[#1C2A43] leading-none">
                15<span className="text-[35px] font-medium">+</span>
              </span>
              <span className="text-[13px] text-[#1C2A43] leading-tight font-medium">Projects<br/>Completed</span>
            </div>
            
            <div className="flex items-center gap-3 border-b-[2px] border-[#F2854A] pb-2 w-[180px]">
              <span className="text-[55px] font-light text-[#1C2A43] leading-none">
                9<span className="text-[35px] font-medium">+</span>
              </span>
              <span className="text-[13px] text-[#1C2A43] leading-tight font-medium">Clients<br/>Served</span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Portrait & Buttons */}
        <div className="flex flex-col items-center relative z-10">
          
          {/* Portrait overlapping Orange Arch */}
          <div className="relative w-[300px] h-[340px] flex justify-center items-end">
            <div className="absolute bottom-0 w-[240px] h-[280px] bg-[#F2854A] rounded-t-full -z-10"></div>
            
            {/* The Actual Cutout Image */}
            <img 
              src={rishikaPortrait} 
              alt="Rishika Jain" 
              className="w-[280px] h-auto object-contain z-10 relative bottom-[-5px]" 
            />
          </div>

          {/* Buttons Row */}
          <div className="flex items-center gap-3 mt-6">
            <button className="px-6 py-2 rounded-full border-[1.5px] border-[#1C2A43] text-[#1C2A43] font-bold text-[14px] bg-transparent hover:bg-white transition-colors">
              Porfolio
            </button>
            <button className="px-6 py-2 rounded-full bg-[#F2854A] text-white font-bold text-[14px] flex items-center gap-2 hover:bg-[#d9733d] transition-colors">
              Resume ↗
            </button>
            
            <div className="flex gap-2 ml-1">
              <a href="#" className="w-9 h-9 rounded-full border-[1.5px] border-[#1C2A43] flex items-center justify-center font-bold text-[#1C2A43] text-sm hover:bg-[#1C2A43] hover:text-white transition-colors">in</a>
              <a href="#" className="w-9 h-9 rounded-full border-[1.5px] border-[#1C2A43] flex items-center justify-center font-bold text-[#1C2A43] text-sm hover:bg-[#1C2A43] hover:text-white transition-colors">Bē</a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Experience */}
        <div className="flex flex-col justify-end w-full pb-6 relative pl-2">
          
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-[65px] font-light text-[#1C2A43] leading-none">6+</span>
            <span className="text-[20px] text-[#1C2A43] font-medium">Months</span>
          </div>
          
          <p className="text-[12px] font-bold text-[#1C2A43] border-b-[2px] border-[#F2854A] pb-2 mb-5 w-[220px]">
            Industry Experience in Design Agency
          </p>
          
          <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-[13px] text-[#1C2A43] font-medium">
            <div className="flex items-center gap-1.5"><span className="text-[#F2854A] text-sm">✦</span> Branding</div>
            <div className="flex items-center gap-1.5"><span className="text-[#F2854A] text-sm">✦</span> Print Media</div>
            <div className="flex items-center gap-1.5"><span className="text-[#F2854A] text-sm">✦</span> Packaging</div>
            <div className="flex items-center gap-1.5"><span className="text-[#F2854A] text-sm">✦</span> UI Design</div>
            <div className="flex items-center gap-1.5"><span className="text-[#F2854A] text-sm">✦</span> Spatial Graphics</div>
            <div className="flex items-center gap-1.5"><span className="text-[#F2854A] text-sm">✦</span> Campaign</div>
          </div>

          {/* Looping Squiggly Arrow drawn specifically to match your image */}
          <div className="absolute -bottom-24 right-4 z-0 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M85 100 C 50 120, 30 70, 70 80 C 110 90, 115 50, 80 20" stroke="#1C2A43" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M80 20 L 95 15 M 80 20 L 85 35" stroke="#1C2A43" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          
        </div>
      </div>
    </section>
  );
}
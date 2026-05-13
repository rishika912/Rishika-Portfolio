import rishikaPortrait from '../assets/rishika-portrait.png';

export default function Hero() {
  return (
    <section className="pb-16 px-6 lg:px-8 max-w-[1250px] mx-auto bg-[#FFF8F3] relative overflow-hidden font-urbanist">
      
      {/* Center Header */}
      <div className="flex flex-col items-center text-center mb-2 mt-4 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-[34px] font-medium text-[#1C2A43]">Hello,</span>
          <svg width="28" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-2">
            <path d="M13 3.5C16 7.5 23 6.5 23 6.5C23 6.5 17 11.5 12 7.5C8 3.5 13 3.5 13 3.5Z" fill="#F2854A"/>
            <path d="M4.5 11.5C8.5 16.5 16 15.5 16 15.5C16 15.5 9 20.5 4.5 16.5C0.5 12.5 4.5 11.5 4.5 11.5Z" fill="#F2854A"/>
          </svg>
        </div>
        <h1 className="text-6xl md:text-[5rem] font-medium text-[#1C2A43] mb-3 tracking-tight">
          I'm <span className="text-[#F2854A] font-bold">Rishika Jain,</span>
        </h1>
        <h2 className="text-[3rem] leading-none font-medium text-[#1C2A43] tracking-tight">
          Visual Communication Designer
        </h2>
      </div>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_auto_300px] gap-8 lg:gap-12 items-end justify-center w-full relative z-20">
        
        {/* LEFT COLUMN: Quote & Stats */}
        <div className="flex flex-col justify-end w-full pb-8 pl-4 lg:pl-6">
          
          {/* Quote Section */}
          <div className="relative mb-12">
            
            {/* The Quote Mark: 
                - absolute and -top-12 positions it perfectly above the text 
                  WITHOUT pushing the center image down.
            */}
            <div className="absolute -top-12 left-0 text-[75px] text-[#1C2A43] font-serif leading-none">
              “
            </div>
            
            <p className="text-[#1C2A43] text-[16px] leading-[1.6] font-medium">
              I enjoy collaborating with teams<br/>
              and creating design solutions<br/>
              through open communication<br/>
              and thoughtful problem solving.
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="flex flex-col gap-10">
            
            {/* Stat 1: 15+ */}
            <div className="flex items-center gap-5">
              <div className="border-b-[3px] border-[#F2854A] pb-1.5 px-1">
                <span className="text-[80px] font-light text-[#1C2A43] leading-[0.75] tracking-tighter">
                  15<span className="text-[50px] font-medium">+</span>
                </span>
              </div>
              <span className="text-[20px] text-[#1C2A43] leading-[1.15] font-medium">
                Projects<br/>Completed
              </span>
            </div>
            
            {/* Stat 2: 9+ */}
            <div className="flex items-center gap-5">
              <div className="border-b-[3px] border-[#F2854A] pb-1.5 px-1 pr-4">
                <span className="text-[80px] font-light text-[#1C2A43] leading-[0.75] tracking-tighter">
                  9<span className="text-[50px] font-medium">+</span>
                </span>
              </div>
              <span className="text-[20px] text-[#1C2A43] leading-[1.15] font-medium">
                Clients<br/>Served
              </span>
            </div>

          </div>
        </div>

        {/* CENTER COLUMN: Portrait & Buttons */}
        <div className="flex flex-col items-center relative z-20">
          
          {/* Image & Arch Container 
              Kept the original -mt-24 so her head stays perfectly aligned with the text.
          */}
          <div className="relative w-[340px] flex justify-end items-end -mt-24 pt-12">
            
            {/* The Orange Arch: 
                - Uses `-bottom-5` to ONLY extend the orange background downwards.
                - Uses `left-2` to shift it left.
                - Uses `rounded-bl-3xl` for that soft corner you pointed to.
            */}
            <div className="absolute -bottom-6 -left-2 w-[300px] h-[312px] bg-[#F2854A] rounded-t-full rounded-bl-[0px] z-0"></div>
            
            {/* The Portrait: Untouched. Naturally sits exactly where it should. */}
            <img 
              src={rishikaPortrait} 
              alt="Rishika Jain" 
              className="w-[330px] h-auto object-contain z-10 relative" 
            />
          </div>

          {/* Buttons Row - Shifted left slightly using -translate-x */}
          <div className="flex items-center relative z-20 mt-2 translate-x-15">
            
            {/* THE NEW SINGLE CONTAINER: 
                - bg-[#FFF8F3] and rounded-full creates a solid white pill behind both buttons.
                - p-1 gives a little padding so the buttons sit nicely inside.
                - The ring is applied to this outer container so it "bites" the arch as one solid unit.
            */}
            <div className="flex items-center gap-2 bg-[#FFF8F3] rounded-full p-0 ring-[8px] ring-[#FFF8F3]">
              
              <button className="px-10 py-2.5 rounded-full border-[1.5px] border-[#1C2A43] text-[#1C2A43] font-bold text-[25px] bg-[#FFF8F3] hover:bg-white transition-colors">
                Porfolio
              </button>
              
              <button className="px-10 py-2.5 rounded-full bg-[#F2854A] text-white font-bold text-[25px] flex items-center gap-2 hover:bg-[#d9733d] transition-colors">
                Resume ↗
              </button>
            </div>

            {/* Social Icons - Safely to the right */}
            <div className="flex gap-2 ml-6">
              <a href="#" className="w-11 h-11 rounded-full border-[1.5px] border-[#1C2A43] flex items-center justify-center font-bold text-[#1C2A43] text-[15px] bg-[#FFF8F3] hover:bg-[#1C2A43] hover:text-white transition-colors">in</a>
              <a href="#" className="w-11 h-11 rounded-full border-[1.5px] border-[#1C2A43] flex items-center justify-center font-bold text-[#1C2A43] text-[15px] bg-[#FFF8F3] hover:bg-[#1C2A43] hover:text-white transition-colors">Bē</a>
            </div>

          </div>
          
        </div> {/* <--- THIS IS THE DIV YOU WERE MISSING! IT CLOSES THE CENTER COLUMN */}


        {/* RIGHT COLUMN: Experience */}
        <div className="flex flex-col justify-end w-full pb-8 relative pl-6">
          
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-[85px] font-light text-[#1C2A43] leading-none tracking-tighter">6+</span>
            <span className="text-[24px] text-[#1C2A43] font-medium pb-2">Months</span>
          </div>
          
          <p className="text-[15px] font-bold text-[#1C2A43] border-b-[3px] border-[#F2854A] pb-2.5 mb-6 w-[260px]">
            Industry Experience in Design Agency
          </p>
          
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[15px] text-[#1C2A43] font-medium">
            <div className="flex items-center gap-2"><span className="text-[#F2854A] text-base">✦</span> Branding</div>
            <div className="flex items-center gap-2"><span className="text-[#F2854A] text-base">✦</span> Print Media</div>
            <div className="flex items-center gap-2"><span className="text-[#F2854A] text-base">✦</span> Packaging</div>
            <div className="flex items-center gap-2"><span className="text-[#F2854A] text-base">✦</span> UI Design</div>
            <div className="flex items-center gap-2"><span className="text-[#F2854A] text-base">✦</span> Spatial Graphics</div>
            <div className="flex items-center gap-2"><span className="text-[#F2854A] text-base">✦</span> Campaign</div>
          </div>

          {/* CONNECTED HERO → FEATURED SCRIBBLE */}
<div className="hidden lg:block absolute right-[40px] bottom-[-118px] z-[60] pointer-events-none">

<svg
  width="240"
  height="220"
  viewBox="0 0 240 220"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>

  {/* MAIN SCRIBBLE */}
  <path
    d="
      M190 12
      C220 38 225 92 200 126
      C176 158 130 168 96 154
      C69 143 63 112 82 95
      C102 78 129 88 133 115
      C139 151 108 175 69 176
      C34 176 8 158 0 128
    "
    stroke="#1C2A43"
    strokeWidth="2"
    strokeLinecap="round"
    fill="none"
  />

  {/* ARROW HEAD */}
  <path
    d="M178 16 L192 12 L188 26"
    stroke="#1C2A43"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />

</svg>
</div>
          
        </div>
      </div>
    </section>
  );
}
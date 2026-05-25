import React from 'react';
import rishikaPortrait from '../assets/rishika-portrait.png';
import resumePdf from '../assets/rishika jain resume.pdf'; 

export default function Hero({ setView }) {

  // This function handles the dual-action (Viewing + Downloading)
  const handleResumeClick = () => {
    window.open(resumePdf, '_blank');
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = "Rishika_Jain_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pb-16 px-6 lg:px-8 max-w-[1250px] mx-auto bg-[#fff8f3] relative overflow-visible font-urbanist">

      {/* ======================================================= */}
      {/* CUSTOM ANIMATIONS */}
      {/* ======================================================= */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeRight {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeLeft {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }

          /* Reusable animation classes */
          .anim-fade-up { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .anim-fade-right { opacity: 0; animation: fadeRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .anim-fade-left { opacity: 0; animation: fadeLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .anim-scale-in { opacity: 0; animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}
      </style>

      {/* Center Header */}
      <div className="flex flex-col items-center text-center mb-2 mt-4 relative z-10">

        <div 
          className="relative flex items-center font-urbanist tracking-[-1px] justify-center mb-2 w-fit anim-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-[30px] font-semibold text-[#1C2A43]">
            Hello,
          </span>

          {/* CUSTOM LOGO SWOOSHES */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="#f98d3d"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-7 -mt-7 hover:rotate-12 transition-transform duration-500" 
          >
            <path d="M 18 60 Q 50 28 44 18 A 14 14 0 0 1 66 26 Q 55 52 25 60 Z" />
            <path d="M 15 75 Q 58 68 82 42 A 14 14 0 0 1 95 62 Q 65 96 15 75 Z" />
          </svg>
        </div>

        <h1 
          className="text-6xl md:text-[3.5rem] font-neue font-medium text-[#1C2A43] mb-3 tracking-tight anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          I'm <span className="text-[#f98d3d] font-medium">Rishika Jain,</span>
        </h1>

        <h2 
          className="text-[3.2rem] leading-none font-ginder font-medium text-[#1C2A43] tracking anim-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Visual Communication Designer
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_auto_300px] gap-8 lg:gap-12 items-end justify-center w-full relative z-20">

        {/* LEFT */}
        <div 
          className="flex flex-col justify-end w-full pb-8 pl-4 lg:pl-0 anim-fade-right"
          style={{ animationDelay: "0.5s" }}
        >

          <div className="relative mb-10 left-16">

            <div className="absolute -top-14 -left-1 text-[180px] text-[#1C2A43] font-neue leading-none">
              “
            </div>

            <p className="text-[#1C2A43] text-[20px] text-ginder leading-[1.2] font-neue font-normal">
              I enjoy collaborating with teams
              <br />
              and creating design solutions
              <br />
              through open communication
              <br />
              and thoughtful problem solving.
            </p>
          </div>

          <div className="flex flex-col gap-10 translate-x-14 translate-y-3">

            <div className="flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
              <div className="border-b-[3px] border-[#f98d3d] pb-1.9 px-1">
                <span className="text-[90px] font-medium text-[#1C2A43] leading-[0.75] font-peroxidase">
                  15<span className="text-[90px] font-medium ">+</span>
                </span>
              </div>

              <span className="text-[34px] text-[#1C2A43] leading-[1.15] font-light font-peroxidase">
                Projects
                <br />
                Completed
              </span>
            </div>

            <div className="flex items-center gap-6 translate-y-3 hover:-translate-y-1 transition-transform duration-300">
              <div className="border-b-[3px] border-[#f98d3d] pb-1.9 px-1 pr-4">
                <span className="text-[90px] font-medium text-[#1C2A43] leading-[0.75] font-peroxidase">
                  9<span className="text-[90px] font-medium">+</span>
                </span>
              </div>

              <span className="text-[34px] text-[#1C2A43] leading-[1.15] font-light font-peroxidase">
                Clients
                <br />
                Served
              </span>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center relative z-20">

          {/* Portrait scales in smoothly */}
          <div 
            className="relative w-[340px] flex justify-end items-end -mt-24 pt-12 anim-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute -bottom-6 -left-2 w-[300px] h-[312px] bg-[#f98d3d] rounded-t-full z-0"></div>
            <img
              src={rishikaPortrait}
              alt="Rishika Jain"
              className="w-[330px] h-auto object-contain z-10 relative drop-shadow-xl"
            />
          </div>

          {/* Buttons fade up from below */}
          <div 
            className="flex items-center relative z-20 mt-2 translate-x-15 anim-fade-up"
            style={{ animationDelay: "0.7s" }}
          >

            <div className="flex items-center gap-2 bg-[#fff8f3] rounded-full p-0 ring-[8px] ring-[#fff8f3]">

              {/* PORTFOLIO BUTTON */}
              <button 
                onClick={() => setView('projects')}
                className="px-10 py-2.5 rounded-full border-[1.5px] border-[#1C2A43] text-[#1C2A43] font-bold text-[25px] bg-[#fff8f3] flex items-center justify-center hover:bg-[#1C2A43] hover:text-[#fff8f3] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Portfolio
              </button>

              {/* RESUME BUTTON */}
              <button 
                onClick={handleResumeClick}
                className="px-10 py-2.5 rounded-full bg-[#f98d3d] text-white font-bold text-[25px] border-[1.5px] border-transparent flex items-center justify-center gap-1 hover:scale-105 transition-transform cursor-pointer"
              >
                Resume <span className="text-[28px] leading-none mb-1">↗</span>
              </button>
            </div>

            <div className="flex gap-4 ml-6 translate-x-7">
              <a 
                href="https://www.linkedin.com/in/rishika-jain-9909r?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-[3px] border-[#1C2A43] flex items-center justify-center font-bold text-[#1C2A43] text-[28px] bg-[#fff8f3] hover:bg-[#1C2A43] hover:text-[#fff8f3] hover:-translate-y-1 transition-all duration-300"
              >
                in
              </a>
              <a 
                href="https://www.behance.net/rishikajain9909" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-[3px] border-[#1C2A43] flex items-center justify-center font-bold text-[#1C2A43] text-[26px] bg-[#fff8f3] hover:bg-[#1C2A43] hover:text-[#fff8f3] hover:-translate-y-1 transition-all duration-300"
              >
                Bē
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div 
          className="flex flex-col justify-end w-full pb-8 relative mb-15 -ml-30 pl-6 anim-fade-left"
          style={{ animationDelay: "0.6s" }}
        >

          <div className="flex items-baseline gap-3 font-peroxidase hover:translate-x-1 transition-transform duration-300">
            <span className="text-[85px] font-medium text-[#1C2A43] leading-none">
              6+
            </span>
            <span className="text-[34px] text-[#1C2A43] font-light pb-2">
              Months
            </span>
          </div>

          <p className="text-[18px] font-neue font-medium text-[#1C2A43] border-b-[3px] border-[#f98d3d] mb-4 w-max whitespace-nowrap">
            Hands-On Agency Experience
          </p>

          <div className="grid grid-cols-2 gap-y-1 gap-x-8 font-neue text-[18px] text-[#1C2A43] shrink-0 w-max whitespace-nowrap">
            <div className="hover:translate-x-1 transition-transform cursor-default"><span className="text-[#f98d3d] mr-2">✦</span> Branding</div>
            <div className="hover:translate-x-1 transition-transform cursor-default"><span className="text-[#f98d3d] mr-2">✦</span> Print Media</div>
            <div className="hover:translate-x-1 transition-transform cursor-default"><span className="text-[#f98d3d] mr-2">✦</span> Packaging</div>
            <div className="hover:translate-x-1 transition-transform cursor-default"><span className="text-[#f98d3d] mr-2">✦</span> UI Design</div>
            <div className="hover:translate-x-1 transition-transform cursor-default"><span className="text-[#f98d3d] mr-2">✦</span> Spatial Graphics</div>
            <div className="hover:translate-x-1 transition-transform cursor-default"><span className="text-[#f98d3d] mr-2">✦</span> Campaign</div>
            <div className="hover:translate-x-1 transition-transform cursor-default col-span-2"><span className="text-[#f98d3d] mr-2">✦</span> AI-Assisted Workflows</div>
          </div>

        </div>
      </div>
    </section>
  );
}
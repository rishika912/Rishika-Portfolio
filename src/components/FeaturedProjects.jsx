import React, { useEffect, useRef, useState } from "react";

// 1. Import your images
import project1 from "../assets/ravana.png";
import project2 from "../assets/oren.png";
import project3 from "../assets/nivaha.png";
import project4 from "../assets/mega bloks.png";
import project5 from "../assets/drop dead.png";
import project6 from "../assets/Kathrang.png";

export default function FeaturedProjects() {
  // State for the carousel and scroll detection
  const [activeIndex, setActiveIndex] = useState(5); // Starts with Project 6 on top
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // The 6 image files
  const projects = [project1, project2, project3, project4, project5, project6];

  // OPTIMIZED: Uses GPU-Accelerated Translate instead of Right/Bottom, and lighter shadows
  const positionClasses = [
    "-translate-x-[10px] translate-y-[0px] rotate-[8deg] z-0 shadow-lg",
    "-translate-x-[48px] -translate-y-[36px] rotate-[4deg] z-10 shadow-xl",
    "-translate-x-[88px] -translate-y-[70px] rotate-[-1deg] z-20 shadow-xl",
    "-translate-x-[128px] -translate-y-[102px] rotate-[-5deg] z-30 shadow-2xl",
    "-translate-x-[168px] -translate-y-[136px] rotate-[-10deg] z-40 shadow-2xl",
    "-translate-x-[214px] -translate-y-[170px] rotate-[-17deg] z-50 shadow-2xl",
  ];

  // Scroll detection to trigger initial pop-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-play the carousel (changes every 3.5 seconds)
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      // Cycles the deck perfectly (Top card drops to the bottom)
      setActiveIndex((prev) => (prev + 5) % 6); 
    }, 3500); 
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full bg-[#fff8f3] py-5 px-4 lg:px-8 overflow-visible font-urbanist">
      
      {/* Custom CSS Animation for the initial scroll pop-up */}
      <style>
        {`
          @keyframes popUpFade {
            0% { opacity: 0; transform: translateY(80px) scale(0.9); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-card {
            opacity: 0;
            animation: popUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      {/* WIDTH CONTROLLER */}
      <div className="max-w-[1300px] mx-auto relative">

        {/* HEIGHT CONTROLLER */}
        <div className="relative min-h-[700px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-visible">

          {/* MOBILE BACKGROUND */}
          <div className="absolute inset-0 bg-[#162a42] rounded-[34px] lg:hidden z-0 pointer-events-none"></div>

          {/* DESKTOP BACKGROUND */}
          <div className="absolute inset-0 hidden lg:block z-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-[450px] bottom-0 bg-[#162a42] rounded-tl-[34px] rounded-bl-[34px] rounded-tr-[34px]"></div>
            <div className="absolute top-[98px] right-0 w-[470px] bottom-0 bg-[#162a42] rounded-br-[34px] rounded-tr-[34px]"></div>
            <div
              className="absolute top-[64px] right-[416px] w-[34px] h-[34px]"
              style={{ background: "radial-gradient(circle at 100% 0%, transparent 33.5px, #162a42 34px)" }}
            />
          </div>

          <div className="relative z-20 flex flex-col lg:flex-row h-full">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[47%] px-10 lg:px-[70px] pt-[78px] pb-20 flex flex-col justify-between translate-x-15">
              <div>
                <h2 className="text-white text-[62px] leading-[0.95] font-causten translate-y-8">
                  Featured Projects
                </h2>

                <div className="mt-[175px] max-w-[430px] translate-y-25">
                  <p className="text-white text-[24px] leading-[1.28] font-ginder tracking-[1px]">
                    Every project begins with a brief
                    and ends with a system
                    research, concept, execution, and
                    storytelling working in sequence.
                  </p>
                  <p className="mt-10 text-white text-[24px] leading-[1.28] font-light font-ginder tracking-[1px] whitespace-nowrap">
                    Discover how each idea evolved into a{" "}
                    <span className="text-[#f98d3d] font-medium font-ginder">
                      design solution.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Cards) */}
            <div className="w-full lg:w-[53%] top-20 right-10 relative flex items-center justify-center pb-20 lg:pb-0">

              {/* STACK AREA */}
              <div className="relative w-[560px] h-[360px] scale-[1.1] lg:scale-[1.2] origin-center mt-10">

                {/* Map through the 6 projects and automatically assign them positions */}
                {projects.map((proj, i) => {
                  
                  // Math magic to cycle the positions perfectly!
                  const posIndex = ((i - activeIndex + 5) % 6 + 6) % 6;
                  
                  return (
                    <div 
                      key={i}
                      onClick={() => setActiveIndex(i)} 
                      className={`
                        absolute right-0 bottom-0 rounded-[18px]
                        transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                        cursor-pointer hover:scale-105 will-change-transform
                        ${positionClasses[posIndex]}
                      `}
                    >
                      <div 
                        className={isVisible ? "animate-card" : "opacity-0"} 
                        style={{ animationDelay: `${posIndex * 0.15}s` }}
                      >
                        <img 
                          src={proj} 
                          alt={`Featured Project ${i + 1}`} 
                          className="w-[305px] h-[136px] object-cover rounded-[18px]" 
                        />
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          {/* DYNAMIC INTERACTIVE DOTS */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-[11px] z-30">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-[7px] h-[7px] rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? "bg-white scale-[1.5]" : "bg-white/45 hover:bg-white/70 hover:scale-[1.2]"
                }`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
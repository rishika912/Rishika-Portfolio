import React, { useEffect, useRef } from "react";
import softwareBar from "../assets/software-bar.png";

export default function CoreSkills() {

  // =======================================================
  // SCROLL TRIGGER LOGIC (Lag-Free GPU Optimized)
  // =======================================================
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Instead of using React state (which causes laggy re-renders), 
        // we directly attach a CSS class to the DOM element!
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("trigger-animations");
        } else {
          sectionRef.current.classList.remove("trigger-animations");
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // =======================================================
  // DATA
  // =======================================================
  const floatingSkills = [
    { name: "Typography", dark: false, rotate: "-20deg", left: "135px", bottom: "20px", zIndex: 10 },
    { name: "Wayfinding", dark: true, rotate: "-10deg", left: "260px", bottom: "95px", zIndex: 20 },
    { name: "Packaging Design", dark: true, rotate: "0deg", left: "272px", bottom: "0px", zIndex: 10 },
    { name: "Campaign Design", dark: false, rotate: "22deg", left: "390px", bottom: "33px", zIndex: 10 },
    { name: "Publication Design", dark: false, rotate: "-10deg", left: "530px", bottom: "75px", zIndex: 20 },
    { name: "Visual System", dark: true, rotate: "-35deg", left: "648px", bottom: "40px", zIndex: 10 },
    { name: "UI Design", dark: true, rotate: "13deg", left: "765px", bottom: "10px", zIndex: 20 },
    { name: "Brand Identity Design", dark: false, rotate: "0deg", left: "980px", bottom: "0px", zIndex: 10 },
    { name: "Environmental Graphics", dark: true, rotate: "-14deg", left: "890px", bottom: "54px", zIndex: 30 },
  ];

  return (
    // We attach the ref here. The observer will add the "trigger-animations" class to this section!
    <section ref={sectionRef} className="w-full bg-[#fff8f3] overflow-hidden font-ginder pt-10 pb-0">

      {/* ======================================================= */}
      {/* CUSTOM DROP ANIMATION (Hardware Accelerated) */}
      {/* ======================================================= */}
      <style>
        {`
          @keyframes dropIn {
            0% { opacity: 0; transform: translateY(-300px); }
            70% { opacity: 1; transform: translateY(10px); }
            85% { transform: translateY(-3px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          .anim-drop-pill {
            opacity: 0;
            /* will-change tells the GPU to prepare for animation, removing lag entirely */
            will-change: transform, opacity; 
          }

          /* The animation ONLY fires when the section gets this class */
          .trigger-animations .anim-drop-pill {
            animation: dropIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `}
      </style>

      <div className="relative w-full h-[380px] bg-[#f98d3d] overflow-hidden">

        <div className="absolute top-0 right-0 w-[60%] max-w-[850px] h-[130px] bg-[#fff8f3] rounded-bl-[46px] z-10">

          <div
            className="
              absolute
              top-0
              -left-[46px]
              w-[46px]
              h-[46px]
              bg-[#fff8f3]
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-[#f98d3d]
                rounded-tr-[46px]
              "
            />
          </div>

          <img
            src={softwareBar}
            alt="Software Bar"
            className="
              absolute
              right-[20px]
              lg:right-[160px]
              top-[0px]
              w-[670px]
              h-[110px]
              object-fill
              z-20
              select-none
              pointer-events-none
            "
          />
            
        </div>

        <div className="relative max-w-[1250px] mx-auto w-full h-full pointer-events-none">
          
          <h2 
            className="absolute left-[20px] lg:left-[120px] top-[50px] lg:top-[50px] text-white text-[56px] lg:text-[68px] font-thin tracking-[2px] leading-none z-20"
            style={{ wordSpacing: "8px" }}
          >
            Core Skills
          </h2>

          <div className="absolute inset-0 pointer-events-auto -translate-x-13">
            {floatingSkills.map((skill, index) => (
              
              /* OUTER WRAPPER: Now purely driven by CSS, no React state re-rendering! */
              <div
                key={skill.name}
                className="absolute anim-drop-pill"
                style={{
                  left: skill.left,
                  bottom: skill.bottom,
                  zIndex: skill.zIndex,
                  animationDelay: `${0.2 + index * 0.1}s` 
                }}
              >
                
                {/* INNER PILL */}
                <div
                  className="
                    rounded-full
                    px-6
                    pt-[14px]
                    pb-[6px]
                    text-[20px]
                    lg:text-[22px]
                    leading-none
                    font-medium
                    whitespace-nowrap
                    shadow-[0_8px_16px_rgba(0,0,0,0.12)]
                    hover:scale-[1.04]
                    transition-transform
                    duration-300
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    tracking-[1px]
                  "
                  style={{
                    transform: `rotate(${skill.rotate})`,
                    background: skill.dark ? "#162a42" : "#fff8f3",
                    color: skill.dark ? "#fff8f3" : "#162a42",
                  }}
                >
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
import React from "react";
import softwareBar from "../assets/software-bar.png";

export default function CoreSkills() {

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

  const adobeApps = [
    { label: "Id", bg: "#49021F", border: "#FF2D7A", text: "#FF4C8D", shadow: "#FF2D7A55" },
    { label: "Ae", bg: "#27155E", border: "#8D84FF", text: "#C6BEFF", shadow: "#8D84FF55" },
    { label: "Ai", bg: "#300000", border: "#FFB000", text: "#FF9A00", shadow: "#FFB00055" },
    { label: "Ps", bg: "#001E36", border: "#31A8FF", text: "#31A8FF", shadow: "#31A8FF55" },
    { label: "Pr", bg: "#27155E", border: "#8D84FF", text: "#C6BEFF", shadow: "#8D84FF55" },
  ];

  return (
    <section className="w-full bg-[#FFF8F3] overflow-hidden font-ginder pt-10 pb-16">

      <div className="relative w-full h-[380px] bg-[#F28E38] overflow-hidden">

        <div className="absolute top-0 right-0 w-[60%] max-w-[850px] h-[130px] bg-[#FFF8F3] rounded-bl-[46px] z-10">

          <div
            className="
              absolute
              top-0
              -left-[46px]
              w-[46px]
              h-[46px]
              bg-[#FFF8F3]
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-[#F28E38]
                rounded-tr-[46px]
              "
            />
          </div>

          {/* SOFTWARE BAR IMAGE */}
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
            {floatingSkills.map((skill) => (
              <div
                key={skill.name}
                className="
                  absolute
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
                  left: skill.left,
                  bottom: skill.bottom, 
                  transform: `rotate(${skill.rotate})`,
                  background: skill.dark ? "#0D2748" : "#FFF8F3",
                  color: skill.dark ? "#FFF8F3" : "#0D2748",
                  zIndex: skill.zIndex,
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
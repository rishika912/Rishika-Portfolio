import React from "react";

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-[#FFF8F3] py-5 px-4 lg:px-8 overflow-visible font-urbanist">
      <div className="max-w-[1180px] mx-auto relative">

        

        {/* MAIN CONTAINER 
            - Removed overflow-hidden and standard box-shadow.
            - Switched to Tailwind's drop-shadow filter which perfectly traces the custom shape! 
        */}
        <div className="relative min-h-[615px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-visible">

          {/* MOBILE BACKGROUND (Simple Rectangle) */}
          <div className="absolute inset-0 bg-[#0E2747] rounded-[34px] lg:hidden z-0 pointer-events-none"></div>

          {/* DESKTOP BACKGROUND (Flawless Unified Shape without White Masks) */}
          <div className="absolute inset-0 hidden lg:block z-0 pointer-events-none">
             {/* Left Column (Spans everything except the 340px cutout) */}
             <div className="absolute top-0 left-0 right-[340px] bottom-0 bg-[#0E2747] rounded-tl-[34px] rounded-bl-[34px] rounded-tr-[34px]"></div>

             {/* Right Column (Starts below the cutout, includes the missing top-right rounded corner!) */}
             <div className="absolute top-[98px] right-0 w-[340px] bottom-0 bg-[#0E2747] rounded-br-[34px] rounded-tr-[34px]"></div>

             {/* Inner Concave Curve (Seamlessly connects the two columns) */}
             <div
               className="absolute top-[64px] right-[306px] w-[34px] h-[34px]"
               style={{ background: "radial-gradient(circle at 100% 0%, transparent 33.5px, #0E2747 34px)" }}
             />
          </div>

          <div className="relative z-20 flex flex-col lg:flex-row h-full">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[47%] px-10 lg:px-[70px] pt-[78px] pb-20 flex flex-col justify-between">

              <div>
                <h2 className="text-white text-[62px] leading-[0.95] tracking-[-2.6px] font-medium">
                  Featured Projects
                </h2>

                <div className="mt-[175px] max-w-[430px]">

                  <p className="text-white text-[22px] leading-[1.28] font-light tracking-[-0.2px]">
                    Behind every visual lies a process
                    of exploration, experimentation,
                    and storytelling.
                  </p>

                  <p className="mt-10 text-white text-[22px] leading-[1.28] font-light tracking-[-0.2px]">
                    Discover how each idea evolved into a{" "}
                    <span className="text-[#F08A42] font-medium">
                      design solution.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[53%] relative flex items-center justify-center pb-20 lg:pb-0">

              {/* STACK AREA */}
              <div className="relative w-[560px] h-[360px]">

                {/* PURPLE */}
                <div
                  className="
                    absolute
                    w-[305px]
                    h-[136px]
                    bg-[#B79CC5]
                    rounded-[18px]
                    right-[10px]
                    bottom-[0px]
                    rotate-[8deg]
                    shadow-[0_16px_26px_rgba(0,0,0,0.22)]
                    z-0
                  "
                />

                {/* ORANGE */}
                <div
                  className="
                    absolute
                    w-[305px]
                    h-[136px]
                    bg-[#E87D57]
                    rounded-[18px]
                    right-[48px]
                    bottom-[36px]
                    rotate-[4deg]
                    shadow-[0_16px_26px_rgba(0,0,0,0.22)]
                    z-10
                  "
                />

                {/* BLUE */}
                <div
                  className="
                    absolute
                    w-[305px]
                    h-[136px]
                    bg-[#90CBD4]
                    rounded-[18px]
                    right-[88px]
                    bottom-[70px]
                    rotate-[-1deg]
                    shadow-[0_16px_26px_rgba(0,0,0,0.20)]
                    z-20
                  "
                />

                {/* BEIGE */}
                <div
                  className="
                    absolute
                    w-[305px]
                    h-[136px]
                    bg-[#F2CB96]
                    rounded-[18px]
                    right-[128px]
                    bottom-[102px]
                    rotate-[-5deg]
                    shadow-[0_18px_28px_rgba(0,0,0,0.22)]
                    z-30
                  "
                />

                {/* GREY */}
                <div
                  className="
                    absolute
                    w-[305px]
                    h-[136px]
                    bg-[#AAAAAD]
                    rounded-[18px]
                    right-[168px]
                    bottom-[136px]
                    rotate-[-10deg]
                    shadow-[0_20px_32px_rgba(0,0,0,0.24)]
                    z-40
                  "
                />

                {/* MAIN WHITE CARD (Top Layer) */}
                <div
                  className="
                    absolute
                    w-[305px]
                    h-[136px]
                    bg-[#F7F4EE]
                    rounded-[18px]
                    overflow-hidden
                    right-[214px]
                    bottom-[170px]
                    rotate-[-17deg]
                    z-40
                    shadow-[0_28px_45px_rgba(0,0,0,0.38)]
                  "
                >

                  {/* PATTERN */}
                  <div className="absolute top-0 left-0 w-full h-[16px] opacity-50 bg-[radial-gradient(#cfd8d2_1.1px,transparent_1.1px)] bg-[size:10px_10px]" />

                  {/* LEFT TEXT */}
                  <div className="absolute left-[18px] top-[28px] z-10">

                    <p className="text-[6px] uppercase tracking-[2px] text-[#70857D] font-medium">
                      A complete
                    </p>

                    <h3 className="mt-[2px] text-[#1B5A46] text-[22px] leading-[0.88] font-black">
                      BRAND
                      <br />
                      IDENTITY
                    </h3>

                    <p className="mt-[7px] text-[6.4px] leading-[1.5] text-[#7A7A7A]">
                      for a modern, authentic
                      <br />
                      Rajasthani Handicraft Brand.
                    </p>
                  </div>

                  {/* RIGHT MOCKUP */}
                  <div
                    className="
                      absolute
                      right-[20px]
                      top-[16px]
                      w-[90px]
                      h-[100px]
                      bg-[#E8D8C0]
                      rounded-[4px]
                      rotate-[2deg]
                      shadow-[0_8px_18px_rgba(0,0,0,0.18)]
                      overflow-hidden
                      z-10
                    "
                  >

                    {/* GREEN BADGE */}
                    <div className="absolute top-[8px] right-[8px] w-[24px] h-[24px] rounded-full bg-[#1B5A46] flex items-center justify-center text-white text-[11px] font-bold z-20">
                      क
                    </div>

                    {/* CENTER SYMBOL */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span className="text-[#1B5A46] text-[30px] font-bold">
                        क
                      </span>
                    </div>

                    {/* LABEL */}
                    <div className="absolute bottom-[10px] left-0 w-full text-center text-[#87694C] text-[8px] font-medium z-10">
                      सूरज
                    </div>
                  </div>

                  {/* WOOD OBJECT */}
                  <div
                    className="
                      absolute
                      bottom-[2px]
                      left-[110px]
                      w-[125px]
                      h-[24px]
                      rounded-t-[40px]
                      rotate-[2deg]
                      bg-gradient-to-r
                      from-[#6E4127]
                      via-[#A76A3F]
                      to-[#754226]
                      z-20
                    "
                  />

                  {/* LIGHT SHADOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 z-30 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-[11px] z-30">
            <div className="w-[7px] h-[7px] rounded-full bg-white" />
            <div className="w-[7px] h-[7px] rounded-full bg-white/45" />
            <div className="w-[7px] h-[7px] rounded-full bg-white/45" />
            <div className="w-[7px] h-[7px] rounded-full bg-white/45" />
            <div className="w-[7px] h-[7px] rounded-full bg-white/45" />
            <div className="w-[7px] h-[7px] rounded-full bg-white/45" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
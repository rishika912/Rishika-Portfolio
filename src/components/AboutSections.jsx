import React, { useEffect, useRef } from "react";

export function Education() {

  // =======================================================
  // SCROLL TRIGGER LOGIC (Lag-Free)
  // =======================================================
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("trigger-timeline");
        } else {
          sectionRef.current.classList.remove("trigger-timeline");
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const educationData = [
    {
      year: "2020",
      title: "10th | Vimala Convent School,\nBhawanipatna",
      details: [
        { label: "Board :", value: "ICSE" },
        { label: "Percentage:", value: "91.8 %" },
      ],
    },
    {
      year: "2022",
      title: "12th Commerce | Kendriya\nVidyalaya, Bhawanipatna",
      details: [
        { label: "Board :", value: "CBSE" },
        { label: "Percentage:", value: "89 %" },
      ],
    },
    {
      year: "2022 - 26",
      title: "Bachelor of Design\n(Communication Design)\nMIT School of Design",
      details: [
        { label: "CGPA:", value: "8.56/10" },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#fff8f3] overflow-hidden py-14 font-urbanist">

      {/* ======================================================= */}
      {/* TIMELINE ANIMATIONS */}
      {/* ======================================================= */}
      <style>
        {`
          @keyframes drawLine {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes fadeDrop {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes popScale {
            from { opacity: 0; transform: scale(0); }
            to { opacity: 1; transform: scale(1); }
          }

          /* The Line grows from left to right */
          .anim-line {
            transform-origin: left;
            transform: scaleX(0);
            will-change: transform;
          }
          .trigger-timeline .anim-line {
            animation: drawLine 1.4s linear forwards;
          }

          /* The Boxes drop down */
          .anim-box {
            opacity: 0;
            will-change: transform, opacity;
          }
          .trigger-timeline .anim-box {
            animation: fadeDrop 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          /* The Dots pop in */
          .anim-dot {
            opacity: 0;
            will-change: transform, opacity;
          }
          .trigger-timeline .anim-dot {
            /* Gives it a slight bouncy pop */
            animation: popScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
        `}
      </style>

      {/* BOTTOM LEFT SHAPE */}
      <div
        className="
          absolute
          left-0
          bottom-0
          w-[300px]
          h-[120px]
          bg-[#ffebde]
          rounded-tr-[40px]
          z-0
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative
          max-w-[1300px]
          mx-auto
          bg-[#162a42]
          rounded-[42px]
          px-[40px]
          lg:px-[72px]
          pt-[50px]
          pb-[100px]
          z-10
          shadow-xl
        "
      >

        {/* TITLE */}
        <h2
          className="
            text-center
            text-white
            text-[48px]
            lg:text-[58px]
            font-ginder
            font-light
            tracking-[2px]
            leading-none
          "
        >
          My Education
        </h2>

        {/* TIMELINE AREA */}
        <div className="relative mt-[58px]">

          {/* CONNECTING LINE */}
          <div
            className="
              hidden md:block
              absolute
              top-[29px]
              left-[27%]
              right-[27%]
              h-[1.5px]
              z-0
            "
          >
            {/* The actual line that animates */}
            <div 
              className="w-full h-full bg-white anim-line" 
              style={{ animationDelay: "0.8s" }} 
            />
          </div>

          {/* LEFT DOT */}
          <div
            className="
              hidden md:flex
              absolute
              top-[29px]
              left-[27.50%]
              -translate-x-1/2
              -translate-y-1/2
              z-10
            "
          >
            <div 
              className="w-[28px] h-[24px] rounded-full bg-[#162a42] flex items-center justify-center anim-dot"
              style={{ animationDelay: "0.8s" }}
            >
              {/* WHITE RING */}
              <div className="w-[18px] h-[18px] rounded-full border-[2px] border-white flex items-center justify-center">
                {/* ORANGE DOT */}
                <div className="w-[11px] h-[11px] rounded-full bg-[#F28E38]" />
              </div>
            </div>
          </div>

          {/* RIGHT DOT */}
          <div
            className="
              hidden md:flex
              absolute
              top-[29px]
              left-[72.50%]
              -translate-x-1/2
              -translate-y-1/2
              z-10
            "
          >
            <div 
              className="w-[24px] h-[24px] rounded-full bg-[#162a42] flex items-center justify-center anim-dot"
              style={{ animationDelay: "2.1s" }}
            >
              {/* WHITE RING */}
              <div className="w-[18px] h-[18px] rounded-full border-[2px] border-white flex items-center justify-center">
                {/* ORANGE DOT */}
                <div className="w-[11px] h-[11px] rounded-full bg-[#F28E38]" />
              </div>
            </div>
          </div>

          {/* EDUCATION GRID */}
          <div
            className="
              relative
              z-20
              grid
              grid-cols-1
              md:grid-cols-3
              gap-[48px]
              md:gap-0
            "
          >
            {educationData.map((item, index) => (
              
              /* BOX ANIMATION WRAPPER: Staggers the boxes falling in sync with the line */
              <div
                key={index}
                className="flex flex-col items-center anim-box" 
                style={{ animationDelay: `${0.3 + index * 1.0}s` }}
              >

                <div className="w-[200px] flex flex-col relative z-10">

                  {/* YEAR PILL */}
                  <div
                    className="
                      w-full
                      h-[58px]
                      bg-[#162a42]
                      border-[3px]
                      border-[#F28E38]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[26px]
                      font-bold
                    "
                  >
                    {item.year}
                  </div>

                  {/* CONTENT */}
                  <div className="mt-[18px] w-max">

                    <h3
                      className="
                        text-white
                        text-[20px]
                        leading-[1.22]
                        font-semibold
                        whitespace-pre-line
                        mb-[12px]
                      "
                    >
                      {item.title}
                    </h3>

                    <div className="space-y-[2px]">
                      {item.details.map((detail, i) => (
                        <p
                          key={i}
                          className="
                            text-white
                            text-[18px]
                            font-light
                            leading-[1.2]
                          "
                        >
                          {detail.label}{" "}
                          <span className="font-bold">
                            {detail.value}
                          </span>
                        </p>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
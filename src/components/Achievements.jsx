import React, { useEffect, useRef } from "react";

import achievement1 from "../assets/achievements1.jpg";
import achievement2 from "../assets/achievements2.jpg";
import achievement3 from "../assets/achievements3.jpg";
import achievement4 from "../assets/achievements4.jpg";
import achievement5 from "../assets/achievements5.jpeg";

export default function Achievements() {

  // =======================================================
  // SCROLL TRIGGER LOGIC (Lag-Free)
  // =======================================================
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("trigger-achievements");
        } else {
          sectionRef.current.classList.remove("trigger-achievements");
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

  return (
    <section ref={sectionRef} className="relative w-full bg-[#fff8f3] overflow-hidden font-urbanist">

      {/* ======================================================= */}
      {/* CUSTOM ANIMATIONS */}
      {/* ======================================================= */}
      <style>
        {`
          @keyframes achFadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes achPopIn {
            from { opacity: 0; transform: scale(0.85); }
            to { opacity: 1; transform: scale(1); }
          }

          .anim-ach-up {
            opacity: 0;
            will-change: transform, opacity;
          }
          .trigger-achievements .anim-ach-up {
            animation: achFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .anim-ach-pop {
            opacity: 0;
            will-change: transform, opacity;
          }
          .trigger-achievements .anim-ach-pop {
            animation: achPopIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
        `}
      </style>

      {/* ================================================= */}
      {/* TOP SECTION */}
      {/* ================================================= */}
      <div className="relative pt-[40px] pb-[80px]">

        {/* ================================================= */}
        {/* LEFT BACKGROUND SHAPE */}
        {/* ================================================= */}
        <div className="absolute left-0 top-0 w-[300px] h-[120px] bg-[#ffebde] z-0" />
        <div className="absolute left-0 top-[100px] w-[510px] h-[360px] bg-[#ffebde] rounded-br-[60px] rounded-tr-[60px] z-0" />
        <div className="absolute left-[300px] top-[40px] w-[60px] h-[60px] bg-[#ffebde] z-0">
          <div className="w-full h-full bg-[#fff8f3] rounded-bl-[60px]" />
        </div>
        <div className="absolute left-25 top-[450px] w-[415px] h-[210px] bg-[#ffebde] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[60px] z-0" />
        <div className="absolute left-[40px] top-[460px] w-[60px] h-[60px] bg-[#ffebde] z-0 rotate-90">
          <div className="w-full h-full bg-[#fff8f3] rounded-tl-[60px]" />
        </div>

        {/* TITLE */}
        <h2
          className="
            relative
            z-20
            text-center
            text-[#162a42]
            text-[56px]
            lg:text-[64px]
            leading-none
            tracking-[2px]
            font-ginder
            anim-ach-up
          "
          style={{ animationDelay: "0.1s" }}
        >
          My Achievements
        </h2>

        {/* IMAGES */}
        <div
          className="
            relative
            z-20
            mt-[60px]
            flex
            flex-col
            md:flex-row
            justify-center
            items-center
            md:items-end
            gap-[40px]
            lg:gap-[60px]
          "
        >
          {/* LEFT IMAGE (1) */}
          <div 
            className="w-[240px] lg:w-[260px] flex justify-center anim-ach-pop"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src={achievement1}
              alt="Achievement"
              className="w-full h-auto shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            />
          </div>

          {/* RIGHT IMAGE (2) */}
          <div 
            className="w-[240px] lg:w-[260px] flex justify-center anim-ach-pop"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src={achievement2}
              alt="Achievement"
              className="w-full h-auto shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>

        {/* TEXT */}
        <p
          className="
            relative
            z-20
            mt-[40px]
            text-center
            text-[#162a42]
            text-[16px]
            lg:text-[20px]
            leading-[1.3]
            font-neue
            anim-ach-up
          "
          style={{ animationDelay: "0.7s" }}
        >
          <span className="font-bold">
          Academic Rank 1 -{" "}
          </span>
          Communication Design, 2nd & 3rd Year,
            <br />
          {" "}
          MIT School of Design.
        </p>

        {/* CUSTOM LOGO SWOOSH DECORATION */}
        <svg
          width="160"
          height="160"
          viewBox="0 0 100 100"
          fill="#f0b785"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[19%] bottom-[30%] z-10 opacity-90 hidden lg:block rotate-[-15deg] hover:scale-105 transition-transform duration-500 anim-ach-pop" 
          style={{ animationDelay: "0.8s" }}
        >
          <path d="M 20 62 C 35 45 45 35 52 20 A 14 14 0 0 1 74 34 C 60 50 45 58 20 62 Z" />
          <path d="M 12 78 C 45 78 60 60 75 40 A 16 16 0 0 1 96 62 C 75 88 45 92 12 78 Z" />
        </svg>

      </div>

      {/* ================================================= */}
      {/* BOTTOM SECTION (Certificates) */}
      {/* ================================================= */}
      <div className="relative pt-[40px] pb-[100px]">

        {/* RIGHT BACKGROUND SHAPE */}
        <div className="absolute right-0 -top-[80px] w-[490px] h-[770px] z-0 rotate-180 origin-center">
          <div className="absolute left-0 -top-50 w-[500px] h-[420px] bg-[#ffebde] rounded-tr-[80px] z-0" />
          <div className="absolute left-0 top-[40px] w-[740px] h-[510px] bg-[#ffebde]  rounded-tr-[60px] z-0" />
          <div className="absolute left-[500px] -top-[20px] w-[60px] h-[60px] bg-[#ffebde] z-0">
            <div className="w-full h-full bg-[#fff8f3] rounded-bl-[60px]" />
          </div>
          <div className="absolute left-83 top-[420px] w-[410px] h-[320px] bg-[#ffebde]  rounded-br-[70px] rounded-bl-[70px] z-0" />
          <div className="absolute left-68 top-[550px] w-[60px] h-[60px] bg-[#ffebde] z-0 rotate-90">
            <div className="w-full h-full bg-[#fff8f3] rounded-tl-[70px]" />
          </div>
        </div>

        {/* CERTIFICATE GRID */}
        <div
          className="
            relative
            z-20
            max-w-[1200px]
            mx-auto
            flex
            flex-col
            md:flex-row
            flex-wrap
            justify-center
            items-center
            md:items-start
            gap-[50px]
            lg:gap-[30px]
            -top-7
          "
        >

          {/* CARD 1 */}
          <div 
            className="flex flex-col items-center anim-ach-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-[260px]">
              <img
                src={achievement4}
                alt="Kathrang Copyright"
                className="w-full h-auto shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
              />
            </div>
            <p
              className="
                w-[320px]
                lg:w-[350px]
                mt-6
                text-[#162a42]
                text-[17px]
                leading-[1.4]
                font-medium
                font-neue
                text-center
              "
            >
              Sole author of the <span className="font-bold">Brand Guidelines<br/>for Kathrang</span> - a fully copyrighted<br/>identity system, independently<br/>produced from strategy to print.
            </p>
          </div>

          {/* CARD 2 */}
          <div 
            className="flex flex-col items-center anim-ach-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-[300px]">
              <img
                src={achievement5}
                alt="Wari Art"
                className="w-full h-auto shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
              />
            </div>
            <p
              className="
                w-[330px]
                lg:w-[360px]
                mt-6
                text-[#162a42]
                text-[17px]
                leading-[1.4]
                font-neue
                font-medium
                text-center
              "
            >
              Selected for a <span className="font-bold">13-week sponsored<br/>documentation project</span> - conducting field<br/>research, videography, and narrative design<br/>to preserve the endangered Ravannachhaya<br/>puppetry tradition.
            </p>
          </div>

        </div>
      </div>

      {/* ================================================= */}
      {/* CTA SECTION */}
      {/* ================================================= */}
      <div className="relative pt-[80px] pb-[80px]">
        <div 
          className="relative z-20 max-w-[1000px] mx-auto px-6 lg:px-12 text-center md:text-left right-[80px] anim-ach-up"
          style={{ animationDelay: "0.5s" }}
        >
          <h2
            className="
              text-[#162a42]
              text-[36px]
              lg:text-[40px]
              leading-[1.3]
              font-neue
              right-[80px]
            "
          >
            Hiring a

            <br className="hidden md:block" />

            <span className="text-[#f98d3d] font-bold text-[62px]">
              Strategic Creative
            </span>

            <br className="hidden md:block" />

            who thinks in Systems and Designs with intent?
          </h2>
        </div>
      </div>

    </section>
  );
}
import React from "react";

import achievement1 from "../assets/achievements1.jpg";
import achievement2 from "../assets/achievements2.jpg";
import achievement3 from "../assets/achievements3.jpg";
import achievement4 from "../assets/achievements4.jpg";
import achievement5 from "../assets/achievements5.jpeg";

export default function Achievements() {

  return (
    <section className="relative w-full bg-[#fff8f3] overflow-hidden font-urbanist">

      {/* ================================================= */}
      {/* TOP SECTION */}
      {/* ================================================= */}

      {/* FIX: Removed overflow-hidden from here so shapes can extend down */}
      <div className="relative pt-[40px] pb-[80px]">

        {/* ================================================= */}
        {/* LEFT BACKGROUND SHAPE (Perfect Continuous S-Curves) */}
        {/* ================================================= */}
        
        {/* 1. Top Wide Block */}
        <div className="absolute left-0 top-0 w-[300px] h-[120px] bg-[#ffebde] z-0" />
        

        {/* 3. Narrow Pillar (Beside top images) */}
        <div className="absolute left-0 top-[100px] w-[510px] h-[360px] bg-[#ffebde] rounded-br-[60px] rounded-tr-[60px] z-0" />

        {/* 4. Middle Inner Curve Mask (Creates flawless S-curve OUTWARD to wide pillar) */}
        <div className="absolute left-[300px] top-[40px] w-[60px] h-[60px] bg-[#ffebde] z-0">
          <div className="w-full h-full bg-[#fff8f3] rounded-bl-[60px]" />
        </div>

        {/* 5. Wide Pillar (Bulges out behind first certificate) */}
        <div className="absolute left-25 top-[450px] w-[415px] h-[210px] bg-[#ffebde] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[60px] z-0" />

        {/* 6. Bottom Inner Curve Mask (Creates flawless S-curve INWARD to bottom pillar) */}
        <div className="absolute left-[40px] top-[460px] w-[60px] h-[60px] bg-[#ffebde] z-0 rotate-90">
          <div className="w-full h-full bg-[#fff8f3] rounded-tl-[60px]" />
        </div>

        {/* ================================================= */}


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
          "
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

          {/* LEFT IMAGE (1) - Centered */}
          <div className="w-[240px] lg:w-[260px] flex justify-center">
            <img
              src={achievement1}
              alt="Achievement"
              className="
                w-full
                h-auto
                shadow-[0_12px_28px_rgba(0,0,0,0.08)]
              "
            />
          </div>

          {/* RIGHT IMAGE (2) - Centered */}
          <div className="w-[240px] lg:w-[260px] flex justify-center">
            <img
              src={achievement2}
              alt="Achievement"
              className="
                w-full
                h-auto
                shadow-[0_12px_28px_rgba(0,0,0,0.08)]
              "
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
          "
        >
          <span className="font-bold">
          Academic Rank 1 -{" "}
          </span>
          Communication Design, 2nd & 3rd Year,
            <br />
          {" "}
          MIT School of Design.
        </p>

        {/* CUSTOM LOGO SWOOSH DECORATION (Perfected Edition) */}
        <svg
          width="160"
          height="160"
          viewBox="0 0 100 100"
          fill="#f0b785"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[19%] bottom-[30%] z-10 opacity-90 hidden lg:block rotate-[-15deg] hover:scale-105 transition-transform duration-500" 
        >
          {/* Top Swoosh (Perfectly rounded top bulb) */}
          <path d="M 20 62 C 35 45 45 35 52 20 A 14 14 0 0 1 74 34 C 60 50 45 58 20 62 Z" />
          
          {/* Bottom Swoosh (Noticeably thicker/heavier body) */}
          <path d="M 12 78 C 45 78 60 60 75 40 A 16 16 0 0 1 96 62 C 75 88 45 92 12 78 Z" />
        </svg>

      </div>

      {/* ================================================= */}
      {/* BOTTOM SECTION (Certificates) */}
      {/* ================================================= */}

      {/* FIX: Removed overflow-hidden from here */}
      <div className="relative pt-[40px] pb-[100px]">

        

        {/* ================================================= */}
        {/* RIGHT BACKGROUND SHAPE (Rotated 180 Degrees)      */}
        {/* ================================================= */}

        {/* The wrapper handles the rotation. We set it to the right wall. */}
        <div className="absolute right-0 -top-[80px] w-[490px] h-[770px] z-0 rotate-180 origin-center">
          
          {/* Notice these are the EXACT same shapes as your left side. 
            Because the wrapper is rotated 180, 'left-0' physically becomes 'right-0', 
            and 'top' becomes 'bottom'. The math does itself! 
          */}
          
          {/* 1. Top Wide Block */}
          <div className="absolute left-0 -top-50 w-[500px] h-[420px] bg-[#ffebde] rounded-tr-[80px] z-0" />

          {/* 2. Narrow Pillar */}
          <div className="absolute left-0 top-[40px] w-[740px] h-[510px] bg-[#ffebde]  rounded-tr-[60px] z-0" />

          {/* 3. Middle Inner Curve Mask */}
          <div className="absolute left-[500px] -top-[20px] w-[60px] h-[60px] bg-[#ffebde] z-0">
            <div className="w-full h-full bg-[#fff8f3] rounded-bl-[60px]" />
          </div>

          {/* 4. Wide Pillar */}
          <div className="absolute left-83 top-[420px] w-[410px] h-[320px] bg-[#ffebde]  rounded-br-[70px] rounded-bl-[70px] z-0" />

          {/* 5. Bottom Inner Curve Mask */}
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

          {/* ================================================= */}
          {/* CARD 1 */}
          {/* ================================================= */}

          <div className="flex flex-col items-center">
            {/* 1. IMAGE BOX: Kept exactly at w-[260px] so it doesn't move! */}
            <div className="w-[260px]">
              <img
                src={achievement4}
                alt="Kathrang Copyright"
                className="
                  w-full
                  h-auto
                  shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                "
              />
            </div>

            {/* 2. TEXT BOX: Completely independent and wider (w-[340px])! */}
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

          {/* ================================================= */}
          {/* CARD 2 */}
          {/* ================================================= */}

          <div className="flex flex-col items-center">
            {/* 1. IMAGE BOX: Kept exactly at w-[300px] */}
            <div className="w-[300px]">
              <img
                src={achievement5}
                alt="Wari Art"
                className="
                  w-full
                  h-auto
                  shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                "
              />
            </div>

            {/* 2. TEXT BOX: Completely independent and wider! */}
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

      {/* FIX: Removed overflow-hidden from here */}
      <div className="relative pt-[80px] pb-[80px]">
        

        <div className="relative z-20 max-w-[1000px] mx-auto px-6 lg:px-12 text-center md:text-left right-[80px]">

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
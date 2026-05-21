import React from "react";

import achievement1 from "../assets/achievements1.jpg";
import achievement2 from "../assets/achievements2.jpg";
import achievement3 from "../assets/achievements3.jpg";
import achievement4 from "../assets/achievements4.jpg";
import achievement5 from "../assets/achievements5.jpeg";

export default function Achievements() {

  return (
    <section className="relative w-full bg-[#F5F1EB] overflow-hidden font-urbanist">

      {/* ================================================= */}
      {/* TOP SECTION */}
      {/* ================================================= */}

      {/* FIX: Removed overflow-hidden from here so shapes can extend down */}
      <div className="relative pt-[40px] pb-[80px]">

        {/* ================================================= */}
        {/* LEFT BACKGROUND SHAPE (Perfect Continuous S-Curves) */}
        {/* ================================================= */}
        
        {/* 1. Top Wide Block */}
        <div className="absolute left-0 top-0 w-[300px] h-[120px] bg-[#F7E1D4] z-0" />
        

        {/* 3. Narrow Pillar (Beside top images) */}
        <div className="absolute left-0 top-[120px] w-[490px] h-[360px] bg-[#F7E1D4] rounded-br-[60px] rounded-tr-[60px] z-0" />

        {/* 4. Middle Inner Curve Mask (Creates flawless S-curve OUTWARD to wide pillar) */}
        <div className="absolute left-[300px] top-[60px] w-[60px] h-[60px] bg-[#F7E1D4] z-0">
          <div className="w-full h-full bg-[#F5F1EB] rounded-bl-[60px]" />
        </div>

        {/* 5. Wide Pillar (Bulges out behind first certificate) */}
        <div className="absolute left-25 top-[450px] w-[390px] h-[320px] bg-[#F7E1D4] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[60px] z-0" />

        {/* 6. Bottom Inner Curve Mask (Creates flawless S-curve INWARD to bottom pillar) */}
        <div className="absolute left-[40px] top-[480px] w-[60px] h-[60px] bg-[#F7E1D4] z-0 rotate-90">
          <div className="w-full h-full bg-[#F5F1EB] rounded-tl-[60px]" />
        </div>

        {/* ================================================= */}


        {/* TITLE */}
        <h2
          className="
            relative
            z-20
            text-center
            text-[#0D2748]
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
            text-[#0D2748]
            text-[16px]
            lg:text-[20px]
            leading-[1.3]
            font-neue
          "
        >
          Ranked 1st in Communication Design for both{" "}
          <span className="font-bold">
            2nd
            <br />
            and 3rd year
          </span>{" "}
          of the degree program.
        </p>

        {/* ORANGE DECORATIVE SPLASH SHAPES */}
        <div className="absolute right-[5%] bottom-[10%] z-10 flex flex-col items-end gap-[6px] rotate-[-15deg] opacity-90 hidden lg:flex">
          <div className="w-[80px] h-[35px] bg-[#F0B785] rounded-full translate-x-4" />
          <div className="w-[140px] h-[55px] bg-[#F28E38] rounded-full" />
        </div>

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
<div className="absolute right-10 -top-[80px] w-[490px] h-[770px] z-0 rotate-180 origin-center">
  
  {/* Notice these are the EXACT same shapes as your left side. 
    Because the wrapper is rotated 180, 'left-0' physically becomes 'right-0', 
    and 'top' becomes 'bottom'. The math does itself! 
  */}
  
  {/* 1. Top Wide Block */}
  <div className="absolute left-0 -top-50 w-[280px] h-[420px] bg-[#F7E1D4] rounded-tr-[80px] z-0" />

  {/* 2. Narrow Pillar */}
  <div className="absolute left-0 top-[40px] w-[500px] h-[510px] bg-[#F7E1D4]  rounded-tr-[60px] z-0" />

  {/* 3. Middle Inner Curve Mask */}
  <div className="absolute left-[280px] -top-[20px] w-[60px] h-[60px] bg-[#F7E1D4] z-0">
    <div className="w-full h-full bg-[#F5F1EB] rounded-bl-[60px]" />
  </div>

  {/* 4. Wide Pillar */}
  <div className="absolute left-15 top-[450px] w-[440px] h-[320px] bg-[#F7E1D4]  rounded-br-[80px] rounded-bl-[60px] z-0" />

  {/* 5. Bottom Inner Curve Mask */}
  <div className="absolute left-[0px] top-[550px] w-[60px] h-[60px] bg-[#F7E1D4] z-0 rotate-90">
    <div className="w-full h-full bg-[#F5F1EB] rounded-tl-[60px]" />
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
            lg:gap-[130px]
            -top-7
          "
        >

          {/* ================================================= */}
          {/* CARD 1 */}
          {/* ================================================= */}

          <div className="flex flex-col items-center">
            {/* The wrapper binds the image and text to the same width! */}
            <div className="w-[260px]">
              <img
                src={achievement3}
                alt="Certificate"
                className="
                  w-full
                  h-auto 
                  shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                "
              />
              <p
                className="
                  mt-6
                  text-[#0D2748]
                  text-[18px]
                  leading-[1.28]
                  font-neue
                  text-left
                "
              >
                <span className="font-bold">
                  Authored, copyrighted and
                  secured trademark
                </span>{" "}
                the Brand Guidelines Book for{" "}
                <span className="font-bold">
                  ‘Kathrang’
                </span>
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* CARD 2 */}
          {/* ================================================= */}

          <div className="flex flex-col items-center">
            <div className="w-[260px]">
              <img
                src={achievement4}
                alt="Trademark"
                className="
                  w-full
                  h-auto
                  shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                "
              />
              <p
                className="
                  mt-6
                  text-[#0D2748]
                  text-[18px]
                  leading-[1.28]
                  font-neue
                  text-left
                "
              >
                Secured{" "}
                <span className="font-bold">
                  trademark
                </span>{" "}
                for a game logo design
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* CARD 3 */}
          {/* ================================================= */}

          <div className="flex flex-col items-center">
            {/* Slightly wider to match its natural aspect ratio */}
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
              <p
                className="
                  mt-6
                  text-[#0D2748]
                  text-[18px]
                  leading-[1.28]
                  font-neue
                  text-left
                "
              >
                Selected for a{" "}
                <span className="font-bold">
                  13-week sponsored Wari Art
                </span>{" "}
                project to document Ravannachhaya puppetry through research,
                videography, and storytelling.
              </p>
            </div>
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
              text-[#0D2748]
              text-[36px]
              lg:text-[40px]
              leading-[1.3]
              font-neue
              right-[80px]
            "
          >
            Hiring a

            <br className="hidden md:block" />

            <span className="text-[#F28E38] font-bold text-[62px]">
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
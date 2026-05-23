import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import CoreSkills from './components/CoreSkills';
import Experience from './components/Experience';
import Clients from './components/Clients';
import { Education } from './components/AboutSections';
import CallToAction from './components/CallToAction';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import logo from "/logo.png";

function App() {
  const [view, setView] = useState('rishika');

  return (
    <div className="min-h-screen bg-[#FFF8F3] font-urbanist antialiased text-[#1C2A43]">
      
      <Navbar currentView={view} setView={setView} />

      <main className="pt-16 pb-0">

        {view === 'rishika' ? (

          <div className="animate-fadeIn">

            {/* HERO + FEATURED WRAPPER */}
            <div className="relative overflow-visible">

              {/* CONNECTED SCRIBBLE */}
              <div className="hidden lg:block absolute right-[150px] top-[550px] scale-85 z-[25] -rotate-[25deg]">

                <svg
                  width="250"
                  height="230"
                  viewBox="0 0 250 230"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  {/* MAIN LOOP */}
                  <path
                    d="
                      M195 15
                      C228 42 232 96 205 132
                      C179 166 135 178 101 164
                      C74 152 67 120 86 102
                      C108 82 137 92 142 121
                      C147 160 115 183 74 183
                      C39 183 12 164 0 134
                    "
                    stroke="#1C2A43"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* ARROW HEAD */}
                  <g transform="rotate(260 194 16)">
                    <path
                      d="M186 14 L195 16 L192 28"
                      stroke="#1C2A43"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>

                </svg>
              </div>

              {/* SECTIONS */}
              <Hero />
              <FeaturedProjects />

            </div>

            <CoreSkills />

            <Experience />

            <Clients />

            <Education />

            <Achievements />

            <CallToAction />

          </div>

        ) : (

          <div className="animate-fadeIn">
            <Projects />
          </div>

        )}

      </main>

      {/* FOOTER */}
<footer className="relative bg-[#0D2748] overflow-hidden">

{/* TOP RIGHT LIGHT SHAPE */}
<div
  className="
    absolute
    right-0
    top-0

    w-[60%]
    h-[110px]

    bg-[#fff8f3]

    rounded-bl-[42px]

    z-0
  "
/>

{/* INNER CURVE */}
<div
  className="
    absolute
    left-[534px]
    top-0

    w-[42px]
    h-[42px]

    bg-[#fff8f3]

    z-0
  "
>
  <div
    className="
      w-full
      h-full

      bg-[#0D2748]

      rounded-tr-[42px]
    "
  />
</div>

<div
  className="
    relative
    z-20

    max-w-[1350px]
    mx-auto

    px-[70px]
    pt-[45px]
    pb-[26px]
  "
>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">

    {/* ================================================= */}
    {/* LEFT SIDE */}
    {/* ================================================= */}

    <div>

      {/* TITLE */}
      <div className="leading-none">

        <h2
          className="
            text-[#f98d3d]
            text-[56px]
            mt-5
            font-ginder
            ml-[160px]
          "
        >
          Let's Work
        </h2>

        <h2
          className="
            text-white
            ml-27
            text-[80px]
            leading-[0.9]
            font-light
            font-ginder
          "
        >
          Together
        </h2>
      </div>

      {/* PROFILE */}
      <div className="mt-[70px] ml-27 flex items-center gap-4">

        {/* LOGO ICON (Replaced the custom CSS shapes) */}
        <div
          className="
            w-[48px]
            h-[48px]
            rounded-full
            bg-[#f98d3d]
            flex
            items-center
            justify-center
            overflow-hidden 
          "
        >
          {/* Added your logo image here! */}
          <img 
            src={logo} 
            alt="Rishika Logo" 
            className="w-full h-full object-cover" 
          />
        </div>

        <h3
          className="
            text-white
            text-[28px]
            font-semibold
            font-urbanist
          "
        >
          Rishika
        </h3>

      </div>

      {/* DESCRIPTION */}
      <p
        className="
          mt-[28px]
          ml-27
          max-w-[420px]

          text-white
          text-[18px]
          leading-[1.3]
          font-light
          font-neue
        "
      >
        Open to full-time roles and project<br></br>
        collaborations in brand identity, communication
        design, and UI/UX. If you're building a team that
        values craft and strategic thinking, I'd like to be in
        that conversation.
      </p>

      {/* EMAIL */}
      <div className="mt-[34px] ml-27 flex items-center gap-4">

        <div className="text-white text-[28px]">
          ✉
        </div>

        <p
          className="
            text-white
            text-[20px]
            font-light
            font-neue
          "
        >
          rishikajain9909@gmail.com
        </p>

      </div>

      {/* SOCIALS */}
      <div className="mt-[34px] ml-27 flex items-center gap-5">

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/rishika-jain-9909r?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-[52px]
            h-[52px]

            rounded-full
            border-[2px]
            border-white

            flex
            items-center
            justify-center

            text-white
            text-[24px]
            font-bold

            hover:scale-[1.05]
            transition-all
            duration-300
          "
        >
          in
        </a>

        {/* BEHANCE */}
        <a
          href="https://www.behance.net/rishikajain9909"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-[52px]
            h-[52px]

            rounded-full
            border-[2px]
            border-white

            flex
            items-center
            justify-center

            text-white
            text-[22px]
            font-bold

            hover:scale-[1.05]
            transition-all
            duration-300
          "
        >
          Bē
        </a>

        {/* RESUME */}
        <button
          className="
            ml-[10px]

            px-[34px]
            h-[52px]

            bg-[#f98d3d]

            rounded-full

            text-white
            text-[18px]
            font-bold
            tracking-[1px]

            hover:scale-[1.03]
            transition-all
            duration-300
          "
        >
          Resume
        </button>

      </div>

    </div>

    {/* ================================================= */}
    {/* RIGHT SIDE */}
    {/* ================================================= */}

    <div className="pt-[6px]">

      {/* HEADING */}
      <h3
        className="
          text-[#0D2748]
          text-[36px]
          font-light
          -mt-[28px] /* Pushed it down slightly so it perfectly aligns with the left side */
          mb-[96px]
          -ml-[120px]
          whitespace-nowrap
        "
      >
        Let's build something worth remembering.
      </h3>

      {/* FORM */}
      {/* UPDATE: Added action and method. Replace YOUR_FORM_ID with your Formspree ID */}
      <form 
        action="https://formspree.io/f/mykvpzbo" 
        method="POST" 
        className="space-y-[24px]"
      >

        {/* ROW 1 */}
        <div className="grid grid-cols-2 gap-[18px]">

          <div>
            <label className="text-white text-[16px] mb-3 block">
              Your Name*
            </label>
            <input
              type="text"
              name="name" /* <-- REQUIRED for data to send */
              required
              className="w-full h-[54px] bg-[#415572] rounded-full px-6 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-white text-[16px] mb-3 block">
              Email Id*
            </label>
            <input
              type="email"
              name="email" /* <-- REQUIRED */
              required
              className="w-full h-[54px] bg-[#415572] rounded-full px-6 text-white outline-none"
            />
          </div>

        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-2 gap-[18px]">

          <div>
            <label className="text-white text-[16px] mb-3 block">
              Company*
            </label>
            <input
              type="text"
              name="company" /* <-- REQUIRED */
              required
              className="w-full h-[54px] bg-[#415572] rounded-full px-6 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-white text-[16px] mb-3 block">
              City*
            </label>
            <input
              type="text"
              name="city" /* <-- REQUIRED */
              required
              className="w-full h-[54px] bg-[#415572] rounded-full px-6 text-white outline-none"
            />
          </div>

        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-white text-[16px] mb-3 block">
            Your Message*
          </label>
          <textarea
            name="message" /* <-- REQUIRED */
            required
            rows="5"
            className="w-full bg-[#415572] rounded-[22px] px-6 py-5 text-white outline-none resize-none"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit" /* <-- Tells the form this is the trigger button */
          className="
            mt-[10px]
            px-[28px]
            h-[54px]
            bg-[#f98d3d]
            rounded-full
            text-white
            text-[18px]
            font-bold
            tracking-[1px]
            flex
            items-center
            gap-3
            hover:scale-[1.03]
            transition-all
            duration-300
          "
        >
          SUBMIT
          <span className="text-[22px]">↗</span>
        </button>

      </form>

    </div>

  </div>

  {/* BOTTOM BAR */}
  <div
    className="
      mt-[80px]

      flex
      flex-col
      md:flex-row

      items-center
      justify-between

      gap-4
    "
  >

    <p
      className="
        text-white
        text-[16px]
        font-neue
      "
    >
      Copyright © 2026{" "}
      <span className="text-[#f98d3d]">
        Rishika Jain.
      </span>{" "}
      All Rights Reserved.
    </p>

    <p
      className="
        text-white
        text-[16px]
        font-neue
      "
    >
      User Terms & Conditions | Privacy Policy
    </p>

  </div>

</div>

</footer>
    </div>
  );
}

export default App;
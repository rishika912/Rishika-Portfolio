import rishikaPortrait from '../assets/rishika-portrait.png';

export default function Hero() {
  return (
    <section className="pb-16 px-6 lg:px-8 max-w-[1250px] mx-auto bg-[#FFF8F3] relative overflow-visible font-urbanist">

      {/* Center Header */}
      <div className="flex flex-col items-center text-center mb-2 mt-4 relative z-10">

      <div className="relative flex items-center font-urbanist tracking-[-1px] justify-center mb-2 w-fit">
    <span className="text-[30px] font-semibold text-[#1C2A43]">
      Hello,
    </span>

    {/* 2. Added 'absolute' and '-right-10'. This takes the icon out of the flow so it doesn't push the text! */}
    <svg
      width="28"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -right-10 -mt-2" 
    >
      <path
        d="M13 3.5C16 7.5 23 6.5 23 6.5C23 6.5 17 11.5 12 7.5C8 3.5 13 3.5 13 3.5Z"
        fill="#F2854A"
      />
      <path
        d="M4.5 11.5C8.5 16.5 16 15.5 16 15.5C16 15.5 9 20.5 4.5 16.5C0.5 12.5 4.5 11.5 4.5 11.5Z"
        fill="#F2854A"
      />
    </svg>
        </div>

        <h1 className="text-6xl md:text-[3.5rem] font-neue font-medium text-[#1C2A43] mb-3 tracking-tight">
          I'm <span className="text-[#F2854A] font-medium">Rishika Jain,</span>
        </h1>

        <h2 className="text-[3.2rem] leading-none font-ginder font-medium text-[#1C2A43] tracking">
          Visual Communication Designer
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_auto_300px] gap-8 lg:gap-12 items-end justify-center w-full relative z-20">

        {/* LEFT */}
        <div className="flex flex-col justify-end w-full pb-8 pl-4 lg:pl-0">

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

            <div className="flex items-center gap-5">

              <div className="border-b-[3px] border-[#F2854A] pb-1.9 px-1">
                <span className="text-[90px] font-medium text-[#1C2A43] leading-[0.75]  font-peroxidase">
                  15<span className="text-[90px] font-medium ">+</span>
                </span>
              </div>

              <span className="text-[34px] text-[#1C2A43] leading-[1.15] font-light font-peroxidase">
                Projects
                <br />
                Completed
              </span>
            </div>

            <div className="flex items-center gap-6 translate-y-3">

              <div className="border-b-[3px] border-[#F2854A] pb-1.9 px-1 pr-4">
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

          <div className="relative w-[340px] flex justify-end items-end -mt-24 pt-12">

            <div className="absolute -bottom-6 -left-2 w-[300px] h-[312px] bg-[#F2854A] rounded-t-full z-0"></div>

            <img
              src={rishikaPortrait}
              alt="Rishika Jain"
              className="w-[330px] h-auto object-contain z-10 relative"
            />
          </div>

          <div className="flex items-center relative z-20 mt-2 translate-x-15">

  <div className="flex items-center gap-2 bg-[#FFF8F3] rounded-full p-0 ring-[8px] ring-[#FFF8F3]">

    {/* PORTFOLIO BUTTON: Added flex for perfect text centering */}
    <button className="px-10 py-2.5 rounded-full border-[1.5px] border-[#1C2A43] text-[#1C2A43] font-bold text-[25px] bg-[#FFF8F3] flex items-center justify-center">
      Portfolio
    </button>

    {/* RESUME BUTTON: Added transparent border, flex, and wrapped the arrow */}
    <button className="px-10 py-2.5 rounded-full bg-[#F2854A] text-white font-bold text-[25px] border-[1.5px] border-transparent flex items-center justify-center gap-1">
      Resume <span className="text-[28px] leading-none mb-1">↗</span>
    </button>
  </div>

            <div className="flex gap-4 ml-6 translate-x-7">
  
  {/* LinkedIn Button */}
  <a 
    href="https://www.linkedin.com/in/rishika-jain-9909r?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border-[3px] border-[#1C2A43] flex items-center justify-center font-bold text-[#1C2A43] text-[28px] bg-[#FFF8F3] hover:bg-[#1C2A43] hover:text-[#FFF8F3] transition-all duration-300"
  >
    in
  </a>

  {/* Behance Button */}
  <a 
    href="https://www.behance.net/rishikajain9909" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border-[3px] border-[#1C2A43] flex items-center justify-center font-bold text-[#1C2A43] text-[26px] bg-[#FFF8F3] hover:bg-[#1C2A43] hover:text-[#FFF8F3] transition-all duration-300"
  >
    Bē
  </a>
  
</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-end w-full pb-8 relative mb-15 -ml-30 pl-6">

          <div className="flex items-baseline gap-3 font-peroxidase">
            <span className="text-[85px] font-medium text-[#1C2A43] leading-none">
              6+
            </span>

            <span className="text-[34px] text-[#1C2A43] font-light pb-2">
              Months
            </span>
          </div>

          {/* Changed w-[260px] to w-max and added whitespace-nowrap */}
<p className="text-[18px] font-neue font-medium text-[#1C2A43] border-b-[3px] border-[#F2854A] pb- mb-4 w-max whitespace-nowrap">
  Industry Experience in Design Agency
</p>

<div className="grid grid-cols-2 gap-y-1 gap-x-8 font-neue text-[18px] text-[#1C2A43] shrink-0 w-max whitespace-nowrap">
  <div><span className="text-[#F2854A] mr-2">✦</span> Branding</div>
  <div><span className="text-[#F2854A] mr-2">✦</span> Print Media</div>
  <div><span className="text-[#F2854A] mr-2">✦</span> Packaging</div>
  <div><span className="text-[#F2854A] mr-2">✦</span> UI Design</div>
  <div><span className="text-[#F2854A] mr-2">✦</span> Spatial Graphics</div>
  <div><span className="text-[#F2854A] mr-2">✦</span> Campaign</div>
</div>

        </div>
      </div>
    </section>
  );
}
import React, { useState } from "react";

// Make sure your paths match your project structure!
import kathrang1 from "../assets/kathrang1.png";
import kathrang2 from "../assets/kathrang2.png";
import kathrang3 from "../assets/kathrang3.png";
import kathrang4 from "../assets/kathrang4.png";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Visual Design");

  // =======================================================
  // DATA: VISUAL DESIGN PROJECTS
  // =======================================================
  const visualDesignProjects = [
    {
      title: "Kathrang (कथरंग)",
      subtitle: "BRAND GUIDELINES",
      tags: ["Media Applications", "Brand Strategy", "Cultural storytelling", "Visual Identity"],
      color: "bg-[#176B57]", // Dark Green from the design
      textColor: "text-white",
      tagBorder: "border-white text-white",
      images: [kathrang1, kathrang2, kathrang3, kathrang4]
    },
    // You can add Drop Dead, Mega Bloks, etc. here!
  ];

  const currentProjects = activeTab === "Visual Design" ? visualDesignProjects : [];

  return (
    <section className="py-16 w-full bg-[#F5F1EB] font-urbanist">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* ================================================= */}
        {/* TAB CONTROLS */}
        {/* ================================================= */}
        <div className="flex justify-center items-center gap-12 mb-16 border-b-2 border-gray-200/50 max-w-fit mx-auto px-4">
          <button
            onClick={() => setActiveTab("Visual Design")}
            className={`pb-4 text-[24px] lg:text-[30px] font-bold transition-all relative ${activeTab === "Visual Design" ? "text-[#0D2748]" : "text-gray-400 hover:text-gray-500"}`}
          >
            Visual Design
            {activeTab === "Visual Design" && <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#F28E38] rounded-t-md" />}
          </button>
          <button
            onClick={() => setActiveTab("UI/UX")}
            className={`pb-4 text-[24px] lg:text-[30px] font-bold transition-all relative ${activeTab === "UI/UX" ? "text-[#0D2748]" : "text-gray-400 hover:text-gray-500"}`}
          >
            UI/UX
            {activeTab === "UI/UX" && <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#F28E38] rounded-t-md" />}
          </button>
        </div>

        {/* ================================================= */}
        {/* PROJECTS LOOP */}
        {/* ================================================= */}
        <div className="space-y-12 lg:space-y-16">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          {activeTab === "UI/UX" && (
            <div className="text-center text-gray-500 text-2xl py-20 font-bold">
              UI/UX Projects Coming Soon...
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

// =======================================================
// REUSABLE PROJECT CARD COMPONENT
// =======================================================
function ProjectCard({ project }) {
  return (
    <div className={`w-full ${project.color} rounded-[40px] p-6 lg:p-10 flex flex-col lg:flex-row gap-6 shadow-[0_16px_40px_rgba(0,0,0,0.1)]`}>
      
      {/* ================================================= */}
      {/* LEFT COLUMN: Main Image + Tags + Button */}
      {/* ================================================= */}
      <div className="flex-1 flex flex-col justify-start">
        
        {/* MAIN IMAGE (No background, allows PNG transparency to work naturally) */}
        <div className="relative w-full">
          {project.images?.[0] && (
            <img 
              src={project.images[0]} 
              alt="Main Project Visual" 
              // Using drop-shadow instead of box-shadow so it contours to your custom PNG shape!
              className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.15)]" 
            />
          )}
          
          {/* THE TITLE TEXT (Positioned in the top right cutout area) */}
          <div className="absolute top-2 right-4 lg:top-4 lg:right-6 z-10">
            <h3 className="text-white text-[16px] lg:text-[22px] font-bold tracking-[1.5px] uppercase">
              {project.subtitle}
            </h3>
          </div>
        </div>

        {/* TAGS & VIEW BUTTON ROW */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 -mt-27">
          
          {/* Tags Grid (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 w-full md:w-auto">
            {project.tags.map((tag) => (
              <span key={tag} className={`px-5 py-2 border-[1.5px] rounded-full text-[14px] lg:text-[15px] font-medium text-center ${project.tagBorder}`}>
                {tag}
              </span>
            ))}
          </div>

          {/* View Button */}
          <button className="shrink-0 w-full md:w-auto bg-[#F28E38] text-white px-10 py-3 rounded-full text-[20px] font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg">
            View <span className="text-[24px] leading-none mb-1">↗</span>
          </button>

        </div>

      </div>

      {/* ================================================= */}
      {/* RIGHT COLUMN: 3 Stacked Images */}
      {/* ================================================= */}
      <div className="w-full lg:w-[260px] flex flex-row lg:flex-col gap-4 lg:gap-5 shrink-0">
        
        <div className="flex-1 lg:h-[220px] rounded-[24px] overflow-hidden bg-white shadow-md">
          {project.images?.[1] && <img src={project.images[1]} alt="Detail 1" className="w-full h-full object-cover" />}
        </div>
        
        <div className="flex-1 lg:h-[220px] rounded-[24px] overflow-hidden bg-[#FFF5EE] shadow-md">
          {project.images?.[2] && <img src={project.images[2]} alt="Detail 2" className="w-full h-full object-cover" />}
        </div>
        
        <div className="flex-1 lg:h-[220px] rounded-[24px] overflow-hidden bg-white shadow-md">
          {project.images?.[3] && <img src={project.images[3]} alt="Detail 3" className="w-full h-full object-cover" />}
        </div>

      </div>

    </div>
  );
}
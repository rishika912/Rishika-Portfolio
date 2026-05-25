import React, { useState } from "react";

// =======================================================
// 1. IMPORT VISUAL DESIGN ASSETS
// =======================================================
import kathrang1 from "../assets/kathrang1.png";
import kathrang2 from "../assets/kathrang2.png";
import kathrang3 from "../assets/kathrang3.png";
import kathrang4 from "../assets/kathrang4.png";
import kathrangPDF from "../assets/Kathrang Branding Project.pdf"; 

import dropdead1 from "../assets/dropdead1.png"; 
import dropdead2 from "../assets/dropdead2.png";
import dropdead3 from "../assets/dropdead3.png";
import dropdead4 from "../assets/dropdead4.png";
import dropdeadPDF from "../assets/drop dead.pdf"; 

import mega1 from "../assets/mega1.png";
import mega2 from "../assets/mega2.png";
import mega3 from "../assets/mega3.png";
import mega4 from "../assets/mega4.png";
import megaPDF from "../assets/Mega Bloks Redesign Project.pdf";

import nom1 from "../assets/nom1.png";
import nom2 from "../assets/nom2.png";
import nom3 from "../assets/nom3.png";
import nom4 from "../assets/nom4.png";
import nomPDF from "../assets/NOM NOM.pdf";

// =======================================================
// 2. IMPORT UI/UX ASSETS (NEW!)
// =======================================================
import oren1 from "../assets/oren1.png";
import oren2 from "../assets/oren2.png";
import oren3 from "../assets/oren3.png";
import oren4 from "../assets/oren4.png";
import orenPDF from "../assets/oren project.pdf"; 

import ravana1 from "../assets/ravana1.png";
import ravana2 from "../assets/ravana2.png";
import ravana3 from "../assets/ravana3.png";
import ravana4 from "../assets/ravana4.png";
import ravanaPDF from "../assets/ravana project.pdf"; 

import nivaha1 from "../assets/nivaha1.png";
import nivaha2 from "../assets/nivaha2.png";
import nivaha3 from "../assets/nivaha3.png";
import nivaha4 from "../assets/nivaha4.png";
import nivahaPDF from "../assets/nivaha project.pdf"; 


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
      color: "bg-[#0e7467]", 
      subtitleColor: "text-white", 
      tagStyles: "border-white text-white bg-[#176B57]",
      textPosition: "top-[3%] right-[20%]", // <-- PERFECT FOR KATHRANG
      images: [kathrang1, kathrang2, kathrang3, kathrang4],
      pdfLink: kathrangPDF 
    },
    {
      title: "Drop Dead",
      subtitle: "GAME DESIGN",
      tags: ["Game Loop Structuring", "Prototyping", "Packaging Design", "Illustration"],
      color: "bg-[#fddcba]", 
      subtitleColor: "text-black", 
      tagStyles: "border-black text-black bg-[#F0E0CE]", 
      textPosition: "top-[3%] left-[48%]", // <-- Moved to Top Left
      images: [dropdead1, dropdead2, dropdead3, dropdead4],
      pdfLink: dropdeadPDF 
    },
    {
      title: "Mega Bloks",
      subtitle: "BRAND REDESIGN",
      tags: ["Advertising Campaign", "Mascot", "Packaging Design", "Brand Strategy"],
      color: "bg-[#feebb7]",
      subtitleColor: "text-black",
      tagStyles: "border-black text-black bg-[#FDF0CD]", 
      textPosition: "top-[3%] left-[48%]", // <-- Moved to Bottom Left
      images: [mega1, mega2, mega3, mega4],
      pdfLink: megaPDF 
    },
    {
      title: "Nom Nom",
      subtitle: "BUSINESS STRATEGY DESIGN",
      tags: ["Pitch Deck", "Packed Food Business", "Branding", "Packaging Design"],
      color: "bg-[#fdddcf]",
      subtitleColor: "text-black",
      tagStyles: "border-black text-black bg-[#FBD9D2]", 
      textPosition: "top-[3%] left-[48%]", // <-- Moved to Top Right
      images: [nom1, nom2, nom3, nom4],
      pdfLink: nomPDF 
    }
  ];

  // =======================================================
  // DATA: UI/UX PROJECTS
  // =======================================================
  const uiUxProjects = [
    {
      title: "Oren",
      subtitle: "EXPERIENCE DESIGN",
      tags: ["Social Impact Design", "UX Strategy", "Campaign Design", "UI Design"],
      color: "bg-[#fdc476]", 
      subtitleColor: "text-black", 
      tagStyles: "border-black text-black bg-[#F8CB8E]",
      textPosition: "top-[3%] left-[48%]", // <-- Bottom Left
      images: [oren1, oren2, oren3, oren4],
      pdfLink: orenPDF 
    },
    {
      title: "Ravana Chhaya",
      subtitle: "CULTURAL DOCUMENTATION",
      tags: ["Autobiography", "Cultural Storytelling", "Visual Research", "Indian Folk Culture"],
      color: "bg-[#fdddcf]", 
      subtitleColor: "text-black", 
      tagStyles: "border-black text-black bg-[#F6DFD4]",
      textPosition: "top-[3%] left-[48%]", // <-- Top Left
      images: [ravana1, ravana2, ravana3, ravana4],
      pdfLink: ravanaPDF 
    },
    {
      title: "Nivaha",
      subtitle: "SYSTEMS THINKING",
      tags: ["Service Design", "Goal-Based Saving", "Wedding Budgeting", "Financial Planning"],
      color: "bg-[#f6adca]", 
      subtitleColor: "text-black", 
      tagStyles: "border-black text-black bg-[#F7AECB]",
      textPosition: "top-[3%] left-[48%]", // <-- Bottom Right
      images: [nivaha1, nivaha2, nivaha3, nivaha4],
      pdfLink: nivahaPDF 
    }
  ];
  
  // This single line magically swaps the data based on which tab is clicked!
  const currentProjects = activeTab === "Visual Design" ? visualDesignProjects : uiUxProjects;

  return (
    <section id="project" className="pt-4 pb-16 w-full bg-[#fff8f3] font-urbanist overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* ================================================= */}
        {/* TAB CONTROLS */}
        {/* ================================================= */}
        <div className="flex justify-center items-center w-full max-w-[500px] mx-auto mb-16">
          
          {/* VISUAL DESIGN BUTTON */}
          <button
            onClick={() => setActiveTab("Visual Design")}
            className={`flex-1 pb-3 text-[26px] lg:text-[34px] font-urbanist transition-all relative ${
              activeTab === "Visual Design" 
                ? "text-[#0D2748] font-bold" 
                : "text-[#0D2748] font-medium"
            }`}
          >
            Visual Design
            {/* The Connected Underline */}
            <div 
              className={`absolute bottom-0 left-0 w-full h-[6px] transition-colors duration-300 ${
                activeTab === "Visual Design" ? "bg-[#0D2748]" : "bg-[#F28E38]"
              }`} 
            />
          </button>

          {/* UI/UX BUTTON */}
          <button
            onClick={() => setActiveTab("UI/UX")}
            className={`flex-1 pb-3 text-[26px] lg:text-[34px] font-urbanist transition-all relative ${
              activeTab === "UI/UX" 
                ? "text-[#0D2748] font-bold" 
                : "text-[#0D2748] font-medium"
            }`}
          >
            UI/UX
            {/* The Connected Underline */}
            <div 
              className={`absolute bottom-0 left-0 w-full h-[6px] transition-colors duration-300 ${
                activeTab === "UI/UX" ? "bg-[#0D2748]" : "bg-[#F28E38]"
              }`} 
            />
          </button>

        </div>

        {/* ================================================= */}
        {/* PROJECTS LOOP */}
        {/* ================================================= */}
        <div className="space-y-12 lg:space-y-16">
          {/* This loops through whatever array is currently active! */}
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
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
    <div className="relative w-full z-0">
      
      {/* THE WIDE BACKGROUND BOX */}
      <div 
        className={`
          hidden lg:block 
          absolute top-0 bottom-0 
          -left-[100px] -right-[100px] 
          ${project.color} 
          rounded-[50px] 
          -z-10 
          shadow-[0_16px_40px_rgba(0,0,0,0.15)]
        `} 
      />

      {/* THE ACTUAL CONTENT CARD */}
      <div 
        className={`
          w-full 
          ${project.color} 
          rounded-[40px] 
          p-6 lg:p-8 
          flex flex-col lg:flex-row gap-6 
          lg:shadow-none shadow-[0_16px_40px_rgba(0,0,0,0.15)]
        `}
      >
        
        {/* LEFT COLUMN: Main Image + Tags + Button */}
        <div className="flex-1 flex flex-col">
          
        <div className="relative w-full">
            {project.images?.[0] && (
              <img 
                src={project.images[0]} 
                alt="Main Project Visual" 
                className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]" 
              />
            )}
            
            {/* CHANGED: Now uses project.textPosition instead of a hardcoded value! */}
            <div className={`absolute z-10 ${project.textPosition}`}>
              <h3 className={`${project.subtitleColor} text-[16px] lg:text-[26px] font-bold tracking-[1px] uppercase`}>
                {project.subtitle}
              </h3>
            </div>
          </div>

         {/* BOTTOM ROW */}
         <div className="flex flex-col md:flex-row justify-between items-start w-full relative">
            
            {/* CHANGED: Swapped strict grid for flex-wrap! */}
            <div className="flex flex-wrap gap-3 w-full md:max-w-[420px] -mt-28 z-20 relative">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className={`
                    px-4 py-2 border-[1.6px] rounded-full 
                    text-[13px] lg:text-[18px] /* Slightly smaller text */
                    font-bold text-center 
                    flex items-center justify-center 
                    whitespace-nowrap /* Forces text to stay on one line! */
                    ${project.tagStyles}
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* THE LINK BUTTON */}
            <a 
              href={project.pdfLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0 bg-[#F28E38] text-white px-10 py-3 mr-32 mt-4 md:-mt-24 relative z-20 rounded-full text-[18px] lg:text-[20px] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg cursor-pointer"
            >
              View <span className="text-[22px] leading-none mb-1">↗</span>
            </a>

          </div>

        </div>

        {/* RIGHT COLUMN: 3 Stacked Images */}
        <div className="w-full lg:w-[250px] flex flex-row lg:flex-col gap-5 shrink-0">
          {project.images?.slice(1, 4).map((img, index) => (
            <div key={index} className="flex-1 lg:h-[220px] rounded-[36px] overflow-hidden bg-white shadow-md">
              <img src={img} alt={`Detail ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
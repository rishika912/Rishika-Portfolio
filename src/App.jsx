import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects'; // NEW
import CoreSkills from './components/CoreSkills';
import Experience from './components/Experience';
import Clients from './components/Clients';
import { Education } from './components/AboutSections'; // Contains Education & Achievements
import CallToAction from './components/CallToAction'; // NEW
import Projects from './components/Projects'; 
import Achievements from './components/Achievements';

function App() {
  const [view, setView] = useState('rishika');

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar currentView={view} setView={setView} />
      
      <main className="pt-24 pb-0">
        {view === 'rishika' ? (
          <div className="animate-fadeIn">
            <Hero />
            <FeaturedProjects />
            <CoreSkills />
            <Experience />
            
            {/* Added the See More button exactly as shown in the design */}
            <div className="flex justify-center mb-16">
              <button className="bg-[#1C2A43] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                See More ↓
              </button>
            </div>

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
      
      {/* Footer */}
      <footer className="py-16 bg-[#1C2A43] text-white">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[#E87A5D] text-4xl font-bold italic mb-2">Let's Work</h2>
              <h2 className="text-white text-5xl font-bold">Together</h2>
            </div>
            
            <div className="flex items-center gap-3">
              <img src="/avatar.jpg" alt="Rishika" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-medium">Rishika</span>
            </div>
            
            <p className="text-sm text-gray-300 max-w-sm">
              I'm currently open to opportunities in brand identity and communication design. If you think I'd be a good fit for your team or project, I'd be glad to connect.
            </p>
            
            <div className="space-y-4 pt-4">
              <p className="flex items-center gap-2 text-sm">✉ rishikajain9909@gmail.com</p>
              <div className="flex gap-4">
                 <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center">in</button>
                 <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center">Bē</button>
                 <button className="bg-[#E87A5D] px-6 py-1.5 rounded-full text-sm font-bold ml-2">Resume</button>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="space-y-6">
            <p className="text-xl font-medium max-w-xs leading-tight">
              I'd love to be part of the journey.
            </p>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="Your Name*" className="w-full bg-[#2A3B5A] text-white rounded-lg px-4 py-3 outline-none" />
                <input type="email" placeholder="Email Id*" className="w-full bg-[#2A3B5A] text-white rounded-lg px-4 py-3 outline-none" />
              </div>
              <div className="flex gap-4">
                <input type="text" placeholder="Company*" className="w-full bg-[#2A3B5A] text-white rounded-lg px-4 py-3 outline-none" />
                <input type="text" placeholder="City*" className="w-full bg-[#2A3B5A] text-white rounded-lg px-4 py-3 outline-none" />
              </div>
              <textarea placeholder="Your Message*" rows="4" className="w-full bg-[#2A3B5A] text-white rounded-lg px-4 py-3 outline-none"></textarea>
              <button className="bg-[#E87A5D] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#d66a4f]">
                SUBMIT ↗
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
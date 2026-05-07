export default function Achievements() {
    return (
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-[#F8F9FA]">
        
        <h2 className="text-4xl font-bold text-[#1C2A43] text-center mb-20">
          My Achievements
        </h2>
  
        {/* Top Part: MITSD Section */}
        <div className="relative max-w-4xl mx-auto mb-32 flex flex-col items-center">
          
          {/* Abstract Background Shapes */}
          <div className="absolute top-8 left-4 md:left-20 w-48 h-64 bg-[#FDE7D2] -z-10"></div>
          <div className="absolute bottom-16 right-4 md:right-32 w-40 h-40 bg-[#1C2A43] -z-10"></div>
          
          {/* Abstract Orange Petals */}
          <div className="absolute -bottom-10 -right-4 md:right-20 text-[#E87A5D] z-10 flex gap-1 transform rotate-12">
            <div className="w-12 h-20 bg-[#E87A5D] rounded-tl-full rounded-br-full opacity-80"></div>
            <div className="w-16 h-12 bg-[#E87A5D] rounded-tl-full rounded-br-full opacity-80 mt-8"></div>
          </div>
  
          {/* MITSD Header */}
          <div className="mb-8">
            <h3 className="text-5xl font-bold text-[#1C2A43] tracking-tighter">mitsd</h3>
            <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">mit institute of design</p>
          </div>
  
          {/* Photos */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8 z-0">
            <div className="w-64 h-80 bg-gray-200 shadow-md border-4 border-white flex justify-center items-center text-gray-500 text-sm italic">
               [Group Photo]
            </div>
            <div className="w-56 h-80 bg-gray-200 shadow-md border-4 border-white flex justify-center items-center text-gray-500 text-sm italic">
               [Portrait Photo]
            </div>
          </div>
  
          <p className="text-xs text-[#1C2A43] font-medium text-center leading-relaxed">
            Ranked 1st in Communication Design for both 2nd<br/>
            and 3rd year of the degree program.
          </p>
        </div>
  
        {/* Bottom Part: Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          
          {/* Certificate 1: Katheang */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-[220px] aspect-[1/1.3] bg-[#FDFBF7] shadow-sm border border-gray-200 p-3 mb-5 flex flex-col relative">
               <div className="w-full h-full border border-yellow-600/30 flex flex-col items-center justify-end pb-4 text-[10px] text-gray-400">
                 <div className="w-8 h-8 rounded-full bg-red-100 mb-2"></div> {/* Seal placeholder */}
                 [Katheang Cert]
               </div>
            </div>
            <p className="text-[11px] text-[#1C2A43] font-medium leading-relaxed">
              Authored, copyrighted and<br/>secured trademark the Brand<br/>Guidelines Book for "Katheang"
            </p>
          </div>
  
          {/* Certificate 2: Game Logo */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-[220px] aspect-[1/1.3] bg-[#FDFBF7] shadow-sm border border-gray-200 p-3 mb-5 flex flex-col relative">
               <div className="w-full h-full border border-yellow-600/30 flex flex-col items-center justify-end pb-4 text-[10px] text-gray-400">
                 <div className="w-8 h-8 rounded-full bg-red-100 mb-2"></div> {/* Seal placeholder */}
                 [Game Logo Cert]
               </div>
            </div>
            <p className="text-[11px] text-[#1C2A43] font-medium leading-relaxed">
              Secured trademark for a<br/>game logo design
            </p>
          </div>
  
          {/* Certificate 3: Wari Art */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-[220px] aspect-[1/1.3] bg-white shadow-sm border border-gray-200 p-4 mb-5 flex flex-col">
               <h4 className="text-[8px] font-bold mb-3 tracking-wider">THIS CERTIFICATE IS AWARDED TO</h4>
               <div className="w-full flex-grow border-t border-gray-200 pt-2 flex items-center justify-center text-[10px] text-gray-400">
                 [Wari Art Cert]
               </div>
            </div>
            <p className="text-[11px] text-[#1C2A43] font-medium leading-relaxed">
              Selected for a 13-week sponsored Wari<br/>Art project to document<br/>Ravanaachhaya puppetry through<br/>research, videography and storytelling.
            </p>
          </div>
  
        </div>
      </section>
    );
  }
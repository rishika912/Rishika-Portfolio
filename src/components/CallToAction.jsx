export default function CallToAction() {
    return (
      <section className="max-w-4xl mx-auto px-8 py-20 relative">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2A43]">
              Looking for a Passionate Designer
            </h2>
            <p className="text-xl md:text-2xl text-[#1C2A43]">
              to bring fresh ideas to your
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E87A5D]">
              Creative Team ?
            </h2>
          </div>
          
          {/* Abstract Orange Graphics */}
          <div className="hidden md:flex flex-col gap-2 opacity-80">
            <div className="w-16 h-8 bg-[#E87A5D] rounded-full transform -rotate-12"></div>
            <div className="w-12 h-6 bg-[#E87A5D] rounded-full transform rotate-12 ml-8"></div>
          </div>
        </div>
      </section>
    );
  }
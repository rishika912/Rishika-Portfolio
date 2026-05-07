export function Education() {
    return (
      <section className="bg-[#1C2A43] py-16 px-8 rounded-[40px] mx-4 md:mx-8 text-white my-12">
        <h2 className="text-3xl font-bold text-center mb-12">My Education</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 relative">
          <div className="space-y-2 border-l-2 border-[#E87A5D] pl-6 pb-8">
            <span className="text-[#E87A5D] font-bold">2020</span>
            <p className="text-sm font-medium">10th | Vimala Convent School</p>
            <p className="text-xs text-gray-400">Board: ICSE | 91.8%</p>
          </div>
          <div className="space-y-2 border-l-2 border-[#E87A5D] pl-6 pb-8">
            <span className="text-[#E87A5D] font-bold">2022</span>
            <p className="text-sm font-medium">12th Commerce | Kendriya Vidyalaya</p>
            <p className="text-xs text-gray-400">Board: CBSE | 89%</p>
          </div>
          <div className="space-y-2 border-l-2 border-[#E87A5D] pl-6 pb-8">
            <span className="text-[#E87A5D] font-bold">2022-26</span>
            <p className="text-sm font-medium">Bachelor of Design</p>
            <p className="text-xs text-gray-400">MIT School of Design | CGPA: 8.56/10</p>
          </div>
        </div>
      </section>
    );
  }
import clientLogos from '../assets/clients.png';

export default function Clients() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h3 className="text-gray-400 font-medium mb-8 uppercase tracking-widest text-xs">
          Clients I have worked with
        </h3>
        
        {/* This displays the image you cropped from the PDF */}
        <div className="flex justify-center items-center">
          <img 
            src={clientLogos} 
            alt="Client Logos" 
            className="max-w-full h-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
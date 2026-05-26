import clientLogos from "../assets/clients.jpg";

export default function Clients() {
  return (
    <section className="relative w-full bg-[#fff8f3] overflow-hidden py-6">

      {/* TOP BORDER */}
      <div className="absolute top-[22px] left-0 w-full h-[2px] bg-[#162a42]" />

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-[22px] left-0 w-full h-[2px] bg-[#162a42]" />

      {/* HEADING */}
      <h2
        className="
          absolute
          left-1/2
          top-[58px]
          -translate-x-1/2
          z-30

          text-[#162a42]
          text-[50px]
          leading-none
          font-ginder

          whitespace-nowrap
          pointer-events-none
        "
      >
        Clients I have worked with
      </h2>

      {/* LOGO AREA */}
      <div className="relative overflow-hidden">

        {/* MOVING STRIP */}
        <div className="flex animate-marquee whitespace-nowrap">

          {/* IMAGE 1 */}
          <img
            src={clientLogos}
            alt="Clients"
            draggable="false"
            className="
            flex-shrink-0
            
            w-[2000px]
            h-[240px]
            max-w-none
            object-cover

            select-none
          "
          />

          {/* IMAGE 2 */}
          <img
            src={clientLogos}
            alt="Clients Duplicate"
            draggable="false"
            className="
            flex-shrink-0

            w-[2000px]
            h-[240px]
            max-w-none
            object-cover

            select-none
          "
          />

        </div>
      </div>
    </section>
  );
}
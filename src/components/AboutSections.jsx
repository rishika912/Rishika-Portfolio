import React from "react";

export function Education() {

  const educationData = [
    {
      year: "2020",
      title: "10th | Vimala Convent School,\nBhawanipatna",
      details: [
        { label: "Board :", value: "ICSE" },
        { label: "Percentage:", value: "91.8 %" },
      ],
    },

    {
      year: "2022",
      title: "12th Commerce | Kendriya\nVidyalaya, Bhawanipatna",
      details: [
        { label: "Board :", value: "CBSE" },
        { label: "Percentage:", value: "89 %" },
      ],
    },

    {
      year: "2022 - 26",
      title: "Bachelor of Design\n(Communication Design)\nMIT School of Design",
      details: [
        { label: "CGPA:", value: "8.56/10" },
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#fff8f3] overflow-hidden py-14 font-urbanist">

      {/* BOTTOM LEFT SHAPE */}
      <div
        className="
          absolute
          left-0
          bottom-0
          w-[300px]
          h-[120px]
          bg-[#ffebde]
          rounded-tr-[40px]
          z-0
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative
          max-w-[1300px]
          mx-auto
          bg-[#162a42]
          rounded-[42px]
          px-[40px]
          lg:px-[72px]
          pt-[50px]
          pb-[100px]
          z-10
          shadow-xl
        "
      >

        {/* TITLE */}
        <h2
          className="
            text-center
            text-white
            text-[48px]
            lg:text-[58px]
            font-ginder
            font-light
            tracking-[2px]
            leading-none
          "
        >
          My Education
        </h2>

        {/* TIMELINE AREA */}
        <div className="relative mt-[58px]">

          {/* CONNECTING LINE 
              hidden on mobile so it doesn't break the stacked layout.
          */}
          <div
            className="
              hidden md:block
              absolute
              top-[29px]
              left-[27%]
              right-[27%]
              h-[1.5px]
              bg-white
              z-0
            "
          />

          {/* LEFT DOT */}
          <div
          className="
            hidden md:flex
            absolute
            top-[29px]
            left-[27.50%]
            -translate-x-1/2
            -translate-y-1/2

            w-[28px]
            h-[24px]

            rounded-full
            bg-[#162a42]

            items-center
            justify-center

            z-10
          "
        >

          {/* WHITE RING */}
          <div
            className="
              w-[18px]
              h-[18px]

              rounded-full

              border-[2px]
              border-white

              flex
              items-center
              justify-center
            "
          >

            {/* ORANGE DOT */}
            <div
              className="
                w-[11px]
                h-[11px]

                rounded-full
                bg-[#F28E38]
              "
            />

          </div>
        </div>

          {/* RIGHT DOT */}
          <div
            className="
              hidden md:flex
              absolute
              top-[29px]
              left-[72.50%]
              -translate-x-1/2
              -translate-y-1/2

              w-[24px]
              h-[24px]

              rounded-full
              bg-[#162a42]

              items-center
              justify-center

              z-10
            "
          >

            {/* WHITE RING */}
            <div
              className="
                w-[18px]
                h-[18px]

                rounded-full

                border-[2px]
                border-white

                flex
                items-center
                justify-center
              "
            >

              {/* ORANGE DOT */}
              <div
                className="
                  w-[11px]
                  h-[11px]

                  rounded-full
                  bg-[#F28E38]
                "
              />

            </div>
          </div>

          {/* EDUCATION GRID */}
          <div
            className="
              relative
              z-20
              grid
              grid-cols-1
              md:grid-cols-3
              gap-[48px]
              md:gap-0
            "
          >

            {educationData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center" /* Center the wrapper in the column */
              >

                {/* ALIGNMENT WRAPPER: 
                    Matches the width of the pill (200px) so the text naturally 
                    starts exactly at the pill's left edge. 
                */}
                <div className="w-[200px] flex flex-col relative z-10">

                  {/* YEAR PILL */}
                  <div
                    className="
                      w-full
                      h-[58px]
                      bg-[#162a42]
                      border-[3px]
                      border-[#F28E38]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[26px]
                      font-bold
                    "
                  >
                    {item.year}
                  </div>

                  {/* CONTENT 
                      w-max allows the text to naturally overflow the 200px width 
                      if needed, while keeping it permanently left-aligned to the pill! 
                  */}
                  <div className="mt-[18px] w-max">

                    <h3
                      className="
                        text-white
                        text-[20px]
                        leading-[1.22]
                        font-semibold
                        whitespace-pre-line
                        mb-[12px]
                      "
                    >
                      {item.title}
                    </h3>

                    <div className="space-y-[2px]">

                      {item.details.map((detail, i) => (
                        <p
                          key={i}
                          className="
                            text-white
                            text-[18px]
                            font-light
                            leading-[1.2]
                          "
                        >
                          {detail.label}{" "}
                          <span className="font-bold">
                            {detail.value}
                          </span>
                        </p>
                      ))}

                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
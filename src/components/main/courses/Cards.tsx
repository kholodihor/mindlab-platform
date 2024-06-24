"use client"
import Calendar from "@/components/icons/Calendar"
import Clock from "@/components/icons/Clock"
import { CardData } from "@/types/courses"
import { useState } from "react"

const Cards = ({ data }: { data: CardData[] }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleMouseEnter = (cardId: string) => {
    setHoveredCard(cardId)
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
  }
  return (
    <>
      {data?.map((item, index) => {
        return (
          <li
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            key={item.id}
            className={` relative z-10   h-[170px] w-[292px] cursor-pointer overflow-hidden bg-[#202227] px-8 px-[18px] py-4 sm:h-[228px] sm:w-[390px] sm:px-[22px] sm:py-[24px]  md:h-[200px] md:w-[342px] md:px-[20px] md:py-[22px] xl:h-[226px] xl:w-[387px] xl:px-[22px] 3xl:h-[242px] 3xl:w-[413px] 3xl:py-4 3xl:py-6 5xl:h-[335px] 5xl:w-[573px] `}
            style={{
              background: `radial-gradient(circle at ${
                index % 2 === 0 ? "left bottom" : "left top"
              }, ${item.gradient.color1}, ${item.gradient.color2})`
            }}
          >
            <span
              key={item.id}
              className={`-z-1 absolute  h-[1088px]   w-[1088px] transform rounded-full    transition-all  duration-1000   ${hoveredCard === item.id ? ` -bottom-[320px]   -left-[320px]` : "-bottom-[1088px] -left-[1088px] opacity-100 transition-opacity"} `}
              style={{ backgroundColor: item.hover }}
            ></span>
            <img
              src={item.img_url}
              alt={item.title}
              className={`absolute bottom-0  max-h-[288px] w-[135px]  sm:w-[182px]  md:w-[159px]  xl:w-[179px] 3xl:w-[192px] 5xl:w-[266px] ${
                index % 2 === 0 ? "bottom-0 left-0" : "bottom-0 right-0"
              }`}
            />
            <div className="absolute ">
              <h2
                className={`mb-[23px] font-['Oswald',_sans-serif] text-lg font-medium uppercase leading-[1.5] transition-all duration-500 sm:mb-[34px] sm:text-[22px] md:mb-[29px] md:text-xl xl:mb-[39px]  xl:text-[22px] 3xl:mb-[51px] 3xl:text-2xl  5xl:mb-[67px] 5xl:text-[32px] ${hoveredCard === item.id && "text-black"}`}
              >
                {item.title}
              </h2>

              <div
                className={`flex gap-[32px]  ${
                  index % 2 === 0
                    ? "ml-[164px] sm:ml-[182px] md:ml-[159px] xl:ml-[179px] 3xl:ml-[192px]  5xl:ml-[266px]"
                    : "mr-[164px] sm:mr-[182px] md:mr-[159px] xl:mr-[179px] 3xl:mr-[192px]  5xl:mr-[266px]"
                }`}
              >
                <div>
                  <ul
                    className={`xl:md-[22px] mb-4 transition-all duration-500 sm:mb-[22px] md:mb-[20px] 3xl:mb-6 5xl:mb-[32px] ${hoveredCard === item.id && "text-black "}`}
                  >
                    <li className="flex items-center gap-[8px]">
                      <Clock
                        className={`5xl:h-[12px h-[8px] w-[8px] fill-none transition-all duration-500 sm:h-[10px] sm:w-[10px] md:h-[9px]  md:w-[9px]  ${hoveredCard === item.id ? "stroke-black" : "stroke-white "}`}
                      />
                      <p className="font-['Inter',_sans-serif] text-[10px] font-light leading-[1.5] tracking-[0px] sm:text-xs  md:text-[10px] xl:text-xs 5xl:text-base">
                        {item.time}
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Calendar
                        className={`h-[8px] w-[8px] fill-none transition-all duration-500 sm:h-[10px] sm:w-[10px] md:h-[9px] md:w-[9px]  5xl:h-[12px] ${hoveredCard === item.id ? "stroke-black" : "stroke-white "}`}
                      />
                      <p className="font-['Inter',_sans-serif] text-[10px] font-light leading-[1.5] tracking-[0px] sm:text-[12px] md:text-[10px] xl:text-[12px] 5xl:text-[16px]">
                        {item.lesson}
                      </p>
                    </li>
                  </ul>
                  <ul
                    className={`flex flex-wrap gap-2 ${hoveredCard === item.id && "text-black "}`}
                  >
                    {item.skills &&
                      item?.skills.map((skill) => (
                        <li
                          key={skill.id}
                          className={`sm:rounded-1 mb-0 rounded-[3px] px-2 py-[3px] font-['Inter',_sans-serif] text-[8px]  leading-[1.5] tracking-[0px]  transition-all duration-500 sm:px-[11px] sm:py-[5px] sm:text-[10px] 3xl:px-3 3xl:py-[6px] 5xl:rounded-[6px] 5xl:px-3 5xl:py-[7.5px] 5xl:text-sm ${hoveredCard === item.id ? "[border:1px_solid_black]" : "[border:1px_solid_#eaeaeb]"}`}
                        >
                          {skill.title}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default Cards

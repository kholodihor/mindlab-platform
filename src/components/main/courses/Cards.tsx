"use client"
import Calendar from "@/components/icons/Calendar"
import Clock from "@/components/icons/Clock"
import { CardsResponse } from "@/types/courses"
import { useState } from "react"

const Cards = ({ data }: { data: CardsResponse[] }) => {
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
            className={`relative z-10  h-[335px]  w-[573px] cursor-pointer overflow-hidden bg-[#202227] px-[32px]  py-[24px]`}
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
              width={220}
              height={230}
              className={`absolute  ${
                index % 2 === 0
                  ? "bottom-0 left-[17px]"
                  : "bottom-0 right-[17px]"
              }`}
            />
            <div className="absolute">
              <h2
                className={` mb-[67px] font-['Oswald',_sans-serif] text-[32px] font-medium uppercase  leading-[1.5]  ${hoveredCard === item.id && "text-black "}`}
              >
                {item.title}
              </h2>

              <div
                className={`flex gap-[32px]  ${
                  index % 2 === 0 ? "ml-[247px]" : "mr-[247px]"
                }`}
              >
                <div>
                  <ul
                    className={`mb-[32px] ${hoveredCard === item.id && "text-black "}`}
                  >
                    <li className="flex items-center gap-[8px]">
                      <Clock
                        className={`h-[14px] w-[14px] fill-none  ${hoveredCard === item.id ? "stroke-black" : "stroke-white "}`}
                      />
                      <p className="font-['Inter',_sans-serif] text-[16px] font-light  leading-[1.5] tracking-[0px]">
                        {item.time}
                      </p>
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <Calendar
                        className={`h-[14px] w-[14px] fill-none  ${hoveredCard === item.id ? "stroke-black" : "stroke-white "}`}
                      />
                      <p className="font-['Inter',_sans-serif] text-[16px] font-light  leading-[1.5] tracking-[0px]">
                        {item.lesson}
                      </p>
                    </li>
                  </ul>
                  <ul
                    className={`flex flex-wrap gap-[8px] ${hoveredCard === item.id && "text-black "}`}
                  >
                    {item?.skills.map((skill) => (
                      <li
                        key={skill.id}
                        className={`rounded-[6px] px-[16px] py-[7.5px]  ${hoveredCard === item.id ? "[border:1px_solid_black]" : "[border:1px_solid_#eaeaeb]"}`}
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

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
      <style>
        {`
          .active {
            transition:  bottom 0.9s ease-in-out, left 0.9s ease-in-out;}
            .overlay{
            transition: opacity 1s ease-in-out;}
        `}
      </style>
      {data?.map((item, index) => {
        return (
          <li
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            key={item.id}
            className={` relative z-10   h-[170px] w-[292px] cursor-pointer overflow-hidden  px-4  py-[18px] sm:h-[228px] sm:w-[390px] sm:px-[22px] sm:py-6  md:h-[200px] md:w-[342px] md:px-[20px] md:py-[22px] xl:h-[226px] xl:w-[387px] xl:px-[22px] 3xl:h-[242px] 3xl:w-[413px] 3xl:py-4 3xl:py-6 5xl:h-[335px] 5xl:w-[573px] `}
            style={{
              background: `radial-gradient(circle at ${
                index % 2 === 0 ? "left bottom" : "left top"
              }, ${item.gradient.color1}, ${item.gradient.color2})`
            }}
          >
            <span
              className={`active -z-1 absolute  h-[55rem] w-[45rem] transform  rounded-full  transition-all    ${hoveredCard === item.id ? " -bottom-[30rem] -left-[15rem]    " : "-bottom-[55rem] -left-[45rem] opacity-0 transition-opacity"} `}
              style={{ backgroundColor: item.hover }}
            ></span>
            <div
              className={`overlay  -z-1 absolute left-0 top-0 h-full w-full rounded-lg `}
              style={{
                backgroundColor: item.gradient.color1,
                opacity: hoveredCard === item.id ? 1 : 0
              }}
            ></div>
            <img
              src={item.img_url}
              alt={item.title}
              className={`absolute bottom-0  max-h-[122.3px] w-[135px]  sm:max-h-[165px] sm:w-[182px] md:max-h-[158px] md:w-[159px] xl:max-h-[190px] xl:w-[179px]  3xl:w-[192px] 5xl:max-h-[257px] 5xl:w-[266px] ${
                index % 2 === 0 ? "bottom-0 left-0" : "bottom-0 right-0"
              }`}
            />
            <div className="absolute ">
              <h2
                className={`mb-[23px] font-oswald text-lg font-medium uppercase leading-[1.5] transition-all duration-1000 sm:mb-[34px] sm:text-[22px] md:mb-[29px] md:text-xl xl:mb-[39px]  xl:text-[22px] 3xl:mb-[50px] 3xl:text-2xl  5xl:mb-[67px] 5xl:text-[32px] ${hoveredCard === item.id && "text-black"}`}
              >
                {item.title}
              </h2>

              <div
                className={`flex  ${
                  index % 2 === 0
                    ? "ml-[141px] sm:ml-[174px] md:ml-[163px] xl:ml-[180px] 3xl:ml-[197px]  5xl:ml-[273px]"
                    : "mr-[164.4px] sm:mr-[204px] md:mr-[191.29px] xl:mr-[216px] 3xl:mr-[231px]  5xl:mr-[322px]"
                }`}
              >
                <div>
                  <ul
                    className={`xl:md-[22px] mb-4 transition-all duration-1000 sm:mb-[22px] md:mb-[20px] 3xl:mb-6 5xl:mb-8 ${hoveredCard === item.id && "text-black "}`}
                  >
                    <li className="flex items-center gap-[3.5px] sm:gap-[5.45px] md:gap-[5px]">
                      <Clock
                        className={`h-[8px] w-[8px] fill-none transition-all duration-1000 sm:h-[10px] sm:w-[10px] md:h-[9px] md:w-[9px]  5xl:h-[12px]  ${hoveredCard === item.id ? "stroke-black" : "stroke-white "}`}
                      />
                      <p className=" text-[10px] font-light leading-[1.5] tracking-[0px] sm:text-xs  md:text-[10px] xl:text-xs 5xl:text-base">
                        {item.time}
                      </p>
                    </li>
                    <li className="flex items-center gap-[3.5px] sm:gap-[5.45px] md:gap-[5px]">
                      <Calendar
                        className={`h-[8px] w-[8px] fill-none transition-all duration-1000 sm:h-[10px] sm:w-[10px] md:h-[9px] md:w-[9px]  5xl:h-[12px] ${hoveredCard === item.id ? "stroke-black" : "stroke-white "}`}
                      />
                      <p className="text-[10px] font-light leading-[1.5] tracking-[0px] sm:text-xs md:text-[10px] xl:text-xs 5xl:text-base">
                        {item.lesson}
                      </p>
                    </li>
                  </ul>
                  <ul
                    className={`flex flex-wrap gap-1 sm:gap-[6px] 3xl:gap-2  ${hoveredCard === item.id && "text-black "}`}
                  >
                    {item.skills &&
                      item?.skills.map((skill) => (
                        <li
                          key={skill.id}
                          className={`sm:rounded-1 mb-0 flex h-[18.35px] w-fit items-center rounded-[3px] px-[3.65px]  text-[8px]  leading-[1.5] tracking-[0px]  transition-all duration-1000 sm:h-[24.51px] sm:px-[10.89px]  sm:text-[10px] md:h-[21.49px] md:px-[4px] xl:h-[24.31px] xl:px-[10px] xl:text-[9px]  3xl:h-[26px] 3xl:px-3 5xl:h-[36px] 5xl:rounded-[6px] 5xl:text-sm ${hoveredCard === item.id ? "[border:1px_solid_black]" : "[border:1px_solid_#eaeaeb]"}`}
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

"use client"

import { CardData } from "@/types/courses"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const SaleCards = ({ data }: { data: CardData[] }) => {
  const { t } = useTranslation("Main")
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
      {data?.map((item) => {
        return (
          <li
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            key={item.id}
            className={` relative z-10 h-[170px] w-[292px]  cursor-pointer overflow-hidden bg-[#202227] px-4  py-[18px] sm:h-[228px] sm:w-[390px] sm:px-[22px] sm:py-[24px] md:h-[200px] md:w-[342px]  md:px-[20px] md:py-[22px] xl:h-[226px] xl:w-[387px] xl:px-[22px] 3xl:h-[242px] 3xl:w-[413px] 3xl:py-4 3xl:py-6 5xl:h-[335px] 5xl:w-[573px]`}
            style={{
              background: `radial-gradient(circle at left bottom, ${item.gradient.color1} , ${item.gradient.color2}) `
            }}
          >
            <span
              className={`active -z-1 absolute  h-[55rem] w-[45rem] transform  rounded-full  transition-all    ${hoveredCard === item.id ? " -bottom-[30rem] -left-[15rem]    " : "-bottom-[55rem] -left-[45rem] opacity-0 transition-opacity"} `}
              style={{ backgroundColor: item.hover }}
            ></span>
            <div
              className={`overlay  -z-1 absolute left-0 top-0 h-full w-full rounded-lg`}
              style={{
                backgroundColor: `${item.gradient.color1}`,
                opacity: hoveredCard === item.id ? 1 : 0
              }}
            ></div>
            <img
              src={item.img_url}
              alt={item.title}
              className="absolute bottom-0 left-[17px] max-h-[147px] w-[126px] sm:max-h-[196px] sm:w-[168px] md:max-h-[172px] md:w-[148px] xl:max-h-[194px] xl:w-[167px] 3xl:max-h-[208px] 3xl:w-[178px] 5xl:max-h-[288px] 5xl:w-[248px]"
            />
            <div className="absolute">
              <h2
                className={`mb-0.5 font-oswald text-lg font-medium uppercase leading-[1.5] transition-all duration-1000 sm:text-[22px]  md:text-xl xl:text-[22px] 3xl:text-2xl  5xl:mb-1 5xl:text-[32px] ${hoveredCard === item.id && "text-black"}`}
              >
                {item.title}
              </h2>
              <p
                className={`mb-4  text-xs leading-[1.5] transition-all  duration-1000 sm:mb-6 sm:text-sm md:mb-[19px] md:text-xs xl:mb-[30px] 3xl:mb-7 3xl:text-sm 5xl:mb-[49px] 5xl:text-lg ${hoveredCard === item.id && "text-black"}`}
              >
                {item.items}
              </p>
              <div className="absolute ml-[148px] sm:ml-[186px] md:ml-[163px] xl:ml-48 3xl:ml-[205px] 5xl:ml-[274px]">
                <ul className=" mb-1  sm:mb-2  xl:mb-[20px]   5xl:mb-6 ">
                  {item.info &&
                    item?.info.map((it) => (
                      <li key={it.id}>
                        <p
                          className={` text-[10px] leading-[1.5]  tracking-[0px]  transition-all duration-1000 sm:text-sm md:text-xs 3xl:text-sm 5xl:text-lg ${hoveredCard === item.id && "text-black"}`}
                        >
                          {it.title}
                        </p>
                      </li>
                    ))}
                </ul>
                <p
                  className={`text-base font-medium leading-[2.1] transition-all duration-1000 sm:text-xl md:text-lg 3xl:text-xl 5xl:text-[28px]  ${hoveredCard === item.id ? "text-black" : "text-lime"}`}
                >
                  {t("courses_section.sale")}
                </p>
              </div>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default SaleCards

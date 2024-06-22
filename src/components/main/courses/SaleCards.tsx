"use client"

import { SaleCard } from "@/types/courses"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const SaleCards = ({ data }: { data: SaleCard[] }) => {
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
      {data?.map((item) => {
        return (
          <li
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            key={item.id}
            className={` relative z-10 h-[170px] w-[292px]  cursor-pointer overflow-hidden bg-[#202227] px-8 px-[18px] py-4 sm:h-[228px] sm:w-[390px] sm:px-[22px] sm:py-[24px] md:h-[200px] md:w-[342px]  md:px-[20px] md:py-[22px] xl:h-[226px] xl:w-[387px] xl:px-[22px] 3xl:h-[242px] 3xl:w-[413px] 3xl:py-4 3xl:py-6 5xl:h-[335px] 5xl:w-[573px]`}
            style={{
              background: `radial-gradient(circle at left bottom,${item.gradient.color1} , ${item.gradient.color2} `
            }}
          >
            <span
              className={`-z-1 absolute  h-[65rem] w-[65rem] transform  rounded-full  transition-all  duration-1000   ${hoveredCard === item.id ? " -bottom-[20rem] -left-[20rem]    " : "-bottom-[65rem] -left-[65rem] opacity-0 transition-opacity"} `}
              style={{ backgroundColor: item.hover }}
            ></span>
            <img
              src={item.img_url}
              alt={item.title}
              width={247}
              height={288}
              className="absolute bottom-0 left-[17px]"
            />
            <div className="absolute">
              <h2
                className={` mb-[4px] font-['Oswald',_sans-serif] text-[32px] font-medium uppercase  leading-[1.5] transition-all duration-500 ${hoveredCard === item.id && "text-black"}`}
              >
                {item.title}
              </h2>
              <p className=" mb-[49px] text-[18px]  leading-[1.5]">
                {item.items}
              </p>
              <ul className="absolute mb-[24px] ml-[247px]">
                {item?.info.map((it) => (
                  <li key={it.id}>
                    <p
                      className={` text-[18px]  leading-[1.5] tracking-[0px] transition-all duration-500 ${hoveredCard === item.id && "text-black"}`}
                    >
                      {it.title}
                    </p>
                  </li>
                ))}
                <p
                  className={`text-[28px] font-medium leading-[2.1] transition-all duration-500  ${hoveredCard === item.id ? "text-black" : "text-lime"}`}
                >
                  {t("courses_section.sale")}
                </p>
              </ul>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default SaleCards

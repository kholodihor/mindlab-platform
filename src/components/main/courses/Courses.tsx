import { useTranslation } from "react-i18next"
import Title from "./Title"
import coursesSale from "./courseSale.json"
import data from "./data.json"
import Calendar from "@/components/icons/Calendar"
import Clock from "@/components/icons/Clock"
import { useState } from "react"

const Courses = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [hoveredCard2, setHoveredCard2] = useState<string | null>(null) // State to track hovered card ID
  const { t } = useTranslation("Main")

  // Event handlers to handle mouse enter and leave
  const handleMouseEnter = (cardId: string) => {
    setHoveredCard(cardId)
    setHoveredCard2(cardId)
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
    setHoveredCard2(null)
  }
  return (
    <section className="mb-[211px] w-full xl:px-[40px] 3xl:px-[80px]">
      <Title />
      <div className="flex flex-wrap gap-[20px]">
        <ul className="flex flex-wrap gap-[20px]">
          {coursesSale?.map((item) => {
            return (
              <li
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                key={item.id}
                className={`duration-2000 relative z-10 h-[335px] w-[573px] transform cursor-pointer overflow-hidden bg-[#202227] px-[32px]  py-[24px]  transition-opacity  `}
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
                >
                  Inna
                </span>
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
                    className={` mb-[67px] font-['Oswald',_sans-serif] text-[32px] font-medium uppercase  leading-[1.5]  ${hoveredCard2 === item.id && "text-black "}`}
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
                        className={`mb-[32px] ${hoveredCard2 === item.id && "text-black "}`}
                      >
                        <li className="flex items-center gap-[8px]">
                          <Clock
                            className={`h-[14px] w-[14px] fill-none  ${hoveredCard2 === item.id ? "stroke-black" : "stroke-white "}`}
                          />
                          <p className="font-['Inter',_sans-serif] text-[16px] font-light  leading-[1.5] tracking-[0px]">
                            {item.time}
                          </p>
                        </li>
                        <li className="flex items-center gap-[8px]">
                          <Calendar
                            className={`h-[14px] w-[14px] fill-none  ${hoveredCard2 === item.id ? "stroke-black" : "stroke-white "}`}
                          />
                          <p className="font-['Inter',_sans-serif] text-[16px] font-light  leading-[1.5] tracking-[0px]">
                            {item.lesson}
                          </p>
                        </li>
                      </ul>
                      <ul
                        className={`flex flex-wrap gap-[8px] ${hoveredCard2 === item.id && "text-black "}`}
                      >
                        {item?.skills.map((skill) => (
                          <li
                            key={skill.id}
                            className={`rounded-[6px] px-[16px] py-[7.5px]  ${hoveredCard2 === item.id ? "[border:1px_solid_black]" : "[border:1px_solid_#eaeaeb]"}`}
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
        </ul>
      </div>
    </section>
  )
}
export default Courses

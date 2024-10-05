import { useState } from "react"
import { NavLink } from "react-router-dom"
import { dashboard } from "@/data/dashboard"
import { getWidthOfIcon } from "@/helpers/getWidthOfIcon"
import { useWidth } from "@/hooks/useWidth"

const Dashboard = () => {
  const currentWidth = useWidth()
  const [isHovered, setIsHovered] = useState("")
  return (
    <div className="flex items-center justify-center px-[14px] pb-10 pt-[70px] sm:px-5 sm:py-[76px] md:py-[100px] xl:p-10 xl:py-[120px] 4xl:py-[160px]">
      <ul className="flex w-[100%] max-w-[1375px] flex-wrap justify-between gap-y-2 sm:gap-y-5 4xl:justify-center 4xl:gap-x-5">
        {dashboard.map(({ title, description, Component, colorIcon, href }) => (
          <li
            key={title}
            className="w-[48.64%] sm:w-[47.4%] md:w-[48.45%] 2md:w-[32%] xl:w-[32.25%] 3xl:w-[32.36%] 4xl:w-[445px]"
          >
            <NavLink
              onMouseEnter={() => setIsHovered(colorIcon)}
              onMouseLeave={() => setIsHovered("")}
              to={href}
              className="group relative flex h-[160px] flex-wrap content-start justify-center gap-4 overflow-hidden rounded-lg border border-lightGray bg-graphite pt-[34.5px] sm:h-[240px] sm:pt-[64.5px] md:h-[280px] md:px-4 md:pt-10 2md:hover:text-black 3xl:px-10"
            >
              <div
                className={`absolute bottom-0 left-0 h-4 w-4 scale-0 transform rounded-full transition-transform duration-1300 ease-out 2md:group-hover:scale-[100]`}
                style={{ backgroundColor: colorIcon }}
              ></div>
              <div
                className="relative z-10"
                style={{
                  color: isHovered === colorIcon ? "#191A1F" : colorIcon
                }}
              >
                <Component width={getWidthOfIcon(currentWidth)} />
              </div>
              <h2 className="relative z-10 w-[75%] text-center text-lg sm:w-[86%] sm:text-2xl sm:font-medium 4xl:text-[28px]">
                {title}
              </h2>
              <p
                className="relative z-10 hidden md:block md:text-center"
                style={{
                  color: isHovered === colorIcon ? "#191A1F" : "#80838B"
                }}
              >
                {description}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard

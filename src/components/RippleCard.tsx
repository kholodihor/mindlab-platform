import { useState } from "react"

const RippleCard = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card relative mt-4 h-[15rem] w-[80vw] overflow-hidden  rounded-md border border-white bg-gradient-to-tr from-graphite to-blue font-bold text-black md:w-[30rem]"
    >
      <div className="absolute left-0 top-0 z-10 flex  h-full  w-full items-center justify-center">
        RippleCard
      </div>
      <span
        className={`-z-1 absolute h-[60rem] w-[60rem] rounded-full bg-green transition-all duration-1000 ${isHovered ? "-bottom-[25rem] -left-[25rem]" : "-bottom-[55rem] -left-[55rem]"} `}
      ></span>
    </div>
  )
}

export default RippleCard

import { useState } from "react"

const RotatingStar = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className=" relative h-[140px] w-[140px] rounded-full md:h-[180px] md:w-[180px]">
      <img
        width={140}
        height={140}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" cursor-pointer transition-all duration-300 ease-in-out hover:rotate-[240deg] md:h-[180px] md:w-[180px]"
        src={"/footer/rotatingStarBig.svg"}
        alt="web site icon"
      />
      {isHovered ? (
        <img
          width={47.44}
          height={47.44}
          className="absolute left-12 top-12 rotate-3 cursor-pointer md:left-[62px] md:top-[62px] md:h-[61px] md:w-[61px]"
          src="/footer/smile2.svg"
          alt="smile"
        />
      ) : (
        <img
          width={47.44}
          height={47.44}
          className="absolute left-12 top-12 rotate-3 cursor-pointer md:left-[62px] md:top-[62px] md:h-[61px] md:w-[61px]"
          src="/footer/smile.svg"
          alt="smile"
        />
      )}
    </div>
  )
}

export default RotatingStar

import { useState } from "react"
import { useTranslation } from "react-i18next"

const RotatingStar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { i18n } = useTranslation()

  return (
    <div className=" relative h-[120px] w-[120px] rounded-full md:h-[160px] md:w-[160px] 5xl:h-[200px] 5xl:w-[200px]">
      <img
        width={140}
        height={140}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" cursor-pointer transition-all duration-300 ease-in-out hover:rotate-[240deg] md:h-[160px] md:w-[160px] 5xl:h-[200px] 5xl:w-[200px]"
        src={
          i18n.resolvedLanguage === "en"
            ? "/images/footer/rotating-star-EN.svg"
            : "/images/footer/rotating-star-UA.svg"
        }
        alt="web site icon"
      />
      {isHovered ? (
        <img
          width={47.44}
          height={47.44}
          className="absolute left-10 top-10 rotate-3 cursor-pointer md:left-[50px] md:top-[50px] md:h-[61px] md:w-[61px] 5xl:left-[57px] 5xl:top-[55px] 5xl:h-[88px] 5xl:w-[88px]"
          src="/images/footer/smile2.svg"
          alt="smile"
        />
      ) : (
        <img
          width={47.44}
          height={47.44}
          className="absolute left-9 top-9 rotate-3 cursor-pointer md:left-[50px] md:top-[50px] md:h-[61px] md:w-[61px] 5xl:left-[57px] 5xl:top-[55px] 5xl:h-[88px] 5xl:w-[88px]"
          src="/images/footer/smile.svg"
          alt="smile"
        />
      )}
    </div>
  )
}

export default RotatingStar

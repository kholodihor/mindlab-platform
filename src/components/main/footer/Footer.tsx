import { socialeList } from "@/data/footer"
import RotatingStar from "../../shared/RotatingStar"
import RunningLine from "./RunningLine"
import GifBlock from "./GifsBlock"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import Partners from "./Partners"
const Footer = () => {
  const [isHovered, setIsHovered] = useState("")
  const [showPartners, setShowPartners] = useState(false)
  const { t } = useTranslation("Footer")
  return (
    <footer>
      <RunningLine />
      <div className="flex items-start justify-between px-[14px] sm:px-5 xl:px-10 3xl:px-20">
        <div className="flex w-[127px] flex-wrap  gap-[23px] md:w-[600px] md:flex-nowrap md:items-start md:justify-between md:gap-0">
          <div className="flex flex-wrap  text-sm  md:gap-2 3xl:gap-[9px] 3xl:text-base 5xl:text-lg">
            <a
              href="tel: +380999999999"
              className="block transition-all duration-300 hover:text-lightViolet md:w-[241px] xl:w-[407px] 3xl:w-[433px] 5xl:w-[593px]"
            >
              +38099 999 99 99
            </a>
            <a
              href="tel: +380888888888"
              className="duration-300 hover:text-lightViolet"
            >
              +38088 888 88 88
            </a>
          </div>
          <div className="flex flex-wrap text-sm md:w-[358px] md:gap-2 3xl:gap-[9px] 3xl:text-base 5xl:text-lg">
            <p className="md:w-[358px]">{t("support")}</p>
            <a
              href="mailto:mind.lab.hub@gmail.com"
              className="duration-300 hover:text-lightViolet md:w-[358px]"
            >
              @Mind_Lab
            </a>
          </div>
        </div>
        <div className="flex w-[70px] flex-wrap text-sm md:gap-[6px] 3xl:w-[88px] 3xl:gap-2 3xl:text-base 5xl:text-lg">
          <p
            className="cursor-pointer border-b-2 pb-[1px]"
            onClick={() => setShowPartners(true)}
          >
            {t("partners")}
          </p>
          <p className="md:w-[125px] 5xl:w-[128px]">MIND LAB</p>
        </div>
      </div>
      <div className="relative mb-4 h-[264px] sm:h-[260px] md:h-[333px] xl:mb-[18px] xl:h-[323px] 3xl:h-[355px] 5xl:mb-6 5xl:h-[493px]">
        <div className="absolute bottom-[64%] right-[10%] md:bottom-[26%] md:right-[42%] 2md:bottom-[5%] 2md:right-[56%] 3md:right-[61%] xl:bottom-[17px] 2xl:right-[62%] 5xl:bottom-[50px]  5xl:left-[510px]">
          <RotatingStar />
        </div>
        <ul className="flex flex-wrap gap-10">
          {socialeList.map(
            ({ title, href, Component, ComponentMob, style, titleLeptop }) => (
              <li key={title}>
                <a
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  onMouseEnter={() => setIsHovered(title)}
                  onMouseLeave={() => setIsHovered("")}
                  className={`${style} absolute z-10 flex items-center`}
                >
                  <div
                    className={`${isHovered === title ? "sm:border-violet sm:text-violet" : "sm:border-white sm:bg-black"} hidden h-[40px] w-[40px] items-center justify-center rounded-bl-md rounded-tl-md border-[1px] text-white sm:flex sm:bg-black 3xl:h-[48px] 3xl:w-[48px] 5xl:hidden`}
                  >
                    <Component />
                  </div>
                  <div
                    className={`${isHovered === title ? "border-violet text-violet" : "border-white bg-black"} flex  h-[60px] w-[60px] items-center justify-center rounded-md border-[1px]  bg-black sm:hidden 5xl:flex 5xl:rounded-br-none 5xl:rounded-tr-none`}
                  >
                    <ComponentMob />
                  </div>
                  <p
                    className={`${isHovered === title ? "sm:border-violet sm:bg-violet" : "sm:border-white sm:bg-white"} hidden h-[40px] items-center px-[8px] text-[22px] font-medium uppercase text-black sm:flex sm:rounded-r sm:border-[1px] sm:text-black  3xl:h-[48px] 3xl:text-2xl 5xl:h-[60px] 5xl:text-[32px]`}
                  >
                    {window.innerWidth >= 1100 && titleLeptop
                      ? t(titleLeptop)
                      : t(title)}
                  </p>
                </a>
              </li>
            )
          )}
        </ul>
        <GifBlock />
      </div>
      <div className=" mb-4 justify-center gap-4 text-center text-[10px] text-lightGray md:flex md:flex-row-reverse md:text-xs xl:gap-[16px] 3xl:gap-[18px] 3xl:text-sm 5xl:gap-6">
        <p>{t("copyright")}</p>
        <p>Copyright © 2023-2024</p>
      </div>
      <Partners isOpen={showPartners} onClosePartners={setShowPartners} />
    </footer>
  )
}
export default Footer

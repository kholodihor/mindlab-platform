import { socialeList } from "@/data/footer"
import RotatingStar from "../../shared/RotatingStar"
import RunningLine from "./RunningLine"
import GifBlock from "./GifsBlock"
import { useTranslation } from "react-i18next"
const Footer = () => {
  const { t } = useTranslation("Footer")
  return (
    <footer>
      <RunningLine />
      <div className="flex items-start justify-between px-[14px] sm:px-5 xl:px-10 3xl:px-20">
        <div className="flex w-[127px] flex-wrap  gap-[23px] md:w-[600px] md:flex-nowrap md:items-start md:justify-between md:gap-0">
          <div className="flex flex-wrap  text-sm md:w-[241px] md:gap-2 xl:w-[407px] 3xl:gap-[9px] 3xl:text-base">
            <a href="tel: +380999999999" className="block xl:w-[407px]">
              +38099 999 99 99
            </a>
            <a href="tel: +380888888888">+38088 888 88 88</a>
          </div>
          <div className="flex flex-wrap text-sm md:w-[358px] md:gap-2 3xl:gap-[9px] 3xl:text-base">
            <p className="md:w-[358px]">{t("support")}</p>
            <p className="md:w-[358px]">@Mind_Lab</p>
          </div>
        </div>
        <div className="flex w-[70px] flex-wrap text-sm md:gap-2 3xl:w-[88px] 3xl:gap-[9px] 3xl:text-base">
          <p className="md:w-[125px]">MIND LAB</p>
          <p>2024</p>
        </div>
      </div>
      <div className="relative mb-4 h-[264px] sm:h-[260px] md:h-[333px] xl:mb-[18px] xl:h-[323px] 3xl:h-[355px]">
        <div className="absolute bottom-[64%] right-[10%] md:bottom-[26%] md:right-[42%] 2md:bottom-[5%] 2md:right-[56%] 3md:right-[61%] xl:bottom-[17px]">
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
                  className={`${style} absolute flex items-center rounded-md hover:border-violet hover:bg-violet hover:text-violet `}
                >
                  <div
                    className={`hidden h-[40px] w-[40px] items-center justify-center rounded-bl-md rounded-tl-md border-[1px] border-white bg-black text-white hover:text-violet sm:flex 3xl:h-[48px] 3xl:w-[48px] 5xl:hidden`}
                  >
                    <Component />
                  </div>
                  <div className="flex  h-[60px] w-[60px] items-center justify-center rounded-md  border-[1px] border-white bg-black hover:border-violet hover:text-violet sm:hidden 5xl:flex 5xl:rounded-br-none 5xl:rounded-tr-none">
                    <ComponentMob />
                  </div>
                  <p className="hidden h-[40px] items-center px-[8px] text-[22px] font-medium uppercase text-black sm:flex sm:rounded-r sm:border-[1px] sm:border-white  sm:bg-white sm:text-black  3xl:h-[48px] 3xl:text-2xl 5xl:h-[60px] 5xl:text-[32px]">
                    {window.innerWidth >= 1100 && titleLeptop
                      ? titleLeptop
                      : title}
                  </p>
                </a>
              </li>
            )
          )}
        </ul>
        <GifBlock />
      </div>
      <div className=" mb-4 justify-center gap-4 text-center text-[10px] text-lightGray md:flex md:flex-row-reverse md:text-xs xl:gap-[16px] 3xl:gap-[18px] 3xl:text-sm">
        <p>{t("copyright")}</p>
        <p>Copyright © 2023-2024</p>
      </div>
    </footer>
  )
}
export default Footer

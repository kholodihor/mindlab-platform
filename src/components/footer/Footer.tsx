import { socialeList } from "@/data/footer"
import RotatingStar from "../shared/RotatingStar"
import RunningLine from "./RunningLine"
const Footer = () => {
  return (
    <footer>
      <RunningLine />
      <div className="flex items-start justify-between px-[14px] sm:px-5 xl:px-10 3xl:px-20">
        <div className="flex w-[127px] flex-wrap  gap-[23px] md:w-[600px] md:flex-nowrap md:items-start md:justify-between md:gap-0">
          <div className="flex flex-wrap  text-sm md:w-[241px] md:gap-2">
            <a href="tel: +380999999999">+38099 999 99 99</a>
            <a href="tel: +380888888888">+38088 888 88 88</a>
          </div>
          <div className="flex flex-wrap text-sm md:w-[358px] md:gap-2">
            <p className="md:w-[358px]">підтримка:</p>
            <p className="md:w-[358px]">@Mind_Lab</p>
          </div>
        </div>
        <div className="flex w-[70px] flex-wrap text-sm md:w-[125px] md:gap-2">
          <p>MIND LAB</p>
          <p>2024</p>
        </div>
      </div>
      <div className="relative mb-4 h-[264px] sm:h-[260px] md:h-[333px] xl:mb-[18px] xl:h-[330px]">
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
                  className={`${style} absolute flex items-center  hover:border-violet hover:bg-violet hover:text-violet sm:h-10 sm:rounded sm:bg-white sm:pl-[1px] sm:text-black xl:h-[48px]`}
                >
                  <div
                    className={`hidden h-[60px] w-[60px] items-center justify-center rounded-bl-md rounded-tl-md border border-white bg-black text-white hover:text-violet sm:flex sm:h-[38px]  sm:w-[38px] sm:border-none xl:h-[47px] xl:w-[46px]`}
                  >
                    <Component />
                  </div>
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md border border-white bg-black hover:border-violet hover:text-violet sm:hidden">
                    <ComponentMob />
                  </div>
                  <p className="hidden px-[8px] text-[22px] font-medium uppercase text-black sm:block xl:text-2xl">
                    {window.innerWidth >= 1100 && titleLeptop
                      ? titleLeptop
                      : title}
                  </p>
                </a>
              </li>
            )
          )}
        </ul>
        <div>
          <img
            src="/footer/eyes.svg"
            className="absolute bottom-[6%] left-[7%] h-[40px] w-[40px] sm:bottom-[52%] sm:left-[5%] md:bottom-[3%] md:left-[2%] xl:bottom-[32px] xl:left-[3%] xl:h-[60px] xl:w-[60px]"
          />
          <img
            src="/footer/eye.svg"
            className="absolute left-[43%] top-[41%] h-[40px] w-[40px] sm:left-[48%] sm:top-[21%] md:left-[92%] md:top-[85%] 3md:left-[95%] xl:top-[79%] xl:h-[60px] xl:w-[60px]"
          />
          <img
            src="/footer/fire.svg"
            className="absolute left-[7%] top-[28%] h-[40px] w-[40px] sm:left-[20%] sm:top-[9%] md:left-[19%] md:top-[58%] xl:left-[22%] xl:top-[137px] xl:h-[60px] xl:w-[60px]"
          />
          <img
            src="/footer/glasses.svg"
            className="absolute bottom-[38%] right-[5%] h-[40px] w-[40px] sm:bottom-[6%] sm:right-[44%] md:bottom-[3%] md:right-[19%] 2md:right-[32%] 3md:right-[42%] xl:bottom-[96px] xl:right-[32%] xl:h-[60px] xl:w-[60px]"
          />
          <img
            src="/footer/hart.svg"
            className="absolute bottom-[17%] right-[28%] h-[40px] w-[40px] sm:bottom-[56%] sm:right-[4%] md:bottom-[3%] md:right-[61%] 2md:bottom-[35%] 2md:right-[45%] 3md:bottom-[30%] 3md:right-[30%] xl:bottom-[26px] xl:right-[48%] xl:h-[60px] xl:w-[60px]"
          />
        </div>
      </div>
      <div className=" mb-4 justify-center gap-4 text-center text-[10px] text-lightGray md:flex md:flex-row-reverse md:text-xs xl:gap-[18px] xl:text-sm">
        <p>Усі права захищено</p>
        <p>Copyright © 2023-2024</p>
      </div>
    </footer>
  )
}
export default Footer

import Arrow from "@/components/icons/Arrow"
import Smile from "@/components/icons/Smile"
import SmileO from "@/components/icons/SmileO"
import Star from "@/components/icons/Star"
import { useModalContext } from "@/context/ModalContext"
import i18next from "i18next"
import { useTranslation } from "react-i18next"

const Hero = () => {
  const { t } = useTranslation("Main")
  const { openModal } = useModalContext()
  const handleClickModal = () => {
    openModal("login")
  }
  return (
    <section className="md:pt-15 5xl:pt-22 mb-20 w-full  px-3.5 pt-8 tracking-normal sm:mb-[100px] sm:px-5 sm:pt-9 xl:mb-[152px] xl:px-10 xl:pt-20 3xl:mb-[172px] 3xl:px-20 5xl:mb-[238px] 5xl:px-20 ">
      <div
        className={`mb-12 text-left font-['Fixel_Display',_sans-serif]  font-semibold uppercase leading-[1]  text-white  sm:mb-20 sm:text-[55px] md:text-[58px] xl:mb-[72px] xl:text-[100px] 3xl:text-[108px] 5xl:text-[150px] 
        ${i18next.language === "ua" ? "text-[40px] sm:text-[55px]" : "text-[36px] sm:text-[50px]"}`}
      >
        <div className="flex  items-center md:gap-1 xl:gap-[10px] 3xl:gap-[5px]">
          <Star className="hidden h-[41px] w-[30px] fill-[#AAAEDF] stroke-black md:block xl:h-[41px] xl:w-[41px] 3xl:h-[41px] 3xl:w-[41px]" />
          <p>
            {t("hero.hero_item1")}
            <Smile className="mx-1 h-[30px] w-[28px] sm:h-[41px] sm:w-[39px] md:h-[44px] md:w-[43px] xl:h-[73px] xl:w-[70px] 3xl:h-[79px] 3xl:w-[78px] 5xl:h-[109px] 5xl:w-[104px]" />
            {t("hero.hero_item2")}
          </p>{" "}
        </div>{" "}
        <p
          className={`text-lightViolet ${
            i18next.language === "ua"
              ? "md:ml-[35px] xl:ml-[51px] 3xl:ml-[49px]"
              : "md:ml-[27px] xl:ml-[41px] 3xl:ml-[33px]"
          }`}
        >
          {" "}
          <span className="text-white">{t("hero.hero_item3")}</span>
          <br className="md:hidden" /> {t("hero.hero_item4")}
        </p>{" "}
        <p
          className={`text-lightViolet ${
            i18next.language === "ua"
              ? "md:ml-[249px] xl:ml-[420px] 3xl:ml-[448px] 5xl:ml-[604px]"
              : "md:ml-[171px] xl:ml-[299px] 3xl:ml-[309px] 5xl:ml-[426px]"
          }`}
        >
          {t("hero.hero_item5")}
          <SmileO className="mx-1 h-[30px]  w-[28px] sm:h-[41px] sm:w-[39px] md:h-[44px] md:w-[43px] xl:h-[73px] xl:w-[70px] 3xl:h-[79px] 3xl:w-[78px] 5xl:h-[109px] 5xl:w-[104px]" />
          {t("hero.hero_item6")}
        </p>
      </div>
      <div className="font-normal xl:flex xl:items-end xl:justify-end xl:gap-12 3xl:gap-[108px] 5xl:gap-[167px]">
        {" "}
        <div className="gap-[140px] md:mb-5 md:flex xl:mb-0 xl:gap-5 5xl:gap-[83px]">
          <p className=" mb-4 max-w-[90px] text-left text-sm  text-lightGray sm:mb-6 sm:text-base xl:mb-0 xl:max-w-full  5xl:text-[20px]">
            {t("hero.title")}
          </p>
          <p className="mb-8 text-base md:mb-0 md:max-w-[437px] md:text-[#b3b6be] 5xl:min-w-[584px] 5xl:text-[20px]">
            <span dangerouslySetInnerHTML={{ __html: t("hero.subTitle") }} />
          </p>
        </div>
        <button
          onClick={handleClickModal}
          className="relative h-[48px] w-[292px] cursor-pointer overflow-hidden rounded-[6px] bg-lime pl-[65.5px] [border:1px_solid_#c0ed3b] sm:h-[60px] sm:w-[390px] sm:pl-[102.5px] md:h-[48px] md:w-[342px] md:pl-[90.5px] xl:w-[285px] xl:pl-[62px] 3xl:w-[305px] 3xl:pl-[72px] 5xl:h-[60px] 5xl:w-[425px] 5xl:pl-[120px] 5xl:text-[20px]"
        >
          <p className="text-left text-lg font-medium  leading-[1.27] text-[#202227] sm:text-xl sm:leading-[1.5] md:text-lg 5xl:text-xl">
            {t("hero.button")}
          </p>
          <Arrow className="absolute right-0 top-0 h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] md:h-[48px] md:w-[48px] 5xl:h-[60px] 5xl:w-[60px]" />
        </button>
      </div>
    </section>
  )
}

export default Hero

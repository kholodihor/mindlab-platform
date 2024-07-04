import Star from "@/components/icons/Star"
import { useTranslation } from "react-i18next"

const Title = () => {
  const { t } = useTranslation("Main")

  return (
    <div className=" mb-[29px] flex  items-center gap-[16px] sm:mb-9 md:mb-10  xl:mb-[42px] ">
      <Star className="hidden h-[30px] w-[30px] fill-[#AAAEDF] stroke-black md:block xl:h-[34px] xl:w-[34px] 3xl:h-[41px] 3xl:w-[41px]" />
      <h2 className="text-[32px] font-semibold uppercase leading-[1.5] tracking-[0px] text-[#eaeaeb] sm:text-[36px] md:text-[48px] xl:text-[80px] 3xl:text-[100px]">
        {" "}
        {t("courses_section.title")}
      </h2>
    </div>
  )
}

export default Title

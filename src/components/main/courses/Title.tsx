import Star from "@/components/icons/Star"
import { useTranslation } from "react-i18next"

const Title = () => {
  const { t } = useTranslation("Main")

  return (
    <div className=" mb-[20px]  flex items-center gap-[16px]">
      <Star className="h-[41px] w-[41px] fill-[#AAAEDF] stroke-black" />
      <h2 className="text-[100px] font-semibold uppercase leading-[1.5] tracking-[0px] text-[#eaeaeb]">
        {" "}
        {t("courses_section.title")}
      </h2>
    </div>
  )
}

export default Title

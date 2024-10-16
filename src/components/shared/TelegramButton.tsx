import { useWidth } from "@/hooks/useWidth"
import TelegramIcon from "../icons/studying/TelegramIcon"
import { useTranslation } from "react-i18next"

const TelegramButton = () => {
  const widthWiewport = useWidth()
  const { t } = useTranslation("StudyingPage")
  return (
    <a
      href=""
      className="flex h-9 w-[30.84%] items-center justify-center gap-4 rounded-md bg-graphite md:w-[181px] 3md:h-12 3md:w-[253px]"
    >
      <div className="h-6 w-6 text-lightViolet">
        <TelegramIcon width={24} />
      </div>
      {widthWiewport >= 744 && <p className=" text-lightViolet">{t("chat")}</p>}
    </a>
  )
}

export default TelegramButton

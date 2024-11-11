import { useTranslation } from "react-i18next"
import LessonName from "./LessonName"

const Theory = ({ topic }: any) => {
  const { t } = useTranslation("StudyingPage")
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language as "en" | "ua"

  return (
    <>
      <LessonName current={topic} />
      <div className="p-[14px] sm:px-5 3md:mb-12 3md:pl-10 3md:pr-5 3xl:pr-10">
        <div className=" rounded-lg bg-graphite px-5 py-9 ">
          <p className="mb-9">
            {currentLanguage === "en" ? topic.theoryEn : topic.theoryUa}
          </p>
          <div className="mb-9">
            <span className="pr-2">{t("presentation")}</span>
            <a href={topic.presentation} className="break-all text-violet">
              {topic.presentation}
            </a>
          </div>
          <div>
            <span className="pr-2">{t("materials")}</span>
            <a href={topic.presentation} className="break-all text-violet">
              {topic.presentation}
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Theory

import { useTranslation } from "react-i18next"

const HomeWork = ({ topic }: any) => {
  const { t } = useTranslation("StudyingPage")
  return (
    <div className="md:px-5 3md:pl-10 3xl:pr-10">
      <div className="mb-9 rounded-lg bg-graphite px-5 py-9 md:px-5 3md:mb-12 ">
        <div className="mb-9">
          <span className="pr-2">{t("test")}</span>
          <a href={topic.presentation} className="break-all text-violet">
            {topic.presentation}
          </a>
        </div>
        <div className="mb-9">
          <span className="pr-2">{t("materials")}</span>
          <a href={topic.presentation} className="break-all text-violet">
            {topic.presentation}
          </a>
        </div>
        <p>{t("maximumScore")}</p>
      </div>
    </div>
  )
}

export default HomeWork

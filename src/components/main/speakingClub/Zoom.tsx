import { useTranslation } from "react-i18next"

const Zoom = ({ topic }: any) => {
  const { t } = useTranslation("Zoom")
  return (
    <div className="px-[14px] py-[16px] sm:px-5 sm:pb-10 md:px-5 3md:mb-12 3md:pl-10 3md:pr-5 3xl:pr-10">
      <h2 className="mb-6 hidden font-medium sm:text-xl md:block">{`${topic?.number}. ${topic?.name}`}</h2>
      <div className=" rounded-lg bg-graphite px-5 py-9 ">
        <span className="pr-2">{t("zoom")}</span>
        <a href="" className="break-all text-violet">
          https://www.behance.net/gallery/192084565/Web-Design-UIUX
        </a>
      </div>
    </div>
  )
}

export default Zoom

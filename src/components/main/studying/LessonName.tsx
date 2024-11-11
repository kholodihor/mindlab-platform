import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useWidth } from "@/hooks/useWidth"

const LessonName = ({ current }: any) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language as "en" | "ua"
  const widthWiewport = useWidth()

  const [showDescriptionTopic, setshowDescriptionTopic] = useState(false)

  return (
    <div>
      <div
        className={`flex items-end justify-between px-[14px] md:px-5 3md:px-10  ${showDescriptionTopic ? " mb-2 md:mb-1" : " mb-6 md:mb-1"}`}
        onClick={() => setshowDescriptionTopic((prev) => !prev)}
      >
        {current?.nameEn ? (
          <h2 className="font-medium sm:text-xl">
            {current?.number}.{" "}
            {currentLanguage === "en" ? current?.nameEn : current?.nameUa}
          </h2>
        ) : (
          <h2 className="hidden font-medium  sm:text-xl md:block">
            {current?.number}. {current.name}
          </h2>
        )}

        {current.nameEn && (
          <img
            src="/stugying/arrow.svg"
            alt="aroww icon"
            className={`${showDescriptionTopic ? "" : "rotate-180"} md:hidden`}
          />
        )}
      </div>

      {widthWiewport < 744 && showDescriptionTopic && (
        <p className="mb-6 px-[14px] font-medium text-grayText md:mb-10 md:px-5 md:text-lg 3md:px-10">
          {currentLanguage === "en"
            ? current?.descriptionEn
            : current?.descriptionUa}
        </p>
      )}
      {widthWiewport >= 744 && (
        <p className="mb-6 px-[14px] font-medium text-grayText md:mb-10 md:px-5 md:text-lg 3md:px-10">
          {currentLanguage === "en"
            ? current?.descriptionEn
            : current?.descriptionUa}
        </p>
      )}
    </div>
  )
}

export default LessonName

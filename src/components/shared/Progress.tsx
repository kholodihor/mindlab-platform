import ArrowIcon from "@/components/icons/studying/ArrowIcon"
import { useWidth } from "@/hooks/useWidth"
import { useState } from "react"
import { useTranslation } from "react-i18next"

type ProgressProps = {
  progress: number
  completed: number
  course?: string
}

const Progress = ({ progress, completed, course }: ProgressProps) => {
  const widthWiewport = useWidth()
  const [showProgress, setShowProgress] = useState(false)
  const { t } = useTranslation("Progress")
  return (
    <div className="mb-6 sm:mb-8 3md:mb-12">
      <div className="md:flex md:justify-between md:bg-graphite 3md:flex-wrap 3md:justify-normal">
        {widthWiewport >= 744 && (
          <div className="md:px-[20px] 3md:mb-8">
            <h2 className="mb-3 text-2xl">{course}</h2>
            <div className="flex gap-2">
              <p className="text-sm text-lightGray">{`16 ${t("lesson")}`}</p>
              <img
                src="/stugying/calendar.svg"
                alt="calendar icon"
                width={14}
                height={14}
              />
            </div>
          </div>
        )}

        <div className="px-[14px] sm:px-[20px] md:w-[48.44%] 3md:w-[100%]">
          <div className="relative mb-4 flex items-center justify-between  pb-4 ">
            <h2 className="text-violet sm:text-lg">{`${t("progress")} ${progress}%`}</h2>
            <button
              type="button"
              onClick={() => setShowProgress((prev) => !prev)}
              className={`${showProgress ? "" : "rotate-180"}`}
            >
              <ArrowIcon />
            </button>
            <span
              className="absolute -bottom-[3px] z-10 block h-[3px] rounded-3xl bg-violet"
              style={{ width: `${progress}%` }}
            ></span>
            <span className="absolute -bottom-[3px] block h-[3px] w-[100%] rounded-3xl bg-lightGray"></span>
          </div>
          {showProgress && (
            <div className="mb-4  rounded-md bg-blackSecond p-6 sm:text-base">
              <p className="mb-4 ">
                <span className="text-lightGray">{t("passed")}</span>
                {` 5 ${t("lesson")}`}
              </p>
              <p className="">
                <span className="text-lightGray">{t("submitted")}</span>{" "}
                {completed} {t("homework")}
              </p>
            </div>
          )}

          <p className="text-sm text-lightGray sm:text-base">{t("text")}</p>
        </div>
      </div>
    </div>
  )
}

export default Progress

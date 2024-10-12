import { useState } from "react"
import { topicsList } from "@/data/studying"
import Progress from "./Progress"
import { useTranslation } from "react-i18next"

interface TopicsListProps {
  changeLesson: (lesson: number) => void
  onClickModal?: (boolean: boolean) => void
}

const TopicsList = ({ changeLesson, onClickModal }: TopicsListProps) => {
  const [activeTopic, setActiveTopic] = useState(1)
  const lecturesCompleted = topicsList.filter(
    ({ completed }) => completed
  ).length
  const progress = Math.floor((lecturesCompleted / topicsList.length) * 100)
  const { i18n } = useTranslation()
  const { t } = useTranslation("StudyingPage")
  const currentLanguage = i18n.language as "en" | "ua"

  const onClickLesson = (lesson: number) => {
    changeLesson(lesson)
    setActiveTopic(lesson)
    if (onClickModal) {
      onClickModal(false)
    }
  }
  return (
    <div className=" overflow-y-scroll 3md:h-[893px] 3md:w-[300px] 3md:bg-graphite 3md:pl-5 3md:pr-10 3md:pt-10 xl:w-[35%] 3xl:w-screen 5xl:w-[576px]">
      <Progress
        progress={progress}
        completed={lecturesCompleted}
        course="Career guidance"
      />
      <ul className="3md:flex 3md:flex-wrap 3md:gap-2">
        {topicsList.map(({ nameUa, nameEn, duration, completed, number }) => (
          <li
            key={number}
            className={` ${activeTopic === number ? "bg-darkGray 3md:border-l-4 3md:border-lightGray 3md:border-l-violet 3md:bg-inherit" : ""} 3md-border border-t border-darkGray py-5 pl-8 pr-5 3md:w-[100%] 3md:rounded-md 3md:border-[0.5px]`}
            onClick={() => onClickLesson(number)}
          >
            <div className="mb-3 flex justify-between ">
              <p className="w-[90%] sm:text-lg">
                <span className="text-lightViolet">{`${t("lesson")} ${number}.`}</span>{" "}
                {currentLanguage === "en" ? nameEn : nameUa}
              </p>
              <div
                className={`h-[23.1px] w-[23.1px] rounded-full ${completed ? "bg-greenLight" : "bg-gray"} flex items-center justify-center`}
              >
                <img src="/stugying/check.svg" alt="check icon" />
              </div>
            </div>
            <div className="flex gap-1 ">
              <p className=" text-sm text-gray">{`${t("duration")} ${duration} ${t("minutes")}`}</p>
              <img src="/stugying/oclock.svg" alt="oclock icon" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopicsList

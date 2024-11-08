import { useState } from "react"
import { topicsList } from "@/data/studying"
import Progress from "../../shared/Progress"
import { useTranslation } from "react-i18next"
import TopicItem from "@/components/shared/TopicItem"

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
  const currentLanguage = i18n.language as "en" | "ua"

  const onClickLesson = (lesson: number) => {
    changeLesson(lesson)
    setActiveTopic(lesson)
    if (onClickModal) {
      onClickModal(false)
    }
  }
  return (
    <div className=" overflow-y-scroll 3md:h-[893px] 3md:w-[300px] 3md:bg-graphite 3md:pl-5 3md:pr-10 3md:pt-10 xl:w-[403px] 3xl:w-[457px] 5xl:w-[576px]">
      <Progress
        progress={progress}
        completed={lecturesCompleted}
        course="Speaking club"
      />
      <ul className="3md:flex 3md:flex-wrap 3md:gap-2">
        {topicsList.map(({ nameUa, nameEn, duration, completed, number }) => (
          <TopicItem
            key={number}
            title={currentLanguage === "en" ? nameEn : nameUa}
            duration={duration}
            completed={completed}
            number={number}
            onClickLesson={onClickLesson}
            activeTopic={activeTopic}
          />
        ))}
      </ul>
    </div>
  )
}

export default TopicsList

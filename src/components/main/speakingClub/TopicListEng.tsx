import { useState } from "react"
import { topicsList } from "@/data/speakingClub"
import TopicItem from "@/components/shared/TopicItem"
import Progress from "@/components/shared/Progress"

interface TopicsListProps {
  changeLesson: (lesson: number) => void
  onClickModal?: (boolean: boolean) => void
}

const TopicListEn = ({ changeLesson, onClickModal }: TopicsListProps) => {
  const [activeTopic, setActiveTopic] = useState(1)
  const lecturesCompleted = topicsList.filter(
    ({ completed }) => completed
  ).length
  const progress = Math.floor((lecturesCompleted / topicsList.length) * 100)

  const onClickLesson = (lesson: number) => {
    changeLesson(lesson)
    setActiveTopic(lesson)
    if (onClickModal) {
      onClickModal(false)
    }
  }
  return (
    <div className=" overflow-y-scroll 3md:h-[893px] 3md:w-[300px] 3md:bg-graphite 3md:pl-5 3md:pr-10 3md:pt-10 xl:w-[403px] 3xl:w-[457px] 5xl:w-[576px]">
      <div className="hidden md:px-[20px] 3md:mb-8 3md:block">
        <h2 className="mb-3 text-2xl">Speaking club (А2)</h2>
        <div className="flex gap-2">
          <p className="text-sm text-lightGray">9 Zoom meeting </p>
          <img
            src="/stugying/calendar.svg"
            alt="calendar icon"
            width={14}
            height={14}
          />
        </div>
      </div>
      <div className="3xl:hidden">
        <Progress
          progress={progress}
          completed={lecturesCompleted}
          course="Career guidance"
        />
      </div>
      <ul className="3md:flex 3md:flex-wrap 3md:gap-2">
        {topicsList.map(({ name, completed, number }) => (
          <TopicItem
            key={number}
            number={number}
            activeTopic={activeTopic}
            onClickLesson={onClickLesson}
            completed={completed}
            title={name}
          />
        ))}
      </ul>
    </div>
  )
}

export default TopicListEn

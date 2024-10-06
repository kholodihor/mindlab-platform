import { useState } from "react"
import { topicsList } from "@/data/studying"
import Progress from "./Progress"

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

  const onClickLesson = (lesson: number) => {
    changeLesson(lesson)
    setActiveTopic(lesson)
    if (onClickModal) {
      onClickModal(false)
    }
  }
  return (
    <div className="3md:w-[300px] 3md:bg-graphite 3md:pl-5 3md:pr-10 3md:pt-10 xl:w-[35%] 5xl:w-[576px]">
      <Progress
        progress={progress}
        completed={lecturesCompleted}
        course="Career guidance"
      />
      <ul className="3md:flex 3md:flex-wrap 3md:gap-2">
        {topicsList.map(({ name, duration, completed, number }) => (
          <li
            key={number}
            className={` ${activeTopic === number ? "bg-darkGray 3md:border-l-4 3md:border-lightGray 3md:border-l-violet 3md:bg-inherit" : ""} 3md-border border-t border-darkGray py-5 pl-8 pr-5 3md:w-[100%] 3md:rounded-md 3md:border-[0.5px]`}
            onClick={() => onClickLesson(number)}
          >
            <div className="mb-3 flex justify-between ">
              <p className="w-[90%] sm:text-lg">
                <span className="text-lightViolet">Урок {number}.</span> {name}
              </p>
              <div
                className={`h-[23.1px] w-[23.1px] rounded-full ${completed ? "bg-greenLight" : "bg-gray"} flex items-center justify-center`}
              >
                <img src="/stugying/check.svg" alt="check icon" />
              </div>
            </div>
            <div className="flex gap-1 ">
              <p className=" text-sm text-gray">Тривалість {duration}хв</p>
              <img src="/stugying/oclock.svg" alt="oclock icon" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopicsList

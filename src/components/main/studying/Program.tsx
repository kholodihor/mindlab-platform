import ArrowIcon from "@/components/icons/studying/ArrowIcon"
import { TopicsList } from "@/data/studying"
import Progress from "./Progress"
import { useState } from "react"

type ProgramProps = {
  title: string
  topicsList: Array<TopicsList>
  changeLesson: (lesson: number) => void
}

const Program = ({ title, topicsList, changeLesson }: ProgramProps) => {
  const [activeTopic, setActiveTopic] = useState(1)
  const lecturesCompleted = topicsList.filter(
    ({ completed }) => completed
  ).length
  const progress = Math.floor((lecturesCompleted / topicsList.length) * 100)

  const onClickLesson = (lesson: number) => {
    changeLesson(lesson)
    setActiveTopic(lesson)
  }

  return (
    <div className="">
      <div className="mb-5 flex items-center gap-2 px-[14px]">
        <div className="flex rotate-[270deg] items-center justify-center">
          <ArrowIcon />
        </div>
        <h2 className="text-lg">{title}</h2>
      </div>
      <Progress progress={progress} completed={lecturesCompleted} />
      <ul className="">
        {topicsList.map(({ name, duration, completed, number }) => (
          <li
            key={number}
            className={` ${activeTopic === number ? "bg-darkGray" : ""} border-t border-darkGray py-5 pl-8 pr-5`}
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

export default Program

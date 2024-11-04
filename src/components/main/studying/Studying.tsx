import { useEffect, useState } from "react"
import Carousel from "@/components/shared/Carousel"
import TabPanel from "@/components/shared/TabPanel"
import { tabPanel } from "@/data/studying"
import { useWidth } from "@/hooks/useWidth"
import Progress from "@/components/main/studying/Progress"
import { topicsList } from "@/data/studying"
import { useTranslation } from "react-i18next"
import TelegramButton from "@/components/shared/TelegramButton"
import Program from "@/components/main/studying/Program"
import SwiperTopicList from "@/components/main/studying/SwiperTopicList"
import TopicsList from "@/components/main/studying/TopicsList"

const courses = [
  "Career guidance",
  "Political science-sociology",
  "Leadership",
  "Business",
  "Art",
  "Innovative technologies"
]

const Studying = () => {
  const [lesson, setLesson] = useState(1)
  const widthWiewport = useWidth()
  const lecturesCompleted = topicsList.filter(
    ({ completed }) => completed
  ).length
  const current = topicsList.find(({ number }) => number === lesson)
  const progress = Math.floor((lecturesCompleted / topicsList.length) * 100)
  const { t } = useTranslation("StudyingPage")

  const changeLesson = (number: number) => setLesson(number)

  useEffect(() => {
    console.log("studying=>", current)
  }, [])

  return (
    <div className="pt-5 md:pt-10 3md:flex 3md:justify-between 3md:pt-0 xl:pt-[64px]">
      <div className="3md:w-[74%] 3md:pt-10 xl:w-[65%] 5xl:w-[1212px]">
        {widthWiewport >= 744 && widthWiewport < 1100 && (
          <Progress
            progress={progress}
            completed={lecturesCompleted}
            course="Career guidance"
          />
        )}
        {widthWiewport < 744 && <Carousel data={courses} index={1} />}
        <TabPanel tabList={tabPanel} currentLesson={current} />
        {widthWiewport < 744 && (
          <div className="mb-6  flex justify-between px-4 sm:px-5">
            <TelegramButton />
            <Program
              title={"Political Science-Sociology"}
              changeLesson={changeLesson}
            />
          </div>
        )}
        {widthWiewport < 744 && (
          <Carousel
            index={lesson}
            data={topicsList.map(({ number }) => `${t("lesson")} ${number}`)}
            changeLesson={changeLesson}
          />
        )}
        {widthWiewport >= 744 && widthWiewport < 1100 && (
          <SwiperTopicList changeLesson={changeLesson} />
        )}
        {widthWiewport >= 1100 && (
          <div className="3md:px-10">
            <TelegramButton />
          </div>
        )}
      </div>
      {widthWiewport >= 1100 && <TopicsList changeLesson={changeLesson} />}
    </div>
  )
}

export default Studying

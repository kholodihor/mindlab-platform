import { useState } from "react"
import TabPanel from "@/components/shared/TabPanel"
import { useWidth } from "@/hooks/useWidth"
import TelegramButton from "@/components/shared/TelegramButton"
import Program from "@/components/shared/Program"
import TopicListEn from "./TopicListEng"
import { tabPanel, topicsList } from "@/data/speakingClub"
import Carousel from "@/components/shared/Carousel"
import SwiperTopicEn from "./Swiper"

const SpeakingClub = () => {
  const [lesson, setLesson] = useState(1)
  const widthWiewport = useWidth()
  const current = topicsList.find(({ number }) => number === lesson)

  const changeLesson = (number: number) => setLesson(number)

  return (
    <div className="pt-[20px] md:pt-10 3md:flex 3md:justify-between 3md:pt-0 xl:pt-[64px]">
      <div className="3md:w-[74%] 3md:pt-10 xl:w-[65%] 5xl:w-[1212px]">
        <h2 className="mb-6 px-[14px] text-center font-medium sm:px-5 sm:text-xl md:hidden">{`${lesson} Lesson. ${topicsList[lesson - 1].name}`}</h2>
        <h2 className="mb-11 hidden px-5 font-medium sm:text-xl md:block 3md:hidden xl:px-10">
          Speaking club (А2)
        </h2>
        <TabPanel tabList={tabPanel} currentLesson={current} />
        {widthWiewport < 744 && (
          <Carousel
            index={lesson}
            data={topicsList.map(() => `Lesson ${lesson}`)}
            changeLesson={changeLesson}
          />
        )}
        {widthWiewport < 744 && (
          <div className="mb-6  flex justify-between px-4 sm:px-5">
            <TelegramButton />
            <Program
              changeLesson={changeLesson}
              TopicList={TopicListEn}
              title="Speaking club"
            />
          </div>
        )}
        {widthWiewport >= 744 && widthWiewport < 1100 && (
          <SwiperTopicEn changeLesson={changeLesson} />
        )}
        {widthWiewport >= 1100 && (
          <div className="3md:px-10">
            <TelegramButton />
          </div>
        )}
      </div>
      {widthWiewport >= 1100 && <TopicListEn changeLesson={changeLesson} />}
    </div>
  )
}

export default SpeakingClub

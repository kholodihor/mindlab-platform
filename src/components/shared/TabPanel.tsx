import { FC, useState } from "react"
import TabButton from "@/components/shared/TabButton"
import { topicsList } from "@/data/studying"
import SwiperTopicList from "../main/studying/SwiperTopicList"
import { useWidth } from "@/hooks/useWidth"
import Carousel from "./Carousel"
import Program from "../main/studying/Program"
import TelegramButton from "./TelegramButton"
import TopicsList from "../main/studying/TopicsList"

type TabPanelProps = {
  tabList: {
    id: number
    title: string
    Icon: FC
    Component: FC<{ topic: any }>
  }[]
}
const TabPanel = ({ tabList = [] }: TabPanelProps) => {
  const [selectedTab, setSelectedTab] = useState(tabList[0].id)
  const [lesson, setLesson] = useState(1)
  const current = topicsList.find(({ number }) => number === lesson)
  const panel = tabList.find((tab) => tab.id === selectedTab)
  const widthWiewport = useWidth()

  const [showDescriptionTopic, setshowDescriptionTopic] = useState(false)

  const changeLesson = (number: number) => setLesson(number)

  return (
    <div className="3md:flex 3md:justify-between xl:pt-[64px]">
      <div className="3md:w-[74%] 3md:pt-10 xl:w-[65%] 5xl:w-[1212px]">
        <div className=" md:flex md:justify-between md:px-5 3md:px-10">
          <ul className="mb-6 flex justify-between px-[14px] md:mb-[66px] md:justify-start md:gap-3 md:px-0">
            {tabList &&
              tabList.map(({ id, title, Icon }) => (
                <TabButton
                  key={id}
                  title={title}
                  id={id}
                  selectTab={selectedTab}
                  Icon={Icon}
                  onClick={() => {
                    setSelectedTab(id)
                  }}
                />
              ))}
          </ul>
          {widthWiewport >= 744 && widthWiewport < 1100 && <TelegramButton />}
        </div>
        <div className="mb-6 ">
          <div
            className={`flex items-end justify-between px-[14px] md:px-5 3md:px-10 ${showDescriptionTopic ? " mb-2" : " mb-6"}`}
            onClick={() => setshowDescriptionTopic((prev) => !prev)}
          >
            <h2 className="font-medium xl:text-xl">
              {current?.number}. {current?.name}
            </h2>
            <img
              src="/stugying/arrow.svg"
              alt="aroww icon"
              className={`${showDescriptionTopic ? "" : "rotate-180"}`}
            />
          </div>
          {showDescriptionTopic && (
            <p className="mb-6 px-[14px] text-lightGray md:px-5 3md:px-10">
              {current?.description}
            </p>
          )}

          {panel && <panel.Component topic={current} />}
          {widthWiewport < 744 && (
            <div className="mb-6  flex justify-between px-[14px]">
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
              data={topicsList.map(({ number }) => `Урок ${number}`)}
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
      </div>
      {widthWiewport >= 1100 && <TopicsList changeLesson={changeLesson} />}
    </div>
  )
}

export default TabPanel

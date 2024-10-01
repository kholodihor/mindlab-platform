import { FC, useState } from "react"
import TabButton from "@/components/shared/TabButton"
import { topicsList } from "@/data/studying"
import TelegramIcon from "../icons/studying/TelegramIcon"
import Program from "../main/studying/Program"
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
  const current = topicsList.find(
    ({ name }) => name === topicsList[lesson - 1].name
  )
  const panel = tabList.find((tab) => tab.id === selectedTab)

  const [showDescriptionTopic, setshowDescriptionTopic] = useState(false)

  const [showProgram, setShowProgram] = useState(false)
  const changeLesson = (lesson: number) => setLesson(lesson)

  // useEffect(() => {
  //   console.log("curent=>", current)
  // }, [])
  return (
    <div className="">
      <ul className="mb-6 flex justify-between px-[14px] md:mb-[66px] md:justify-start md:gap-3">
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
      <div className="mb-6 ">
        <div
          className={`flex items-end justify-between px-[14px] ${showDescriptionTopic ? " mb-2" : " mb-6"}`}
          onClick={() => setshowDescriptionTopic((prev) => !prev)}
        >
          <h2 className="font-medium">
            {current?.number}. {current?.name}
          </h2>
          <img
            src="/stugying/arrow.svg"
            alt="aroww icon"
            className={`${showDescriptionTopic ? "" : "rotate-180"}`}
          />
        </div>
        {showDescriptionTopic && (
          <p className="mb-6 px-[14px] text-lightGray">
            {current?.description}
          </p>
        )}

        {panel && <panel.Component topic={current} />}
        <div className="mb-6  flex justify-between px-[14px]">
          <a
            href=""
            className="flex h-9 w-[30.84%] items-center justify-center rounded-md bg-graphite"
          >
            <div className="h-6 w-6 text-lightViolet">
              <TelegramIcon width={24} />
            </div>
          </a>
          <button
            onClick={() => setShowProgram((prev) => !prev)}
            className="h-9 w-[65.1%] rounded-md bg-graphite text-sm text-lightViolet"
          >
            Програма курсу
          </button>
        </div>
        {showProgram && (
          <Program
            title={"Political Science-Sociology"}
            topicsList={topicsList}
            changeLesson={changeLesson}
          />
        )}
      </div>
    </div>
  )
}

export default TabPanel

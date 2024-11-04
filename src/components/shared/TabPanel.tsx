import { FC, useState } from "react"
import TabButton from "@/components/shared/TabButton"
import { useWidth } from "@/hooks/useWidth"
import TelegramButton from "./TelegramButton"

type TabPanelProps = {
  tabList: {
    id: number
    title: string
    Icon: FC
    Component: FC<{ topic: any }>
  }[]
  currentLesson: any
}
const TabPanel = ({ tabList = [], currentLesson }: TabPanelProps) => {
  const [selectedTab, setSelectedTab] = useState(tabList[0].id)
  // const current = topicsList.find(({ number }) => number === lesson)
  const panel = tabList.find((tab) => tab.id === selectedTab)
  // const { i18n } = useTranslation()
  // const currentLanguage = i18n.language as "en" | "ua"
  const widthWiewport = useWidth()

  // const [showDescriptionTopic, setshowDescriptionTopic] = useState(false)

  return (
    <div className="mb-6">
      <div className="mb-6 md:mb-[66px] md:flex  md:justify-between md:px-5 3md:px-10">
        <ul className=" flex justify-between px-[14px] sm:px-5 md:justify-start md:gap-3 md:px-0">
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
      <div>{panel && <panel.Component topic={currentLesson} />}</div>
    </div>
  )
}

export default TabPanel

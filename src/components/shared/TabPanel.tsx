import { FC, useState } from "react"
import TabButton from "@/components/shared/TabButton"
type TabPanelProps = {
  tabList: {
    id: number
    title: string
    Icon: FC
    Component: FC
  }[]
}
const TabPanel = ({ tabList = [] }: TabPanelProps) => {
  const [selectedTab, setSelectedTab] = useState(tabList[0].id)
  const panel = tabList.find((tab) => tab.id === selectedTab)
  return (
    <div className="px-[14px]">
      <ul className="mb-6 flex justify-between md:mb-[66px] md:justify-start md:gap-3">
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
      <div className="">{panel && <panel.Component />}</div>
    </div>
  )
}

export default TabPanel

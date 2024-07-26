import Program from "@/components/main/studying/Program"
import TabPanel from "@/components/shared/TabPanel"
import { tabPanel, topicsList } from "@/data/studying"

const StudyingPage = () => {
  return (
    <div className="py-10">
      <TabPanel tabList={tabPanel} />
      <Program title={"Political Science-Sociology"} topicsList={topicsList} />
    </div>
  )
}

export default StudyingPage

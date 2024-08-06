import TabPanel from "@/components/shared/TabPanel"
import { tabPanel } from "@/data/studying"

const StudyingPage = () => {
  return (
    <div>
      <TabPanel tabList={tabPanel} />
    </div>
  )
}

export default StudyingPage

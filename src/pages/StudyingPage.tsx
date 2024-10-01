import TabPanel from "@/components/shared/TabPanel"
import { tabPanel } from "@/data/studying"

const StudyingPage = () => {
  return (
    <div className="py-10">
      <TabPanel tabList={tabPanel} />
    </div>
  )
}

export default StudyingPage

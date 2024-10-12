import PageHeader from "@/components/shared/PageHeader"
import TabLayout from "@/components/shared/TabLayout"
import { tabPanel } from "@/data/events"

const EventsPage = () => {
  return (
    <div className="pb-10">
      <PageHeader title="Події" />
      <div className="overflow-auto xs:pt-9 sm:pt-10 xl:px-10 xl:pt-[104px]">
        <TabLayout tabList={tabPanel} />
      </div>
    </div>
  )
}

export default EventsPage

import { useTranslation } from "react-i18next"
import PageHeader from "@/components/shared/PageHeader"
import TabPanel from "@/components/shared/TabPanel"
import { tabPanel } from "@/data/support"

const SupportPage = () => {
  const { t } = useTranslation("pageHeader")
  return (
    <div>
      <PageHeader title={t("support")} />
      <div className="xs:pt-9 sm:pt-10 xl:px-10 xl:pt-[104px]">
        <TabPanel tabList={tabPanel} />
      </div>
    </div>
  )
}

export default SupportPage

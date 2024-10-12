import { useTranslation } from "react-i18next"
import PageHeader from "@/components/shared/PageHeader"
import { tabPanel } from "@/data/support"
import TabLayout from "@/components/shared/TabLayout"

const SupportPage = () => {
  const { t } = useTranslation("pageHeader")
  return (
    <div>
      <PageHeader title={t("support")} />
      <div className="xs:pt-9 sm:pt-10 xl:px-10 xl:pt-[104px]">
        <TabLayout tabList={tabPanel} />
      </div>
    </div>
  )
}

export default SupportPage

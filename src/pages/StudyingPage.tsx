import PageHeader from "@/components/shared/PageHeader"
import Studying from "../components/main/studying/Studying"
import { useTranslation } from "react-i18next"

const StudyingPage = () => {
  const { t } = useTranslation("StudyingPage")
  return (
    <div>
      <PageHeader title={t("studying")} />
      <Studying />
    </div>
  )
}

export default StudyingPage

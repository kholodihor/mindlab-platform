import PageHeader from "@/components/shared/PageHeader"
import StudyingPage from "./StudyingPage"
import { useTranslation } from "react-i18next"

const CoursesPage = () => {
  const { t } = useTranslation("StudyingPage")
  return (
    <div>
      <PageHeader title={t("studying")} />
      <StudyingPage />
    </div>
  )
}

export default CoursesPage

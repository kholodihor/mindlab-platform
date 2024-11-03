import CertificateInfo from "@/components/main/certificate/CertificateInfo"
import PageHeader from "@/components/shared/PageHeader"
import { useTranslation } from "react-i18next"

const certificateData = {
  src: "/images/certificates/certificate.jpg",
  courseTitle: "Political Science-Sociology",
  tutor: "Соломія Власенко",
  lecturesQuantity: 8,
  lectureDuration: 12,
  score: 89,
  homeworkQuantity: 6
}
const CertificatePage = () => {
  const { t } = useTranslation("CertificatePage")

  return (
    <div>
      <PageHeader title={t("pageTitle")} />
      <CertificateInfo certificate={certificateData} />
    </div>
  )
}

export default CertificatePage

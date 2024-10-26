import CertificateInfo from "@/components/main/certificate/CertificateInfo"
import PageHeader from "@/components/shared/PageHeader"

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
  return (
    <div>
      <PageHeader title="Сертифікати" />
      <CertificateInfo certificate={certificateData} />
    </div>
  )
}

export default CertificatePage

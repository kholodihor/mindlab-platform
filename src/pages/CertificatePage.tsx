import CertificateInfo from "@/components/main/certificate/CertificateInfo"
import PageHeader from "@/components/shared/PageHeader"
import { useTranslation } from "react-i18next"

export interface Certificate {
  id: number
  src: string
  courseTitle: string
  tutorUa: string
  tutorEn: string
  lecturesQuantity: number
  lectureDuration: number
  score: number
  homeworkQuantity: number
  link: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    src: "/images/certificates/certificate.jpg",
    courseTitle: "Political Science-Sociology",
    tutorUa: "Соломія Власенко",
    tutorEn: "Solomiia Vlasenko",
    lecturesQuantity: 8,
    lectureDuration: 12,
    score: 89,
    homeworkQuantity: 6,
    link: "https://github.com/user-attachments/assets/6b4de5e2-2a7f-4cc9-84ab-28c9cb0a62a5"
  },
  {
    id: 2,
    src: "/images/certificates/certificate.jpg",
    courseTitle: "Science",
    tutorUa: "Соломія Власенко",
    tutorEn: "Solomiia Vlasenko",
    lecturesQuantity: 8,
    lectureDuration: 12,
    score: 89,
    homeworkQuantity: 6,
    link: "https://github.com/user-attachments/assets/6b4de5e2-2a7f-4cc9-84ab-28c9cb0a62a5"
  },
  {
    id: 3,
    src: "/images/certificates/certificate.jpg",
    courseTitle: "Sociology",
    tutorUa: "Соломія Власенко",
    tutorEn: "Solomiia Vlasenko",
    lecturesQuantity: 8,
    lectureDuration: 12,
    score: 89,
    homeworkQuantity: 6,
    link: "https://github.com/user-attachments/assets/6b4de5e2-2a7f-4cc9-84ab-28c9cb0a62a5"
  },
  {
    id: 4,
    src: "/images/certificates/certificate.jpg",
    courseTitle: "Political Science-Sociology",
    tutorUa: "Соломія Власенко",
    tutorEn: "Solomiia Vlasenko",
    lecturesQuantity: 8,
    lectureDuration: 12,
    score: 89,
    homeworkQuantity: 6,
    link: "https://github.com/user-attachments/assets/6b4de5e2-2a7f-4cc9-84ab-28c9cb0a62a5"
  }
]
const CertificatePage = () => {
  const { t } = useTranslation("CertificatePage")

  return (
    <div>
      <PageHeader title={t("pageTitle")} />
      <CertificateInfo certificateList={certificates} />
    </div>
  )
}

export default CertificatePage

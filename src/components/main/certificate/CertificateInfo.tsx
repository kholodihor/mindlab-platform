import React from "react"
import CertificateImg from "./CertificateImg"
import CertificateInfoList from "./CertificateInfoList"
import { Button } from "@/components/ui/button"

interface CertificateInfoProps {
  certificate: {
    src: string
    courseTitle: string
    tutor: string
    lecturesQuantity: number
    lectureDuration: number
    score: number
    homeworkQuantity: number
  }
}

const CertificateInfo: React.FC<CertificateInfoProps> = ({ certificate }) => {
  return (
    <div className="ml-10 mt-14 flex justify-between">
      <div className="mt-6">
        <CertificateImg src={certificate.src} size="large" />
      </div>
      <div className="max-w-md bg-graphite p-10">
        <h3 className="mb-2 mt-0 text-xl font-semibold">
          {certificate.courseTitle}
        </h3>
        <CertificateInfoList certificate={certificate} />
        <Button>
          <a href="/images/certificates/certificate.jpg" download>
            Завантажити
          </a>
        </Button>
      </div>
    </div>
  )
}

export default CertificateInfo

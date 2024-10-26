import React from "react"
import CertificateImg from "./CertificateImg"
import CertificateInfoList from "./CertificateInfoList"

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
    <div className="flex p-10">
      <div className="mt-6">
        <CertificateImg src={certificate.src} size="large" />
      </div>
      <div className="max-w-md bg-[#202227] p-10">
        <h3 className="mb-2 mt-4 text-xl font-semibold">
          {certificate.courseTitle}
        </h3>
        <CertificateInfoList certificate={certificate} />
      </div>
    </div>
  )
}

export default CertificateInfo

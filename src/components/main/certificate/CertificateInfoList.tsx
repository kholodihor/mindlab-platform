import React from "react"
import { AlarmClock, Layers3, Smile } from "lucide-react"
import CertificateInfoItem from "./CertificateInfoItem"

interface CertificateInfoListProps {
  certificate: {
    tutorUa: string
    tutorEn: string
    lectureDuration: number
    lecturesQuantity: number
    homeworkQuantity: number
    score: number
  }
}

const CertificateInfoList: React.FC<CertificateInfoListProps> = ({
  certificate
}) => {
  const certificateInfoList = [
    {
      title: certificate.tutorUa,
      subtitle: "Куратор",
      icon: <Smile size={14} color="#6d7078" strokeWidth={2} />
    },
    {
      title: "Прослухано лекцій",
      subtitle: `Загальна тривалість лекцій ${certificate.lectureDuration} год`,
      icon: <AlarmClock size={14} color="#6d7078" strokeWidth={2} />,
      quantity: certificate.lecturesQuantity
    },
    {
      title: `Середній бал`,
      subtitle: `Здано ${certificate.homeworkQuantity} домашніх завдань`,
      icon: <Layers3 size={14} color="#6d7078" strokeWidth={2} />,
      quantity: certificate.score
    }
  ]

  return (
    <ul className="mb-20 max-w-[439px] space-y-3">
      {certificateInfoList.map((info, index) => (
        <CertificateInfoItem
          key={index}
          title={info.title}
          subtitle={info.subtitle}
          icon={info.icon}
          quantity={info.quantity}
        />
      ))}
    </ul>
  )
}

export default CertificateInfoList

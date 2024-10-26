import React from "react"
import { AlarmClock, Layers3, Smile } from "lucide-react"
import CertificateInfoItem from "./CertificateInfoItem"

interface CertificateInfoListProps {
  certificate: {
    tutor: string
    lectureDuration: number
    lecturesQuantity: number
    score: number
  }
}

const CertificateInfoList: React.FC<CertificateInfoListProps> = ({
  certificate
}) => {
  const certificateInfoList = [
    { title: certificate.tutor, subtitle: "Куратор", icon: <Smile /> },
    {
      title: "Прослухано лекцій",
      subtitle: `Загальна тривалість лекцій ${certificate.lectureDuration} год`,
      icon: <AlarmClock />
    },
    {
      title: `Середній бал: ${certificate.score}`,
      subtitle: `Здано ${certificate.lecturesQuantity} домашніх завдань`,
      icon: <Layers3 />
    }
  ]

  return (
    <ul className="space-y-3">
      {certificateInfoList.map((info, index) => (
        <CertificateInfoItem
          key={index}
          title={info.title}
          subtitle={info.subtitle}
          icon={info.icon}
        />
      ))}
    </ul>
  )
}

export default CertificateInfoList

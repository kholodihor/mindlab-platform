import React, { ReactNode } from "react"

interface CertificateCardProps {
  title: string
  subtitle: string
  icon: ReactNode
  quantity?: number
}

const CertificateInfoItem: React.FC<CertificateCardProps> = ({
  title,
  subtitle,
  icon,
  quantity
}) => {
  return (
    <div className="my-4 max-w-[359px] rounded-lg border border-[#353840] border-opacity-50 p-5 md:p-8">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <div className="flex">
        {icon}
        <p className="mb-3 text-lg text-gray-600">{subtitle}</p>
      </div>
      {quantity && <p className="text-sm font-bold"> {quantity}</p>}
    </div>
  )
}

export default CertificateInfoItem

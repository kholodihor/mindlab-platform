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
    <div className="my-4 flex items-center justify-between gap-5 rounded-lg border border-[#6D7078] border-opacity-50 p-5">
      <div>
        <h2 className="mb-2 mt-0 text-lg font-semibold">{title}</h2>
        <div className="flex items-center gap-1">
          <div>{icon}</div>
          <p className="text-sm text-[#6D7078]">{subtitle}</p>
        </div>
      </div>
      <div>{quantity && <p className="text-3xl font-bold"> {quantity}</p>}</div>
    </div>
  )
}

export default CertificateInfoItem

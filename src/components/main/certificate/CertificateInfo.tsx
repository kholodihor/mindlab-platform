import React, { useRef, useState } from "react"
import CertificateImg from "./CertificateImg"
import CertificateInfoList from "./CertificateInfoList"
import DownloadButton from "./DownloadButton"
import ShareButton from "./ShareButton"
import PrintButton from "./PrintButton"
import { useReactToPrint } from "react-to-print"
import { Certificate } from "@/pages/CertificatePage"

interface CertificateInfoProps {
  certificateList: Certificate[]
}

const CertificateInfo: React.FC<CertificateInfoProps> = ({
  certificateList
}) => {
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0)
  const printRef = useRef<HTMLDivElement>(null)

  const printHandler = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Certificate"
  })

  return (
    <>
      <div className="ml-10 mt-14 flex justify-between">
        <div className="mt-6" ref={printRef}>
          <CertificateImg
            src={certificateList[activeImgIndex].src}
            size="large"
          />
        </div>
        <div className="max-w-md bg-graphite p-10">
          <h3 className="mb-2 mt-0 text-xl font-semibold">
            {certificateList[activeImgIndex].courseTitle}
          </h3>
          <CertificateInfoList certificate={certificateList[activeImgIndex]} />
          <div className="flex gap-5">
            <DownloadButton src={certificateList[activeImgIndex].src} />
            <ShareButton link={certificateList[activeImgIndex].link} />
            <PrintButton printHandler={printHandler} />
          </div>
        </div>
      </div>
      <div className="ml-10 mt-4 flex gap-4">
        {certificateList.map((certificate, index) => (
          <div
            key={certificate.id}
            onClick={() => setActiveImgIndex(index)}
            className="cursor-pointer"
          >
            <CertificateImg src={certificate.src} size="small" />
          </div>
        ))}
      </div>
    </>
  )
}

export default CertificateInfo

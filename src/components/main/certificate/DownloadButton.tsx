import { Download } from "lucide-react"

const DownloadButton = ({ src }: { src: string }) => {
  return (
    <a
      href={src}
      download
      className="flex max-w-[223px] items-center rounded-md bg-lime p-[1px] text-lg font-medium text-[#09090A]"
    >
      <span className="flex flex-1 items-center justify-center px-[27.5px]">
        Завантажити
      </span>
      <span className="flex items-center justify-center rounded-r-md bg-black p-3">
        <Download size={22} color="#EAEAEB" strokeWidth={2} />
      </span>
    </a>
  )
}

export default DownloadButton

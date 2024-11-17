import { Printer } from "lucide-react"
import React from "react"

interface PrintButtonProps {
  printHandler: () => void
}

const PrintButton: React.FC<PrintButtonProps> = ({ printHandler }) => {
  return (
    <button
      className="rounded-md border border-lime bg-black p-3"
      onClick={printHandler}
    >
      <Printer size={22} color="#EAEAEB" strokeWidth={2} />
    </button>
  )
}

export default PrintButton

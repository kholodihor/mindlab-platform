import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { CustomModal } from "@/components/ui/CustomModal.tsx"

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const handleClick = () => {
    setIsOpen(true)
  }
  return (
    <>
      <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-2">
        <h1 className="text-3xl text-green-500">{t("hello")}</h1>
        <Button onClick={handleClick}>Click me</Button>
      </div>
      {isOpen && (
        <CustomModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          X
        </CustomModal>
      )}
    </>
  )
}

export default HomePage

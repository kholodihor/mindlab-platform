import LanguageSwitcher from "./LanguageSwitcher"
import { Button } from "@/components/ui/button.tsx"
import { useState } from "react"
import { CustomModal } from "@/components/ui/CustomModal.tsx";
import { LoginForm } from "@/components/LoginForm/LoginForm.tsx";

const Header = () => {
  const [isOpenmodal, setIsOpenModal] = useState(false)
  const handleOpenModal = () => {
    setIsOpenModal(true)
  }
  return (
    <header
      className="flex h-[64px] w-full items-center justify-between bg-graphite px-4 py-[17px]  xl:px-[40px] 3xl:px-[80px]">
      <img src="/images/header/logo.png" alt="ML" />
      <div className="flex gap-10 xl:gap-[80px]">
        <LanguageSwitcher/>
        <img src="/images/header/bell.png" alt="notifications"/>
        <img src="/images/header/chat.png" alt="chat"/>
        <Button variant="default" size={"sm"} onClick={handleOpenModal}>
          <img src="/images/header/user.png" alt="profile"/>
        </Button>
      </div>
      <CustomModal isOpen={isOpenmodal} onClose={() => setIsOpenModal(false)}>
        <LoginForm />
      </CustomModal>
    </header>
  )
}

export default Header

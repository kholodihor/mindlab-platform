import { useTranslation } from "react-i18next"
import { useModalContext } from "@/context/ModalContext"
import { LoginForm } from "@/components/main/login/LoginForm"
import { CustomModal } from "@/components/ui/CustomModal"
import Header from "@/components/main/header/Header"
import RippleCard from "../components/RippleCard"

const HomePage = () => {
  const { t } = useTranslation()
  const { modals, closeModal } = useModalContext()

  const handleClickModal = () => {
    closeModal("login")
  }
  return (
    <>
      <Header />
      <main className="relative flex min-h-[70vh] w-full flex-col items-center justify-center gap-2 bg-black">
        <h1 className="text-3xl text-[3rem] font-light text-violet">
          {t("hello")}
        </h1>
        <RippleCard />
        <CustomModal isOpen={modals["login"]} onClose={handleClickModal}>
          <LoginForm handleClickModal={handleClickModal} />
        </CustomModal>
      </main>
    </>
  )
}

export default HomePage

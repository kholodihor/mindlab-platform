import { useModalContext } from "@/context/ModalContext"
import { LoginForm } from "@/components/main/login/LoginForm"
import { CustomModal } from "@/components/ui/CustomModal"
import Header from "@/components/main/header/Header"
import Courses from "@/components/main/courses/Courses"
import Footer from "@/components/main/footer/Footer"
import Hero from "@/components/main/hero/Hero"

const HeroPage = () => {
  const { modals, closeModal } = useModalContext()

  const handleClickModal = () => {
    closeModal("login")
  }
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-col items-center justify-center gap-2 bg-black">
        <Hero />
        <Courses />
      </main>
      <Footer />
      <CustomModal isOpen={modals["login"]} onClose={handleClickModal}>
        <LoginForm handleClickModal={handleClickModal} />
      </CustomModal>
    </>
  )
}

export default HeroPage

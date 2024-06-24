import { useModalContext } from "@/context/ModalContext"
import { LoginForm } from "@/components/main/login/LoginForm"
import { CustomModal } from "@/components/ui/CustomModal"
import Header from "@/components/main/header/Header"
import Courses from "@/components/main/courses/Courses"
import Footer from "@/components/main/footer/Footer"

const HomePage = () => {
  const { modals, closeModal } = useModalContext()
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-col items-center justify-center gap-2 bg-black">
        <Courses />
      </main>
      <Footer />
      <CustomModal isOpen={modals["login"]} onClose={() => closeModal("login")}>
        <LoginForm />
      </CustomModal>
    </>
  )
}

export default HomePage

import { useTranslation } from "react-i18next"
import Header from "@/components/main/header/Header"
import RippleCard from "../components/RippleCard"

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-2 bg-black">
        <h1 className="text-3xl text-[3rem] font-light text-violet">
          {t("hello")}
        </h1>
        <RippleCard />
      </main>
    </>
  )
}

export default HomePage

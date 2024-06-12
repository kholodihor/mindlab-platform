import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import Header from "@/components/main/header/Header"

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-2 bg-black">
        <h1 className="text-violet text-3xl text-[3rem] font-light">
          {t("hello")}
        </h1>
        <Button>Click me</Button>
      </main>
    </>
  )
}

export default HomePage

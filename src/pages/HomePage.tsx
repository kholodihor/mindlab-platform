import Header from "@/components/main/Header"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <main className="bg-lime flex min-h-[70vh] w-full flex-col items-center justify-center gap-2">
        <h1 className="text-3xl text-green-500">{t("hello")}</h1>
        <Button>Click me</Button>
      </main>
    </>
  )
}

export default HomePage

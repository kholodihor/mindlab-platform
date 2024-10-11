import { useState } from "react"
import ModalTopicsList from "./ModalTopicsList"
import { useTranslation } from "react-i18next"

type ProgramProps = {
  title: string
  changeLesson: (lesson: number) => void
}

const Program = ({ title, changeLesson }: ProgramProps) => {
  const { t } = useTranslation("StudyingPage")
  const [showModal, setShowmodal] = useState(false)
  return (
    <div className="w-[65.1%]">
      <button
        onClick={() => setShowmodal(true)}
        className="h-9 w-[100%] rounded-md bg-graphite text-sm text-lightViolet"
      >
        {t("program")}
      </button>
      {showModal && (
        <ModalTopicsList
          title={title}
          changeLesson={changeLesson}
          isOpen={showModal}
          onCloseModal={setShowmodal}
        />
      )}
    </div>
  )
}

export default Program

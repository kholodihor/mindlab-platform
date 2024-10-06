import { useState } from "react"
import ModalTopicsList from "./ModalTopicsList"

type ProgramProps = {
  title: string
  changeLesson: (lesson: number) => void
}

const Program = ({ title, changeLesson }: ProgramProps) => {
  const [showModal, setShowmodal] = useState(false)
  return (
    <div className="w-[65.1%]">
      <button
        onClick={() => setShowmodal(true)}
        className="h-9 w-[100%] rounded-md bg-graphite text-sm text-lightViolet"
      >
        Програма курсу
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

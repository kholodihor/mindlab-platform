import Modal from "react-modal"
import { Dispatch, SetStateAction } from "react"
import ArrowIcon from "@/components/icons/studying/ArrowIcon"
import TopicsList from "./TopicsList"

interface ModalProps {
  isOpen: boolean
  onCloseModal: Dispatch<SetStateAction<boolean>>
  title: string
  changeLesson: (lesson: number) => void
}

const ModalTopicsList = ({
  isOpen,
  onCloseModal,
  title,
  changeLesson
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className={`fixed right-0 top-0 z-[99999999] bg-black pt-[18px] ${isOpen ? "slide-in" : "slide-out"} max-h-screen overflow-y-auto`}
      overlayClassName="fixed top-0 left-0 h-full bg-[var(--overlay-modal)] z-[var(--z-index-modal)]"
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={() => onCloseModal(false)}
      bodyOpenClassName="overflow-hidden"
    >
      <div className="mb-5 flex items-center gap-2 px-[14px]">
        <div
          className="flex rotate-[270deg] items-center justify-center"
          onClick={() => onCloseModal(false)}
        >
          <ArrowIcon />
        </div>
        <h2 className="text-lg">{title}</h2>
      </div>
      <TopicsList changeLesson={changeLesson} onClickModal={onCloseModal} />
    </Modal>
  )
}

export default ModalTopicsList

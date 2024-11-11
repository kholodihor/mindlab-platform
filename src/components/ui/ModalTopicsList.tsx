import Modal from "react-modal"
import { Dispatch, SetStateAction } from "react"
import ArrowIcon from "@/components/icons/studying/ArrowIcon"

interface ModalProps {
  isOpen: boolean
  onCloseModal: Dispatch<SetStateAction<boolean>>
  title?: string
  children: React.ReactNode
}

const ModalTopicsList = ({
  isOpen,
  onCloseModal,
  title,
  children
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className={`fixed inset-0 z-[99999999] bg-black pt-[18px] ${isOpen ? "slide-in" : "slide-out"} overflow-y-auto`}
      overlayClassName="fixed inset-0 bg-[var(--overlay-modal)] z-[var(--z-index-modal)]"
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={() => onCloseModal(false)}
      bodyOpenClassName="overflow-hidden"
    >
      <div className="mb-5 flex items-center gap-2 px-[14px] sm:px-5">
        <div
          className="flex rotate-[270deg] items-center justify-center"
          onClick={() => onCloseModal(false)}
        >
          <ArrowIcon />
        </div>
        <h2 className="text-lg">{title}</h2>
      </div>
      {children}
    </Modal>
  )
}

export default ModalTopicsList

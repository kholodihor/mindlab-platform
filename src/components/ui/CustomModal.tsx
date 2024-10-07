import Modal from "react-modal"
import React from "react"
import { Close } from "@/components/svg/Close.tsx"
import { Button } from "@/components/ui/button.tsx"

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const CustomModal = ({
  isOpen,
  onClose,
  children
}: CustomModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className={`fixed z-[99999999] bg-lightViolet p-5 ${isOpen ? "slide-in" : "slide-out"} h-auto max-h-[100%] max-w-[100%] overflow-y-scroll rounded-lg md:max-h-[95%] md:max-w-[640px] 3md:max-w-[1120px] 3md:overflow-auto`}
      overlayClassName="fixed inset-0 bg-[var(--overlay-modal)] z-[var(--z-index-modal)] flex items-center justify-center"
      ariaHideApp={false}
      // closeTimeoutMS={250}
      onRequestClose={() => onClose()}
      bodyOpenClassName="overflow-hidden"
    >
      <Button
        className="ml-auto block h-6 w-6 md:h-[30px] md:w-[30px]"
        type="button"
        variant={"default"}
        size={"icon"}
        onClick={() => onClose()}
      >
        <Close />
      </Button>

      {children}
    </Modal>
  )
}

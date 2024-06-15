import Modal from "react-modal"
import React from "react"
import {Close} from "@/components/svg/Close.tsx";
import { Button } from "@/components/ui/button.tsx";

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
      className="relative flex h-[720px] w-[1120px] translate-y-[50px] transform items-center rounded-[6px] bg-[var(--bg-color-modal)] p-20"
      overlayClassName="fixed top-0 left-0 w-[100vw] h-[100vh] flex flex-col items-center bg-[var(--overlay-modal)] overflow-hidden overflow-y-auto z-[var(--z-index-modal)]"
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={() => onClose()}
      bodyOpenClassName="overflow-hidden"
    >
      <Button
        className="absolute right-[20px] top-[20px] flex items-center justify-center"
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

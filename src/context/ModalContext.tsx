import React, { createContext, useContext, useState, ReactNode } from "react"

interface ModalContextState {
  modals: { [key: string]: boolean }
  openModal: (key: string) => void
  closeModal: (key: string) => void
}

const ModalContext = createContext<ModalContextState | undefined>(undefined)

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<{ [key: string]: boolean }>({})

  const openModal = (key: string) => {
    setModals((prevModals) => ({ ...prevModals, [key]: true }))
  }

  const closeModal = (key: string) => {
    setModals((prevModals) => ({ ...prevModals, [key]: false }))
  }

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = (): ModalContextState => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider")
  }
  return context
}

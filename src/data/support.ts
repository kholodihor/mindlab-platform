import { FC } from "react"
import Contacts from "@/components/main/support/Contacts"
import Reference from "@/components/main/support/Reference"
import ContactIcon from "../components/icons/Contact"
import SupportIcon from "../components/icons/Support"

type TabPanelProps = {
  id: number
  title: string
  Icon: FC
  Component: FC
}

export const tabPanel: Array<TabPanelProps> = [
  { id: 1, title: "Контакти", Icon: ContactIcon, Component: Contacts },
  {
    id: 2,
    title: "Довідка",
    Icon: SupportIcon,
    Component: Reference
  }
]

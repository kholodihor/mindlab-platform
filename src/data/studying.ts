import { FC } from "react"
import Video from "@/components/main/studying/Video"
import Theory from "@/components/main/studying/Theory"
import HomeWork from "@/components/main/studying/HomeWork"
import VideoIcon from "@/components/icons/studying/VideoIcon"
import TheoryIcon from "@/components/icons/studying/TheoryIcon"
import HomeWorkIcon from "@/components/icons/studying/HomeWorkIcon"

type TabPanelProps = {
  id: number
  title: string
  Icon: FC
  Component: FC
}

export const tabPanel: Array<TabPanelProps> = [
  { id: 1, title: "Відеоурок", Icon: VideoIcon, Component: Video },
  { id: 2, title: "Теорія", Icon: TheoryIcon, Component: Theory },
  { id: 3, title: "Домашка", Icon: HomeWorkIcon, Component: HomeWork }
]

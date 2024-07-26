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

export type TopicsList = {
  name: string
  duration: number
  completed: boolean
}

export const tabPanel: Array<TabPanelProps> = [
  { id: 1, title: "Відеоурок", Icon: VideoIcon, Component: Video },
  { id: 2, title: "Теорія", Icon: TheoryIcon, Component: Theory },
  { id: 3, title: "Домашка", Icon: HomeWorkIcon, Component: HomeWork }
]

export const topicsList: Array<TopicsList> = [
  { name: "Що таке політика", duration: 15, completed: true },
  {
    name: "Політика і політичне життя суспільства",
    duration: 15,
    completed: true
  },
  { name: "Влада і політичні режими", duration: 15, completed: true },
  {
    name: "Демократія: поняття, теорія, модель",
    duration: 15,
    completed: true
  },
  {
    name: "Політична еліта та лідерство, Держава в політичній системі",
    duration: 15,
    completed: false
  },
  {
    name: "Громадянське суспільство та правова держава",
    duration: 15,
    completed: false
  },
  { name: "Політичні партії та системи", duration: 15, completed: true },
  { name: "Політична культура та етика", duration: 15, completed: true },
  {
    name: "Соціально-політичні ідеології і течії у сучасному світі",
    duration: 15,
    completed: false
  },
  { name: "Політика Європейських держав", duration: 15, completed: false },
  { name: "Діяльність Міжнародних інституцій", duration: 15, completed: false },
  { name: "Соціологія нації", duration: 15, completed: false },
  { name: "Соціологія особистості", duration: 15, completed: false },
  { name: "Альтернативна соціологія", duration: 15, completed: false },
  {
    name: "Функції соціології та її роль у розвитку суспільства",
    duration: 15,
    completed: false
  },
  { name: "Конфліктологія", duration: 15, completed: false }
]

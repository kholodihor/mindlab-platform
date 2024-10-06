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
  description: string
  duration: number
  completed: boolean
  lecture: string
  number: number
  theory: string
  presentation: string
  additionalMaterials: string
}

export const tabPanel: Array<TabPanelProps> = [
  { id: 1, title: "Відео", Icon: VideoIcon, Component: Video },
  { id: 2, title: "Теорія", Icon: TheoryIcon, Component: Theory },
  { id: 3, title: "Домашка", Icon: HomeWorkIcon, Component: HomeWork }
]

export const topicsList: Array<TopicsList> = [
  {
    name: "Що таке політика",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 1,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Політика і політичне життя суспільства",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 2,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Влада і політичні режими",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 3,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Демократія: поняття, теорія, модель",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 4,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Політична еліта та лідерство, Держава в політичній системі",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 5,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Громадянське суспільство та правова держава",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 6,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Політичні партії та системи",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 7,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Політична культура та етика",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 8,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Соціально-політичні ідеології і течії у сучасному світі",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 9,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Політика Європейських держав",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 10,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Діяльність Міжнародних інституцій",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 11,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Соціологія нації",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 12,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Соціологія особистості",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 13,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Альтернативна соціологія",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 14,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Функції соціології та її роль у розвитку суспільства",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 15,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Конфліктологія",
    description:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 16,
    theory:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  }
]

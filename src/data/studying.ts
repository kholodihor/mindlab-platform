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
  nameUa: string
  nameEn: string
  descriptionUa: string
  descriptionEn: string
  duration: number
  completed: boolean
  lecture: string
  number: number
  theoryUa: string
  theoryEn: string
  presentation: string
  additionalMaterials: string
}

export const tabPanel: Array<TabPanelProps> = [
  { id: 1, title: "video", Icon: VideoIcon, Component: Video },
  { id: 2, title: "theory", Icon: TheoryIcon, Component: Theory },
  { id: 3, title: "homework", Icon: HomeWorkIcon, Component: HomeWork }
]

export const topicsList: Array<TopicsList> = [
  {
    nameUa: "Що таке політика",
    nameEn: "What is politics?",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 1,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Політика і політичне життя суспільства",
    nameEn: "Politics and political life of society",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 2,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Влада і політичні режими",
    nameEn: "Power and political regimes",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 3,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Демократія: поняття, теорія, модель",
    nameEn: "Democracy: concept, theory, model",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 4,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Політична еліта та лідерство, Держава в політичній системі",
    nameEn: "Political elite and leadership, State in the political system",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 5,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Громадянське суспільство та правова держава",
    nameEn: "Civil society and the rule of law",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 6,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Політичні партії та системи",
    nameEn: "Political parties and systems",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 7,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Політична культура та етика",
    nameEn: "Political culture and ethics",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 8,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Соціально-політичні ідеології і течії у сучасному світі",
    nameEn: "Socio-political ideologies and currents in the modern world",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 9,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Політика Європейських держав",
    nameEn: "Policy of European states",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 10,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Діяльність Міжнародних інституцій",
    nameEn: "Activities of International Institutions",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 11,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Соціологія нації",
    nameEn: "Sociology of the nation",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 12,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Соціологія особистості",
    nameEn: "Sociology of personality",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 13,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Альтернативна соціологія",
    nameEn: "Alternative sociology",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 14,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Функції соціології та її роль у розвитку суспільства",
    nameEn: "Functions of sociology and its role in the development of society",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 15,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    nameUa: "Конфліктологія",
    nameEn: "Conflictology",
    descriptionUa:
      "Аналіз взаємодії соціальних мереж і політичної активності серед молоді в сучасному суспільстві. Дослідження впливу інформаційного контенту на політичні переконання.",
    descriptionEn:
      "Analysis of the interaction of social networks and political activity among young people in modern society. Study of the impact of information content on political beliefs.",
    duration: 15,
    completed: false,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 16,
    theoryUa:
      "На головній сторінці в хедері є клікабельна кнопка у вигляді іконки користувача з права, напроти зліва клікабельний логотип, що при натисканні повертає до головної сторінки При натисканні на кнопку-іконку користувач зявляється спливаюче вікно",
    theoryEn:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  }
]

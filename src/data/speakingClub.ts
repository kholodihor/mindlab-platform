import Zoom from "@/components/main/speakingClub/Zoom"
import Theory from "@/components/main/studying/Theory"
import HomeWork from "@/components/main/studying/HomeWork"
import VideoIcon from "@/components/icons/studying/VideoIcon"
import TheoryIcon from "@/components/icons/studying/TheoryIcon"
import HomeWorkIcon from "@/components/icons/studying/HomeWorkIcon"
import { TabPanelProps } from "./studying"

export const tabPanel: Array<TabPanelProps> = [
  { id: 1, title: "zoom", Icon: VideoIcon, Component: Zoom },
  { id: 2, title: "theory", Icon: TheoryIcon, Component: Theory },
  { id: 3, title: "homework", Icon: HomeWorkIcon, Component: HomeWork }
]

export type TopicsListProp = {
  name: string
  duration: number
  completed: boolean
  lecture: string
  number: number
  theory: string
  presentation: string
  additionalMaterials: string
}

export const topicsList: Array<TopicsListProp> = [
  {
    name: "Introduction to Politicsname",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 1,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Introduction to Politics Introduction to Politics ",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 2,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Introduction to Politics",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 3,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "The influence of social networks on young people",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 4,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Introduction to Politicsname",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 5,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "Introduction to Politics ",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 6,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "The influence of social networks on young people",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 7,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "The influence of social networks on young people",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 8,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "The influence of social networks on young people",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 9,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  },
  {
    name: "The influence of social networks on young people",
    duration: 45,
    completed: true,
    lecture: "https://www.youtube.com/watch?v=G16Cg7Kn1z4",
    number: 10,
    theory:
      "On the main page in the header, there is a clickable button in the form of a user icon on the right, opposite on the left is a clickable logo, which, when clicked, returns to the main page. When the user clicks on the button-icon, a pop-up window appears",
    presentation: "https://www.behance.net/gallery/192084565/Web-Design-UIUX",
    additionalMaterials:
      "https://www.behance.net/gallery/192084565/Web-Design-UIUX"
  }
]

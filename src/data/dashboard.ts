import { FC } from "react"
import StudyingIcon from "@/components/icons/dashboard/StudyingIcon"
import CalendarIcon from "@/components/icons/dashboard/CalendarIcon"
import SpeakingIcon from "@/components/icons/dashboard/SpeakingIcon"
import ForumIcon from "@/components/icons/dashboard/ForumIcon"
import EventIcon from "@/components/icons/dashboard/EventIcon"
import CourseiconIcon from "@/components/icons/dashboard/CourseIcon"

type Dashboard = {
  title: string
  Component: FC<{ width: number }>
  description: string
  href: string
  colorIcon: string
}

export const dashboard: Array<Dashboard> = [
  {
    title: "Навчання",
    Component: StudyingIcon,
    description:
      "Твій курс: містить відео-уроки, теоретичні матеріали та домашні завдання",
    href: "/home",
    colorIcon: "#03AA89"
  },
  {
    title: "Календар",
    Component: CalendarIcon,
    description:
      "В календарі відображатимуться важливі події, зустрічі в Speaking club",
    href: "/home",
    colorIcon: "#8D83FF"
  },
  {
    title: "Speaking club",
    Component: SpeakingIcon,
    description: "Анонси, теми, спілкування та сповіщення Speaking club",
    href: "/home",
    colorIcon: "#FFCCB6"
  },
  {
    title: "Форум",
    Component: ForumIcon,
    description:
      "Спільний чат усіх студентів платформи, вчителів та організаторів",
    href: "/home",
    colorIcon: "#FFE732"
  },
  {
    title: "Події",
    Component: EventIcon,
    description: "Анонс майбутніх подій, цікаві статті, архів новин та подій",
    href: "/home",
    colorIcon: "#FF737B"
  },
  {
    title: "Всі курси",
    Component: CourseiconIcon,
    description:
      "Сторінка, де можна побачити всі курси, що пропонує для вивчення платформа MindLab",
    href: "/home",
    colorIcon: "#AAAEDF"
  }
]

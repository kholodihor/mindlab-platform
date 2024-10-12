import { FC } from "react"
import ContactIcon from "../components/icons/Contact"
import SupportIcon from "../components/icons/Support"
import EventsGrid from "@/components/main/events/EventsGrid"

type Event = {
  id: number
  url: string
}

type TabPanelProps = {
  id: number
  title: string
  Icon: FC
  Component: FC<{ data: any[] }>
  data?: Event[]
}

export const eventsData = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/27195708/pexels-photo-27195708/free-photo-of-meal-with-vegetables-on-dark-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]

export const eventsData2 = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]

export const tabPanel: Array<TabPanelProps> = [
  {
    id: 1,
    title: "Всі події",
    Icon: ContactIcon,
    Component: EventsGrid,
    data: eventsData
  },
  {
    id: 2,
    title: "Анонси",
    Icon: SupportIcon,
    Component: EventsGrid,
    data: eventsData2
  },
  {
    id: 3,
    title: "Статті",
    Icon: SupportIcon,
    Component: EventsGrid,
    data: eventsData
  },
  {
    id: 4,
    title: "Архів",
    Icon: SupportIcon,
    Component: EventsGrid,
    data: eventsData2
  }
]

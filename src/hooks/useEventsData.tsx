import { FC, useEffect, useMemo, useState } from "react"
import { Event } from "@/types"
import ContactIcon from "../components/icons/Contact"
import SupportIcon from "../components/icons/Support"
import EventsGrid from "@/components/main/events/EventsGrid"

type TabPanelProps = {
  id: number
  title: string
  Icon: FC
  Component: FC<{ category?: string }>
  category?: string
}

export const useEventsData = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [inView, setInView] = useState(false)

  useEffect(() => {
    fetch("/json/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  useEffect(() => {
    if (inView) {
      setEvents((prevEvents) => [...prevEvents, ...prevEvents])
    }
  }, [inView])

  const tabPanel: Array<TabPanelProps> = useMemo(
    () => [
      {
        id: 1,
        title: "Всі події",
        Icon: ContactIcon,
        Component: EventsGrid,
        category: "all"
      },
      {
        id: 2,
        title: "Анонси",
        Icon: SupportIcon,
        Component: EventsGrid,
        category: "nature"
      },
      {
        id: 3,
        title: "Статті",
        Icon: SupportIcon,
        Component: EventsGrid,
        category: "food"
      },
      {
        id: 4,
        title: "Архів",
        Icon: SupportIcon,
        Component: EventsGrid,
        category: "nature"
      }
    ],
    [events]
  )

  return {
    tabPanel,
    setInView,
    events
  }
}

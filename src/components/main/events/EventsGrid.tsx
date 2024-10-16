import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useEventsData } from "@/hooks/useEventsData"
import EventCard from "./EventCard"

export default function EventsGrid({ category }: { category?: string }) {
  const { setInView, events } = useEventsData()
  const { ref, inView } = useInView({})

  useEffect(() => {
    setInView(inView)
  }, [inView])

  return (
    <>
      {category === "all" ? (
        <div
          className="no-scrollbar grid max-h-[100vh] auto-rows-[minmax(200px,auto)] grid-cols-1 
        gap-4 overflow-auto  md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event, i) => (
            <EventCard event={event} key={i} />
          ))}
          <div ref={ref} className="mx-auto h-4 w-full bg-black"></div>
        </div>
      ) : (
        <div
          className="no-scrollbar grid max-h-[100vh] auto-rows-[minmax(200px,auto)] grid-cols-1 
        gap-4 overflow-auto  md:grid-cols-2 lg:grid-cols-3"
        >
          {events
            .filter((event) => event.category === category)
            .map((event, i) => (
              <EventCard event={event} key={i} />
            ))}
          <div ref={ref} className="mx-auto h-4 w-full bg-black"></div>
        </div>
      )}
    </>
  )
}

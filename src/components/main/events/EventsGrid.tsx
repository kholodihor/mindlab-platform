import EventCard from "./EventCard"

export default function EventsGrid({ data }: { data: any[] }) {
  return (
    <div className="no-scrollbar grid max-h-[100vh] auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 overflow-auto  md:grid-cols-2 lg:grid-cols-3">
      {data.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  )
}

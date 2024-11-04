import { Event } from "@/types"

interface EventCardProps {
  event: Event
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="flex h-[626px] flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <img src={event.url} alt="" className="h-[280px] w-full object-cover" />
      <div className="flex h-[346px] flex-grow flex-col gap-2 p-[40px]">
        <h2 className="text-xl font-semibold text-black">Воркшоп</h2>
        <p className="flex-grow text-blackSecond">
          Твій курс, що містить відео уроки, теоретичні матеріали та домашні
          завдання
        </p>
        <p className="flex-grow text-xs text-darkGray">
          Приєднуйся до курсу "Political Science-Sociology" на MindLab!
          Досліджуй основи політики та суспільства, розвивай критичне мислення і
          дізнавайся, як змінювати на краще світ навколо себе. Відкрий для себе
          соціальні навички.
        </p>
        <div className="flex items-center justify-end gap-2">
          <a href="#" className="text-sm text-black hover:underline">
            Читати далі
          </a>
          <img src="/icons/chevron_right.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default EventCard

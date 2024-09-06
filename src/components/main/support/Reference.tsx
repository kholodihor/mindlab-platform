import { data, studyingData } from "@/data/accordionData"
import Accordion from "@/components/shared/Accordion"

const Reference = () => {
  return (
    <div className="flex justify-center xs:flex-col xs:gap-10 sm:gap-12 md:gap-5 xl:flex-row 3xl:gap-[30px] 5xl:gap-[68px]">
      <div className="rounded-md md:bg-graphite md:px-6 md:py-10 xl:m-0 xl:w-[50%] xl:p-[60px] 5xl:w-[820px]">
        <h3 className="text-white xs:mb-3.5 xs:text-xl sm:mb-5 sm:text-2xl md:mb-10 md:text-[28px]">
          Взаємодія з платформою
        </h3>
        <Accordion data={data} />
      </div>
      <div className="rounded-md md:bg-graphite md:px-6 md:py-10 xl:m-0 xl:w-[50%] xl:p-[60px] 5xl:w-[820px]">
        <h3 className="text-white xs:mb-3.5 xs:text-xl sm:mb-5 sm:text-2xl md:mb-10 md:text-[28px]">
          Процес навчання
        </h3>
        <Accordion data={studyingData} />
      </div>
    </div>
  )
}

export default Reference

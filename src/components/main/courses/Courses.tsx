import { useEffect, useState } from "react"
import Title from "./Title"
import coursesSale from "./courseSale.json"
import data from "./data.json"
import SaleCards from "./SaleCards"
import Cards from "./Cards"
import Open from "@/components/icons/Open"

const Courses = () => {
  const [showMore, setShowMore] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleShowMore = () => {
    setShowMore(true)
  }

  const combinedData = [
    ...coursesSale.map((course) => ({ ...course, type: "sale" })),
    ...data.map((course) => ({ ...course, type: "regular" }))
  ]
  const displayedData =
    showMore || !isMobile ? combinedData : combinedData.slice(0, 3)

  return (
    <section className="mb-8 w-full sm:mb-[51px] md:mb-[62px] md:px-5 xl:mb-[94px] xl:px-10 3xl:mb-[171px] 3xl:px-20 5xl:mb-[211px]">
      <Title />
      <div>
        <div className="flex flex-col flex-wrap gap-[20px] md:flex-row md:flex-nowrap">
          <ul className="flex flex-wrap justify-center gap-[20px]">
            <SaleCards
              data={displayedData.filter((item) => item.type === "sale")}
            />
            <Cards
              data={displayedData.filter((item) => item.type === "regular")}
            />
          </ul>
          {!showMore && isMobile && (
            <button
              onClick={handleShowMore}
              className="mx-auto mt-[13.5px] flex items-center gap-3 md:hidden"
            >
              <p className=" font-['Inter',_sans-serif] text-[16px] font-medium   leading-[1.5px] tracking-[0px]">
                Показати більше
              </p>
              <Open className={`h-[24px] w-[24px] fill-none stroke-white`} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Courses

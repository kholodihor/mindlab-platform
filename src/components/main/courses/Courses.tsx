import Title from "./Title"
import coursesSale from "./courseSale.json"
import data from "./data.json"
import SaleCards from "./SaleCards"
import Cards from "./Cards"

const Courses = () => {
  return (
    <section className="mb-8 w-full sm:mb-[51px] md:mb-[62px] md:px-5 xl:mb-[94px] xl:px-10 3xl:mb-[171px] 3xl:px-20 5xl:mb-[211px]">
      <Title />
      <div>
        <div className="flex flex-col flex-wrap  gap-[20px] md:flex-row md:flex-nowrap">
          <ul className=" flex flex-wrap justify-center gap-[20px] ">
            <SaleCards data={coursesSale} />
            <Cards data={data} />
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Courses

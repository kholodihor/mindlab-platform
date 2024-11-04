import { useState } from "react"

interface CarouselProps {
  index: number
  data: Array<string>
  changeLesson?: (lesson: number) => void
}

const Carousel = ({ index, data, changeLesson }: CarouselProps) => {
  const [indexCourse, setIndexCourse] = useState(index - 1)
  return (
    <div className="mb-10 flex w-[100%] justify-between px-4 py-2 sm:px-5">
      <button
        type="button"
        className=" block w-6 rotate-[360deg]"
        disabled={indexCourse === 0 ? true : false}
        onClick={() => {
          setIndexCourse((prev) => prev - 1)
          if (changeLesson) {
            changeLesson(indexCourse)
          }
        }}
      >
        <img src="/course/arrow.svg" alt="aroww icon" />
      </button>
      <p className="text-grayText">{data[indexCourse]}</p>
      <button
        type="button"
        className="rotate-[180deg]"
        onClick={() => {
          setIndexCourse((prev) => prev + 1)
          if (changeLesson) {
            changeLesson(indexCourse + 2)
          }
        }}
        disabled={indexCourse === data.length - 1 ? true : false}
      >
        <img src="/course/arrow.svg" alt="aroww icon" />
      </button>
    </div>
  )
}

export default Carousel

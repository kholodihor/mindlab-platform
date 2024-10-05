import { Navigation } from "swiper/modules"
import { topicsList } from "@/data/studying"
import { useRef, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import CurrentTopic from "./CurrentTopic"
const SwiperTopicList = ({
  changeLesson
}: {
  changeLesson: (lesson: number) => void
}) => {
  const sliderRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(1)
  const handlePrev = () => {
    if (sliderRef && sliderRef.current) {
      ;(sliderRef.current as any).slidePrev()
    }
  }
  const handleNext = () => {
    if (sliderRef && sliderRef.current) {
      ;(sliderRef.current as any).slideNext()
    }
  }

  const handleSlideChange = (swiper: any) => {
    const activeSlide = swiper.realIndex + 1
    console.log("Активний слайд:", activeSlide)
    setActiveSlide(activeSlide)
    changeLesson(activeSlide)
  }
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          ;(sliderRef.current as any) = swiper
        }}
        onSlideChange={handleSlideChange}
      >
        {topicsList.map(({ name, duration, completed, number }) => (
          <SwiperSlide
            onClick={() => changeLesson(activeSlide)}
            key={number}
            className={`${activeSlide === number ? "bg-darkGray" : ""}  border-t border-darkGray py-5 pl-8 pr-5 md:w-[400px]`}
          >
            <div className="mb-3 flex justify-between md:mb-0">
              <p className="w-[90%] sm:text-lg">
                <span className="text-lightViolet">Урок {number}.</span>
                {name}
              </p>
              <div
                className={`h-[23.1px] w-[23.1px] rounded-full ${completed ? "bg-greenLight" : "bg-gray"} flex items-center justify-center`}
              >
                <img src="/stugying/check.svg" alt="check icon" />
              </div>
            </div>
            <div className="flex gap-1 ">
              <p className=" text-sm text-gray">Тривалість {duration}хв</p>
              <img src="/stugying/oclock.svg" alt="oclock icon" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CurrentTopic
        lesson={activeSlide}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  )
}

export default SwiperTopicList

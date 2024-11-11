import { Navigation } from "swiper/modules"
import { topicsList } from "@/data/speakingClub"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import NavigationBtn from "../studying/swiper/NavigationBtn"

import "swiper/css"
import "swiper/css/navigation"

const SwiperTopicEn = ({
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
        className="mb-5"
      >
        {topicsList.map(({ name, completed, number }) => (
          <SwiperSlide
            onClick={() => changeLesson(activeSlide)}
            key={number}
            className={`${activeSlide === number ? "bg-darkGray" : "bg-graphite"} flex flex-wrap rounded-md p-5 pl-8 md:h-[127px] md:w-[400px]`}
          >
            <div className="mb-3 flex w-[100%] justify-between overflow-y-hidden md:mb-3 md:h-[54px]">
              <p className="w-[90%] sm:text-lg">
                <span className="mr-2 text-lightViolet">{`Lesson ${number}.`}</span>
                {name}
              </p>
              <div
                className={`h-[23.1px] w-[23.1px] rounded-full ${completed ? "bg-greenLight" : "bg-gray"} flex items-center justify-center`}
              >
                <img src="/stugying/check.svg" alt="check icon" />
              </div>
            </div>
            <div className="flex w-[100%] content-between items-center gap-1">
              <p className=" text-sm text-gray underline">Online scheduled</p>
              <img
                src="/stugying/oclock.svg"
                alt="oclock icon"
                width={12}
                height={12}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationBtn
        lesson={activeSlide}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  )
}

export default SwiperTopicEn

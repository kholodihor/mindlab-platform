import Arrow from "@/components/icons/Arrow"
import Smile from "@/components/icons/Smile"
import SmileO from "@/components/icons/SmileO"
import Star from "@/components/icons/Star"

const Hero = () => {
  return (
    <section className="md:pt-15 mb-20 px-3.5  pt-8 tracking-normal sm:mb-[100px] sm:px-5 sm:pt-9">
      <div className="mb-12 text-left font-['Fixel_Display',_sans-serif] text-[40px] font-semibold uppercase leading-[1] text-white  sm:mb-20 sm:text-[55px] md:text-[58px]">
        <div className="flex  items-center gap-1">
          <Star className="hidden h-[41px] w-[30px] fill-[#AAAEDF] stroke-black md:block xl:h-[34px] xl:w-[34px] 3xl:h-[41px] 3xl:w-[41px]" />
          <p>
            платф
            <Smile className="mx-1 h-[30px]  w-[28px] sm:h-[41px] sm:w-[39px] md:h-[44px] md:w-[43px]" />
            рма{" "}
          </p>{" "}
        </div>{" "}
        <p className="text-lightViolet md:ml-[35px]">
          {" "}
          <span className="text-white">твого</span>
          <br className="md:hidden" /> безмежного
        </p>{" "}
        <p className="text-lightViolet md:ml-[249px]">
          р
          <SmileO className="mx-1 h-[30px]  w-[28px] sm:h-[41px] sm:w-[39px] md:h-[44px] md:w-[43px]" />
          звитку
        </p>
      </div>
      <div className="gap-[140px] md:mb-5 md:flex">
        <p className=" mb-4 max-w-[100px] text-left text-sm  text-lightGray sm:mb-6 sm:text-base">
          Платформа Mind Lab
        </p>
        <p className="mb-8 text-base md:mb-0 md:max-w-[437px] md:text-[#b3b6be]">
          Освітня платформа підготувала для тебе цікаві курси за різними
          напрямками. <br />
          <br />
          Ти можеш познайомитись із найпопулярнішими професіями в нашому
          безкоштовному курсі Career guidance.
        </p>
      </div>
      <a href="/">
        <button className="relative h-[48px] w-[292px] cursor-pointer overflow-hidden rounded-[6px] bg-lime pl-[65.5px] [border:1px_solid_#c0ed3b] sm:h-[60px] sm:w-[390px] sm:pl-[102.5px] md:h-[48px] md:w-[342px] md:pl-[90.5px]">
          <p className="text-left text-lg font-medium  leading-[1.27] text-[#202227] sm:text-xl sm:leading-[1.5] md:text-lg">
            До навчання
          </p>
          <Arrow className="absolute right-0 top-0 h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] md:h-[48px] md:w-[48px]" />
        </button>
      </a>
    </section>
  )
}

export default Hero

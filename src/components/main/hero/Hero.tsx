import Arrow from "@/components/icons/Arrow"
import Smile from "@/components/icons/Smile"
import SmileO from "@/components/icons/SmileO"
import Star from "@/components/icons/Star"

const Hero = () => {
  return (
    <section className="md:pt-15 5xl:pt-22 mb-20 w-full  px-3.5 pt-8 tracking-normal sm:mb-[100px] sm:px-5 sm:pt-9 xl:mb-[152px] xl:px-10 xl:pt-20 3xl:mb-[172px] 3xl:px-20 5xl:mb-[238px] 5xl:px-20 5xl:px-20 ">
      <div className="mb-12 text-left font-['Fixel_Display',_sans-serif] text-[40px] font-semibold uppercase leading-[1]  text-white  sm:mb-20 sm:text-[55px] md:text-[58px] xl:mb-[72px] xl:text-[100px] 3xl:text-[108px] 5xl:text-[150px]">
        <div className="flex  items-center md:gap-1 xl:gap-[10px] 3xl:gap-[5px]">
          <Star className="hidden h-[41px] w-[30px] fill-[#AAAEDF] stroke-black md:block xl:h-[41px] xl:w-[41px] 3xl:h-[41px] 3xl:w-[41px]" />
          <p>
            платф
            <Smile className="mx-1 h-[30px] w-[28px]  sm:h-[41px] sm:w-[39px] md:h-[44px] md:w-[43px] xl:h-[73px] xl:w-[70px] 3xl:h-[79px] 3xl:w-[78px] 5xl:h-[109px] 5xl:w-[104px]" />
            рма{" "}
          </p>{" "}
        </div>{" "}
        <p className="text-lightViolet md:ml-[35px] xl:ml-[51px] 3xl:ml-[49px]">
          {" "}
          <span className="text-white">твого</span>
          <br className="md:hidden" /> безмежного
        </p>{" "}
        <p className="text-lightViolet md:ml-[249px] xl:ml-[420px] 3xl:ml-[448px] 5xl:ml-[602px]">
          р
          <SmileO className="mx-1 h-[30px]  w-[28px] sm:h-[41px] sm:w-[39px] md:h-[44px] md:w-[43px] xl:h-[73px] xl:w-[70px] 3xl:h-[79px] 3xl:w-[78px] 5xl:h-[109px] 5xl:w-[104px]" />
          звитку
        </p>
      </div>
      <div className="xl:flex xl:items-end xl:justify-end xl:gap-12 3xl:gap-[108px] 5xl:gap-[167px]">
        {" "}
        <div className="gap-[140px] md:mb-5 md:flex xl:mb-0 xl:gap-5 5xl:gap-[83px]">
          <p className=" mb-4 max-w-[100px] text-left text-sm  text-lightGray sm:mb-6 sm:text-base xl:mb-0 xl:max-w-full  5xl:text-[20px]">
            Платформа Mind Lab
          </p>
          <p className="mb-8 text-base md:mb-0 md:max-w-[437px] md:text-[#b3b6be] 5xl:min-w-[584px] 5xl:text-[20px]">
            Освітня платформа підготувала для тебе цікаві курси за різними
            напрямками. <br />
            <br />
            Ти можеш познайомитись із найпопулярнішими професіями в нашому
            безкоштовному курсі Career guidance.
          </p>
        </div>
        <a href="/" className="flex  md:justify-end ">
          <button className="relative h-[48px] w-[292px] cursor-pointer overflow-hidden rounded-[6px] bg-lime pl-[65.5px] [border:1px_solid_#c0ed3b] sm:h-[60px] sm:w-[390px] sm:pl-[102.5px] md:h-[48px] md:w-[342px] md:pl-[90.5px] xl:w-[285px] xl:pl-[62px] 3xl:w-[305px] 3xl:pl-[72px] 5xl:h-[60px] 5xl:w-[425px] 5xl:pl-[120px] 5xl:text-[20px]">
            <p className="text-left text-lg font-medium  leading-[1.27] text-[#202227] sm:text-xl sm:leading-[1.5] md:text-lg">
              До навчання
            </p>
            <Arrow className="absolute right-0 top-0 h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] md:h-[48px] md:w-[48px] 5xl:h-[60px] 5xl:w-[60px]" />
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero

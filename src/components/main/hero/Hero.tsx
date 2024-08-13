import Arrow from "@/components/icons/Arrow"
import Smile from "@/components/icons/Smile"
import SmileO from "@/components/icons/SmileO"

const Hero = () => {
  return (
    <section className="px-3.5 pb-20 pt-8 tracking-normal">
      <h2 className="relative mb-12 text-left font-['Fixel_Display',_sans-serif] text-[40px] font-semibold uppercase leading-[1]  text-white">
        платф
        <Smile className="mx-1 inline-block h-[40px] w-[28px] align-middle" />
        рма твого{" "}
        <span className="text-lightViolet">
          безмежного р
          <SmileO className="mx-1 inline-block h-[40px] w-[28px] align-middle" />
          звитку
        </span>
      </h2>
      <p className=" mb-4 max-w-[100px] text-left text-sm leading-[1.5]  text-lightGray">
        Платформа Mind Lab
      </p>
      <p className="leading-[1.5 mb-8  text-base">
        Освітня платформа підготувала для тебе цікаві курси за різними
        напрямками. <br />
        <br />
        Ти можеш познайомитись із найпопулярнішими професіями в нашому
        безкоштовному курсі Career guidance.
      </p>
      <a href="/">
        <button className="relative h-[48px] w-[292px] cursor-pointer overflow-hidden rounded-[6px] bg-lime pl-[65.5px] [border:1px_solid_#c0ed3b]">
          <p className="text-left text-lg font-medium  leading-[1.27] text-[#202227]">
            До навчання
          </p>
          <Arrow className="absolute right-0 top-0 h-[48px] w-[48px] " />
        </button>
      </a>
    </section>
  )
}

export default Hero

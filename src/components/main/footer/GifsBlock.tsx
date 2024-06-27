import Lottie from "lottie-react"
import eyes from "@/animations/eyes.json"

const GifBlock = () => {
  return (
    <div>
      <Lottie
        animationData={eyes}
        loop={true}
        className=" bg-red absolute bottom-[6%] left-[7%] h-[40px] w-[40px] sm:bottom-[52%] sm:left-[5%] md:bottom-[3%] md:left-[20px] xl:bottom-[26px] xl:left-[36px] xl:h-[60px] xl:w-[60px] 3xl:bottom-[32px] 3xl:left-[78px] 5xl:bottom-[64px]"
      />
      <div className="absolute right-[43%] top-[41%] h-[40px] w-[40px] sm:top-[21%] md:right-[20px] md:top-[85%] xl:right-[37px] xl:top-[243px] xl:h-[60px] xl:w-[60px] 3xl:right-[79px] 3xl:top-[263px] 5xl:top-[369px]">
        <img src="/images/footer/gif/eye.gif" />
        <span className="absolute -left-[10px] -top-[10px] block h-[60px] w-[60px] rounded-full border-[10px] border-black xl:-left-[12px] xl:-top-[12px] xl:h-[85px] xl:w-[85px] xl:border-[13px]"></span>
      </div>
      <div className=" absolute left-[7%] top-[28%] h-[40px] w-[40px] sm:left-[20%] sm:top-[9%] md:left-[19%] md:top-[58%] xl:left-[21%] xl:top-[150px] xl:h-[60px] xl:w-[60px] 5xl:left-[431px]  5xl:top-[221px]">
        <img src="/images/footer/gif/flame.gif" />
        <span className="absolute -left-[10px] -top-[10px] block h-[60px] w-[60px] rounded-full border-[10px] border-black xl:-left-[12px] xl:-top-[12px] xl:h-[85px] xl:w-[85px] xl:border-[13px]"></span>
      </div>

      <div className=" absolute bottom-[38%] right-[5%] h-[40px] w-[40px] sm:bottom-[6%] sm:right-[44%] md:bottom-[3%] md:right-[19%] 2md:right-[32%] 3md:right-[42%] xl:bottom-[96px] xl:right-[34%] xl:h-[60px] xl:w-[60px] 3xl:bottom-[108px] 3xl:right-[32%] 5xl:bottom-[156px] 5xl:right-[660px]">
        <img src="/images/footer/gif/glasses.gif" />
        <span className="absolute -left-[10px] -top-[10px] block h-[60px] w-[60px] rounded-full border-[10px] border-black xl:-left-[12px] xl:-top-[12px] xl:h-[85px] xl:w-[85px] xl:border-[13px]"></span>
      </div>

      <div className="absolute bottom-[17%] right-[28%] h-[40px] w-[40px] sm:bottom-[56%] sm:right-[4%] md:bottom-[3%] md:right-[61%] 2md:bottom-[35%] 2md:right-[45%] 3md:bottom-[30%] 3md:right-[30%] xl:bottom-[26px] xl:right-[49%] xl:h-[60px] xl:w-[60px] 3xl:bottom-[32px] 5xl:bottom-[64px] 5xl:right-[972px]">
        <img src="/images/footer/gif/puls.gif" />
        <span className="absolute -left-[10px] -top-[10px] block h-[60px] w-[60px] rounded-full border-[10px] border-black xl:-left-[12px] xl:-top-[12px] xl:h-[85px] xl:w-[85px] xl:border-[13px]"></span>
      </div>
    </div>
  )
}

export default GifBlock

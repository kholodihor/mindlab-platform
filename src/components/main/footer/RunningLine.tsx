import { useTranslation } from "react-i18next"

const RunningLine = () => {
  const { t } = useTranslation("Footer")
  return (
    <div className="running-line-container ticker-wrapper">
      <div className="ticker-wrapper__first-half">
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
          className="xl:h-9 xl:w-9 3xl:h-[41px] 3xl:w-[41px]"
        />
        <p className="text-[32px] font-semibold uppercase text-white sm:text-4xl md:text-[48px] xl:text-[80px] 5xl:text-[100px]">
          {t("runningLight")}
        </p>
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
          className="xl:h-9 xl:w-9 3xl:h-[41px] 3xl:w-[41px]"
        />
        <p className="w-[296px] text-[32px] font-semibold uppercase text-lightGray sm:text-4xl md:text-[48px] xl:text-[80px] 5xl:text-[100px]">
          {t("runningLight")}
        </p>
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
          className="xl:h-9 xl:w-9 3xl:h-[41px] 3xl:w-[41px]"
        />
        <p className="text-[32px] font-semibold uppercase text-white sm:text-4xl md:text-[48px] xl:text-[80px] 5xl:text-[100px]">
          {t("runningLight")}
        </p>
      </div>
      <div className="ticker-wrapper__second-half">
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
          className="xl:h-9 xl:w-9 3xl:h-[41px] 3xl:w-[41px]"
        />
        <p className="w-[296px] text-[32px] font-semibold uppercase text-lightGray sm:text-4xl md:text-[48px] xl:text-[80px] 5xl:text-[100px]">
          {t("runningLight")}
        </p>
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
          className="xl:h-9 xl:w-9 3xl:h-[41px] 3xl:w-[41px]"
        />
        <p className="text-[32px] font-semibold uppercase text-white sm:text-4xl md:text-[48px] xl:text-[80px] 5xl:text-[100px]">
          {t("runningLight")}
        </p>
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
          className="xl:h-9 xl:w-9 3xl:h-[41px] 3xl:w-[41px]"
        />
        <p className="w-[296px] text-[32px] font-semibold uppercase text-lightGray sm:text-4xl md:text-[48px] xl:text-[80px] 5xl:text-[100px]">
          {t("runningLight")}
        </p>
      </div>
    </div>
  )
}
export default RunningLine

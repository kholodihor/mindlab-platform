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
        />
        <p className="text-[32px] font-semibold uppercase text-white sm:text-4xl md:text-[48px] xl:text-[80px]">
          {t("runningLight")}
        </p>
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
        />
        <p className="w-[296px] text-[32px] font-semibold uppercase text-darkGray sm:text-4xl md:text-[48px] xl:text-[80px]">
          {t("runningLight")}
        </p>
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
        />
        <p className="text-[32px] font-semibold uppercase text-white sm:text-4xl md:text-[48px] xl:text-[80px]">
          {t("runningLight")}
        </p>
      </div>
      <div className="ticker-wrapper__second-half">
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
        />
        <p className="w-[296px] text-[32px] font-semibold uppercase text-darkGray sm:text-4xl md:text-[48px] xl:text-[80px]">
          {t("runningLight")}
        </p>
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
        />
        <p className="text-[32px] font-semibold uppercase text-white sm:text-4xl md:text-[48px] xl:text-[80px]">
          {t("runningLight")}
        </p>
        <img
          src="/icons/footer/star.svg"
          alt="Icon star"
          width={30}
          height={30}
        />
        <p className="w-[296px] text-[32px] font-semibold uppercase text-darkGray sm:text-4xl md:text-[48px] xl:text-[80px]">
          {t("runningLight")}
        </p>
      </div>
    </div>
  )
}
export default RunningLine

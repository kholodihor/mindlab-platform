import { useTranslation } from "react-i18next"

const TopicItem = ({
  number,
  activeTopic,
  onClickLesson,
  completed,
  duration,
  title
}: {
  number: number
  activeTopic: number
  onClickLesson: (number: number) => void
  completed: any
  duration: any
  title: string
}) => {
  const { t } = useTranslation("StudyingPage")
  return (
    <li
      className={` ${activeTopic === number ? "bg-darkGray 3md:border-l-4 3md:border-lightGray 3md:border-l-violet 3md:bg-inherit" : ""} 3md-border border-t border-darkGray py-5 pl-8 pr-5 3md:w-[100%] 3md:rounded-md 3md:border-[0.5px]`}
      onClick={() => onClickLesson(number)}
    >
      <div className="mb-3 flex justify-between ">
        <p className="w-[90%] sm:text-lg">
          <span className="text-lightViolet">{`${t("lesson")} ${number}.`}</span>{" "}
          {title}
        </p>
        <div
          className={`h-[23.1px] w-[23.1px] rounded-full ${completed ? "bg-greenLight" : "bg-gray"} flex items-center justify-center`}
        >
          <img src="/stugying/check.svg" alt="check icon" />
        </div>
      </div>
      <div className="flex gap-1 ">
        <p className=" text-sm text-gray">{`${t("duration")} ${duration} ${t("minutes")}`}</p>
        <img src="/stugying/oclock.svg" alt="oclock icon" />
      </div>
    </li>
  )
}

export default TopicItem

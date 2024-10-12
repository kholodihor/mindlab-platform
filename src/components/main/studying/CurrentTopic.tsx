import { useTranslation } from "react-i18next"

interface TopicsProps {
  handlePrev: () => void
  handleNext: () => void
  lesson: number
}

const CurrentTopic = ({ handleNext, handlePrev, lesson }: TopicsProps) => {
  const { t } = useTranslation("StudyingPage")
  return (
    <div className="mb-6 flex w-[100%] justify-between px-4 py-2">
      <button
        type="button"
        className=" block w-6 rotate-[360deg]"
        onClick={() => {
          handlePrev()
        }}
      >
        <img src="/course/arrow.svg" alt="aroww icon" />
      </button>
      <p className=" text-gray">{`${t("lesson")} ${lesson}`}</p>
      <button
        type="button"
        className="rotate-[180deg]"
        onClick={() => {
          handleNext()
        }}
      >
        <img src="/course/arrow.svg" alt="aroww icon" />
      </button>
    </div>
  )
}

export default CurrentTopic

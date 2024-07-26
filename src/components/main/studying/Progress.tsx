import ArrowIcon from "@/components/icons/studying/ArrowIcon"
import { useState } from "react"

type ProgressProps = {
  progress: number
  completed: number
}

const Progress = ({ progress, completed }: ProgressProps) => {
  const [showProgress, setShowProgress] = useState(false)
  return (
    <div className="mb-6 px-5 sm:mb-8">
      <div className="relative mb-4 flex items-center justify-between  pb-4 ">
        <h2 className="text-violet sm:text-lg">Мій прогрес: {progress}%</h2>
        <button
          type="button"
          onClick={() => setShowProgress((prev) => !prev)}
          className={`${showProgress ? "" : "rotate-180"}`}
        >
          <ArrowIcon />
        </button>
        <span
          className="absolute -bottom-[3px] z-10 block h-[3px] rounded-3xl bg-violet"
          style={{ width: `${progress}%` }}
        ></span>
        <span className="absolute -bottom-[3px] block h-[3px] w-[100%] rounded-3xl bg-lightGray"></span>
      </div>
      {showProgress && (
        <div className="mb-4 sm:text-base">
          <p className="mb-4 ">
            <span className="text-lightGray">Пройдено:</span> 5 уроків
          </p>
          <p>
            <span className="text-lightGray">Здано:</span> {completed} домашки
          </p>
        </div>
      )}

      <p className="text-sm text-lightGray sm:text-base">
        до завершення курсу: 12 днів
      </p>
    </div>
  )
}

export default Progress

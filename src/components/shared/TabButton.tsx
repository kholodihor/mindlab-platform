import { FC } from "react"
import { useTranslation } from "react-i18next"

type TabButtonProps = {
  title: string
  id: number
  selectTab: number
  Icon: FC
  onClick: () => void
}

const TabButton = ({ title, id, onClick, selectTab, Icon }: TabButtonProps) => {
  const { t } = useTranslation("StudyingPage")
  return (
    <li
      className={`${selectTab === id ? "border-white bg-white text-blackSecond" : " text-lightGray"} flex h-9 w-[30.48%] items-center justify-center rounded-md border sm:w-[31%] sm:justify-normal md:w-[132px] `}
    >
      <button
        className={`flex items-center justify-center`}
        type="button"
        onClick={onClick}
      >
        <div
          className={`${selectTab === id ? "border-blackSecond bg-black text-white" : " border-lightGray text-lightGray"} hidden h-[34px] w-[39px] rounded-l-md  border-r sm:flex sm:items-center sm:justify-center`}
        >
          <Icon />
        </div>
        <p className="text-center sm:w-[82px] md:w-[92px]">{t(`${title}`)}</p>
      </button>
    </li>
  )
}

export default TabButton

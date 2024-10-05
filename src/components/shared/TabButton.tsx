import { FC } from "react"

type TabButtonProps = {
  title: string
  id: number
  selectTab: number
  Icon: FC
  onClick: () => void
}

const TabButton = ({ title, id, onClick, selectTab, Icon }: TabButtonProps) => {
  return (
    <li
      className={`${selectTab === id ? "border-white bg-white text-blackSecond" : " text-lightGray"} flex h-9 w-[30.48%] items-center justify-center rounded-md border sm:w-[30.34%] sm:justify-normal md:w-[124px] `}
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
        <p className="text-center sm:w-[83px] md:w-auto">{title}</p>
      </button>
    </li>
  )
}

export default TabButton

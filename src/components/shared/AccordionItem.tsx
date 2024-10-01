import { useRef } from "react"
import ArrowDownIcon from "../icons/accordion/ArrowDown"
import ArrowRightIcon from "../icons/accordion/ArrowRight"

type AccordionItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick
}: AccordionItemProps) => {
  const contentHeight = useRef<HTMLDivElement>(null!)

  return (
    <div
      className={`${isOpen ? "bg-lightViolet" : "bg-white"} rounded px-6 py-5`}
    >
      <div
        className={`${isOpen ? "mb-[18px]" : "mb-0"} flex cursor-pointer items-center justify-between`}
        onClick={onClick}
      >
        <h4 className="text-lg text-black">{question}</h4>
        <span className="text-graphite">
          {isOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
        </span>
      </div>
      {isOpen && (
        <div
          ref={contentHeight}
          className={`${isOpen ? "h-[contentHeight.current.scrollHeight]" : "h-0"}`}
        >
          <p className="text-base text-graphite">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default AccordionItem

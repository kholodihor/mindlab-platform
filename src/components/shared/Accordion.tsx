import { useState } from "react"
import AccordionItem from "./AccordionItem"

type AccordionProps = {
  data: {
    question: string
    answer: string
  }[]
}

const Accordion = ({ data = [] }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex !== index ? index : -1))
  }

  return (
    <div className="flex flex-col gap-[14px]">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  )
}

export default Accordion

import React, { HTMLProps } from "react"

interface OpenProps extends HTMLProps<HTMLDivElement> {}
const Open: React.FC<OpenProps> = ({ className, ...rest }) => {
  return (
    <div {...rest}>
      <svg
        className={`${className}`}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="2"
          d="M24 14.667c-2.097 2.359-3.617 3.629-5.579 5.002-1.449 1.014-3.392 1.014-4.841 0-1.962-1.373-3.482-2.643-5.579-5.002"
        ></path>
      </svg>
    </div>
  )
}

export default Open

import React, { HTMLProps } from "react"

interface ArrowProps extends HTMLProps<HTMLDivElement> {}
const Arrow: React.FC<ArrowProps> = ({ className, ...rest }) => {
  return (
    <div {...rest}>
      <svg
        className={`${className}`}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h32v32h-32z"></path>
        <path
          fill="none"
          stroke="#eaeaeb"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="1"
          d="M19.667 17.333l-3.333 3.333M19.667 17.333l-3.333-3.333M19.667 17.333h-6.667c-1.111 0-3.333-0.667-3.333-3.333"
        ></path>
      </svg>
    </div>
  )
}

export default Arrow

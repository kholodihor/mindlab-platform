import React, { HTMLProps } from "react"

interface CalendarProps extends HTMLProps<HTMLDivElement> {}
const Calendar: React.FC<CalendarProps> = ({ className, ...rest }) => {
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
          strokeLinejoin="miter"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="2.2857"
          d="M10.866 1.714v5.803M21.12 1.714v5.803"
        ></path>
        <path
          strokeLinejoin="miter"
          strokeLinecap="butt"
          strokeMiterlimit="4"
          strokeWidth="2.2857"
          d="M2.496 24.055c0.368 3.291 3.042 5.904 6.35 6.062 2.286 0.112 4.622 0.169 7.154 0.169 2.535 0 4.869-0.057 7.154-0.169 3.307-0.16 5.982-2.77 6.35-6.062 0.249-2.215 0.453-4.487 0.453-6.8s-0.206-4.585-0.453-6.8c-0.368-3.291-3.042-5.904-6.35-6.062-2.286-0.11-4.619-0.167-7.154-0.167-2.533 0-4.869 0.057-7.154 0.167-3.307 0.16-5.982 2.77-6.35 6.062-0.249 2.215-0.453 4.487-0.453 6.8s0.206 4.585 0.453 6.8z"
        ></path>
        <path
          strokeLinejoin="miter"
          strokeLinecap="butt"
          strokeMiterlimit="4"
          strokeWidth="2.2857"
          d="M9.454 14.064c-0.316 0-0.571-0.256-0.571-0.571s0.256-0.571 0.571-0.571v0M9.454 14.064c0.316 0 0.571-0.256 0.571-0.571s-0.256-0.571-0.571-0.571v0M9.458 21.527c-0.316 0-0.571-0.256-0.571-0.571s0.256-0.571 0.571-0.571v0M9.458 21.527c0.316 0 0.571-0.256 0.571-0.571s-0.256-0.571-0.571-0.571v0M16 14.064c-0.316 0-0.571-0.256-0.571-0.571s0.256-0.571 0.571-0.571v0M16 14.064c0.316 0 0.571-0.256 0.571-0.571s-0.256-0.571-0.571-0.571v0M22.542 14.064c-0.316 0-0.571-0.256-0.571-0.571s0.256-0.571 0.571-0.571v0M22.544 14.064c0.316 0 0.571-0.256 0.571-0.571s-0.256-0.571-0.571-0.571v0"
        ></path>
      </svg>
    </div>
  )
}

export default Calendar

import React, { HTMLProps } from "react"

interface ClockProps extends HTMLProps<HTMLDivElement> {}
const Clock: React.FC<ClockProps> = ({ className, ...rest }) => {
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
          strokeWidth="2.2857"
          d="M16 29.984c6.535 0 11.832-5.297 11.832-11.832s-5.297-11.832-11.832-11.832v0c-6.535 0-11.832 5.297-11.832 11.832s5.297 11.832 11.832 11.832v0zM2.016 6.32c1.497-1.733 3.278-3.171 5.28-4.255l0.099-0.049M29.984 6.32c-1.497-1.733-3.278-3.171-5.28-4.255l-0.099-0.049"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="2.2857"
          d="M16 11.698v6.45h5.378"
        ></path>
      </svg>
    </div>
  )
}

export default Clock

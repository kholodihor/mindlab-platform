import React, { HTMLProps } from "react"

interface ExitIconProps extends HTMLProps<HTMLDivElement> {}
const Star: React.FC<ExitIconProps> = ({ className, ...rest }) => {
  return (
    <div {...rest}>
      <svg
        className={`${className}`}
        width="31"
        height="32"
        viewBox="0 0 31 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinejoin="miter"
          strokeLinecap="butt"
          strokeMiterlimit="4"
          strokeWidth="1.5238"
          d="M30.36 16.152c-4.558 1.143-7.667 2.43-9.91 4.677s-3.526 5.356-4.67 9.912c-0.019 0.068-0.080 0.117-0.153 0.117-0.037 0-0.070-0.012-0.097-0.033l0 0c-0.027-0.021-0.046-0.050-0.055-0.083l-0-0.001c-1.144-4.556-2.431-7.667-4.678-9.912s-5.358-3.532-9.917-4.676c-0.067-0.020-0.115-0.080-0.115-0.152s0.048-0.133 0.114-0.152l0.001-0c4.558-1.143 7.67-2.43 9.917-4.676s3.534-5.356 4.678-9.912c0.019-0.068 0.080-0.118 0.153-0.118s0.135 0.049 0.153 0.117l0 0.001c1.143 4.555 2.427 7.666 4.67 9.912s5.351 3.532 9.909 4.676c0.067 0.019 0.116 0.080 0.117 0.152v0c-0 0.072-0.049 0.133-0.115 0.152l-0.001 0z"
        ></path>
      </svg>
    </div>
  )
}

export default Star

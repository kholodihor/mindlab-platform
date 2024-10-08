type Props = {
  width?: number
}

const ReferenceIcon = ({ width }: Props) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
        stroke="currentColor"
        strokeWidth="1.875"
      />
      <path
        d="M15 10C15.6904 10 16.25 9.44036 16.25 8.75C16.25 8.05964 15.6904 7.5 15 7.5C14.3096 7.5 13.75 8.05964 13.75 8.75C13.75 9.44036 14.3096 10 15 10Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.625"
      />
      <path
        d="M14.375 12.9053C14.375 12.3649 15.625 12.3649 15.625 12.9053V22.0945C15.625 22.6352 14.3749 22.6352 14.375 22.0945C14.3751 21.5539 14.375 13.4457 14.375 12.9053Z"
        fill="currentColor"
      />
      <path
        d="M15.625 12.9053C15.625 12.3649 14.375 12.3649 14.375 12.9053C14.375 13.4457 14.3751 21.5539 14.375 22.0945C14.3749 22.6352 15.625 22.6352 15.625 22.0945M15.625 12.9053C15.625 13.4458 15.625 21.5539 15.625 22.0945M15.625 12.9053V22.0945"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  )
}

export default ReferenceIcon

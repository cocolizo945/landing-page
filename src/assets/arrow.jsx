import * as React from "react"
const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#E8EAED"
      d="M15 0c-1.036 0-1.875.84-1.875 1.875v20.953l-9.164-9.164a1.873 1.873 0 0 0-2.648 2.649l12.273 12.273a2 2 0 0 0 2.828 0l12.273-12.273a1.873 1.873 0 0 0-2.648-2.649l-9.164 9.164V1.875C16.875.839 16.035 0 15 0Z"
    />
  </svg>
)
export default Arrow
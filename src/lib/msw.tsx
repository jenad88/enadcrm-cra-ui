import { MSWDevTools } from "msw-devtools"
import { ReactNode } from "react"
import { IS_DEVELOPMENT } from "../config/constants"
import { db, handlers } from "../testing/mocks"

export type MSWWrapperProps = {
  children: ReactNode
}

console.log("MSWWrapper initialized")
require("../testing/mocks/initialize")

const MSWWrapper: React.FunctionComponent<MSWWrapperProps> = (props) => {
  const { children } = props
  return (
    <>
      {IS_DEVELOPMENT && <MSWDevTools db={db} handlers={handlers} />}
      {children}
    </>
  )
}

export default MSWWrapper

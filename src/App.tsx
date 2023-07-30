import React from "react"
import "./assets/App.css"

import { AppProvider } from "./context/AppContext"
import MainContainer from "./layouts/MainContainer"
import ApplicationLayout from "./layouts/ApplicationLayout"
import { PageContainer } from "./layouts/PageContainer"
import MSWWrapper from "./lib/msw"

// import dynamic from 'next/dynamic';
// import { API_MOCKING } from "./config/constants"
// import { MSWWrapperProps } from "./lib/msw"

// async function MSWWrapper({ children }: MSWWrapperProps) {
//   const MSWWrapper = await import("./lib/msw")
//   return <MSWWrapper>{children}</MSWWrapper>
// }

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppProvider>
        <MSWWrapper>{children}</MSWWrapper>
        {/* {API_MOCKING ? <MSWWrapper>{children}</MSWWrapper> : children} */}
      </AppProvider>
    </>
  )
}

function App() {
  return (
    <>
      <AppWrapper>
        <ApplicationLayout>
          <MainContainer>
            <PageContainer />
          </MainContainer>
        </ApplicationLayout>
      </AppWrapper>
    </>
  )
}

export default App

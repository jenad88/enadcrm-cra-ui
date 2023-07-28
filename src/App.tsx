import React from "react"
import "./assets/App.css"

import MainContainer from "./layouts/MainContainer"
import ApplicationLayout from "./layouts/ApplicationLayout"
import { PageContainer } from "./layouts/PageContainer"

function App() {
  return (
    <>
      <main>
        <div>
          <ApplicationLayout>
            <MainContainer>
              <PageContainer />
            </MainContainer>
          </ApplicationLayout>
        </div>
      </main>
    </>
  )
}

export default App

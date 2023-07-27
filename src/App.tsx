import React from "react"
import "./assets/App.css"

import Main from "./layouts/Main"
import ApplicationShell from "./layouts/ApplicationShell"

function App() {
  return (
    <>
      <main>
        <div>
          <ApplicationShell>
            <Main />
          </ApplicationShell>
        </div>
      </main>
    </>
  )
}

export default App

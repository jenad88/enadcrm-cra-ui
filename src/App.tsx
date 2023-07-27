import React from "react"
import "./assets/App.css"

import { Header } from "./layouts/Header"
import Main from "./layouts/Main"
import { AppProvider } from "./context/AppContext"

function App() {
  return (
    <div className='mx-auto'>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  )
}

export default App

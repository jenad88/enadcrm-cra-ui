import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/global.css"
import { Routes } from "./pages/Routes"
import reportWebVitals from "./reportWebVitals"

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./testing/mocks/browser")
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

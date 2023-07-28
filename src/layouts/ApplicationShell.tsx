import { useState, useEffect } from "react"
import { AppProvider } from "../context/AppContext"
import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
]

export default function ApplicationShell({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <>
      <AppProvider>
        <div className='mx-auto'>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className='lg:pl-20'>
            <Header
              userNavigation={userNavigation}
              setSidebarOpen={setSidebarOpen}
            />
            {children}
          </div>
        </div>
      </AppProvider>
    </>
  )
}

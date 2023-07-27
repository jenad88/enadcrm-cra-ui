import { useAppContext } from "../context/AppContext"
import { Outlet } from "react-router-dom"

export function PageContainer() {
  const { permissions } = useAppContext()
  if (permissions === undefined) {
    return <p className='mt-50 text-l text-center'>Not Logged in</p>
  }
  return permissions.includes("admin") ? (
    <p className='mt-4 text-l text-center'>
      <Outlet />
    </p>
  ) : (
    <p className='mt-50 text-l text-center'>Insufficient permissions</p>
  )
}

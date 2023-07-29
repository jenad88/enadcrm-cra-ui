import { useAppContext } from "../context/AppContext"
import { Outlet } from "react-router-dom"

export function PageContainer() {
  const { permissions } = useAppContext()
  if (permissions === undefined) {
    return <div className='mt-50 text-l text-center'>Not Logged in</div>
  }
  return permissions.includes("admin") ? (
    <div className='mt-4 text-l text-center'>
      <Outlet />
    </div>
  ) : (
    <div className='mt-50 text-l text-center'>Insufficient permissions</div>
  )
}

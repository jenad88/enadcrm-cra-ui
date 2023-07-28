// import { useAppContext } from "../context/AppContext"

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  // const { user } = useAppContext()
  return <main className='py-8'>{children}</main>
}

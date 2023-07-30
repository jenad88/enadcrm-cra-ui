import { ReactNode, useEffect } from "react"

import { Loading } from "../../../../components/loading/Loading"

import { useUser } from "../../api/get-auth-user"

export type ProtectedProps = {
  children: ReactNode
}

export const Protected = ({ children }: ProtectedProps) => {
  //   const { replace, asPath } = useRouter()
  const user = useUser()

  //   useEffect(() => {
  //     if (!user.data && !user.isLoading) {
  //       // replace(`/auth/login?redirect=${asPath}`, undefined, { shallow: true })
  //     }
  //   }, [user, asPath, replace])

  if (user.isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if (!user.data && !user.isLoading) return null

  return <>{children}</>
}

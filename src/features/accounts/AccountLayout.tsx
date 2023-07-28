"use client"

import SubModuleHeader, {
  SubModuleDef,
} from "../../components/sub-module/SubModuleHeader"
import React, { useContext } from "react"
import AccountContextProvider from "./context/AccountContext"
import NewAccountDialog from "../../features/accounts/components/NewAccountDialog"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Accounts" }
  // const [open, setOpen] = useContext(true)

  return (
    <>
      <AccountContextProvider>
        <section className='m-3'>
          <SubModuleHeader subModule={subModule} />
          <div className='px-4'>{children}</div>
          <NewAccountDialog />
        </section>
      </AccountContextProvider>
    </>
  )
}

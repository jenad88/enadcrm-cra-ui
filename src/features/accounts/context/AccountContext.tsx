import React from "react"
import { IAccount, IAccount_Type } from "./../model/models"

export type AccountContextProps = {
  accounts: IAccount[]
  saveAccount: (acct: IAccount) => void
  updateAccount: (id: number, updateAccount: IAccount) => void
  showNewAccountModal: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export const AccountContext = React.createContext<AccountContextProps | null>(
  null
)

export const useAccountContext = () => {
  const accountContext = React.useContext(AccountContext)
  if (accountContext === undefined) {
    throw new Error("useAccountContext must be inside a AccountContextProvider")
  }
  return accountContext
}

const AccountContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }: { children: React.ReactNode }) => {
  const [accounts, setAccounts] = React.useState<IAccount[]>([
    {
      id: 1,
      name: "Michael Cooper",
      state: "Front-end Developer",
      phone: "michael.cooper@example.com",
      type: IAccount_Type.PROSPECT,
      owner: {
        firstName: "Michael",
        lastName: "Cooper",
      },
    },
    {
      id: 2,
      name: "Sandra Hawkins",
      state: "Java Developer",
      phone: "sandra.hawkins@example.com",
      type: IAccount_Type.CUSTOMER,
      owner: {
        firstName: "Sandra",
        lastName: "Hawkins",
      },
    },
  ])

  const saveAccount = (acct: IAccount) => {
    const newAcct: IAccount = {
      id: Math.random(),
      name: acct.name,
      state: acct.state,
      phone: acct.phone,
      type: acct.type,
      owner: {
        firstName: acct.owner.firstName,
        lastName: acct.owner.lastName,
      },
    }
    setAccounts([...accounts, newAcct])
  }

  const updateAccount = (id: number, updateAccount: IAccount) => {
    accounts.filter((acct: IAccount) => {
      if (acct.id === id) {
        acct.name = updateAccount.name
        acct.state = updateAccount.state
        acct.phone = updateAccount.phone
        acct.type = updateAccount.type
        acct.owner = updateAccount.owner
        setAccounts([...accounts])
      }
    })
  }

  const [showNewAccount, setShowNewAccount] = React.useState(false)

  return (
    <>
      <AccountContext.Provider
        value={{
          accounts,
          saveAccount,
          updateAccount,
          showNewAccountModal: [showNewAccount, setShowNewAccount],
        }}
      >
        {children}
      </AccountContext.Provider>
    </>
  )
}

export default AccountContextProvider

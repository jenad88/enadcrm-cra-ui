"use client"

import React, { useLayoutEffect, useRef, useState } from "react"
import { IAccount } from "./../model/models"
import {
  AccountContext,
  AccountContextProps,
  useAccountContext,
} from "./../context/AccountContext"
import clsx from 'clsx'

export default function AccountListView() {
  const checkbox = useRef<HTMLInputElement>(null)
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedAccounts, setSelectedAccounts] = useState<IAccount[]>([])
  const {
    accounts,
    showNewAccountModal: [showNewAccount, setShowNewAccount],
  } = React.useContext(AccountContext) as AccountContextProps
  // const { accounts } = useAccountsContext();

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedAccounts.length > 0 && selectedAccounts.length < accounts.length
    setChecked(selectedAccounts.length === accounts.length)
    setIndeterminate(isIndeterminate)
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate
    }
  }, [selectedAccounts, accounts])

  function toggleAll() {
    setSelectedAccounts(checked || indeterminate ? [] : accounts)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <div className='sm:px-6'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'></div>
        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          <button
            type='button'
            className='block rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={() => setShowNewAccount(true)}
          >
            Add Account
          </button>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-4 lg:px-4'>
            <div className='relative'>
              {selectedAccounts.length > 0 && (
                <div className='absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12'>
                  <button
                    type='button'
                    className='inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white'
                  >
                    Bulk edit
                  </button>
                  <button
                    type='button'
                    className='inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white'
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className='min-w-full table-fixed divide-y divide-gray-300'>
                <thead>
                  <tr>
                    <th scope='col' className='relative px-7 sm:w-12 sm:px-6'>
                      <input
                        type='checkbox'
                        className='absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope='col'
                      className='min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900'
                    >
                      Account Name
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Billing State/Province
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Phone
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Type
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Owner First Name
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Owner Last Name
                    </th>
                    <th
                      scope='col'
                      className='relative py-3.5 pl-3 pr-4 sm:pr-3'
                    >
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {accounts.map((account) => (
                    <tr
                      key={account.id}
                      className={
                        selectedAccounts.includes(account)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className='relative px-7 sm:w-12 sm:px-6'>
                        {selectedAccounts.includes(account) && (
                          <div className='absolute inset-y-0 left-0 w-0.5 bg-indigo-600' />
                        )}
                        <input
                          type='checkbox'
                          className='absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          value={account.id}
                          checked={selectedAccounts.includes(account)}
                          onChange={(e) =>
                            setSelectedAccounts(
                              e.target.checked
                                ? [...selectedAccounts, account]
                                : selectedAccounts.filter((p) => p !== account)
                            )
                          }
                        />
                      </td>
                      <td
                        className={clsx(
                          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                          selectedAccounts.includes(account)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        {account.name}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {account.state}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {account.phone}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {account.type}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {account.owner.firstName}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {account.owner.lastName}
                      </td>
                      <td className='whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          Edit<span className='sr-only'>, {account.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

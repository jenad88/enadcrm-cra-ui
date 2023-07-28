import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import {
  AccountContext,
  AccountContextProps,
} from "./../context/AccountContext"
import NewAccountForm from "./NewAccountForm"

export default function NewAccountDialog(props: any) {
  const {
    saveAccount,
    showNewAccountModal: [showNewAccount, setShowNewAccount],
  } = React.useContext(AccountContext) as AccountContextProps

  return (
    <Transition.Root show={showNewAccount} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        onClose={() => setShowNewAccount(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all'>
                <div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-base font-semibold leading-6 text-gray-900'
                    >
                      New Account
                    </Dialog.Title>
                    <div className='mt-2 sm:my-8 sm:w-full sm:p-6 md:h-[500px] md:max-h-[500px] lg:h-[800px] lg:max-h-[800px] overflow-y-auto'>
                      <NewAccountForm />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

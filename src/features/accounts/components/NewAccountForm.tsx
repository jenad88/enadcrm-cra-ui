import React, { useRef } from "react"
import {
  AccountContext,
  AccountContextProps,
} from "./../context/AccountContext"

const NewAccountForm = () => {
  const {
    saveAccount,
    showNewAccountModal: [showNewAccount, setShowNewAccount],
  } = React.useContext(AccountContext) as AccountContextProps

  return (
    <form>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-4'>
          <p className='mt-1 text-sm leading-6 text-gray-600'></p>
          <div className='bg-gray-200 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3'>
            Account Information
          </div>
          <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 text-left'>
            <div className='grid grid-cols-1 content-baseline'>
              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='accountName'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Account name
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='accountName'
                    id='accountName'
                    autoComplete='Account Name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='accountType'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Type
                  </label>
                </div>
                <div className='mt-2'>
                  <select
                    id='accountType'
                    name='accountType'
                    autoComplete='Account Type'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>Customer</option>
                    <option>Prospect</option>
                  </select>
                </div>
              </div>

              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='webSite'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Web site
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='webSite'
                    id='webSite'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='description'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Description
                  </label>
                </div>
                <div className='mt-2'>
                  <textarea
                    id='description'
                    name='description'
                    rows={3}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1'>
              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='owner'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Account Owner
                  </label>
                </div>
                <div className='mt-2'>owner</div>
              </div>

              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='parentAccount'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Parent Account
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='parentAccount'
                    id='parentAccount'
                    autoComplete='Parent Account'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Phone
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='industry'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Industry
                  </label>
                </div>
                <div className='mt-2'>
                  <select
                    id='industry'
                    name='industry'
                    autoComplete='industry'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>Manufacturing</option>
                    <option>Financial Services</option>
                    <option>Technology</option>
                  </select>
                </div>
              </div>

              <div className='grid grid-cols-2'>
                <div className='mt-2'>
                  <label
                    htmlFor='employees'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Employees
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='employees'
                    id='employees'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='mt-2 bg-gray-200 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3'>
            Address Information
          </div>

          <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 text-left'>
            <div className='grid grid-cols-1 content-baseline'>
              <div className='grid grid-cols-1'>
                <div className='grid grid-cols-1'>
                  <div className='mt-2'>
                    <label
                      htmlFor='billingAddress'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Billing Address
                    </label>
                  </div>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='billingAddress'
                      id='billingAddress'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1'>
                  <div className='mt-2'>
                    <label
                      htmlFor='billingStreet'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Billing Street
                    </label>
                  </div>
                  <div className='mt-2'>
                    <textarea
                      id='billingStreet'
                      name='billingStreet'
                      rows={3}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  <div className='grid grid-cols-1'>
                    <div className='mt-2'>
                      <label
                        htmlFor='billingCity'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Billing City
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='billingCity'
                        id='billingCity'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 ml-2'>
                    <div className='mt-2'>
                      <label
                        htmlFor='billingState'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Billing State/Province
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='billingState'
                        id='billingState'
                        autoComplete='Billing State/Province'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1'>
                    <div className='mt-2'>
                      <label
                        htmlFor='billingZip'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Billing Zip/Postal Code
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='billingZip'
                        id='billingZip'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 ml-2'>
                    <div className='mt-2'>
                      <label
                        htmlFor='billingCountry'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Billing Country
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='billingCountry'
                        id='billingCountry'
                        autoComplete='Billing Country'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 content-baseline'>
              <div className='grid grid-cols-1'>
                <div className='grid grid-cols-1'>
                  <div className='mt-2'>
                    <label
                      htmlFor='shippingAddress'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Shipping Address
                    </label>
                  </div>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='shippingAddress'
                      id='shippingAddress'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1'>
                  <div className='mt-2'>
                    <label
                      htmlFor='shippingStreet'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Shipping Street
                    </label>
                  </div>
                  <div className='mt-2'>
                    <textarea
                      id='shippingStreet'
                      name='shippingStreet'
                      rows={3}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  <div className='grid grid-cols-1'>
                    <div className='mt-2'>
                      <label
                        htmlFor='shippingCity'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Shipping City
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='shippingCity'
                        id='shippingCity'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 ml-2'>
                    <div className='mt-2'>
                      <label
                        htmlFor='shippingState'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Shipping State/Province
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='shippingState'
                        id='shippingState'
                        autoComplete='Shipping State/Province'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1'>
                    <div className='mt-2'>
                      <label
                        htmlFor='shippingZip'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Shipping Zip/Postal Code
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='shippingZip'
                        id='shippingZip'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 ml-2'>
                    <div className='mt-2'>
                      <label
                        htmlFor='shippingCountry'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Shipping Country
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='shippingCountry'
                        id='shippingCountry'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='inline-flex justify-center rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2'
          onClick={() => setShowNewAccount(false)}
        >
          Cancel
        </button>
        <button
          type='button'
          className='mt-3 inline-flex justify-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0'
          onClick={() => setShowNewAccount(false)}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default NewAccountForm

import React, { useRef } from "react"
import { LeadContext, LeadContextProps } from "./../context/LeadContext"

const NewLeadForm = () => {
  const {
    saveLead,
    showNewLeadModal: [showNewLead, setShowNewLead],
  } = React.useContext(LeadContext) as LeadContextProps

  return (
    <form>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-4'>
          <p className='mt-1 text-sm leading-6 text-gray-600'></p>
          <div className='bg-gray-200 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3'>
            Lead Information
          </div>
          <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 text-left'>
            <div className='grid grid-cols-1'>
              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='leadStatus'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Lead Status
                  </label>
                </div>
                <div className='mt-2'>
                  <select
                    id='leadStatus'
                    name='leadStatus'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>-None-</option>
                    <option>Unqualified</option>
                    <option>New</option>
                    <option>Working</option>
                    <option>Nurturing</option>
                    <option>Qualified</option>
                  </select>
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='salutation'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Salutation
                  </label>
                </div>
                <div className='mt-2'>
                  <select
                    id='salutation'
                    name='salutation'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>-None-</option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                  </select>
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    First Name
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='middleName'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Middle Name
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='middleName'
                    id='middleName'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Last Name
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='suffix'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Suffix
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='suffix'
                    id='suffix'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Title
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1'>
              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='owner'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Lead Owner
                  </label>
                </div>
                <div className='mt-2'>owner</div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='website'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Website
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='website'
                    id='website'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  ></label>
                </div>
                <div className='mt-2'></div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  ></label>
                </div>
                <div className='mt-2'></div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  ></label>
                </div>
                <div className='mt-2'></div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='mt-2'>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Company
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='company'
                    id='company'
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
                      htmlFor='address'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Address
                    </label>
                  </div>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1'>
                  <div className='mt-2'>
                    <label
                      htmlFor='street'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Street
                    </label>
                  </div>
                  <div className='mt-2'>
                    <textarea
                      id='street'
                      name='street'
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
                        htmlFor='city'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        City
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 ml-2'>
                    <div className='mt-2'>
                      <label
                        htmlFor='state'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        State/Province
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='state'
                        id='state'
                        autoComplete='State/Province'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1'>
                    <div className='mt-2'>
                      <label
                        htmlFor='zip'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Zip/Postal Code
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='zip'
                        id='zip'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 ml-2'>
                    <div className='mt-2'>
                      <label
                        htmlFor='country'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Country
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='country'
                        id='country'
                        autoComplete='Country'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 content-baseline'>
              <div className='grid grid-cols-1'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='inline-flex justify-center rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2'
          onClick={() => setShowNewLead(false)}
        >
          Cancel
        </button>
        <button
          type='button'
          className='mt-3 inline-flex justify-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0'
          onClick={() => setShowNewLead(false)}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default NewLeadForm

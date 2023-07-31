import { NavLink, Link, useSearchParams, Form } from "react-router-dom"
import { authenticate } from "../../api/authenticate"
import { authorize } from "../../api/authorize"
import { useAppContext } from "../../context/AppContext"

import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline"
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid"
import ProfileDropdown from "./ProfileDropdown"
import { useLogin } from "../../features/auth/api/login"

type HeaderBarProps = {
  userNavigation: { name: string; href: string }[]
  setSidebarOpen: (open: boolean) => void
}

const Header: React.FunctionComponent<HeaderBarProps> = (props) => {
  const { userNavigation, setSidebarOpen } = props
  const { user, loading, dispatch } = useAppContext()
  const [searchParams] = useSearchParams()
  const { submit, isLoading } = useLogin({ onSuccess: () => {} })

  async function handleSignInClick() {
    submit({ email: "user1@test.com", password: "password" })
    dispatch({ type: "authenticate" })
    const authenticatedUser = await authenticate()
    dispatch({
      type: "authenticated",
      user: authenticatedUser,
    })
    if (authenticatedUser !== undefined) {
      dispatch({ type: "authorize" })
      const authorizedPermissions = await authorize(authenticatedUser.id)
      dispatch({
        type: "authorized",
        permissions: authorizedPermissions,
      })
    }
  }

  return (
    <header className='sticky top-0 z-30 flex h-16 shrink-0 items-center justify-end gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
      <button
        type='button'
        className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
      </button>

      {/* Separator */}
      <div className='h-6 w-px bg-gray-900/10 lg:hidden' aria-hidden='true' />

      <div className='flex gap-x-4'>
        <Form className='relative flex flex-1' action='/products'>
          <label htmlFor='search-field' className='sr-only'>
            Search
          </label>
          <input
            id='search-field'
            type='search'
            name='search'
            placeholder='Search...'
            defaultValue={searchParams.get("search") ?? ""}
            className='block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
          />
        </Form>
        <div className='flex items-center gap-x-4 lg:gap-x-4'>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>View notifications</span>
            <MagnifyingGlassIcon className='h-6 w-6' aria-hidden='true' />
          </button>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
          </button>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>Grid</span>
            <Squares2X2Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>Help</span>
            <QuestionMarkCircleIcon className='h-6 w-6' aria-hidden='true' />
          </button>

          {/* Separator */}
          <div
            className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10'
            aria-hidden='true'
          />

          {user ? (
            <ProfileDropdown userNavigation={userNavigation} />
          ) : (
            <button
              onClick={handleSignInClick}
              className='whitespace-nowrap inline-flex items-center justify-center ml-2 
                px-4 py-2 w-36 border border-transparent rounded-md shadow-sm 
                text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
              disabled={loading}
            >
              {loading ? "..." : "Sign in"}
            </button>
          )}
        </div>
      </div>

      <nav>
        <NavLink
          to='leads'
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          Leads
        </NavLink>
      </nav>
    </header>
  )
}

export default Header

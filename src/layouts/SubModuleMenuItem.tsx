import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import MenuItem, { MenuItemDef } from "./MenuItem"
import { Link } from "react-router-dom"

export type MenuDef = {
  name: string
  href: string
  icon: any
  current: boolean
  menuItems?: MenuItemDef[]
}

type SubModuleMenuItemProps = {
  menu: MenuDef
}

const SubModuleMenuItem: React.FunctionComponent<SubModuleMenuItemProps> = (
  props
) => {
  const { menu } = props

  return (
    <Menu as='div' className='relative text-left'>
      <div className='block w-full rounded-md'>
        asdf
        <div className='flex group gap-x-1 leading-6 px-2 py-2 hover:text-white hover:bg-indigo-700 items-center justify-between'>
          <Link
            to={menu.href}
            className='inline-block w-full text-sm group 
                    font-medium font-semi-bold text-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
                    focus-visible:ring-opacity-100 hover:text-white hover:bg-indigo-700'
          >
            {menu.name}
          </Link>
          {menu && menu.menuItems && menu.menuItems.length > 0 && (
            <Menu.Button
              className='inline text-sm group 
                            font-medium font-semi-bold text-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
                            focus-visible:ring-opacity-100 hover:text-white hover:bg-indigo-700'
            >
              <ChevronDownIcon
                className='ml-0 -mr-1 h-5 w-5 text-violet-200 hover:text-white mt-1 hover:scale-125'
                aria-hidden='true'
              />
            </Menu.Button>
          )}
        </div>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
          <div className='px-1 py-1'>
            {menu &&
              menu.menuItems &&
              menu.menuItems.map((item, index) => {
                return <MenuItem key={index} item={item} />
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default SubModuleMenuItem

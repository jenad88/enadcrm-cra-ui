import { Menu } from "@headlessui/react"
import { Link } from "react-router-dom"

export type MenuItemDef = {
  id?: string
  name: string
  href?: string
  itemType?: string
}

const MenuItem = (props: any) => {
  const { item, setSideOver } = props

  const handleButtonClick = () => {
    setSideOver(null)
  }

  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          to={item.href}
          className={`${
            active ? "bg-violet-500 text-red-bg-500" : "text-white"
          } text-gray-200 hover:text-gray-800 hover:bg-gray-100 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
          onClick={handleButtonClick}
        >
          {item.name}
        </Link>
      )}
    </Menu.Item>
  )
}

export default MenuItem

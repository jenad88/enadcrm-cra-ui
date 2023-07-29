import { useEffect, useState } from "react"
import MobileNav from "./MobileNav"
import SubModuleMenuSlideOver from "./SubModuleMenuSlideOver"
import DesktopNav from "./DesktopNav"

import { CRM_SUB_MODULE_MENU } from "../../config/sub-module-constants"
import { MenuDef } from "./SubModuleMenuItem"

type SidebarProps = {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  const { sidebarOpen, setSidebarOpen } = props
  const [currentSideOver, setCurrentSideOver] = useState<string | null>(null)
  const [menu, setMenu] = useState<MenuDef | null>(null)

  useEffect(() => {
    if (currentSideOver) {
      const result = CRM_SUB_MODULE_MENU.find(
        (item) => item.name === currentSideOver
      )
      setMenu(!result ? null : result)
    }
  }, [currentSideOver])

  return (
    <>
      <MobileNav
        items={CRM_SUB_MODULE_MENU}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <SubModuleMenuSlideOver
        sideOver={currentSideOver}
        setSideOver={setCurrentSideOver}
        menu={menu}
      />
      <DesktopNav
        items={CRM_SUB_MODULE_MENU}
        setSidebarOpen={setSidebarOpen}
        sideOver={currentSideOver}
        setSideOver={setCurrentSideOver}
      />
    </>
  )
}

export default Sidebar

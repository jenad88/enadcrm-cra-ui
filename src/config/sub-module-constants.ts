import {
    HomeIcon,
    UsersIcon,
  } from "@heroicons/react/24/outline";
  
  import { MenuDef } from "../components/sidebar/SubModuleMenuItem";
  
  export const CRM_SUB_MODULE_MENU: MenuDef[] = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
      current: true,
    },
    {
      name: "Accounts",
      href: "/accounts",
      icon: UsersIcon,
      current: false,
      menuItems: [
        { name: "View Accounts", href: "/accounts" },
        { name: "+ New Account", href: "/accounts/create" },
        { name: "accounts 2", href: "#" },
        { name: "accounts 3", href: "#" },
        { name: "accounts 4", href: "#" },
        { name: "accounts 5", href: "#" },
        { name: "accounts 6", href: "#" },
      ],
    },
    {
      name: "Leads",
      href: "/leads",
      icon: UsersIcon,
      current: false,
      menuItems: [
        { name: "View Leads", href: "/leads" },
        { name: "+ New Lead", href: "/leads/create" },
        { name: "leads 2", href: "#" },
        { name: "leads 3", href: "#" },
        { name: "leads 4", href: "#" },
        { name: "leads 5", href: "#" },
        { name: "leads 6", href: "#" },
      ],
   },
];
  
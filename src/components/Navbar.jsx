
import { NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu"

export default function Navbar() {
  return (
    <NavigationMenu className="w-full p-6 bg-white/10 backdrop-blur-md 
    border-b border-white/20">
      <NavigationMenuList className="w-full flex justify-center gap-8 bg-transparent">
        <NavigationMenuItem>
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      isActive
        ? "text-slate-200 font-semibold decoration-slate-200"
        : "text-gray-700 hover:text-blue-600"
    }
  >
    Home
  </NavLink>

</NavigationMenuItem>
  
        <NavigationMenuItem>
          <NavLink to="/about">About Me</NavLink>

        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


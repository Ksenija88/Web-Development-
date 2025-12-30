import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-white font-semibold"
      : "text-slate-300 hover:text-white transition-colors";

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <NavigationMenu className="w-full p-6 bg-white/10 backdrop-blur-md border-b border-white/20">
      <NavigationMenuList className="w-full flex justify-center gap-8 bg-transparent">
        <NavigationMenuItem>
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink to="/about" className={linkClasses}>
            About Me
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </NavigationMenuItem>

        {user ? (
          <>
            <NavigationMenuItem>
              <NavLink to="/admin" className={linkClasses}>
                Admin
              </NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={handleLogout}
                className="text-slate-300 hover:text-white transition-colors"
                type="button"
              >
                Logout
              </button>
            </NavigationMenuItem>
          </>
        ) : (
          <NavigationMenuItem>
            <NavLink to="/login" className={linkClasses}>
              Login
            </NavLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

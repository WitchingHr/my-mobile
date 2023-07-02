"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

import { VscSignOut } from "react-icons/vsc";

import Avatar from "./Avatar";

interface UserMenuProps {
	menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const UserMenu: React.FC<UserMenuProps> = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (menuOpen && !menuRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
  
    // event listener for clicks outside of the menu
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [setMenuOpen, menuOpen]);

	return (
		<div
      ref={menuRef}
			className={`
        absolute right-0 z-20 top-[52px] p-2 duration-300 ease-in-out bg-white nav-shadow rounded-b-md
        ${menuOpen ? "translate-y-0" : "-translate-y-32"}
      `}
		>
			<ul>
        <li className="p-2 duration-300 border rounded-md shadow-sm hover:bg-indigo-100">
          <Link href="/dashboard/account" className="flex items-center h-8 gap-2">
            <Avatar />
            <div>Matt Thomas</div>
          </Link>
        </li>
				<li className="duration-300 rounded-md hover:bg-indigo-100">
					<button className="flex gap-2 p-2">
						<VscSignOut size={24} className="mx-1 text-indigo-600" />
						<div>Sign out</div>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserMenu;

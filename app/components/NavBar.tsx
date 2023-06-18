"use client"

import { RiCellphoneFill } from "react-icons/ri";
import Avatar from "./Avatar";
import { useState } from "react";
import UserMenu from "./UserMenu";
import Link from "next/link";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="relative z-20 flex items-center justify-between p-2 bg-white nav-shadow">
        {/* logo */}
        <Link href="/dashboard" className="flex items-center">
          <RiCellphoneFill size={36} className="text-indigo-600" />
          <span className="text-3xl font-light text-indigo-600">My</span>
          <span className="text-3xl font-medium text-indigo-600">Mobile</span>
        </Link>
        {/* user menu button */}
        <button onClick={toggleMenu} className="h-8">
          <Avatar />
        </button>
      </div>
      <UserMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default NavBar;

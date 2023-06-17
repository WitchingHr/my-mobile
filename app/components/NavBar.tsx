"use client"

import { RiCellphoneFill } from "react-icons/ri";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="flex items-center justify-between p-2 nav-shadow">
      {/* logo */}
      <div className="flex items-center">
        <RiCellphoneFill size={36} className="text-indigo-600" />
        <span className="text-3xl font-light text-indigo-600">My</span>
        <span className="text-3xl font-medium text-indigo-600">Mobile</span>
      </div>
      
      <button className="block w-8 h-8 bg-black rounded-full"></button>
    </div>
  );
};

export default NavBar;

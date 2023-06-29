"use client"

import { HiOutlineDeviceMobile } from "react-icons/hi";

interface LineProps {}

const Line: React.FC<LineProps> = ({}) => {
  return (
    <li className="flex flex-col hover:bg-gray-100">
      <div className="flex items-center justify-evenly">
        <HiOutlineDeviceMobile className="w-9 h-9 text-neutral-700" />
        <div className="flex flex-col">
          {/* device name */}
          <div className="text-2xl font-light text-neutral-700">Android</div>
          {/* device number */}
          <div className="text-sm text-neutral-500">999-999-9999</div>
        </div>
        <div className="w-3 h-3 rotate-45 border-t-2 border-r-2 border-neutral-700"></div>
      </div>
      <hr />
    </li>
  );
};

export default Line;

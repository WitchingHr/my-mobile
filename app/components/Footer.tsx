"use client";

import { RiCellphoneFill } from "react-icons/ri";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube, BsGithub } from "react-icons/bs";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<div className="flex flex-col flex-1 px-2 py-2 text-white bg-indigo-950">
      <div className="flex items-center gap-2">
        {/* logo */}
        <div className="p-1 bg-indigo-600 hover:bg-[#00ff08] duration-300 border border-white cursor-pointer logo-shadow">
          <RiCellphoneFill size={24} className="text-white" />
        </div>
        <div>Follow MyMobile</div>
        {/* socials */}
        <div className="flex gap-2 ml-auto">
          <BsInstagram size={24} className="duration-300 cursor-pointer hover:text-[#00ff08] hover:-translate-y-1" />
          <BsFacebook size={24} className="duration-300 cursor-pointer hover:text-[#00ff08] hover:-translate-y-1" />
          <BsTwitter size={24} className="duration-300 cursor-pointer hover:text-[#00ff08] hover:-translate-y-1" />
          <BsYoutube size={24} className="duration-300 cursor-pointer hover:text-[#00ff08] hover:-translate-y-1" />
          <a href="https://github.com/witchinghr" target="_blank">
            <BsGithub size={24} className="duration-300 cursor-pointer hover:text-[#00ff08] hover:-translate-y-1" />
          </a>
        </div>
      </div>
      <hr className="my-2" />
      {/* footer links */}
      <div className="flex justify-evenly sm:justify-normal sm:gap-16">
        <ul className="my-auto text-sm max-w-min whitespace-nowrap">
          <li className="cursor-pointer hover:underline hover:text-[#00ff08] duration-300">Contact us</li>
          <li className="cursor-pointer hover:underline hover:text-[#00ff08] duration-300">Support</li>
          <li className="cursor-pointer hover:underline hover:text-[#00ff08] duration-300">FAQ</li>
          <li className="cursor-pointer hover:underline hover:text-[#00ff08] duration-300">Privacy Policy</li>
        </ul>
        <ul className="my-auto text-sm max-w-min whitespace-nowrap">
          <li className="cursor-pointer hover:underline hover:text-[#00ff08] duration-300">Privacy Center</li>
          <li className="cursor-pointer hover:underline hover:text-[#00ff08] duration-300">Terms of Use</li>
          <li className="cursor-pointer hover:underline hover:text-[#00ff08] duration-300">Accessibility</li>
          <li className="cursor-pointer hover:underline hover:text-[#00ff08] duration-300">Ads</li>
        </ul>
      </div>
      {/* copyright */}
      <div className="ml-auto text-xs">© 2023 MyMobile USA, Inc.</div>
		</div>
	);
};

export default Footer;

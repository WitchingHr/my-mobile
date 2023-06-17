"use client";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<div className="flex flex-col flex-1 px-2 py-4 text-white bg-indigo-950">
      <div>Follow MyMobile</div>
      <ul className="my-auto text-sm max-w-min whitespace-nowrap">
        <li className="cursor-pointer hover:underline">Contact us</li>
        <li className="cursor-pointer hover:underline">Support</li>
        <li className="cursor-pointer hover:underline">FAQ</li>
        <li className="cursor-pointer hover:underline">Privacy Policy</li>
      </ul>
      <div className="ml-auto text-xs">© 2023</div>
		</div>
	);
};

export default Footer;

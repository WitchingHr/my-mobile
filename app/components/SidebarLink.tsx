"use client";

import Link from "next/link";

import { IconType } from "react-icons";

interface SidebarLinkProps {
	id: number;
	title: string;
	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
	icon: IconType;
	href: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
	id,
	title,
	selected,
	setSelected,
	icon: Icon,
	href,
}) => {
	const handleClick = () => {
		if (id !== selected) {
			setSelected(id);
		}
	};

	return (
		<Link
			className={`
        p-2 rounded-md
        ${id === selected ? "sidebar-link-shadow-selected bg-indigo-600" : "sidebar-link-shadow hover:bg-indigo-100 duration-300 bg-white"}
      `}
			href={href}
			title={title}
			onClick={handleClick}
		>
			<Icon className={`w-8 h-8 ${selected === id ? "text-white" : "text-indigo-600"}`} />
		</Link>
	);
};

export default SidebarLink;

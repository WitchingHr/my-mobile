"use client";

import Link from "next/link";

import { HiOutlineDeviceMobile } from "react-icons/hi";

interface LineProps {
	id: string;
}

const Line: React.FC<LineProps> = ({ id }) => {
	return (
		<li className="flex flex-col hover:bg-gray-100">
			<Link
				href={`/dashboard/account/line/${id}`}
				className="flex items-center justify-between pl-2 pr-4 duration-300 hover:pr-8 hover:pl-6"
			>
				<div className="flex items-center gap-6">
					<HiOutlineDeviceMobile className="w-9 h-9 text-neutral-700" />
					<div className="flex flex-col">
						{/* device name */}
						<div className="text-2xl font-light text-neutral-700">Android</div>
						{/* device number */}
						<div className="text-sm text-neutral-500">999-999-9999</div>
					</div>
				</div>
				<div className="w-3 h-3 rotate-45 border-t-2 border-r-2 border-neutral-700"></div>
			</Link>
			<hr />
		</li>
	);
};

export default Line;

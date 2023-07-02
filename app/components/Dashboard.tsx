"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Sidebar from "./Sidebar";

interface DashboardProps {
	children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
	// get the current path
	const path = usePathname().split("/");
	const param = path[2] || "dashboard";
	const capitalizedParam = param.charAt(0).toUpperCase() + param.slice(1);

	return (
		<main className="flex flex-col flex-1 gap-2 p-2 bg-[#00000026]">
			<div className="flex flex-row items-center justify-between w-full">
				<div className="flex items-center gap-2 text-[#282828]">
					<Link href="/dashboard">
						<h1 className="text-2xl font-medium">Dashboard</h1>
					</Link>
					{param !== "dashboard" && (
						// display current path if its not dashboard
						<div className="text-2xl font-light">{capitalizedParam}</div>
					)}
				</div>
				<p className="hidden font-light sm:block">
					Welcome back, <span className="font-medium">Matt</span>
				</p>
			</div>

			<div className="flex flex-row gap-2 pb-2 max-h-[480px]">
				<Sidebar />

				{/* page content */}
				<div className="flex-1 rounded-md content-shadow bg-[#00000014] relative">{children}</div>
			</div>
		</main>
	);
};

export default Dashboard;

"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Card from "./Card";

interface DashboardProps {
	children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
	// get the current path
	const path = usePathname().split("/");
	const param = path[path.length - 1];
	const capitalizedParam = param.charAt(0).toUpperCase() + param.slice(1);

	return (
		<main className="flex flex-col gap-2 p-2 bg-[#0000003b]">
			<div className="flex flex-col items-start w-full sm:items-center sm:justify-between sm:flex-row">
				<div className="flex items-center gap-2 text-[#282828]">
					<Link href="/dashboard">
						<h1 className="text-2xl font-medium">Dashboard</h1>
					</Link>
					{param !== "dashboard" && (
						// display current path if its not dashboard
						<div className="text-2xl font-light">{capitalizedParam}</div>
					)}
				</div>
				<p className="font-light">
					Welcome back, <span className="font-medium">Matt</span>
				</p>
			</div>

			<div className="flex flex-row gap-4 pb-2 max-h-[480px]">
				{/* cards */}
				<div className="flex flex-col gap-4">
					<Card title="Go paperless!" variant={"primary"}>
						<div className="flex flex-col gap-2">
							<hr />
							<p>Enroll in paperless billing and save $10 a month!</p>
							<div className="flex gap-2">
								<button className="flex-1 text-white duration-300 rounded-md hover:bg-indigo-500">
									Not now
								</button>
								<button className="flex-initial p-2 text-indigo-600 duration-300 bg-white rounded-md min-w-min hover:bg-indigo-500 hover:text-white">
									Enroll me in paperless billing
								</button>
							</div>
						</div>
					</Card>
					<Card
						variant={"default"}
						title="Your plan"
						subtitle="View plans"
						href="/dashboard/plans"
					>
						<hr className="mb-2" />
						<div className="flex items-center justify-between">
							<div className="font-medium text-indigo-600">Max</div>
							<div>Unlimited talk, text and 5G data</div>
						</div>
					</Card>
					<Card
						variant={"default"}
						title="Bill"
						subtitle="View statement"
						href="/dashboard/bill"
					>
						<hr className="pb-2" />
						<div className="flex items-center justify-between">
							<div className="font-medium text-indigo-600">$70</div>
							<div>Due 1 April, 2023</div>
						</div>
					</Card>
					<Card
						variant={"default"}
						title="Account"
						subtitle="View account"
						href="/dashboard/account"
					>
						<hr className="pb-2" />
						<div className="flex items-center justify-between">
							<div className="font-medium text-indigo-600">Matt Thomas</div>
							<div>Member since January 2023</div>
						</div>
					</Card>
				</div>

				{/* page content */}
				<div className="flex-1 rounded-md content-shadow bg-[#00000014]">{children}</div>
			</div>
		</main>
	);
};

export default Dashboard;

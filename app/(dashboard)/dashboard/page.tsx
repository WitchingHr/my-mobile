"use client";

import Card from "@/app/components/Card";
import Link from "next/link";

interface pageProps {}

const Dashboard: React.FC<pageProps> = ({}) => {
	return (
		<main className="flex flex-col gap-4 p-2">
			<div className="flex flex-col items-start w-full sm:items-center sm:justify-between sm:flex-row">
				<h1 className="text-2xl font-medium">Dashboard</h1>
				<p>Welcome back, Matt</p>
			</div>

			<div className="flex flex-row gap-4">

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
						href="/plans"
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
						href="/bill"
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
						href="/account"
					>
						<hr className="pb-2" />
						<div className="flex items-center justify-between">
							<div className="font-medium text-indigo-600">Matt Thomas</div>
							<div>Member since January 2023</div>
						</div>
					</Card>
				</div>

        {/* content */}
        <div className="flex-1 border"></div>
			</div>
		</main>
	);
};

export default Dashboard;

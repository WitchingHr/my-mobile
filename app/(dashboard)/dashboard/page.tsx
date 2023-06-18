import Link from "next/link";

interface pageProps {}

const Dashboard: React.FC<pageProps> = ({}) => {
	// check for authentification

	return (
		<div className="relative h-full overflow-hidden rounded-md group">
			<video autoPlay muted loop className="object-cover w-full h-full duration-300 transform group-hover:scale-110">
				<source src="phone.mp4" type="video/mp4" />
			</video>
			<div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-50"></div>
			<div className="absolute flex flex-col duration-300 opacity-0 top-2 right-4 group-hover:opacity-100">
				<Link className="text-5xl font-medium text-right text-white transition-transform duration-300 delay-100 -translate-x-96 hover:text-[#00ff08] group-hover:translate-x-0" href="/dashboard/plans">View Plans</Link>
				<Link className="text-5xl font-medium text-right text-white transition-transform duration-300 delay-200 -translate-x-96 hover:text-[#00ff08] group-hover:translate-x-0" href="/dashboard/bill">View Bill</Link>
				<Link className="text-5xl font-medium text-right text-white transition-transform duration-300 delay-300 -translate-x-96 hover:text-[#00ff08] group-hover:translate-x-0" href="/dashboard/account">View Account</Link>
			</div>
		</div>
	);
};

export default Dashboard;
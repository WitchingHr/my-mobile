"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { MdDeleteForever, MdEdit, MdKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";

import Modal from "@/app/components/Modal";
import useModal from "@/app/hooks/useModal";

// props
interface LineClientProps {}

const LineClient: React.FC<LineClientProps> = ({}) => {
	// modal view state
	const lineModal = useModal();

	// form state
	const [name, setName] = useState("Android");
	const [number, setNumber] = useState("999-999-9999");

	// phone number input formatter
	const updateNumber = (value: string) => {
		// remove all non-numeric characters
		const number = value.replace(/\D/g, "");
		// format number
		const formattedNumber = number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
		// check if number is too long
		if (value.length > 11) return;
		// update state
		setNumber(formattedNumber);
	};

	// modal content
	const body = (
		// form to edit line name
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				
				{/* line name */}
				<label htmlFor="name" className="text-sm text-neutral-600">
					Line name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="w-full px-3 py-2 border rounded-md border-neutral-300 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none"
				/>
				
				{/* phone number */}
				<label htmlFor="number" className="text-sm text-neutral-600">
					Phone number
				</label>
				<input
					type="tel"
					name="number"
					id="number"
					value={number}
					onChange={(e) => updateNumber(e.target.value)}
					className="w-full px-3 py-2 border rounded-md border-neutral-300 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none"
				/>
			</div>
		</div>
	);

	// ref and state for data bar
	const dataRef = useRef<HTMLDivElement>(null);
	const [percentage, setPercentage] = useState<number>(0);

	// calculate data bar width
	useEffect(() => {
		const calculateWidth = () => {
			// get empty bar width
			const containerBarWidth = dataRef.current?.offsetWidth;
			if (!containerBarWidth) return;
			// calculate width of used data bar
			let dataBarWidth = (10 / 25) * containerBarWidth; // (current data) / (max data) * containerBarWidth
			// don't let data bar exceed container bar
			if (dataBarWidth > containerBarWidth) dataBarWidth = containerBarWidth;
			// set width
			setPercentage(dataBarWidth);
		};

		// get initial width
		calculateWidth();

		// recalculate width on resize
		window.addEventListener("resize", calculateWidth);
		return () => window.removeEventListener("resize", calculateWidth);
	}, []);

	return (
		<>
			<div className="h-full p-2">
				<div className="flex flex-col h-full p-3 bg-white border rounded-md border-slate-400 card-shadow">
					<div className="pb-4">

						{/* device name */}
						<div className="relative flex items-center gap-2">
							<div className="text-4xl font-bold text-neutral-700">Android</div>

							{/* open modal to edit line name */}
							<button
								onClick={lineModal.onOpen}
								title="Edit"
								className="absolute top-1 right-2"
							>
								<MdEdit className="inline-block w-8 h-8 text-neutral-700" />
							</button>
						</div>

						{/* device number */}
						<div className="text-sm text-light text-neutral-600">
							999-999-9999
						</div>
					</div>

					<div className="gap-4 pb-4 detail-grid">

						{/* usage */}
						<div className="flex flex-col flex-1 gap-4">
							<div>
								<h2 className="text-2xl font-semibold text-neutral-700">
									Usage
								</h2>
								<hr />
							</div>
							<div className="flex flex-col items-center gap-4">

								{/* cycle reset date */}
								<div>Data resets Jul 09, 2023</div>
								
								{/* data amount */}
								<div className="flex items-baseline gap-2">
									<div className="text-4xl font-light whitespace-nowrap">
										10GB /
									</div>
									<div className="text-4xl font-bold text-center text-neutral-700">
										25GB
									</div>
								</div>
							</div>
							
							{/* data bar */}
							<div className="relative">
								<div
									className="absolute z-10 border border-indigo-600 data-gradient h-11"
									style={{ width: `${percentage}px` }}
								></div>
								<div ref={dataRef} className="border border-black h-11"></div>
							</div>
						</div>

						{/* i want to... */}
						<div className="flex flex-col flex-1 gap-4">
							<div>
								<h2 className="text-2xl font-semibold text-neutral-700">
									I want to...
								</h2>
								<hr />
							</div>

							{/* remove line */}
							<Link href="/" className="flex group">
								<MdDeleteForever className="inline-block w-6 h-6 mr-2 text-neutral-700" />
								<div className="text-indigo-600 group-hover:underline">
									Remove line
								</div>
							</Link>

       				{/* upgrade device */}
							<Link href="/" className="flex group">
								<HiOutlineDeviceMobile className="inline-block w-6 h-6 mr-2 text-neutral-700" />
								<div className="text-indigo-600 group-hover:underline">
									Upgrade device
								</div>
							</Link>
						</div>
					</div>

					<Link href={"/dashboard/account"} className="flex items-center gap-2 mt-auto group">
						<MdKeyboardArrowLeft className="inline-block w-6 h-6" />
						<div className="text-indigo-600 group-hover:underline">Back to account</div>
					</Link>
				</div>
			</div>

			{/* modal for editing line name and number */}
			<Modal
				isOpen={lineModal.isOpen}
				onClose={lineModal.onClose}
				title="Edit line"
				description="Change the name of this line"
				body={body}
				label="Save"
				action={lineModal.onClose}
			/>
		</>
	);
};

export default LineClient;

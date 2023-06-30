"use client";

import Modal from "@/app/components/Modal";
import useModal from "@/app/hooks/useModal";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  // eslint-disable-next-line
	const lineModal = useModal();

  // eslint-disable-next-line
  const [name, setName] = useState("Android");

  const body = (
    // form to edit line name
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
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
      </div>
    </div>
  );

	const footer = (
		<div className="flex justify-end gap-2">
			<button
				onClick={lineModal.onClose}
				className="px-4 py-2 text-sm border rounded-md text-neutral-600 border-neutral-300 hover:border-neutral-400 hover:text-neutral-700 focus:outline-none focus:ring-1 focus:ring-primary-600"
			>
				Cancel
			</button>
			<button
				onClick={lineModal.onClose}
				className="px-4 py-2 text-sm text-white border rounded-md bg-primary-600 border-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-600"
			>
				Save
			</button>
		</div>
	);

	return (
		<>
			<div className="h-full p-2">
				<div className="h-full p-3 bg-white border rounded-md border-slate-400 card-shadow">
					{/* device name */}
					<div className="flex items-center gap-2">
						<div className="text-4xl font-bold text-neutral-700">Android</div>

						{/* open modal to edit line name */}
						<button onClick={lineModal.onOpen}>
							<MdEdit className="inline-block w-8 h-8 text-neutral-400" />
						</button>
					</div>
					{/* device number */}
					<div className="text-sm text-light text-neutral-600">
						999-999-9999
					</div>
					<hr />
				</div>
			</div>
			<Modal
				isOpen={lineModal.isOpen}
				onClose={lineModal.onClose}
				title="Edit line"
				description="Change the name of this line"
				body={body}
				footer={footer}
			/>
		</>
	);
};


export default page;

"use client";

import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

interface ModalProps {
	title: string;
	description: string;
	body: React.ReactNode;
	label: string;
	action: () => void;
	isOpen: boolean;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
	title,
	description,
	body,
	label,
	action,
	isOpen,
	onClose,
}) => {
	// state for animation
	const [showModal, setShowModal] = useState(isOpen);

	// animate modal on open
	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	// animate modal on close
	const animateOut = () => {
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	};

	// don't render if modal is closed
	if (!isOpen) return null;

	return (
		<div className="absolute top-0 z-10 w-full h-full p-2">
			<div className="relative h-full overflow-hidden border rounded-md modal-gradient bg-black/20 border-slate-400 card-shadow">
				<div
					className={`flex flex-col gap-4 h-full p-3 bg-white duration-300
            ${
              showModal
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
          `}
				>
					<div>
						<div className="text-4xl font-bold text-neutral-700">{title}</div>
						{/* close modal */}
						<button onClick={animateOut} className="absolute top-6 right-6">
							<GrClose className="w-6 h-6 text-neutral-700" />
						</button>
						<div className="text-sm text-light text-neutral-600">
							{description}
						</div>
						<hr />
					</div>
					{body}
					<div className="flex gap-2 mt-auto">
						<button
							className="ml-auto p-2 max-w-[100px] flex-1 border border-neutral-300 rounded-bl-md"
							onClick={animateOut}
						>
							Cancel
						</button>
						<button
							className="p-2 max-w-[100px] flex-1 text-white bg-indigo-600 rounded-br-md"
							onClick={action}
						>
							{label}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

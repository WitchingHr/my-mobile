"use client";

import { cn } from "@/lib/util";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const arrowButtonVariants = cva(
	// base class
	"flex items-center justify-center w-full h-12 mt-auto text-white duration-300 font-semibold bg-indigo-600 group hover:bg-indigo-800",
	{
		// define variants
		variants: {
			variant: {
				default: "bg-indigo-600 plan-button",
				secondary:
					"bg-white text-neutral-700 plan-button-secondary border border-neutral-700 hover:bg-neutral-200",
			},
		},
		// define default variant
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface ArrowButtonProps
	extends HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof arrowButtonVariants> {
	label: string;
	action?: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
	className,
	variant,
	label,
	action,
	...props
}) => {
	return (
		<button
			onClick={action}
			className={cn(arrowButtonVariants({ variant, className }))}
			{...props}
		>
			<div className="duration-300 group-hover:-translate-x-2">{label}</div>
		</button>
	);
};

export default ArrowButton;

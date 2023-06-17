"use client"

import { cn } from "@/lib/util";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

const cardVariants = cva(
  // base class
  "max-w-sm border border-white rounded-md overflow-hidden card-shadow",
  {
    // define variants
    variants: {
      variant: {
        default: "bg-white",
        primary: "bg-indigo-600 text-white",
      },
    },
    // define default variant
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CardProps extends
  HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> {
    title: string;
    subtitle?: string;
    href?: string;
  }

const Card: React.FC<CardProps> = ({
  className,
  variant,
  title,
  subtitle,
  href,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(cardVariants({ variant, className }))}
      {...props}
    >
      <div className="p-4 card-shadow-inner">
        <div className="flex items-center justify-between pb-1">
          <h2 className="text-lg font-medium">{title}</h2>
          {subtitle && href && (
            <Link href={href} className="text-sm font-light hover:underline">{subtitle}</Link>
          )}
        </div>
        <div className="flex flex-col text-sm font-light">{children}</div>
      </div>
    </div>
  );
};

export default Card;

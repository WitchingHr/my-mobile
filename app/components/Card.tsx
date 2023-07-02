"use client"

import Link from "next/link";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/util";
import { VariantProps, cva } from "class-variance-authority";
import { IconType } from "react-icons";

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
    icon?: IconType;
  }

const Card: React.FC<CardProps> = ({
  className,
  variant,
  title,
  subtitle,
  href,
  icon: Icon,
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
          <div className="flex items-center gap-2">
            {/* icon */}
            {Icon && (
              <Icon className="text-indigo-600 w-7 h-7" />
            )}
            <h2 className="text-lg font-medium">{title}</h2>
          </div>
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

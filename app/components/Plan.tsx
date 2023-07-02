"use client"

import { ImPriceTag } from "react-icons/im";

import ArrowButton from "@/app/components/ArrowButton";

interface planProps {
  title: string;
  price: number;
  reducedPrice: number;
  description: string;
  features: string[];
  taxed?: boolean;
}

const Plan: React.FC<planProps> = ({
  title,
  price,
  reducedPrice,
  description,
  features,
  taxed = false,
}) => {
  return (
    <div className="flex flex-col bg-white border rounded-md border-slate-400 card-shadow">
      {/* 3rd line free */}
      <div className="flex items-center gap-2 p-2 text-sm border-b cursor-pointer bg-slate-100 border-slate-400 rounded-t-md">
        <ImPriceTag className="inline-block w-4 h-4 text-indigo-600" />
        <div className="border-b border-black border-dotted hover:border-solid">Get a 3rd line FREE</div>
      </div>
      <div className="flex flex-col flex-1 gap-3 p-3">
        {/* plan title */}
        <h3 className="text-2xl font-semibold border-b">{title}</h3>
        {/* price per month */}
        <div className="flex items-end">
          <div className="font-semibold">
            <span className="text-sm leading-6 align-top">$</span>
            <span className="text-4xl">{price}</span>
          </div>
          <div className="flex gap-1">
            <span>/mo.</span>
            <span className="line-through text-neutral-500">${reducedPrice}/mo</span>
          </div>
        </div>
        {/* taxes and fees */}
        {!taxed && (
          <div className="p-1 text-sm text-white bg-black max-w-min whitespace-nowrap">Taxes & fees included</div>
        )}
        {/* plan details */}
        <p>{description}</p>
      
        {/* plan features */}
        <div className="font-bold">Includes:</div>
        <ul className="list-disc list-inside">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        {/* select plan button */}
        <ArrowButton className="rounded-b-md" label="Select phone plan" />
      </div>
    </div>
  );
};

export default Plan;

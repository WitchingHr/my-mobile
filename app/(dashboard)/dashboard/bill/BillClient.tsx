"use client"

import ArrowButton from "@/app/components/ArrowButton";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";

interface BillClientProps {}

const BillClient: React.FC<BillClientProps> = ({}) => {
  return (
    <>
      <div className="h-full p-2 overflow-scroll">
        <div className="h-full p-3 overflow-scroll bg-white border rounded-md border-slate-400 card-shadow">

          {/* account holder */}
          <div className="text-4xl font-bold text-neutral-700">Matt Thomas</div>
          {/* account number */}
          <div className="text-sm text-light text-neutral-600">Account #9519701029</div>
          <div className="gap-4 detail-grid">
            {/* balance */}
            <div className="flex flex-col flex-1 gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-700">Current balance</h2>
                <hr />
              </div>
              {/* due date */}
              <div className="text-center">Due in 9 days ( July 9 )</div>
              {/* amount due */}
              <div className="text-4xl font-bold text-center text-neutral-700">$54.61</div>

              {/* autopay */}
              <div className="flex items-center gap-4">
                <AiFillCheckCircle className="inline w-6 h-6 text-green-500" />
                <div className="flex flex-col">
                  <div className="flex gap-1 font-medium">
                    <div className="text-indigo-600">Autopay</div>
                    <div className="text-neutral-700">scheduled for July 07, 2023</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCcVisa className="inline w-6 h-6 text-neutral-700" />
                    <div className="text-sm text-neutral-600">ending in 4242</div>
                  </div>
                </div>
              </div>

              {/* make payment button */}
              <ArrowButton label="Make a payment" />
            </div>

            {/* bill breakdown */}
            <div className="flex flex-col flex-1 gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-700">Bill breakdown</h2>
                <hr />
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-neutral-600">Plan × ( 1 device )</div>
                <div className="text-sm text-neutral-600">$60.00</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-neutral-600">Paperless billing</div>
                <div className="text-sm text-green-500">-$5.00</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-neutral-600">Previous balance</div>
                <div className="text-sm text-neutral-600">$0.00</div>
              </div>
              <hr />
              <div className="flex justify-between font-medium">
                <div className="text-sm text-neutral-600">Total due</div>
                <div className="text-sm text-neutral-600">$55.00</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default BillClient;

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { IoMdSwap } from "react-icons/io";
import { MdLibraryAdd } from "react-icons/md";

import Line from "../../../components/Line";
import ArrowButton from "@/app/components/ArrowButton";
import Modal from "@/app/components/Modal";
import useModal from "@/app/hooks/useModal";

interface AccountClientProps {}

const AccountClient: React.FC<AccountClientProps> = ({}) => {
  const router = useRouter();
  const modal = useModal();

  // modal content
  const body = (<>Body</>);

  return (
    <>
      <div className="h-full p-2 overflow-scroll">
        <div className="p-3 bg-white border rounded-md border-slate-400 card-shadow">
          <div className="text-4xl font-bold text-neutral-700">Matt Thomas</div>
          <div className="text-sm text-light text-neutral-600">Account #9519701029</div>

          <div className="gap-4 detail-grid">
            {/* balance */}
            <div className="flex flex-col flex-1 gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-700">Balance</h2>
                <hr />
              </div>
              <div className="text-center">Due Jul 09, 2023</div>
              <div className="text-4xl font-bold text-center text-neutral-700">$54.61</div>
              <ArrowButton label="Make a payment" />
              <ArrowButton variant={"secondary"} label="View bill" action={() => (router.push("/dashboard/bill"))} />
            </div>
            {/* i want to... */}
            <div className="flex flex-col flex-1 gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-700">I want to...</h2>
                <hr />
              </div>

              <Link href="/dashboard/plans" className="flex group">
                <IoMdSwap className="inline-block w-6 h-6 mr-2 text-neutral-700" />
                <div className="text-indigo-600 group-hover:underline">Change my plan</div>
              </Link>

              <button onClick={modal.onOpen} className="flex group">
                <MdLibraryAdd className="inline-block w-6 h-6 mr-2 text-neutral-700" />
                <div className="text-indigo-600 group-hover:underline">Add person or device to my account</div>
              </button>
            </div>
          </div>

          {/* my lines */}
          <div className="flex flex-col mt-4">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-700">My lines</h2>
              <hr />
            </div>
            <ul>
              {/* map over each device */}
              <Line id="x4d" />
              <Line id="x6j" />
            </ul>
          </div>
        </div>

      </div>
      <Modal
        title="Add new line"
        description="Add a new line to your account"
        label="Add line"
        action={() => router.push("/dashboard/plans")}
        body={body}
        isOpen={modal.isOpen}
        onClose={modal.onClose}
      />
    </>
  );
};

export default AccountClient;

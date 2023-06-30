import Link from "next/link";
import { IoMdSwap } from "react-icons/io";
import { MdLibraryAdd } from "react-icons/md";
import Line from "./components/Line";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="h-full p-2">
      <div className="h-full p-3 bg-white border rounded-md border-slate-400 card-shadow">
        <div className="text-4xl font-bold text-neutral-700">Matt Thomas</div>
        <div className="text-sm text-light text-neutral-600">Account #9519701029</div>

        <div className="flex gap-4">
          {/* balance */}
          <div className="flex flex-col flex-1 gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-700">Balance</h2>
              <hr />
            </div>
            <div className="text-center">Due Jul 09, 2023</div>
            <div className="text-4xl font-bold text-center text-neutral-700">$54.61</div>
            <button className="py-2 font-semibold text-white bg-indigo-600">Make a payment</button>
            <Link href="/dashboard/bill" className="py-2 font-semibold text-center border border-black text-neutral-700">View bill</Link>
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

            <Link href="/dashboard/plans" className="flex group">
              <MdLibraryAdd className="inline-block w-6 h-6 mr-2 text-neutral-700" />
              <div className="text-indigo-600 group-hover:underline">Add person or device to my account</div>
            </Link>
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
          </ul>
        </div>
      </div>

    </div>
  );
};

export default page;

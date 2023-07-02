"use client"

import { useEffect, useState } from "react";

import { TbFilePhone } from "react-icons/tb";
import { MdAccountCircle, MdPayment } from "react-icons/md";

import SidebarLink from "./SidebarLink";
import Card from "./Card";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  // state for mobile view
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.matchMedia('(max-width: 740px)').matches
  );

  // update state on viewport resize
  useEffect(() => {
    // query for viewport size
    const mediaQuery = window.matchMedia('(max-width: 740px)');

    // update state on viewport resize
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // event listener for viewport resize
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  const [selected, setSelected] = useState<number>(0);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col gap-4">
          <SidebarLink
            id={1}
            title="Plans"
            selected={selected}
            setSelected={setSelected}
            icon={TbFilePhone}
            href="/dashboard/plans"
          />
          <SidebarLink
            id={2}
            title="Bill"
            selected={selected}
            setSelected={setSelected}
            icon={MdPayment}
            href="/dashboard/bill"
          />
          <SidebarLink
            id={3}
            title="Account"
            selected={selected}
            setSelected={setSelected}
            icon={MdAccountCircle}
            href="/dashboard/account"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <Card title="Go paperless!" variant={"primary"}>
            <div className="flex flex-col gap-2">
              <hr />
              <p>Enroll in paperless billing and save $10 a month!</p>
              <div className="flex gap-2">
                <button className="flex-1 text-white duration-300 rounded-bl-md hover:bg-indigo-500">
                  Not now
                </button>
                <button className="flex-initial p-2 text-indigo-600 duration-300 bg-white rounded-br-md min-w-min hover:bg-indigo-500 hover:text-white">
                  Enroll me in paperless billing
                </button>
              </div>
            </div>
          </Card>
          <Card
            variant={"default"}
            title="Your plan"
            subtitle="View plans"
            href="/dashboard/plans"
            icon={TbFilePhone}
          >
            <hr className="mb-2" />
            <div className="flex items-center justify-between">
              <div className="font-medium text-indigo-600">Max</div>
              <div>Unlimited talk, text and 5G data</div>
            </div>
          </Card>
          <Card
            variant={"default"}
            title="Bill"
            subtitle="View statement"
            href="/dashboard/bill"
            icon={MdPayment}
          >
            <hr className="pb-2" />
            <div className="flex items-center justify-between">
              <div className="font-medium text-indigo-600">$70</div>
              <div>Due 1 April, 2023</div>
            </div>
          </Card>
          <Card
            variant={"default"}
            title="Account"
            subtitle="View account"
            href="/dashboard/account"
            icon={MdAccountCircle}
          >
            <hr className="pb-2" />
            <div className="flex items-center justify-between">
              <div className="font-medium text-indigo-600">Matt Thomas</div>
              <div>Member since January 2023</div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Sidebar;

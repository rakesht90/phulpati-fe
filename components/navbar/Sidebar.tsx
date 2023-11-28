import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const menu = [
    { name: "Dashboard", link: "/", icon: RxDashboard },
    { name: "User", link: "/", icon: FaRegUser },
    { name: "Messages", link: "/", icon: FaRegMessage },
    { name: "Analytics", link: "/", icon: MdOutlineAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: CiFolderOn },
    { name: "Cart", link: "/", icon: CiShoppingCart },
    { name: "Saved", link: "/", icon: IoSaveOutline, margin: true },
    { name: "Settings", link: "/", icon: IoSettingsOutline },
  ];
  return (
    <>
      <div
        className={`bg-cyan-700 min-h-screen ${
          open ? "w-72" : "w-20"
        }  text-gray-50 px-4 duration-300`}
      >
        <div className="py-3 flex justify-end p-2">
          <IoMdMenu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex mt-4 flex-col gap-4 relative">
          {menu?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={`${
                menu.margin && "mt-5"
              } flex items-center gap-3.5 font-medium hover:bg-gray-800 p-2 text-sm rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }whitespace-pre`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default SideBar;

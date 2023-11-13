"use client";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { TbSchool } from "react-icons/tb";
import { FaListUl } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { PiNewspaper } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlinePieChart } from "react-icons/ai";
export default function page() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", icon: RxDashboard },
    { title: "Discover", src: "Chat", icon: BsFillGrid3X3GapFill },
    { title: "My Exams", src: "User", gap: true, icon: PiNewspaper },
    { title: "New Exams", src: "Calendar", icon: TfiWrite },
    { title: "Analytics", src: "Chart", icon: AiOutlinePieChart },
    { title: "Files", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div>
      <nav className="bg-gray-900 fixed p-4 w-full z-10">
        <FaListUl
          className={` cursor-pointer w-7 text-3xl text-white`}
          onClick={() => setOpen(!open)}
        />
      </nav>
      <div className="flex h-full w-[100%]">
        <div
          className={`${open ? "w-72 sm:w-72" : "w-0 p-0 sm:w-16 sm:p-1"} 
                    font-poppins bg-[#191927] h-full  pt-24 duration-300 fixed overflow-y-scroll scrollbar-hide`}
        >
          <div className="flex gap-y-4 items-center flex-col">
            <TbSchool
              className={` text-white cursor-pointer duration-500 ${
                open && "rotate-[360deg] text-[6rem]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Fetagne
            </h1>
          </div>
          <ul className="pt-6 p-0">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-md items-center gap-x-1 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <RxDashboard className="text-3xl" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

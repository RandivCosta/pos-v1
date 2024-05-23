"use client"

import { links } from "@/constants"
import { Menu } from "lucide-react";
import Link from "next/link"
import { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-gray-800 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <span
            className={
              open
                ? "mx-auto text-xl font-black leading-none text-gray-100 select-none mt-1"
                : "hidden"
            }
          >
            CeyInfo<span className="text-indigo-600">POS</span>
          </span>
          <Menu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {links.map((link, i) => (
            <button
              key={i}
              className={"mt-5 group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-600 rounded-md"}
            >
              <div></div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {link.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {link.name}
              </h2>
            </button>
          ))}
          <button
            className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-600 rounded-md mt-5"
            
          >
            <div></div>
            <h2
              style={{
                transitionDelay: `500ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Logout
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Logout
            </h2>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
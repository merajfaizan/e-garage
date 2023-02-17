import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? "w-72" : "w-16"
      } h-screen bg-dark-purple text-white relative duration-300 p-5 pt-12`}
    >
      <span
        className={`absolute cursor-pointer rounded-full -right-3 top-4 w-7 border-2 border-dark-purple bg-white text-black p-1 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        <FiArrowLeft />
      </span>
      <div className="flex items-center gap-x-4">
        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
          <svg
            class="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <h2
            className={`font-semibold font-serif origin-left duration-300 ${
              !open && "scale-0"
            }`}
          >
            Meraj Faizan
          </h2>
          <h4 className={`origin-left duration-300 ${!open && "scale-0"}`}>
            Role: owner
          </h4>
        </div>
      </div>
      <ul className="pt-6">
        <li className="className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
          Home
        </li>
        <li className="className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
          Cars
        </li>
        <li className="className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
          Entry
        </li>
        <li className="className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
          Garage Cost
        </li>
        <li className="className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
          User
        </li>
        <li className="className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
          Dark Mode
        </li>
        <li className="className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

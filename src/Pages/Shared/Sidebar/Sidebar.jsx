import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import user from "../../../Assests/icons/user.png";
import MenuItem from "./component/MenuItem";
import home from "../../../Assests/icons/home.png";
import car from "../../../Assests/icons/car.png";
import entry from "../../../Assests/icons/entry.png";
import reduceCost from "../../../Assests/icons/reduceCost.png";
import sun from "../../../Assests/icons/sun.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "Home", logo: home },
    { title: "Cars", logo: car },
    { title: "Entry", logo: entry },
    { title: "Cost", logo: reduceCost },
    { title: "Mode", logo: sun },
  ];
  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } h-screen bg-gradient-to-tr from-[#2cc791] to-[#00B5E0] p-5 pt-8 text-white relative duration-300 `}
    >
      {/* this span is for floating arrow to open or close the menu */}
      <span
        className={`absolute cursor-pointer rounded-full -right-3 top-4 w-7 border-2 border-[#00EA99] bg-white text-[#00B5E0] p-1 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        <FiArrowLeft />
      </span>
      {/* Profile section in sidebar */}
      <div className="flex items-center gap-x-4">
        <img
          className={`bg-white cursor-pointer border-2 border-[#00ea98] duration-500 p-1 ${
            open && "w-10 h-10"
          } rounded-full`}
          src={user}
          alt="user"
        />
        <div className={`origin-left duration-500 ${!open && "scale-0"}`}>
          <h2 className={`font-medium text-xl font-serif `}>Meraj Faizan</h2>
          <h4>Role: owner</h4>
        </div>
      </div>
      {/* Menus of sidebar */}
      <ul className="pt-6">
        {menus.map((menu, idx) => {
          return <MenuItem key={idx} menu={menu} menuStatus={open} />;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

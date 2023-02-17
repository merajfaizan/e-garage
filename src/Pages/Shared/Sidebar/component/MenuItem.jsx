import React from "react";

const MenuItem = ({ menu, menuStatus }) => {
  return (
    <li className="flex items-center text-sm gap-x-4 cursor-pointer text-gray-300 p-2 hover:bg-light-white rounded-md">
      <img
        className={`${menuStatus && "w-6 h-6"} shadow-lg rounded-full`}
        src={menu.logo}
        alt="icon"
      />
      <span
        className={`text-white text-lg font-medium origin-left duration-500  ${
          !menuStatus && "scale-0"
        }`}
      >
        {menu.title}
      </span>
    </li>
  );
};

export default MenuItem;

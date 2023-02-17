import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Pages/Shared/Header/Header";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <section className="flex">
      <Sidebar></Sidebar>
      <div className="w-full">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Main;

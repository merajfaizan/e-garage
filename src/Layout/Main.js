import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <section>
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;

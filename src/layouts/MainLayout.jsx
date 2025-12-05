import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav className="">
        <Navbar></Navbar>
      </nav>
      <main className="">
        <Outlet></Outlet>
      </main>
      <hr />
    </div>
  );
};

export default MainLayout;

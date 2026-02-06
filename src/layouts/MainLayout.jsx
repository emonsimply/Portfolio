import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/shared/WhatsAppButton";
import ScrollSteps from "../components/shared/ScrollSteps";

const MainLayout = () => {
  return (
    <div>
      {/* <ScrollSteps /> */}
      <WhatsAppButton />
      <nav className="">
        <Navbar></Navbar>
      </nav>
      <main className="">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

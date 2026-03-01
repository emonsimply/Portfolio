import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/shared/WhatsAppButton";
import ScrollSteps from "../components/shared/ScrollSteps";
import ScrollToTop from "../components/shared/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      {/* <ScrollSteps /> */}
      <ScrollToTop />
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

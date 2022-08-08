import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;

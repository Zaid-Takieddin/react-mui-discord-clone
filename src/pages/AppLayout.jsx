import React from "react";
import { Outlet } from "react-router-dom";
import FriendsNav from "../components/AppHome/FriendsNav";

const AppLayout = () => {
  return (
    <>
      <FriendsNav />
      <Outlet />
    </>
  );
};

export default AppLayout;

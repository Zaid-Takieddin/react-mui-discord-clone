import { Box, Stack } from "@mui/material";
import React from "react";
import Content from "../components/AppHome/Content";
import LeftBar from "../components/AppHome/LeftBar";
import RightBar from "../components/AppHome/RightBar";
import ServersBar from "../components/AppHome/ServersBar";

const AppHome = () => {
  return (
    <Box display="flex" width="100%">
      <ServersBar />
      <LeftBar />
      <Content />
      <RightBar />
    </Box>
  );
};

export default AppHome;

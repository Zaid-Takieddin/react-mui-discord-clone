import { Avatar, Box, Divider, styled } from "@mui/material";
import React from "react";

const ServersBar = () => {
  const StyledBox = styled(Box)({});
  const ParentBox = styled(Box)({
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      "& .style": {
        height: "20px",
        position: "absolute",
        left: "-5px",
        width: "10px",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        transition: "width 250ms, height 250ms, background-color 250ms",
      },
      "& .avatar": {
        borderRadius: "16px",
      },
    },
  });
  const StyledAvatar = styled(Avatar)({
    width: "70%",
    height: "auto",
    cursor: "pointer",
    transition: "border-radius 250ms",
    "&:hover": {},
  });
  return (
    <Box width="5%" height="100vh" bgcolor="#202225">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="16px 0px"
        gap="10px"
      >
        <ParentBox position="relative" display="flex">
          <StyledBox className="style"></StyledBox>
          <StyledAvatar className="avatar" src="discord.png" />
        </ParentBox>
        <Divider
          sx={{ backgroundColor: "#373A3F", height: "3px", margin: "0px 16px" }}
          flexItem
        />
        <ParentBox position="relative" display="flex">
          <StyledBox className="style"></StyledBox>
          <StyledAvatar className="avatar" src="dota2.jpg" />
        </ParentBox>
        <ParentBox position="relative" display="flex">
          <StyledBox className="style"></StyledBox>
          <StyledAvatar className="avatar" src="csgo.png" />
        </ParentBox>
        <ParentBox position="relative" display="flex">
          <StyledBox className="style"></StyledBox>
          <StyledAvatar className="avatar" src="minecraft.jpg" />
        </ParentBox>
      </Box>
    </Box>
  );
};

export default ServersBar;

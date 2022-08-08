import { Box, Divider, InputBase, Stack, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import React from "react";
import { styled } from "@mui/system";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import InboxIcon from "@mui/icons-material/Inbox";
import HelpIcon from "@mui/icons-material/Help";

const FriendsNav = () => {
  const StyledHelpIcon = styled(HelpIcon)({
    fontSize: "2.1875rem",
    "&:hover": {
      color: "#FFFFFF",
      cursor: "pointer",
    },
  });
  const StyledInboxIcon = styled(InboxIcon)({
    fontSize: "2.1875rem",
    "&:hover": {
      color: "#FFFFFF",
      cursor: "pointer",
    },
  });
  const StyledChatBubbleIcon = styled(ChatBubbleIcon)({
    fontSize: "2.1875rem",
    "&:hover": {
      color: "#FFFFFF",
      cursor: "pointer",
    },
  });
  const StyledItem = styled(Box)({
    width: "fit-content",
    height: "fit-content",
    padding: "4px 8px",
    borderRadius: "6px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#454950",
    },
    "&:active": {
      color: "#FFFFFF",
      backgroundColor: "#454950",
    },
  });
  return (
    <Stack position="fixed" width="95%" marginLeft="5%" direction="row">
      <Box
        bgcolor="#2F3136"
        width="21.1%"
        display="flex"
        borderBottom="1px solid #232527"
      >
        <Box padding="8px" width="100%">
          <InputBase
            sx={{
              backgroundColor: "#202225",
              width: "100%",
              padding: "2px 6px",
              color: "#A3A69D",
              borderRadius: "5px",
            }}
            placeholder="Find or start conversation"
          />
        </Box>
      </Box>
      <Box
        width="79%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#36393F"
        borderBottom="1px solid #2F3136"
      >
        <Stack
          padding="8px 16px"
          direction="row"
          gap="24px"
          color="#8E9297"
          alignItems="center"
          justifyContent="center"
          fontSize="18px"
        >
          <GroupIcon fontSize="large" />
          <Typography fontSize="18px" color="#FFFFFF" fontWeight="500">
            Friends
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#8E9297", margin: "5px 0px" }}
          />
          <StyledItem>Online</StyledItem>
          <StyledItem>All</StyledItem>
          <StyledItem>Pending</StyledItem>
          <StyledItem>Blocked</StyledItem>
          <Box
            bgcolor="#3BA55D"
            color="#F9FBFA"
            padding="4px 8px"
            borderRadius="6px"
          >
            Add Friend
          </Box>
        </Stack>
        <Stack
          padding="8px 16px"
          direction="row"
          gap="24px"
          color="#8E9297"
          alignItems="center"
          justifyContent="center"
          fontSize="18px"
        >
          <StyledChatBubbleIcon />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#8E9297", margin: "5px 0px" }}
          />
          <StyledInboxIcon />
          <StyledHelpIcon />
        </Stack>
      </Box>
    </Stack>
  );
};

export default FriendsNav;

import { Search } from "@mui/icons-material";
import { Avatar, InputBase, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Content = () => {
  return (
    <Box
      width="50%"
      maxHeight="100vh"
      marginTop="52px"
      bgcolor="#36393F"
      color="#B9BBBE"
    >
      <Box padding="16px">
        <Box display="flex" flexDirection="column" gap="10px">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            position="relative"
          >
            <InputBase
              sx={{
                backgroundColor: "#202225",
                width: "100%",
                padding: "2px 8px",
                color: "#9A9DA1",
                borderRadius: "5px",
                fontSize: "18px",
              }}
              placeholder="Search"
            />
            <Search
              sx={{ position: "absolute", color: "#9A9DA1", right: "10px" }}
            />
          </Box>
          <Box marginTop="10px">
            <Typography>Online -- 2</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderTop="1px solid #42464D"
            padding="10px"
            borderRadius="10px"
            sx={{
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#42464D",
                "& .visible": {
                  display: "inline",
                },
                "& .bg": {
                  bgcolor: "#202225",
                },
              },
            }}
          >
            <Box display="flex" gap="10px" alignItems="center">
              <Avatar
                src="avatar.webp"
                sx={{ height: "50px", width: "50px", position: "relative" }}
              />
              <Box
                border="4px solid #2F3136"
                bgcolor="#3BA55D"
                borderRadius="100px"
                width="12px"
                height="12px"
                position="absolute"
                marginLeft="34px"
                marginTop="24px"
              />
              <Box>
                <Typography color="#FFFFFF" fontWeight="500">
                  Remy Howard
                  <Typography
                    component="span"
                    color="#B9BBBE"
                    display="none"
                    className="visible"
                  >
                    #4444
                  </Typography>
                </Typography>
                <Typography color="#AAACAF" fontSize="14px">
                  Listening to Spotify
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <Box
                borderRadius="50%"
                padding="10px"
                display="flex"
                alignItems="center"
                bgcolor="#2F3136"
                className="bg"
              >
                <ChatBubbleIcon sx={{ "&:hover": { color: "#FFFFFF" } }} />
              </Box>
              <Box
                borderRadius="50%"
                padding="10px"
                display="flex"
                alignItems="center"
                bgcolor="#2F3136"
                className="bg"
              >
                <MoreVertIcon sx={{ "&:hover": { color: "#FFFFFF" } }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;

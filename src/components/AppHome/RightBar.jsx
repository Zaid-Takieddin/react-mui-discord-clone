import { Avatar, Badge, Box, Paper, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      width="25%"
      bgcolor="#36393F"
      borderLeft="1px solid #42464D"
      marginTop="52px"
      maxHeight="100vh"
    >
      <Box padding="16px" display="flex" flexDirection="column" gap="10px">
        <Typography fontSize="24px" fontWeight="700" color="#FFFFFF">
          Active Now
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          border="1px solid #3F4248"
          borderRadius="6px"
          bgcolor="#2F3136"
          padding="16px"
          gap="10px"
          sx={{ "&:hover": { backgroundColor: "#18191C", cursor: "pointer" } }}
        >
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap="10px">
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
                <Typography color="#DCDDDE">Remy Howard</Typography>
                <Typography color="#AAACAF" fontSize="14px">
                  Listening to Spotify
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Avatar src="spotify.png" sx={{ alignSelf: "end" }} />
            </Box>
          </Box>
          <Box
            display="flex"
            padding="16px"
            gap="10px"
            bgcolor="#36393F"
            borderRadius="6px"
            color="#DCDDDE"
          >
            <Avatar
              src="verkkars.jfif"
              variant="square"
              sx={{ borderRadius: "4px" }}
            />
            <Box display="flex" flexDirection="column">
              <Typography>Flashbang Dance</Typography>
              <Typography fontSize="12px" color="#C8C9CB">
                The Verkkars
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightBar;

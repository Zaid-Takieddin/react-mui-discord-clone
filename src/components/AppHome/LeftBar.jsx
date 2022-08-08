import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadsetOffIcon from "@mui/icons-material/HeadsetOff";
const LeftBar = () => {
  const [muteMic, setMuteMic] = useState(false);
  const [muteHeadphone, setMuteHeadphone] = useState(false);
  return (
    <Box
      width="20%"
      marginTop="52px"
      maxHeight="100vh"
      bgcolor="#2F3136"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection="column"
        padding="8px"
        gap="2px"
        color="#96989D"
      >
        <Box
          borderRadius="10px"
          sx={{
            "&:hover": {
              backgroundColor: "#3C3F45",
              color: "#FFFFFF",
              cursor: "pointer",
            },
          }}
        >
          <Box display="flex" alignItems="center" gap="25px" padding="16px">
            <GroupIcon fontSize="large" />
            <Typography fontSize="18px">Friends</Typography>
          </Box>
        </Box>
        <Box
          borderRadius="10px"
          sx={{
            "&:hover": {
              backgroundColor: "#3C3F45",
              color: "#FFFFFF",
              cursor: "pointer",
            },
          }}
        >
          <Box display="flex" alignItems="center" gap="25px" padding="16px">
            <GroupIcon fontSize="large" />
            <Typography fontSize="18px">Nitro</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          margin="16px 0px 8px"
          padding="0px 8px"
          sx={{ "&:hover": { color: "#FFFFFF" } }}
        >
          <Typography colo>DIRECT MESSAGES</Typography>
          <AddIcon
            sx={{ color: "#FFFFFF", "&:hover": { cursor: "pointer" } }}
          />
        </Box>
        <Box
          borderRadius="10px"
          sx={{
            "&:hover": {
              backgroundColor: "#3C3F45",
              color: "#FFFFFF",
              cursor: "pointer",
            },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap="25px"
            padding="8px"
            justifyContent="space-between"
            sx={{
              "&:hover": {
                "& .visible": {
                  display: "block",
                },
              },
            }}
          >
            <Box display="flex" alignItems="center" gap="12px">
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
              <Typography fontSize="18px">Remy Howard</Typography>
            </Box>
            <ClearIcon
              className="visible"
              sx={{
                display: "none",
                color: "#96989D",
                "&:hover": {
                  color: "#FFFFFF",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        bgcolor="#292B2F"
        padding="10px"
        display="flex"
        gap="10px"
        alignItems="center"
      >
        <Avatar
          src="discord.png"
          sx={{
            height: "50px",
            width: "50px",
            position: "relative",
            "&:hover": { cursor: "pointer", opacity: "50%" },
          }}
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <Typography color="#FFFFFF" lineHeight="15px">
              Me
            </Typography>
            <Typography color="#96989D" fontSize="12px" lineHeight="15px">
              #3232
            </Typography>
          </Box>
          <Box color="#B9BBBE" display="flex" gap="" alignItems="center">
            {!muteMic ? (
              <MicIcon
                sx={{
                  borderRadius: "10px",
                  padding: "8px",
                  "&:hover": {
                    backgroundColor: "#3F434A",
                    cursor: "pointer",
                  },
                }}
              />
            ) : null}
            {!muteHeadphone ? (
              <HeadphonesIcon
                onClick={() => setMuteHeadphone(!muteHeadphone)}
                sx={{
                  borderRadius: "10px",
                  padding: "8px",
                  "&:hover": {
                    backgroundColor: "#3F434A",
                    cursor: "pointer",
                  },
                }}
              />
            ) : (
              <HeadsetOffIcon
                onClick={() => setMuteHeadphone(!muteHeadphone)}
                sx={{
                  borderRadius: "10px",
                  padding: "8px",
                  "&:hover": {
                    backgroundColor: "#3F434A",
                    cursor: "pointer",
                  },
                }}
              />
            )}
            <SettingsIcon
              sx={{
                borderRadius: "10px",
                padding: "8px",
                "&:hover": { backgroundColor: "#3F434A", cursor: "pointer" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftBar;

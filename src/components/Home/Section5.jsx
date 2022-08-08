import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const Section5 = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: "30px",
    backgroundColor: "#5865F2",
    color: "#FFFFFF",
    boxShadow: "none",
    fontWeight: "400",
    fontSize: "25px",
    padding: "10px 24px",
    "&:hover": {
      backgroundColor: "#7983F5",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  }));
  return (
    <Box bgcolor="#F6F6F6" padding="100px 0px" color="#23272A">
      <Container>
        <Stack
          justifyContent="center"
          sx={{ alignItems: { xs: "start", md: "center" } }}
          gap="20px"
        >
          <Typography
            sx={{ fontSize: { xs: "40px", md: "50px" } }}
            fontWeight="700"
          >
            RELIABLE TECH FOR STAYING CLOSE
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "15px", md: "20px" },
              textAlign: { xs: "left", md: "center" },
              width: { xs: "100%", md: "75%" },
            }}
            lineHeight="25px"
            fontWeight="300"
          >
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </Typography>

          <img
            src="98ea5b9e92e304c7d352ac462996adc5.svg"
            alt="img"
            width="100%"
            height="auto"
          />

          <Typography
            sx={{ fontSize: { xs: "40px", md: "50px" } }}
            fontWeight="700"
          >
            Ready to start your journey?
          </Typography>
          <StyledButton alignSelf="center">Download for Windows</StyledButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section5;

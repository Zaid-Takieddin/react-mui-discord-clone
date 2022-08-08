import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Section2 = () => {
  return (
    <Container>
      <Stack
        padding="100px 0px"
        gap="20px"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Paper
          elevation={0}
          sx={{ width: { xs: "100%", md: "60%", lg: "60%" } }}
        >
          <img
            src="46b2132c01604c9493d558de444929f4.svg"
            alt="img"
            width="100%"
            height="auto"
          />
        </Paper>

        <Stack
          gap="10px"
          color="#23272A"
          sx={{ width: { xs: "100%", md: "40%", lg: "40%" } }}
        >
          <Typography
            sx={{ fontSize: { xs: "40px", md: "50px" } }}
            fontWeight="700"
          >
            Create an invite-only place where you belong
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "15px", md: "20px" } }}
            lineHeight="25px"
            fontWeight="300"
          >
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Section2;

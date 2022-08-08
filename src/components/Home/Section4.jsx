import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Section4 = () => {
  return (
    <Container>
      <Stack
        padding="100px 0px"
        gap="20px"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
      >
        <Paper
          elevation={0}
          sx={{ width: { xs: "100%", md: "60%", lg: "60%" } }}
        >
          <img
            src="921b1ae33edca174b6ebe787bb8b6c3b.svg"
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
            From few to a fandom
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "15px", md: "20px" } }}
            lineHeight="25px"
            fontWeight="300"
          >
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Section4;

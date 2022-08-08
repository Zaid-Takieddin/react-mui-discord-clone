import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Section3 = () => {
  return (
    <Box bgcolor="#F6F6F6">
      <Container>
        <Stack
          padding="100px 0px"
          gap="20px"
          alignItems="center"
          sx={{
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Stack
            gap="10px"
            color="#23272A"
            sx={{ width: { xs: "100%", md: "40%", lg: "40%" } }}
          >
            <Typography
              sx={{ fontSize: { xs: "40px", md: "50px" } }}
              fontWeight="700"
            >
              Where hanging out is easy
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "15px", md: "20px" } }}
              lineHeight="25px"
              fontWeight="300"
            >
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </Typography>
          </Stack>
          <Paper
            elevation={0}
            sx={{
              width: { xs: "100%", md: "60%", lg: "60%" },
              backgroundColor: "inherit",
            }}
          >
            <img
              src="575a0322f3b36ca2fecb23ad2c6dd5ad.svg"
              alt="img"
              width="100%"
              height="auto"
            />
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section3;

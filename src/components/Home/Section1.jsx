import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import "./Section1.css";
import { Link } from "react-router-dom";

const Section1 = () => {
  const StyledHeader = styled(Typography)(({ theme }) => ({
    fontWeight: "700",
    zIndex: "10",
    fontSize: "84px",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  }));
  const TopStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      alignItems: "start",
    },
  }));
  const StyledStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    justifyContent: "center",
    width: "100%",
    zIndex: "10",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
      alignItems: "start",
    },
  }));
  const StyledPara = styled(Typography)(({ theme }) => ({
    padding: "24px 0px",
    textAlign: "center",
    width: "70%",
    zIndex: "10",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
    },
  }));
  const StyledButton = styled(Button)({
    backgroundColor: "#FFF",
    color: "#000",
    borderRadius: "40px",
    padding: "18px 26px",
    borderBottom: "0px",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#FFF",
      color: "#404EED",
    },
  });
  const StyledButton2 = styled(Button)({
    backgroundColor: "#23272A",
    color: "#FFF",
    borderRadius: "70px",
    padding: "18px 26px",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#2C3034",
    },
  });
  return (
    <Box
      bgcolor="#404EED"
      padding="80px 0px 100px"
      color="#FFFFFF"
      position="relative"
      backgroundSize="contain"
      overflow="hidden"
      sx={{ height: { xs: "700px", sm: "700px", md: "600px", lg: "400px" } }}
    >
      <Container>
        <TopStack>
          <StyledHeader>IMAGINE A PLACE...</StyledHeader>
          <StyledPara>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </StyledPara>
          <StyledStack>
            <StyledButton variant="contained">
              Download for Windows
            </StyledButton>
            <Link to="app">
              <StyledButton2 variant="contained">
                Open Discord in your browser
              </StyledButton2>
            </Link>
          </StyledStack>
        </TopStack>
      </Container>
      <Container>
        <img
          className="img1"
          src="8a8375ab7908384e1fd6efe408284203.svg"
          alt="img"
        />
      </Container>
      <Paper
        elevation={0}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        <img
          className="img2"
          src="c40c84ca18d84633a9d86b4046a91437.svg"
          alt="img"
        />
      </Paper>
    </Box>
  );
};

export default Section1;

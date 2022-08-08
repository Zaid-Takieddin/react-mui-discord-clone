import { Menu } from "@mui/icons-material";
import { Box, Container, ListItem, Stack, styled, Button } from "@mui/material";
import React from "react";

const Navbar = () => {
  const StyledNav = styled(Stack)({
    padding: "20px 0px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  });
  const StyledItem = styled(ListItem)({
    "&:hover": {
      cursor: "pointer",
      borderBottom: "1px solid",
    },
    width: "fit-content",
    padding: "0",
  });
  const StyledButton = styled(Button)({
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    boxShadow: "none",
    fontWeight: "400",
    zIndex: "10",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#404EED",
    },
  });
  const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    flexDirection: "row",
    gap: "32px",
    zIndex: "10",
  }));
  return (
    <Box bgcolor="#404EED" color="white">
      <Container>
        <StyledNav>
          <Box fontWeight="700" fontSize="25px" zIndex="10">
            Discord
          </Box>
          <StyledStack>
            <StyledItem>Home</StyledItem>
            <StyledItem>Nitro</StyledItem>
            <StyledItem>Discover</StyledItem>
            <StyledItem>Safety</StyledItem>
            <StyledItem>Support</StyledItem>
            <StyledItem>Blog</StyledItem>
            <StyledItem>Careers</StyledItem>
          </StyledStack>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <StyledButton variant="contained" sx={{ borderRadius: "20px" }}>
              Login
            </StyledButton>
            <Menu
              sx={{
                display: { md: "none" },
                fontSize: "35px",
              }}
            />
          </Box>
        </StyledNav>
      </Container>
    </Box>
  );
};

export default Navbar;

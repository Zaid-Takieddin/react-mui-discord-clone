import {
  Box,
  Button,
  Container,
  Divider,
  ListItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import React from "react";

const Footer = () => {
  const BigFooter = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const SmallFooter = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    width: "100%",
  }));
  const XSmallFooter = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const StyledButton = styled(Button)({
    borderRadius: "20px",
    backgroundColor: "#5865F2",
    color: "#FFFFFF",
    boxShadow: "none",
    fontWeight: "400",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#404EED",
    },
  });
  const StyledItem = styled(ListItem)({
    "&:hover": {
      cursor: "pointer",
      borderBottom: "1px solid",
    },
    width: "fit-content",
    padding: "0",
    height: "32px",
  });
  return (
    <Box backgroundColor="#23272A" color="white">
      <Container>
        <BigFooter
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          direction="column"
          padding="80px 0px 64px"
          alignItems="start"
          gap="28px"
        >
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Stack
              color="#5865F2"
              fontSize="46px"
              fontWeight="700"
              flexWrap="wrap"
              gap="10px"
            >
              Imagine a place
              <Stack direction="row" gap="10px" color="white">
                <Twitter />
                <Facebook />
                <Instagram />
                <YouTube />
              </Stack>
            </Stack>
            <Stack gap="8px">
              <Typography marginBottom="20px" color="#5865F2">
                Product
              </Typography>
              <StyledItem>Download</StyledItem>
              <StyledItem>Nitro</StyledItem>
              <StyledItem>Status</StyledItem>
            </Stack>
            <Stack gap="8px">
              <Typography marginBottom="20px" color="#5865F2">
                Company
              </Typography>
              <StyledItem>About</StyledItem>
              <StyledItem>Jobs</StyledItem>
              <StyledItem>Branding</StyledItem>
              <StyledItem>Newsroom</StyledItem>
            </Stack>
            <Stack gap="8px">
              <Typography marginBottom="20px" color="#5865F2">
                Resources
              </Typography>
              <StyledItem>College</StyledItem>
              <StyledItem>Support</StyledItem>
              <StyledItem>Safety</StyledItem>
              <StyledItem>Blog</StyledItem>
              <StyledItem>Feedback</StyledItem>
              <StyledItem>Developers</StyledItem>
              <StyledItem>StreamKit</StyledItem>
            </Stack>
            <Stack gap="8px">
              <Typography marginBottom="20px" color="#5865F2">
                Policies
              </Typography>
              <StyledItem>Terms</StyledItem>
              <StyledItem>Privacy</StyledItem>
              <StyledItem>Cookie Settings</StyledItem>
              <StyledItem>Guidlines</StyledItem>
              <StyledItem>Acknowledgements</StyledItem>
              <StyledItem>Licenses</StyledItem>
              <StyledItem>Moderation</StyledItem>
            </Stack>
          </Stack>
          <Stack width="100%">
            <Divider color="#5865F2" />
          </Stack>
          <Stack width="100%">
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
            >
              <Typography fontWeight="700" fontSize="32px">
                Discord
              </Typography>
              <StyledButton>Open Discord</StyledButton>
            </Stack>
          </Stack>
        </BigFooter>
        <SmallFooter
          direction="column"
          padding="80px 0px 64px"
          alignItems="start"
          gap="26px"
        >
          <Stack direction="row" width="100%" gap="26px">
            <Stack
              color="#5865F2"
              fontSize="46px"
              fontWeight="700"
              flexWrap="wrap"
              gap="10px"
              width="50%"
            >
              Imagine a place
              <Stack direction="row" gap="10px" color="white">
                <Twitter />
                <Facebook />
                <Instagram />
                <YouTube />
              </Stack>
            </Stack>
            <Stack width="50%">
              <Stack
                direction="row"
                justifyContent="space-around"
                marginBottom="16px"
              >
                <Stack width="50%">
                  <Typography marginBottom="20px" color="#5865F2">
                    Product
                  </Typography>
                  <StyledItem>Download</StyledItem>
                  <StyledItem>Nitro</StyledItem>
                  <StyledItem>Status</StyledItem>
                </Stack>
                <Stack width="50%">
                  <Typography marginBottom="20px" color="#5865F2">
                    Company
                  </Typography>
                  <StyledItem>About</StyledItem>
                  <StyledItem>Jobs</StyledItem>
                  <StyledItem>Branding</StyledItem>
                  <StyledItem>Newsroom</StyledItem>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-around">
                <Stack width="50%">
                  <Typography marginBottom="20px" color="#5865F2">
                    Resources
                  </Typography>
                  <StyledItem>College</StyledItem>
                  <StyledItem>Support</StyledItem>
                  <StyledItem>Safety</StyledItem>
                  <StyledItem>Blog</StyledItem>
                  <StyledItem>Feedback</StyledItem>
                  <StyledItem>Developers</StyledItem>
                  <StyledItem>StreamKit</StyledItem>
                </Stack>
                <Stack width="50%">
                  <Typography marginBottom="20px" color="#5865F2">
                    Policies
                  </Typography>
                  <StyledItem>Terms</StyledItem>
                  <StyledItem>Privacy</StyledItem>
                  <StyledItem>Cookie Settings</StyledItem>
                  <StyledItem>Guidlines</StyledItem>
                  <StyledItem>Acknowledgements</StyledItem>
                  <StyledItem>Licenses</StyledItem>
                  <StyledItem>Moderation</StyledItem>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="100%">
            <Divider color="#5865F2" />
          </Stack>
          <Stack width="100%">
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
            >
              <Typography fontWeight="700" fontSize="32px">
                Discord
              </Typography>
              <StyledButton>Open Discord</StyledButton>
            </Stack>
          </Stack>
        </SmallFooter>
        <XSmallFooter
          direction="column"
          padding="80px 0px 64px"
          alignItems="start"
          gap="26px"
        >
          <Stack
            color="#5865F2"
            fontSize="46px"
            fontWeight="700"
            flexWrap="wrap"
            gap="10px"
            width="100%"
          >
            Imagine a place
            <Stack direction="row" gap="10px" color="white">
              <Twitter />
              <Facebook />
              <Instagram />
              <YouTube />
            </Stack>
          </Stack>
          <Stack width="100%">
            <Stack
              direction="row"
              justifyContent="space-around"
              marginBottom="16px"
            >
              <Stack width="50%">
                <Typography marginBottom="20px" color="#5865F2">
                  Product
                </Typography>
                <StyledItem>Download</StyledItem>
                <StyledItem>Nitro</StyledItem>
                <StyledItem>Status</StyledItem>
              </Stack>
              <Stack width="50%">
                <Typography marginBottom="20px" color="#5865F2">
                  Company
                </Typography>
                <StyledItem>About</StyledItem>
                <StyledItem>Jobs</StyledItem>
                <StyledItem>Branding</StyledItem>
                <StyledItem>Newsroom</StyledItem>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-around">
              <Stack width="50%">
                <Typography marginBottom="20px" color="#5865F2">
                  Resources
                </Typography>
                <StyledItem>College</StyledItem>
                <StyledItem>Support</StyledItem>
                <StyledItem>Safety</StyledItem>
                <StyledItem>Blog</StyledItem>
                <StyledItem>Feedback</StyledItem>
                <StyledItem>Developers</StyledItem>
                <StyledItem>StreamKit</StyledItem>
              </Stack>
              <Stack width="50%">
                <Typography marginBottom="20px" color="#5865F2">
                  Policies
                </Typography>
                <StyledItem>Terms</StyledItem>
                <StyledItem>Privacy</StyledItem>
                <StyledItem>Cookie Settings</StyledItem>
                <StyledItem>Guidlines</StyledItem>
                <StyledItem>Acknowledgements</StyledItem>
                <StyledItem>Licenses</StyledItem>
                <StyledItem>Moderation</StyledItem>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="100%">
            <Divider color="#5865F2" />
          </Stack>
          <Stack width="100%">
            <Stack
              justifyContent="space-between"
              alignItems="center"
              direction="row"
            >
              <Typography fontWeight="700" fontSize="32px">
                Discord
              </Typography>
              <StyledButton>Open Discord</StyledButton>
            </Stack>
          </Stack>
        </XSmallFooter>
      </Container>
    </Box>
  );
};

export default Footer;

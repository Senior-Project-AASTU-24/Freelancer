import React, { useEffect, useState } from "react";
import Topbar from "../../components/Layouts/Topbar";
import Search from "../../utils/Search";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { largeTypographyProps, smallTypographyProps } from "../../Constants";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import intro from "../../assets/intro.jpg";
import Footer from "../../components/Layouts/Footer";
import StatBox from "./StatBox";
import { briefcaseSvg } from "../../svg";
import cta1 from "../../assets/cta1.png";
import cta2 from "../../assets/cta2.png";
import SendIcon from "@mui/icons-material/Send";

const mockData = [
  { title: "Total Jobs", count: 200000, img: briefcaseSvg },
  { title: "Companies", count: 50, img: briefcaseSvg },
  { title: "Candidates", count: 30, img: briefcaseSvg },
  { title: "New Jobs", count: 30, img: briefcaseSvg },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Set isVisible to true when component mounts
  }, []);
  return (
    <div>
      <Topbar />
      {/* <Search /> */}
      <Stack spacing={2}>
        <Box
          width="auto"
          height="auto"
          flexShrink={0}
          sx={{ background: "rgba(241, 242, 244, 0.60)" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={7}>
              <Box
                display="inline-flex"
                flexDirection="column"
                alignItems="flex-start"
                gap={5}
                mt={10}
                mr={40}
                mb={20}
                ml={10}
              >
                <Typography
                  color="var(--Gray-900, #18191C)" /* Display/01 */
                  fontFamily="Inter"
                  fontSize="56px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="64px" /* 114.286% */
                  width={"652px"}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(-50px)",
                    transition: "opacity 1s ease, transform 1s ease",
                  }}
                >
                  {" "}
                  Find a job that suits your interest & skills.{" "}
                </Typography>
                <Typography
                  color="var(--Gray-900, #18191C)" /* Display/01 */
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px" /* 150% */
                  width={"536px"}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(-50px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}
                >
                  Aliquam vitae turpis in diam convallis finibus in at risus.
                  Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
                </Typography>
                <Box
                  display="flex"
                  padding={2}
                  alignItems="center"
                  gap={3}
                  borderRadius="8px"
                  border="1px solid var(--Gray-100, #E4E5E8)"
                  background="var(--Gray-Scale-White, #FFF)"
                  boxShadow="0px 12px 40px 0px rgba(0, 44, 109, 0.04)"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(50px)", // Move from bottom to top
                    transition: "opacity 1s ease, transform 1s ease", // Set transition duration to 1 second
                  }}
                >
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Job Title, Key Word..."
                    inputProps={{ "aria-label": "Job Title, Key Word..." }}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <LocationOnIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Location"
                    inputProps={{ "aria-label": "Location" }}
                  />
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "4px",
                      background: "var(--Primary-500, #0A65CC)",
                    }}
                  >
                    Find
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Box
                flexShrink={0}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(100%)", // Move from right to left
                  transition: "opacity 1s ease, transform 1s ease", // Set transition duration to 1 second
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  src={intro}
                  alt="intro"
                />
              </Box>
            </Grid>
          </Grid>
          <Box mr={10} mb={5} ml={10}>
            <Grid container spacing={4}>
              {mockData?.map((data, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  <StatBox
                    title={data.title}
                    numCount={data.count}
                    img={data.img}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box
          display="flex"
          width="auto"
          padding="50px 104px"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                display="flex"
                padding="50px"
                flexDirection="column"
                alignItems="flex-start"
                gap="19.486px"
                sx={{
                  // background: `url(${cta1}) lightgray 489.508px -11.848px / -101.583% 111.193% no-repeat`,
                  backgroundImage: `url(${cta1})`,
                  borderRadius: "8px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="11.992px"
                >
                  <Typography
                    color="var(--Gray-Scale-900, #191F33)"
                    fontFamily="Inter"
                    fontSize="23.983px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="29.979px"
                  >
                    Become a Candidate
                  </Typography>
                  <Typography {...smallTypographyProps} width="233.837px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras cursus a dolor convallis efficitur.
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      background: "white",
                      borderRadius: "4px",
                      color: "var(--Primary-500, #0A65CC)",
                      padding: "10px 20px",
                      "&:hover": {
                        color: "white", // Change text color to white on hover
                      },
                    }}
                  >
                    Register Now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                display="flex"
                padding="50px"
                flexDirection="column"
                alignItems="flex-start"
                gap="19.486px"
                sx={{
                  // background: `url(${cta1}) lightgray 489.508px -11.848px / -101.583% 111.193% no-repeat`,
                  backgroundImage: `url(${cta2})`,
                  borderRadius: "8px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="11.992px"
                >
                  <Typography
                    color="var(--Gray-Scale-900, #191F33)"
                    fontFamily="Inter"
                    fontSize="23.983px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="29.979px"
                  >
                    Become Employer
                  </Typography>
                  <Typography {...smallTypographyProps} width="233.837px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras cursus a dolor convallis efficitur.
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      background: "white",
                      borderRadius: "4px",
                      color: "var(--Primary-500, #0A65CC)",
                      padding: "10px 20px",
                      "&:hover": {
                        color: "white", // Change text color to white on hover
                      },
                    }}
                  >
                    Register Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Footer />
    </div>
  );
};

export default Index;

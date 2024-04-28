import React from "react";
import Topbar from "../../../components/Layouts/Topbar";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import {
  highlightedTitleProps,
  largeTypographyProps,
  mediumTypographyProps,
  smallTypographyProps,
} from "../../../Constants";
import Footer from "../../../components/Layouts/Footer";

const PostedJob = () => {
  return (
    <div>
      <Topbar />
      <Box m="50px">
        <Box maxWidth="1320px" mx="auto">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Typography {...largeTypographyProps}>Job Details</Typography>
              <Typography {...highlightedTitleProps}>
                Create React Project in GitHub out of a Website Template{" "}
              </Typography>
              <Typography {...smallTypographyProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                fringilla tortor. Donec eu diam ut velit auctor ultrices. Mauris
                in augue pellentesque mauris dignissim hendrerit at in purus.
                Praesent nisi sem, vehicula quis mi non, interdum iaculis mi.
                Sed sit amet dui fermentum, blandit felis sit amet, laoreet
                lorem. Proin eget quam nulla. Nam pharetra gravida magna sit
                amet pharetra. Ut porttitor, augue vel maximus blandit, orci
                magna tempor lorem, sed elementum leo justo et quam. Praesent eu
                varius ex. Maecenas cursus volutpat nibh vel efficitur. Ut id
                erat malesuada, lacinia lectus quis, ornare diam.
              </Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <Divider
                orientation="vertical"
                style={{
                  width: "1px",
                  backgroundColor: "black",
                  margin: "auto",
                }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Box marginLeft={7}>
                <Button
                  style={{
                    display: "flex",
                    width: "216px",
                    padding: "16px 24px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "6px",
                    background: "var(--WF-Base-800, #2D3648)",
                  }}
                >
                  <Typography color={"white"}>OnGoing</Typography>
                </Button>
                <Box marginTop={2}></Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="85"
                      viewBox="0 0 72 85"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.5655 74.7196C17.7847 80.1415 16.9463 84.2142 16.9463 84.2142L33.6573 84.2142L36.8982 61.7107H52.3375C63.2065 61.7107 72.0001 53.1311 72.0001 42.5477C72.0001 36.4543 69.1032 31.0392 64.583 27.5269L19.3751 30.7653"
                        fill="#5EA7FF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.399 0H10.4692L0 74.4925H18.6212L22.4909 46.9577H40.4224C53.3811 46.9577 63.9038 36.4478 63.9038 23.4831V23.4788C63.9038 10.5033 53.3909 0 40.4224 0H21.399Z"
                        fill="#5B68C0"
                      />
                    </svg>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography {...largeTypographyProps}>$ 150</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Divider
            orientation="horizontal"
            style={{
              height: "1px",
              backgroundColor: "black",
              marginTop: 10,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default PostedJob;

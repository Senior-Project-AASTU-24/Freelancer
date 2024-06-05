import React from "react";
import Topbar from "../../components/Layouts/Topbar";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import {
  highlightedTitleProps,
  largeTypographyProps,
  mediumTypographyProps,
  smallTypographyProps,
} from "../../Constants";
import Footer from "../../components/Layouts/Footer";

const Thanks = () => {
    return (
      <div>
        <Topbar />
          <center>
            <div>You have successfully paid the freelancer thankyou</div>
          </center>
        <Footer />
    </div>
  );
};

export default Thanks;
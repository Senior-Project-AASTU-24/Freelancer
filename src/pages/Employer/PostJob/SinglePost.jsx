import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Topbar from "../../../components/Layouts/Topbar";
import Footer from "../../../components/Layouts/Footer";
import { mediumTypographyProps } from "../../../Constants";
import PostTitle from "./PostTitle";

const SinglePost = () => {
  return (
    <div>
      <Topbar />
      <Box sx={{ m: 10 }}>
        <PostTitle />
      </Box>
      <Footer />
    </div>
  );
};

export default SinglePost;

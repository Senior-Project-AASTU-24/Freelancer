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

const PostTitle = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={5}>
          <Typography
            // color="var(--Gray-600, #5E6670)"
            fontFamily="Ink Free"
            fontSize="38px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="28px"
            sx={{ marginTop: "100px" }}
          >
            Let’s Start By Adding a Title
          </Typography>
        </Grid>
        <Grid item md={1}>
          <div style={{ height: "100%", borderLeft: "1px solid #000" }}></div>
        </Grid>

        <Grid item xs={12} sm={4} md={5}>
          <Stack spacing={2}>
            <Typography {...mediumTypographyProps}>
              Write a title for your job post
            </Typography>
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <Typography {...mediumTypographyProps}>
              Write a Description for your job post
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={5}
              minRows={4}
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={10}>
        <Grid item md={10}></Grid>
        <Grid item md={2}>
          <Button
            sx={{
              borderRadius: "8px",
              background: "var(--01-Dark, #05F)",
            }}
          >
            <Typography color={"white"} fontSize={"14px"}>
              Next
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostTitle;

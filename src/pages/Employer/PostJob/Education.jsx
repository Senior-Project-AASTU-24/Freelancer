import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { mediumTypographyProps } from "../../../Constants";

const Education = ({ setStatus, postData, setPostData }) => {
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [education, setEducation] = useState(postData.education);

  useEffect(() => {
    setIsNextDisabled(education.trim() === "");
  }, [education]);

  const handleNextClick = () => {
    setPostData({ ...postData, education });
    setStatus("milestones");  
  };

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={5}>
          <Typography
            fontFamily="Ink Free"
            fontSize="38px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="28px"
            sx={{ marginTop: "100px" }}
          >
            Select Education Level
          </Typography>
        </Grid>
        <Grid item md={1}>
          <div style={{ height: "100%", borderLeft: "1px solid #000" }}></div>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Stack spacing={2}>
            <Typography {...mediumTypographyProps}>
              Select the minimum required education level
            </Typography>
            <Select
              labelId="education-select-label"
              id="education-select"
              value={education}
              label="Education"
              onChange={handleEducationChange}
            >
              <MenuItem value={"primary-education"}>Primary Education</MenuItem>
              <MenuItem value={"higher-education"}>Higher Education</MenuItem>
              <MenuItem value={"graduate-degree"}>Graduate Degree</MenuItem>
              <MenuItem value={"masters-degree"}>Masters Degree</MenuItem>
              <MenuItem value={"doctoral-degree"}>Doctoral Degree</MenuItem>
            </Select>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={10}>
        <Grid item md={8}></Grid>
        <Grid item md={2}>
          <Button
            onClick={() => setStatus("jobType")}
            sx={{
              borderRadius: "8px",
              background: "var(--01-Dark, #05F)",
              color: "white",
              "&:hover": {
                background: "#0044cc",
              },
            }}
          >
            <Typography color={"white"} fontSize={"14px"}>
              Back
            </Typography>
          </Button>
        </Grid>
        <Grid item md={2}>
          <Button
            disabled={isNextDisabled}
            onClick={handleNextClick}
            sx={{
              borderRadius: "8px",
              background: isNextDisabled ? "grey" : "var(--01-Dark, #05F)",
              color: "white",
              cursor: isNextDisabled ? "not-allowed" : "pointer",
              "&:hover": {
                background: isNextDisabled ? "grey" : "#0044cc",
              },
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

export default Education;
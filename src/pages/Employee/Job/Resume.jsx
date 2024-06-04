import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { mediumTypographyProps } from "../../../Constants";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Resume = ({ setStatus }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [file, setFile] = useState(null);
  const [cover, setCover] = useState("");

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleNextClick = () => {
    const data = {
      cover: cover,
    };

    console.log(data);

    setStatus("final");
    navigate("/employee/dashboard");
  };

  useEffect(() => {
    setIsNextDisabled(cover.trim() === "");
  }, [cover]);

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
            {t("Add Cover Letter Here")}
          </Typography>
        </Grid>
        <Grid item md={1}>
          <div style={{ height: "100%", borderLeft: "1px solid #000" }}></div>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Stack spacing={2}>
            <Typography {...mediumTypographyProps}>Cover Letter</Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={20}
              minRows={15}
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              required
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={10}>
        <Grid item md={8}></Grid>
        <Grid item md={2}>
          <Button
            onClick={() => setStatus("initial")}
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

export default Resume;

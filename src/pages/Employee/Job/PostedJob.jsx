import React, { useState } from "react";
import Topbar from "../../../components/Layouts/Topbar";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  highlightedTitleProps,
  largeTypographyProps,
  mediumTypographyProps,
  smallTypographyProps,
} from "../../../Constants";
import Footer from "../../../components/Layouts/Footer";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Milestones from "./fragments/Milestones";
import { tokens } from "../../../theme";
import ChatModal from "./fragments/ChatModal";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AddLinkIcon from "@mui/icons-material/AddLink";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const initialMilestones = [
  {
    id: 1,
    title: "Milestone 1",
    tasks: [
      { id: 1, label: "Task 1", checked: false },
      { id: 2, label: "Task 2", checked: false },
    ],
  },
  {
    id: 2,
    title: "Milestone 2",
    tasks: [
      { id: 1, label: "Task 1", checked: false },
      { id: 2, label: "Task 2", checked: false },
    ],
  },
  // Add more milestones as needed
];

const PostedJobEmployee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [milestones, setMilestones] = useState(initialMilestones);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [githubLink, setGithubLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const handleCheckboxChange = (milestoneId, taskId) => {
    setMilestones((prevMilestones) =>
      prevMilestones.map((milestone) =>
        milestone.id === milestoneId
          ? {
              ...milestone,
              tasks: milestone.tasks.map((task) =>
                task.id === taskId ? { ...task, checked: !task.checked } : task
              ),
            }
          : milestone
      )
    );
  };

  const handleCompleteClick = () => {
    if (currentMilestoneIndex < milestones.length - 1) {
      console.log("Current Milestone:", milestones[currentMilestoneIndex]);
      console.log(
        "Completed Tasks:",
        milestones[currentMilestoneIndex].tasks.filter((task) => task.checked)
      );
      console.log("GitHub Link:", githubLink);

      setCurrentMilestoneIndex(currentMilestoneIndex + 1);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setFileError("File size exceeds 10 MB.");
        setSelectedFile(null);
      } else {
        setFileError("");
        setSelectedFile(file);
      }
    }
  };

  const currentMilestone = milestones[currentMilestoneIndex];
  const completedTasks = currentMilestone.tasks.filter(
    (task) => task.checked
  ).length;
  const totalTasks = currentMilestone.tasks.length;

  // Function to toggle the visibility of the chat modal
  const toggleChatModal = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };

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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5655 74.7196C17.7847 80.1415 16.9463 84.2142 16.9463 84.2142L33.6573 84.2142L36.8982 61.7107H52.3375C63.2065 61.7107 72.0001 53.1311 72.0001 42.5477C72.0001 36.4543 69.1032 31.0392 64.583 27.5269L19.3751 30.7653"
                        fill="#5EA7FF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
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
            style={{ height: "1px", backgroundColor: "black", marginTop: 10 }}
          />
        </Box>
        <Box marginTop={5}>
          <Milestones
            milestones={milestones}
            currentMilestoneIndex={currentMilestoneIndex}
            handleCheckboxChange={handleCheckboxChange}
          />
        </Box>

        <Box marginTop={3}>
          <Typography {...mediumTypographyProps}>Github Link</Typography>
          <FormControl variant="standard" fullWidth>
            <Input
              name="githubLink"
              fullWidth
              id="input-with-icon-adornment"
              onChange={(e) => setGithubLink(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AddLinkIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography {...mediumTypographyProps}>Upload file</Typography>
          <input
            type="file"
            accept=".zip,.rar,.7z,.tar"
            onChange={handleFileChange}
          />
          {fileError && <Typography color="error">{fileError}</Typography>}
        </Box>
        <Box margin={5}>
          <Divider />
        </Box>
        <Box margin={2} borderRadius={4}>
          <TextField
            disabled
            fullWidth
            id="outlined-multiline-static"
            label="Previous comment ..."
            multiline
            rows={5}
            sx={{
              backgroundColor: colors.blueAccent[800],
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box display="flex" justifyContent="right" marginTop={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCompleteClick}
            disabled={
              completedTasks < totalTasks || githubLink === "" || !selectedFile
            }
          >
            Complete Milestone
          </Button>
        </Box>
        <Box
          position="fixed"
          bottom={20}
          right={20}
          sx={{ background: colors.blueAccent[800], borderRadius: "80px" }}
        >
          <IconButton
            variant="contained"
            color="primary"
            onClick={toggleChatModal}
          >
            <ChatBubbleIcon />
          </IconButton>
        </Box>
      </Box>
      <ChatModal open={isChatModalOpen} onClose={toggleChatModal} />
      <Footer />
    </div>
  );
};

export default PostedJobEmployee;

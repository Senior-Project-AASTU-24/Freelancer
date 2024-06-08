import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useTheme,
  Grid,
  FormControl,
  Input,
  InputAdornment,
} from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import Milestones from "./fragments/Milestones";
import ChatModal from "./fragments/ChatModal";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Footer from "../../../components/Layouts/Footer";
import Topbar from "../../../components/Layouts/Topbar";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { tokens } from "../../../theme";
import { DataGrid } from "@mui/x-data-grid";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const PostedJobEmployee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { jobId } = useParams();

  const [milestones, setMilestones] = useState([]);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [githubLink, setGithubLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (jobId) {
      // Fetch job details and milestones
      fetch(`http://localhost:8002/api/job-application/${jobId}/`)
        .then((response) => response.json())
        .then((data) => {
          setMilestones(Array(data.milestone).fill({ tasks: [] }));
        });

      // Fetch comments and ratings
      fetch(`http://localhost:8002/api/analyze-sentiment/${jobId}/`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
        });
    }
  }, [jobId]);

  const handleCheckboxChange = (milestoneId, taskId) => {
    setMilestones((prevMilestones) =>
      prevMilestones.map((milestone, index) =>
        index === milestoneId
          ? {
              ...milestone,
              tasks: milestone.tasks.map((task, taskIndex) =>
                taskIndex === taskId ? { ...task, checked: !task.checked } : task
              ),
            }
          : milestone
      )
    );
  };

  const handleCompleteClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("User not authenticated. Please log in.");
      return;
    }
    if (currentMilestoneIndex < milestones.length - 1) {
      setCurrentMilestoneIndex(currentMilestoneIndex + 1);
    } else {
      // Submit the task
      const formData = new FormData();
      formData.append("job_applied", jobId);
      formData.append("submission_date", new Date().toISOString());
      formData.append("link", githubLink);
      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      fetch("http://localhost:8002/api/submit-task/", {
        method: "POST",
        headers: {
        'Authorization': `Bearer ${token}`  // Replace with your actual secret key
      },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Task submitted:", data);
        });
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

  const currentMilestone = milestones[currentMilestoneIndex] || { tasks: [] };
  const completedTasks = currentMilestone.tasks.filter((task) => task.checked).length;
  const totalTasks = currentMilestone.tasks.length;

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
              <Typography variant="h4">Job Details</Typography>
              <Typography variant="h5">
                Create React Project in GitHub out of a Website Template
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                fringilla tortor. Donec eu diam ut
javascript
Copy code
                velit auctor ultrices. Mauris in augue pellentesque mauris dignissim hendrerit at in purus. Praesent nisi sem, vehicula quis mi non, interdum iaculis mi. Sed sit amet dui fermentum, blandit felis sit amet, laoreet lorem. Proin eget quam nulla. Nam pharetra gravida magna sit amet pharetra. Ut porttitor, augue vel maximus blandit, orci magna tempor lorem, sed elementum leo justo et quam. Praesent eu varius ex. Maecenas cursus volutpat nibh vel efficitur. Ut id erat malesuada, lacinia lectus quis, ornare diam.
              </Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <Divider orientation="vertical" style={{ width: "1px", backgroundColor: "black", margin: "auto" }} />
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="85" viewBox="0 0 72 85" fill="none">
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
                    <Typography variant="h4">$ 150</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" style={{ height: "1px", backgroundColor: "black", marginTop: 10 }} />
        </Box>
        <Box marginTop={5}>
          <Milestones
            milestones={milestones}
            currentMilestoneIndex={currentMilestoneIndex}
            handleCheckboxChange={handleCheckboxChange}
          />
        </Box>

        <Box marginTop={3}>
          <Typography variant="h6">Github Link</Typography>
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
         
          <Typography variant="h6">Upload file</Typography>
          <input
            type="file"
            accept=".zip,.rar,.7z,.tar,.pdf,.doc"
            onChange={handleFileChange}
          />
          {fileError && <Typography color="error">{fileError}</Typography>}
        </Box>
        <Box margin={5}>
          <Divider />
        </Box>
        <Box margin={2} borderRadius={4}>
          {comments.map((comment, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body2">{comment.text}</Typography>
              <Typography variant="caption">Rating: {comment.rating}</Typography>
            </Box>
          ))}
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
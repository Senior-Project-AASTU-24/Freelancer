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
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
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
import chapaImg from "../../../assets/chapa.jpg";
import { useNavigate } from "react-router-dom";

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

const PostedJobEmployee = () => {
  const navigate = useNavigate();
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
          const milestonesWithTasks = Array(data.milestone).fill({
            tasks: Array(5).fill({ checked: false }),
          });
          setMilestones(milestonesWithTasks);
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
                taskIndex === taskId
                  ? { ...task, checked: !task.checked }
                  : task
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
          Authorization: `Bearer ${token}`, // Replace with your actual secret key
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
  const completedTasks = currentMilestone.tasks.filter(
    (task) => task.checked
  ).length;
  const totalTasks = currentMilestone.tasks.length;

  const toggleChatModal = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };

  const handleChapaClick = () => {
    navigate("/payment");
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
                fringilla tortor. Donec eu diam ut javascript Copy code velit
                auctor ultrices. Mauris in augue pellentesque mauris dignissim
                hendrerit at in purus. Praesent nisi sem, vehicula quis mi non,
                interdum iaculis mi. Sed sit amet dui fermentum, blandit felis
                sit amet, laoreet lorem. Proin eget quam nulla. Nam pharetra
                gravida magna sit amet pharetra. Ut porttitor, augue vel maximus
                blandit, orci magna tempor lorem, sed elementum leo justo et
                quam. Praesent eu varius ex. Maecenas cursus volutpat nibh vel
                efficitur. Ut id erat malesuada, lacinia lectus quis, ornare
                diam.
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
                    {/* <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="grad1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#8DF25D", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#22C9A3", stopOpacity: 1 }}
                          />
                        </linearGradient>
                      </defs>
                      <g fill="url(#grad1)">
                        <path d="M100 40c16 0 30 6 40 16l-16 16c-6-6-14-10-24-10-10 0-20 4-26 10-6 6-10 16-10 26 0 10 4 20 10 26 6 6 16 10 26 10 10 0 18-4 24-10l16 16c-10 10-24 16-40 16-32 0-60-28-60-60s28-60 60-60z" />
                        <path d="M140 100c10 0 20 4 26 10 6 6 10 16 10 26 0 10-4 20-10 26-6 6-16 10-26 10s-20-4-26-10c-6-6-10-16-10-26 0-10 4-20 10-26 6-6 16-10 26-10z" />
                      </g>
                      <text
                        x="50"
                        y="180"
                        font-family="Arial"
                        font-size="60"
                        fill="url(#grad1)"
                      >
                        Chapa
                      </text>
                    </svg> */}
                    <img
                      src={chapaImg}
                      alt="Logo"
                      onClick={handleChapaClick}
                      style={{
                        borderRadius: "50%",
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                  {/* <Grid item xs={12} md={7}>
                    <Typography {...largeTypographyProps}>$ 150</Typography>
                  </Grid> */}
                </Grid>
                <Box marginTop={2}>
                  {currentMilestone.tasks.map((task, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                          checked={task.checked}
                          onChange={() =>
                            handleCheckboxChange(currentMilestoneIndex, index)
                          }
                        />
                        {` Task ${index + 1}`}
                      </label>
                    </div>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider
            orientation="horizontal"
            style={{ height: "1px", backgroundColor: "black", marginTop: 10 }}
          />
        </Box>
        <Box marginTop={5}>{/* Other component code */}</Box>
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
              <Typography variant="caption">
                Rating: {comment.rating}
              </Typography>
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

import React, { useState, useEffect } from "react";
import { Box, Button, Divider, IconButton, Typography, useTheme } from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Milestones from "./fragments/Milestones";
import ChatModal from "./fragments/ChatModal";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Footer from "../../../components/Layouts/Footer";

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
//   },
// }));

// const PostedJobEmployee = () => {
//   const theme = useTheme();
//   const colors = theme.palette;
//   const { jobAppliedId } = useParams();
//   const [milestones, setMilestones] = useState([]);
//   const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
//   const [isChatModalOpen, setIsChatModalOpen] = useState(false);
//   const [fileError, setFileError] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [completedTasks, setCompletedTasks] = useState(0);
//   const [totalTasks, setTotalTasks] = useState(0);
//   const [githubLink, setGithubLink] = useState("");
  

//   // useEffect(() => {
//   //   axios.get(`http://localhost:8002/api/milestones/${jobAppliedId}/`)
//   //   .then(response => {
//   //     setMilestones(response.data);
//   //     setTotalTasks(response.data.reduce((total, milestone) => total + milestone.tasks.length, 0));
//   //   })
//   //   .catch(error => console.error(error));
//   // }, [jobAppliedId]);

//   // const handleCheckboxChange = (milestoneIndex, taskId) => {
//   //   const newMilestones = [...milestones];
//   //   newMilestones[milestoneIndex].tasks = newMilestones[milestoneIndex].tasks.map(task =>
//   //     task.id === taskId ? { ...task, checked: !task.checked } : task
//   //   );
//   //   setMilestones(newMilestones);
//   //   const completed = newMilestones.reduce((total, milestone) =>
//   //     total + milestone.tasks.filter(task => task.checked).length, 0);
//   //   setCompletedTasks(completed);
//   // };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file.size > 5 * 1024 * 1024) { // 5MB limit
//       setFileError("File size exceeds 5MB limit.");
//     } else {
//       setFileError("");
//       setSelectedFile(file);
//     }
//   };

//   const handleCompleteClick = () => {
//     const token = localStorage.getItem('token');
//     // if (currentMilestoneIndex < milestones.length - 1) {
//     //   setCurrentMilestoneIndex(currentMilestoneIndex + 1);
//     // } else {
//       // Submit the task
//       const formData = new FormData();
//       formData.append("job_applied", jobAppliedId);
//       formData.append("submission_date", new Date().toISOString());
//       formData.append("link", githubLink);
//       if (selectedFile) {
//         formData.append("file", selectedFile);
//       }

//       fetch("http://localhost:8002/api/submit-task/", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Task submitted:", data);
//       });
//     // }
//   };

//   const toggleChatModal = () => {
//     setIsChatModalOpen(!isChatModalOpen);
//   };

//   return (
//     <div>
//       <Box margin={5}>
//         <Typography variant="h4" gutterBottom>
//           Job Milestones
//         </Typography>
//         {/* <Milestones
//           milestones={milestones}
//           currentMilestoneIndex={currentMilestoneIndex}
//           handleCheckboxChange={handleCheckboxChange}
//         /> */}
//         <Box marginTop={5}>
//           <Typography variant="h6">GitHub Repository Link</Typography>
//           <input
//             type="text"
//             value={githubLink}
//             onChange={(e) => setGithubLink(e.target.value)}
//             placeholder="Enter GitHub repository link"
//           />
//         </Box>
//         <Box marginTop={5}>
//           <Typography variant="h6">Upload Submission File</Typography>
//           <input
//             type="file"
//             accept=".zip,.rar,.7z,.tar"
//             onChange={handleFileChange}
//           />
//           {fileError && <Typography color="error">{fileError}</Typography>}
//         </Box>
//         <Box margin={5}>
//           <Divider />
//         </Box>
//         {/* <Box margin={2} borderRadius={4}>
//           {comments.map((comment, index) => (
//             <Box key={index} mb={2}>
//               <Typography variant="body2">{comment.text}</Typography>
//               <Typography variant="caption">Rating: {comment.rating}</Typography>
//             </Box>
//           ))}
//         </Box> */}
//         <Box display="flex" justifyContent="right" marginTop={3}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleCompleteClick}
//             // disabled={completedTasks < totalTasks || githubLink === "" || !selectedFile}
//           >
//             Complete Milestone
//           </Button>
//         </Box>
//         <Box
//           position="fixed"
//           bottom={20}
//           right={20}
//           sx={{ background: colors.primary.main, borderRadius: "50%" }}
//         >
//           <IconButton variant="contained" color="primary" onClick={toggleChatModal}>
//             <ChatBubbleIcon />
//           </IconButton>
//         </Box>
//       </Box>
//       <ChatModal isOpen={isChatModalOpen} onClose={toggleChatModal} />
//       <Footer />
//     </div>
//   );
// };

// export default PostedJobEmployee;

const PostedJobEmployee = () => {
  const theme = useTheme();
  const colors = theme.palette;
  const { jobId } = useParams();
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [fileError, setFileError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [githubLink, setGithubLink] = useState("");

  useEffect(() => {
    // Debugging: log jobAppliedId to ensure it's being retrieved correctly
    console.log("Job Applied ID:", jobId);
  }, [jobId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setFileError("File size exceeds 5MB limit.");
    } else {
      setFileError("");
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
    }
  };

  const handleCompleteClick = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('User not authenticated. Please log in.');
      return;
    }

    const payload = {
      job_applied: jobId,
      link: githubLink,
      file: selectedFile,
    };

    await fetch("http://localhost:8002/api/submit-task/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(err => { throw new Error(JSON.stringify(err)); });
      }
      return response.json();
    })
    .then((data) => {
      console.log("Task submitted:", data);
    })
    .catch(error => {
      console.error("Error submitting task:", error);
    });
  };

  const toggleChatModal = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };

  return (
    <div>
      <Box margin={5}>
        <Typography variant="h4" gutterBottom>
          Job Milestones
        </Typography>
        <Box marginTop={5}>
          <Typography variant="h6">GitHub Repository Link</Typography>
          <input
            type="text"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            placeholder="Enter GitHub repository link"
          />
        </Box>
        <Box marginTop={5}>
          <Typography variant="h6">Upload Submission File</Typography>
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
        <Box display="flex" justifyContent="right" marginTop={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCompleteClick}
            // disabled={githubLink === "" || !selectedFile}
          >
            Complete Milestone
          </Button>
        </Box>
        <Box
          position="fixed"
          bottom={20}
          right={20}
          sx={{ background: colors.primary.main, borderRadius: "50%" }}
        >
          <IconButton variant="contained" color="primary" onClick={toggleChatModal}>
            <ChatBubbleIcon />
          </IconButton>
        </Box>
      </Box>
      <ChatModal isOpen={isChatModalOpen} onClose={toggleChatModal} />
      <Footer />
    </div>
  );
};

export default PostedJobEmployee;
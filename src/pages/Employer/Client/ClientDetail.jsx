import React, { useEffect, useState } from "react";
import Footer from "../../../components/Layouts/Footer";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  IconButton,
  Stack,
  Chip,
  useTheme,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { useParams } from 'react-router-dom';
import {
  mediumTypographyProps,
  salaryTypographyProps,
  smallTypographyProps,
} from "../../../Constants";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Topbar from "../../../components/Layouts/Topbar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { tokens } from "../../../theme";
import SchoolIcon from "@mui/icons-material/School";

const ClientDetail = () => {
  const { freelancerId } = useParams();
  const [freelancer, setFreelancer] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetch(`http://localhost:8002/api/freelancers/${freelancerId}/`)
      .then((response) => response.json())
      .then((data) => setFreelancer(data))
      .catch((error) => console.error("Error fetching freelancer data:", error));
  }, [freelancerId]);

  if (!freelancer) {
    return <div>Loading...</div>;
  }

  const mediumTypographyProps = {
    variant: "h6",
    component: "h2",
    gutterBottom: true,
  };

  const smallTypographyProps = {
    variant: "body2",
    color: "textSecondary",
  };

  const salaryTypographyProps = {
    variant: "h5",
    component: "p",
    color: "primary",
  };

  return (
    <div>
      <Topbar />
      <Box m="50px">
        <Box maxWidth="1320px" mx="auto">
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="12px"
                mb={4}
              >
                <img
                  src={`http://localhost:8002${freelancer.photo}`}
                  alt="ClientLogo"
                  style={{
                    padding: "12px",
                    borderRadius: "80px",
                    background: "var(--Gray-50, #EDEFF5)",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
                <Box>
                  <Typography {...mediumTypographyProps}>
                    {freelancer.name}
                  </Typography>
                  <Typography {...smallTypographyProps}>
                    <LocationOnIcon />
                    {freelancer.Nationality}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="12px"
                mb={4}
              >
                <Box
                  display="flex"
                  padding={1}
                  alignItems="flex-start"
                  gap={10}
                  borderRadius="4px"
                  sx={{ background: "var(--Primary-50, #E7F0FA);" }}
                >
                  <IconButton>
                    <BookmarkIcon />
                  </IconButton>
                </Box>
                <Button variant="contained">Hire Now</Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box mb={4}>
                <Typography {...mediumTypographyProps}>
                  {freelancer.profession}
                </Typography>
                <Typography {...smallTypographyProps}>
                  {freelancer.biography}
                </Typography>
                <Divider sx={{ m: "10px" }} />
                <Typography {...mediumTypographyProps}>Experience</Typography>
                <Typography {...smallTypographyProps}>
                  {freelancer.experience} years
                </Typography>
                <Divider sx={{ m: "10px" }} />
                <Typography {...mediumTypographyProps}>Skills</Typography>
                {/* Assuming freelancer.skills is an array of skills */}
                {/* <Stack direction="row" spacing={1} sx={{ marginTop: 3 }}>
                  {freelancer.skills?.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{ background: colors.blueAccent[600] }}
                    />
                  ))}
                </Stack> */}
              </Box>
            </Grid>
            <Grid item xs={1} md={1}>
              <Divider orientation="vertical" flexItem variant="middle" />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                width="100%"
                minHeight="200px"
                display="flex"
                padding={32}
                justifyContent="center"
                alignItems="center"
                border="2px solid var(--Primary-50, #E7F0FA)"
                borderRadius="8px"
                bgcolor="var(--Gray-White, #FFF)"
                p={2}
              >
                <Box>
                  <Typography {...mediumTypographyProps}>Salary</Typography>
                  <Typography {...salaryTypographyProps}>
                    birr {freelancer.salary_range}
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    display: { xs: "none", sm: "block" },
                    margin: "0 32px",
                  }}
                />
                <Box>
                  <Typography {...mediumTypographyProps}>Website</Typography>
                  <Typography {...smallTypographyProps}>
                    {freelancer.website}
                  </Typography>
                </Box>
              </Box>
              <Box
                width="100%"
                minHeight="300px"
                display="flex"
                flexDirection="column"
                padding={32}
                border="2px solid var(--Primary-50, #E7F0FA)"
                borderRadius="8px"
                bgcolor="var(--Gray-White, #FFF)"
                p={2}
                mt={4}
              >
                <Box mb={2}>
                  <Typography {...mediumTypographyProps}>Education</Typography>
                </Box>
                <Divider />
                <Box display="flex" alignItems="center" gap={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      {freelancer.education_level}
                      {/* ?.map((edu, index) => (
                        <List key={index}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar>
                                <SchoolIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={edu.institution}
                              secondary={`${edu.degree} in ${edu.fieldOfStudy}`}
                            />
                          </ListItem>
                        </List>
                      )) */}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ClientDetail;
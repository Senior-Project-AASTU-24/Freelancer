import React, { useEffect, useState } from "react";
import Topbar from "../../../components/Layouts/Topbar";
import Search from "../../../utils/Search";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Grid,
  Divider,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../theme";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useSelector } from "react-redux";
import StatBox from "./fragments/Statbox";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import AddTaskIcon from "@mui/icons-material/AddTask";
import {
  mediumTypographyProps,
  smallTypographyProps,
} from "../../../Constants";
import LineChart from "./fragments/LineChart";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import WorkIcon from "@mui/icons-material/Work";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import Overview from "./Overview";
import Settings from "./Settings";
import useMediaQuery from "@mui/material/useMediaQuery";
import FavoriteJobs from "./FavoriteJobs";
import AcceptedJobs from "./AcceptedJobs";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HireRequests from "./HireRequests";
import miko from "../../../assets/miko.jpg";
import EmployersLogo from "../../../assets/EmployersLogo.png";
import MyJobs from "./MyJobs";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ConfirmationModal from "../../../components/Common/ConfirmationModal";

const mockData = [
  { id: 1, name: "John Doe", position: "Software Engineer", status: "Applied" },
  { id: 2, name: "Jane Smith", position: "UI/UX Designer", status: "Applied" },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Data Analyst",
    status: "In Review",
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "Project Manager",
    status: "Rejected",
  },
  {
    id: 5,
    name: "David Brown",
    position: "Frontend Developer",
    status: "Hired",
  },
];

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "position", headerName: "Position", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
];

// ...

<DataGrid
  rows={mockData}
  columns={columns}
  components={{ Toolbar: GridToolbar }}
/>;

const Item = ({ title, to, icon, selected, setSelected, onClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => {
        setSelected(title);
        if (onClick) onClick();
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const DashboardEmployer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setIsCollapsed(isSmallScreen);
  }, [isSmallScreen]);

  const handleLogoutClicked = () => {
    setIsModalOpen(true);
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("User not authenticated. Please log in.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/logout/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        console.error("Failed to logout:", response.statusText);
        alert("Failed to logout. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setAnchorEl(null);
      setIsModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  console.log(selected);
  return (
    <>
      <Topbar />
      {/* <Search /> */}
      <Grid container spacing={0}>
        <Grid item xs={1} sm={isCollapsed ? 1 : 3} md={isCollapsed ? 1 : 3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%", // Make the sidebar take up the entire height
              minHeight: "100vh",

              "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
              },
              "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
              },
              "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
              },
              "& .pro-inner-item:hover": {
                color: "#868dfb !important",
              },
              "& .pro-menu-item.active": {
                color: "#6870fa !important",
              },
            }}
          >
            <ProSidebar
              style={{
                flexGrow: 1,
                borderRight: "1px solid #ccc",
                background: "var(--Gray-50, #F1F2F4)", // Modify the background color here
              }}
              collapsed={isCollapsed}
              color="var(--Gray-50, #F1F2F4)"
              backgroundColor="var(--Gray-50, #F1F2F4)"
            >
              <Menu iconShape="square">
                <MenuItem
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                  style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
                >
                  {!isCollapsed && (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      ml="15px"
                    >
                      <Typography variant="h4" color={colors.grey[100]}>
                        WorkWhiz
                      </Typography>
                      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>
                {!isCollapsed && (
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <img
                        src={EmployersLogo}
                        alt="Employerlogo"
                        style={{
                          padding: "12px",
                          borderRadius: "80px",
                          background: "var(--Gray-50, #EDEFF5)",
                          maxWidth: "100px", // Set your desired max width here
                          maxHeight: "100px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        variant="h4"
                        color="white"
                        fontWeight="bold"
                        sx={{ m: "5px 0 0 0" }}
                      >
                        Employer
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={2}
                        // onChange={(event, newValue) => {
                        //   setValue(newValue);
                        // }}
                      />
                    </Grid>
                  </Grid>
                )}
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                  <Item
                    title="Overview"
                    to="/"
                    icon={<DashboardIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Item
                    title="My Jobs"
                    to="/"
                    icon={<WorkIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Accepted Jobs"
                    to="/"
                    icon={<ThumbUpAltIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Favorited Candidate"
                    to="/"
                    icon={<FavoriteIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Hire Requests"
                    to="/"
                    icon={<RemoveRedEyeIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Settings"
                    to="/"
                    icon={<SettingsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Divider />

                  <Item
                    title="Logout"
                    icon={<LogoutIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    onClick={handleLogoutClicked}
                    style={{ color: colors.grey[100] }}
                  />
                </Box>
              </Menu>
            </ProSidebar>
          </Box>
        </Grid>
        <Grid item xs={10} sm={isCollapsed ? 11 : 9} md={isCollapsed ? 11 : 9}>
          {selected === "Overview" && <Overview />}
          {selected === "My Jobs" && <MyJobs />}
          {selected === "Accepted Jobs" && <AcceptedJobs />}
          {selected === "Settings" && <Settings />}
          {selected === "Favorited Candidate" && <FavoriteJobs />}
          {selected === "Hire Requests" && <HireRequests />}
        </Grid>
      </Grid>
      <ConfirmationModal
        open={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleLogout}
        title="Confirm Logout"
        content="Are you sure you want to logout?"
      />
    </>
  );
};

export default DashboardEmployer;

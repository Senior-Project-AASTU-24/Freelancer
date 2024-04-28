import { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useMediaQuery from "@mui/material/useMediaQuery";

const Topbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState(() => {
    // Initialize the selectedBreadcrumb state with the value from local storage
    const savedBreadcrumbIndex = localStorage.getItem("selectedBreadcrumb");
    return savedBreadcrumbIndex !== null
      ? parseInt(savedBreadcrumbIndex)
      : null;
  });

  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Find FreeLancer",
      href: "/employer/client-list",
    },
    { label: "Find Job", href: "/employee/job-list" },
    { label: "Post Job", href: "/employer/job-post" },
  ];

  const handleClick = (event, index) => {
    if (selectedBreadcrumb === index) {
      event.preventDefault();
      console.info("You clicked a breadcrumb.");
    } else {
      setSelectedBreadcrumb(index);
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedBreadcrumb", selectedBreadcrumb);
  }, [selectedBreadcrumb]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "60px",
        padding: "0px 16px",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--Gray-50, #F1F2F4)",
      }}
    >
      {isSmallScreen ? (
        <Select
          value={selectedBreadcrumb}
          onChange={(event) => setSelectedBreadcrumb(event.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "breadcrumb" }}
        >
          {breadcrumbs.map((breadcrumb, index) => (
            <MenuItem key={index} value={index}>
              {breadcrumb.label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs.map((breadcrumb, index) => (
            <Link
              key={index}
              underline="hover"
              color={selectedBreadcrumb === index ? "primary" : "inherit"}
              href={breadcrumb.href}
              onClick={(event) => handleClick(event, index)}
            >
              {breadcrumb.label}
            </Link>
          ))}
        </Breadcrumbs>
      )}
    </Box>
  );
};

export default Topbar;

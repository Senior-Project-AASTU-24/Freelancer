import { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useMediaQuery from "@mui/material/useMediaQuery";

const Topbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

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
    <>
      <Box
        style={{
          display: "flex",
          height: "60px",
          padding: "0px 83px 0px 50px",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--Gray-50, #F1F2F4)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Stack
              spacing={2}
              sx={{
                isSmallScreen: {
                  flexDirection: "column",
                },
              }}
            >
              <Breadcrumbs separator="|" aria-label="breadcrumb">
                {breadcrumbs.map((breadcrumb, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <Link
                      underline="hover"
                      color={
                        selectedBreadcrumb === index ? "primary" : "inherit"
                      }
                      href={breadcrumb.href}
                      onClick={(event) => handleClick(event, index)}
                    >
                      {breadcrumb.label}
                    </Link>
                    {selectedBreadcrumb === index && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: -18,
                          left: 0,
                          width: "100%",
                          borderBottom: "2px solid blue",
                        }}
                      />
                    )}
                  </div>
                ))}
              </Breadcrumbs>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Topbar;

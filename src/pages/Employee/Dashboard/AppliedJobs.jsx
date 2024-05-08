import React, { useState } from "react";
import Search from "../../../utils/Search";
import StatBox from "../../../components/Common/StatBox";
import { Grid, Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { mockUpDataJobs } from "../../../data/mockData";
import Footer from "../../../components/Layouts/Footer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AppliedJobs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(mockUpDataJobs);

  const handleSearch = (filteredData) => {
    setFilteredData(filteredData);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      {" "}
      <Box m="50px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Search data={mockUpDataJobs} setData={handleSearch} />
        </Box>
        <Grid container spacing={2}>
          {currentItems.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <StatBox
                  jobTitle={data.jobTitle}
                  employmentType={data.employmentType}
                  salary={data.salary}
                  employerName={data.employerName}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Stack
          spacing={2}
          sx={{ mt: 2 }}
          direction="row"
          justifyContent="center"
        >
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </Box>
    </div>
  );
};

export default AppliedJobs;

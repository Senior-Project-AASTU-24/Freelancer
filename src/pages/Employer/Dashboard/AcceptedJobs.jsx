import React, { useState } from "react";
import Search from "../../../utils/Search";
import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../../theme";
import { mockUpDataJobs } from "./fragments/mockDataAccepted";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

const AcceptedJobs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(mockUpDataJobs);
  const [data, setData] = useState(mockUpDataJobs);

  const handleSearch = (searchQuery) => {
    const filtered = data.filter((item) =>
      item.job_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  // hey meti you can use this funtion to redirect to the specific job
  const handleButtonClick = (id) => {
    navigate(`/job/${id}`);
  };

  const columns = [
    { field: "freelancer", headerName: "Freelancer", width: 300 },
    { field: "job_title", headerName: "Job", width: 300 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleButtonClick(params.id)}
        >
          View Job
          <VisibilityIcon {...params} sx={{ ml: 1 }} />
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Box m="50px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Search onSearch={handleSearch} />
        </Box>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={currentItems}
            columns={columns}
            pageSize={itemsPerPage}
            pagination
            onPageChange={handlePageChange}
          />
        </Box>
      </Box>
    </div>
  );
};

export default AcceptedJobs;
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./components/auth/Login";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Signup from "./components/auth/Signup";
import ClientList from "./pages/Employer/ClientList";
import JobList from "./pages/Employee/Job/JobList";
import JobDetail from "./pages/Employee/Job/JobDetail";
import SinglePost from "./pages/Employer/PostJob/SinglePost";
import PostedJob from "./pages/Employee/Job/PostedJob";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route
          path="/login"
          element={
            <div className="login-container">
              <Login />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="login-container">
              <Signup />
            </div>
          }
        />
        <Route path="/employer/client-list" element={<ClientList />} />
        <Route path="/employee/job-list" element={<JobList />} />
        <Route path="/employee/job-detail" element={<JobDetail />} />
        <Route path="/employer/job-post" element={<SinglePost />} />
        <Route path="/employer/job-posted" element={<PostedJob />} />
        {/* Default route */}
        <Route path="/*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

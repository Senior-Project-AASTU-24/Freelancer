import React, { useState } from "react";
import Topbar from "../../../components/Layouts/Topbar";
import Cv from "./Cv";
import { Box } from "@mui/material";
import Resume from "./Resume";

const Apply = () => {
  const [status, setStatus] = useState("initial");
  return (
    <div>
      <Topbar />
      <Box sx={{ m: 10 }}>
        {status === "initial" && <Cv setStatus={setStatus} />}
        {status === "cover" && <Resume setStatus={setStatus} />}
      </Box>
    </div>
  );
};

export default Apply;

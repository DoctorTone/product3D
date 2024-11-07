import React from "react";
import { Typography } from "@mui/material";

const Text = () => {
  return (
    <div id="text" className="panel">
      <Typography variant="h3" color="white" sx={{ mb: 3 }}>
        Your Company
      </Typography>
      <Typography variant="h5" color="white">
        Promote your company message here
      </Typography>
    </div>
  );
};

export default Text;

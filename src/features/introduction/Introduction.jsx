import React from "react";
import "./introduction.scss";
import { Box } from "@mui/material";

function Introduction() {
  return (
    <div class="introduction">
      <Box className="intro-content">
        <h5>Hi</h5>
        <Box>
          <h5>This is</h5> <h4>Sanjay Anuchuri</h4>
        </Box>
      </Box>
    </div>
  );
}

export default Introduction;

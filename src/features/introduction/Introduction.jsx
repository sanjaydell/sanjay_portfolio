import React from "react";
import "./introduction.scss";
import { Box } from "@mui/material";

function Introduction() {
  return (
    <div class="introduction" id="introduction">
      <Box className="intro-content">
        <Box>
          <h5>Hi</h5>
          <h4>I am Sanjay Anuchuri</h4>
          <Box className="profession-box">
            <h5>I am a</h5> <h4 className="profession"></h4>
          </Box>
        </Box>
        <Box className="image-box">
          <img src="/portfolio_image.png" alt="image" className="image"/>
        </Box>
      </Box>
    </div>
  );
}

export default Introduction;

import React from "react";
import "./introduction.scss";
import { Box } from "@mui/material";

function Introduction() {
  return (
    <div class="introduction" id="introduction">
      <Box className="intro-content">
        <Box className="description">
          <h1 className="profession"></h1>
          <h4 style={{ width: "70%" }}>
            Hi, I am Sanjay Anuchuri. A professional Fullstack developer with 2.5
            years of experience.
          </h4>
        </Box>
        <Box className="image-box">
          <img src="/portfolio_image.png" alt="image" className="image" />
        </Box>
      </Box>
    </div>
  );
}

export default Introduction;

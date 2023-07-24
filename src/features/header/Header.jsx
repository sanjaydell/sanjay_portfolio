import React from "react";
import "./header.scss";
import { Button } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <h2 style={{ margin: '10px' }}>Sanjay Anuchuri</h2>
      </div>
      <div className="right">
        <Button className="header-button" href="#introduction">
          Intro
        </Button>
        <Button className="header-button" href="#about">
          About
        </Button>
        <Button className="header-button" href="#projects">
          Projects
        </Button>
        <Button className="header-button" href="#experience">
          Experience
        </Button>
        <Button className="header-button" href="#contacts">
          Contact
        </Button>
      </div>
    </div>
  );
}

export default Header;

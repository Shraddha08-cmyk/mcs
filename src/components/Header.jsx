import React from "react";
import logo from "../images/image 1.png";
import { Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "150px",
      }}
    >
      <img src={logo} alt="logo" />
      <Typography
        variant="h6"
        style={{ fontSize: 15, fontWeight: "bold", display: "flex" }}
      >
        Solutions
        <KeyboardArrowDownIcon style={{ color: "rgba(0, 118, 206, 1)" }} />
      </Typography>
      <Typography
        variant="h6"
        style={{ fontSize: 15, fontWeight: "bold", display: "flex" }}
      >
        Features
        <KeyboardArrowDownIcon style={{ color: "rgba(0, 118, 206, 1)" }} />
      </Typography>
      <Typography
        variant="h6"
        style={{ fontSize: 15, fontWeight: "bold", display: "flex" }}
      >
        About
        <KeyboardArrowDownIcon style={{ color: "rgba(0, 118, 206, 1)" }} />
      </Typography>
      <div style={{ display: "flex", gap: 10 }}>
        <Button
          variant="outlined"
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            borderRadius: 10,
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            borderRadius: 10,
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Header;

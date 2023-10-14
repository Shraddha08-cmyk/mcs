import { Typography } from "@mui/material";
import React from "react";
import JoinCards from "./JoinCards";

const Joins = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ fontWeight: "bolder" }}>
          Want to{" "}
          <span
            style={{
              background: `linear-gradient(to right, rgba(0, 118, 206, 1), rgba(148, 0, 211, 1))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Join
          </span>{" "}
          Us?
        </Typography>
        <Typography style={{ fontSize: "24px", fontWeight: 400 }}>
          To remain with us, it is essential that you diligently follow the
          steps provided
        </Typography>
      </div>
      <JoinCards />
      <Typography
        style={{
          fontSize: "15px",
          fontWeight: 400,
          width: "78vw",
          marginLeft: "150px",
        }}
      >
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span style={{ fontWeight: 700 }}>every day</span> until you file the
        form . There is no maximum penalty amount. So, if you don't file the
        form for a year, you will owe ₹73,000 per form
      </Typography>
    </div>
  );
};

export default Joins;

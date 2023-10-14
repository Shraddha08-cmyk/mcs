import React from "react";
import logo2 from "../images/img2 (2).png";
import { Typography } from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgba(0, 118, 206, 1), rgba(148, 0, 211, 1))`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 100,
          marginTop: 10,
        }}
      >
        <div>
          <img src={logo2} alt="logo" />
          <Typography
            style={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: 400,
              width: "17vw",
            }}
          >
            India's first platform dedicated to simplifying partner search
          </Typography>
        </div>
        <div>
          <Typography
            style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}
          >
            COMPANY
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            About
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Pricing
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Careers
          </Typography>
        </div>
        <div>
          <Typography
            style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}
          >
            SOLUTIONS
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Search
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Connect
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Research
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Academy
          </Typography>
        </div>
        <div>
          <Typography
            style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}
          >
            RESOURCES
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Blogs
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Forms
          </Typography>
        </div>
        <div>
          <Typography
            style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}
          >
            SUPPORT
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Help
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Contact Us
          </Typography>
        </div>
        <div>
          <Typography
            style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}
          >
            LEGAL
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Privacy
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Terms
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#fff" }}>
            Accessability
          </Typography>
        </div>
      </div>
      <div style={{ border: "1px solid rgba(255, 255, 255, 1)" }}></div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Typography style={{ color: "#fff", fontSize: "12px" }}>
          Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
          Maharashtra
        </Typography>
        <div style={{ display: "flex", gap: 10 }}>
          <FacebookRounded style={{ color: "#fff" }} />
          <Instagram style={{ color: "#fff" }} />
          <LinkedIn style={{ color: "#fff" }} />
          <WhatsApp style={{ color: "#fff" }} />
        </div>
      </div>
      <div
        style={{ backgroundColor: "black", color: "#fff", textAlign: "center" }}
      >
        <Typography style={{ fontSize: "12px" }}>
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

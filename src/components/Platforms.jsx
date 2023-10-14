import { Typography } from "@mui/material";
import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import teacher from "../images/Teacher.png";
import student from "../images/Student.png";
import chat1 from "../images/Chat-bubble1.png";
import chat2 from "../images/Chat-bubble2.png";
import chat3 from "../images/Chat-bubble3.png";
import chat4 from "../images/Chat-bubble 4.png";
import chat5 from "../images/Chat-bubble 5.png";

const Platforms = () => {
  return (
    <div
      style={{
        marginTop: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", width: "28vw" }}
          >
            <span
              style={{
                background: `linear-gradient(to right, rgba(0, 118, 206, 1), rgba(148, 0, 211, 1))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              All-in-One
            </span>{" "}
            platform that Makes Easier
          </Typography>
          <Typography
            style={{ fontSize: "24px", fontWeight: 400, width: "40vw" }}
          >
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            marginTop: 20,
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", width: "15vw" }}>
              <img src={icon1} alt="icon" style={{ height: "64px" }} />
              <Typography>
                <span style={{ fontWeight: 700 }}>SEARCH</span> for vital
                company information{" "}
              </Typography>
            </div>
            <div style={{ display: "flex", width: "16vw" }}>
              <img src={icon2} alt="icon" style={{ height: "64px" }} />
              <Typography>
                <span style={{ fontWeight: 700 }}>CONNECT</span> with the
                resources to meet your business needs
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", width: "15vw" }}>
              <img src={icon3} alt="icon" style={{ height: "64px" }} />
              <Typography>
                <span style={{ fontWeight: 700 }}>RESEARCH</span> and generate
                reports that drive growth
              </Typography>
            </div>
            <div style={{ display: "flex", width: "17vw" }}>
              <img src={icon4} alt="icon" style={{ height: "64px" }} />
              <Typography>
                <span style={{ fontWeight: 700 }}>ACADEMY</span> to give you the
                skills for success in your career
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "25vw" }}>
            <img src={chat1} alt="chat" style={{ width: "278px" }} />
            <img src={chat2} alt="chat" style={{ width: "315px" }} />
            <img src={chat3} alt="chat" style={{ width: "332px" }} />
          </div>
          <div>
            <img src={student} alt="student" />
          </div>
        </div>
        <img
          src={chat4}
          alt="chat"
          style={{ width: "342px", marginLeft: 70 }}
        />
        <img
          src={chat5}
          alt="chat"
          style={{ width: "142px", marginLeft: 70 }}
        />
        <img src={teacher} alt="teacher" style={{ width: "306px" }} />
      </div>
    </div>
  );
};

export default Platforms;

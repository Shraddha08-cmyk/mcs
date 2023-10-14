import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const JoinCards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 40,
        marginTop: 30,
        background: "rgba(221, 243, 255, 1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 5,
          justifyContent: "center",
          gap: 40,
        }}
      >
        <Card
          style={{
            height: "35vh",
            width: "25vw",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography style={{ fontWeight: 700 }}>
              Commencement of business
            </Typography>
            <Typography style={{ fontWeight: 400 }}>
              Invested shareholders must confirm payment and office address
            </Typography>
            <Card
              style={{ background: "lightgray", height: "15vh", marginTop: 12 }}
            >
              <CardContent
                style={{ display: "flex", justifyContent: "center", gap: 25 }}
              >
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(0, 118, 206, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Due date
                  </Typography>
                  <Typography
                    style={{ fontWeight: 400, fontSize: "13px", width: "66px" }}
                  >
                    Within 180 days
                  </Typography>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(255, 102, 102, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Penalty fees
                  </Typography>
                  <Typography style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: 700 }}>₹50,000</span> for the
                    company
                  </Typography>
                  <Typography style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: 700 }}>₹1,000</span> /day for
                    directors
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card
          style={{
            height: "35vh",
            width: "25vw",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography style={{ fontWeight: 700 }}>
              Auditor Appointment{" "}
            </Typography>
            <Typography style={{ fontWeight: 400 }}>
              Company informs new auditor and submits ADT.1 form to ROC.{" "}
            </Typography>
            <Card
              style={{ background: "lightgray", height: "15vh", marginTop: 12 }}
            >
              <CardContent
                style={{ display: "flex", justifyContent: "center", gap: 25 }}
              >
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(0, 118, 206, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Due date
                  </Typography>
                  <Typography
                    style={{ fontWeight: 400, fontSize: "13px", width: "66px" }}
                  >
                    Within 30 days
                  </Typography>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(255, 102, 102, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Penalty fees
                  </Typography>
                  <Typography style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: 700 }}>₹300</span> for the
                    company
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card
          style={{
            height: "35vh",
            width: "25vw",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography style={{ fontWeight: 700 }}>DIN eKYC </Typography>
            <Typography style={{ fontWeight: 400 }}>
              Directors share personal information for identification &
              verification{" "}
            </Typography>
            <Card
              style={{ background: "lightgray", height: "15vh", marginTop: 12 }}
            >
              <CardContent
                style={{ display: "flex", justifyContent: "center", gap: 25 }}
              >
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(0, 118, 206, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Due date
                  </Typography>
                  <Typography
                    style={{ fontWeight: 400, fontSize: "13px", width: "66px" }}
                  >
                    Every Year{" "}
                  </Typography>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(255, 102, 102, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Penalty fees
                  </Typography>
                  <Typography style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: 700 }}>₹5,000</span> one time
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 5,
          justifyContent: "center",
          gap: 40,
        }}
      >
        <Card
          style={{
            height: "35vh",
            width: "25vw",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography style={{ fontWeight: 700 }}>DPT-3 </Typography>
            <Typography style={{ fontWeight: 400 }}>
              Companies report money taken from people to ROC; auditors confirm
              details.{" "}
            </Typography>
            <Card
              style={{ background: "lightgray", height: "15vh", marginTop: 12 }}
            >
              <CardContent
                style={{ display: "flex", justifyContent: "center", gap: 25 }}
              >
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(0, 118, 206, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Due date
                  </Typography>
                  <Typography
                    style={{ fontWeight: 400, fontSize: "13px", width: "66px" }}
                  >
                    Within 30 days{" "}
                  </Typography>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(255, 102, 102, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Penalty fees
                  </Typography>
                  <Typography style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: 700 }}>₹300</span> per month
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card
          style={{
            height: "35vh",
            width: "25vw",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography style={{ fontWeight: 700 }}>MCA Form AOC-4 </Typography>
            <Typography style={{ fontWeight: 400 }}>
              It's like an official report card for a company's documents{" "}
            </Typography>
            <Card
              style={{ background: "lightgray", height: "15vh", marginTop: 12 }}
            >
              <CardContent
                style={{ display: "flex", justifyContent: "center", gap: 25 }}
              >
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(0, 118, 206, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Due date
                  </Typography>
                  <Typography
                    style={{ fontWeight: 400, fontSize: "13px", width: "76px" }}
                  >
                    On or Before 30th November
                  </Typography>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(255, 102, 102, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Penalty fees
                  </Typography>
                  <Typography style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: 700 }}>₹200</span> per day (No
                    upper limit)*
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card
          style={{
            height: "35vh",
            width: "25vw",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography style={{ fontWeight: 700 }}>MCA Form MGT-7 </Typography>
            <Typography style={{ fontWeight: 400 }}>
              Companies must annually report activities and finances to the
              registrar.{" "}
            </Typography>
            <Card
              style={{ background: "lightgray", height: "15vh", marginTop: 12 }}
            >
              <CardContent
                style={{ display: "flex", justifyContent: "center", gap: 25 }}
              >
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(0, 118, 206, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Due date
                  </Typography>
                  <Typography
                    style={{ fontWeight: 400, fontSize: "13px", width: "76px" }}
                  >
                    On or Before 31st December
                  </Typography>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Typography
                    style={{
                      color: "rgba(255, 102, 102, 1)",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Penalty fees
                  </Typography>
                  <Typography style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: 700 }}>₹300</span> per day (No
                    upper limit)*
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>{" "}
      </div>
    </div>
  );
};

export default JoinCards;

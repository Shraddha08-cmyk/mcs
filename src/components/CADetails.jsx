import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import data from "../CA.json";
import { useParams } from "react-router-dom";
import { DateRange, Grade } from "@mui/icons-material";

const CADetails = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  console.log("CA id:", numericId);
  const caDetailsList = data.filter((ca) => ca.id === numericId);
  console.log("CA Details:", caDetailsList);

  if (caDetailsList.length === 0) {
    return (
      <div>
        <Typography variant="h6">CA not found</Typography>
      </div>
    );
  }

  return (
    <div>
      {caDetailsList.map((ca, index) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {" "}
          <Typography variant="h5" key={index} style={{ fontWeight: 700 }}>
            {ca.name}
          </Typography>
          <Typography style={{ width: "24vw" }}>{ca.intro}</Typography>
          <Typography style={{ display: "flex", gap: 5 }}>
            <Grade style={{ color: "rgba(0, 118, 206, 1)" }} />
            <span style={{ color: "rgba(0, 118, 206, 1)" }}>{ca.rating}</span>(
            {ca.reviewCount})
          </Typography>
          <Card style={{ height: "25vh", width: "25vw" }}>
            <CardContent
              style={{ display: "flex", flexDirection: "column", gap: 15 }}
            >
              <Typography
                component={"div"}
                style={{ display: "flex", gap: 63 }}
              >
                <Typography>{ca.taskComplexity}</Typography>
                <Typography style={{ fontWeight: 700 }}>{ca.price}</Typography>
              </Typography>
              <Typography style={{ display: "flex", gap: 10 }}>
                <DateRange style={{ color: "rgba(0, 118, 206, 1)" }} />
                {ca.deliveryTime}
              </Typography>
              <Typography component="div" style={{ display: "flex", gap: 36 }}>
                <Button
                  variant="contained"
                  style={{ textTransform: "capitalize" }}
                >
                  Request Proposal
                </Button>
                <Button
                  variant="outlined"
                  style={{ textTransform: "capitalize" }}
                >
                  Chat With Me
                </Button>
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ height: "35vh", width: "25vw" }}>
            <CardContent
              style={{ display: "flex", gap: 5, flexDirection: "column" }}
            >
              <Typography variant="h5" style={{ fontWeight: 700 }}>
                What People Says
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                I cannot express enough gratitude for the support Micheal has
                provided in managing my personal finances. Their attention to
                detail and deep understanding of financial markets has ensured
                that my investments are in safe hands. I highly recommend their
                services to anyone seeking financial guidance.
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CADetails;

import React from "react";
import data from "../CA.json";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const CAAbout = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  console.log("CA id:", numericId);
  const caDetailsList = data.filter((ca) => ca.id === numericId);
  console.log("CA Details:", caDetailsList);

  return (
    <div style={{ width: "40vw" }}>
      {caDetailsList.map((ca, index) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "column", gap: 15 }}
        >
          <img
            src={ca.image}
            alt={ca.name}
            style={{ height: "45vh", width: "40vw", borderRadius: 10 }}
          />
          <Typography variant="h5" style={{ fontWeight: 700 }}>
            About&nbsp;{ca.name}
          </Typography>
          <Typography
            component={"div"}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <Typography
                style={{
                  color: "rgba(153, 153, 153, 1)",
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >
                FROM
              </Typography>
              <Typography>{ca.about.from}</Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "rgba(153, 153, 153, 1)",
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >
                PARTNER SINCE
              </Typography>
              <Typography>{ca.about.partnerSince}</Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "rgba(153, 153, 153, 1)",
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >
                AVERAGE RESPONSE TIME{" "}
              </Typography>
              <Typography>{ca.about.averageResponseTime}</Typography>
            </div>
          </Typography>
          <Typography
            style={{
              color: "rgba(153, 153, 153, 1)",
              fontWeight: 700,
              fontSize: "13px",
            }}
          >
            ABOUT
          </Typography>
          <Typography>{ca.about.description}</Typography>
          <Typography
            component={"div"}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <Typography
                style={{
                  color: "rgba(153, 153, 153, 1)",
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >
                SERVICES I OFFER
              </Typography>
              <ul>
                {ca.about.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <Typography
                style={{
                  color: "rgba(153, 153, 153, 1)",
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >
                WHY ME?{" "}
              </Typography>
              <ul>
                {ca.about.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default CAAbout;

import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import frame1 from "../images/Frame1.png";
import frame2 from "../images/Frame2.png";
import frame3 from "../images/Frame3.png";
import data from "../CA.json";
import { Link, NavLink } from "react-router-dom";

const Partners = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  // const navigateToAbout = (ca) => {
  //   push(`/about/${ca.id}`);
  // };

  const handleChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);

    if (newSearchQuery.trim() === "") {
      setSearchSuggestions([]);
    } else {
      const filteredData = data.filter((ca) =>
        ca.name.toLowerCase().includes(newSearchQuery.toLowerCase())
      );
      setSearchSuggestions(filteredData);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 150,
        marginTop: 100,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bolder", width: "35vw" }}
        >
          Find{" "}
          <span
            style={{
              background: `linear-gradient(to right, rgba(0, 118, 206, 1), rgba(148, 0, 211, 1))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Partners
          </span>{" "}
          (CAs) available online
        </Typography>
        <Typography style={{ color: "rgba(97, 97, 97, 1)", width: "39vw" }}>
          <span style={{ fontWeight: "bold" }}>CONNECT</span> with us where your
          services are listed and visible to a myriad of businesses seeking CA’s
          for compliance support
        </Typography>
        <div style={{ position: "relative" }}>
          <TextField
            variant="outlined"
            label="Search by name"
            style={{ width: "25vw" }}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            style={{
              height: "8vh",
              textTransform: "capitalize",
              width: "10vw",
            }}
          >
            Search
          </Button>
          {searchSuggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "25vw",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 1,
              }}
            >
              <Card>
                <CardContent>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    {searchSuggestions.map((ca, index) => (
                      <li key={index} style={{ textDecoration: "none" }}>
                        <NavLink to={`/about/${ca.id}`}>
                          <Typography>{ca.name}</Typography>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <img src={frame1} alt="frame" style={{ marginTop: "40px" }} />
        <img src={frame2} alt="frame" style={{ marginBottom: "40px" }} />
        <img src={frame3} alt="frame" style={{ marginTop: "40px" }} />
      </div>
    </div>
  );
};

export default Partners;

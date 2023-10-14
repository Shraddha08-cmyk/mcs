import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import CADetails from "./CADetails";
import CAAbout from "./CAAbout";
import Footer from "./Footer";

const About = () => {
  const id = useParams().id;
  console.log("about", id);
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 100,
          marginTop: 10,
        }}
      >
        <CADetails />
        <CAAbout />
      </div>
      <Footer style={{ marginTop: 10 }} />
    </div>
  );
};

export default About;

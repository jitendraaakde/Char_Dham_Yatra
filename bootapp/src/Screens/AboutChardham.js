import React from "react";
import { Link } from "react-router-dom";
import Kedarnath from "../image/Kedarnath.jpeg";
import Badrinath from "../image/Badrinath.jpeg";
import Gangotri from "../image/Gangotri.jpeg";
import Yamunotri_Feature from "../image/Yamunotri_feature.jpg";
import AboutDham from "./AboutDham";

export default function AboutChardham() {
  return (
    <>
      <div>
        <h2>EXPLORE MORE</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "2rem 1.1rem",
          }}
        >
          <Link to="/about/kedarnath" className="cardHover">
            <img
              src={Kedarnath}
              alt=""
              style={{
                height: "14rem",
                width: "14rem",
                margin: "1rem 1.1rem 1.1rem 1.1rem",
                cursor: "pointer",
                borderRadius: "1rem",
              }}
            />
          </Link>
          <Link to="/about/badrinath" className="cardHover">
            <img
              src={Badrinath}
              alt=""
              style={{
                height: "14rem",
                width: "14rem",
                margin: "1rem 1.1rem 1.1rem 1.1rem",
                cursor: "pointer",
                borderRadius: "1rem",
              }}
            />
          </Link>
          <Link to="/about/gangotri" className="cardHover">
            <img
              src={Gangotri}
              alt=""
              style={{
                height: "14rem",
                width: "14rem",
                margin: "1rem 1.1rem 1.1rem 1.1rem",
                cursor: "pointer",
                borderRadius: "1rem",
              }}
            />
          </Link>
          <Link to="/about/yamunotri" className="cardHover">
            <img
              src={Yamunotri_Feature}
              alt=""
              style={{
                height: "14rem",
                width: "14rem",
                margin: "1rem 1.1rem 1.1rem 1.1rem",
                cursor: "pointer",
                borderRadius: "1rem",
              }}
            ></img>
          </Link>
        </div>
      </div>
      <AboutDham />
    </>
  );
}

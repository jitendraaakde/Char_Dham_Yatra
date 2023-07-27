import React from "react";
import "../Components/Cart.css";
import "../assets/CSS/HospitalCard.css";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
// import "../Components/Cart.css";

export default function Hospital({ hospi }) {
  return (
    <>
      <Container>
        <div className="hospital">
          <div className="hospital-container">
            <img src={hospi.img} alt="" />
            <h3>{hospi.name}</h3>
            <Link to={hospi.location}>
              <button className="hospi-button">Direction</button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import './Cart.css';

export default function ImageCart() {
  return ( 
    <>
      <div class="chardhamimg">
        <Link to="https://heliservices.uk.gov.in/" style={{textDecoration: "none"}}>
          <img src="/images/helicopter.png" alt="" />
        <h3 className="b-heading">By Air</h3>
        </Link>
        <Link to="https://www.makemytrip.com/bus-tickets/a-one-travel-agency-bus-booking.html" style={{textDecoration: "none"}}>
          <img src="/images/bus.png" alt="" />
        <h3 className="b-heading">By Bus</h3>
        </Link>
        <Link to="https://www.redbus.in/car-rental/" style={{textDecoration: "none"}}>
          <img src="/images/thar.webp" alt="" />
        <h3 className="b-heading">By Car</h3>
        </Link>
        <Link to="https://www.irctc.co.in/nget/train-search" style={{textDecoration: "none"}}>
          <img src="/images/train.png" alt="" />
        <h3 className="b-heading">By Train</h3>
        </Link>
      </div>
    </>
  );
}

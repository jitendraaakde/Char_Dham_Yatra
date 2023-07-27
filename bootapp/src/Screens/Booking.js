import React from "react";
import ImageCart from "../Components/ImageCart";

export default function Booking() {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "30px",
          textTransform: "uppercase",
          wordSpacing: "3.5px",
          borderRadius: "1rem",
          background: "rgb(68, 187, 227)",
          margin: "50px auto",
          padding: "1rem",
          color: "white"
        }}
      >
        Bookings As Your Convenience
      </h2>
      <ImageCart />
    </div>
  );
}

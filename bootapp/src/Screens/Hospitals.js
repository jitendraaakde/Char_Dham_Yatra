import React from "react";
import Hospital from "./Hospital";
import { HospitalData } from "../Data/HospitalData.js";
import "../Components/Cart.css";

export default function Hospitals() {
  return (
    <div style={{display: "flex", flexDirection: "row", overflow: "hidden", flexWrap: "wrap", justifyContent: "center", alignItems: 'center', width: "100%"}}>
      {HospitalData.map((hospital, id) => {
        return (
          <div>
            <Hospital hospi={hospital} id={id}/>
          </div>
        );
      })}
    </div>
  );
}

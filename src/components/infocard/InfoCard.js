import "./InfoCard.css";
import BillValue from "../billvalue/BillValue";
import SelectTip from "../selecttip/SelectTip";
import PeopleAmount from "../peopleAmount/PeopleAmount";
import { useState } from "react";
import React from "react";

export default function InfoCard() {
  

 


  return (
    <div className="info__card">
      <BillValue />
      <SelectTip />
      <PeopleAmount />
    </div>
  );
}

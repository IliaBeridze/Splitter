import "./PeopleAmount.css";
import React, { useContext, useState, useSyncExternalStore } from "react";
import MyIcone from "../icone/icone.png";
import { MyContext } from "../context/Context";
export default function PeopleAmount(props) {
  const context =useContext(MyContext)
  return (
    <div className="people__amount">
      <p className="people__amount-text">Number of People</p>
      <div className="people__amount-value">
        <img className="people__amount-icone" src={MyIcone} alt="###" />
        <input
          className="people__amount-input"
          type="number"
          placeholder="0.00"
          value={context.numberOfPeople}
          onChange={(e) => context.chaneNumberOfPeople(e)}
        />
      </div>
    </div>
  );
}

import "./ResultCard.css";
import Total from "../Total/Total";
import Reset from "../Reset/Reset";
import React, { useContext } from "react";
import { MyContext } from "../context/Context";
export default function ResultCard() {
  const context = useContext(MyContext);
  return (
    <div className="result__card">
      <Total bill={context.rezultAmountPerson} title="Tip Amount" />
      <Total bill={context.rezultTotalPerson} title="Total" />

      <Reset />
    </div>
  );
}

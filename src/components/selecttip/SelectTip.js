import "./SelectTip.css";
import React, { useContext, useState } from "react";
import { MyContext } from "../context/Context";
export default function SelectTip(props) {
  const context = useContext(MyContext);
  let numbersArray = [5, 10, 15, 25, 50];
  // const [costum, setCostum] = useState("");
  return (
    <div className="select-tip">
      <p className="select__tip-text">Select Tip %</p>
      <div>
        {numbersArray.map((value) => {
          return (
            <button
              className="select__tip-btn"
              key={value}
              value={value}
              onClick={(e) => {
                context.buttonValue(e.target.value);
              }}
              style={{
                background: context.tipNumber == value ?  "#26C2AE": "#00474B",
              }}
            >
              {value}%
            </button>
          );
        })}
        <input
          type="number"
          className="select__tip-input"
          placeholder="costum"
          onChange={(e) => {
            context.costumValue(e.target.value);
            // context.costum(e.target.value);
            
          }}
          value={context.costum}
        />
      </div>
    </div>
  );
}

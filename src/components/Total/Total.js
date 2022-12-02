import "./Total.css";
import React, { useContext, useState } from "react";
import { MyContext } from "../context/Context";
export default function Total(props) {
  const context =useContext(MyContext)


// const [result,setResult]= useState("")
// function calculate (){
//   setResult((context.billNumber*context.tipNumber)/100/context.numberOfPeople)
// }

//   let rezultAmountPerson = ((context.billNumber*context.tipNumber)/100/context.numberOfPeople)
//   let rezultTotalPerson =  ((context.billNumber*context.tipNumber/100+context.billNumber)/context.numberOfPeople)
  return (
    <div className="total-info">
      <div>
        <h2 className="total__info-heading">{props.title}</h2>
        <p className="total__info-text">/ person</p>
      </div>

      <div className="total__bill-onperson">
        $ {props.bill}
        {/* {result} */}
        {/* {((context.billNumber*context.tipNumber)/100/context.numberOfPeople)}
       { ((context.billNumber*context.tipNumber/100+context.billNumber)/context.numberOfPeople)} */}
      </div>
    </div>
  );
}

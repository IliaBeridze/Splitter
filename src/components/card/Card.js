import "./Card.css";
import InfoCard from "../infocard/InfoCard";
import ResultCard from "../resultcard/ResultCard";
import React from "react";
import { MyContext } from "../context/Context";
import { useState,useEffect } from "react";


export default function Card() {
  const [billNumber, setBillNumber] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipNumber, setTipNumber] = useState();
  const [costum, setCostum] = useState("costum");
  const [realTip, setRealTip] = useState();
  const [totalPerson, setTotalPerson] = useState('0.00');
  const [tipPerson, setTipPerson] = useState('0.00');

  
  useEffect(() => {
    const totalPersonValue = calculateTotalResult();
    setTotalPerson(`${totalPersonValue}`.substring(0, 5));

    const tipPersonValue = calculateTipResult();
    setTipPerson(`${tipPersonValue}`.substring(0, 5));

  }, [realTip, billNumber, numberOfPeople])

  function resetAll() {
    setTipNumber();
    setNumberOfPeople(0);
    setBillNumber(0);
    setCostum("");
  }

  function costumValue(value) {
    setCostum(value);
    setRealTip(value);
    // console.log(costum);
  }
  function buttonValue(value) {
    setTipNumber(value);
    setRealTip(value);
    // console.log(value.target.value);
  }
  function changeNumberOfBill(e) {
    setBillNumber(parseFloat(e.target.value));
    // console.log(billNumber);
  }
  function chaneNumberOfPeople(e) {
    setNumberOfPeople(parseFloat(e.target.value));
    // console.log(numberOfPeople);
  }
  //   const [bnnClick,setBtnClick]= useState(false)
  // function clickBtn(){
  //   setBtnClick(true)
  // }

  function rezultAmountPerson() {
    // if (billNumber > 0 && numberOfPeople > 0) {
    //   return ((billNumber * tipNumber) / 100 / numberOfPeople).toFixed(2);
    // } else if (billNumber >= " " && numberOfPeople >= " ") {
    //   return (rezultAmountPerson = "0,00");
    // }
    // else if (billNumber>0 && numberOfPeople>0 && costum===costum){
    // return ((billNumber*costum)/100/numberOfPeople).toFixed(2)
    // }

    console.log(numberOfPeople);
    console.log(billNumber);
    // console.log(tipNumber);
    // console.log(costum);
    console.log(realTip);
  }

  function calculateTotalResult() {
    if (billNumber && numberOfPeople && realTip) {
      return ((billNumber * realTip) / 100 + billNumber) / numberOfPeople;
    }

    return '0.00';
  }

  function calculateTipResult() {
    if (billNumber && numberOfPeople && realTip) {
      return ((billNumber * realTip) / 100) / numberOfPeople;
    }

    return '0.00';
  }

  // function rezultTotalPerson() {
  //   if (billNumber >= 0 && numberOfPeople >= " ") {
  //     return (rezultTotalPerson = "0,00");
  //   } else {
  //     return (
  //       ((billNumber * tipNumber) / 100 + billNumber) /
  //       numberOfPeople
  //     ).toFixed(2);
  //   }
  // }

  // console.log(rezultAmountPerson);
  // console.log(rezultTotalPerson);

  return (
    <div className="card">
      <MyContext.Provider
        value={{
          number: billNumber,
          changeNumberOfBill: changeNumberOfBill,
          numberOfPeople: numberOfPeople,
          chaneNumberOfPeople: chaneNumberOfPeople,
          buttonValue: buttonValue,
          tipNumber: tipNumber,
          rezultAmountPerson: tipPerson,
          rezultTotalPerson: totalPerson,
          costum: costum,
          costumValue: costumValue,
          resetAll: resetAll,
        }}
      >
        <InfoCard />
        <ResultCard />
      </MyContext.Provider>
    </div>
  );
}

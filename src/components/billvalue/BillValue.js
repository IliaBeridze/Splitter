import "./BillValue.css";
import { MyContext } from "../context/Context";
import { useContext } from "react";
import Myicone from "../icone/$.png"
export default function BillValue(props) {
  const context = useContext(MyContext)
  return (
    <div className="bill-value">
      <p className="bill-text">Bill</p>
      <div className="bill__value-box">
        
        <img className="bill__value-icone"  src={Myicone} alt="###" />
        <input
          className="bill__value-input"
          value={context.number}
          onChange={(e) => context.changeNumberOfBill(e)}
          type="number"
          placeholder="0,00"
        />
      </div>
    </div>
  );
}

import { useSelector } from "react-redux";
import './InputFields.css';
import RangeInput from "./rangeInput/RangeInput";
import StringInput from "./stringInput/StringInput";

export default function InputFields(props) {
    const loan = useSelector((state) => state.loan);
    return (
        <div className="InputFields">
          <h3>Saistības nsosaukums</h3>
          <StringInput value={loan.loanName} loanDataProperty="loanName"/>

          <h3>Aizdevuma pamatsumma eiro</h3>
          <RangeInput min="1" max="100000" value={loan.loanAmount} loanDataProperty="loanAmount"/>

          <h3>Aizdevuma termiņš menešos</h3>
          <RangeInput min="1" max="120" value={loan.loanTime} loanDataProperty="loanTime"/> 

          <h3>Aizdevuma procenti</h3>
          <RangeInput min="0.01" max="20" step="0.01" value={loan.loanPercent} loanDataProperty="loanPercent"/>
        </div>
    )
}